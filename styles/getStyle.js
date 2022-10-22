addEventListener("DOMContentLoaded", (event) => {
    let queryString = (new URL(document.location)).searchParams;
    let head = document.getElementsByTagName('head')[0];
    if (params.get("dark").toLowerCase() === "true") {
        head.append("<link rel=\"stylesheet\" href=\"https://whengryphonsfly.github.io/styles/dark.css\"");
    } else {
        head.append("<link rel=\"stylesheet\" href=\"https://whengryphonsfly.github.io/styles/light.css\"");
    }
    head.append("<link rel=\"stylesheet\" href=\"https://whengryphonsfly.github.io/styles/style.css\"");
});
