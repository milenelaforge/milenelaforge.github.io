# Notice Grille et Compo

## Définir les bases de la publication (format, orientations, marges, recto-verso…) 

### Définir le format : Page size property
On peut utiliser des valeurs customisées (en cm, mm, in)
```css 
@page {
	size: 140mm 200mm;
}
```  
On peut aussi  Utiliser des standards
```css
@page {
	size: A5;
}
```

### Définir l’orientation
```css
@page {
	size: A4 landscape;
}
``` 

### CSS variables
On n’utilise pas les variables CSS pour définir la taille de la page mais, Paged.js crée un ensemble 
de propriétés personnalisées à partir de la déclaration et les utilise pour la mise en page.   
On peut donc les réutiliser dans le document si besoin.   
```var(--pagedjs-pagebox-width)``` pour la largeur de la page  
```var(--pagedjs-pagebox-height)``` pour la hauteur de la page

### Définir les marges : Margin size property
Par défaut, les marges sont à 1 inch
```css
@page {
	margin-top: 20mm;
	margin-bottom: 25mm;
	margin-left: 10mm;
	margin-right: 35mm;
}
``` 
Ou autre syntaxe 
```css
@page {
	margin: 20mm 35mm 25mm 10mm;
}
```
### Facing pages or Recto/verso
Pour des doubles-pages, utiliser les pseudo-selectors :left et :right
```css
@page:left {
  margin-left: 25mm;
  margin-right: 10mm;
}

@page:right {
  margin-left: 10mm;
  margin-right: 25mm;
}
```

Si le document est un livre recto/verso (c'est-à-dire qu'il n’y a pas besoin de pages en regard), utiliser les sélecteurs de page ```:recto``` et ```:verso``` de la même manière.

### Page breaks
Paged.js crée automatiquement un saut de page lorsque votre contenu ne tient pas sur une page.   
Cependant, vous pouvez avoir besoin de contrôler cette fragmentation.   
Typiquement, dans un livre, vous pouvez vouloir commencer tous les chapitres du livre sur une page droite.

1. ```Break-before```   
Indique que votre élément doit commencer sur une nouvelle page qui peut être :
*  ```break-before: page``` Commence sur n’importe quelle page (la suivante)
*  ```break-before: right``` Commence sur la prochaine page de droite (une page vierge blank sera automatiquement créée si nécessaire)
*  ```break-before: left``` Commence sur la prochaine page de gauche (une page vierge blank sera automatiquement créée si nécessaire)

Si le document est un livre recto/verso, utiliser les sélecteurs de page ```:recto``` et ```:verso``` de la même manière.

2. ```Break-after```  
Indique qu’après notre élément, le contenu suivant doit commencer sur une nouvelle page qui peut être :
* ```break-after: page```
* ```break-after: right```
* ```break-after: left```

### Pseudo-class selectors for pages
Il existe des pseudo-class selectors qui permettent de cibler des éléments.  
On connait ```:left``` et ```:right``` (ainsi que ```:recto``` ou ```:verso```).   
Mais il existe aussi : 
* ```:first``` Sélectionne la première page du document ```@page:first```
* ```:blank``` Sélectionne toutes les blank page du document ```@page:blank```
* ```:nth()``` Sélectionne une ou plusieurs page précises en appelant son numéro ```@page:nth(3)```

### Bleeds (fonds-perdus)
On peut ajouter des repères de fonds-perdus : 
```css
@page  {
	bleed: 6mm;
}
```

### Crop and cross marks
On peut ajouter des traits de coupe : 
```css
@page  {
   	 marks: crop;
}
```
On peut ajouter des marques de repérage 
```css
@page  {
   	 marks: cross;
}
```
Et on peut les combiner
```css
@page  {
   	 marks: crop cross;
}
```
