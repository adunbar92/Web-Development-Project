
const formInputs = document.querySelectorAll("input");

formInputs.forEach((input) => {
input.addEventListener("input", () => {
    input.classList.toggle("valid-input");    
});
});

const submitButtons = document.querySelectorAll("button");

submitButtons.forEach((button) => {
button.addEventListener("click", () => {
    button.textContent= "Clicked!";   
});
});

document.querySelector("#add-item").addEventListener("click", ()=> {
    let text= document.querySelector("#add").value; 
    let li = document.createElement("li"); 
    li.textContent =text; 
    document.querySelector(".favorites").appendChild(li);
});

document.querySelector("#del-item").addEventListener("click", ()=> {
    let lastItem = document.querySelector(".favorites li:last-child"); 
    if (lastItem) {
    lastItem.remove();
}
});
