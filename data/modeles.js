window.CAHIER = {
  // Ordre d'affichage des chapitres, avec les titres du professeur.
  chapitres: {
    algebre: ['Espaces vectoriels', 'Matrices', 'Réduction'],
    analyse: ['Fonctions', 'Suites', 'Séries'],
    probabilites: ['Espaces probabilisés', 'Dénombrement'],
  },

  modeles: [
    // Cahier, p. 1
    {
      id: 'absurde-combinaison-lineaire',
      domaine: 'algebre',
      chapitre: 'Espaces vectoriels',
      titre: "Raisonnement par l'absurde ⊕ Un vecteur donné n'est pas combinaison linéaire d'autres",
      motsCles: ['absurde', 'combinaison linéaire', 'contradiction', 'identification'],
      corps: String.raw`!! $\odot$ Montrons que : $M=\begin{pmatrix}-2&3\\3&-2\end{pmatrix}$ n'est pas combinaison linéaire de $N_1=\begin{pmatrix}3&0\\0&0\end{pmatrix}$, $N_2=\begin{pmatrix}0&1\\2&0\end{pmatrix}$, $N_3=\begin{pmatrix}0&0\\1&1\end{pmatrix}$

__Raisonnons par l'absurde__ et ==supposons que== $M$ s'écrit comme combinaison linéaire de $N_1, N_2, N_3$.
Alors, ==on dispose de== $(\lambda_1,\lambda_2,\lambda_3)\in\R^3$ tel que :
$$M=\lambda_1N_1+\lambda_2N_2+\lambda_3N_3.$$
Donc,
$$M=\begin{pmatrix}3\lambda_1&\lambda_2\\2\lambda_2+\lambda_3&\lambda_3\end{pmatrix}$$
Donc, par ==identification des coefficients 2 à 2 :==
$$\begin{cases}3\lambda_1=-2\\\lambda_2=3\\2\lambda_2+\lambda_3=3\\\lambda_3=-2\end{cases}$$
Donc,
$$\begin{cases}\lambda_1=-2/3\\\lambda_2=3\\\lambda_3=-2\\4=3\end{cases}$$
Donc, $4=3$
Or, $4\neq3$
==Nous avons donc obtenu une contradiction.==
Donc, [[$M$ ne s'écrit pas comme ...]]`,
    },

    // Cahier, p. 2
    {
      id: 'sev-caracterisation-3-points',
      domaine: 'algebre',
      chapitre: 'Espaces vectoriels',
      titre: "Montrer qu'un ensemble est un SEV d'un EV de référence → caractérisation en 3 points",
      motsCles: ['sous-espace vectoriel', 'stable par combinaison linéaire', 'caractérisation'],
      corps: String.raw`!! $\odot$ Montrons que $F_2=\{(x,y,z)\in\R^3\mid x+y+z=0\}$ est un SEV de $(\R^3,+,\cdot)$

On a :

> $\odot$ Par définition de $F_2$, ==$F_2\subset\R^3$==.

> $\odot$ On a :
$$0_{\R^3}=(0,0,0)$$
Donc, $0_{\R^3}\in\R^3$ et $0+0+0=0$
Donc, ==$0_{\R^3}\in F_2$==.

> $\odot$ Montrons que $F_2$ __est stable par combinaison linéaire__
Soit $(\lambda,\mu)\in\R^2$
Soit $(X,Y)\in(F_2)^2$
Montrons que : $\lambda X+\mu Y\in F_2$.
Comme $\begin{cases}X\in F_2\\Y\in F_2\end{cases}$, on dispose de 6 nombres réels $x_1,x_2,x_3,y_1,y_2,y_3$ tels que :
$$X=(x_1,x_2,x_3)\ \text{ et }\ Y=(y_1,y_2,y_3)$$
et
$$\begin{cases}x_1+x_2+x_3=0\\y_1+y_2+y_3=0\end{cases}\quad(*)$$
Alors, $\lambda X+\mu Y=(\lambda x_1+\mu y_1,\lambda x_2+\mu y_2,\lambda x_3+\mu y_3)$
Donc, $\lambda X+\mu Y\in\R^3$ et $(\lambda x_1+\mu y_1)+(\lambda x_2+\mu y_2)+(\lambda x_3+\mu y_3)=0$ d'après $(*)$
Donc, $\lambda X+\mu Y\in F_2$, et ce pour tout $(\lambda,\mu)\in\R^2$ et pour tout $(X,Y)\in(F_2)^2$.
Donc, ==$F_2$ est stable par combinaison linéaire==

Donc, d'après les 3 points $\odot$ précédents, par théorème, ...`,
    },

    // Cahier, p. 3
    {
      id: 'sev-vect',
      domaine: 'algebre',
      chapitre: 'Espaces vectoriels',
      titre: "Montrer qu'un ensemble est un SEV à l'aide de « Vect »",
      motsCles: ['sous-espace vectoriel', 'famille génératrice', 'engendré'],
      corps: String.raw`!! $\odot$ __Modèle 1 :__ très prenant en notations

!! Montrons que $G_1=\{(x,y,z)\in\R^3\mid 3y-x=0\}$ est un SEV de $(\R^3,+,\cdot)$

Soit $X\in\R^3$.
Alors,
$$\begin{aligned}X\in G_1&\Longleftrightarrow\exists(x,y,z)\in\R^3,\ X=(x,y,z)\ \text{ et }\ 3y-x=0\\&\Longleftrightarrow\exists(x,y,z)\in\R^3,\ X=(x,y,z)\ \text{ et }\ x=3y\\&\Longleftrightarrow\exists(y,z)\in\R^2,\ X=(3y,y,z)\\&\Longleftrightarrow\exists(z,y)\in\R^2,\ X=y(3,1,0)+z(0,0,1)\\&\Longleftrightarrow X\in\Vect((3,1,0),(0,0,1))\end{aligned}$$
Donc, en vertu des équivalences précédentes,
$G_1=\Vect((3,1,0),(0,0,1))$
Or, $(3,1,0)\in\R^3$ et $(0,0,1)\in\R^3$.
Donc, $G_1$ est le SEV de $\R^3$ engendré par la famille $((3,1,0),(0,0,1))$
Donc, [[$G_1$ est un SEV de $(\R^3,+,\cdot)$]]

!! $\odot$ __Modèle 2 :__ Modèle 1 « perverti »

Soit $X=(x,y,z)\in\R^3$.
Alors,
$$\begin{aligned}X\in G_1&\Longleftrightarrow3y-x=0\\&\Longleftrightarrow x=3y\\&\Longleftrightarrow X=(3y,y,z)\\&\Longleftrightarrow X=y(3,1,0)+z(0,0,1)\end{aligned}$$
Donc,
$$G_1=\Vect((3,1,0),(0,0,1))$$

!! $\odot$ __Modèle 3 :__ Le plus rapide

On a :
$$\begin{aligned}G_1&=\{(x,y,z)\in\R^3\mid3y-x=0\}\\&=\{(x,y,z)\in\R^3\mid x=3y\}\\&=\{(3y,y,z),\ (y,z)\in\R^2\}\\&=\{y(3,1,0)+z(0,0,1),\ (y,z)\in\R^2\}\\&=\Vect((3,1,0),(0,0,1))\end{aligned}$$`,
    },

    // Cahier, p. 4
    {
      id: 'famille-libre',
      domaine: 'algebre',
      chapitre: 'Espaces vectoriels',
      titre: "Montrer qu'une famille est libre",
      motsCles: ['liberté', 'identification', 'coefficients'],
      corps: String.raw`!! $\odot$ Montrons que $\left(\begin{pmatrix}1\\0\\0\end{pmatrix},\begin{pmatrix}0\\0\\1\end{pmatrix}\right)$ est libre dans $M_{3,1}(\R)$.

$\left(\begin{pmatrix}1\\0\\0\end{pmatrix},\begin{pmatrix}0\\0\\1\end{pmatrix}\right)$ est une famille de vecteurs de l'espace vectoriel de référence $(M_{3,1}(\R),+,\cdot)$
==Soit $(a,b)\in\R^2$==.
On suppose :
$$a\cdot\begin{pmatrix}1\\0\\0\end{pmatrix}+b\cdot\begin{pmatrix}0\\0\\1\end{pmatrix}=0_{M_{3,1}(\R)}$$
Donc : $\begin{pmatrix}a\\0\\0\end{pmatrix}+\begin{pmatrix}0\\0\\b\end{pmatrix}=0_{M_{3,1}(\R)}$

Donc : $\begin{pmatrix}a\\0\\b\end{pmatrix}=\begin{pmatrix}0\\0\\0\end{pmatrix}$

Donc, en particulier, en identifiant les coefficients 2 à 2 :
$$\begin{cases}a=0\\b=0\end{cases}$$
Donc :
$$a\cdot\begin{pmatrix}1\\0\\0\end{pmatrix}+b\cdot\begin{pmatrix}0\\0\\1\end{pmatrix}=0_{M_{3,1}(\R)}\ \fluo{\Longrightarrow}\begin{cases}a=0\\b=0\end{cases},\ \text{ et ce pour tout }(a,b)\in\R^2.$$
Donc, [[$\left(\begin{pmatrix}1\\0\\0\end{pmatrix},\begin{pmatrix}0\\0\\1\end{pmatrix}\right)$ est libre dans $M_{3,1}(\R)$.]]`,
    },

    // Cahier, p. 6
    {
      id: 'coordonnees-dans-une-base',
      domaine: 'algebre',
      chapitre: 'Espaces vectoriels',
      titre: "Amener les coordonnées d'un vecteur dans une base",
      motsCles: ['coordonnées', 'base', 'système'],
      corps: String.raw`!! $\odot$ Déterminons les coordonnées de $(1,2,3)$ dans $B=((1,0,1),(-3,0,0),(0,-1,2))$

On a :

> $\odot$ $B$ est une base de $\R^3$
$\odot$ $(1,2,3)\in\R^3$

Alors,
$$(1,2,3)=a\cdot(1,0,1)+b\cdot(-3,0,0)+c\cdot(0,-1,2)\Longleftrightarrow\begin{cases}a=7\\b=2\\c=-2\end{cases}$$
Ainsi, ==si== $\begin{cases}a=7\\b=2\\c=-2\end{cases}$, ==alors== $(1,2,3)=a(1,0,1)+b(-3,0,0)+c(0,-1,2)$

Donc,
$$(1,2,3)=\underline{7}(1,0,1)+\underline{2}(-3,0,0)+\underline{(-2)}(0,-1,2)$$
Donc, [[$(7,2,-2)$ sont les coordonnées de $(1,2,3)$ dans $B$.]]`,
    },

    // Cahier, p. 7 (non numérotée sur la photo)
    {
      id: 'dimension-sous-espace',
      domaine: 'algebre',
      chapitre: 'Espaces vectoriels',
      titre: "Expliciter la dimension d'un sous-espace vectoriel",
      motsCles: ['dimension', 'base', 'cardinal'],
      corps: String.raw`On a :
$$\left(\begin{pmatrix}2\\1\end{pmatrix}\right)\text{ est une base de }F_1.$$
Or, la famille $\left(\begin{pmatrix}2\\1\end{pmatrix}\right)$ comporte très exactement un vecteur.
Donc, [[$\dim(F_1)=1$]]`,
    },

    // Cahier, p. 8
    {
      id: 'base-polynomes-racines-communes',
      domaine: 'algebre',
      chapitre: 'Espaces vectoriels',
      titre: "Montrer qu'une famille de polynômes est une base en exploitant les racines communes",
      motsCles: ['polynômes', 'base', 'liberté', 'cardinal', 'dimension'],
      corps: String.raw`!! $\odot$ Montrons que $\mathcal{F}=(X^2,X^2-X,(X-1)^2)$ est une base de $\R_2[X]$.

• Montrons que $\mathcal{F}$ est libre dans $\R_2[X]$.
Soit $(a,b,c)\in\R^3$.
On suppose :
$$aX^2+b(X^2-X)+c(X-1)^2=0_{\R_2[X]}\quad(*)$$
Donc :
$$\forall x\in\R,\ ax^2+b(x^2-x)+c(x-1)^2=0_\R.$$
Donc, en particulier, « pour $x=0$ » et « pour $x=1$ » :
$$\begin{cases}a0^2+b(0^2-0)+c(0-1)^2=0_\R\\a1^2+b(1^2-1)+c(1-1)^2=0_\R\end{cases}$$
Donc : $\begin{cases}c=0\\a=0\end{cases}\quad(A)$

Donc, d'après $(*)$,
$$0X^2+b(X^2-X)+0(X-1)^2=0_{\R_2[X]}$$
Donc, $b(X^2-X)=0_{\R_2[X]}$
Or, $X^2-X\neq0_{\R_2[X]}$
Donc, par théorème, $b=0$. $(B)$
Donc, d'après $(A)$ et $(B)$, $\begin{cases}a=0\\b=0\\c=0\end{cases}$

Donc :
$$aX^2+b(X^2-X)+c(X-1)^2=0_{\R_2[X]}\Longrightarrow\begin{cases}a=0\\b=0\\c=0\end{cases},$$
et ce pour tout $(a,b,c)\in\R^3$.

Donc, $\mathcal{F}$ est libre dans $\R_2[X]$
Or, $\odot$ $\mathcal{F}$ comporte très exactement 3 vecteurs
$\odot$ Par théorème, $\dim(\R_2[X])=2+1=3$

Donc, par théorème, [[$\mathcal{F}$ est une base de $\R_2[X]$]]`,
    },

    // Cahier, p. 9
    {
      id: 'rang-inversibilite-det',
      domaine: 'algebre',
      chapitre: 'Matrices',
      titre: "Calcul du rang d'une matrice par son inversibilité ⊕ det",
      motsCles: ['rang', 'inversible', 'déterminant'],
      corps: String.raw`On a :
$$A_3=\begin{pmatrix}1&2\\5&3\end{pmatrix}$$
Donc, $A_3\in M_2(\R)$ et
$$\begin{aligned}\det(A_3)&=\det\begin{pmatrix}1&2\\5&3\end{pmatrix}\\&=1\times3-2\times5\\&=-7\end{aligned}$$
Or, $-7\neq0$
Donc, $\det(A_3)\neq0$
Donc, par théorème, $A_3$ est inversible
Or, $A_3\in M_2(\R)$.
Donc, par théorème, [[$\rg(A_3)=2$]]`,
    },

    // Cahier, p. 10
    {
      id: 'spectre-ordre-2',
      domaine: 'algebre',
      chapitre: 'Réduction',
      titre: "Déterminer le spectre d'une matrice carrée d'ordre 2",
      motsCles: ['valeurs propres', 'déterminant', 'inversible'],
      corps: String.raw`!! • Déterminons le spectre de $B=\begin{pmatrix}2&1\\1&2\end{pmatrix}$

Soit $\lambda\in\R$.
$B\in M_2(\R)$
Alors :
$$\begin{aligned}\lambda\in\Sp(B)&\underset{(1)}{\Longleftrightarrow}\text{« }B-\lambda I_2\text{ n'est pas inversible »}\\&\underset{(2)}{\Longleftrightarrow}\det(B-\lambda I_2)=0\\&\Longleftrightarrow\det\left(\begin{pmatrix}2-\lambda&1\\1&2-\lambda\end{pmatrix}\right)=0\\&\Longleftrightarrow\lambda=1\text{ ou }\lambda=3\\&\Longleftrightarrow\lambda\in\{1;3\}\end{aligned}$$

$(1)$ : Par théorème
$(2)$ : Par caractérisation de l'inversibilité des matrices carrées par le déterminant

Donc, d'après les équivalences précédentes,
[[$\Sp(B)=\{1;3\}$]]`,
    },

    // Cahier, p. 11 et page suivante
    {
      id: 'spectre-sans-sous-espaces-propres',
      domaine: 'algebre',
      chapitre: 'Réduction',
      titre: "Déterminer le spectre d'une matrice carrée sans les sous-espaces propres associés",
      motsCles: ['valeurs propres', 'rang', 'pivot', 'inversible'],
      corps: String.raw`!! • Déterminons le spectre de $C=\begin{pmatrix}0&0&2\\0&1&1\\1&0&-1\end{pmatrix}$

Soit $\lambda\in\R$.
On a :
$$\begin{aligned}C\in M_3(\R)\text{ et }\rg(C-\lambda I_3)&=\rg\left(\begin{pmatrix}-\lambda&0&2\\0&1-\lambda&1\\1&0&-1-\lambda\end{pmatrix}\right)\\&=\dots\quad(\text{Pivot})\\&=\rg\left(\begin{pmatrix}1&0&-1-\lambda\\\rouge{0}&1-\lambda&1\\\rouge{0}&\rouge{0}&-\lambda^2-\lambda+2\end{pmatrix}\right)\end{aligned}$$

On a :
$$\begin{aligned}\lambda\in\Sp(C)&\underset{(1)}{\Longleftrightarrow}\rg(C-\lambda I_3)<3\\&\underset{(2)}{\Longleftrightarrow}\rg\left(\begin{pmatrix}1&0&-1-\lambda\\\rouge{0}&1-\lambda&1\\\rouge{0}&\rouge{0}&-\lambda^2-\lambda+2\end{pmatrix}\right)<3\\&\underset{(3)}{\Longleftrightarrow}\text{« }\begin{pmatrix}1&0&-1-\lambda\\\rouge{0}&1-\lambda&1\\\rouge{0}&\rouge{0}&-\lambda^2-\lambda+2\end{pmatrix}\text{ n'est pas inversible »}\\&\underset{(4)}{\Longleftrightarrow}1=0\text{ ou }1-\lambda=0\text{ ou }-\lambda^2-\lambda+2=0\\&\Longleftrightarrow\dots\\&\Longleftrightarrow\lambda\in\{-2;1\}\end{aligned}$$

$(1)$ : Par théorème
$(2)$ : D'après les calculs précédents
$(3)$ : Par théorème
$(4)$ : Par théorème`,
    },

    // Cahier, p. 12 et page suivante. Suite attendue (fin de la photo : E_0(J)).
    {
      id: 'spectre-avec-sous-espaces-propres',
      domaine: 'algebre',
      chapitre: 'Réduction',
      titre: "Déterminer le spectre d'une matrice carrée donnée, avec les sous-espaces propres associés",
      motsCles: ['valeurs propres', 'sous-espaces propres', 'système de Cramer', 'pivot', 'Vect'],
      corps: String.raw`!! • Déterminons le spectre de $J=\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}$ et les sous-espaces propres associés

Soit $\lambda\in\R$.
Soit $X=\begin{pmatrix}x\\y\\z\end{pmatrix}\in M_{3,1}(\R)$

On a :
$$\begin{aligned}(J-\lambda I_3)X=0_{M_{3,1}(\R)}&\Longleftrightarrow\dots\quad(\text{Pivot})\\&\Longleftrightarrow\begin{cases}x+(1-\lambda)y+z=0\\\lambda y-\lambda z=0\\\lambda(3-\lambda)z=0\end{cases}\end{aligned}$$
et ce pour tout $X=\begin{pmatrix}x\\y\\z\end{pmatrix}\in M_{3,1}(\R)$

On a :
$$\begin{aligned}\lambda\in\Sp(J)&\Longleftrightarrow\text{« Le système linéaire homogène }(J-\lambda I_3)X=0_{M_{3,1}(\R)}\text{ n'est pas de Cramer »}\\&\Longleftrightarrow1=0\text{ ou }\lambda=0\text{ ou }\lambda(3-\lambda)=0\\&\Longleftrightarrow\lambda\in\{0;3\}\end{aligned}$$

Donc, $\Sp(J)=\{0;3\}$

Déterminons les sous-espaces propres de $J$.

!! $\odot$ __Déterminons $E_0(J)$ :__

Soit $X=\begin{pmatrix}x\\y\\z\end{pmatrix}\in M_{3,1}(\R)$

Alors :
$$\begin{aligned}X\in E_0(J)&\Longleftrightarrow JX=0X\\&\underset{(1)}{\Longleftrightarrow}\begin{cases}x+(1-0)y+z=0\\0y-0z=0\\0(3-0)z=0\end{cases}\\&\Longleftrightarrow X=y\begin{pmatrix}-1\\1\\0\end{pmatrix}+z\begin{pmatrix}-1\\0\\1\end{pmatrix}\end{aligned}$$
Donc, $E_0(J)=\Vect\left(\begin{pmatrix}-1\\1\\0\end{pmatrix},\begin{pmatrix}-1\\0\\1\end{pmatrix}\right)$`,
    },

    // Probabilités, photos 1 et 2
    {
      id: 'construire-espace-probabilise-fini',
      domaine: 'probabilites',
      chapitre: 'Espaces probabilisés',
      titre: String.raw`Construire un espace probabilisé fini $(\Omega,\mathcal{P}(\Omega),\P)$`,
      motsCles: ['modélisation', 'univers', 'équiprobabilité', 'probabilité uniforme', 'coefficients binomiaux', 'tirage simultané'],
      corps: String.raw`!! Construisons un espace probabilisé $(\Omega,\mathcal{P}(\Omega),\P)$ modélisant la présente expérience aléatoire.

||$\Omega$||> $\odot$ L'expérience aléatoire consistant à tirer simultanément 4 boules différenciées par leur numéro d'une urne comportant 6 boules différentes, une issue peut être modélisée par une 4-combinaison de $\llbracket1;6\rrbracket$, modélisant l'ensemble des boules présentes dans l'urne.
Donc, l'ensemble des issues peut être modélisé par l'ensemble des 4-combinaisons de $\llbracket1;6\rrbracket$

> $\odot$ D'après le $\odot$ précédent, par définition même des coefficients binomiaux, $\Omega$ est un ensemble fini de cardinal $\binom{6}{4}$.
Donc, $\Omega$ est au plus dénombrable
Donc, toute partie de $\Omega$ a droit au statut d'événement.

> Nous pouvons envisager l'espace probabilisable $(\Omega,\mathcal{P}(\Omega))$

||$\P$||> $\odot$ Le tirage s'effectuant « au hasard » dans une urne « opaque » contenant des boules « indiscernables au toucher », nous pouvons alors supposer que nous nous trouvons dans une situation d'équiprobabilité.
Nous pouvons alors munir l'espace probabilisable $(\Omega,\mathcal{P}(\Omega))$ de la probabilité uniforme notée $\P$.

Donc, [[l'espace probabilisé $(\Omega,\mathcal{P}(\Omega),\P)$ ainsi construit modélise la présente expérience aléatoire.]]`,
    },

    // Probabilités, photo 3
    {
      id: 'modeliser-un-evenement',
      domaine: 'probabilites',
      chapitre: 'Espaces probabilisés',
      titre: 'Modéliser un événement',
      motsCles: ['événement', 'intersection', 'réalisé', 'Pile'],
      corps: String.raw`!! • Modélisons l'événement $A$ : « N'obtenir que des Pile »

$$\begin{aligned}A\text{ est réalisé}\quad&\text{ssi}\quad\text{« On obtient que des Pile » est réalisé}\\&\text{ssi}\quad\text{pour tout }i\in\N^*,\ P_i\text{ est réalisé}\\&\text{ssi}\quad\bigcap_{i=1}^{+\infty}P_i\text{ est réalisé}\end{aligned}$$

Donc, [[$A=\displaystyle\bigcap_{i=1}^{+\infty}P_i$]]`,
    },

    // Probabilités, photo 4
    {
      id: 'principe-multiplicatif',
      domaine: 'probabilites',
      chapitre: 'Dénombrement',
      titre: 'Utiliser le principe multiplicatif',
      motsCles: ['cardinal', 'produit cartésien', 'dé'],
      corps: String.raw`L'expérience aléatoire consistant à lancer simultanément un dé cubique et un dé tétraédrique, l'ensemble des issues peut être modélisé par l'ensemble $\llbracket1;6\rrbracket\times\llbracket1;4\rrbracket$.
Or, les ensembles $\llbracket1;6\rrbracket$ et $\llbracket1;4\rrbracket$ sont finis, de cardinal respectif 6 et 4.
Donc, par théorème (__principe multiplicatif__), $\llbracket1;6\rrbracket\times\llbracket1;4\rrbracket$ est fini et :
$$\begin{aligned}\operatorname{Card}(\llbracket1;6\rrbracket\times\llbracket1;4\rrbracket)&=\operatorname{Card}(\llbracket1;6\rrbracket)\operatorname{Card}(\llbracket1;4\rrbracket)\\&=6\times4\\&=24\end{aligned}$$

Ainsi, [[il y a 24 résultats possibles]]`,
    },

    // Probabilités, photos 5 et 6
    {
      id: 'principe-additif',
      domaine: 'probabilites',
      chapitre: 'Dénombrement',
      titre: 'Utiliser le principe additif',
      motsCles: ['cardinal', 'union disjointe', 'tirages successifs sans remise', 'parité', '4-listes'],
      corps: String.raw`!! → 1000 boules $\in\llbracket1;1000\rrbracket$ ; 5 noires
→ 4 tirages successifs sans remise
→ Combien de tirages amènent 4 boules de la même parité ?

Notons $M$ l'ensemble des résultats amenant 4 boules de même parité.
Notons $M_p$ l'ensemble des tirages amenant 4 boules paires (respectivement $M_I$)
D'après le protocole des tirages, il y a autant d'éléments dans $M_p$ qu'il y a de 4-listes d'éléments distincts d'un ensemble fini de cardinal 500 modélisant les 500 boules paires de l'urne, à savoir, par théorème :
$$500\times499\times498\times497=\frac{500!}{496!}$$

Ainsi, $M_p$ est un ensemble fini de cardinal $\dfrac{500!}{496!}$

De même, $M_I$ est un ensemble fini de cardinal $\dfrac{500!}{496!}$

Par ailleurs, $M=M_I\cup M_p$ et $M_I\cap M_p=\emptyset$
Donc, par théorème (principe additif), $M$ est un ensemble fini et :
$$\operatorname{Card}(M)=\operatorname{Card}(M_p)+\operatorname{Card}(M_I)=2\times\frac{500!}{496!}$$

Ainsi, [[il y a $2\,\dfrac{500!}{496!}$ résultats amenant 4 boules de même parité]]`,
    },

    // Analyse, photo 1
    {
      id: 'determiner-df',
      domaine: 'analyse',
      chapitre: 'Fonctions',
      titre: String.raw`Déterminer $\mathcal{D}f$`,
      motsCles: ['ensemble de définition', 'domaine', 'quotient'],
      corps: String.raw`!! • Déterminons l'ensemble de définition de $f:x\mapsto\dfrac{3x^2+3x+5}{x+2}$

• $x\mapsto3x^2+3x+5$ et $x\mapsto x+2$ sont définies sur $\R$.
• $x\mapsto\dfrac{1}{x}$ ==n'est définie que== sur $\R^*$.
Donc :
$$\begin{aligned}\mathcal{D}f&=\{x\in\R\mid x+2\neq0\}\\&=\{x\in\R\mid x\neq-2\}\end{aligned}$$

Donc, [[$\mathcal{D}f=\R\setminus\{-2\}$]]`,
    },

    // Analyse, p. 2 et page suivante. b = -3 corrigé d'après le calcul (lecture : 3).
    {
      id: 'identification-coefficients',
      domaine: 'analyse',
      chapitre: 'Fonctions',
      titre: 'Identification coefficients',
      motsCles: ['identification', 'polynôme', 'équivalences', 'système', 'division'],
      corps: String.raw`!! $\odot$ Déterminer $(a,b,c)\in\R^3$ tel que :
$$\forall x\in\R\setminus\{-2\},\ \frac{3x^2+3x+5}{x+2}=ax+b+\frac{c}{x+2}$$

• Soit $(a,b,c)\in\R^3$.
Alors :
$$\begin{aligned}&\forall x\in\R\setminus\{-2\},\ \frac{3x^2+3x+5}{x+2}=ax+b+\frac{c}{x+2}\\&\Longleftrightarrow\forall x\in\R\setminus\{-2\},\ \frac{3x^2+3x+5}{x+2}=\frac{(ax+b)(x+2)+c}{x+2}\\&\Longleftrightarrow\forall x\in\R\setminus\{-2\},\ 3x^2+3x+5=(ax+b)(x+2)+c\\&\Longleftrightarrow\forall x\in\R\setminus\{-2\},\ ax^2+(2a+b)x+2b+c=\dots\\&\underset{(1)}{\Longleftrightarrow}\begin{cases}a=3\\2a+b=3\\2b+c=5\end{cases}\\&\Longleftrightarrow(a,b,c)=(3,-3,11)\end{aligned}$$

$(1)$ : ==D'après le principe d'identification== « {{?}} »

Donc, en vertu des équivalences précédentes,

[[==Si on pose== $(a,b,c)=(3,-3,11)$, ==alors== $(a,b,c)\in\R^3$ et :
$$\forall x\in\R\setminus\{-2\},\ \frac{3x^2+3x+5}{x+2}=ax+b+\frac{c}{x+2}$$]]`,
    },

    // Analyse, p. 3
    {
      id: 'prolonger-par-continuite',
      domaine: 'analyse',
      chapitre: 'Fonctions',
      titre: 'Prolonger par continuité',
      motsCles: ['prolongement', 'limite', 'continuité'],
      corps: String.raw`!! $\odot$ Prolonger $x\mapsto x^x$ en $0$.

• $\mathcal{D}f=\R_+^*$
• $\forall x\in\mathcal{D}f,\ f(x)=e^{x\ln(x)}$
• $\lim\limits_{0^+}f=1$

• Or, $\mathcal{D}f=\R_+^*$
• Donc, ==$\lim\limits_{0}f$ existe et vaut 1== car $0\notin\mathcal{D}f$.

• Donc, $f$ est prolongeable par continuité en $0$.

[[Si :
$$\forall x\in\R_+,\ \text{on pose }\hat{f}(x)=\begin{cases}f(x)&\text{si }x>0\\1&\text{si }x=0\end{cases},$$
alors ==$\hat{f}$ est le prolongement par continuité de $f$ en $0$.==]]`,
    },

    // Analyse, p. 4 et page suivante. Quotient par x rétabli d'après le calcul (lecture : ln(1+x)).
    {
      id: 'continuite-derivabilite-morceaux',
      domaine: 'analyse',
      chapitre: 'Fonctions',
      titre: "Continuité et dérivabilité d'une fonction définie par morceaux en un point",
      motsCles: ['taux d\'accroissement', 'limite à gauche', 'limite à droite', 'dérivée'],
      corps: String.raw`!! $\odot$ Montrons la continuité et la dérivabilité en $0$ de :
$$f:x\mapsto\begin{cases}\dfrac{\ln(1+x)}{x}&\text{si }x\in\,]-1,0[\,\cup\,]0;+\infty[\\1&\text{si }x=0\end{cases}$$

• $\begin{cases}\lim\limits_{0^-}f=1\\f(0)=1\\\lim\limits_{0^+}f=1\end{cases}$

Donc : $\lim\limits_{0^-}f=f(0)=\lim\limits_{0^+}f$

Donc, par théorème, ==$\lim\limits_{0}f$ existe et vaut $f(0)$==

Donc, [[$f$ est continue en $0$.]]

!! • Montrons que $f$ est dérivable en $0$, et calculons $f'(0)$.

==Pour ce faire, formons le taux d'accroissement de $f$ en $0$, noté $T_{f,0}$.==

• ==$\lim\limits_{0}T_{f,0}$ existe, est finie et vaut $-\dfrac{1}{2}$.==

Donc, [[$f$ est dérivable en $0$ et $f'(0)=-\dfrac{1}{2}$]]`,
    },

    // Analyse, p. 5 et page suivante. C^2 corrigé (lecture : C_2).
    {
      id: 'taylor-young-ordre-2',
      domaine: 'analyse',
      chapitre: 'Fonctions',
      titre: "Taylor Young à l'ordre 2",
      motsCles: ['développement limité', 'DL2', 'classe C2', 'dérivée seconde'],
      corps: String.raw`!! $\odot$ Déterminons un DL2 en $0$ de $x\mapsto\dfrac{1}{2+3x}$

• $\mathcal{D}f=\R\setminus\left\{-\dfrac{2}{3}\right\}$

• $x\mapsto2+3x$ est $C^2$ sur $\left[-\dfrac{1}{3};1\right]$.

Donc ==$f$ est de classe $C^2$== sur $\left[-\dfrac{1}{3};1\right]$ en tant qu'inverse d'une telle fonction ne s'annulant pas sur $\left[-\dfrac{1}{3};1\right]$

De plus, ==$0\in\left[-\dfrac{1}{3};1\right]$==

• ==Donc, d'après la formule de Taylor-Young à l'ordre 2, $f$ possède un DL2 donné par :==
$$(*)\quad f(x)\underset{x\to0}{=}f(0)+f'(0)(x-0)+\frac{f''(0)}{2}(x-0)^2+o((x-0)^2)$$

• $f$ étant $C^2$ sur $\left[-\dfrac{1}{3};1\right]$, $f$ est a fortiori ==deux fois dérivable sur cet intervalle==, et :
$$\forall x\in\left[-\frac{1}{3};1\right],\ f'(x)=-3(2+3x)^{-2}$$
De plus,
$$\forall x\in\left[-\frac{1}{3};1\right],\ f''(x)=18(2+3x)^{-3}$$
Donc :
$$\begin{aligned}&*\ f(0)=\frac{1}{2}\\[.4em]&*\ f'(0)=-\frac{3}{4}\\[.4em]&*\ f''(0)=\frac{9}{4}\end{aligned}$$

Donc, ==d'après $(*)$==, [[$f$ possède un DL2 en $0$ donné par :
$$f(x)\underset{x\to0}{=}\frac{1}{2}-\frac{3}{4}x+\frac{9}{8}x^2+o(x^2)$$]]`,
    },

    // Analyse, p. 6
    {
      id: 'asymptote-oblique',
      domaine: 'analyse',
      chapitre: 'Fonctions',
      titre: 'Asymptote oblique à la courbe de $f$',
      motsCles: ['asymptote', 'limite', 'droite'],
      corps: String.raw`!! $\odot$ Montrons que $f:x\mapsto3x-3+\dfrac{11}{x+2}$ admet une asymptote oblique en $+\infty$.

• On a :
$$\forall x\in\R_+,\ f(x)-(3x-3)=\frac{11}{x+2}$$
• $\lim\limits_{x\to+\infty}\dfrac{11}{x+2}=0$
• Donc, $\lim\limits_{x\to+\infty}f(x)-(3x-3)=0$

Or, ==$(3,-3)\in\R^2$.==
Donc, [[$\mathcal{C}f$ admet une asymptote oblique en $+\infty$ : ==la droite d'équation $y=3x-3$== est asymptote oblique à cette fonction.]]`,
    },

    // Analyse, p. 11 et page suivante. Par f_n corrigé (lecture : par f).
    {
      id: 'theoreme-bijection',
      domaine: 'analyse',
      chapitre: 'Fonctions',
      titre: 'Théorème de la bijection',
      motsCles: ['bijection monotone', 'unique solution', 'équation', 'antécédent', 'strictement croissante'],
      corps: String.raw`!! $\odot$ Soit $n\in\N$. Montrons que l'équation $x^n+x^2+2x-1=0$ d'inconnue $x\in\R$ admet une unique solution dans $\R_+$.

• Posons, pour tout $x\in\R_+$, $f_n(x)=x^n+x^2+2x-1$

• On a :

> $\odot$ $f_n$ est dérivable sur $\R_+$ donc __$f_n$ est continue sur $\R_+$__
$\odot$ $f_n$ est __strictement croissante sur $\R_+$__
$\odot$ On a :
$$\begin{aligned}&*\ f_n(0)=-1\\[.4em]&*\ \lim_{+\infty}f_n=+\infty\end{aligned}$$

• Donc, d'après les 3 points précédents $\odot$, d'après le théorème de la bijection monotone, $f_n$ induit une bijection de ==l'intervalle== $\R_+$ ==sur l'intervalle== $f_n(\R_+)$ et,
$$\begin{aligned}f_n(\R_+)&=\left[f_n(0);\lim_{+\infty}f_n\right[\\&=[-1;+\infty[\end{aligned}$$

Donc, tout élément de $[-1;+\infty[$ possède un unique antécédent par $f_n$ ==dans $\R_+$.==
Or, $0\in[-1;+\infty[$
Donc, $0$ possède un unique antécédent par $f_n$ ==dans $\R_+$.==
Donc, l'équation $f_n(x)=0$ d'inconnue $x\in\R$ ==possède== une unique solution dans $\R_+$

Donc, [[l'équation $x^n+x^2+2x-1=0$ d'inconnue $x\in\R$ possède une unique solution dans $\R_+$, et ce pour tout $n\in\N$.]]`,
    },

    // Analyse, p. 7 et page suivante
    {
      id: 'suite-arithmetico-geometrique',
      domaine: 'analyse',
      chapitre: 'Suites',
      titre: 'Terme général suite arithmético-géométrique',
      motsCles: ['point fixe', 'suite géométrique', 'raison'],
      corps: String.raw`!! $\odot$ Déterminons le terme général de $(V_n)_{n\in\N}$ définie par : $\begin{cases}\forall n\in\N,\ V_{n+1}=2V_n+1\\V_0=e^2\end{cases}$

• On a : ==$2\neq1$==
Donc $(V_n)_{n\in\N}$ est une suite __arithmético-géométrique__

• On a :
$$\forall x\in\R,\ x=2x+1\Longleftrightarrow x=\fluo{-1}$$

• Montrons que ==$(V_n-(-1))$==$_{n\in\N}$ est __géométrique__
On a :
$$\begin{aligned}\forall n\in\N,\ V_{n+1}-(-1)&=2V_n+1-(-1)\\&=2V_n+2\\&=2(V_n+1)\\&=2(V_n-(-1))\end{aligned}$$
Donc, $(V_n-(-1))_{n\in\N}$ est __géométrique de raison 2.__

• Donc, par théorème :
$$\begin{aligned}\forall n\in\N,\ V_n-(-1)&=(V_0-(-1))2^n\\&=(e^2+1)2^n\end{aligned}$$
Donc :
[[$\forall n\in\N,\ V_n=(e^2+1)2^n-1$]]`,
    },

    // Analyse, deux pages suivantes. V_{n+2} corrigé (lecture : U_{n+2}).
    {
      id: 'suite-recurrente-lineaire-ordre-2',
      domaine: 'analyse',
      chapitre: 'Suites',
      titre: "Terme général d'une suite récurrente linéaire d'ordre 2",
      motsCles: ['équation caractéristique', 'récurrence linéaire'],
      corps: String.raw`!! $\odot$ Déterminons le terme général de $(V_n)_{n\in\N}$ définie par : $\begin{cases}V_0=0\\V_1=\ln(2)\\\forall n\in\N,\ V_{n+2}=\dfrac{1}{2}V_{n+1}+\dfrac{1}{2}V_n\end{cases}$

• $(V_n)_{n\in\N}$ __vérifie__ une relation de récurrence linéaire d'ordre 2.

• Résolvons __l'équation caractéristique $(E)$__ associée à la relation de récurrence __vérifiée__ par $(V_n)_{n\in\N}$.

$(E)$ est l'équation du second degré :
$$E(x):x^2-\frac{1}{2}x-\frac{1}{2}=0\ \text{ d'inconnue }x\in\R.$$
__L'ensemble des solutions de $(E)$__, noté $\mathcal{S}(E)$ est donné par :
$$\mathcal{S}(E)=\left\{-\frac{1}{2};1\right\}$$
Donc, $(E)$ possède deux solutions réelles distinctes.
Donc, par théorème $\left(\fluo{\dfrac{1}{2}\neq0}\right)$, ==on dispose de== $(\lambda,\mu)\in\R^2$ tel que :
$$\forall n\in\N,\ V_n=\lambda\left(-\frac{1}{2}\right)^n+\mu1^n$$
Donc :
$$\forall n\in\N,\ V_n=\lambda\left(-\frac{1}{2}\right)^n+\mu\quad(*)$$
Donc, ==en particulier, « pour $n=0$ » et « pour $n=1$ »== :
$$\begin{cases}\mu=\dfrac{2}{3}\ln(2)\\[.6em]\lambda=-\dfrac{2}{3}\ln(2)\end{cases}$$
Donc, d'après $*$ :
[[$\forall n\in\N,\ V_n=\dfrac{2}{3}\ln(2)\left(1-\left(-\dfrac{1}{2}\right)^n\right)$]]`,
    },

    // Analyse, p. 9 et page suivante
    {
      id: 'squelette-recurrence',
      domaine: 'analyse',
      chapitre: 'Suites',
      titre: 'Squelette de la récurrence',
      motsCles: ['initialisation', 'hérédité', 'conclusion', 'raisonnement par récurrence'],
      corps: String.raw`• Notons, pour tout $n\in\N$, $P_n$ : « $U_n$ »
• Montrons que $P_n$ est vraie pour tout $n\in\N$ __en raisonnant par récurrence__

!! $\odot$ __Initialisation :__

Montrons $P_0$
$\vdots$
Donc $U_0$
==Donc $P_0$==

!! $\odot$ __Hérédité :__

==Soit $n\in\N$.==
Supposons $P_n$.
Montrons $P_{n+1}$.
$\vdots$
Donc $U_{n+1}$
==Donc $P_{n+1}$==

!! $\odot$ __Conclusion :__

__En vertu du principe de récurrence,__ $P_n$ est vraie pour tout $n\in\N$.

Donc, [[pour tout $n\in\N$, $U_n$.]]

{{⚠ utiliser des alinéas}}`,
    },

    // Analyse, p. 10
    {
      id: 'variations-suite-recurrente',
      domaine: 'analyse',
      chapitre: 'Suites',
      titre: "Méthode : Variations d'une suite du type $U_{n+1}=f(U_n)$",
      motsCles: ['monotonie', 'croissante', 'signe', 'suite récurrente'],
      corps: String.raw`!! $\odot$ __Méthode 1 :__

==$U_{n+1}-U_n$== avec : factorisation / tableau de signe / encadrement

!! $\odot$ __Méthode 2 :__

étude du signe de ==$h:x\mapsto f(x)-x$==

!! $\odot$ __Méthode 3 :__

Si $f$ est croissante sur un intervalle contenant tous les termes de $(U_n)_{n\in\N}$, on peut raisonner ==par récurrence==.`,
    },

    // Analyse, p. 12
    {
      id: 'nature-serie-numerique',
      domaine: 'analyse',
      chapitre: 'Séries',
      titre: "Déterminer la nature d'une série numérique",
      motsCles: ['divergence', 'sommes partielles', 'somme usuelle'],
      corps: String.raw`!! • Déterminons la nature de : $\sum\limits_{k\geqslant0}1$

On a :
$$\begin{aligned}\forall n\in\N,\ \sum_{k=0}^{n}1&\underset{(1)}{=}(n+1)1\\&=n+1\end{aligned}$$

$(1)$ : somme usuelle
Or, $\lim\limits_{n\to+\infty}(n+1)=+\infty$

Donc, $\lim\limits_{n\to+\infty}\sum\limits_{k=0}^{n}1$ existe certes, mais n'est pas finie.

Donc, [[$\sum\limits_{k\geqslant0}1$ diverge]]`,
    },

    // Analyse, p. 13 et page suivante
    {
      id: 'series-geometriques-derivees',
      domaine: 'analyse',
      chapitre: 'Séries',
      titre: 'Séries géométriques/dérivées',
      motsCles: ['série géométrique', 'convergence', 'changement d\'indice', 'somme'],
      corps: String.raw`!! • Montrons que la série $\sum\limits_{k\geqslant1}\left(\dfrac{1}{4}\right)^{2k+1}$ converge.

On a :
$$\begin{aligned}\forall k\in\N^*,\ \left(\frac{1}{4}\right)^{2k+1}&=\dots\\&=\frac{1}{64}\times\left(\frac{1}{16}\right)^{k-1}\end{aligned}$$

On reconnaît le __terme général de la série géométrique de paramètre $\dfrac{1}{16}$__, à une constante multiplicative près $\left(\dfrac{1}{64}\right)$ et à un changement d'indice par translation près (« $i=k-1$ »)
Or, $\dfrac{1}{16}\in\,]-1;1[$
Donc, par théorème, $\sum\limits_{k\geqslant1}\dfrac{1}{64}\times\left(\dfrac{1}{16}\right)^{k-1}$ converge et :
$$\sum_{k=1}^{+\infty}\frac{1}{64}\times\left(\frac{1}{16}\right)^{k-1}=\frac{1}{60}$$

Donc, [[la série $\sum\limits_{k\geqslant1}\left(\dfrac{1}{4}\right)^{2k+1}$ converge et :
$$\sum_{k=1}^{+\infty}\left(\frac{1}{4}\right)^{2k+1}=\frac{1}{60}$$]]`,
    },

    // Analyse, p. 14
    {
      id: 'comparaison-series-termes-positifs',
      domaine: 'analyse',
      chapitre: 'Séries',
      titre: 'Formulation pour la comparaison des séries à termes positifs',
      motsCles: ['critère de comparaison', 'inégalité', 'négligeabilité', 'équivalence', 'convergence'],
      corps: String.raw`!! {{$\odot$ __Par inégalité :__}}

« Donc, d'après un critère de comparaison (par inégalité) dans le contexte des séries à termes positifs, la série $\sum\limits_{k\geqslant\dots}\dots$ converge »

!! {{$\odot$ __Par négligeabilité :__}}

« Donc, d'après un critère de {{?}} (par négligeabilité), ... »

!! {{$\odot$ __Par équivalence :__}}

« Donc, d'après un critère de comparaison (par équivalence), ... »`,
    },
  ],
};
