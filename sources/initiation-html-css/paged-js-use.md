# Paged.js : Comment l’utiliser ? 

## Pour pouvoir exécuter Paged.js il faut

1. Les fichiers html et css que vous souhaitez transformer en livre ;
2. Le script Paged.js 
3. Un serveur web pour permettre au polyfill d'accéder à votre fichier CSS ;
4. Un navigateur web

## Pour le workshop
Dans le contexte de ce workshop, nous utiliserons une méthode un peu différente puisque j’ai déjà préparer la structure de fichier dans le GitHub pages. 
Vous pouvez consulter la structure du index [ici](https://github.com/milenelaforge/milenelaforge.github.io/blob/main/edition-ensaama/index.html) 
et l’ensemble du répertoire avec les assets [ici](https://github.com/milenelaforge/milenelaforge.github.io/tree/main/edition-ensaama). 

Le head ressemble à ça : 
```html
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Titre de ma page</title>
	<link rel="stylesheet" type="text/css"
	      href="https://mensuel.framapad.org/p/main-css/export/txt">
	<link href="css/interface.css" rel="stylesheet" type="text/css" />
	<script src="js/paged.polyfill.js"></script>
    	<script src="js/reload-in-place.js"></script>
</head>
```

* Le fichier interface.css a été pensé par l’équipe de développement de Paged.js, il permet de prévisualiser le livre directement dans le navigateur sans avoir à passer par ctrl + p. 
* On retrouve bien le paged.polyfill.js qui contient toutes les fonctions. Une fois qu’il est dans le code, nous n’avons plus besoin de nous y intéresser. 
* J’ai ajouté le script reload-in-place.js. À chaque fois qu’on modifie quelque chose, on doit recharger la page pour voir les modifications,
  le script reload-in-place évite de devoir scroller à notre page active à chaque fois. 

## Au delà du workshop
Si vous souhaitez expérimenter de votre côté et avoir une structure de fichier prête à l’emploi, le plus simple est d’utiliser l’interface conçue par Raphaël Bastide 
[Minute Hack](https://lab.raphaelbastide.com/minutehack/) en rentrant les infos suivantes : 
NOM DE VOTRE PROJET - HTML - NO CSS RESET - NO JS - WEB TO PRINT - MINIMAL HTML HEADER - NO README

Une fois le dossier généré, vous pouvez: 
1. Cliquer / glisser le tout dans un éditeur de texte (par exemple Sublime Text) 
2. Faire un clique droit sur le dossier —> cliquer sur Nouveau terminal au dossier —> rentrer cette ligne : php -S localhost:8000
   puis aller à l’adresse [http://localhost:8000/](http://localhost:8000/)

Enfin, pour aller plus loin, vous pouvez aussi consulter ce [lien](https://pagedjs.org/documentation/2-getting-started-with-paged.js/#starting-paged.js) 
où vous trouverez une explication détaillée des différentes façons d’utiliser paged.js. 
