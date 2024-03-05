# HTML basiques 


## Définition

HTML, abréviation de HyperText Markup Language, est le langage de balisage standard utilisé pour créer des pages web. 
Il permet de structurer le contenu d'une page web en utilisant des balises pour définir différents éléments tels que les titres, les paragraphes, les liens, les images, etc.

## Principe de base
HTML repose sur un principe de balisage, où chaque élément est encadré par des balises. Les balises sont des éléments entourés par des chevrons angulaires ```<``` et ```>```. Elles sont généralement utilisées par paires, avec une balise d'ouverture et une balise de fermeture. 

Voici un exemple de balise simple 
```<p> </p>```   
Avec cette balise, vous créez un paragraphe. Le contenu textuel sera placé au milieu ```<p> Ceci est mon contenu </p>```  
Nous verrons dans un second temps l’ensemble des balises. 

## Structure HTML simple
Un fichier HTML se divise en plusieurs parties 

1. Le head 
La balise ```<head>``` est une partie essentielle de tout document HTML.
Elle contient des éléments qui fournissent des informations sur la page et son fonctionnement, mais qui ne sont pas directement visibles par l'utilisateur.
On y retrouve généralement : le titre de la page affiché dans la barre du navigateur, l’encodage des caractères, le lien vers le ou les documents CSS associés à la page,
le lien vers le ou les documents JS associés à la page, les icônes, …

```html
<!DOCTYPE html> 
<html> 
<head> 
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Titre de la page</title> 
    	<link rel="stylesheet" href="css/main.css"/>
   	<link rel="shortcut icon" href="images/Icon.png"/>
</head>
```

2. Le body 
La balise body contient tout le contenu visible de la page. C’est dans cette balise que l’on va écrire notre code HTML pour ajouter du contenu 

```html
<body> 
	<h1>Titre principal</h1> 
	<p>Ceci est un paragraphe.</p> 
	<a href="https://www.example.com">Ceci est un lien</a> 
	<img src="image.jpg" alt="Description de l'image"> 
</body> 
</html>
```

3. Le javascript
Si vous suivez bien, le JS peut être être inclut dans un document externe et être placé sous forme de lien dans la partie head mais il peut
également être intégré directement à la page HTML. Dans notre cas cas et pour garantir la frugalité de certains sites, nous allons essayer de garantir
l’usage du JS à un minimum, nous n’aurons donc pas besoin de cette partie. 

## Commentaires
Les commentaires HTML permettent d'insérer des annotations dans le code HTML, sans que ces annotations soient visibles sur la page web elle-même. 
Ils sont utilisés pour ajouter des notes, des explications ou pour commenter temporairement des parties de code, ce qui peut être utile si vous souhaitez mettre 
des choses de côté pour un temps ou faire des expérimentations. Dans ce cas, vous devez encadré le contenu à commenter des balises  ```<!--``` et ```-->```.

## Résumer
HTML est un langage de balisage conçu pour organiser et classer le contenu d'une page web. Pour compléter le style et la mise en forme, il est souvent associé au langage CSS.
Le code HTML est divisé en deux parties principales : le ```<head>``` contient des informations non visibles telles que le titre de la page et les liens vers des feuilles de style 
ou des scripts, tandis que le ```<body>``` contient le contenu visible de la page. 
Pour ajouter des commentaires dans le code HTML, vous pouvez encadrer le texte avec ```<!--``` et ```-->```.

