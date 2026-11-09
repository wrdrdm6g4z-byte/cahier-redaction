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

  const MACROS = {
    '\\R': '\\mathbb{R}', '\\N': '\\mathbb{N}', '\\Z': '\\mathbb{Z}',
    '\\Q': '\\mathbb{Q}', '\\C': '\\mathbb{C}', '\\K': '\\mathbb{K}',
    '\\E': '\\mathbb{E}', '\\V': '\\mathbb{V}', '\\P': '\\mathbb{P}',
    '\\ent': '\\llbracket #1,#2 \\rrbracket',
    '\\Vect': '\\operatorname{Vect}', '\\rg': '\\operatorname{rg}', '\\Sp': '\\operatorname{Sp}',
    '\\fluo': '\\htmlClass{fluo}{#1}', '\\rouge': '\\htmlClass{rouge}{#1}',
  };

  const sansAccent = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '');
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
      .replace(/\u0001/g, '<mark>')
      .replace(/\u0002/g, '</mark>')
      .replace(/\n/g, '<br>')
      .replace(/[-]/g, (c) => formules[c.charCodeAt(0) - PUA]);
  }

  function corps(src, termes) {
    return src.trim().split(/\n\s*\n/).map((bloc, i) => {
      let net = bloc.replace(/\n?(\$\$[\s\S]+?\$\$)\n?/g, '$1');
      const rang = `style="--c:${Math.min(i, 10)}"`;
      // ||x|| en tête de bloc : annotation dans la marge.
      const annotation = net.match(/^\|\|(.+?)\|\|\s*/);
      const note = annotation ? `<span class="note">${enLigne(annotation[1])}</span>` : '';
      if (annotation) net = net.slice(annotation[0].length);
      if (net.startsWith('!!')) return `<p class="enonce" ${rang}>${note}${enLigne(net.slice(2).trim(), termes)}</p>`;
      if (/^>\s?/.test(net)) {
        return `<p class="retrait" ${rang}>${note}${enLigne(net.replace(/^>\s?/gm, ''), termes)}</p>`;
      }
      return `<p ${rang}>${note}${enLigne(net, termes)}</p>`;
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

  const PLUS = '<svg class="plus" viewBox="0 0 13 13" aria-hidden="true"><path d="M1 6.5h11"/><path class="v" d="M6.5 1v11"/></svg>';
  const EASE = 'cubic-bezier(.22, 1, .36, 1)';
  const reduit = matchMedia('(prefers-reduced-motion: reduce)');
  const rendus = new Map();
  const modeleParId = new Map(modeles.map((m) => [m.id, m]));
  const ouverts = new Set();
  let termesActifs = [];

  function ligne(m, n, i, contexte) {
    const ouvert = ouverts.has(m.id);
    const sous = contexte ? `<small>${echappe(nomDomaine(m.domaine))} · ${echappe(m.chapitre)}</small>` : '';
    return `<article class="m${ouvert ? ' open' : ''}" data-id="${echappe(m.id)}" style="--i:${Math.min(i, 16)}">
      <h3><button class="m-tete" type="button" aria-expanded="${ouvert}" aria-controls="p-${echappe(m.id)}">
        <span class="n">${n}</span>
        <span class="t">${enLigne(m.titre, termesActifs)}${sous}</span>
        ${PLUS}
      </button></h3>
      <div class="m-panel" id="p-${echappe(m.id)}"><div class="m-clip"><div class="m-corps">${ouvert ? contenu(m) : ''}</div></div></div>
    </article>`;
  }

  const nomDomaine = (id) => DOMAINES.find((d) => d.id === id).nom;

  function contenu(m) {
    const source = m.source ? `<span class="source">${echappe(m.source)}</span>` : '';
    if (termesActifs.length) return corps(m.corps, termesActifs) + source;
    if (!rendus.has(m.id)) rendus.set(m.id, corps(m.corps) + source);
    return rendus.get(m.id);
  }

  function basculer(article, etat) {
    const m = modeleParId.get(article.dataset.id);
    const ouvrir = etat ?? !article.classList.contains('open');
    const zone = article.querySelector('.m-corps');
    if (ouvrir && !zone.innerHTML) zone.innerHTML = contenu(m);
    if (ouvrir && etat === undefined) {
      article.classList.add('ouvre');
      setTimeout(() => article.classList.remove('ouvre'), 1100);
    }
    article.classList.toggle('open', ouvrir);
    article.querySelector('.m-tete').setAttribute('aria-expanded', ouvrir);
    if (ouvrir) ouverts.add(m.id); else ouverts.delete(m.id);
  }

  // Vues
  function vueAccueil() {
    return `<div class="sommaire">${DOMAINES.map((d, i) => {
      const chaps = chapitresDe(d.id);
      const total = chaps.reduce((s, c) => s + c.modeles.length, 0);
      return `<section class="rubrique${total ? '' : ' sans'}" style="--i:${i * 3}">
        <a class="r-tete" href="#/${d.id}"><h2><span class="revele"><span>${d.nom}</span></span></h2><span class="nb monte">${total}</span></a>
        <ul class="monte">${chaps.map((c) => `<li><a href="#/${d.id}/${c.id}"><span>${echappe(c.nom)}</span><span class="nb">${c.modeles.length}</span></a></li>`).join('')}</ul>
      </section>`;
    }).join('')}</div>`;
  }

  function vueDomaine(d) {
    const chaps = chapitresDe(d.id);
    const entete = `<div class="entete"><h1><span class="revele"><span>${d.nom}</span></span></h1>${chaps.length ? `<button class="bascule monte" style="--i:6" type="button">Tout déplier</button>` : ''}</div>`;
    if (!chaps.length) return `${entete}<p class="vide">Aucun modèle.</p>`;
    let i = 0;
    return `${entete}<div class="colonnes">
      <nav class="rail monte" style="--i:2" aria-label="Chapitres"><ol>${chaps.map((c) => `<li><a href="#/${d.id}/${c.id}" data-chap="${c.id}">${echappe(c.nom)}</a></li>`).join('')}<li class="curseur" aria-hidden="true"></li></ol></nav>
      <div>${chaps.map((c) => `<section class="chap" id="${c.id}"><h2 class="monte" style="--i:${Math.min(i, 16)}">${echappe(c.nom)}</h2>
        <div class="liste">${c.modeles.map((m, n) => ligne(m, n + 1, i++)).join('')}</div>
      </section>`).join('')}</div>
    </div>`;
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
    if (!view.querySelector('.resultats')) window.scrollTo({ top: 0, behavior: 'instant' });
    const avant = new Map([...view.querySelectorAll('.resultats .m')].map((el) => [el.dataset.id, el.getBoundingClientRect().top]));
    termesActifs = termes;
    vueCourante = null;
    observateur?.disconnect();
    view.classList.remove('anim');
    marquerDomaine(null);
    view.innerHTML = `<div class="resultats">${resultats.length
      ? `<div class="liste">${resultats.map((m, i) => ligne(m, i + 1, i, true)).join('')}</div>`
      : '<p class="vide">Aucun résultat.</p>'}</div>`;
    if (reduit.matches) return;
    // Les résultats conservés glissent vers leur nouvelle place, les nouveaux apparaissent.
    view.querySelectorAll('.m').forEach((el, i) => {
      if (i > 30) return;
      const depart = avant.get(el.dataset.id);
      if (depart === undefined) {
        el.animate([{ opacity: 0, transform: 'translateY(7px)' }, { opacity: 1, transform: 'none' }], { duration: 320, delay: Math.min(i, 8) * 16, easing: EASE, fill: 'backwards' });
      } else {
        const ecart = depart - el.getBoundingClientRect().top;
        if (ecart) el.animate([{ transform: `translateY(${ecart}px)` }, { transform: 'none' }], { duration: 380, easing: EASE });
      }
    });
  }

  // Navigation
  let vueCourante = null;
  let observateur = null;
  let sortie = null;
  const nav = document.querySelector('.domains');
  const entete = document.querySelector('.top');

  // Trait rouge qui glisse d'un lien actif à l'autre.
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
    document.documentElement.style.setProperty('--top-h', `${entete.offsetHeight}px`);
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
      if (rail.scrollWidth > rail.clientWidth) rail.scrollTo({ left: lien.offsetLeft - 16, behavior: 'smooth' });
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
      view.classList.add('anim');
      vueCourante = cle;
      apres();
    };
    sortie?.cancel();
    if (!view.firstChild || reduit.matches || document.hidden) { poser(); return; }
    sortie = view.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(-5px)' }], { duration: 150, easing: 'ease-in', fill: 'forwards' });
    const courante = sortie;
    courante.onfinish = () => { poser(); courante.cancel(); };
  }

  function vers(chapitre, doux) {
    const cible = chapitre && document.getElementById(chapitre);
    if (cible) cible.scrollIntoView({ behavior: doux ? 'smooth' : 'instant' });
  }

  function route() {
    const [d, chapitre] = location.hash.replace(/^#\/?/, '').split('/');
    const domaine = DOMAINES.find((x) => x.id === d);
    const cle = domaine ? domaine.id : 'accueil';
    termesActifs = [];
    marquerDomaine(domaine ? domaine.id : null);
    sortie?.cancel();
    if (cle === vueCourante) { vers(chapitre, true); return; }
    ouverts.clear();
    afficher(domaine ? vueDomaine(domaine) : vueAccueil(), cle, () => {
      if (chapitre) vers(chapitre, false);
      else window.scrollTo({ top: 0, behavior: 'instant' });
      if (domaine) suivreChapitres();
      else observateur?.disconnect();
    });
  }

  // Événements
  view.addEventListener('click', (e) => {
    const tete = e.target.closest('.m-tete');
    if (tete) { basculer(tete.closest('.m')); return; }

    const bascule = e.target.closest('.bascule');
    if (bascule) {
      const ouvrir = bascule.textContent === 'Tout déplier';
      view.querySelectorAll('.m').forEach((a) => basculer(a, ouvrir));
      bascule.textContent = ouvrir ? 'Tout replier' : 'Tout déplier';
      return;
    }

    const chap = e.target.closest('[data-chap]');
    if (chap) {
      e.preventDefault();
      history.replaceState(null, '', chap.getAttribute('href'));
      vers(chap.dataset.chap, true);
    }
  });

  document.querySelector('.top').addEventListener('click', (e) => {
    const lien = e.target.closest('a');
    if (lien && input.value) {
      input.value = '';
      if (lien.getAttribute('href') === location.hash) route();
    }
  });

  input.addEventListener('input', () => {
    if (input.value.trim()) afficherRecherche(input.value);
    else { ouverts.clear(); route(); }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const premier = view.querySelector('.resultats .m');
      if (premier) { basculer(premier, true); input.blur(); }
    } else if (e.key === 'Escape') {
      input.value = '';
      input.dispatchEvent(new Event('input'));
      input.blur();
    }
  });

  document.addEventListener('keydown', (e) => {
    const raccourci = (e.key === '/' && !e.metaKey && !e.ctrlKey) || (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey));
    if (raccourci && document.activeElement !== input) {
      e.preventDefault();
      input.focus();
      input.select();
    }
  });

  addEventListener('hashchange', route);
  addEventListener('scroll', () => entete.classList.toggle('colle', scrollY > 8), { passive: true });
  new ResizeObserver(recaler).observe(entete);
  document.fonts?.ready.then(recaler);
  route();

  // Prépare les formules en arrière-plan : l'ouverture d'un modèle est alors immédiate.
  const inactif = window.requestIdleCallback || ((f) => setTimeout(f, 60));
  let aPreparer = 0;
  (function preparer() {
    if (aPreparer >= modeles.length) return;
    inactif(() => {
      const m = modeles[aPreparer++];
      if (!rendus.has(m.id)) rendus.set(m.id, corps(m.corps) + (m.source ? `<span class="source">${echappe(m.source)}</span>` : ''));
      preparer();
    });
  })();
})();
