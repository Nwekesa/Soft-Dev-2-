let text = document.querySelector("input");
let output = document.querySelector("#length");
text.addEventListener("input", () => {
    output.textContent = text.value.length + ')';
});