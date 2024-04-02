# Notice typographie

## HTML (Structure)  

### Créer des paragraphes avec les balises ```<p></p>```  
```<p> Écrire du texte entre les balises </p>```  

### Revenir à la ligne avec ```<br>```  
Il s’agit d’une balise orpheline, elle n’est à utiliser qu’une fois.   

### Créer des titres avec ```<h1>``` ```<h2>``` ```<h3>``` ```<h4>``` ```<h5>``` et ```<h6>```  
Pour rappel, le HTML est une langage de balisage qui permet de structurer et hiérarchiser des éléments dans une page web.    
Il existe en ce sens, plusieurs niveaux de titres qui vont du plus important ```<h1> </h1>``` au moins important ```<h6> </h6>```  

Votre navigateur affiche par défaut des tailles différentes de texte en fonction des titres, mais si vous voulez modifier la taille du texte, il faut le faire en CSS.  

### Créer des listes avec ```<ol>``` / ```<ul>``` et ```<li>```
* **Structure de la liste**   
Pour faire une liste à puces, vous utilisez les balises ```<ul> </ul>```  
Pour faire une liste numérotée, vous utiliser les balises ```<ol> </ol>```
* **Élément de la liste**  
Dans les deux cas, vous balisez chaque élément de la liste avec ```<li> </li>```  

### Mettre en valeur du texte (structurellement dans le HTML)
* Italique ```<em> </em>```
* Gras ```<strong> </strong>```
* Surligné ```<mark> </mark>```  
Rappel, HTML Vous pourrez personnaliser tout ça dans le CSS.  

### Créer un hyperlien avec ```<a> </a>``` et ```href```  
Pour faire un lien hypertexte :
* On utilise la balise ```<a>``` pour indiquer qu'on va rediriger vers un autre endroit,
* Puis, on ajoute l'attribut ```href=``` pour annoncer l'endroit vers lequel on veut rediriger,
* On indique explicitement entre  " "  l'endroit vers lequel le lien doit rediriger,
* Enfin, on écrit le texte qui doit s'afficher sur l'hyperlien
* Exemple : ```<a href="https://www.ensaama.net/site/"> Site de l’ensaama </a>```

On peut également lier une page de notre site, en ciblant la page par son nom localement
* Exemple : ```<a href="about.html"> About / contact </a>```

Pour le print --> afficher un lien automatiquement : Voir dans le css   
a::after {
  content: " (" attr(href) ")";
} 

Enfin, on peut rédiriger vers un endroit de notre page web en ciblant un ```id``` et en utilisant ```#```
* Exemple : ```<a href="#"> About / contact </a>```  

+ Ajouter comment faire des colonnes ?
+ Faire un récap 

## CSS (Style / Apparence)

### Définir une famille de caractère avec ```font-family```
* Utiliser les réglages par défaut : ```font-family: serif``` ou ```font-family: sans-serif```
* Importer une fonte spécifique avec ```@font-face```
  ```css
  @font-face { 
    font-family: 'Paragon-Regular';
    src: url('fontes/Paragon-Regular.otf') format('opentype');
  }:

  p {
    font-family: 'Paragon-Regular', serif;
  }
  ```

### Définir le corps avec ```font-size```  
Les tailles de textes peuvent être définies dans plusieurs unités de mesure:
* Valeurs absolues : en ```px```, en ```pt```
* Valeurs relatives : en ```vh```, en ```vw```, en ```em```.
  Dans ce cas, elles seront relatives à la taille du support ou de la div dans laquelle le texte est contenu.  
  ```css
  p {
    font-size:20px;
  }
  ```

