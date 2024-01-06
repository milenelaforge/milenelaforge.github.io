

# Notice typographie

## HTML (Structure)
Les différentes balises pour écrire et organiser du texte
1.  **Créer des paragraphes** avec les balises ```<p></p>```  
```<p> Écrire du texte entre les balises </p>```
---

2. **Revenir à la ligne** avec ```<br>```  
   Il s’agit d’une balise orpheline, elle n’est à utiliser qu’une fois. 
---

3. **Créer des titres** avec ```<h1>``` ```<h2>``` ```<h3>``` ```<h4>``` ```<h5>``` et ```<h6>```  
Pour rappel, le HTML est une langage de balisage qui permet de structurer et hiérarchiser des éléments dans une page web.  
Il existe en ce sens, plusieurs niveaux de titres qui vont du plus important ```<h1> </h1>``` au moins important ```<h6> </h6>```  
Votre navigateur affiche par défaut des tailles différentes de texte en fonction des titres, mais si vous voulez modifier la taille du texte, il faut le faire en CSS. 
---

4. **Créer des listes** avec ```<ol>``` / ```<ul>``` et ```<li>```  
* **Structure de la liste**   
Pour faire une liste à puces, vous utilisez les balises ```<ul> </ul>```  
Pour faire une liste numérotée, vous utiliser les balises ```<ol> </ol>```  
* **Élément de la liste**  
Dans les deux cas, vous balisez chaque élément de la liste avec ```<li> </li>```
---

5. **Mettre en valeur du texte** (structurellement dans le HTML)  
* Italique ```<em> </em>```  
* Gras ```<strong> </strong>```  
* Surligné ```<mark> </mark>```  
Rappel, HTML Vous pourrez personnaliser tout ça dans le CSS. 
---

6. **Créer un hyperlien** avec ```<a> </a>``` et ```href```  
Pour faire un lien hypertexte :
* On utilise la balise ```<a>``` pour indiquer qu'on va rediriger vers un autre endroit,
* Puis, on ajoute l'attribut ```href=``` pour annoncer l'endroit vers lequel on veut rediriger,
* On indique explicitement entre  " "  l'endroit vers lequel le lien doit rediriger,
* Enfin, on écrit le texte qui doit s'afficher sur l'hyperlien
* Exemple : ```<a href="https://www.ensaama.net/site/"> Site de l’ensaama </a>```

On peut également une page de notre site, en ciblant la page par son nom localement
* Exemple : ```<a href="about.html"> About / contact </a>```

Pour le print --> afficher un lien automatiquement : Voir dans le css   
a::after {
  content: " (" attr(href) ")";
} 

> Enfin, on peut rédiriger vers un endroit de notre page web en ciblant un ```id``` et en utilisant ```#```
> * Exemple : ```<a href="#"> About / contact </a>```
---

+ Ajouter comment faire des colonnes ?
+ Faire un récap 

## CSS (Style / Apparence)

1. **Définir une famille de caractère** avec ```font-family```
* Utiliser les réglages par défaut : ```font-family: serif``` ou ```font-family: serif```
* Importer une fonte spécifique avec ```@font-face```
  ```css
  @font-face { 
    font-family: 'Paragon-Regular';
    src: url('fontes/Paragon-Regular.otf') format('opentype');
  }:

  p {
    font-family: 'Paragon-Regular', serif;
  }

2. **Définir le corps** avec ```font-size```
Les tailles de textes peuvent être définies dans plusieurs unités de mesure:
* Valeurs absolues : en ```px```, en ```pt```
* Valeurs relatives : en ```vh```, en ```vw```, en ```em```.
  Dans ce cas, elles seront relatives à la taille du support ou de la div dans laquelle le texte est contenu.  
  ```css
  p {
    font-family: 'Paragon-Regular', serif;
    font-size:20px;
  }

font-size: Le corps de la police.
font-weight: La graisse de la police
font-style: Le style de la police (normal, italique, oblique)

2. Couleur
color: La couleur du texte

3. Alignement du texte
text-align: L’alignement du texte (left, right, center, justify).

4. Décoration du texte
text-decoration: La décoration du texte (underline, overline, line-through, none).

5. Changement de casse
text-transform: Transforme le texte en majuscules, minuscules, ou en capitales.

6. Hauteur de ligne
line-height: La hauteur de ligne (interlignage)

7. Espacement des lettres
letter-spacing: L’espacement entre les lettres (interlettrage)

8. Espacement des mots
word-spacing: L’espacement entre les mots (interdits)

9. Indentation du texte
text-indent: Définit l'indentation de la première ligne d'un paragraphe.
