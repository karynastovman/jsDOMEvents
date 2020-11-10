let firstBox = document.querySelector(".first");
let secondBox = document.querySelector(".second");

firstBox.addEventListener("mouseenter", () => {
    event.target.style.backgroundColor = "red";
    secondBox.style.backgroundColor = "grey";
});

secondBox.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "red";
    secondBox.stylebackgroundColor = "grey";
});