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


        const markdownFileURL1 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/workshop-web-to-print-04-2024/workshop-in-progress/sujet-ww2p-ensaama.md';
        const markdownFileURL2 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/workshop/programme-ww2p-ensaama.md';
        const markdownFileURL3 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/web-to-print-theory/free-graphic-design/graphisme-libre-floss.md';
        const markdownFileURL4 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/web-to-print-theory/free-graphic-design/publication-fluide.md';
        const markdownFileURL5 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/web-to-print-theory/tools/liste-outils.md';
        const markdownFileURL6 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/web-to-print-theory/tools/projets-web-to-print.md';
        const markdownFileURL7 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/web-to-print-theory/tools/workshops-web-to-print.md';
        const markdownFileURL8 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/web-to-print-theory/tools/trouver-des-reponses.md'; 
        const markdownFileURL9 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/initiation-html-css/html-basics.md';
        const markdownFileURL10 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/initiation-html-css/css-basics.md';
        const markdownFileURL11 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/initiation-html-css/pratiquons.md';
        const markdownFileURL12 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/initiation-html-css/medias-print.md';
        const markdownFileURL13 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/initiation-html-css/paged-js.md';
        const markdownFileURL14 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/initiation-html-css/paged-js-use.md';
        const markdownFileURL15 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/web-to-print-practice/notice-typographie.md';
        const markdownFileURL16 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/web-to-print-practice/fonderies-libres.md';
        const markdownFileURL17 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/web-to-print-practice/notice-grille-compo.md';
        const markdownFileURL18 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/web-to-print-practice/notice-images-videos.md';
        const markdownFileURL19 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/edition-collaborative/liens.md';
        const markdownFileURL20 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/edition-collaborative/fab.md';
        const markdownFileURL21 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/edition-collaborative/html.md';
        const markdownFileURL22 = 'https://raw.githack.com/milenelaforge/milenelaforge.github.io/main/edition-collaborative/css.md';

        // Appeler la fonction pour charger le contenu dans différentes div
        loadMarkdownIntoDiv(markdownFileURL1, 'sujet');
        loadMarkdownIntoDiv(markdownFileURL2, 'programme');
        loadMarkdownIntoDiv(markdownFileURL3, 'graphisme-libre-floss');
        loadMarkdownIntoDiv(markdownFileURL4, 'publication-fluide');
        loadMarkdownIntoDiv(markdownFileURL5, 'liste-outils');
        loadMarkdownIntoDiv(markdownFileURL6, 'projets-web-to-print');
        loadMarkdownIntoDiv(markdownFileURL7, 'workshops-web-to-print');
        loadMarkdownIntoDiv(markdownFileURL8, 'trouver-des-reponses');
        loadMarkdownIntoDiv(markdownFileURL9, 'html-basiques');
        loadMarkdownIntoDiv(markdownFileURL10, 'css-basiques');
        loadMarkdownIntoDiv(markdownFileURL11, 'pratiquons!');
        loadMarkdownIntoDiv(markdownFileURL12, 'imprimer-dans-le-navigateur');
        loadMarkdownIntoDiv(markdownFileURL13, 'paged-js-def');
        loadMarkdownIntoDiv(markdownFileURL14, 'paged-js-use');
        loadMarkdownIntoDiv(markdownFileURL15, 'type-notice');
        loadMarkdownIntoDiv(markdownFileURL16, 'type-foundry');
        loadMarkdownIntoDiv(markdownFileURL17, 'grille-et-composition');
        loadMarkdownIntoDiv(markdownFileURL18, 'images-et-vidéos');
        loadMarkdownIntoDiv(markdownFileURL19, 'liens');
        loadMarkdownIntoDiv(markdownFileURL20, 'fabrication');
        loadMarkdownIntoDiv(markdownFileURL21, 'html-code');
        loadMarkdownIntoDiv(markdownFileURL22, 'css-code');



