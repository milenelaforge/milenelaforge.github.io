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
<br>
Si le document est un livre recto/verso, utiliser les sélecteurs de page ```:recto``` et ```:verso``` de la même manière.
<br>
2. ```Break-after```  
Indique qu’après notre élément, le contenu suivant doit commencer sur une nouvelle page qui peut être :
* ```break-after: page```
* ```break-after: right```
* ```break-after: left```

### Pseudo-class selectors for pages
Il existe des pseudo-class selectors qui permettent de cibler des éléments.  
On connait ```:left``` et ```:right``` (ainsi que ```:recto``` ou ```:verso```).  <br> 
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

<img src="https://raw.githubusercontent.com/milenelaforge/milenelaforge.github.io/refs/heads/main/sources/Images/margin-boxes.png" width="700"/>

La page area est la zone de contenu d'une page. C'est l'espace dans lequel tout le contenu HTML sera inséré. Lorsque ce contenu n'a plus de place, une autre page est automatiquement créée.  
<br>
Les marges d'une page sont divisées en seize cases dans lesquelles on peut placer du contenu généré (numéro de page, têtes de chapitre). Ces boîtes sont appelées Margin boxes. Chacune a ses propres margin, border, padding et ses propres zones de contenu. 


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

### Styliser les margin boxes
On peut directement appliquer un style à une margin box
```css
@page {
  @top-left {
    content: "My title";
    padding-left: 15mm;
    color: #ff5733;
  }
}
```
Les dimensions des margin-boxes sont calculé automatiquement par rapport aux marges de la page mais on peut leur donner des valeurs personnalisées. 
```css
@page {
  @left-top {
    width: 28mm;
    height: 10mm;
  }
}
```
Enfin, vous pouvez effectuer des rotations: 
```css
@page {
  @left-top {
    width: 28mm;
    height: 10mm;
    transform: rotate(-90deg);
    transform-origin: top left;
    position: relative;
    top: 28mm;
  }
}
```

### Page Counter - Pagination
Utiliser css counter dans @page
```css
@bottom-left {
    content: counter(page);
}
```

Combiner avec du texte 
```css
@bottom-left {
    content: "page " counter(page);
}
```

Indiquer nombre de pages global
```css
@bottom-left {
    content: "Page " counter(page) " of " counter(pages);
}
```
Note : pour l’instant, on ne peut pas commencer un livre à partir d’un compteur différent. 

### Named String: classical running headers/footers
<br>
1. Contenu des Named String  
Le moyen le plus rapide de créer des en-têtes/pieds de page continus est d'utiliser ce qui se trouve déjà dans le contenu.  
Les Named String (chaînes nommées) sont utilisées pour créer des en-têtes et des pieds de page continus : elles copient le texte pour le réutiliser dans les zones de marge.  
<br>
Tout d’abord, le texte est cloné (copié) dans une chaîne en utilisant le paramètre ```string-set``` + un identifiant personnalisé ici ```title``` (on peut nommer cette variable comme on le souhaite)  
```css
h2 {
  string-set: title content(text);
}
```
Dans cet exemple, à chaque fois qu’un ```<h2>``` apparaît, le contenu de notre variable « title » va être adapté.  <br>
Ensuite, il faut coller notre chaîne en utilisant la fonction ```string()``` et en rappelant notre variable personnalisée title : 
```css
@page {
  @bottom-center {
    content: string(title);
  }
}
```
À chaque fois qu'un nouveau titre de niveau 2 est rencontré, elle change la variable de la page où ce titre apparaît et dans toutes les boîtes de marge des pages suivantes jusqu'à ce qu'il y ait un nouveau titre. D’autre options comme cloné seulement la première lettre, cloné l’élément ::before ou ::after sont en cours d’écriture. 
<br>
2. Apparence des Named String 
```css
@page {
  @bottom-center {
    content: string(title);
    text-transform:uppercase;
    font-size:10pt;
  }
}
```

### Running elements: headers/footer with specific (complex) content
1. Contenu des Running elements
Certains cas plus complexes demandent d’utiliser une autre méthode.  
On peut inscrire le texte quelque part dans notre HTML: ```<p class="title">Titre courant unique</p>```  
L’emplacement dans le HTML définira à partir de quel moment il apparaît, tant qu’il n’est pas remplacé, il apparaît sur toutes les pages.  
<br>
Puis ajouter dans le CSS
```css
.title {
  position: running(titleRunning);
}

@page {
  @top-center {
    content: element(titleRunning);
  }
}
```

2. Apparence des Running elements
```css
.title {
  position: running(titleRunning);
  color:red;
  text-align:center;
}
```
