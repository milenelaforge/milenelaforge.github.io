# Paged.js : Qu’est-ce que c’est ? 

[https://pagedjs.org/](https://pagedjs.org/)
<br>
Paged.js est une bibliothèque javascript libre et open-source qui permet la création de PDF imprimables depuis du contenu HTML. 
<br>
Paged.js est basé sur les normes CSS écrites par le World Wide Web Consortium (W3C).  
Certaines fonctionnalités css print existent mais ne sont pas implémentés dans les navigateurs, c’est pourquoi Paged.js est un polyfill 
(outil qui prend en charge des fonctionnalités qui ne sont pas encore implémentés dans le navigateur) qui pallie à ce manque. 
<br>
Paged.js a été fondé par Adam Hyde et est actuellement développé par Julie Blanc, Fred Chasen et Julien Taquet chez Coko.  
C’est même devenu un sujet de recherche à part entière pour Julie qui a soutenu sa thèse [Composer avec les technologies du web](https://php.julie-blanc.fr/index.html) en 2023. 
<br>
On peut faire des publications web to print sans utiliser Paged.js mais cet outil a été pensé pour faciliter la création et proposer des fonctionnalités plus poussées : 
* Paginer une publication 
* Présente un aperçu paginé dans votre navigateur que vous pouvez enregistrer au format PDF.
* Aller plus loin dans la mise en page (@page rules, page break, margin boxes, contenu généré, sommaire, index, glossaire, grille de ligne de base…)
* Intégrer déjà des fonctions liées à l’impression (traits de coupe)
