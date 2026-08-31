
const formInputs = document.querySelectorAll("input");

formInputs.forEach((input) => {

input.addEventListener("input", () => {
    input.classList.toggle("valid-input");    
});
});

