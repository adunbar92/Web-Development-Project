const contactForm = document.querySelector("#contact")
const firstName = document.querySelector("#first-name")
const firstNameEmpty = document.querySelector("#first-name-empty")
const lastName = document.querySelector("#last-name")
const lastNameEmpty = document.querySelector("#last-name-empty")
const email = document.querySelector("#email")
const emailInvalid = document.querySelector("#email-invalid")
const message = document.querySelector("#message")
const messageEmpty = document.querySelector("#message-empty")
const submissionSuccess = document.querySelector("#submission-success")
const addItemButton = document.querySelector("#add-item")
const delItemButton = document.querySelector("#del-item")

const validateForm = (inputBox, errorLabel, message) => {
   if(inputBox.value.trim() === "") {
errorLabel.textContent = message;
    return false;
   }else{
errorLabel.textContent = "";
    return true;
   }
}

const validateEmail = () =>{
    if(email.value.trim() === "") {
    emailInvalid.textContent = "Email is required.";
    return false;
   }
   if(!email.value.includes("@")){
    emailInvalid.textContent = "Email is invalid.";
    email.classList.add("failure");
    return false;
   }

   emailInvalid.textContent = "";
   email.classList.remove("failure");
   email.classList.add("success");
   return true;
}

if (contactForm) {contactForm.addEventListener("submit", (event) => { 
    event.preventDefault();
    const isFirstNameValid =validateForm(firstName,firstNameEmpty,"First Name is required.");
    const isLastNameValid = validateForm(lastName,lastNameEmpty,"Last Name is required.");
    const isMessageValid = validateForm(message,messageEmpty,"Message is required.");
    const isEmailValid = validateEmail();
    
    if(isFirstNameValid && isLastNameValid && isEmailValid && isMessageValid) {
        submissionSuccess.textContent = "Successful!";
        contactForm.reset();
    }else{
        submissionSuccess.textContent = "";
    }

});
}

const submitButtons = document.querySelectorAll("button");

if (submitButtons) {
submitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.textContent= "Clicked!";   
    });
});
}
const inputFields = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

if (inputFields) {
inputFields.forEach((input) => {
input.addEventListener("input", () => {
    if(input.value.trim() !== "") {
        input.classList.remove("failure");
        input.classList.add("success");
}else{
        input.classList.remove("success");
        input.classList.add("failure");
    }
});
});
}


if (textareas) {
textareas.forEach((textarea) => {
textarea.addEventListener("input", () => {
    if(textarea.value.trim() !== "") {
        textarea.classList.remove("failure");
        textarea.classList.add("success");
    }else{
        textarea.classList.remove("success");
        textarea.classList.add("failure");
    }
});
});
}


if (addItemButton) {addItemButton.addEventListener("click", ()=> {
    let text= document.querySelector("#add").value; 
    let li = document.createElement("li"); 
    li.textContent =text; 
    document.querySelector(".favorites").appendChild(li);
});
}

if (delItemButton) {
    delItemButton.addEventListener("click", ()=> {
        let lastItem = document.querySelector(".favorites li:last-child"); 
        if (lastItem) {
            lastItem.remove();
        }
    });
}

const url = "https://api.open-meteo.com/v1/forecast?latitude=42.36&longitude=-71.06&current=temperature_2m&temperature_unit=fahrenheit";
let result =  document.querySelector("#weather-result");
const loadButton = document.querySelector("#load") 
  if (loadButton) {
loadButton.addEventListener("click", () => {
      fetch(url)
        .then(res => {
          if (!res.ok) throw new Error("Bad Status: " + res.status);
          return res.json();
        })
        .then(data => { result.textContent = "Temp: " + data.current.temperature_2m + " F";})
        .catch(() =>{result.textContent = "Sorry, couldn't load the data. Try again.";});
    });
}