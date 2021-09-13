const secret = document.querySelector("#secret");
const centerSquare = document.querySelector(".center");

secret.addEventListener("mouseover", function () {
    if (centerSquare.classList.contains("d")) {
        centerSquare.classList.remove("d");
        centerSquare.classList.add("secret-image");
    }
})

secret.addEventListener("mouseout", function () {
    if (centerSquare.classList.contains("secret-image")) {
        centerSquare.classList.remove("secret-image");
        centerSquare.classList.add("d");
    }
})

setTimeout(function () {
    document.body.className = "";
}, 500);