let firstBox = document.querySelector(".first");
let secondBox = document.querySelector(".second");
let secondBox = document.querySelector(".three");

firstBox.addEventListener("mouseenter", () => {
    event.target.style.backgroundColor = "red";
    secondBox.style.backgroundColor = "yellow";
    threeBox.style.backgroundColor = "green"
});

secondBox.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "red";
    secondBox.stylebackgroundColor = "grey";
    secondBox.target.style.backgroundColor = "yellow";
    threeBox.style.backgroundColor = "grey";

});