### Définir la graisse avec ```font-weight```  
L'épaisseur choisie va être définie par le navigateur. Si vous souhaitez un résultat plus controllé, n'oubliez pas que vous pouvez spécifier une police et sa graisse avec ```font-family``` et ```@font-face```
* ```normal``` correspond à l'épaisseur normale du texte.
* ```bold``` indique une épaisseur plus importante que la normale.
* ```bolder``` indique une épaisseur plus importante que la valeur actuelle, en fonction de l'héritage de l'élément parent.
* ```lighter``` indique une épaisseur plus légère que la valeur actuelle, en fonction de l'héritage de l'élément parent.
  ```css
  p {
    font-weight: lighter;
  }
  ```

### Définir le style avec ```font-style```  
Il existe plusieurs options : ```normal```, ```italique``` et ```oblique```.
  ```css
  p {
    font-style: italique;
  }
  ```

### Définir la couleur avec ```color```  
Il existe plusieurs façon de définir une couleur en css: 
* Nom prédéfini : ```color: white;```, ```color: black;```,…
* Valeur hexadécimale : ```color: #FFFFFF;```, ```color: #000000;```,…
* Valeur RGB : ```color: rgb(0,0,0)```, ```color: rgb(255,255,255)```,…
  ```css
  p {
    color: red;
  }
  ```

### Aligner le texte avec ```text-align```  
Il existe plusieurs options : ```left```, ```right```, ```center``` et ```justify```.
  ```css
  p {
    text-align: left;
  }
   ```  

### Décorer le texte avec ```text-decoration```  
Il existe plusieurs options : ```underline```, ```overline```, ```line-through``` et ```none```. Cette dernière option permet d'annuler une décoration que le navigateur met par défault (par exemple sur les liens ```<a>```)
  ```css
  p {
    text-decoration: underline;
  }
```

### Changer la casse avec ```text-transform```  
Il existe plusieurs options :
* ```uppercase```: capitales
* ```lowercase```: bas de casse
* ```capitalize```: capitales sur première lettre
  ```css
  p {
    text-transform: uppercase;
  }
  ```

### Définir l'interlignage avec ```line-height```  
De la même façon que pour le corps avec ```font-size``` l'interlignage peut être défini dans plusieurs unités de mesure. 
  ```css
  p {
    line-height: 20px;
  }
```

### Définir l'interlettrage avec ```letter-spacing```  
  ```css
  p {
    letter-spacing: normal;
    letter-spacing: 1px;
    letter-spacing: -1px;
  }
```

### Définir l'intermots avec ```word-spacing```  
  ```css
  p {
    word-spacing: normal;
    word-spacing: 1px;
    word-spacing: -1px;
  }
```

### Définir l'intendation de la première ligne d'un paragraphe avec ```text-indent```  
  ```css
  p {
    text-indent: 0;
    text-indent: 30%;
    text-indent: -3em; 
  }
```

### Gérer césures, veuves et orphelines ```hyphens```, ```orphans``` et ```widows```  
  ```css
  p {
    text-align: justify;
    orphans: 2;
    widows: 3!important;
    hyphens: auto;
    hyphenate-limit-chars:8 4 3;
  }
```

## Rappel : Ajouter de l'intéractivité sans javascript
Le langage CSS est un langage assez puissant qui peut permettre dans certains cas de remplacer Javascript.  
Utilisation des pseudos-class:  
* :hover : La pseudo-class ```:hover``` permet de cibler un élément lorsque le curseur de la souris le survole.
* :active : La pseudo-class ```:active``` cible un élément au moment où il est activé, généralement lorsqu'un clic de souris est en cours.

## Orthotypo: ajouter des espaces fines et espaces insécables

