# Imprimer dans le navigateur <br>@medias print

Comme nous l’avons déjà évoqué, le web to print repose sur une fonctionnalité offerte par les navigateurs : la commande Ctrl + p (ou Fichier > Imprimer).  
On peut donc composer un contenu sur une page HTML, l’afficher dans un navigateur et l’imprimer (ou plutôt, générer un PDF). 

La règle @media en CSS permet de définir des styles spécifiques pour différents types de supports tels que l'écran (screen) et l'impression (print) : 
* @media screen
    * Cette règle permet de définir des styles pour l'affichage sur écran, c'est-à-dire pour les navigateurs web.
    * Les styles définis dans cette règle seront appliqués lors de l'affichage sur un écran d'ordinateur, de tablette ou de téléphone portable.
* @media print
    * Cette règle permet de définir des styles spécifiques pour l'impression d'une page web.
    * Les styles définis dans cette règle seront appliqués lors de l'impression de la page, par exemple, lorsque l'utilisateur appuie sur le bouton d'impression de son navigateur.

## Exemple 
```css
@media screen {
    body {
        font-family: Arial, sans-serif;
        color: orangered;
    }
}
```

```css
@media print {
    body {
        font-family: Times New Roman, serif;
        color: royalblue;
    }
}
```

## Comment intégrer au HTML 
Il existe trois façons de spécifier les deux médias pour le HTML 

### 1. Directement dans la structure HTML, dans le head
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Votre titre de page</title>

    <style>
        @media screen {
	    body {
	        font-family: Arial, sans-serif;
	        color: orangered;
	    }
        }

        @media print {
	    body {
        	font-family: Times New Roman, serif;
        	color: royalblue;
    	    }
        }
    </style>
</head>
```
Cette solution est pratique pour de petites expérimentations mais il est préférable d’externaliser le CSS pour des raisons de lecture et optimisation du code. 

### 2. Dans un fichier css externe  

HTML 
```html
<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="styles.css"> 
	<title>Votre titre de page</title>
</head>
```

CSS (nommé styles.css)
```css
@media screen {
	body {
		font-family: Arial, sans-serif;
		color: orangered;
	}
}

@media print {
	body {
		font-family: Times New Roman, serif;
        	color: royalblue;
	}
}
```
### 3. Dans deux fichiers css externes  
### Dossier à télécharger <a href="https://github.com/milenelaforge/milenelaforge.github.io/blob/main/sources/docs-to-download/medias-screen-print.zip" download="">ici</a>

HTML 
```html
<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="style-screen.css"> 
	<link rel="stylesheet" type="text/css" href="style-print.css"> 
	<title>Votre titre de page</title>
</head>
```

CSS  
Nommé style-screen.css
```css
@media screen {
	body {
		font-family: Arial, sans-serif;
		color: orangered;
	}
}
```

Nommé style-print.css
```css
@media print {
	body {
		font-family: Times New Roman, serif;
        	color: royalblue;
	}
}
```
