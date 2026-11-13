window.CAHIER = {
  // Ordre d'affichage des chapitres, avec les titres du professeur.
  chapitres: {
    algebre: ['Espaces vectoriels', 'Matrices', 'Applications linéaires', 'Réduction'],
    analyse: ['Fonctions', 'Intégration', 'Équations différentielles', 'Suites', 'Séries'],
    probabilites: ['Espaces probabilisés', 'Dénombrement', 'Variables aléatoires'],
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
      source: 'Modèle 3 : DS n° 2, question 7) (a)',
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

Nous avons successivement :
$$\begin{aligned}E&=\left\{\begin{pmatrix}a&b&c\\a&b&c\\a&b&c\end{pmatrix},\ (a,b,c)\in\R^3\right\}\quad(1)\\&=\left\{\begin{pmatrix}a&0&0\\a&0&0\\a&0&0\end{pmatrix}+\begin{pmatrix}0&b&0\\0&b&0\\0&b&0\end{pmatrix}+\begin{pmatrix}0&0&c\\0&0&c\\0&0&c\end{pmatrix},\ (a,b,c)\in\R^3\right\}\\&=\left\{a\begin{pmatrix}1&0&0\\1&0&0\\1&0&0\end{pmatrix}+b\begin{pmatrix}0&1&0\\0&1&0\\0&1&0\end{pmatrix}+c\begin{pmatrix}0&0&1\\0&0&1\\0&0&1\end{pmatrix},\ (a,b,c)\in\R^3\right\}\\&=\operatorname{vect}\left(\begin{pmatrix}1&0&0\\1&0&0\\1&0&0\end{pmatrix},\begin{pmatrix}0&1&0\\0&1&0\\0&1&0\end{pmatrix},\begin{pmatrix}0&0&1\\0&0&1\\0&0&1\end{pmatrix}\right)\end{aligned}$$
$(1)$ : par définition de $E$
Or,
$$\left(\begin{pmatrix}1&0&0\\1&0&0\\1&0&0\end{pmatrix},\begin{pmatrix}0&1&0\\0&1&0\\0&1&0\end{pmatrix},\begin{pmatrix}0&0&1\\0&0&1\\0&0&1\end{pmatrix}\right)\in(M_3(\R))^3.$$
Ainsi, $E$ est le sous-espace vectoriel de $M_3(\R)$ engendré par la famille $\left(\begin{pmatrix}1&0&0\\1&0&0\\1&0&0\end{pmatrix},\begin{pmatrix}0&1&0\\0&1&0\\0&1&0\end{pmatrix},\begin{pmatrix}0&0&1\\0&0&1\\0&0&1\end{pmatrix}\right)$.
Donc, en particulier, [[$E$ est un sous-espace vectoriel de $M_3(\R)$.]]`,
    },

    // Cahier, p. 4
    {
      id: 'famille-libre',
      domaine: 'algebre',
      chapitre: 'Espaces vectoriels',
      titre: "Montrer qu'une famille est libre",
      motsCles: ['liberté', 'identification', 'coefficients'],
      source: 'DS n° 2, question 3) (b)',
      corps: String.raw`Soit $(a,b)\in\R^2$.
On suppose que $aI_3+bM=0_{F_n}$.
Donc :
$$a\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}+b\begin{pmatrix}0&0&1\\0&0&1\\0&0&1\end{pmatrix}=0_{M_3(\R)}$$
Donc :
$$\begin{pmatrix}a&0&0\\0&a&0\\0&0&a\end{pmatrix}+\begin{pmatrix}0&0&b\\0&0&b\\0&0&b\end{pmatrix}=0_{M_3(\R)}$$
Donc :
$$\begin{pmatrix}a&0&b\\0&a&b\\0&0&a+b\end{pmatrix}=\begin{pmatrix}0&0&0\\0&0&0\\0&0&0\end{pmatrix}$$
Donc, en particulier, $a=0$ et $b=0$.
Ainsi :
$$\forall(a,b)\in\R^2,\ aI_3+bM=0_{F_n}\Rightarrow(a,b)=(0,0)$$
Ainsi, $(I_3,M)$ est libre dans $F_n$.`,
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

    {
      id: 'methode-construction-espace-probabilise',
      domaine: 'probabilites',
      chapitre: 'Espaces probabilisés',
      titre: 'Construire un espace probabilisé adéquat : squelette de rédaction',
      motsCles: ['méthode', 'espace probabilisé', 'univers', 'tribu', 'probabilité uniforme', 'équiprobabilité', 'card(A)/card(Ω)'],
      source: 'Cours, Méthode (abrégée)',
      corps: String.raw`!! **Sans construction**

« On se place dans un espace probabilisé fini $(\Omega,\mathcal{T},\P)$ adéquat / modélisant la présente expérience aléatoire. »

!! **Construction** (équiprobabilité « globale », $\P(A)=\dfrac{\operatorname{card}(A)}{\operatorname{card}(\Omega)}$)

– __Univers $\Omega$__ : « L'expérience aléatoire consistant à …, une issue peut être modélisée par… Ainsi, l'ensemble univers $\Omega$ peut être modélisé par l'ensemble des… »
– __Tribu__ : « $\Omega$ étant fini, toute partie de $\Omega$ a droit au statut d'événement. On se place dans l'espace probabilisable fini $(\Omega,\mathcal{P}(\Omega))$ ».
– __Probabilité $\P$__ : « Les boules étant supposées indiscernables au toucher/les tirage s'effectuant au hasard/l'urne étant opaque, nous nous trouvons en situation d'équiprobabilité et nous pouvons donc munir l'espace probabilisable fini $(\Omega,\mathcal{P}(\Omega))$ de la probabilité uniforme, que l'on notera $\P$. »
– __Conclusion__ : « On se placera dans l'espace probabilisé $(\Omega,\mathcal{P}(\Omega),\P)$ ainsi construit. »`,
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
    {
      id: 'probabilite-equiprobabilite-cardinaux',
      domaine: 'probabilites',
      chapitre: 'Espaces probabilisés',
      titre: 'Calculer une probabilité par équiprobabilité',
      motsCles: ['probabilité uniforme', 'équiprobabilité', 'cardinal', 'card(A)/card(Ω)', 'coefficients binomiaux', 'symétrie', 'tirage simultané', 'Exercice 9'],
      source: 'Exercice 9, question 2)',
      corps: String.raw`!! **Exercice 9 :** On considère l'expérience aléatoire consistant à tirer au hasard simultanément 4 boules dans une urne opaque contenant 6 boules indiscernables au toucher numérotées de 1 à 6.
2) Calculer la probabilité d'obtenir les boules 1, 2 et 3 au niveau du tirage.

2) Notons $A$ l'événement $A$ : « Obtenir les boules 1, 2 et 3 lors du tirage ».
$\P$ étant la probabilité uniforme sur $(\Omega,\mathcal{P}(\Omega))$, par théorème,
$$\P(A)=\frac{\operatorname{Card}(A)}{\operatorname{Card}(\Omega)}$$
Or, $\odot$ D'après 1),
$$\begin{aligned}\operatorname{Card}(\Omega)&=\binom{6}{4}\\&=\binom{6}{6-4}\\&\underset{(1)}{=}\binom{6}{2}\\&\underset{(2)}{=}\frac{6(6-1)}{2}\\&=15\end{aligned}$$
$(1)$ : Par symétrie des coefficients binomiaux
$(2)$ : Par propriété

$\odot$ Déterminons $\operatorname{Card}(A)$.
On a, par définition de $A$ et de $\Omega$ :
$$A=\{\{1;2;3;4\};\{1;2;3;5\};\{1;2;3;6\}\}$$
Ainsi, $\operatorname{Card}(A)=3$

Donc, $$\begin{aligned}\P(A)&=\frac{3}{15}\\&=\frac{1}{5}\end{aligned}$$
Ainsi, [[la probabilité d'obtenir les boules 1, 2 et 3 lors du tirage vaut $1/5$.]]`,
    },

    // Probabilités, photo 3
    {
      id: 'quasi-impossibilite-que-des-pile',
      domaine: 'probabilites',
      chapitre: 'Espaces probabilisés',
      titre: 'Modéliser un événement puis montrer qu\'il est quasi-impossible (encadrement)',
      motsCles: ['événement', 'intersection', 'réalisé', 'Pile', 'quasi-impossible', 'croissance de P', 'indépendance mutuelle', 'encadrement', 'unicité de la limite', 'Exemple 19'],
      source: 'Cours, Exemple 19',
      corps: String.raw`!! **Exemple 19 :** Soit $p\in\,]0,1[$.
On considère l'expérience aléatoire consistant à lancer indéfiniment une même pièce de monnaie amenant Pile à chaque lancer avec la probabilité $p$.
Montrer qu'il est quasi-impossible de n'obtenir que des Pile.

On se place dans un espace probabilisé $(\Omega,\mathcal{T},\P)$ adéquat.
On note $T$ : « N'obtenir que des Pile. »
On note, pour tout $i\in\N^*$, $P_i$ : « Obtenir Pile au $i$ème lancer. »
Alors, $T$ est réalisé si et seulement si, pour tout $i\in\N^*$, $P_i$ est réalisé
Donc :
$$T=\bigcap_{i=1}^{+\infty}P_i$$
Or, si, pour tout $i\in\N^*$, $P_i$ est réalisé, alors, pour tout $n\in\N^*$, pour tout $i\in\llbracket1,n\rrbracket$, $P_i$ est réalisé.
Donc :
$$\forall n\in\N^*,\ \bigcap_{i=1}^{+\infty}P_i\subset\bigcap_{i=1}^{n}P_i$$
Donc :
$$\forall n\in\N^*,\ T\subset\bigcap_{i=1}^{n}P_i$$
Donc, par croissance et positivité de $\P$ :
$$\forall n\in\N^*,\ 0\leqslant\P(T)\leqslant\P\left(\bigcap_{i=1}^{n}P_i\right)$$
Or, __par indépendance mutuelle des $P_i$__ ($i\in\N^*$) (induite par l'indépendance des lancers) :
$$\forall n\in\N^*,\ \P\left(\bigcap_{i=1}^{n}P_i\right)=\prod_{i=1}^{n}\P(P_i)$$
Donc :
$$\forall n\in\N^*,\ \P\left(\bigcap_{i=1}^{n}P_i\right)=\prod_{i=1}^{n}p=p^n$$
Ainsi :
$$\forall n\in\N^*,\ 0\leqslant\P(T)\leqslant p^n$$
Or, $\lim\limits_{n\to+\infty}0=0$ et, par théorème, comme $p\in\,]-1,1[$, $\lim\limits_{n\to+\infty}p^n=0$.
Donc, d'après le théorème d'encadrement, $\lim\limits_{n\to+\infty}\P(T)=0$.
Or, $\lim\limits_{n\to+\infty}\P(T)=\P(T)$.
Donc, __par unicité de la limite__, $\P(T)=0$.
Ainsi, [[il est quasi-impossible de n'obtenir que des Pile.]]`,
    },

    // Probabilités, corrigé du professeur (remplace la version du cahier)
    {
      id: 'principe-multiplicatif',
      domaine: 'probabilites',
      chapitre: 'Dénombrement',
      titre: 'Utiliser le principe multiplicatif',
      motsCles: ['cardinal', 'anagrammes', 'combinaisons', 'permutations', 'coefficients binomiaux'],
      source: 'Corrigé, question 2',
      corps: String.raw`Le mot MATHEMATIQUES est un mot de 13 lettres constitué de 2 lettres M, 2 lettres A, 2 lettres T, 2 lettres E, 1 lettre H, 1 lettre I, 1 lettre Q, 1 lettre U et 1 lettre S.
Un anagramme du mot MATHEMATIQUES est entièrement déterminé par :

• le choix de l'emplacement des 2 lettres M parmi les 13 emplacements possibles : il y a autant de tels choix qu'il y a de 2-combinaison de l'ensemble $\llbracket1,13\rrbracket$, à savoir, par définition même des coefficients binomiaux, $\dbinom{13}{2}$ ;
• ce choix étant fait, par le choix de l'emplacement des 2 lettres A parmi les 11 emplacements possibles restants : il y a $\dbinom{11}{2}$ tels choix ;
• ces choix étant faits, par le choix de l'emplacement des 2 lettres T parmi les 9 emplacements possibles restants : il y a $\dbinom{9}{2}$ tels choix ;
• ces choix étant faits, par le choix de l'emplacement des 2 lettres E parmi les 7 emplacements possibles restants : il y a $\dbinom{7}{2}$ tels choix ;
• ces choix étant faits, par le choix d'une permutation de l'ensemble des lettres « célibataires » H, I, Q, U et S : il y a autant de tels choix qu'il y a de permutations d'un ensemble de cardinal 5 à savoir, par théorème, $5!=120$.

Ainsi, par théorème (__principe multiplicatif__),
[[il y a $\dbinom{13}{2}\dbinom{11}{2}\dbinom{9}{2}\dbinom{7}{2}5!=389188800$ anagrammes du mot MATHEMATIQUES.]]`,
    },

    // Probabilités, corrigé du professeur (remplace la version du cahier)
    {
      id: 'principe-additif',
      domaine: 'probabilites',
      chapitre: 'Dénombrement',
      titre: 'Utiliser le principe additif',
      motsCles: ['cardinal', 'union disjointe', 'combinaisons', 'cartes', 'couleur', 'coefficients binomiaux'],
      source: 'Corrigé, exercice 6',
      corps: String.raw`Notons $\mathsf{T}$ l'ensemble des tirages amenant 5 cartes de la même couleur.
Notons $\mathsf{R}$ l'ensemble des tirages amenant 5 cartes de couleur rouge.
Notons $\mathsf{N}$ l'ensemble des tirages amenant 5 cartes de couleur noire.
Rouge et noir étant les seules couleurs présentes dans le paquet de cartes, nous avons :
$$\mathsf{T}=\mathsf{R}\cup\mathsf{N}$$

Il y a autant d'éléments dans $\mathsf{R}$ qu'il y a de 5-combinaisons de tout ensemble de cardinal 26 modélisant les 26 cartes de couleur rouge, à savoir, par définition même des coefficients binomiaux, $\dbinom{26}{5}$.
Ainsi, $\operatorname{card}(\mathsf{R})=\dbinom{26}{5}$.
De même, le paquet de cartes comportant également 26 cartes de couleur noire, $\mathsf{N}$ est un ensemble fini et $\operatorname{card}(\mathsf{N})=\dbinom{26}{5}$.
De plus, $\mathsf{T}=\mathsf{R}\cup\mathsf{N}$ et $\mathsf{R}\cap\mathsf{N}=\varnothing$.
Donc, par théorème (__principe additif__), $\mathsf{T}$ est un ensemble fini et :
$$\operatorname{card}(\mathsf{T})=\operatorname{card}(\mathsf{R})+\operatorname{card}(\mathsf{N})=\binom{26}{5}+\binom{26}{5}=2\binom{26}{5}$$

Ainsi, [[$2\dbinom{26}{5}$ amènent 5 cartes de la même couleur.]]`,
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
      source: 'DS n° 2, questions 3) et 4) (b)',
      corps: String.raw`!! • Continuité de $f$ sur $]-\infty,0[\,\cup\,]0,1[$ :

Par définition :
$$\forall x\in\,]-\infty,0[\,\cup\,]0,1[,\ f(x)=\frac{-x}{(1-x)\ln(1-x)}$$
Or, $x\mapsto1-x$ est continue sur $\R$ (en tant que fonction affine) a fortiori sur $]-\infty,0[\,\cup\,]0,1[$ et $\forall x\in\,]-\infty,0[\,\cup\,]0,1[$, $1-x>0$.
De plus, $x\mapsto\ln(x)$ est continue sur $\R_+^*$.
Donc, par composition puis produit, $x\mapsto(1-x)\ln(1-x)$ est continue sur $]-\infty,0[\,\cup\,]0,1[$.
De plus :
$$\forall x\in\,]-\infty,0[\,\cup\,]0,1[,\ (1-x)\ln(1-x)\neq0$$
Enfin, $x\mapsto-x$ est continue sur $\R$ (en tant que fonction affine) a fortiori sur $]-\infty,0[\,\cup\,]0,1[$.
Ainsi, $f$ est continue sur $]-\infty,0[\,\cup\,]0,1[$ en tant que quotient de deux telles fonctions dont le dénominateur ne s'annule pas sur $]-\infty,0[\,\cup\,]0,1[$.

!! • Continuité de $f$ en $0$ :

Par définition :
$$\forall x\in\,]-\infty,0[\,\cup\,]0,1[,\ f(x)=\frac{-x}{(1-x)\ln(1-x)}$$
Or, $\lim\limits_{x\to0}(-x)=0$ et, d'après un équivalent usuel $\ln(1+x)\underset{x\to0}{\sim}x$
Donc, par théorème :
$$\ln(1-x)\underset{x\to0}{\sim}(-x)$$
De plus, $\lim\limits_{x\to0}(1-x)=1$ et $1\neq0$.
Donc, par théorème :
$$1-x\underset{x\to0}{\sim}1$$
Ainsi, par produit, puis passage à l'inverse ($x\mapsto1\times(-x)$ ne s'annulant pas sur un voisinage épointé de $0$) et produit :
$$\frac{-x}{(1-x)\ln(1-x)}\underset{x\to0}{\sim}\frac{-x}{1\times(-x)}$$
Donc, après simplifications :
$$\frac{-x}{(1-x)\ln(1-x)}\underset{x\to0}{\sim}1$$
Or, $\lim\limits_{x\to0}1=1$.
Donc, par théorème, $\lim\limits_{x\to0}\dfrac{-x}{(1-x)\ln(1-x)}=1$.
Donc, $\lim\limits_{x\to0^-}f(x)=1$ et $\lim\limits_{x\to0^+}f(x)=1$.
Or, $f(0)=1$.
Ainsi,
$$\lim_{x\to0^-}f(x)=f(0)=\lim_{x\to0^+}f(x)$$
Donc, $f$ est continue en $0$.

Continue sur $]-\infty,0[\,\cup\,]0,1[$ et en $0$, [[$f$ est continue sur $]-\infty,1[$.]]

!! • Montrons que $f$ est dérivable en $0$.

Pour ce faire, formons le taux d'accroissement de $f$ en $0$, noté $T_{f,0}$.
Nous avons :
$$\begin{aligned}\forall x\in\,]-\infty,0[\,\cup\,]0,1[,\ T_{f,0}(x)&=\frac{f(x)-f(0)}{x-0}\\&=\frac{\dfrac{-x}{(1-x)\ln(1-x)}-1}{x}\\&=-\frac{x+(1-x)\ln(1-x)}{x(1-x)\ln(1-x)}\end{aligned}$$
Or, $\lim\limits_{x\to0}(-x)=0$ et, d'après un équivalent usuel, $\ln(1+x)\underset{x\to0}{\sim}x$.
Donc, par théorème :
$$\ln(1-x)\underset{x\to0}{\sim}(-x)$$
De plus, $\lim\limits_{x\to0}(1-x)=1$ et $1\neq0$.
Donc, par théorème :
$$1-x\underset{x\to0}{\sim}1$$
Ainsi, par produit, passage à l'inverse ($x\mapsto-x^2$ ne s'annulant pas sur $\R^*$) et puis produit, après simplifications :
$$T_{f,0}(x)\underset{x\to0}{\sim}\frac{x+(1-x)\ln(1-x)}{x^2}\quad(\star)$$
Or, d'après 4) (a) :
$$\ln(1-x)\underset{x\to0}{=}-x-\frac{x^2}{2}+o\left(x^2\right)$$
Donc, par définition de la notion de négligeabilité, on dispose d'un voisinage $V_0$ de $0$ et d'une fonction $\varepsilon:V_0\to\R$ de limite nulle en $0$ tels que :
$$\forall x\in V_0,\ \ln(1-x)=-x-\frac{x^2}{2}+x^2\varepsilon(x)$$
Ainsi,
$$\begin{aligned}\forall x\in V_0\setminus\{0\},\ \frac{x+(1-x)\ln(1-x)}{x^2}&=\frac{x+(1-x)\left(-x-\dfrac{x^2}{2}+x^2\varepsilon(x)\right)}{x^2}\\&=\frac{x-x-\dfrac{x^2}{2}+x^2\varepsilon(x)+x^2+\dfrac{x^3}{2}-x^3\varepsilon(x)}{x^2}\\&=\frac{1}{2}+\frac{x}{2}+\varepsilon(x)-x\varepsilon(x)\end{aligned}$$
Or, $\lim\limits_{0}\varepsilon=0$.
Donc, par produit et somme :
$$\lim_{x\to0}\left(\frac{1}{2}+\frac{x}{2}+\varepsilon(x)-x\varepsilon(x)\right)=\frac{1}{2}+\frac{0}{2}+0-0\times0=\frac{1}{2}$$
Ainsi,
$$\lim_{x\to0}\frac{x+(1-x)\ln(1-x)}{x^2}=\frac{1}{2}$$
Ainsi, d'après $(\star)$, par théorème, $\lim\limits_{x\to0}T_{f,0}(x)$ existe, est finie et vaut $\dfrac{1}{2}$.
Donc, [[$f$ est dérivable en $0$ et $f'(0)=\dfrac{1}{2}$.]]`,
    },

    // Analyse, p. 5 et page suivante. C^2 corrigé (lecture : C_2).
    {
      id: 'taylor-young-ordre-2',
      domaine: 'analyse',
      chapitre: 'Fonctions',
      titre: "Taylor Young à l'ordre 2",
      motsCles: ['développement limité', 'DL2', 'classe C2', 'dérivée seconde'],
      source: 'DS n° 2, question 4) (a)',
      corps: String.raw`!! • 1ère méthode : à l'aide de la formule de Taylor-Young

Posons, pour tout $x\in\,]-\infty,1[$, $g(x)=\ln(1-x)$.
$g$ est de classe $C^2$ sur $]-\infty,1[$ en tant que composée de telles fonctions sur des intervalles adéquats et $]-\infty,1[$ est un intervalle (ouvert) contenant $0$.
Donc, __d'après la formule de Taylor-Young à l'ordre 2__, $g$ possède un développement limité à l'ordre 2 en $0$ donné par :
$$g(x)\underset{x\to0}{=}g(0)+g'(0)(x-0)+\frac{g''(0)}{2}(x-0)^2+o\left(x^2\right)$$
Or, $\forall x\in\,]-\infty,1[$, $g'(x)=\dfrac{-1}{1-x}=\dfrac{1}{x-1}$ et $g''(x)=-\dfrac{1}{(x-1)^2}$
Ainsi, $g(0)=0$ et $g'(0)=-1$ et $g''(0)=-1$.
Donc, [[le développement limité de $x\mapsto\ln(1-x)$ à l'ordre 2 en $0$ existe et est donné par :
$$\ln(1-x)\underset{x\to0}{=}-x-\frac{x^2}{2}+o\left(x^2\right)$$]]

!! • 2ème méthode : sans la formule de Taylor-Young

Par théorème (__développement limité à l'ordre 2 usuel__) :
$$\ln(1+x)\underset{x\to0}{=}x-\frac{x^2}{2}+o\left(x^2\right)$$
Or, $\lim\limits_{x\to0}(-x)=0$.
Donc, par théorème :
$$\ln(1+(-x))\underset{x\to0}{=}-x-\frac{(-x)^2}{2}+o\left((-x)^2\right)$$
Or, par parité de la fonction carrée, pour tout $x\in\R$, $(-x)^2=x^2$.
Donc :
$$\ln(1-x)\underset{x\to0}{=}-x-\frac{x^2}{2}+o\left(x^2\right)$$
Donc, si on pose $(a,b,c)=(0,-1,-1/2)$, alors $(a,b,c)\in\R^3$ et :
$$\ln(1-x)\underset{x\to0}{=}a+b(x-0)+c(x-0)^2+o\left(x^2\right)$$
Donc, [[le développement limité de $x\mapsto\ln(1-x)$ à l'ordre 2 en $0$ existe et est donné par :
$$\ln(1-x)\underset{x\to0}{=}-x-\frac{x^2}{2}+o\left(x^2\right)$$]]`,
    },

    // Analyse, p. 6
    {
      id: 'asymptote-oblique',
      domaine: 'analyse',
      chapitre: 'Fonctions',
      titre: 'Asymptote oblique à la courbe de $f$',
      motsCles: ['asymptote', 'limite', 'droite'],
      source: 'DS n° 1, questions 7) (a) et (b)',
      corps: String.raw`!! • Calculons, sous réserve d'existence, $\lim\limits_{x\to+\infty}(f_a(x)-ax)$.

Nous avons :
$$\begin{aligned}\forall x\in\R,\ f_a(x)-ax&=\ln\left(\frac{e^{ax}+e^{-ax}}{2a}\right)-ax\\&=\ln\left(\frac{e^{ax}+e^{-ax}}{2a}\right)-\ln\left(e^{ax}\right)\quad(1)\\&=\ln\left(\frac{e^{ax}+e^{-ax}}{2ae^{ax}}\right)\quad(2)\\&=\ln\left(\frac{1+e^{-2ax}}{2a}\right)\end{aligned}$$
$(1)$ : car $\exp:\R\to\R_+^*$ et $\ln:\R_+^*\to\R$ sont des bijections réciproques l'une de l'autre
$(2)$ : par propriété de $\ln$
Or, $a>0$.
Donc, $-2a<0$.
Donc, $\lim\limits_{x\to+\infty}(-2ax)=-\infty$.
Or, $\lim\limits_{x\to-\infty}e^x=0$.
Donc, par composition, puis somme, puis produit :
$$\lim_{x\to+\infty}\frac{1+e^{-2ax}}{2a}=\frac{1}{2a}$$
Or, comme $a>0$, $\dfrac{1}{2a}\in\R_+^*$.
De plus, $\ln$ est continue sur $\R_+^*$.
Donc, $\ln$ est continue en $\dfrac{1}{2a}$.
Donc, $\lim\limits_{1/(2a)}\ln=\ln\left(\dfrac{1}{2a}\right)$.
Ainsi, par composition,
$$\lim_{x\to+\infty}\ln\left(\frac{1+e^{-2ax}}{2a}\right)=\ln\left(\frac{1}{2a}\right)=-\ln(2a)$$
Donc, [[$\lim\limits_{x\to+\infty}(f_a(x)-ax)=-\ln(2a)$.]]

!! • Déduisons-en que $(C_a)$ possède une asymptote oblique au voisinage de $+\infty$ notée $(\Delta_a)$ dont on précisera une équation.

D'après 7) (a), $\lim\limits_{x\to+\infty}(f_a(x)-ax)=-\ln(2a)$.
Donc, par somme, $\lim\limits_{x\to+\infty}(f_a(x)-(ax-\ln(2a)))=0$.
Donc, par définition, [[la droite $(\Delta_a):y=ax-\ln(2a)$ est asymptote oblique $(C_a)$ au voisinage de $+\infty$.]]`,
    },

    // Analyse, p. 11 et page suivante. Par f_n corrigé (lecture : par f).
    {
      id: 'theoreme-bijection',
      domaine: 'analyse',
      chapitre: 'Fonctions',
      titre: 'Théorème de la bijection',
      motsCles: ['bijection monotone', 'unique solution', 'équation', 'antécédent', 'strictement croissante'],
      source: 'DS n° 2, question 7) (a)',
      corps: String.raw`Soit $n\in\N^*$.
Nous savons que :

> • $f$ est strictement croissante sur $]-\infty,1[$ a fortiori sur $[0,1[$ d'après 5) (b) ;
• $f$ est continue sur $]-\infty,1[$, a fortiori sur $[0,1[$, d'après 3) ;
• $f(0)=1$ et $\lim\limits_{1^-}f=+\infty$, d'après 5) (c)

En vertu du théorème de la bijection, $f$ réalise une bijection de l'intervalle $[0,1[$ sur l'intervalle $f([0,1[)$ et $f([0,1[)=\left[f(0),\lim\limits_{1^-}f\right[=[1,+\infty[$.
Or, comme $n\in\N^*$, $n\in[1,+\infty[$.
Donc, $n$ possède un unique antécédent dans $[0,1[$ par $f$.
Ainsi, [[il existe un seul réel de $[0,1[$, noté $u_n$ tel que $f(u_n)=n$, et ce pour tout $n\in\N^*$]]`,
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

« Donc, d'après un critère de comparaison (par négligeabilité), ... »

!! {{$\odot$ __Par équivalence :__}}

« Donc, d'après un critère de comparaison (par équivalence), ... »`,
    },

    // Corrigés des DS 1 et 2
    {
      id: 'base-libre-generatrice-dimension',
      domaine: 'algebre',
      chapitre: 'Espaces vectoriels',
      titre: 'Montrer qu\'une famille libre et génératrice est une base, puis donner la dimension',
      motsCles: ['base', 'libre', 'génératrice', 'dimension', 'cardinal'],
      source: 'DS n° 2, questions 7) (b) et (c)',
      corps: String.raw`Posons $\mathcal{B}=\left(\begin{pmatrix}1&0&0\\1&0&0\\1&0&0\end{pmatrix},\begin{pmatrix}0&1&0\\0&1&0\\0&1&0\end{pmatrix},\begin{pmatrix}0&0&1\\0&0&1\\0&0&1\end{pmatrix}\right)$.
Alors, d'après 7) (a), $\mathcal{B}$ est une famille génératrice de $E$.
Soit $(a,b,c)\in\R^3$.
On suppose que :
$$a\begin{pmatrix}1&0&0\\1&0&0\\1&0&0\end{pmatrix}+b\begin{pmatrix}0&1&0\\0&1&0\\0&1&0\end{pmatrix}+c\begin{pmatrix}0&0&1\\0&0&1\\0&0&1\end{pmatrix}=0_E$$
Ainsi :
$$\begin{pmatrix}a&0&0\\a&0&0\\a&0&0\end{pmatrix}+\begin{pmatrix}0&b&0\\0&b&0\\0&b&0\end{pmatrix}+\begin{pmatrix}0&0&c\\0&0&c\\0&0&c\end{pmatrix}=\begin{pmatrix}0&0&0\\0&0&0\\0&0&0\end{pmatrix}$$
Donc :
$$\begin{pmatrix}a&b&c\\a&b&c\\a&b&c\end{pmatrix}=\begin{pmatrix}0&0&0\\0&0&0\\0&0&0\end{pmatrix}$$
Donc, en particulier, $a=0$ et $b=0$ et $c=0$.
Ainsi, $\mathcal{B}$ est libre dans $E$.
Libre dans $E$ et génératrice de $E$, [[$\mathcal{B}$ est une base de $E$.]]

D'après 7) (b), la famille $\mathcal{B}$ (définie au niveau de la question 7) (b)) est une base de $E$.
De plus, $\mathcal{B}$ comporte 3 vecteurs.
Donc, [[$\dim(E)=3$.]]`,
    },
    {
      id: 'base-libre-cardinal',
      domaine: 'algebre',
      chapitre: 'Espaces vectoriels',
      titre: 'Montrer qu\'une famille est une base par sa liberté et son cardinal',
      motsCles: ['base', 'libre', 'cardinal', 'dimension', 'identification'],
      source: 'DS n° 2, question 8) (a)',
      corps: String.raw`Par hypothèse, $\mathcal{B}'=\left(\begin{pmatrix}3&3&3\\3&3&3\\3&3&3\end{pmatrix},\begin{pmatrix}2&2&0\\2&2&0\\2&2&0\end{pmatrix},\begin{pmatrix}1&0&0\\1&0&0\\1&0&0\end{pmatrix}\right)$.
Ainsi, $\mathcal{B}'$ est une famille comportant 3 matrices carrées d'ordre 3 dont les trois lignes sont à chaque fois identiques.
Ainsi, $\mathcal{B}'$ est une famille comportant 3 vecteurs de $E$.
Soit $(a,b,c)\in\R^3$.
On suppose que :
$$a\begin{pmatrix}3&3&3\\3&3&3\\3&3&3\end{pmatrix}+b\begin{pmatrix}2&2&0\\2&2&0\\2&2&0\end{pmatrix}+c\begin{pmatrix}1&0&0\\1&0&0\\1&0&0\end{pmatrix}=0_E$$
Donc :
$$\begin{pmatrix}3a+2b+c&3a+2b&3a\\3a+2b+c&3a+2b&3a\\3a+2b+c&3a+2b&3a\end{pmatrix}=\begin{pmatrix}0&0&0\\0&0&0\\0&0&0\end{pmatrix}$$
Donc, par identification des coefficients deux à deux, nous avons en particulier : $3a+2b+c=0$ et $3a+2b=0$ et $3a=0$.
Ainsi, $2b+c=0$ et $2b=0$ et $3a=0$.
Donc, $c=0$ et $2b=0$ et $3a=0$.
Donc, $c=0$ et $b=0$ et $a=0$.
Ainsi, la famille $\mathcal{B}'$ est libre dans $E$.
De plus, $\mathcal{B}'$ comporte 3 vecteurs et, d'après 7) (c), $\dim(E)=3$.
Donc, par théorème, [[$\mathcal{B}'$ est une base de $E$.]]`,
    },
    {
      id: 'analyse-synthese',
      domaine: 'algebre',
      chapitre: 'Espaces vectoriels',
      titre: 'Déterminer un ensemble par analyse-synthèse',
      motsCles: ['analyse', 'synthèse', 'matrice triangulaire', 'raisonnement'],
      source: 'DS n° 2, question 9) (a)',
      corps: String.raw`Pour ce faire, raisonnons par Analyse-Synthèse.

!! • Analyse :

Soit $T$ une matrice triangulaire supérieure appartenant à $E$.
Alors, on dispose de 6 réels $a$, $b$, $c$, $d$, $e$ et $f$ tels que :
$$T=\begin{pmatrix}a&b&c\\0&d&e\\0&0&f\end{pmatrix}$$
Comme $T$ est un élément de $E$, les lignes de $T$ sont identiques.
Ainsi, nécessairement, $a=0$ et $b=d=0$ et $c=e=f$.
Ainsi :
$$T=\begin{pmatrix}0&0&c\\0&0&c\\0&0&c\end{pmatrix}$$

!! • Synthèse :

Soit $c\in\R$.
Posons $T=\begin{pmatrix}0&0&c\\0&0&c\\0&0&c\end{pmatrix}$.
Alors, $T$ est une matrice triangulaire supérieure (car $T$ est une matrice carrée dont tous les coefficients strictement sous-diagonaux sont nuls).
De plus, $T$ est une matrice carrée d'ordre 3 dont les 3 lignes sont identiques.
Ainsi, $T\in E$.

Ainsi, par analyse-synthèse, nous avons montré : [[$T_E=\left\{\begin{pmatrix}0&0&c\\0&0&c\\0&0&c\end{pmatrix},\ c\in\R\right\}$.]]`,
    },
    {
      id: 'matrice-inversible-noyau',
      domaine: 'algebre',
      chapitre: 'Matrices',
      titre: 'Montrer qu\'une matrice est inversible par l\'étude du système $AX=0$',
      motsCles: ['inversible', 'noyau', 'système', 'équivalences'],
      source: 'DS n° 1, question 7)',
      corps: String.raw`Nous avons :
$$A=\begin{pmatrix}0&1&0&0\\1&0&1&0\\0&1&0&1\\0&0&1&0\end{pmatrix}$$
Soit $X=\begin{pmatrix}x\\y\\z\\t\end{pmatrix}\in M_{4,1}(\R)$.
On a :
$$\begin{aligned}AX=0_{M_{4,1}(\R)}&\Longleftrightarrow\begin{pmatrix}0&1&0&0\\1&0&1&0\\0&1&0&1\\0&0&1&0\end{pmatrix}\begin{pmatrix}x\\y\\z\\t\end{pmatrix}=\begin{pmatrix}0\\0\\0\\0\end{pmatrix}\\&\Longleftrightarrow\begin{pmatrix}y\\x+z\\y+t\\z\end{pmatrix}=\begin{pmatrix}0\\0\\0\\0\end{pmatrix}\\&\Longleftrightarrow y=0\text{ et }x+z=0\text{ et }y+t=0\text{ et }z=0\\&\Longleftrightarrow y=0\text{ et }x+0=0\text{ et }0+t=0\text{ et }z=0\\&\Longleftrightarrow y=0\text{ et }x=0\text{ et }t=0\text{ et }z=0\\&\Longleftrightarrow(x,y,z,t)=(0,0,0,0)\\&\Longleftrightarrow X=0_{M_{4,1}(\R)}\end{aligned}$$
Donc, par théorème, [[$A$ est inversible.]]`,
    },
    {
      id: 'rang-definition-non-inversible',
      domaine: 'algebre',
      chapitre: 'Matrices',
      titre: 'Calculer un rang par la dimension du Vect des colonnes, puis conclure sur l\'inversibilité',
      motsCles: ['rang', 'vect', 'colonnes', 'non inversible', 'dimension'],
      source: 'DS n° 2, questions 2) (a) et (b)',
      corps: String.raw`On a :
$$\begin{aligned}\rg(M)&=\rg\begin{pmatrix}0&0&1\\0&0&1\\0&0&1\end{pmatrix}\\&=\dim\operatorname{vect}\left(\begin{pmatrix}0\\0\\0\end{pmatrix},\begin{pmatrix}0\\0\\0\end{pmatrix},\begin{pmatrix}1\\1\\1\end{pmatrix}\right)\quad(1)\\&=\dim\operatorname{vect}\left(\begin{pmatrix}1\\1\\1\end{pmatrix}\right)\quad(2)\\&=1\quad(3)\end{aligned}$$
$(1)$ : par définition du rang d'une matrice
$(2)$ : par propriété de simplification de « vect »
$(3)$ : la famille $\left(\begin{pmatrix}1\\1\\1\end{pmatrix}\right)$ est libre dans $\operatorname{vect}\left(\begin{pmatrix}1\\1\\1\end{pmatrix}\right)$ en tant que famille réduite à un unique vecteur non nul : elle constitue donc une base (comportant 1 élément) de l'espace vectoriel qu'elle engendre qui est donc de dimension 1.
Ainsi, [[$\rg(M)=1$.]]

On a, d'après 1) $M\in M_3(\R)$.
De plus, d'après 2) (a), $\rg(M)=1$ et $1\neq3$.
Donc, $M\in M_3(\R)$ et $\rg(M)\neq3$. Donc, par théorème, [[$M$ n'est pas inversible.]]`,
    },
    {
      id: 'montrer-endomorphisme',
      domaine: 'algebre',
      chapitre: 'Applications linéaires',
      titre: 'Montrer qu\'une application est un endomorphisme',
      motsCles: ['endomorphisme', 'linéarité', 'application linéaire', 'bien définie'],
      source: 'DS n° 1, question 8) (a)',
      corps: String.raw`• l'ensemble $\R^4$ peut naturellement être muni d'une structure d'espace vectoriel réel (espace vectoriel de référence).

• Pour tout $(x,y,z,t)\in\R^4$, $y$, $x+z$, $y+t$ et $z$ sont quatre réels bien définis.
Donc, pour tout $(x,y,z,t)\in\R^4$, $(y,x+z,y+t,z)$ est un élément de $\R^4$ bien défini.
Donc, pour tout $(x,y,z,t)\in\R^4$, $f(x,y,z,t)$ est un élément de $\R^4$ bien défini.
Donc, $f$ est une application de l'ensemble $\R^4$ dans lui-même bien définie.

• Soit $(\lambda,\mu)\in\R^2$.
Soit $(X_1,X_2)\in\left(\R^4\right)^2$.
Alors, on dispose de $(x_1,y_1,z_1,t_1,x_2,y_2,z_2,t_2)\in\R^8$ tel que :
$$X_1=(x_1,y_1,z_1,t_1)\ \text{ et }\ X_2=(x_2,y_2,z_2,t_2)$$
Nous avons :
$$\begin{aligned}f(\lambda.X_1+\mu.X_2)&=f(\lambda.(x_1,y_1,z_1,t_1)+\mu.(x_2,y_2,z_2,t_2))\\&=f((\lambda x_1,\lambda y_1,\lambda z_1,\lambda t_1)+(\mu x_2,\mu y_2,\mu z_2,\mu t_2))\\&=f((\lambda x_1+\mu x_2,\lambda y_1+\mu y_2,\lambda z_1+\mu z_2,\lambda t_1+\mu t_2))\\&=(\lambda y_1+\mu y_2,(\lambda x_1+\mu x_2)+(\lambda z_1+\mu z_2),(\lambda y_1+\mu y_2)+(\lambda t_1+\mu t_2),\lambda z_1+\mu z_2)\\&=(\lambda y_1+\mu y_2,\lambda(x_1+z_1)+\mu(x_2+z_2),\lambda(y_1+t_1)+\mu(y_2+t_2),\lambda z_1+\mu z_2)\\&=(\lambda y_1,\lambda(x_1+z_1),\lambda(y_1+t_1),\lambda z_1)+(\mu y_2,\mu(x_2+z_2),\mu(y_2+t_2),\mu z_2)\\&=\lambda.(y_1,x_1+z_1,y_1+t_1,z_1)+\mu.(y_2,x_2+z_2,y_2+t_2,z_2)\\&=\lambda.f((x_1,y_1,z_1,t_1))+\mu.f((x_2,y_2,z_2,t_2))\\&=\lambda.f(X_1)+\mu.f(X_2)\end{aligned}$$
Ainsi, en vertu des trois points précédents, $f$ est une application linéaire de l'espace vectoriel de référence $\R^4$ dans lui-même.
Donc, [[$f$ est un endomorphisme de l'espace vectoriel de référence $\R^4$.]]`,
    },
    {
      id: 'endomorphisme-canoniquement-associe',
      domaine: 'algebre',
      chapitre: 'Applications linéaires',
      titre: 'Former la matrice d\'un endomorphisme dans la base canonique',
      motsCles: ['matrice', 'endomorphisme', 'base canonique', 'canoniquement associé'],
      source: 'DS n° 1, question 8) (b)',
      corps: String.raw`Notons $\mathcal{B}$ la base canonique de l'espace vectoriel de référence $\R^4$.
Alors, $\mathcal{B}=(e_i)_{i\in\llbracket1,4\rrbracket}$ où l'on a posé :
$$e_1=(1,0,0,0)\ \text{ et }\ e_2=(0,1,0,0)\ \text{ et }\ e_3=(0,0,1,0)\ \text{ et }\ e_4=(0,0,0,1).$$
D'après 8) (a), $f$ est un endomorphisme de $\R^4$.
Formons $\operatorname{Mat}_{\mathcal{B}}(f)$.
Nous avons :

• $f(1,0,0,0)=(0,1+0,0+0,0)=(0,1,0,0)=0.(1,0,0,0)+1.(0,1,0,0)+0.(0,0,1,0)+0.(0,0,0,1)$

• $f(0,1,0,0)=(1,0+0,1+0,0)=(1,0,1,0)=1.(1,0,0,0)+0.(0,1,0,0)+1.(0,0,1,0)+0.(0,0,0,1)$

• $f(0,0,1,0)=(0,0+1,0+0,1)=(0,1,0,1)=0.(1,0,0,0)+1.(0,1,0,0)+0.(0,0,1,0)+1.(0,0,0,1)$

• $f(0,0,0,1)=(0,0+0,0+1,0)=(0,0,1,0)=0.(1,0,0,0)+0.(0,1,0,0)+1.(0,0,1,0)+0.(0,0,0,1)$

Ainsi :
$$\operatorname{Mat}_{\mathcal{B}}(f)=\begin{pmatrix}0&1&0&0\\1&0&1&0\\0&1&0&1\\0&0&1&0\end{pmatrix}$$
Donc :
$$\operatorname{Mat}_{\mathcal{B}}(f)=A$$
De plus, $\mathcal{B}$ est la base canonique de $\R^4$.
Ainsi, $A$ est la matrice de l'endomorphisme $f$ de $\R^4$, dans la base canonique de $\R^4$.
Donc, [[$f$ est l'endomorphisme de $\R^4$ canoniquement associé à la matrice $A$.]]`,
    },
    {
      id: 'bijectivite-noyau-image-endomorphisme',
      domaine: 'algebre',
      chapitre: 'Applications linéaires',
      titre: 'Déduire la bijectivité, le noyau et l\'image d\'un endomorphisme de sa matrice',
      motsCles: ['bijective', 'noyau', 'image', 'injectif', 'surjectif', 'inversible'],
      source: 'DS n° 1, questions 9) (a) et (b)',
      corps: String.raw`!! • Montrons que $f$ est bijective.

D'après 7), $A$ est inversible.
Notons $\mathcal{B}$ la base canonique de $\R^4$.
D'après 8) (b), $A=\operatorname{Mat}_{\mathcal{B}}(f)$.
Donc, $\operatorname{Mat}_{\mathcal{B}}(f)$ est inversible.
Donc, par théorème, [[$f$ est bijective.]]

!! • Déterminons le noyau et l'image de $f$.

D'après 9) (a), $f$ est un endomorphisme bijectif de $\R^4$.
Donc, $f$ est un endomorphisme à la fois injectif et surjectif de $\R^4$.
Donc, par théorème, [[$\ker(f)=\{0_{\R^4}\}$ et $\operatorname{Im}(f)=\R^4$.]]`,
    },
    {
      id: 'spectre-matrice-triangulaire',
      domaine: 'algebre',
      chapitre: 'Réduction',
      titre: 'Déterminer le spectre d\'une matrice triangulaire',
      motsCles: ['spectre', 'valeurs propres', 'triangulaire', 'coefficients diagonaux'],
      source: 'DS n° 2, question 4) (a), remarque',
      corps: String.raw`Nous avons :
$$M=\begin{pmatrix}0&0&1\\0&0&1\\0&0&1\end{pmatrix}$$
Donc, $M$ est une matrice triangulaire dont les coefficients diagonaux sont $0$, $0$ et $1$.
Donc, par théorème, le spectre de $M$ est égal à $\{0;0;1\}$, autrement dit, à $\{0;1\}$.
Donc, d'après ce qui précède, [[$\Sp(M)=\{0;1\}$.]]`,
    },
    {
      id: 'sous-espace-propre-base',
      domaine: 'algebre',
      chapitre: 'Réduction',
      titre: 'Expliciter un sous-espace propre et en donner une base',
      motsCles: ['sous-espace propre', 'base', 'vect', 'libre', 'génératrice'],
      source: 'DS n° 2, question 4) (b)',
      corps: String.raw`Soit $X=\begin{pmatrix}x\\y\\z\end{pmatrix}\in M_{3,1}(\R)$.
Alors :
$$\begin{aligned}X\in E_\lambda(M)&\Longleftrightarrow X\in E_1(M)\\&\Longleftrightarrow MX=1X\\&\Longleftrightarrow\begin{pmatrix}0&0&1\\0&0&1\\0&0&1\end{pmatrix}\begin{pmatrix}x\\y\\z\end{pmatrix}=\begin{pmatrix}x\\y\\z\end{pmatrix}\\&\Longleftrightarrow\begin{cases}z=x\\z=y\\z=z\end{cases}\\&\Longleftrightarrow x=z\text{ et }y=z\\&\Longleftrightarrow X=\begin{pmatrix}z\\z\\z\end{pmatrix}\\&\Longleftrightarrow X=z\begin{pmatrix}1\\1\\1\end{pmatrix}\end{aligned}$$
Ainsi, $E(\lambda,M)=\operatorname{vect}\left(\begin{pmatrix}1\\1\\1\end{pmatrix}\right)$.
De plus, $\left(\begin{pmatrix}1\\1\\1\end{pmatrix}\right)\in(M_{3,1}(\R))^1$.
Donc, par théorème, $E(\lambda,M)$ est un sous-espace vectoriel de l'espace vectoriel de référence $M_{3,1}(\R)$.
D'après ce qui précède, $\left(\begin{pmatrix}1\\1\\1\end{pmatrix}\right)$ est génératrice de $E(\lambda,M)$.
De plus, $\left(\begin{pmatrix}1\\1\\1\end{pmatrix}\right)$ est libre dans $E(\lambda,M)$ en tant que famille réduite à un unique vecteur non nul de $E(\lambda,M)$.
Libre dans $E(\lambda,M)$ et génératrice de $E(\lambda,M)$, $\left(\begin{pmatrix}1\\1\\1\end{pmatrix}\right)$ est une base de $E(\lambda,M)$.`,
    },
    {
      id: 'fonction-bien-definie',
      domaine: 'analyse',
      chapitre: 'Fonctions',
      titre: 'Montrer qu\'une fonction est bien définie',
      motsCles: ['ensemble de définition', 'composition', 'logarithme', 'strictement positive'],
      source: 'DS n° 1, question 4)',
      corps: String.raw`Comme $a>0$ et $2>0$ et $\exp$ est strictement positive sur $\R$ :
$$\forall x\in\R,\ \frac{e^{ax}+e^{-ax}}{2a}>0$$
De plus, $\ln$ est définie sur $\R_+^*$.
Donc, $x\mapsto\ln\left(\dfrac{e^{ax}+e^{-ax}}{2a}\right)$ est définie sur $\R$.
Ainsi, [[$f_a$ est définie sur $\R$.]]`,
    },
    {
      id: 'parite-fonction',
      domaine: 'analyse',
      chapitre: 'Fonctions',
      titre: 'Étudier la parité d\'une fonction et l\'interpréter géométriquement',
      motsCles: ['paire', 'impaire', 'symétrie', 'centrée en 0'],
      source: 'DS n° 1, question 5)',
      corps: String.raw`$f_a$ est, d'après 4), définie sur $\R$ et $\R$ est une partie de $\R$ centrée en $0$ ($\forall x\in\R$, $-x\in\R$).
De plus, pour tout $x\in\R$ :
$$\begin{aligned}f_a(-x)&=\ln\left(\frac{e^{a(-x)}+e^{-a(-x)}}{2a}\right)\\&=\ln\left(\frac{e^{-ax}+e^{ax}}{2a}\right)\\&=\ln\left(\frac{e^{ax}+e^{-ax}}{2a}\right)\\&=f_a(x)\end{aligned}$$
Ainsi, [[$f_a$ est paire.]]
Ainsi, [[la représentation graphique $(C_a)$ de $f_a$ est symétrique par rapport à la droite d'équation $x=0$ (l'axe des ordonnées).]]`,
    },
    {
      id: 'derivabilite-quotient',
      domaine: 'analyse',
      chapitre: 'Fonctions',
      titre: 'Justifier la dérivabilité d\'un quotient et calculer sa dérivée',
      motsCles: ['dérivable', 'quotient', 'composition', 'produit', 'dérivée'],
      source: 'DS n° 2, question 5) (a)',
      corps: String.raw`Par définition :
$$\forall x\in\,]-\infty,0[\,\cup\,]0,1[,\ f(x)=\frac{-x}{(1-x)\ln(1-x)}$$
Or, $x\mapsto1-x$ est dérivable sur $\R$ (en tant que fonction affine) a fortiori sur $]-\infty,0[\,\cup\,]0,1[$ et
$$\forall x\in\,]-\infty,0[\,\cup\,]0,1[,\ 1-x>0$$
De plus, $x\mapsto\ln(x)$ est dérivable sur $\R_+^*$.
Donc, par composition et produit, $x\mapsto(1-x)\ln(1-x)$ est dérivable sur $]-\infty,0[\,\cup\,]0,1[$.
De plus, $\forall x\in\,]-\infty,0[\,\cup\,]0,1[$, $(1-x)\ln(1-x)\neq0$.
Enfin, $x\mapsto-x$ est dérivable sur $\R$ (en tant que fonction affine) a fortiori sur $]-\infty,0[\,\cup\,]0,1[$.
Ainsi, $f$ est dérivable sur $]-\infty,0[\,\cup\,]0,1[$ en tant que quotient de deux telles fonctions dont le dénominateur ne s'annule pas sur $]-\infty,0[\,\cup\,]0,1[$.
Les formules de dérivation usuelles donnent :
$$\begin{aligned}\forall x\in\,]-\infty,0[\,\cup\,]0,1[,\ f'(x)&=\frac{(-1)\times(1-x)\ln(1-x)-(-x)\left(-\ln(1-x)+(1-x)\dfrac{-1}{1-x}\right)}{((1-x)\ln(1-x))^2}\\&=-\frac{\ln(1-x)+x}{((1-x)\ln(1-x))^2}\end{aligned}$$
Ainsi, [[$\forall x\in\,]-\infty,0[\,\cup\,]0,1[$, $f'(x)=-\dfrac{\ln(1-x)+x}{((1-x)\ln(1-x))^2}$]]`,
    },
    {
      id: 'integrale-bien-definie',
      domaine: 'analyse',
      chapitre: 'Intégration',
      titre: 'Montrer qu\'une intégrale est un réel bien défini',
      motsCles: ['intégrale', 'continue', 'segment', 'composition'],
      source: 'DS n° 1, question 17)',
      corps: String.raw`Soit $n\in\N$.
Soit $y\in\,]-1,1[$.
$g$ est dérivable sur $\R$ d'après 11).
Donc, $g$ est continue sur $\R$, à valeurs dans $\R$.
Or, $x\mapsto x^n$ est continue sur $\R$.
Donc, par composition, $u\mapsto(g(u))^n$ est continue sur $\R$.
Donc, pour tout $(a,b)\in\R^2$, $\displaystyle\int_a^b(g(u))^n\,du$ est un réel correctement défini.
Or, comme $y\in\,]-1,1[$, $t_y$ est un réel correctement défini, d'après 12) (a).
Donc, $(0,t_y)$ est un couple de réels bien définis.
Donc, en particulier, $\displaystyle\int_0^{t_y}(g(u))^n\,du$ est un réel correctement défini.
Donc, [[$I_n(y)$ est un réel correctement défini, et ce pour tout $n\in\N$, pour tout $y\in\,]-1,1[$.]]`,
    },
    {
      id: 'equation-differentielle-ordre-2',
      domaine: 'analyse',
      chapitre: 'Équations différentielles',
      titre: 'Résoudre une équation différentielle linéaire homogène du second ordre',
      motsCles: ['équation caractéristique', 'second ordre', 'coefficients constants', 'ensemble-solution'],
      source: 'DS n° 1, question 1) (d)',
      corps: String.raw`L'équation $y''-a^2y=0$ sur $\R_+^*$ est une équation différentielle linéaire homogène du second ordre à coefficients constants sur $\R_+^*$, écrite sous forme normalisée, que l'on notera $(E)$.
L'équation caractéristique $(E_c)$ associée à l'équation différentielle $(E)$ est l'équation du second degré d'inconnue $x\in\R$ :
$$(E_c):x^2-a^2=0$$
Or :
$$\begin{aligned}\forall x\in\R,\ x^2-a^2=0&\Longleftrightarrow(x-a)(x+a)=0\\&\underset{(1)}{\Longleftrightarrow}x-a=0\text{ ou }x+a=0\\&\Longleftrightarrow x=a\text{ ou }x=-a\end{aligned}$$
$(1)$ : d'après la règle du produit nul dans $\R$
Or, $a>0$.
Donc, $-a<0<a$.
Donc, $a\neq-a$.
Ainsi, $(E_c)$ possède deux solutions réelles distinctes : $a$ et $-a$.
Donc, par théorème, l'ensemble-solution de l'équation différentielle $(E)$ est :
[[$$\left\{\begin{array}{rcl}\R_+^*&\longrightarrow&\R\\x&\longmapsto&\lambda e^{ax}+\mu e^{-ax}\end{array},\ (\lambda,\mu)\in\R^2\right\}$$]]`,
    },
    {
      id: 'recurrence-suite-bien-definie-encadree',
      domaine: 'analyse',
      chapitre: 'Suites',
      titre: 'Montrer par récurrence qu\'une suite existe et reste dans un intervalle',
      motsCles: ['récurrence', 'suite récurrente', 'existe', 'encadrement', 'bijection'],
      source: 'DS n° 1, question 14)',
      corps: String.raw`Notons, pour tout $n\in\N$, $P_n$ : « $u_n$ existe et $u_n\in\,]0,1[$ ».
Montrons que, pour tout $n\in\N$, $P_n$ est vraie en raisonnant par récurrence.

!! • Initialisation :

Montrons $P_0$.
Par hypothèse, $u_0$ existe et $u_0=\mu$.
Or, $\mu\in\,]0,1[$, par hypothèse.
Donc, $u_0$ existe et $u_0\in\,]0,1[$.
Donc, $P_0$ est vraie.

!! • Hérédité :

Soit $n\in\N$.
On suppose $P_n$ est vraie.
Alors, $u_n$ existe et $u_n\in\,]0,1[$.
Ainsi, $0<u_n<1$.
Or, d'après 12) (a), $g$ est strictement croissante sur $\R$.
Donc, en particulier, le réel $g(u_n)$ existe et :
$$g(0)<g(u_n)<g(1)$$
Or, $g(0)=0$ et $g(u_n)=u_{n+1}$.
Donc, $u_{n+1}$ existe et :
$$0<u_{n+1}<g(1)$$
Or, d'après 12) (a), $g$ réalise une bijection de $\R$ sur $]-1,1[$.
Donc, en particulier, $g(1)\in\,]-1,1[$.
Donc, en particulier, $g(1)<1$.
Donc, par transitivité de « $<$ » :
$$0<u_{n+1}<1$$
Ainsi, $u_{n+1}$ existe et $u_{n+1}\in\,]0,1[$.
Donc, $P_{n+1}$ est vraie.

!! • Conclusion :

En vertu du principe de récurrence, $P_n$ est vraie pour tout $n\in\N$.
Ainsi, [[pour tout $n\in\N$, $u_n$ existe et $u_n\in\,]0,1[$.]]`,
    },
    {
      id: 'variations-suite-signe-g-moins-x',
      domaine: 'analyse',
      chapitre: 'Suites',
      titre: 'Déduire les variations d\'une suite récurrente du signe de $g(x)-x$',
      motsCles: ['décroissante', 'monotonie', 'suite récurrente'],
      source: 'DS n° 1, question 15) (c)',
      corps: String.raw`D'après 15) (b) :
$$\forall x\in\R_+,\ g(x)\leqslant x$$
Or, d'après 14), $\forall n\in\N$, $u_n\in\,]0,1[$ et $]0,1[\,\subset\R_+$.
Donc :
$$\forall n\in\N,\ g(u_n)\leqslant u_n$$
Or, $\forall n\in\N$, $g(u_n)=u_{n+1}$.
Donc :
$$\forall n\in\N,\ u_{n+1}\leqslant u_n$$
Donc, [[$(u_n)_{n\in\N}$ est décroissante.]]`,
    },
    {
      id: 'convergence-limite-monotone-point-fixe',
      domaine: 'analyse',
      chapitre: 'Suites',
      titre: 'Montrer qu\'une suite récurrente converge et déterminer sa limite',
      motsCles: ['limite monotone', 'minorée', 'décroissante', 'unicité de la limite', 'point fixe', 'continuité', 'décalage d\'indice'],
      source: 'DS n° 1, question 16)',
      corps: String.raw`D'après 14), $\forall n\in\N$, $u_n\in\,]0,1[$.
Donc, en particulier, $(u_n)_{n\in\N}$ est minorée (par $0$).
De plus, d'après 15) (c), $(u_n)_{n\in\N}$ est décroissante.
Décroissante et minorée, la suite réelle $(u_n)_{n\in\N}$ est convergente, en vertu d'un théorème de limite monotone (dans le contexte des suites réelles).
Ainsi, on dispose de $\ell\in\R$ tel que $\lim\limits_{n\to+\infty}u_n=\ell$.
Donc, par théorème (« décalage d'indice »), $\lim\limits_{n\to+\infty}u_{n+1}=\ell$.
De plus, $g$ est dérivable sur $\R$, d'après 11).
Or, $\ell\in\R$.
Donc, en particulier, $g$ est continue en $\ell$.
Donc, par théorème, $\lim\limits_{n\to+\infty}g(u_n)=g(\ell)$.
De plus :
$$\forall n\in\N,\ u_{n+1}=g(u_n)$$
Donc, par unicité de la limite :
$$\ell=g(\ell)$$
De plus, comme $(u_n)_{n\in\N}$ est minorée par $0$ et convergente de limite $\ell$ et, comme la suite nulle converge de limite $0$, nous avons, par prolongement des inégalités à la limite :
$$\ell\geqslant0$$
Donc, $\ell\in\R_+$.
Donc, comme $\ell=g(\ell)$, nous avons, d'après 15) (b), $\ell=0$.
Ainsi, [[$(u_n)_{n\in\N}$ converge de limite nulle.]]`,
    },
    {
      id: 'nature-serie-comparaison-inegalite',
      domaine: 'analyse',
      chapitre: 'Séries',
      titre: 'Déterminer la nature d\'une série par comparaison (inégalité)',
      motsCles: ['critère de comparaison', 'inégalité', 'termes positifs', 'divergence'],
      source: 'DS n° 2, question 10) (b)',
      corps: String.raw`D'après 10) (a), on dispose de $n_0\in\N$ tel que : $\forall n\geqslant n_0$, $\dfrac{1}{n\ln(n)}\leqslant2(1-u_n)$.
Or, $2>0$.
Donc :
$$\forall n\geqslant n_0,\ \frac{1}{2}\,\frac{1}{n\ln(n)}\leqslant(1-u_n)$$
D'après 9) (b), la série $\sum\limits_{n\geqslant2}\dfrac{1}{n\ln(n)}$ diverge.
De plus, $\dfrac{1}{2}\neq0$.
Donc, par théorème, la série $\sum\limits_{n\geqslant2}\dfrac{1}{2}\,\dfrac{1}{n\ln(n)}$ diverge.
De plus, $\forall n\geqslant2$, $\dfrac{1}{2}\,\dfrac{1}{n\ln(n)}\geqslant0$.
Donc, d'après un critère de comparaison (par inégalité) dans le contexte des séries à termes positifs, [[la série $\sum\limits_{n\geqslant1}(1-u_n)$ diverge.]]`,
    },
    {
      id: 'evenement-probabilite-independance',
      domaine: 'probabilites',
      chapitre: 'Espaces probabilisés',
      titre: 'Expliciter un événement puis calculer sa probabilité par indépendance',
      motsCles: ['événement', 'indépendance', 'équiprobabilité', 'Pile', 'mutuelle indépendance'],
      source: 'DS n° 2, question 1)',
      corps: String.raw`• L'événement $[X=2]$ est réalisé
si et seulement si on obtient pour la première fois deux Pile consécutifs au 2ème lancer
si et seulement si les événements $P_1$ et $P_2$ sont réalisés
Ainsi, [[$[X=2]=P_1\cap P_2$.]]
Ainsi :
$$\begin{aligned}a_2&=\P(X=2)\\&=\P(P_1\cap P_2)\\&=\P(P_1)\P(P_2)\quad(1)\\&=\frac{1}{2}\,\frac{1}{2}\quad(2)\\&=\frac{1}{4}\end{aligned}$$
$(1)$ : __par indépendance__ de $P_1$ et de $P_2$ (induite par la mutuelle indépendance des événements de la suite $(P_n)_{n\geqslant1}$ (acquise d'après l'énoncé))
$(2)$ : __par équiprobabilité__ aux deux premiers lancers (la pièce utilisée est équilibrée, d'après l'énoncé).

Ainsi, [[$a_2=\dfrac{1}{4}$]]`,
    },
    {
      id: 'evenement-union-incompatibles',
      domaine: 'probabilites',
      chapitre: 'Espaces probabilisés',
      titre: 'Décomposer un événement en union d\'événements incompatibles',
      motsCles: ['incompatibilité', 'additivité', 'union', 'événement'],
      source: 'DS n° 2, question 2)',
      corps: String.raw`Soit $n\geqslant2$.
L'événement $U_n$ est réalisé
si et seulement si au cours des $n$ premiers lancers, on obtient au moins une fois la succession de deux Pile consécutifs
si et seulement si il existe $k\in\llbracket2,n\rrbracket$ tel que $[X=k]$ est réalisé
Ainsi,
$$U_n=\bigcup_{k=2}^{n}[X=k]$$
Donc, par incompatibilité deux à deux des événements $[X=k]$ ($k\in\llbracket2,n\rrbracket$) ($X$ ne pouvant pas prendre simultanément deux valeurs différentes) et par additivité de $\P$, nous avons :
$$\P(U_n)=\sum_{k=2}^{n}\P(X=k)$$
Or :
$$\forall k\geqslant2,\ a_k=\P(X=k)\ \text{ et }\ u_n=\P(U_n)$$
Donc, [[$u_n=\displaystyle\sum_{k=2}^{n}a_k$, et ce pour tout $n\geqslant2$.]]`,
    },
    {
      id: 'existence-esperance-limite-monotone',
      domaine: 'probabilites',
      chapitre: 'Variables aléatoires',
      titre: 'Montrer qu\'une variable aléatoire admet une espérance',
      motsCles: ['espérance', 'convergence absolue', 'limite monotone', 'sommes partielles'],
      source: 'DS n° 2, question 11)',
      corps: String.raw`$X$ admet une espérance
si et seulement si la série $\sum\limits_{k\geqslant2}kP(X=k)$ converge absolument
si et seulement si la série $\sum\limits_{k\geqslant2}kP(X=k)$ converge $(1)$
si et seulement si $(S_n)_{n\geqslant2}$ converge $(2)$

$(1)$ : par positivité du terme général ($\forall k\geqslant2$, $kP(X=k)\geqslant0$)
$(2)$ : par définition de $(S_n)_{n\geqslant2}$ et de la convergence d'une série

Or, d'après 10), la suite réelle $(S_n)_{n\geqslant2}$ est croissante et majorée.
Donc, en vertu d'un théorème de limite monotone (dans le contexte des suites réelles), $(S_n)_{n\geqslant2}$ converge.
Donc, en vertu des équivalences précédentes, [[$X$ admet une espérance.]]`,
    },
    {
      id: 'loi-binomiale-nombre-de-pile',
      domaine: 'probabilites',
      chapitre: 'Variables aléatoires',
      titre: 'Montrer qu\'un nombre de succès suit une loi binomiale',
      motsCles: ['loi binomiale', 'nombre de Pile', 'parties à k éléments', 'incompatibilité', 'indépendance', 'coefficient binomial', 'Proposition 82'],
      source: 'Cours, Proposition 82',
      corps: String.raw`!! **Proposition 82 - Exemple de référence**
Soit $n\in\N^*$ et $p\in[0,1]$.
On considère l'expérience aléatoire consistant à lancer $n$ fois une pièce de monnaie amenant Pile à chaque lancer avec la probabilité $p$.
On se place dans un espace probabilisé $(\Omega,\mathcal{T},\P)$ adéquat modélisant la présente expérience aléatoire.
On note $X$ la variable aléatoire égale au nombre de Pile obtenus.
Alors : $X\hookrightarrow\mathcal{B}(n,p)$.

Démonstration :
Notons, pour tout $i\in\llbracket1,n\rrbracket$, $P_i$ : « Obtenir Pile au $i$ème lancer. »
« Dans le pire des cas », les $n$ lancers amènent Face et $X$ prend alors la valeur $0$.
« Dans le meilleur des cas », les $n$ lancers amènent Pile et $X$ prend alors la valeur $n$.
Les cas intermédiaires étant possibles, $X(\Omega)=\llbracket0,n\rrbracket$.

Soit $k\in X(\Omega)$
Alors :
l'événement $[X=k]$ est réalisé
si et seulement si les $n$ lancers amènent très exactement $k$ Pile
si et seulement si il existe une partie $I$ de $\llbracket1,n\rrbracket$ comportant $k$ éléments telle que, pour tout $i\in I$, $P_i$ est réalisé et pour tout $j\in\llbracket1,n\rrbracket\setminus I$, $\overline{P_j}$ est réalisé.
Notons $\mathcal{P}_k(\llbracket1,n\rrbracket)$ l'ensemble des parties de $\llbracket1,n\rrbracket$ comportant $k$ éléments.
Ainsi :
$$[X=k]=\bigcup_{I\in\mathcal{P}_k(\llbracket1,n\rrbracket)}\left[\left(\bigcap_{i\in I}P_i\right)\cap\left(\bigcap_{j\in\llbracket1,n\rrbracket\setminus I}\overline{P_j}\right)\right]$$
Or, les événements $\left(\displaystyle\bigcap_{i\in I}P_i\right)\cap\left(\displaystyle\bigcap_{j\in\llbracket1,n\rrbracket\setminus I}\overline{P_j}\right)$ ($I\in\mathcal{P}_k(\llbracket1,n\rrbracket)$) sont deux à deux incompatibles.
Donc, __par incompatibilité__ et propriété d'additivité de $\P$ :
$$\P(X=k)=\sum_{I\in\mathcal{P}_k(\llbracket1,n\rrbracket)}\P\left(\left(\bigcap_{i\in I}P_i\right)\cap\left(\bigcap_{j\in\llbracket1,n\rrbracket\setminus I}\overline{P_j}\right)\right)$$
Donc, __par indépendance (mutuelle) des événements $P_i$ ($i\in\N^*$)__ induite par l'indépendance des lancers, nous avons :
$$\P(X=k)=\sum_{I\in\mathcal{P}_k(\llbracket1,n\rrbracket)}\prod_{i\in I}\P(P_i)\prod_{j\in\llbracket1,n\rrbracket\setminus I}\P(\overline{P_j})$$
Or, par hypothèse, la pièce amène Pile à chaque lancer avec la probabilité $p$, et donc Face avec la probabilité $1-p$, nous avons :
$$\P(X=k)=\sum_{I\in\mathcal{P}_k(\llbracket1,n\rrbracket)}\prod_{i\in I}p\prod_{j\in\llbracket1,n\rrbracket\setminus I}(1-p)$$

Ainsi,
$$\begin{aligned}\P(X=k)&=\sum_{I\in\mathcal{P}_k(\llbracket1,n\rrbracket)}p^{\operatorname{card}(I)}(1-p)^{\operatorname{card}(\llbracket1,n\rrbracket\setminus I)}\\&=\sum_{I\in\mathcal{P}_k(\llbracket1,n\rrbracket)}p^k(1-p)^{n-k}\\&=p^k(1-p)^{n-k}\sum_{I\in\mathcal{P}_k(\llbracket1,n\rrbracket)}1\qquad(1)\\&=p^k(1-p)^{n-k}\operatorname{card}\left(\mathcal{P}_k(\llbracket1,n\rrbracket)\right)\\&=p^k(1-p)^{n-k}\binom{n}{k}\qquad(2)\\&=\binom{n}{k}p^k(1-p)^{n-k}\end{aligned}$$
$(1)$ : par linéarité de $\sum$
$(2)$ : par définition même des coefficients binomiaux, il y a très exactement $\dbinom{n}{k}$ parties de $\llbracket1,n\rrbracket$ comportant $k$ éléments.

En vertu de qui précède, [[$X\hookrightarrow\mathcal{B}(n,p)$]]`,
    },
    {
      id: 'loi-geometrique-rang-premier-pile',
      domaine: 'probabilites',
      chapitre: 'Variables aléatoires',
      titre: 'Montrer que le rang du premier succès suit une loi géométrique',
      motsCles: ['loi géométrique', 'rang du premier Pile', 'premier succès', 'indépendance', 'disjonction des cas', 'Proposition 84'],
      source: 'Cours, Proposition 84',
      corps: String.raw`!! **Proposition 84 - Exemple de référence**
Soit $p\in\,]0,1[$.
On considère l'expérience aléatoire consistant à lancer indéfiniment une même pièce de monnaie amenant Pile à chaque lancer avec la probabilité $p$.
On se place dans un espace probabilisé $(\Omega,\mathcal{T},\P)$ adéquat modélisant la présente expérience aléatoire.
On note $X$ la variable aléatoire égale, sous réserve d'existence, au numéro du lancer où l'on a obtenu Pile pour la première fois (ie égale au rang du premier Pile).
Alors : $X\hookrightarrow\mathcal{G}(p)$

Démonstration :
Notons, pour tout $i\in\N^*$, $P_i$ : « Obtenir Pile au $i$ème lancer ».
Dans « le meilleur des cas », on obtient Pile au premier lancer, et $X$ prend alors la valeur $1$.
De plus, le premier Pile peut potentiellement arriver après un nombre arbitrairement grand de lancers, et donc $X$ prend prendre des valeurs entières arbitrairement grandes. De plus, tout entier naturel non nul est une valeur que peut prendre $X$.
Enfin, l'événement « Ne jamais obtenir Pile » est quasi-impossible (cf exemple du cour).
Ainsi, on en déduit que $X(\Omega)=\N^*$ (on a négligé l'événement « Ne jamais obtenir Pile »).

Soit $k\in\N^*$.
__Raisonnons par disjonction des cas :__

> • **1er cas** : $k=1$
Alors, l'événement $[X=k]$ est réalisé si et seulement si le premier lancer amène Pile.
Ainsi,
$$[X=k]=P_1$$
Or, la pièce amène Pile à chaque lancer avec la probabilité $p$.
Donc, $\P(X=k)=\P(P_1)=p$

> • **2ème cas** : $k\geqslant2$
Alors :
l'événement $[X=k]$ est réalisé
si et seulement si les $k-1$ premiers lancers amènent Face et le $k$ème lancer amène Pile
si et seulement si, pour tout $i\in\llbracket1,k-1\rrbracket$, $P_i$ n'est pas réalisé et $P_k$ est réalisé
Ainsi :
$$[X=k]=\bigcap_{i=1}^{k-1}\overline{P_i}\cap P_k$$
Donc, __par indépendance (mutuelle) des événement $P_i$ ($i\in\N^*$)__ induite par l'indépendance des lancers, nous avons :
$$\P(X=k)=\prod_{i=1}^{k-1}\P(\overline{P_i})\P(P_k)=(1-p)^{k-1}p$$

Or, si $k=1$, $(1-p)^{k-1}p=(1-p)^{1-1}p=p$.
Ainsi, « les deux cas se rejoignent ».
Donc,
$$\forall k\in\N^*,\ \P(X=k)=(1-p)^{k-1}p\ \text{ et }\ X(\Omega)=\N^*$$
Donc, par définition, [[$X\hookrightarrow\mathcal{G}(p)$]]`,
    },
    {
      id: 'methodes-loi-variable-discrete',
      domaine: 'probabilites',
      chapitre: 'Variables aléatoires',
      titre: 'Déterminer la loi d\'une variable aléatoire discrète : trois méthodes',
      motsCles: ['méthode', 'loi', 'calcul naïf', 'loi usuelle', 'Proposition 46', 'X(Ω)', 'minimum', 'maximum'],
      source: 'Cours, Méthode (abrégée)',
      corps: String.raw`!! **Méthode 1 : calcul naïf**
a) On détermine l'ensemble-image $X(\Omega)$ : cas « extrêmes » et « intermédiaires » ; parfois par double inclusion.
b) Pour tout $x$ dans $X(\Omega)$, on écrit $[X=x]$ comme intersection/union/complémentaire d'événements auxiliaires, __puis__ on calcule $\P(X=x)$ : arguments d'incompatibilité, d'indépendance et d'équiprobabilité.

!! **Méthode 2 : loi usuelle**
a) On identifie la loi usuelle reconnue et on justifie que $X$ suit cette loi (modèle de rédaction spécifique).
b) Par définition de la loi identifiée, on en déduit immédiatement $X(\Omega)$ et $\P(X=k)$ : rien à prouver.

!! **Méthode 3 : Proposition 46**
On calcule pour tout $k$ $\P(X\leqslant k)$ ou $\P(X>k)$, puis on en déduit $\P(X=k)$ pour tout $k\in X(\Omega)$.
Pour le min ou le max d'une famille finie de variables aléatoires indépendantes de même loi connue.`,
    },
    {
      id: 'suite-loi-probabilite-discrete',
      domaine: 'probabilites',
      chapitre: 'Variables aléatoires',
      titre: 'Montrer qu\'une suite définit une loi de probabilité discrète',
      motsCles: ['loi de probabilité discrète', 'positivité', 'somme égale à 1', 'télescopage', 'série', 'existence d\'une variable aléatoire', 'Exercice 14'],
      source: 'Exercice 14',
      corps: String.raw`!! **Exercice 14 :** Montrer que la suite réelle $(u_n)_{n\in\N^*}$ définie par :
$$\forall n\in\N^*,\ u_n=\frac{1}{n}-\frac{1}{n+1}$$
définit une loi de probabilité discrète.

Montrons que la suite $(u_n)_{n\in\N^*}$ définit une loi de probabilité discrète.
$\odot$ On a :
$$\forall n\in\N^*,\ u_n=\frac{1}{n}-\frac{1}{n+1}.$$
Soit $n\in\N^*$.
Alors : $0\leqslant n\leqslant n+1$
Donc, par décroissance de $x\mapsto\dfrac{1}{x}$ sur $\R_+^*$, $\dfrac{1}{n+1}\leqslant\dfrac{1}{n}$
Donc, $\dfrac{1}{n}-\dfrac{1}{n+1}\geqslant0$
Donc, __$u_n\geqslant0$, et ce pour tout $n\in\N^*$.__

$\odot$ Montrons que $\sum\limits_{n\geqslant1}u_n$ converge et $\sum\limits_{n=1}^{+\infty}u_n=1$.
On a : $\forall N\in\N^*$,
$$\begin{aligned}\sum_{n=1}^{N}u_n&=\sum_{n=1}^{N}\left(\frac{1}{n}-\frac{1}{n+1}\right)\\&\underset{(1)}{=}\frac{1}{1}-\frac{1}{N+1}\\&=1-\frac{1}{N+1}\end{aligned}$$
$(1)$ : Par télescopage additif.
Or, $\lim\limits_{N\to+\infty}(N+1)=+\infty$
Donc, par passage à l'inverse, puis produit, puis somme, $\lim\limits_{N\to+\infty}\left(1-\dfrac{1}{N+1}\right)=1$
Donc, $\lim\limits_{N\to+\infty}\sum\limits_{n=1}^{N}u_n$ existe, est finie et vaut $1$.
Donc, la série $\sum\limits_{n\geqslant1}u_n$ converge et $\sum\limits_{n=1}^{+\infty}u_n=1$

Donc, en vertu des deux points $\odot$ précédents, [[la suite réelle $(u_n)_{n\in\N^*}$ définit une loi de probabilité discrète (non finie)]]

Donc, par théorème, il existe un espace probabilisé $(\Omega,\mathcal{T},\P)$ et une VAD $X$ définie sur $(\Omega,\mathcal{T},\P)$ tels que : • $X(\Omega)=\N^*$.
• $\forall n\in\N^*$, $\P([X=n])=u_n$`,
    },
    {
      id: 'loi-calcul-naif-probabilites-composees',
      domaine: 'probabilites',
      chapitre: 'Variables aléatoires',
      titre: 'Loi par calcul naïf : double inclusion et probabilités composées',
      motsCles: ['calcul naïf', 'X(Ω)', 'double inclusion', 'disjonction des cas', 'probabilités composées', 'tirages sans remise', 'incompatibilité', 'équiprobabilité', 'Exercice 15'],
      source: 'Exercice 15',
      corps: String.raw`!! **Exercice 15 :** Soit $n\geqslant2$. Soit $b\geqslant2$.
On effectue deux tirages successifs sans remise dans une urne comportant $n$ boules noires et $b$ boules blanches.
On note $X$ la variable aléatoire égale au nombre de boules blanches obtenues.
Déterminer la loi de $X$.

On suppose que l'on dispose d'un espace probabilisé $(\Omega,\mathcal{T},\P)$ modélisant la présente expérience aléatoire.
Déterminons la loi de $X$.

> $\odot$ Déterminons $X(\Omega)$.
* Le nombre de boules blanches obtenues est un entier naturel qui ne peut excéder strictement le nombre de tirages effectués, à savoir 2.
Donc, $X(\Omega)\subset\llbracket0;2\rrbracket$
*
$\triangleright$ Si chacun des deux tirages amène une boule noire (ce qui est possible d'après le protocole $(n\geqslant2)$), alors $X$ prend la valeur $0$.
$\triangleright$ Si le premier tirage amène une boule noire et le 2ème tirage amène une boule blanche (ce qui est possible d'après le protocole $\left(\begin{array}{l}n\geqslant1\\b\geqslant1\end{array}\right)$), alors $X$ prend la valeur $1$.
$\triangleright$ Si chacun des deux tirages amène une boule blanche (…), alors $X$ prend la valeur $2$.
Ainsi, $\llbracket0,2\rrbracket\subset X(\Omega)$.

Donc, __par double inclusion__, $X(\Omega)=\llbracket0,2\rrbracket$.

$\odot$ __Calculons $\P([X=k])$, pour tout $k\in\llbracket0,2\rrbracket$.__
Notons, pour tout $i\in\{1,2\}$,
$N_i$ : « obtenir une boule noire au $i$-ième tirage »
et $B_i$ : « obtenir une boule blanche au $i$-ième tirage »

Soit $k\in\llbracket0,2\rrbracket$.
__Raisonnons par disjonction des cas :__

* __1er cas : $k=0$__
Alors, $[X=k]$ est réalisé ssi « chacun des 2 tirages amène une boule noire est réalisé »
ssi $N_1$ et $N_2$ sont réalisés
Donc, $[X=k]=N_1\cap N_2$
Donc, $$\begin{aligned}\P(X=k)&=\P(N_1\cap N_2)\\&\underset{(1)}{=}\P(N_1)\times\P_{N_1}(N_2)\\&\underset{(2)}{=}\frac{n}{n+b}\times\frac{n-1}{n+b-1}\\&=\frac{n(n-1)}{(n+b)(n+b-1)}\end{aligned}$$
$(1)$ : D'après la __formule des probabilités composées__ $(\P(N_1)\neq0)$
$(2)$ : __Par équiprobabilité__ à chaque tirage et d'après le protocole (tirage sans remise)

* __2ème cas : $k=2$__
En raisonnant comme au niveau du 1er cas, en intervertissant le rôle joué par les boules blanches et par les boules noires, on a :
$$[X=k]=B_1\cap B_2$$
puis
$$\P(X=k)=\frac{b(b-1)}{(n+b)(n+b-1)}$$

* __3ème cas : $k=1$__
Alors :
$[X=k]$ est réalisé ssi $[X=1]$ est réalisé
ssi « On obtient très exactement une boule blanche à l'issue des deux tirages » est réalisé
ssi « le 1er tirage amène une boule blanche et le deuxième tirage amène une boule noire ou le 1er tirage amène une boule noire et le 2ème tirage amène une boule blanche » est réalisé
ssi $N_1\cap B_2$ est réalisé ou $B_1\cap N_2$ est réalisé
ssi $(N_1\cap B_2)\cup(B_1\cap N_2)$ est réalisé
Ainsi, $[X=k]=(N_1\cap B_2)\cup(B_1\cap N_2)$
Donc :
$$\begin{aligned}\P([X=k])&=\P\big((N_1\cap B_2)\cup(B_1\cap N_2)\big)\\&\underset{(1)}{=}\P(N_1\cap B_2)+\P(B_1\cap N_2)\\&\underset{(2)}{=}\P(N_1)\times\P_{N_1}(B_2)+\P(B_1)\times\P_{B_1}(N_2)\\&\underset{(3)}{=}\frac{n}{n+b}\times\frac{b}{n+b-1}+\frac{b}{n+b}\times\frac{n}{n+b-1}\\&=\frac{2nb}{(n+b)(n+b-1)}\end{aligned}$$
$(1)$ : __Par incompatibilité des événements $N_1\cap B_2$ et $B_1\cap N_2$__ (car $N_1$ et $B_1$ le sont) et additivité de $\P$.
$(2)$ : __D'après la formule des probabilités composées__ $(\P(N_1)\neq0$ et $\P(B_1)\neq0)$
$(3)$ : __Par équiprobabilité des 2 tirages__ (et d'après le protocole

Donc, [[la loi de $X$ nous est donnée par : $$\begin{cases}X(\Omega)=\llbracket0;2\rrbracket\\[4pt]\P([X=0])=\dfrac{n(n-1)}{(n+b)(n+b-1)}\\[8pt]\P([X=1])=\dfrac{2nb}{(n+b)(n+b-1)}\\[8pt]\P([X=2])=\dfrac{b(b-1)}{(n+b)(n+b-1)}\end{cases}$$]]`,
    },
    {
      id: 'schema-binomial',
      domaine: 'probabilites',
      chapitre: 'Variables aléatoires',
      titre: 'Reconnaître un schéma binomial',
      motsCles: ['schéma binomial', 'loi binomiale', 'épreuves de Bernoulli', 'indépendance', 'nombre de succès', 'loi usuelle', 'Exercice 16'],
      source: 'Exercice 16',
      corps: String.raw`!! **Exercice 16 :** On lance 10 fois successivement le même dé octaédrique supposé parfaitement équilibré.
On note $X$ la variable aléatoire égale au nombre de fois où l'on a obtenu le chiffre 1 suite à ces 10 lancers.
Déterminer la loi de $X$.

Déterminons la loi de $X$.
On reconnaît un __schéma binomial.__
Par définition, la variable aléatoire $X$ est égale au nombre de succès (« Obtenir le chiffre 1 »), suite à la répétition de __10__ épreuves de Bernoulli (identiques et) __indépendantes__ (par indépendance des lancers (on fait cette hypothèse raisonnable ici)) de probabilité égale à $\dfrac{1}{8}$ __(par équiprobabilité à chaque__ lancer, le dé étant octaédrique et équilibré).

Donc, [[$X$ suit la loi binomiale de paramètres $10$ et $1/8$.]]
On écrit : $X\hookrightarrow\mathcal{B}(10;1/8)$
Donc, par définition de la loi $\mathcal{B}(10;1/8)$,
[[$$\begin{cases}X(\Omega)=\llbracket0;10\rrbracket\\[4pt]\forall k\in X(\Omega),\ \P([X=k])=\dbinom{10}{k}\left(\dfrac{1}{8}\right)^k\left(\dfrac{7}{8}\right)^{10-k}\end{cases}$$]]`,
    },
    {
      id: 'loi-maximum-fonction-repartition',
      domaine: 'probabilites',
      chapitre: 'Variables aléatoires',
      titre: 'Loi d\'un maximum par le calcul de P(M ⩽ k)',
      motsCles: ['maximum', 'max', 'fonction de répartition', 'P(M≤k)', 'loi uniforme', 'indépendance', 'tirages avec remise', 'Proposition 46', 'Exercice 17'],
      source: 'Exercice 17',
      corps: String.raw`!! **Exercice 17 :** Soit $n\geqslant2$. On considère l'expérience aléatoire qui consiste à tirer successivement au hasard avec remise 2 boules dans une urne contenant $n$ boules numérotées de 1 et à $n$.
On appelle $M$ la variable aléatoire égale au plus grand des deux numéros obtenus.
Déterminer la loi de $M$.

On suppose que l'on dispose d'un espace probabilisé $(\Omega,\mathcal{T},\P)$ modélisant la présente expérience aléatoire.

Pour tout $i\in\{1,2\}$, notons $X_i$ la variable aléatoire égale au numéro obtenu au $i$-ième tirage.
On a, par définition de $M$,
$$\forall\omega\in\Omega,\ M(\omega)=\begin{cases}X_1(\omega)&\text{si }X_1(\omega)\geqslant X_2(\omega)\\X_2(\omega)&\text{sinon}\end{cases}$$
Donc :
$$\forall\omega\in\Omega,\ M(\omega)=\max(X_1(\omega),X_2(\omega)).$$
Donc :
$$M=\max(X_1,X_2)$$
Déterminons la loi de $M$.
Soit $i\in\{1;2\}$
Alors, par définition de $X_i$, $X_i(\Omega)=\llbracket1,n\rrbracket$ et $X_i$ prend chacune des $n$ valeurs de l'ensemble $\llbracket1,n\rrbracket$ avec la même probabilité égale à $\dfrac{1}{n}$ (par équiprobabilité lors des deux tirages d'après le protocole (tirages avec remise, « au hasard »)).
Donc : $X_i\hookrightarrow\mathcal{U}(\llbracket1,n\rrbracket)$, et ce pour tout $i\in\{1,2\}$.
On a : $(*)\ \begin{cases}\forall i\in\{1,2\},\ X_i(\Omega)=\llbracket1,n\rrbracket\\\forall k\in\llbracket1,n\rrbracket,\ \P([X=k])=1/n\end{cases}$
De plus, les tirages s'effectuant avec remise, $X_1$ et $X_2$ peuvent être supposées indépendantes (pour $\P$) $(**)$
On a :
$$\begin{aligned}M(\Omega)&\underset{(0)}{=}\max(X_1,X_2)(\Omega)\\&\underset{(1)}{=}\{\max(x_1,x_2),\ (x_1,x_2)\in X_1(\Omega)\times X_2(\Omega)\}\\&\underset{(2)}{=}\{\max(x_1,x_2),\ (x_1,x_2)\in\llbracket1,n\rrbracket^2\}\\&\underset{(3)}{=}\llbracket1,n\rrbracket\end{aligned}$$
$(0)$ : car $M=\max(X_1,X_2)$
$(1)$ : par indépendance de $X_1$ et de $X_2$.
$(2)$ : D'après $(*)$
$(3)$ : D'après un raisonnement par double inclusion

Soit $k\in\llbracket1,n\rrbracket$.
On a :
$$\begin{aligned}\P(M\leqslant k)&=\P(\max(X_1,X_2)\leqslant k)\\&\underset{(1)}{=}\P([X_1\leqslant k]\cap[X_2\leqslant k])\\&\underset{(2)}{=}\P(X_1\leqslant k)\P(X_2\leqslant k)\\&\underset{(3)}{=}F_{X_1}(k)F_{X_2}(k)\\&\underset{(4)}{=}F_{X_1}(k)F_{X_1}(k)\\&=(F_{X_1}(k))^2\\&=(\P(X_1\leqslant k))^2\\&\underset{(5)}{=}\left(\P\left(\bigcup_{i=1}^{k}[X_1=i]\right)\right)^2\\&\underset{(6)}{=}\left(\sum_{i=1}^{k}\P(X_1=i)\right)^2\\&=\ \dots\\&=\left(\frac{k}{n}\right)^2\end{aligned}$$
Ainsi :
$$\forall k\in\llbracket1,n\rrbracket,\ \P(M\leqslant k)=\left(\frac{k}{n}\right)^2$$
Or :
$\odot$ D'une part,
$$\begin{aligned}\P(M\leqslant0)&\underset{(1)}{=}\P(\emptyset)\\&\underset{(2)}{=}0\end{aligned}$$
$(1)$ : Comme $M(\Omega)=\llbracket1,n\rrbracket$, $[M\leqslant0]=\emptyset$
$(2)$ : Par théorème

$\odot$ D'autre part :
$$\begin{aligned}\left(\frac{0}{n}\right)^2&=0^2\\&=0\end{aligned}$$
Donc, $\P(M\leqslant0)=\left(\dfrac{0}{n}\right)^2$
Donc : $\forall k\in\llbracket0,n\rrbracket$, $\P(M\leqslant k)=\left(\dfrac{k}{n}\right)^2\ (*)$
Or : $M(\Omega)=\llbracket1,n\rrbracket$ et $\llbracket1,n\rrbracket\subset\Z$
Donc : $M(\Omega)\subset\Z$.
Donc, par théorème :
$$\forall k\in\Z,\ \P(M=k)=\P(M\leqslant k)-\P(M\leqslant k-1)$$
Or, $\llbracket1,n\rrbracket\subset\Z$.
Donc :
$$\forall k\in\llbracket1,n\rrbracket,\ \P(M=k)=\P(M\leqslant k)-\P(M\leqslant k-1)$$
Or,
$$\forall k\in\llbracket1,n\rrbracket,\ (k,k-1)\in\llbracket0,n\rrbracket^2$$
Donc, d'après $(*)$ :
$$\forall k\in\llbracket1,n\rrbracket,\ \P(M=k)=\left(\frac{k}{n}\right)^2-\left(\frac{k-1}{n}\right)^2$$`,
    },
    {
      id: 'loi-probabilites-totales-lois-conditionnelles',
      domaine: 'probabilites',
      chapitre: 'Variables aléatoires',
      titre: 'Loi par la formule des probabilités totales (lois conditionnelles géométriques)',
      motsCles: ['loi conditionnelle', 'schéma géométrique', 'loi géométrique', 'formule des probabilités totales', 'système complet d\'événements', 'SCE', 'double inclusion', 'Exercice 18'],
      source: 'Exercice 18',
      corps: String.raw`!! **Exercice 18 :** On dispose d'une urne comportant initialement 2 boules noires et 2 boules blanches.
On considère l'expérience aléatoire consistant :
• dans un premier temps, à extraire une boule dans cette urne, sans la remettre dans l'urne ;
• dans un deuxième temps, à effectuer une série illimitée de tirages avec remise dans cette urne.
On se place dans un espace probabilisé $(\Omega,\mathcal{T},\P)$ adéquat.
On note $N$ : « la boule extraite et non remise dans l'urne est noire »
On note $X$ la variable aléatoire égale au rang d'apparition de la première boule blanche, dans la succession illimitée de tirages.
On admet que l'événement « Ne jamais tirer de boule blanche lors de la deuxième épreuve » est quasi-impossible.
1) Déterminer la loi conditionnelle de $X$ sachant $N$.
2) Déterminer la loi conditionnelle de $X$ sachant $\overline{N}$.
3) Déduire des questions précédentes la loi de $X$.

1) Déterminons la loi conditionnelle de $X$ sachant $N$.
Par équiprobabilité lors de l'unique tirage effectué dans un 1er temps, et d'après le protocole :
$$\begin{aligned}\P(N)&=\frac{2}{4}\\&=\frac{1}{2}\end{aligned}$$
Donc, $\P(N)\neq0$.
Donc, la loi de $X$ sachant $N$ est bien définie

||$(*)$||Sachant $N$, on reconnaît un __schéma géométrique__
Sachant $N$, $X$ est égale au rang d'apparition du 1er succès (« Obtenir une boule blanche »)
suite à la répétition d'un nombre illimité d'épreuves de Bernoulli indépendantes (les tirages s'effectuent __avec remise__) dont la probabilité de succès à chaque épreuve vaut $\dfrac{2}{3}$ __par équiprobabilité à tous les tirages__
Ainsi, [[sachant $N$, $X$ suit la loi géométrique de paramètre $\dfrac{2}{3}$.]]
Donc, [[$$\begin{aligned}\forall k\in\N^*,\ \P_N(X=k)&=\left(1-\frac{2}{3}\right)^{k-1}\times\frac{2}{3}\\&=\left(\frac{1}{3}\right)^{k-1}\times\frac{2}{3}\end{aligned}$$]]

2) De la même manière qu'en 1), on montre que [[la loi de $X$ sachant $\overline{N}$ est la loi géométrique de paramètre $1/3$.]]
En effet, sachant $\overline{N}$ réalisé d'après le protocole, l'urne comporte très exactement $4-1$, autrement dit 3 boules dont 1 boule blanche, et ce avant chaque tirage effectué dans un deuxième temps
Donc, [[$$\begin{aligned}\forall k\in\N^*,\ \P([X=k])&=\left(1-\frac{1}{3}\right)^{k-1}\times\frac{1}{3}\\&=\left(\frac{2}{3}\right)^{k-1}\times\frac{1}{3}\end{aligned}$$]]

3) On suppose que $X$ prend la valeur $-1$ ssi « l'on ne tire jamais de boules blanches lors de la 2ème épreuve » est réalisé.
D'après l'énoncé, $\P(X=-1)=0$
Par définition de $X$, et d'après ce qui précède,
$$X(\Omega)\subset\{-1\}\cup\N^*$$
Soit $k\in\{-1\}\cup\N^*$
__Raisonnons par disjonction des cas :__

> $\odot$ __1er cas : $k=-1$__
Alors, d'après ce qui précède, $\P([X=k])=0$

> $\odot$ __2ème cas : $k\in\N^*$__
Comme $N$ est un événement, par théorème, $\{N;\overline{N}\}$ est un SCE.
Or, $\P(N)=\dfrac{1}{2}$ et $\dfrac{1}{2}\in\,]0,1[$
Donc, $\begin{cases}\P(N)\neq0\\\P(\overline{N})\neq0\end{cases}$
Donc, d'après la __formule des probabilités totales (avec conditionnement)__ relativement au SCE $\{N;\overline{N}\}$ de probabilité non nulle :
$$\begin{aligned}\P(X=k)&=\P(N)\times\P_N(X=k)+\P(\overline{N})\P_{\overline{N}}(X=k)\\&\underset{(1)}{=}\frac{1}{2}\times\left(\frac{1}{3}\right)^{k-1}\times\frac{2}{3}+\left(1-\frac{1}{2}\right)\times\left(\frac{2}{3}\right)^{k-1}\times\frac{1}{3}\\&=\left(\frac{1}{3}\right)^k+\left(\frac{1}{6}\right)\left(\frac{2}{3}\right)^{k-1}\end{aligned}$$
$(1)$ : d'après 1) et 2)

Ainsi, $$\begin{cases}X(\Omega)\subset\{-1\}\cup\N^*\\\forall k\in\N^*,\ \P(X=k)=\left(\dfrac{1}{3}\right)^k+\dfrac{1}{6}\left(\dfrac{2}{3}\right)^{k-1}\\\P(X=-1)=0\end{cases}$$
Or, $\forall k\in\N^*$, $\left(\dfrac{1}{3}\right)^k+\dfrac{1}{6}\left(\dfrac{2}{3}\right)^{k-1}>0$.
Donc, $\forall k\in\N^*$, $\P(X=k)\neq0$
Donc, nécessairement,
$$\forall k\in\N^*,\ [X=k]\neq\emptyset.$$
Donc,
$$\forall k\in\N^*,\ \exists\omega\in\Omega,\ X(\omega)=k$$
Donc, $\N^*\subset X(\Omega)$.
Par ailleurs, si, dans un deuxième temps, on n'obtient que des boules noires (ce qui est possible d'après le protocole), alors $X$ prend la valeur $-1$.
Donc, $-1\in X(\Omega)$
Donc, $\{-1\}\cup\N^*\subset X(\Omega)$.
Donc, __par double inclusion__, $X(\Omega)=\{-1\}\cup\N^*$.

Ainsi, [[la loi de $X$ nous est donnée par : $$X(\Omega)=\{-1\}\cup\N^*$$ $$\forall k\in X(\Omega),\ \P([X=k])=\begin{cases}0&\text{si }k=-1\\\left(\dfrac{1}{3}\right)^k+\dfrac{1}{6}\left(\dfrac{2}{3}\right)^{k-1}&\text{sinon}\end{cases}$$ où l'on a supposé que $X$ prend la valeur $-1$ ssi tous les tirages effectués dans un second temps amènent une boule noire]]`,
    },
    {
      id: 'variables-non-independantes',
      domaine: 'probabilites',
      chapitre: 'Variables aléatoires',
      titre: 'Montrer que deux variables aléatoires ne sont pas indépendantes',
      motsCles: ['indépendance', 'non indépendantes', 'contre-exemple', 'loi uniforme', 'somme de variables', 'Exercice 19'],
      source: 'Exercice 19',
      corps: String.raw`!! **Exercice 19 :** On considère deux urnes, $\mathcal{U}_1$ et $\mathcal{U}_2$ contenant chacune 5 boules numérotées de 1 à 5.
On effectue un tirage au hasard dans $\mathcal{U}_1$ et on note $X_1$ le numéro obtenu, puis on effectue un tirage au hasard dans $\mathcal{U}_2$ et on note $X_2$ le numéro obtenu.
On suppose que l'on dispose d'espace probabilisé $(\Omega,\mathcal{T},\P)$ modélisant la présente expérience aléatoire.
1) Déterminer la loi de $X_1$ et la loi de $X_2$.
2) $X_1$ et $X_2$ sont-elles indépendantes ?
3) $X_1$ et $X_1+X_2$ sont-elles indépendantes ?

1) $\odot$ Identifions la loi suivie par $X_1$.
D'après l'énoncé et la définition de $X_1$,
$$X_1(\Omega)=\llbracket1,5\rrbracket$$
et __par équiprobabilité__ lors de l'unique tirage dans $\mathcal{U}_1$, $X$ prend chacune des 5 valeurs de l'ensemble $\llbracket1,5\rrbracket$ avec la même probabilité égale à $1/5$.
Donc : [[$X_1\hookrightarrow\mathcal{U}(\llbracket1,5\rrbracket)$]]
Autrement dit : [[$\begin{cases}X_1(\Omega)=\llbracket1,5\rrbracket\\\forall k\in X_1(\Omega),\ \P(X_1=k)=1/5\end{cases}$]]

$\odot$ De même, par symétrie du protocole vis-à-vis des urnes 1 et 2, on a :
[[$X_2\hookrightarrow\mathcal{U}(\llbracket1,5\rrbracket)$]]
Autrement dit : [[$\begin{cases}X_2(\Omega)=\llbracket1,5\rrbracket\\\forall k\in X_2(\Omega),\ \P(X=k)=1/5\end{cases}$]]

2) D'après le protocole (deux tirages effectués dans deux urnes physiquement indépendantes), [[$X_1$ et $X_2$ peuvent être supposées indépendantes pour $\P$.]]

3) $\odot$ On a :
$$\P(X_1=3)\underset{(1)}{=}1/5$$
$(1)$ : d'après 1) (car $3\in\llbracket1,5\rrbracket$)

$\odot$ Calculons : $\P(X_1+X_2=2)$
On a :
$[X_1+X_2=2]$ est réalisé $\underset{(1)}{\text{si et seulement si}}$ $[X_1=1]$ et $[X_2=1]$ sont réalisés
$(1)$ : En effet, d'après 1), $\begin{cases}X_1(\Omega)=\llbracket1,5\rrbracket\\X_2(\Omega)=\llbracket1,5\rrbracket\end{cases}$
Donc, $[X_1+X_2=2]=[X_1=1]\cap[X_2=1]$
Donc, $$\begin{aligned}\P([X_1+X_2=2])&=\P([X_1=1]\cap[X_2=1])\\&\underset{(1)}{=}\P([X_1=1])\P([X_2=1])\\&\underset{(2)}{=}\frac{1}{5}\times\frac{1}{5}\\&=\frac{1}{25}\end{aligned}$$
$(1)$ : Par indépendance de $X_1$ et $X_2$ par $\P$, justifiée en 2.
$(2)$ : D'après 1), car $1\in\llbracket1,5\rrbracket$.

Donc, d'après les 2 points $\odot$ précédents,
$$\begin{aligned}\P(X_1=3)\P(X_1+X_2=2)&=\frac{1}{5}\times\frac{1}{25}\\&=\frac{1}{125}\end{aligned}$$
Donc, $\P(X_1=3)\P(X_1+X_2=2)\neq0\ (*)$
De plus,
$$\begin{aligned}\P([X_1=3]\cap[X_1+X_2=2])&=\P([X_1=3]\cap[3+X_2=2])\\&=\P([X_1=3]\cap[X_2=-1])\\&\underset{(1)}{=}\P([X_1=3]\cap\emptyset)\\&\underset{(2)}{=}\P(\emptyset)\\&\underset{(3)}{=}0\end{aligned}$$
$(1)$ : Comme, d'après 1), $X_2(\Omega)$ et comme $-1<1$, $[X_2=-1]=\emptyset$
$(2)$ : Par absorbance de $\emptyset$ par « $\cap$ »
$(3)$ : Par théorème
Donc, $\P([X_1=3]\cap[X_1+X_2=2])=0\ (**)$
Donc, d'après $(*)$ et $(**)$, $\P([X_1=3]\cap[X_1+X_2=2])\neq\P(X_1=3)\P(X_1+X_2=2)$
Or, $\begin{cases}\text{d'après 1), }3\in X_1(\Omega)\\\text{comme }\P(X_1+X_2=2)\neq0,\ [X_1+X_2=2]\neq\emptyset\\\text{Donc, }2\in(X_1+X_2)(\Omega)\end{cases}$
Donc : $\exists(x,y)\in X_1(\Omega)\times(X_1+X_2)(\Omega)$, $\P([X_1=x]\cap[X_1+X_2=y])\neq\P(X_1=x)\P(X_1+X_2=y)$
Par ailleurs, $X_1$ et $X_1+X_2$ sont discrètes car $X_1$ et $X_2$ sont discrètes ($X_1(\Omega)$ et $X_2(\Omega)$ sont finis)
Donc, $X_1$ et $X_1+X_2$ ne sont pas indépendantes`,
    },
    {
      id: 'loi-produit-bernoulli-independantes',
      domaine: 'probabilites',
      chapitre: 'Variables aléatoires',
      titre: 'Loi du produit XY : (XY)(Ω) par double inclusion',
      motsCles: ['produit', 'XY', 'loi de Bernoulli', 'indépendance', 'raisonnement par l\'absurde', 'double inclusion', 'Exercice 20'],
      source: 'Exercice 20, question 1)',
      corps: String.raw`!! **Exercice 20 :** Soient $X$ et $Y$ deux variables aléatoires discrètes définies sur un espace probabilisé $(\Omega,\mathcal{T},\P)$.
On suppose que $X$ et $Y$ sont indépendantes, et suivent toutes les deux la loi de Bernoulli de paramètre $\dfrac{1}{2}$.
1) Déterminer la loi de $XY$.

1) Par hypothèse, $X$ et $Y$ sont 2 VA définies sur $(\Omega,\mathcal{T},\P)$, suivant une loi de Bernoulli.
Donc, $X$ et $Y$ sont 2 VAD définies sur $(\Omega,\mathcal{T},\P)$.
Donc, par théorème, $XY$ est une VAD définie sur $(\Omega,\mathcal{T},\P)$.
On a :
$$(XY)(\Omega)\subset\{xy,\ (x,y)\in X(\Omega)\times Y(\Omega)\}$$
Or, $$\begin{aligned}\{xy,\ (x,y)\in X(\Omega)\times Y(\Omega)\}&\underset{(1)}{=}\{xy,\ (x,y)\in\{0,1\}^2\}\\&=\{0\times0,\ 0\times1,\ 1\times0,\ 1\times1\}\\&=\{0,0,0,1\}\\&=\{0,1\}\end{aligned}$$
$(1)$ : Comme $X\hookrightarrow\mathcal{B}(1/2)$ et $Y\hookrightarrow\mathcal{B}(1/2)$, $X(\Omega)=\{0,1\}=Y(\Omega)$

Donc, $(XY)(\Omega)\subset\{0,1\}$.
De plus, $[XY=1]\underset{(1)}{=}[X=1]\cap[Y=1]$
$(1)$ : D'après ce qui précède, $\begin{cases}X(\Omega)=\{0,1\}\\Y(\Omega)=\{0,1\}\end{cases}$ et $\forall(x,y)\in\{0,1\}^2$, $xy=1\iff x=1$ et $y=1$
Donc, $$\begin{aligned}\P(XY=1)&=\P([X=1]\cap[Y=1])\\&\underset{(1)}{=}\P(X=1)\P(Y=1)\\&\underset{(2)}{=}\frac{1}{2}\times\frac{1}{2}\\&=\frac{1}{4}\end{aligned}$$
$(1)$ : Par indépendance de $X$ et de $Y$
$(2)$ : Car $X$ et $Y$ suivent la loi de Bernoulli de paramètre $1/2$.
Donc,
$$\begin{cases}XY(\Omega)\subset\{0,1\}\ (A)\\\P(XY=1)=1/4\ (C)\end{cases}$$
Donc, $\P(XY=1)\neq0$
Donc, $[XY=1]\neq\emptyset$
Donc, $1\in XY(\Omega)\ (B)$

__Raisonnons par l'absurde__ et supposons que $0\notin(XY)(\Omega)$

> Alors, d'après $(A)$ et $(B)$, $(XY)(\Omega)=\{1\}$
Or, $XY$ est discrète.
Donc, par théorème, $\sum\limits_{k\in(XY)(\Omega)}\P(XY=k)=1$
Donc, $\P(XY=1)=1$
Or, d'après $(C)$, $\P(XY=1)=1/4$.
Donc, on a obtenu une contradiction.
Donc, $0\in(XY)(\Omega)$.

Donc, $\{0,1\}\subset(XY)(\Omega)$
Donc, d'après $(A)$, par double inclusion, $(XY)(\Omega)=\{0,1\}$
De plus, d'après $(C)$, $\P(XY=1)=\dfrac{1}{4}$
Donc, [[$XY\hookrightarrow\mathcal{B}\left(\dfrac{1}{4}\right)$]]`,
    },
    {
      id: 'esperance-existence-ou-non',
      domaine: 'probabilites',
      chapitre: 'Variables aléatoires',
      titre: 'Espérance : divergence ou convergence de la série de terme général nP(X = n)',
      motsCles: ['espérance', 'convergence absolue', 'positivité du terme général', 'série de Riemann', 'série géométrique dérivée', 'Exercice 21'],
      source: 'Exercice 21',
      corps: String.raw`!! **Exercice 21 :** Soit $X$ une variable aléatoire définie sur un espace probabilisé $(\Omega,\mathcal{T},\P)$ vérifiant $X(\Omega)=\N^*$.
1) On suppose que :
$$\forall n\in\N^*,\ \P(X=n)=\frac{1}{n}-\frac{1}{n+1}$$
et l'on admet que $\left(\dfrac{1}{n}-\dfrac{1}{n+1}\right)_{n\in\N^*}$ définit bien une loi de probabilité discrète.
Montrer que $X$ ne possède pas d'espérance.
2) On suppose que :
$$\forall n\in\N^*,\ \P(X=n)=\left(\frac{1}{2}\right)^n$$
et l'on admet que $\left(\left(\dfrac{1}{2}\right)^n\right)_{n\in\N^*}$ définit bien une loi de probabilité discrète.
Montrer que $X$ possède une espérance et expliciter $E(X)$.

1) Par hypothèse, $X(\Omega)=\N^*$.
Or, $\N^*$ est un ensemble dénombrable.
Donc, $X$ est une variable aléatoire __discrète non finie__.
Alors, $X$ admet une espérance ssi la série $\sum\limits_{n\geqslant1}n\P(X=n)$ converge absolument
$\underset{(1)}{\text{ssi}}$ la série $\sum\limits_{n\geqslant1}n\P(X=n)$ converge
$(1)$ : par positivité du terme général : $\forall n\in\N^*$, $n\P(X=n)\geqslant0$.
Or,
$$\begin{aligned}\forall n\in\N^*,\ n\P(X=n)&=n\left(\frac{1}{n}-\frac{1}{n+1}\right)\\&=n\left(\frac{n+1-n}{n(n+1)}\right)\\&=\frac{1}{n+1}\end{aligned}$$
Or, la série $\sum\limits_{n\geqslant1}\dfrac{1}{n+1}$ diverge en tant que __série de Riemann de paramètre 1__ à un changement d'indice par translation près (« $m=n+1$ »)
Donc, la série $\sum\limits_{n\geqslant1}n\P(X=n)$ diverge
Donc, en vertu des équivalences précédentes, [[$X$ ne possède pas d'espérance.]]

2) Par hypothèse, $X(\Omega)=\N^*$.
Or, $\N^*$ est dénombrable.
Donc, $X$ est une __VAD non finie.__
Alors,
$X$ admet une espérance ssi la série $\sum\limits_{n\geqslant1}n\P(X=n)$ converge absolument
$\underset{(1)}{\text{ssi}}$ la série $\sum\limits_{n\geqslant1}n\P(X=n)$ converge
$(1)$ : Par positivité du terme général
Or :
$$\begin{aligned}\forall n\in\N^*,\ n\P(X=n)&=n\left(\frac{1}{2}\right)^n\\&=n\left(\frac{1}{2}\right)^{n-1+1}\\&=n\left(\frac{1}{2}\right)^{n-1}\frac{1}{2}\\&=\frac{1}{2}n\left(\frac{1}{2}\right)^{n-1}\end{aligned}$$
Or, la série $\sum\limits_{n\geqslant1}\dfrac{1}{2}n\left(\dfrac{1}{2}\right)^{n-1}$ converge en tant que __série géométrique dérivée d'ordre 2 $\dfrac{1}{2}$__ à une constante multiplicative près $\left(\dfrac{1}{2}\right)$ et $\dfrac{1}{2}\in\,]-1,1[$.
Donc, la série $\sum\limits_{n\geqslant1}n\P(X=n)$ converge.
Donc, d'après les équivalences précédentes, $X$ possède une espérance et
$$\begin{aligned}E(X)&\underset{(1)}{=}\sum_{n=1}^{+\infty}n\P(X=n)\\&=\sum_{n=1}^{+\infty}\frac{1}{2}n\left(\frac{1}{2}\right)^{n-1}\\&=\frac{1}{2}\sum_{n=1}^{+\infty}n\left(\frac{1}{2}\right)^{n-1}\\&=\frac{1}{2}\times\frac{1}{\left(1-\frac{1}{2}\right)^2}\\&=\frac{1}{2}\times\frac{1}{\frac{1}{4}}\\&=\frac{1}{2}\times4\\&=2\end{aligned}$$
$(1)$ : $X(\Omega)=\N^*$.
Donc, [[$X$ possède une espérance et $E(X)=2$]]`,
    },
    {
      id: 'loi-fonction-variable-aleatoire',
      domaine: 'probabilites',
      chapitre: 'Variables aléatoires',
      titre: 'Loi de Y = f(X) : Y(Ω), puis [Y = k] exprimé avec X',
      motsCles: ['transfert', 'Y = f(X)', 'image', 'Y(Ω)', 'loi de Bernoulli', 'loi uniforme', 'produit nul', 'disjonction des cas', 'Rademacher', 'Exemples 24'],
      source: 'Exemples 24',
      corps: String.raw`!! **Exemples 24 :**
1) Soit $p\in\,]0,1[$ et soit $X$ une variable aléatoire définie sur un espace probabilisé $(\Omega,\mathcal{T},\P)$ dont la loi est donnée par : $X(\Omega)=\{-1;1\}$ et $\P(X=1)=p$ et $\P(X=-1)=1-p$
Remarque : si $p=\dfrac{1}{2}$, on dit que $X$ suit la loi de Rademacher.
Cette loi, simple mais hors-programme, intervient dans de nombreux sujets de Concours.
Déterminer la loi de $Y=\dfrac{X+1}{2}$.
2) On considère l'expérience aléatoire consistant à lancer une fois un dé cubique standard.
On note $X$ le numéro indiqué par le dé.
Déterminer la loi de $Y=(X-3)^2$.

1) On a : $$\begin{aligned}Y(\Omega)&\underset{(1)}{=}\left(\frac{X+1}{2}\right)(\Omega)\\&\underset{(2)}{=}\left\{\frac{x+1}{2};\ x\in X(\Omega)\right\}\\&=\left\{\frac{x+1}{2};\ x\in\{-1,1\}\right\}\\&=\left\{\frac{1+1}{2};\ \frac{1-1}{2}\right\}\\&=\{0,1\}\end{aligned}$$
$(1)$ : Par définition de $Y$.
$(2)$ : Par théorème (Prop 49)

De plus,
$$\begin{aligned}\P(Y=1)&=\P\left(\frac{X+1}{2}=1\right)\\&=\P(X+1=2)\\&=\P(X=1)\\&\underset{(1)}{=}p\end{aligned}$$
$(1)$ : D'après l'énoncé
Ainsi, $Y(\Omega)=\{0,1\}$
$\P(Y=1)=p$
Donc, [[$Y\hookrightarrow\mathcal{B}(p)$ ie $Y$ suit la loi de Bernoulli de paramètre $p$.]]

2) Par définition de $X$,
$X(\Omega)=\llbracket1;6\rrbracket$ et
$X$ prend chacune des 6 valeurs $\llbracket1;6\rrbracket$ avec la même probabilité égale à $1/6$, __par équiprobabilité__ lors du lancer (dé cubique standard)

Donc, $X\hookrightarrow\mathcal{U}(\llbracket1,6\rrbracket)$
Donc, $\begin{cases}X(\Omega)=\llbracket1,6\rrbracket\quad(*)\\\forall k\in X(\Omega),\ \P(X=k)=\dfrac{1}{6}\quad(**)\end{cases}$

Déterminons la loi de $Y$.
Par définition,
$$Y=(X-3)^2$$
Comme $X(\Omega)=\llbracket1,6\rrbracket$ et $\llbracket1,6\rrbracket$ est au plus dénombrable, $X$ est discrète.
De plus, $x\mapsto(x-3)^2$ est définie sur $\R$ et $X(\Omega)\subset\R$.
Donc, $Y$ est une VAD définie sur $(\Omega,\mathcal{T},\P)$ par théorème, $(\Omega,\mathcal{T},\P)$ étant un espace probabilisé adéquat modélisant la présente expérience aléatoire.
On a :
$$\begin{aligned}Y(\Omega)&=(X-3)^2(\Omega)\\&\underset{(1)}{=}\{(x-3)^2,\ x\in X(\Omega)\}\\&\underset{(2)}{=}\{(x-3)^2,\ x\in\llbracket1,6\rrbracket\}\\&=\{(1-3)^2,(2-3)^2,(3-3)^2,(4-3)^2,(5-3)^2,(6-3)^2\}\\&=\{4;1;0;1;4;9\}\\&=\{0,1,4,9\}\end{aligned}$$
$(1)$ : par théorème
$(2)$ : D'après $(*)$

Soit $k\in\{0,1,4,9\}$
__Raisonnons par disjonction des cas :__

* __1er cas : $k=0$__
On a : $$\begin{aligned}[Y=k]&=[Y=0]\\&=[(X-3)^2=0]\\&=\{\omega\in\Omega\mid(X(\omega)-3)^2=0\}\\&\underset{(1)}{=}\{\omega\in\Omega\mid X(\omega)-3=0\}\\&=\{\omega\in\Omega\mid X(\omega)=3\}\\&=[X=3]\end{aligned}$$
$(1)$ : d'après la règle du produit nul dans $\R$.
Donc, $$\begin{aligned}\P(Y=k)&=\P(X=3)\\&\underset{(1)}{=}\frac{1}{6}\end{aligned}$$
$(1)$ : d'après $(**)$ et car $3\in\llbracket1;6\rrbracket$.

* __2ème cas : $k=9$__
On a : $$\begin{aligned}[Y=k]&=[Y=9]\\&=[(X-3)^2=9]\\&=\{\omega\in\Omega\mid(X(\omega)-3)^2-9=0\}\\&=\{\omega\in\Omega\mid X(\omega)^2-2(3)X(\omega)+9-9=0\}\\&=\{\omega\in\Omega\mid X(\omega)^2-6X(\omega)=0\}\\&=\{\omega\in\Omega\mid X(\omega)(X(\omega)-6)=0\}\\&\underset{(1)}{=}\{\omega\in\Omega\mid X(\omega)=0\text{ ou }X(\omega)-6=0\}\\&\underset{(2)}{=}\{\omega\in\Omega\mid X(\omega)=6\}\\&=[X=6]\end{aligned}$$
$(1)$ : d'après la règle du produit nul dans $\R$.
$(2)$ : d'après $(*)$, $X(\Omega)=\llbracket1,6\rrbracket$. Or, $0\notin\llbracket1,6\rrbracket$. Donc : $\forall\omega\in\Omega$, $X(\omega)\neq0$
Donc, $$\begin{aligned}\P(Y=k)&=\P(X=6)\\&\underset{(1)}{=}\frac{1}{6}\end{aligned}$$
$(1)$ : d'après $(**)$ et car $6\in\llbracket1,6\rrbracket$.

* __3ème cas : $k=1$__
On a : $$\begin{aligned}[Y=k]&=[Y=1]\\&=[(X-3)^2=1]\\&=\{\omega\in\Omega\mid(X(\omega)-3)^2-1^2=0\}\\&=\{\omega\in\Omega\mid(X(\omega)-2)(X(\omega)-4)=0\}\\&\underset{(1)}{=}\{\omega\in\Omega\mid X(\omega)=2\text{ ou }X(\omega)=4\}\\&=\{\omega\in\Omega\mid X(\omega)=2\}\cup\{\omega\in\Omega\mid X(\omega)=4\}\\&=[X=2]\cup[X=4]\end{aligned}$$
$(1)$ : d'après la règle du produit nul dans $\R$.
Donc, $$\begin{aligned}\P(Y=k)&=\P([X=2]\cup[X=4])\\&\underset{(1)}{=}\P(X=2)+\P(X=4)\\&\underset{(2)}{=}\frac{1}{6}+\frac{1}{6}\\&=\frac{1}{3}\end{aligned}$$
$(1)$ Par incompatibilité des événements $[X=2]$ et $[X=4]$ et par additivité de $\P$.
$(2)$ : d'après $(**)$ et car $(2,4)\in\llbracket1,6\rrbracket^2$

* __4ème cas : $k=4$__
De la même manière qu'au 3ème cas, on montre que :
$[Y=k]=[X=1]\cup[X=5]$ et on en déduit de même que $\P(Y=k)=\dfrac{1}{3}$.

Donc, [[la loi de $Y$ nous est donnée par : $$\begin{cases}Y(\Omega)=\{0;1;4;9\}\\[4pt]\P(Y=0)=\dfrac{1}{6}=\P(Y=9)\\[8pt]\P(Y=4)=\dfrac{1}{3}=\P(Y=1)\end{cases}$$]]`,
    },
    {
      id: 'transfert-serie-exponentielle',
      domaine: 'probabilites',
      chapitre: 'Variables aléatoires',
      titre: 'Théorème de transfert : espérance de f(X) par la série exponentielle',
      motsCles: ['théorème de transfert', 'espérance', 'série exponentielle', 'loi de probabilité discrète', 'changement d\'indice', 'factorielle', 'Exercice 23'],
      source: 'Exercice 23',
      corps: String.raw`!! **Exercice 23 :** Soit $(x_n)_{n\in\N}$ la suite réelle définie par :
$$\forall n\in\N,\ x_n=\frac{e^{-1}}{n!}$$
1) Montrer que la suite $(x_n)_{n\in\N}$ définit une loi de probabilité discrète.
Considérons une variable aléatoire discrète $X$ définie sur un espace probabilisé $(\Omega,\mathcal{T},\P)$ telle que $X(\Omega)=\N$ et $\forall n\in\N,\ \P(X=n)=x_n$.
2) Montrer que $\dfrac{1}{1+X}$ admet une espérance que l'on explicitera.

1) $\odot$ On a :
$$\forall n\in\N,\ x_n=\frac{e^{-1}}{n!}$$
Or, $\begin{cases}e^{-1}>0\\\forall n\in\N,\ n!>0\end{cases}$
Donc, $\forall n\in\N$, $\dfrac{e^{-1}}{n!}>0$
Donc, $\forall n\in\N$, $x_n>0$
Donc, __$\forall n\in\N$, $x_n\geqslant0$__

$\odot$ Montrons que la série $\sum\limits_{n\geqslant0}x_n$ converge de somme 1.
On a :
$$\begin{aligned}\forall n\in\N,\ x_n&=\frac{e^{-1}}{n!}\\&=e^{-1}\times\frac{1}{n!}\\&=e^{-1}\times\frac{1^n}{n!}\end{aligned}$$
On reconnaît le terme général de la __série exponentielle de paramètre 1,__ à une constante multiplicative près.
Donc, par théorème, $\sum\limits_{n\geqslant0}x_n$ converge et
$$\begin{aligned}\sum_{n=0}^{+\infty}x_n&=\sum_{n=0}^{+\infty}e^{-1}\times\frac{1^n}{n!}\\&=e^{-1}\sum_{n=0}^{+\infty}\frac{1^n}{n!}\\&=e^{-1}\times e^1\\&=e^{-1+1}\\&=e^0\\&=1\end{aligned}$$
Donc, en vertu des deux points $\odot$ précédents, [[la suite $(x_n)_{n\in\N}$ définit une loi de probabilité discrète (non finie)]]

2) Montrons que $\dfrac{1}{1+X}$ possède une espérance, que l'on explicitera.
On a :
$\odot$ $X(\Omega)=\N\quad(*)$
$\odot$ $\forall n\in\N$, $\P(X=n)=\dfrac{e^{-1}}{n!}\ (=x_n)\quad(**)$

D'après $(*)$, comme $\N$ est dénombrable, $X$ est une VAD __non finie__.
De plus, $x\mapsto\dfrac{1}{1+x}$ est définie sur $\R\setminus\{-1\}$, a fortiori sur $\N$.
Alors : $\dfrac{1}{1+X}$ possède une espérance $\underset{(1)}{\text{ssi}}$ la série $\sum\limits_{n\geqslant0}\dfrac{1}{1+n}\P(X=n)$ converge absolument
$\underset{(2)}{\text{ssi}}$ la série $\sum\limits_{n\geqslant0}\dfrac{1}{1+n}\P(X=n)$ converge
$(1)$ : D'après le __théorème de transfert__ (dans le cas des transformées de VAD non finies)
$(2)$ : Par positivité du terme général $\left(\forall n\in\N,\ \begin{cases}\dfrac{1}{1+n}>0\\\P(X=n)\geqslant0\end{cases}\text{ Donc, }\forall n\in\N,\ \dfrac{1}{1+n}\P(X=n)\geqslant0\right)$

On a :
$$\begin{aligned}\forall n\in\N,\ \frac{1}{1+n}\P(X=n)&\underset{(1)}{=}\frac{1}{1+n}\,\frac{e^{-1}}{n!}\\&\underset{(2)}{=}\frac{e^{-1}}{(n+1)!}\\&=e^{-1}\times\frac{1^{n+1}}{(n+1)!}\end{aligned}$$
$(1)$ : D'après $(**)$
$(2)$ : Par propriété de la factorielle.

On reconnaît le terme général de la __série exponentielle de paramètre 1__ à un changement d'indice par translation près (« $k=n+1$ ») et à une constante multiplicative près $(e^{-1})$.
Donc, par théorème, la série $\sum\limits_{n\geqslant0}\dfrac{1}{1+n}\P(X=n)$ converge et :
$$\begin{aligned}\sum_{k=0}^{+\infty}\frac{1}{1+k}\P(X=k)&=\sum_{k=0}^{+\infty}e^{-1}\times\frac{1^{k+1}}{(k+1)!}\\&=e^{-1}\sum_{k=0}^{+\infty}\frac{1^{k+1}}{(k+1)!}\\&=e^{-1}\sum_{n=1}^{+\infty}\frac{1^n}{n!}\\&=e^{-1}\left(\sum_{n=0}^{+\infty}\frac{1^n}{n!}-\frac{1^0}{0!}\right)\\&=e^{-1}(e^1-1)\\&=1-e^{-1}\end{aligned}$$
Donc, en vertu des équivalences précédentes,
[[$\dfrac{1}{1+X}$ possède une espérance et $E\left(\dfrac{1}{1+X}\right)=1-e^{-1}$]]`,
    },
    {
      id: 'schema-binomial-tirages-avec-remise',
      domaine: 'probabilites',
      chapitre: 'Variables aléatoires',
      titre: 'Reconnaître un schéma binomial (tirages avec remise)',
      motsCles: ['schéma binomial', 'loi binomiale', 'tirages avec remise', 'épreuves de Bernoulli', 'équiprobabilité', 'Exercice 24'],
      source: 'Exercice 24',
      corps: String.raw`!! **Exercice 24 :** Soit $n\in\N^*$.
Soit $(b,r)\in(\N^*)^2$.
On considère l'expérience aléatoire consistant à tirer successivement $n$ fois avec remise dans une urne comportant $b$ boules blanches et $r$ boules rouges.
On note $X$ la variable aléatoire égale au nombre de boules blanches obtenues à l'issue de ces $n$ tirages.
Déterminer la loi de $X$.

On reconnaît un __schéma binomial__. Par définition, $X$ compte le nombre de succès (« Obtenir une boule blanche ») suite à la répétition de $n$ épreuves de Bernoulli (identiques et) indépendantes (les tirages s'effectuant __avec__ remise). dont la probabilité à chaque épreuve vaut $\dfrac{b}{b+r}$, par __équiprobabilité__ à chaque tirage et d'après le protocole.
Donc, [[$X\hookrightarrow\mathcal{B}\left(n,\dfrac{b}{b+r}\right)$]]`,
    },
    {
      id: 'esperance-variance-transformee-affine',
      domaine: 'probabilites',
      chapitre: 'Variables aléatoires',
      titre: 'Espérance et variance d\'une transformée affine aX + b',
      motsCles: ['transformée affine', 'linéarité de l\'espérance', 'variance', 'V(aX+b)', 'loi de Poisson', 'Exemple 30', 'Exemple 32'],
      source: 'Exemples 30 et 32',
      corps: String.raw`!! **Exemple 30 :** Soit $X$ une variable aléatoire discrète définie sur un espace probabilisé $(\Omega,\mathcal{T},\P)$ suivant la loi de Poisson de paramètre 1.
Montrer que $3X+1$ possède une espérance et calculer cette espérance.

Posons $Y=3X+1$.
Par hypothèse, $X\hookrightarrow\mathcal{P}(1)$
Donc, par théorème, $X$ possède une espérance égale à 1.
Donc, par __propriété de linéarité de l'espérance__, $Y$ possède une espérance en tant que transformée __affine__ d'une telle variable et :
$$\begin{aligned}E(Y)&=3(E(X))+1\\&=3\times1+1\\&=4\end{aligned}$$
Donc, [[$3X+1$ possède une espérance et $E(3X+1)=4$]]

!! **Exemple 32 :** Soit $X$ une variable aléatoire suivant la loi $\mathcal{P}(1)$, définie sur un certain espace probabilisé $(\Omega,\mathcal{T},\P)$.
Montrer que $3X+1$ possède une variance que l'on explicitera.

Posons $Y=3X+1$.
Par hypothèse, $X\hookrightarrow\mathcal{P}(1)$
Donc, par théorème, $X$ possède une variance et $V(X)=1$.
Donc, par propriété de la variance, $Y$ possède une variance en tant que transformée __affine__ d'une telle variable $(X)$ et :
$$\begin{aligned}V(Y)&=V(3X+1)\\&=3^2V(X)\\&=3^2\times1\\&=9\end{aligned}$$
Donc, [[$3X+1$ possède une variance et $V(3X+1)=9$]]`,
    },
    {
      id: 'esperance-carre-koenig-huygens',
      domaine: 'probabilites',
      chapitre: 'Variables aléatoires',
      titre: 'Espérance de X² par la formule de Koenig-Huygens',
      motsCles: ['moment d\'ordre 2', 'E(X²)', 'Koenig-Huygens', 'variance', 'loi binomiale', 'variable finie', 'Exemple 31'],
      source: 'Exemple 31',
      corps: String.raw`!! **Exemple 31 :** Soit $(n,p)\in\N^*\times[0,1]$.
Soit $X$ une variable aléatoire suivant la loi $\mathcal{B}(n,p)$ défini sur un espace probabilisé $(\Omega,\mathcal{T},\P)$.
Montrer que $X^2$ possède une espérance que l'on explicitera.

Par hypothèse, $X\hookrightarrow\mathcal{B}(n,p)$
Donc, $X(\Omega)=\llbracket0,n\rrbracket$
Or, $\llbracket0,n\rrbracket$ est un ensemble fini.
Donc, $X$ est une variable aléatoire discrète __finie.__
Donc, par théorème, $X$ possède un moment d'ordre 2.
Donc, $X^2$ possède une espérance.
Or, $X\hookrightarrow\mathcal{B}(n,p)$
Donc, $X$ possède une espérance et une variance, et :
$$\begin{cases}E(X)=np\\V(X)=np(1-p)\end{cases}$$
$X$ possédant une variance, __la formule de Koenig-Huygens__ s'applique et donne :
$$V(X)=E(X^2)-E(X)^2$$
Donc, $E(X^2)=V(X)+E(X)^2$
Donc, $$\begin{aligned}E(X^2)&=np(1-p)+(np)^2\\&=np(1-p+np)\end{aligned}$$
Donc, [[$X^2$ possède une espérance et $E(X^2)=np(1-p+np)$]]`,
    },
    {
      id: 'reconnaitre-loi-uniforme',
      domaine: 'probabilites',
      chapitre: 'Variables aléatoires',
      titre: 'Reconnaître une loi uniforme',
      motsCles: ['loi uniforme', 'équiprobabilité', 'tirage', 'Exemple 35'],
      source: 'Exemple 35',
      corps: String.raw`!! **Exemple 35 :** Soit $n\in\N$.
On considère une urne comportant $n+1$ boules numérotées de 0 à $n$, dans laquelle on effectue un tirage. On note $X$ le numéro obtenu.
Déterminer la loi de $X$.

Identifions la loi de $X$.
Par définition de $X$ et du protocole, $X(\Omega)=\llbracket0,n\rrbracket$ et, __par équiprobabilité lors du tirage,__ $X$ prend chacune des valeurs de $\llbracket0,n\rrbracket$ avec la même probabilité égale à $\dfrac{1}{n+1}$.
Donc, [[$X\hookrightarrow\mathcal{U}(\llbracket0,n\rrbracket)$]]`,
    },
    {
      id: 'loi-indicatrice-evenement',
      domaine: 'probabilites',
      chapitre: 'Variables aléatoires',
      titre: 'Loi de l\'indicatrice d\'un événement',
      motsCles: ['indicatrice', 'loi de Bernoulli', 'variable certaine', 'événement', 'disjonction des cas', 'Exemples 36'],
      source: 'Exemples 36, 2)',
      corps: String.raw`!! **Exemples 36 :**
1) (Exemple type)
Soit $p\in[0,1]$. On lance une fois une pièce amenant Pile avec la probabilité $p$.
On note $X$ la variable aléatoire prenant la valeur 1 si on obtient Pile, 0 sinon.
Alors, $X\hookrightarrow\mathcal{B}(p)$
2) Soit $(\Omega,\mathcal{T},\P)$ un espace probabilisé.
Soit $A$ un événement.
Soit $X$ la variable aléatoire définie sur $(\Omega,\mathcal{T},\P)$ prenant la valeur 1 si $A$ est réalisé, et prenant la valeur 0 sinon.
Déterminer la loi de $X$.

2) __Raisonnons par disjonction des cas :__

> * __1er cas : $A=\emptyset$__
Alors, par définition de $X$,
$$\forall\omega\in\Omega,\ X(\omega)=0$$
Donc, $X$ est certaine égale à 0.

> * __2ème cas : $A=\Omega$__
Alors, par définition de $X$ :
$$\forall\omega\in\Omega,\ X(\omega)=1$$
Donc, $X$ est certaine égale à 1

> * __3ème cas : $A\neq\emptyset$ et $A\neq\Omega$__
Par définition de $X$ :
$X(\Omega)=\{0,1\}$
De plus,
$[X=1]$ est réalisé ssi $A$ est réalisé
Donc, $[X=1]=A$
Donc, $\P([X=1])=\P(A)$
Or, $X(\Omega)=\{0,1\}$
Donc, $X\hookrightarrow\mathcal{B}(\P(A))$

Donc, [[$\begin{cases}X\text{ est certaine égale à 0 si }A\text{ est impossible}\\X\text{ est certaine égale à 1 si }A\text{ est certain}\\X\hookrightarrow\mathcal{B}(\P(A))\text{ sinon}\end{cases}$]]`,
    },
  ],
};
