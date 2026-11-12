# Cahier de rédaction (maths)

Site statique pour GitHub Pages, public mais non référencé (`noindex`). Aucun outil de build. Les modèles sont dans `data/modeles.js`.

## Règles sur les modèles

- Transcription **mot pour mot** des modèles du professeur : phrases, ordre, notations, exemple d'origine. Ne jamais reformuler, compléter, corriger, généraliser ou inventer.
- Seule exception, autorisée par l'élève : corriger une erreur de calcul avérée, après vérification, et lui indiquer chaque correction. Le texte et la rédaction restent intouchés.
- Un passage illisible ou douteux n'est pas deviné : demander à l'élève avant de l'ajouter.
- Les corrigés PDF publiés par le professeur font foi. Si un corrigé rédige différemment un modèle déjà présent, remplacer le modèle du site par celui du professeur et indiquer le remplacement à l'élève. Pour toute autre source en contradiction, signaler la différence sans trancher seul.
- Titres les plus sobres et austères possible. Aucun texte d'explication sur le site.

## Nouveaux modèles

L'élève ne recopie plus les modèles dans un cahier. Les titres sont désormais à créer : sobres, appropriés et intuitifs, pour comprendre d'un coup d'œil l'objet du modèle.

1. Photo d'un exercice du cours : le transcrire mot pour mot, lui créer un titre, l'ajouter au site.
2. Sujet de DS avec corrigé : y repérer les modèles routiniers absents du site, les transcrire mot pour mot depuis le corrigé, leur créer un titre, les ajouter.
- Classement : Algèbre, Analyse ou Probabilités, puis chapitre avec le titre du cours.
- Modèles « routiniers » uniquement, sauf demande contraire.
- Quand l'élève fournit l'énoncé, le placer en tête du modèle dans un bloc `!!`. Le titre nomme l'idée capitale de l'exercice (ex. : l'équiprobabilité).
- Encadrés de méthode du cours : ne garder que le squelette de rédaction (étapes et phrases attendues), sans les informations annexes.

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
- `{{texte}}` : texte écrit en rouge. `{{?}}` signale un mot à lever avec l'élève.
- `\rouge{...}` : écrit en rouge dans le formule. Un `\rouge{?}` signale un doute à lever avant publication.

Macros LaTeX : `\R \N \Z \Q \C \K \E \V \P`, `\Vect \rg \Sp`, `\ent{a}{b}`.