Pour ajouter des espaces insécables, vous pouvez utiliser cet élément HTML ```&nbsp;``` entre deux éléments de texte. Ça va créer un espace insécable. 
Par exemple : ```Salut&nbsp;!```. 
C'est un peu fastideux mais vous pouvez remplir l'intégralité de votre HTML avec ça. C'est une solution légère (car uniquement en CSS).   
<br>
Une alternative consiste à utiliser Javascript.  
```html
<script>
const paragraphs = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, em, strong, li');

paragraphs.forEach(paragraph => {
    const text = paragraph.textContent;

    let modifiedText = text;

    modifiedText = modifiedText.replace(/([»!;:])/g, '<span class="espace-fine-avant">$1</span>');
    modifiedText = modifiedText.replace(/([«])/g, '<span class="espace-fine-apres">$1</span>');

    paragraph.innerHTML = modifiedText;
});
</script>
```
<br>
Le fonctionnement de ce script est assez simple :  le js va repérer tous les glyphs »!;: et « puis les entourer d'un span avec une class.  
Ensuite dans le css, ces class sont personnalisées avec pseudos-class :before et :after. Cela permet de cibler précisement l'espace créé, ajouter un espace dans le content et diminuer le corps pour réduire la chasse de l'espace et ainsi créer des espaces fines. Pour qu'ils soient insécables, il faut bien penser à retirer tous les espaces simples dans le code.  

```css
.espace-fine-avant:before{
  content: "\00a0\00a0";
  font-size:3pt;
}

.espace-fine-apres:after{
  content: "\00a0\00a0";
  font-size:3pt;
}
```

## Faire un sommaire 

### Dans le HTML 
Vous pouvez créer une div qui contiendra le sommaire
```html
<div class="sommaire">
  <p class="link" href="#chapter-1">- </p>
  <p class="link" href="#chapter-2">- </p>
  <p class="link" href="#chapter-3">- </p>
  <p class="link" href="#chapter-4">- </p>
  <p class="link" href="#chapter-5">- </p>
  <p class="link" href="#chapter-6">- </p>
  <p class="link" href="#chapter-7">- </p>
  <p class="link" href="#chapter-8">- </p>
</div>
```
Puis au fil de votre HTML, vous pouvez ajouter les id correpsondant : 
```html
<h3 class="titre-chapitre" id="chapter-1">Nom du chapitre 1</h3>
<h3 class="titre-chapitre" id="chapter-2">Nom du chapitre 2</h3>
<h3 class="titre-chapitre" id="chapter-3">Nom du chapitre 3</h3>
<h3 class="titre-chapitre" id="chapter-4">Nom du chapitre 4</h3>
<h3 class="titre-chapitre" id="chapter-5">Nom du chapitre 5</h3>
<h3 class="titre-chapitre" id="chapter-6">Nom du chapitre 6</h3>
<h3 class="titre-chapitre" id="chapter-7">Nom du chapitre 7</h3>
<h3 class="titre-chapitre" id="chapter-8">Nom du chapitre 8</h3>
```
Les id vont permettent de cibler la balise et récupérer le texte à l'intérieur, grâce au CSS, on va pouvoir appeler le contenu de notre H3 et même la page sur laquelle il se trouve ! 

### Dans le CSS
Ce code va permettre de récupérer le conteu textuel de l'id correspondant (il sera placé après dans notre sommaire): 
```css
.link::after {
  content: target-text(attr(href url)) ;
}
```
Ce code va permettre de récupérer le numéro de page sur mequel se trouve le nouveau chapitre (il sera placé avant dans notre sommaire): 
```css
.link::before {
  content: target-counter(attr(href url), page);
}
```
Vous pouvez utiliser unautre type de numérotation avec ```decimal-leading-zero```:
```css
.link::before {
  content: target-counter(attr(href url), page, decimal-leading-zero);
}
```
Ça fonctionne aussi pour les numéros de page.  

Enfin, on peut styliser le sommaire : 
```css
.sommaire{
  background-color:cyan;
}
.link{
  border-bottom:1px solid black;
  padding-bottom:10px;
}

.link:nth-child(1){
  border-top:1px solid black;
  padding-top:10px;
}

.link::after {
  content: target-text(attr(href url)) ;
}

.link::before {
  content: target-counter(attr(href url), page, decimal-leading-zero);
  padding-right:50px;
  font-weight:bolder;
}
```
