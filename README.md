# Site EKE-COUTURE

Site statique : `index.html` (HTML, CSS et JS dans un seul fichier). Aucune installation.

## Voir le site
```
py -3.13 -m http.server 8766 --directory site
```
Puis ouvrir http://localhost:8766/ (il faut un serveur : la 3D ne se charge pas en double-cliquant le fichier).

## Direction
Inspiré d'Apple (chapitres plein écran pilotés par le défilement, un objet central) et de Rolls-Royce (noir profond, cuivre, filets fins, peu de mots). Couleurs de la charte : encre, ivoire, cuivre.

## La 3D
L'emblème est reconstruit en 3D (three.js) à partir des mêmes formes que le logo. Il reste à l'écran pendant les chapitres : le nom, la coupe (rotation de 90° : on lit E, K, E), le fait main (gros plan), la fierté (tour complet). La lueur d'aube reste visible tout au long.
Sans WebGL, ou avec « réduire les animations », le site bascule sur une version 2D lisible.

## Coordonnées
À modifier dans l'objet `CONFIG` au début du script de `index.html` : WhatsApp et téléphone (renseignés), e-mail, atelier et Instagram (vides pour l'instant : les lignes n'apparaissent pas, Instagram affiche « Bientôt »).

## Ce qui est provisoire
- Visuels : emplacements « Photo à venir » (homme, femme, catalogue).
- Catalogue : 8 pièces d'exemple (tableau `items`).

## Bibliothèques (CDN, versions fixées)
GSAP 3.12.5 + ScrollTrigger (cdnjs), Lenis 1.1.9 et three.js 0.160.0 (jsDelivr), police Jost (Google Fonts).

## Fonctions
- Bouton FR / EN (choix mémorisé). Textes dans l'objet `DICT`.
- Formulaire d'essayage : ouvre WhatsApp avec le message prêt, sans serveur. Rien n'est stocké.
- Favicon, aperçu de partage (sans image), barre de progression.