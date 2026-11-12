(() => {
  'use strict';

  const DOMAINES = [
    { id: 'algebre', nom: 'Algèbre' },
    { id: 'analyse', nom: 'Analyse' },
    { id: 'probabilites', nom: 'Probabilités' },
  ];

  const { chapitres = {}, modeles = [] } = window.CAHIER || {};
  const view = document.getElementById('view');
  const input = document.getElementById('q');
  const racine = document.documentElement;
  const corpsPage = document.body;

  const MACROS = {
    '\\R': '\\mathbb{R}', '\\N': '\\mathbb{N}', '\\Z': '\\mathbb{Z}',
    '\\Q': '\\mathbb{Q}', '\\C': '\\mathbb{C}', '\\K': '\\mathbb{K}',
    '\\E': '\\mathbb{E}', '\\V': '\\mathbb{V}', '\\P': '\\mathbb{P}',
    '\\ent': '\\llbracket #1,#2 \\rrbracket',
    '\\Vect': '\\operatorname{Vect}', '\\rg': '\\operatorname{rg}', '\\Sp': '\\operatorname{Sp}',
    '\\fluo': '\\htmlClass{fluo}{#1}', '\\rouge': '\\htmlClass{rouge}{#1}',
  };

  const sansAccent = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const norm = (s) => sansAccent(s).toLowerCase().replace(/œ/g, 'oe');
  const slug = (s) => norm(s).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const echappe = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const MATH = /\$\$[\s\S]+?\$\$|\$(?:\\.|[^$\\\n])+\$/g;
  const PUA = 0xe000;

  function maths(src, display) {
    if (!window.katex) return echappe(src);
    return window.katex.renderToString(src, { displayMode: display, throwOnError: false, strict: false, trust: true, macros: { ...MACROS } });
  }

  // Marque les termes cherchés dans le texte, jamais dans les formules.
  function surligne(texte, termes) {
    if (!termes || !termes.length) return texte;
    const chars = Array.from(texte);
    const plat = chars.map((c) => { const n = norm(c); return n.length === 1 ? n : c; }).join('');
    if (plat.length !== texte.length) return texte;
    const marques = new Array(plat.length).fill(false);
    for (const t of termes) {
      let i = plat.indexOf(t);
      while (i !== -1) {
        marques.fill(true, i, i + t.length);
        i = plat.indexOf(t, i + t.length);
      }
    }
    let sortie = '';
    let ouvert = false;
    chars.forEach((c, i) => {
      if (marques[i] !== ouvert) { sortie += marques[i] ? '\u0001' : '\u0002'; ouvert = marques[i]; }
      sortie += c;
    });
    return sortie + (ouvert ? '\u0002' : '');
  }

  function enLigne(src, termes) {
    const formules = [];
    const sansMaths = src.replace(MATH, (m) => {
      formules.push(m.startsWith('$$') ? maths(m.slice(2, -2), true) : maths(m.slice(1, -1), false));
      return String.fromCharCode(PUA + formules.length - 1);
    });
    return echappe(surligne(sansMaths, termes))
      .replace(/\*\*(.+?)\*\*/gs, '<strong>$1</strong>')
      .replace(/__(.+?)__/gs, '<u>$1</u>')
      .replace(/==(.+?)==/gs, '<span class="fluo">$1</span>')
      .replace(/\[\[(.+?)\]\]/gs, '<span class="encadre">$1</span>')
      .replace(/\{\{(.+?)\}\}/gs, '<span class="rouge">$1</span>')
      .replace(/\u0001/g, '<mark>')
      .replace(/\u0002/g, '</mark>')
      .replace(/\n/g, '<br>')
      .replace(/[\uE000-\uF8FF]/g, (c) => formules[c.charCodeAt(0) - PUA]);
  }

  // Un bloc « !! » qui commence par Exercice, Exemple ou Proposition est un énoncé.
  const ENONCE = /^!!\s*\*\*(Exercices?|Exemples?|Proposition)\b/;
  const NOTE = /^\|\|(.+?)\|\|\s*/;

  function paragraphe(bloc, i, termes, dansEnonce) {
    let net = bloc.replace(/\n?(\$\$[\s\S]+?\$\$)\n?/g, '$1');
    const rang = `style="--c:${Math.min(i, 12)}"`;
    const annotation = net.match(NOTE);
    const note = annotation ? `<span class="note">${enLigne(annotation[1])}</span>` : '';
    if (annotation) net = net.slice(annotation[0].length);
    if (net.startsWith('!!')) {
      const texte = enLigne(net.slice(2).trim(), termes);
      return dansEnonce ? `<p ${rang}>${note}${texte}</p>` : `<p class="enonce" ${rang}>${note}${texte}</p>`;
    }
    if (/^>\s?/.test(net)) return `<p class="retrait" ${rang}>${note}${enLigne(net.replace(/^>\s?/gm, ''), termes)}</p>`;
    return `<p ${rang}>${note}${enLigne(net, termes)}</p>`;
  }

  // Sépare le corps en blocs « Énoncé » et « Rédaction », dans l'ordre du texte.
  function sections(src, termes) {
    const groupes = [];
    src.trim().split(/\n\s*\n/).forEach((bloc) => {
      const type = ENONCE.test(bloc.replace(NOTE, '')) ? 'enonce' : 'redaction';
      const dernier = groupes[groupes.length - 1];
      if (dernier && dernier.type === type) dernier.blocs.push(bloc);
      else groupes.push({ type, blocs: [bloc] });
    });
    let i = 0;
    return groupes.map((g) => {
      const html = g.blocs.map((b) => paragraphe(b, i++, termes, g.type === 'enonce')).join('');
      return g.type === 'enonce'
        ? `<section class="bloc-enonce" aria-label="Énoncé"><p class="etiquette">Énoncé</p><div class="texte">${html}</div></section>`
        : `<section class="bloc-redaction" aria-label="Rédaction"><p class="etiquette">Rédaction</p><div class="texte">${html}</div></section>`;
    }).join('');
  }

  // Chapitres d'un domaine : ordre déclaré, puis ordre d'apparition.
  function chapitresDe(domaine) {
    const noms = [...(chapitres[domaine] || [])];
    for (const m of modeles) {
      if (m.domaine === domaine && !noms.includes(m.chapitre)) noms.push(m.chapitre);
    }
    return noms
      .map((nom) => ({ nom, id: slug(nom), modeles: modeles.filter((m) => m.domaine === domaine && m.chapitre === nom) }))
      .filter((c) => c.modeles.length);
  }

  const EASE = 'cubic-bezier(.22, 1, .36, 1)';
  const reduit = matchMedia('(prefers-reduced-motion: reduce)');
  const rendus = new Map();
  const modeleParId = new Map(modeles.map((m) => [m.id, m]));
  const nomDomaine = (id) => DOMAINES.find((d) => d.id === id).nom;
  let termesActifs = [];
  let termesPourModele = [];

  function contenu(m, termes) {
    if (termes && termes.length) return sections(m.corps, termes);
    if (!rendus.has(m.id)) rendus.set(m.id, sections(m.corps));
    return rendus.get(m.id);
  }

  function carte(m, n, i, contexte) {
    const meta = contexte
      ? `${echappe(nomDomaine(m.domaine))} · ${echappe(m.chapitre)}`
      : (m.source ? echappe(m.source) : '');
    return `<a class="carte" href="#/m/${encodeURIComponent(m.id)}" data-id="${echappe(m.id)}" style="--i:${Math.min(i, 14)}">
      <span class="carte-n">${n}</span>
      <span class="carte-titre">${enLigne(m.titre, termesActifs)}</span>
      ${meta ? `<span class="carte-meta">${meta}</span>` : ''}
    </a>`;
  }

  const FLECHE = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M4 2l4 4-4 4"/></svg>';

  // Vues
  function vueAccueil() {
    let i = 0;
    return `<div class="accueil"><h1>Cahier de rédaction</h1>${DOMAINES.map((d) => {
      const chaps = chapitresDe(d.id);
      const total = chaps.reduce((s, c) => s + c.modeles.length, 0);
      return `<section class="domaine">
        <a class="d-tete" href="#/${d.id}"><h2>${d.nom}</h2><span class="nb">${total}</span><span class="fleche" aria-hidden="true">→</span></a>
        ${chaps.length ? `<div class="cartes">${chaps.map((c) => `<a class="carte carte-chap" href="#/${d.id}/${c.id}" style="--i:${Math.min(i++, 14)}">
          <span class="carte-titre">${echappe(c.nom)}</span>
          <span class="carte-meta">${c.modeles.length} modèle${c.modeles.length > 1 ? 's' : ''}</span>
        </a>`).join('')}</div>` : '<p class="vide">Aucun modèle.</p>'}
      </section>`;
    }).join('')}</div>`;
  }

  function vueDomaine(d) {
    const chaps = chapitresDe(d.id);
    const total = chaps.reduce((s, c) => s + c.modeles.length, 0);
    const entete = `<div class="entete"><h1>${d.nom}</h1><span class="nb">${total}</span></div>`;
    if (!chaps.length) return `${entete}<p class="vide">Aucun modèle.</p>`;
    let i = 0;
    return `${entete}<div class="colonnes">
      <nav class="rail" aria-label="Chapitres"><ol>${chaps.map((c) => `<li><a href="#/${d.id}/${c.id}" data-chap="${c.id}">${echappe(c.nom)}</a></li>`).join('')}<li class="curseur" aria-hidden="true"></li></ol></nav>
      <div>${chaps.map((c) => `<section class="chap" id="${c.id}"><h2>${echappe(c.nom)}</h2>
        <div class="cartes">${c.modeles.map((m, n) => carte(m, n + 1, i++)).join('')}</div>
      </section>`).join('')}</div>
    </div>`;
  }

  const ordreDomaine = (domaine) => chapitresDe(domaine).flatMap((c) => c.modeles);

  function lienSuite(m, sens) {
    if (!m) return '';
    return `<a class="${sens === 'prec' ? 'prec' : 'suiv'}" href="#/m/${encodeURIComponent(m.id)}" rel="${sens === 'prec' ? 'prev' : 'next'}">
      <span class="label">${sens === 'prec' ? '← Précédent' : 'Suivant →'}</span>
      <span>${enLigne(m.titre)}</span>
    </a>`;
  }

  function vueModele(m, termes) {
    const d = DOMAINES.find((x) => x.id === m.domaine);
    const liste = ordreDomaine(m.domaine);
    const k = liste.indexOf(m);
    const details = [
      ['Domaine', echappe(d.nom)],
      ['Chapitre', echappe(m.chapitre)],
      m.source ? ['Source', echappe(m.source)] : null,
      (m.motsCles || []).length ? ['Mots-clés', `<span class="mots">${m.motsCles.map((x) => `<span>${echappe(x)}</span>`).join('')}</span>`] : null,
    ].filter(Boolean);
    return `<article class="page-modele" data-id="${echappe(m.id)}">
      <nav class="fil aux" aria-label="Fil d'Ariane">
        <a href="#/${d.id}">${d.nom}</a><span class="sep" aria-hidden="true">/</span><a href="#/${d.id}/${slug(m.chapitre)}">${echappe(m.chapitre)}</a>
      </nav>
      <header class="tete-modele">
        <h1 class="titre-modele">${enLigne(m.titre, termes)}</h1>
        <button class="btn-lecture aux" type="button" aria-pressed="false">Mode lecture <kbd>L</kbd></button>
      </header>
      <div class="contenu">${contenu(m, termes)}</div>
      <details class="details aux">
        <summary>${FLECHE}Détails</summary>
        <div class="details-corps"><div><dl>${details.map(([k2, v]) => `<dt>${k2}</dt><dd>${v}</dd>`).join('')}</dl></div></div>
      </details>
      <nav class="suite aux" aria-label="Modèles voisins">${lienSuite(liste[k - 1], 'prec')}${lienSuite(liste[k + 1], 'suiv')}</nav>
    </article>`;
  }

  // Recherche
  const index = modeles.map((m) => ({
    m,
    titre: norm(m.titre),
    mots: norm((m.motsCles || []).join(' ')),
    chap: norm(`${nomDomaine(m.domaine)} ${m.chapitre}`),
    corps: norm(m.corps.replace(/\\[a-zA-Z]+/g, ' ').replace(/[$*_{}>!=&\\[\]]/g, ' ')),
  }));

  function chercher(q) {
    const termes = norm(q).split(/\s+/).filter(Boolean);
    const trouves = [];
    for (const e of index) {
      let score = 0;
      const tous = termes.every((t) => {
        const s = (e.titre.includes(t) ? 8 : 0) + (e.mots.includes(t) ? 4 : 0) + (e.chap.includes(t) ? 2 : 0) + (e.corps.includes(t) ? 1 : 0);
        score += s;
        return s > 0;
      });
      if (tous) trouves.push({ m: e.m, score });
    }
    trouves.sort((a, b) => b.score - a.score);
    return { termes, resultats: trouves.map((r) => r.m) };
  }

  function afficherRecherche(q) {
    const { termes, resultats } = chercher(q);
    sortie?.cancel();
    afficher.jeton++;
    lecture(false);
    if (!view.querySelector('.resultats')) window.scrollTo({ top: 0, behavior: 'instant' });
    const avant = new Map([...view.querySelectorAll('.resultats .carte')].map((el) => [el.dataset.id, el.getBoundingClientRect()]));
    termesActifs = termes;
    vueCourante = null;
    observateur?.disconnect();
    view.classList.remove('anim');
    marquerDomaine(null);
    view.innerHTML = `<div class="resultats">${resultats.length
      ? `<span class="nb">${resultats.length} résultat${resultats.length > 1 ? 's' : ''}</span><div class="cartes">${resultats.map((m, i) => carte(m, i + 1, i, true)).join('')}</div>`
      : '<p class="vide">Aucun résultat.</p>'}</div>`;
    if (reduit.matches) return;
    // Les cartes conservées glissent vers leur nouvelle place, les nouvelles apparaissent.
    view.querySelectorAll('.carte').forEach((el, i) => {
      if (i > 30) return;
      const depart = avant.get(el.dataset.id);
      if (!depart) {
        el.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: 240, delay: Math.min(i, 8) * 16, easing: EASE, fill: 'backwards' });
      } else {
        const r = el.getBoundingClientRect();
        const dx = depart.left - r.left;
        const dy = depart.top - r.top;
        if (dx || dy) el.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'none' }], { duration: 260, easing: EASE });
      }
    });
  }

  // Navigation
  let vueCourante = null;
  let observateur = null;
  let sortie = null;
  const nav = document.querySelector('.domains');
  const entete = document.querySelector('.top');
  const positions = new Map();
  let depuisModele = false;

  // Trait qui glisse d'un lien actif à l'autre.
  function placer(curseur, lien) {
    if (!curseur) return;
    if (!lien) { curseur.style.opacity = 0; return; }
    const neuf = curseur.style.opacity !== '1';
    if (neuf) curseur.style.transition = 'none';
    curseur.style.setProperty('--x', `${lien.offsetLeft}px`);
    curseur.style.setProperty('--y', `${lien.offsetTop}px`);
    curseur.style.setProperty('--l', `${lien.offsetWidth}px`);
    curseur.style.setProperty('--h', `${lien.offsetHeight}px`);
    curseur.style.opacity = 1;
    if (neuf) { void curseur.offsetWidth; curseur.style.transition = ''; }
  }

  function recaler() {
    racine.style.setProperty('--top-h', `${entete.offsetHeight}px`);
    placer(nav.querySelector('.curseur'), nav.querySelector('[aria-current]'));
    placer(view.querySelector('.rail .curseur'), view.querySelector('[data-chap][aria-current]'));
  }

  function marquerDomaine(id) {
    nav.querySelectorAll('a').forEach((a) => {
      if (a.dataset.d === id) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    placer(nav.querySelector('.curseur'), nav.querySelector('[aria-current]'));
  }

  function suivreChapitres() {
    observateur?.disconnect();
    const liens = new Map([...view.querySelectorAll('[data-chap]')].map((a) => [a.dataset.chap, a]));
    if (!liens.size) return;
    const activer = (id) => {
      liens.forEach((a, k) => { if (k === id) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
      const lien = liens.get(id);
      const rail = lien.closest('ol');
      placer(rail.querySelector('.curseur'), lien);
      if (rail.scrollWidth > rail.clientWidth) rail.scrollTo({ left: lien.offsetLeft - 16, behavior: reduit.matches ? 'instant' : 'smooth' });
    };
    activer(liens.keys().next().value);
    observateur = new IntersectionObserver((entrees) => {
      for (const e of entrees) if (e.isIntersecting) activer(e.target.id);
    }, { rootMargin: '-120px 0px -70% 0px' });
    view.querySelectorAll('.chap').forEach((s) => observateur.observe(s));
  }

  function afficher(html, cle, apres) {
    const poser = () => {
      view.classList.remove('anim');
      void view.offsetWidth;
      view.innerHTML = html;
      if (!reduit.matches) view.classList.add('anim');
      vueCourante = cle;
      apres();
    };
    sortie?.cancel();
    const jeton = ++afficher.jeton;
    if (!view.firstChild || reduit.matches || document.hidden) { poser(); return; }
    sortie = view.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(-4px)' }], { duration: 140, easing: 'ease-in', fill: 'forwards' });
    const courante = sortie;
    // La page est posée à la fin du fondu, ou au plus tard après 200 ms.
    const finir = () => {
      if (jeton !== afficher.jeton || courante.fait) return;
      courante.fait = true;
      poser();
      courante.cancel();
    };
    courante.onfinish = finir;
    setTimeout(finir, 200);
  }
  afficher.jeton = 0;

  function vers(chapitre, doux) {
    const cible = chapitre && document.getElementById(chapitre);
    if (cible) cible.scrollIntoView({ behavior: doux && !reduit.matches ? 'smooth' : 'instant' });
  }

  function route() {
    const morceaux = location.hash.replace(/^#\/?/, '').split('/');
    termesActifs = [];
    sortie?.cancel();
    afficher.jeton++;

    if (morceaux[0] === 'm') {
      const m = modeleParId.get(decodeURIComponent(morceaux[1] || ''));
      if (m) {
        const termes = termesPourModele;
        termesPourModele = [];
        marquerDomaine(m.domaine);
        observateur?.disconnect();
        afficher(vueModele(m, termes), `m:${m.id}`, () => {
          window.scrollTo({ top: 0, behavior: 'instant' });
          corpsPage.classList.remove('entete-cachee');
          const premiere = view.querySelector('mark');
          if (premiere) premiere.scrollIntoView({ block: 'center', behavior: 'instant' });
        });
        return;
      }
    }

    lecture(false);
    const [d, chapitre] = morceaux;
    const domaine = DOMAINES.find((x) => x.id === d);
    const cle = domaine ? domaine.id : 'accueil';
    marquerDomaine(domaine ? domaine.id : null);
    if (cle === vueCourante) { vers(chapitre, true); return; }
    const retour = depuisModele && positions.get(location.hash);
    afficher(domaine ? vueDomaine(domaine) : vueAccueil(), cle, () => {
      if (retour !== undefined && retour !== false) window.scrollTo({ top: retour, behavior: 'instant' });
      else if (chapitre) vers(chapitre, false);
      else window.scrollTo({ top: 0, behavior: 'instant' });
      if (domaine) suivreChapitres();
      else observateur?.disconnect();
    });
  }

  // Mode lecture : seuls l'énoncé et la rédaction restent visibles.
  function lecture(etat) {
    const actif = etat ?? !corpsPage.classList.contains('lecture');
    const page = view.querySelector('.page-modele');
    if (actif && !page) return;
    corpsPage.classList.toggle('lecture', actif);
    view.querySelector('.btn-lecture')?.setAttribute('aria-pressed', actif);
    try { sessionStorage.setItem('lecture', actif ? '1' : ''); } catch (e) { /* stockage indisponible */ }
  }

  // Thème : automatique, clair, sombre.
  const THEMES = [null, 'light', 'dark'];
  const NOMS_THEME = { null: 'automatique', light: 'clair', dark: 'sombre' };
  const boutonTheme = document.querySelector('.theme');

  function poserTheme(t, anime) {
    if (anime && !reduit.matches) {
      racine.classList.add('transition-theme');
      clearTimeout(poserTheme.minuteur);
      poserTheme.minuteur = setTimeout(() => racine.classList.remove('transition-theme'), 320);
    }
    if (t) racine.dataset.theme = t; else delete racine.dataset.theme;
    const nom = `Thème : ${NOMS_THEME[t]}`;
    boutonTheme.setAttribute('aria-label', nom);
    boutonTheme.title = nom;
    const sombre = t === 'dark' || (!t && matchMedia('(prefers-color-scheme: dark)').matches);
    document.querySelector('meta[name="theme-color"]').content = sombre ? '#15171c' : '#f5f1e8';
  }

  boutonTheme.addEventListener('click', () => {
    const actuel = racine.dataset.theme || null;
    const suivant = THEMES[(THEMES.indexOf(actuel) + 1) % THEMES.length];
    poserTheme(suivant, true);
    try { if (suivant) localStorage.setItem('theme', suivant); else localStorage.removeItem('theme'); } catch (e) { /* stockage indisponible */ }
  });

  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => poserTheme(racine.dataset.theme || null, true));
  poserTheme(racine.dataset.theme || null, false);

  // Dépliage doux des détails.
  function basculerDetails(details) {
    const corps = details.querySelector('.details-corps');
    if (!details.open) {
      details.open = true;
      void corps.offsetHeight; // fixe l'état replié pour que la transition parte de zéro
      details.classList.add('deplie');
    } else {
      details.classList.remove('deplie');
      if (reduit.matches) { details.open = false; return; }
      const fermer = () => { if (!details.classList.contains('deplie')) details.open = false; };
      corps.addEventListener('transitionend', fermer, { once: true });
      setTimeout(fermer, 360);
    }
  }

  // Événements
  view.addEventListener('click', (e) => {
    const resume = e.target.closest('.details summary');
    if (resume) { e.preventDefault(); basculerDetails(resume.parentElement); return; }

    if (e.target.closest('.btn-lecture')) { lecture(); return; }

    const carteRes = e.target.closest('.resultats .carte');
    if (carteRes) {
      termesPourModele = termesActifs;
      input.value = '';
      return;
    }

    const chap = e.target.closest('[data-chap]');
    if (chap) {
      e.preventDefault();
      history.replaceState(null, '', chap.getAttribute('href'));
      vers(chap.dataset.chap, true);
    }
  });

  document.querySelector('.quitter-lecture').addEventListener('click', () => lecture(false));

  entete.addEventListener('click', (e) => {
    const lien = e.target.closest('a');
    if (lien && input.value) {
      input.value = '';
      if (lien.getAttribute('href') === location.hash) { vueCourante = null; route(); }
    }
  });

  input.addEventListener('input', () => {
    if (input.value.trim()) afficherRecherche(input.value);
    else { vueCourante = null; route(); }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const premier = view.querySelector('.resultats .carte');
      if (premier) {
        termesPourModele = termesActifs;
        input.value = '';
        input.blur();
        location.hash = premier.getAttribute('href');
      }
    } else if (e.key === 'Escape') {
      input.value = '';
      input.dispatchEvent(new Event('input'));
      input.blur();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); lecture(false); input.focus(); input.select(); }
      return;
    }
    const saisie = document.activeElement === input;
    if (saisie) return;
    if (e.key === '/') { e.preventDefault(); lecture(false); input.focus(); input.select(); return; }
    if (!view.querySelector('.page-modele')) return;
    if (e.key === 'l' || e.key === 'L') { e.preventDefault(); lecture(); }
    else if (e.key === 'Escape') lecture(false);
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      const lien = view.querySelector(e.key === 'ArrowLeft' ? '.suite .prec' : '.suite .suiv');
      if (lien) location.hash = lien.getAttribute('href');
    }
  });

  addEventListener('hashchange', (e) => {
    const ancien = new URL(e.oldURL).hash || '#/';
    depuisModele = ancien.startsWith('#/m/');
    if (!depuisModele) positions.set(ancien, scrollY);
    route();
  });

  // L'en-tête s'efface quand on descend, revient quand on remonte.
  let dernierY = scrollY;
  addEventListener('scroll', () => {
    const y = scrollY;
    entete.classList.toggle('colle', y > 8);
    if (document.activeElement !== input) {
      if (y > dernierY + 6 && y > 160) corpsPage.classList.add('entete-cachee');
      else if (y < dernierY - 6 || y < 80) corpsPage.classList.remove('entete-cachee');
    }
    dernierY = y;
  }, { passive: true });

  input.addEventListener('focus', () => corpsPage.classList.remove('entete-cachee'));

  new ResizeObserver(recaler).observe(entete);
  document.fonts?.ready.then(recaler);
  route();
  try { if (sessionStorage.getItem('lecture') === '1') lecture(true); } catch (e) { /* stockage indisponible */ }

  // Prépare les formules en arrière-plan : l'ouverture d'un modèle est alors immédiate.
  const inactif = window.requestIdleCallback || ((f) => setTimeout(f, 60));
  let aPreparer = 0;
  (function preparer() {
    if (aPreparer >= modeles.length) return;
    inactif(() => {
      const m = modeles[aPreparer++];
      if (!rendus.has(m.id)) rendus.set(m.id, sections(m.corps));
      preparer();
    });
  })();
})();
