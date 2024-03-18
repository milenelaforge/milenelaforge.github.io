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

## Créer du contenu généré 

### The content property
La propriété « content » s’utilise avec les pseudos-elements ```::before``` et ```::after```
```css
.note::before {
  content: "Note: ";
}
```
Permet par exemple d’ajouter la chaine de caractère "Note" systématiquement avant chaque .note.  
On peut ajouter d’autres paramètres CSS: 
```css
.note::before {
  content: "Note: ";
  color: red;
  font-weight: bold;
}
```

### Generated counters 
```css-counter``` est une propriété CSS qui vous permet de compter les éléments de votre contenu.  
Par exemple, vous pourriez vouloir ajouter un nombre avant chaque légende de figure.  
Pour ce faire, vous devez réinitialiser le compteur dans le sélecteur ```<body>```
```css
body {
  counter-reset: figureNumber;
}
```
L’incrémenter chaque fois qu'une légende apparaît dans le contenu 
```css
figcaption {
  counter-increment: figureNumber;
}
```
### Generated links
Pour afficher les liens quand on imprime, on peut ajouter cette commande
```css
a::after {
  content: " (" attr(href) ")";
}
```

## Le principe des margin boxes (très important!)

### Margin boxes of a page
Une page box se compose de deux types de zones: 
1. La page area
2. Les margin boxes

1. La page area est la zone de contenu d'une page. C'est l'espace dans lequel tout le contenu HTML sera inséré. Lorsque ce contenu n'a plus de place, une autre page est automatiquement créée.

2. Les marges d'une page sont divisées en seize cases dans lesquelles on peut placer du contenu généré (numéro de page, têtes de chapitre). Ces boîtes sont appelées Margin boxes. Chacune a ses propres margin, border, padding et ses propres zones de contenu. 


### Contenu généré dans les margin boxes
Pour ajouter du contenu dans une margin-box, on peut se placer dans une page et utiliser ```content```, exemple: 
```css
@page:right {
    margin-left: 10mm;
    margin-right: 25mm;
    background-color: pink;
    @top-left {
    content: "My title";
    }
}
```
Ce code permet d’ajouter le contenu "My title" dans la box en haut à gauche de toutes les pages de droite du livre.  
<br>
Si on ne veut pas en avoir dans les page:blank (de droite): 
```css
@page:blank{
      @top-left {
      content: none;
      }
}
```
### Page Counter - Pagination
Utiliser css counter dans @page
@bottom-left {
    content: counter(page);
}
Combiner avec du texte 
@bottom-left {
    content: "page " counter(page);
}
Indiquer nombre de pages global
@bottom-left {
    content: "Page " counter(page) " of " counter(pages);
}
Note : pour l’instant, on ne peut pas commencer un livre à partir d’un compteur différent. 
