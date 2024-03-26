# Notice Images et Vidéos

## Intégrer une image 
Vous pouvez intégrer une image dans le HTML avec la balise ```<img>``` : 
```html
<img src="assets/images/image.jpg" alt="Description">
```  
Il faut bien utiliser ce chemin d'accès car nous allons mettre tous vos visuels dans assets/images/…  
Si vous ajouter du contenu multimédias, vous pouvez encapsuler la balise ```<img>``` dans une balise ```<figure>``` globale: 
```html
<figure>
    <img src="assets/images/image.jpg" alt="Description">
    <figcaption>© Légendes de l'image</figcaption>
</figure>
```
Dans le contexte de notre workshop, il faudra utiliser la syntaxe avec figure pour les dégradés. 

## Régler les dimensions 

Vous pouvez utiliser CSS pour styliser votre image ou ajuster son comportement.   
Voici un exemple simple pour redimensionner une image:
```css
img {
    width: 100%; 
    height: auto; 
    object-fit: contain; 
    object-fit: cover; 
}
```  

Vous pouvez utilisez des classes pré-existantes sur les images: 
* .small-width --> l'image fera 1/3 de la largeur de la page
* .middle-width --> l'image fera 50% de la largeur de la page
* .full-width --> l'image fera la largeur totale de la page (dans les marges)
* .full-height --> l'image fera la hauteur totale de la page (dans les marges)
* .full-width-height --> l'image fera la hauteur et largeur totale de la page (dans les marges)  
<br>
Pour utiliser une de ces class, vous devez mettre dans le HTML :  

```html
<img class="small-width" src="assets/images/image.jpg">
```


Il faut s'assurer que les class sont présentes dans le css: 

```css
.small-width{
  position:absolute;
  width:33%;
  max-height: 100%;
  object-fit: cover;
}

.middle-width { 
  width:50%;
  max-height: 100%;
  object-fit: cover;
}

.full-width { 
  width:100%;
  max-height: 100%;
  object-fit: cover;
}

.full-height { 
  height:100%;
  max-width: 100%;
  object-fit: cover;
}

.full-width--height { 
  height:100%;
  width:100%;
  object-fit: cover;
}
```

## Régler la postition 
Les images comme tous les autres contenus, vont par défaut être positionnées dans l'ordre déterminé dans le html.  
Vous pouvez néanmoins leur attribuer des positions absolues dans la page. Toutefois, attention au réglage du texte, en cas de problème de supperposition, vous pouvez vous tourner vers le fonctionnement des flexboxs dans le point suivant.  
Vous pouvez utilisez des classes pré-existantes sur les images: 
* .left-pos --> positionne l'image à gauche
* .right-pos => positionne l'image à droite
* .top-pos => positionne l'image en haut
* .bottom-pos => positionne l'image en bas
* .horizontally-centered --> positionne l'image au centre (horizontalement)
* .centered --> positionne l'image au centre 
<br>
Pour utiliser une de ces class, vous devez mettre dans le HTML :  

```html
<img class="right-pos" src="assets/images/image.jpg">
```

Il faut s'assurer que les class sont présentes dans le css: 

```css
.left-pos{
  position:absolute;
  left:0;
}

.right-pos{
  position:absolute;
  right:0;
}

.top-pos{
  position:absolute;
  top:0;
}

.bottom-pos{
  position:absolute;
  bottom:0;
}

.horizontally-centered{
  margin-left:50%;
  transform:translate(-50%);
}

.centered{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
}
```

## Donner des effets
Il existe plusieurs mode de superposition des éléments.  
Si vous utiliser la structure d'une image avec ```<figure>```, vous pouvez donner un background-color à ```<figure>``` et mettre l'image dans un mode particulier : 
```css
img {
  mix-blend-mode: normal;
  mix-blend-mode: multiply;
  mix-blend-mode: screen;
  mix-blend-mode: overlay;
  mix-blend-mode: darken;
  mix-blend-mode: lighten;
  mix-blend-mode: color-dodge;
  mix-blend-mode: color-burn;
  mix-blend-mode: hard-light;
  mix-blend-mode: soft-light;
  mix-blend-mode: difference;
  mix-blend-mode: exclusion;
  mix-blend-mode: hue;
  mix-blend-mode: saturation;
  mix-blend-mode: color;
  mix-blend-mode: luminosity;
}
```

## Faire des grilles d'images avec flexbox
1. **Placer vos images dans une div** :
   Dans votre HTML, créez une div et placez vos images dedans :
   
   ```html
   <div class="container> {
       <figure><img src="assets/images/image-01.jpg"></figure>
       <figure><img src="assets/images/image-02.jpg"></figure>
       <figure><img src="assets/images/image-03.jpg"></figure>
       <figure><img src="assets/images/image-04.jpg"></figure>
       <figure><img src="assets/images/image-05.jpg"></figure>
       <figure><img src="assets/images/image-06.jpg"></figure>
   </div>
   ```
2. **Définir un Conteneur Flex** :

   Déclarez votre conteneur comme un conteneur flex en utilisant la propriété CSS `display: flex;`. Par exemple :

   ```css
   .container {
       display: flex;
   }
   ```

3. **Définir la Direction de la Flexbox** :

   Utilisez la propriété `flex-direction` pour spécifier la direction principale dans laquelle les éléments flex doivent être disposés.
   Les valeurs courantes incluent `row` (ligne) et `column` (colonne). Par exemple :

   ```css
   .container {
       display: flex;
       flex-direction: row; /* Les éléments flex sont disposés horizontalement */
   }
   ```

4. **Aligner les éléments sur l'axe principal** :

   Utilisez `justify-content` pour aligner les éléments le long de l'axe principal. Par exemple, pour les aligner au centre :

   ```css
   .container {
       display: flex;
       justify-content: center;
   }
   ```

5. **Aligner les éléments sur l'axe transversal** :

   Utilisez `align-items` pour aligner les éléments sur l'axe transversal. Par exemple, pour les aligner au centre verticalement :

   ```css
   .container {
       display: flex;
       align-items: center;
   }
   ```

6. **Créer un espacement entre les éléments** :

   Utilisez `justify-content` avec des valeurs telles que `space-between` ou `space-around` pour créer un espacement entre les éléments. Par exemple :

   ```css
   .container {
       display: flex;
       justify-content: space-between; /* Espacement égal entre les éléments */
   }
   ```
