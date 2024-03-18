# CSS basiques 

## Définition

CSS, acronyme de Cascading Style Sheets, est un langage de feuilles de style utilisé pour décrire la présentation d'un document HTML (ou XML). 
En d'autres termes, CSS permet de contrôler l'apparence et la mise en forme des éléments d'une page web, tels que la couleur, la taille, la police, la disposition, etc.

## Principe de base
En CSS, vous définissez des règles de style qui spécifient comment les éléments HTML doivent être affichés. 
Ces règles sont généralement constituées d'un sélecteur et d'un ensemble de propriétés avec leurs valeurs.

## Exemple de règle CSS simple
```css
h1 { 
	color: blue; 
	font-size: 24px; 
}
```
Dans cet exemple :
- ```h1``` est un sélecteur qui cible tous les éléments ```<h1>``` dans le document HTML.
- ```color``` est une propriété qui définit la couleur du texte.
- ```font-size``` est une propriété qui définit la taille de la police.

## Cibler les éléments
Pour cibler des éléments HTML, vous pouvez utiliser différents moyens en CSS :

* Cibler par balise :  Comme ci-dessus, vous pouvez simplement cibler les balises HTML. Par exemple, ```<p>``` est ciblé par ```p { }``` et ```<a>``` est ciblé par ```a { }```.
* Utilisation des attributs ID et Class :
    * ID : Un attribut ID identifie de manière unique un élément HTML. Par exemple, ```<h1 id="main-title">``` identifie un titre principal. Pour le cibler en CSS, on utilise ```#main-title { }```.
    * Class : L'attribut Class regroupe des éléments similaires. Par exemple, ```<li class="item">``` identifie les éléments de liste. Pour les cibler en CSS, on utilise ```.item { }```.
* Relation Parent-Enfant :
    * Les éléments HTML peuvent être imbriqués les uns dans les autres, créant ainsi une relation parent-enfant.
    * Vous pouvez cibler un élément enfant à l'intérieur d'un parent en CSS. Par exemple, ```div p { }``` cible tous les paragraphes ```<p>``` à l'intérieur d'un élément ```<div>```.
* Pseudo-classe nth-child :
    * La pseudo-classe nth-child permet de cibler un élément en fonction de sa position parmi ses frères et sœurs.
    * Par exemple, ```ul li:nth-child(1)``` cible le premier élément ```<li>``` à l'intérieur de toutes les listes ```<ul>```.

## Ajouter de l'intéractivité sans javascript
Le langage CSS est un langage assez puissant qui peut permettre dans certains cas de remplacer Javascript.  
Utilisation des pseudos-class:  
* :hover : La pseudo-class ```:hover``` permet de cibler un élément lorsque le curseur de la souris le survole.
* :active : La pseudo-class ```:active``` cible un élément au moment où il est activé, généralement lorsqu'un clic de souris est en cours.

Animations css: 
* @keyframes : Les animations CSS sont définies à l'aide de ```@keyframes``` règle. Cela permet de spécifier les étapes d'une animation.
* ```css
  @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  }
  .fade-in {
    animation: fadeIn 1s ease-in-out;
  }
  ```

## Commentaires
Comme en HTML, vous pouvez commenter des parties de votre code en CSS. Dans ce cas, vous devez encadré le contenu à commenter des balises  ```/*``` et ```*/```.

## Lier un fichier CSS à un document HTML
Pour lier un fichier CSS à un document HTML, vous pouvez utiliser l'élément ```<link>``` dans la section ```<head>``` de votre document HTML.

```
<!DOCTYPE html> 
<html> 
<head> 
	<title>Titre de la page</title> 
	<link rel="stylesheet" type="text/css" href="styles.css"> 
</head> 

<body> 
	<h1>Titre principal</h1> 
	<p>Ceci est un paragraphe.</p> 
	<a href="https://www.example.com">Ceci est un lien</a> 
	<img src="image.jpg" alt="Description de l'image"> 
</body> 

</html>
```

Dans cet exemple, styles.css est le fichier CSS externe que nous souhaitons lier à notre document HTML. 
Assurez-vous que le chemin d'accès spécifié dans l'attribut href pointe vers le bon fichier CSS.

## Résumer
CSS est un langage de feuilles de style qui permet de définir la présentation des éléments HTML. 
En utilisant des sélecteurs et des propriétés, vous pouvez contrôler l'apparence de votre page web. 
Pour lier un fichier CSS à un document HTML, utilisez l'élément <link> dans la section <head> de votre document HTML.
