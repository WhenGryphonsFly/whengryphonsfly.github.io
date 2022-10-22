(function() {
    let queryString = (new URL(document.location)).searchParams;
    let head = document.getElementsByTagName("head")[0];
    if (queryString.get("dark") != null && queryString.get("dark").toLowerCase() === "true") {
        head.innerHTML += "<link rel=\"stylesheet\" href=\"https://whengryphonsfly.github.io/styles/dark.css\">";
    } else {
        head.innerHTML += "<link rel=\"stylesheet\" href=\"https://whengryphonsfly.github.io/styles/light.css\">";
    }
    head.innerHTML += "<link rel=\"stylesheet\" href=\"https://whengryphonsfly.github.io/styles/style.css\">";
})();
