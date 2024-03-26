# Notice Images et Vidéos

## Intégrer une image 
Vous pouvez intégrer une image dans le HTML avec la balise ```<img>``` : 
```html
<img src="chemin/vers/votre/image.jpg" alt="Description de l'image">
```  
Si vous ajouter du contenu multimédias, vous pouvez encapsuler la balise ```<img>``` dans une balise ```<figure>``` globale: 
```html
<figure>
    <img src="chemin/vers/votre/image.jpg" alt="Description de votre image">
    <figcaption>© Légendes et crédits de l'image</figcaption>
</figure>
```



## Régler les dimensions 

### Image contenu dans les marges
Vous pouvez utiliser CSS pour styliser votre image ou ajuster son comportement.   
Voici un exemple simple pour redimensionner une image:
```css
img {
    width: 100%; /* Redimensionner l'image pour remplir la largeur du conteneur parent */
    height: auto; /* Permettre à la hauteur de s'ajuster automatiquement en fonction de la largeur */
    object-fit: contain; /* Permettre à l'image de s'ajuster dans sa boite */
    object-fit: cover; /* Permettre à l'image de s'ajuster dans sa boite */
}
```

Vous pouvez utilisez des classes pré-existantes pour les images: 
* .small-width --> l'image fera 1/3 de la largeur de la page
* .middle-width --> l'image fera 50% de la largeur de la page
* .full-width --> l'image fera la largeur totale de la page (dans les marges)
* .full-height --> l'image fera la hauteur totale de la page (dans les marges)
* .full-width-height --> l'image fera la hauteur et largeur totale de la page (dans les marges)

Pour utiliser une de ces class, vous devez mettre dans le HTML : 
```html
<img class="small-width" src="chemin/vers/votre/image.jpg">
```

### Image au dela des marges 
Full page 
Double page 
Full-full-width
Full-Full-Height

## Régler la postition 
Centrer verticalement dans la page 

## Faire des grilles (ou placer les éléments les uns par rapport aux autres 
1. **Définir un Conteneur Flex** :

   Pour utiliser Flexbox, commencez par déclarer votre conteneur comme un conteneur flex en utilisant la propriété CSS `display: flex;`. Par exemple :

   ```css
   .container {
       display: flex;
   }
   ```

2. **Définir la Direction de la Flexbox** :

   Utilisez la propriété `flex-direction` pour spécifier la direction principale dans laquelle les éléments flex doivent être disposés. Les valeurs courantes incluent `row` (ligne), `column` (colonne), `row-reverse`, et `column-reverse`. Par exemple :

   ```css
   .container {
       display: flex;
       flex-direction: row; /* Les éléments flex sont disposés horizontalement */
   }
   ```

3. **Aligner les Éléments Horizontalement (sur l'Axe Principal)** :

   Utilisez `justify-content` pour aligner les éléments le long de l'axe principal. Par exemple, pour les aligner au centre :

   ```css
   .container {
       display: flex;
       justify-content: center;
   }
   ```

4. **Aligner les Éléments Verticalement (sur l'Axe Transversal)** :

   Utilisez `align-items` pour aligner les éléments sur l'axe transversal. Par exemple, pour les aligner au centre verticalement :

   ```css
   .container {
       display: flex;
       align-items: center;
   }
   ```

5. **Créer un Espacement Entre les Éléments** :

   Utilisez `justify-content` avec des valeurs telles que `space-between` ou `space-around` pour créer un espacement entre les éléments. Par exemple :

   ```css
   .container {
       display: flex;
       justify-content: space-between; /* Espacement égal entre les éléments */
   }
   ```

6. **Aligner un Élément Spécifique** :

   Vous pouvez utiliser `align-self` sur un élément spécifique pour le positionner différemment par rapport à ses frères. Par exemple :

   ```css
   .item {
       align-self: flex-end; /* Aligner cet élément en bas */
   }
   ```

Voici quelques exemples de base de l'utilisation des Flexbox. Avec ces propriétés, vous pouvez créer des mises en page flexibles et réactives pour vos projets web. N'hésitez pas à expérimenter et à explorer davantage les fonctionnalités des Flexbox pour obtenir des résultats personnalisés.
