function run() {
    let html = document.querySelector(".editor #HTML-Area").value;
    let css = "<style>" + document.querySelector(".editor #CSS-Area").value + "</style>";
    let js = document.querySelector(".editor #JS-Area").value;

    let output = document.querySelector(".editor #output");
    output.contentDocument.body.innerHTML = html + css;
    output.contentWindow.eval(js);
}