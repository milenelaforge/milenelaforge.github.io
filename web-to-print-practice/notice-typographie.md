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

> Enfin, on peut rédiriger vers un endroit de notre page web en ciblant un ```id``` et en utilisant ```#```
> * Exemple : ```<a href="#"> About / contact </a>```  

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
À DÉFINIR
  ```css
  p {
    letter-spacing: À DÉFINIR
  }
```

### Définir l'intermots avec ```word-spacing```  
À DÉFINIR
  ```css
  p {
    word-spacing: À DÉFINIR
  }
```

### Définir l'intendation de la première ligne d'un paragraphe avec ```text-indent```  
À DÉFINIR
  ```css
  p {
    text-indent: À DÉFINIR
  }
```

Faire un rappel des pseudos-elements :hover
