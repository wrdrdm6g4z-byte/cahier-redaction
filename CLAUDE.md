# Cahier de rédaction (maths)

Site statique pour GitHub Pages, public mais non référencé (`noindex`). Aucun outil de build. Les modèles sont dans `data/modeles.js`.

## Règles sur les modèles

- Transcription **mot pour mot** des modèles du professeur : phrases, ordre, notations, exemple d'origine. Ne jamais reformuler, compléter, corriger, généraliser ou inventer.
- Seule exception, autorisée par l'élève : corriger une erreur de calcul avérée, après vérification, et lui indiquer chaque correction. Le texte et la rédaction restent intouchés.
- Un passage illisible ou douteux n'est pas deviné : demander à l'élève avant de l'ajouter.
- Si une nouvelle source contredit un modèle existant, signaler la différence à l'élève au lieu de trancher seul.
- Titres les plus sobres et austères possible. Aucun texte d'explication sur le site.
- Classement : Algèbre, Analyse ou Probabilités, puis chapitre avec le titre du cours.
- Modèles « routiniers » uniquement, sauf demande contraire.

## Format d'un modèle

```js
{
  id: 'identifiant-unique',
  domaine: 'algebre', // ou 'analyse', 'probabilites'
  chapitre: 'Titre du chapitre',
  titre: 'Titre sobre',
  motsCles: ['terme utile à la recherche'],
  source: 'DS n° 3', // facultatif
  corps: String.raw`Texte avec $x$ en ligne et $$x^2$$ centré.

Ligne vide : nouveau paragraphe. **gras**, __souligné__.

> Paragraphe en retrait.`,
}
```

Reproduire aussi la mise en forme du cahier :

- Bloc commençant par `!!` : énoncé ou sous-titre, écrit en noir dans le cahier.
- `==texte==` : surligné au fluo. Dans une formule : `\fluo{...}`.
- `[[texte]]` : résultat encadré.
- `||x||` en tête de bloc : annotation écrite dans la marge.
- `\rouge{...}` : écrit en rouge dans le formule. Un `\rouge{?}` signale un doute à lever avant publication.

Macros LaTeX : `\R \N \Z \Q \C \K \E \V \P`, `\Vect \rg \Sp`, `\ent{a}{b}`.
