function alertFunction() {
    alert("Yay!");
}
const btn = document.querySelector("#btn");

// btn.onclick = alertFunction;
btn.addEventListener("click", alertFunction);

btn.addEventListener("click", function (e) {
    e.target.style.background = "grey";
});