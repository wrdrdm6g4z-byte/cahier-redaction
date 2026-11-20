// Annotations personnelles : titres renommés et surlignages.
// Gardées dans le navigateur, et synchronisées avec la branche « perso » du dépôt
// quand un jeton GitHub est enregistré sur l'appareil.
(() => {
  'use strict';

  const DEPOT = 'wrdrdm6g4z-byte/cahier-redaction';
  const BRANCHE = 'perso';
  const FICHIER = 'perso.json';
  const API = `https://api.github.com/repos/${DEPOT}/contents/${FICHIER}`;
  const BRUT = `https://raw.githubusercontent.com/${DEPOT}/${BRANCHE}/${FICHIER}`;
  const CLE = 'perso-donnees';
  const CLE_SALES = 'perso-sales';
  const CLE_JETON = 'perso-jeton';

  const modeles = (window.CAHIER || {}).modeles || [];
  modeles.forEach((m) => { m.titreOrigine = m.titre; });

  const lire = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const ecrire = (k, v) => { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { /* stockage indisponible */ } };
  const lireJSON = (k, d) => { try { return JSON.parse(lire(k)) || d; } catch (e) { return d; } };

  // { id: { titre: string|null, surl: [{ s, e, t }], t: horodatage } }
  let donnees = lireJSON(CLE, {});
  // Modèles modifiés ici et pas encore envoyés.
  let sales = new Set(lireJSON(CLE_SALES, []));
  let etat = 'local';
  const ecouteurs = { changement: new Set(), etat: new Set() };

  function sauver() {
    ecrire(CLE, JSON.stringify(donnees));
    ecrire(CLE_SALES, JSON.stringify([...sales]));
  }

  function appliquerTitres() {
    for (const m of modeles) {
      const e = donnees[m.id];
      m.titre = e && e.titre ? e.titre : m.titreOrigine;
    }
  }
  appliquerTitres();

  const changer = () => { appliquerTitres(); ecouteurs.changement.forEach((f) => f()); };
  function poserEtat(e) {
    if (e === etat) return;
    etat = e;
    ecouteurs.etat.forEach((f) => f(e));
  }

  const jeton = () => lire(CLE_JETON);
  const entetes = (j) => ({ Authorization: `Bearer ${j}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' });

  const enB64 = (s) => {
    let b = '';
    new TextEncoder().encode(s).forEach((c) => { b += String.fromCharCode(c); });
    return btoa(b);
  };
  const deB64 = (s) => new TextDecoder().decode(Uint8Array.from(atob(s.replace(/\s/g, '')), (c) => c.charCodeAt(0)));

  class ErreurHttp extends Error {
    constructor(statut) { super(`HTTP ${statut}`); this.statut = statut; }
  }

  async function lireDistant() {
    const j = jeton();
    if (j) {
      const r = await fetch(`${API}?ref=${BRANCHE}&t=${Date.now()}`, { headers: entetes(j), cache: 'no-store' });
      if (r.status === 404) return { contenu: {}, sha: null };
      if (!r.ok) throw new ErreurHttp(r.status);
      const x = await r.json();
      return { contenu: (JSON.parse(deB64(x.content) || '{}').modeles) || {}, sha: x.sha };
    }
    const r = await fetch(`${BRUT}?t=${Date.now()}`, { cache: 'no-store' });
    if (r.status === 404) return { contenu: {}, sha: null };
    if (!r.ok) throw new ErreurHttp(r.status);
    return { contenu: (await r.json()).modeles || {}, sha: null };
  }

  // Pour chaque modèle, la modification la plus récente l'emporte.
  function fusionner(distant, local) {
    const res = { ...distant };
    for (const id of sales) {
      const l = local[id];
      const d = distant[id];
      if (l && (!d || (l.t || 0) >= (d.t || 0))) res[id] = l;
    }
    return res;
  }

  let enCours = null;
  let encore = false;

  function synchroniser() {
    if (enCours) { encore = true; return enCours; }
    enCours = (async () => {
      const j = jeton();
      if (j || etat !== 'local') poserEtat('sync');
      try {
        for (let essai = 0; essai < 3; essai++) {
          const instant = JSON.parse(JSON.stringify(donnees));
          const { contenu, sha } = await lireDistant();
          const fusion = fusionner(contenu, instant);
          const differe = JSON.stringify(fusion) !== JSON.stringify(contenu);
          let envoye = false;
          if (j && sales.size && differe) {
            const corps = `${JSON.stringify({ modeles: fusion }, null, 1)}\n`;
            const r = await fetch(API, {
              method: 'PUT',
              headers: { ...entetes(j), 'Content-Type': 'application/json' },
              body: JSON.stringify({ message: 'Annotations', content: enB64(corps), branch: BRANCHE, ...(sha ? { sha } : {}) }),
            });
            if (r.status === 409 || r.status === 422) continue;
            if (!r.ok) throw new ErreurHttp(r.status);
            envoye = true;
          }
          // Les modifications faites pendant l'échange restent à envoyer.
          const avant = JSON.stringify(donnees);
          const nouveau = { ...fusion };
          const restants = new Set();
          for (const id of sales) {
            const l = donnees[id];
            if (!l) continue;
            if (!instant[id] || instant[id].t !== l.t) { nouveau[id] = l; restants.add(id); continue; }
            // Pas envoyée (pas de jeton) : la version locale reste à envoyer.
            if (!envoye && differe && fusion[id] === instant[id]) restants.add(id);
          }
          sales = restants;
          donnees = nouveau;
          sauver();
          if (JSON.stringify(donnees) !== avant) changer();
          poserEtat(j ? (sales.size ? 'sync' : 'ok') : 'local');
          return;
        }
        throw new Error('conflit');
      } catch (e) {
        poserEtat(e instanceof ErreurHttp && (e.statut === 401 || e.statut === 403) ? 'jeton' : (jeton() ? 'erreur' : 'local'));
      } finally {
        enCours = null;
        if (encore) { encore = false; setTimeout(synchroniser, 300); }
      }
    })();
    return enCours;
  }

  let minuteur = null;
  const planifier = () => { clearTimeout(minuteur); minuteur = setTimeout(synchroniser, 1200); };

  window.PERSO = {
    surlignages: (id) => (donnees[id] && donnees[id].surl) || [],
    renomme: (id) => !!(donnees[id] && donnees[id].titre),
    modifier(id, patch) {
      donnees[id] = { titre: null, surl: [], ...(donnees[id] || {}), ...patch, t: Date.now() };
      sales.add(id);
      sauver();
      changer();
      if (jeton()) poserEtat('sync');
      planifier();
    },
    etat: () => etat,
    aJeton: () => !!jeton(),
    async poserJeton(j) {
      const r = await fetch(`https://api.github.com/repos/${DEPOT}`, { headers: entetes(j), cache: 'no-store' });
      if (r.status === 401) return 'Jeton refusé par GitHub.';
      if (!r.ok) return `GitHub répond ${r.status}.`;
      const x = await r.json();
      if (!x.permissions || !x.permissions.push) return 'Ce jeton ne permet pas d’écrire dans le dépôt.';
      ecrire(CLE_JETON, j);
      synchroniser();
      return null;
    },
    oublierJeton() { ecrire(CLE_JETON, null); poserEtat('local'); },
    synchroniser,
    surChangement: (f) => ecouteurs.changement.add(f),
    surEtat: (f) => ecouteurs.etat.add(f),
  };

  synchroniser();
  document.addEventListener('visibilitychange', () => { if (!document.hidden) synchroniser(); });
  addEventListener('online', synchroniser);
})();
