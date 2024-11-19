        document.addEventListener('DOMContentLoaded', function() {
            var leftColumnHeadings = document.querySelectorAll('.left-column h2');
            var middleColumnHeadings = document.querySelectorAll('.middle-column h2');

            leftColumnHeadings.forEach(function(leftHeading, index) {
                leftHeading.addEventListener('click', function() {
                    var allParts = document.querySelectorAll('.part');
                    allParts.forEach(function(part) {
                        part.style.display = 'none';
                    });
                    var selectedPart = document.getElementById(`Part-0${index + 1}`);
                    if (selectedPart) {
                        selectedPart.style.display = 'block';
                    }
                });
            });

            middleColumnHeadings.forEach(function(middleHeading) {
                middleHeading.addEventListener('click', function() {
                    var allParts = document.querySelectorAll('.part-content');
                    var id = middleHeading.innerHTML.toLowerCase().replace(/\s/g, '-');
                    allParts.forEach(function(part) {
                        part.style.display = 'none';
                        if (part.id === id) {
                            part.style.display = 'block';
                        }
                    });
                });
            });
        });

        function loadMarkdownIntoDiv(markdownFileURL, targetDivId) {
            const converter = new showdown.Converter();

            fetch(markdownFileURL)
                .then(response => response.text())
                .then(markdownText => {
                    const html = converter.makeHtml(markdownText);

                    document.getElementById(targetDivId).innerHTML = html;
                });
        }


        // Définir la partie de l'URL qui est répétée
        const baseURL = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/';

        const markdownFileURL1 = `${baseURL}sources/web-to-print-theory/free-graphic-design/graphisme-libre-floss.md`;
        const markdownFileURL2 = `${baseURL}sources/web-to-print-theory/free-graphic-design/publication-fluide.md`;
        const markdownFileURL3 = `${baseURL}sources/web-to-print-theory/tools/liste-outils.md`;
        const markdownFileURL4 = `${baseURL}sources/web-to-print-theory/tools/projets-web-to-print.md`;
        const markdownFileURL5 = `${baseURL}sources/web-to-print-theory/tools/workshops-web-to-print.md`;
        const markdownFileURL6 = `${baseURL}sources/web-to-print-theory/tools/trouver-des-reponses.md`; 
        const markdownFileURL7 = `${baseURL}sources/initiation-html-css/html-basics.md`;
        const markdownFileURL8 = `${baseURL}sources/initiation-html-css/css-basics.md`;
        const markdownFileURL9 = `${baseURL}sources/initiation-html-css/pratiquons.md`;
        const markdownFileURL10 = `${baseURL}sources/initiation-html-css/medias-print.md`;
        const markdownFileURL11 = `${baseURL}sources/initiation-html-css/paged-js.md`;
        const markdownFileURL12 = `${baseURL}sources/initiation-html-css/paged-js-use.md`;
        const markdownFileURL13 = `${baseURL}sources/web-to-print-practice/notice-typographie.md`;
        const markdownFileURL14 = `${baseURL}sources/web-to-print-practice/fonderies-libres.md`;
        const markdownFileURL15 = `${baseURL}sources/web-to-print-practice/notice-grille-compo.md`;
        const markdownFileURL16 = `${baseURL}sources/web-to-print-practice/notice-images-videos.md`;
        const markdownFileURL17 = `${baseURL}workshop-web-to-print-04-2024/workshop-in-progress/sujet-ww2p-ensaama.md`;
        const markdownFileURL18 = `${baseURL}workshop-web-to-print-04-2024/workshop-in-progress/programme-ww2p-ensaama.md`;
        const markdownFileURL19 = `${baseURL}workshop-web-to-print-04-2024/workshop-in-progress/workshop-in-progress.md`;
        const markdownFileURL20 = `${baseURL}workshop-web-to-print-04-2024/edition-resultat-documentation/liens.md`;
        const markdownFileURL21 = `${baseURL}workshop-web-to-print-04-2024/edition-resultat-documentation/html.md`;
        const markdownFileURL22 = `${baseURL}workshop-web-to-print-04-2024/edition-resultat-documentation/css.md`;
        const markdownFileURL23 = `${baseURL}workshop-web-to-print-04-2024/edition-resultat-documentation/retour-en-images.md`;

        // Appeler la fonction pour charger le contenu dans différentes div
        loadMarkdownIntoDiv(markdownFileURL1, 'graphisme-libre-floss');
        loadMarkdownIntoDiv(markdownFileURL2, 'publication-fluide');
        loadMarkdownIntoDiv(markdownFileURL3, 'liste-outils');
        loadMarkdownIntoDiv(markdownFileURL4, 'projets-web-to-print');
        loadMarkdownIntoDiv(markdownFileURL5, 'workshops-web-to-print');
        loadMarkdownIntoDiv(markdownFileURL6, 'trouver-des-reponses');
        loadMarkdownIntoDiv(markdownFileURL7, 'html-basiques');
        loadMarkdownIntoDiv(markdownFileURL8, 'css-basiques');
        loadMarkdownIntoDiv(markdownFileURL9, 'pratiquons!');
        loadMarkdownIntoDiv(markdownFileURL10, 'imprimer-dans-le-navigateur');
        loadMarkdownIntoDiv(markdownFileURL11, 'paged-js-def');
        loadMarkdownIntoDiv(markdownFileURL12, 'paged-js-use');
        loadMarkdownIntoDiv(markdownFileURL13, 'type-notice');
        loadMarkdownIntoDiv(markdownFileURL14, 'type-foundry');
        loadMarkdownIntoDiv(markdownFileURL15, 'grille-et-composition');
        loadMarkdownIntoDiv(markdownFileURL16, 'images-et-vidéos');
        loadMarkdownIntoDiv(markdownFileURL17, 'sujet');
        loadMarkdownIntoDiv(markdownFileURL18, 'programme');
        loadMarkdownIntoDiv(markdownFileURL19, 'workshop-in-progress');
        loadMarkdownIntoDiv(markdownFileURL20, 'liens');
        loadMarkdownIntoDiv(markdownFileURL22, 'html-code');
        loadMarkdownIntoDiv(markdownFileURL23, 'css-code');
        loadMarkdownIntoDiv(markdownFileURL23, 'retour-en-images');



