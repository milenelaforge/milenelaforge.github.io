var markdownit = window.markdownit({
        // Options for markdownit
        langPrefix: 'language-fr',
        // You can use html markup element
        html: true,
    })
    // .use(markdownitContainer)
    // .use(markdownitSpan)
    // .use(markdownItAttrs, {
    //     // optional, these are default options
    //     leftDelimiter: '{',
    //     rightDelimiter: '}',
    //     allowedAttributes: [] // empty array = all attributes are allowed
    // }
;

// Import the content pad
var request = new XMLHttpRequest();
request.open("GET", "https://semestriel.framapad.org/p/cover-html-a6xp/export/txt");

request.addEventListener("readystatechange", function(event) {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        var response = request.responseText;

        var result = markdownit.render(response);
        document.body.innerHTML = result;

        // Call each script one by one
        loadScript("assets-md/js/paged.polyfill.js")

        //add the paged.js css
        var pagedCss = document.createElement("link");
        pagedCss.href = "css/interface.css";
        pagedCss.type = "text/css";
        pagedCss.rel = "stylesheet";
        document.head.appendChild(pagedCss);

        //add the pad with the css
        var theCss = document.createElement("link");
        theCss.href = "https://semestriel.framapad.org/p/cover-css-a6xp/export/txt";
        theCss.type = "text/css";
        theCss.rel = "stylesheet";
        document.head.appendChild(theCss);
    }
});

request.send();

// Create a promise
function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));

        document.body.appendChild(script);
    });
}
