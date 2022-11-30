let contactForm = document.querySelector('form');
let errorSpans = document.querySelectorAll(".error");

let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

function verifyForm(e){
    let isValid = true;
    e.preventDefault();

    errorSpans.forEach(function(span){
        span.classList.remove("errorOutput");
    });

    if(contactForm.fullName.value === ""){
        errorSpans[0].classList.add("error");
        errorSpans[0].classList.add("errorOutput");

        isValid = false;
    }

    if(contactForm.phone.value === "" || !(phoneRegex.test(contactForm.phone.value))){
        errorSpans[1].classList.add("error");
        errorSpans[1].classList.add("errorOutput");

        isValid = false;
    }

    if(contactForm.email.value === "" || !(emailRegex.test(contactForm.email.value))){
        errorSpans[2].classList.add("error");
        errorSpans[2].classList.add("errorOutput");

        isValid = false;
    }

    if(document.getElementById('contact').checked){
        errorSpans[3].classList.add("error");
        errorSpans[3].classList.add("errorOutput");

        isValid = false;
    }

    if(contactForm.message.value === ""){
        errorSpans[4].classList.add("error");
        errorSpans[4].classList.add("errorOutput");

        isValid = false;
    }

    if(isValid === true){
        contactForm.fullName.value = "";
        contactForm.phone.value = "";
        contactForm.email.value = "";
        contactForm.message.value = "";
        console.log(isValid);
    }
}

document.querySelector('form').addEventListener("submit", verifyForm);

let darkMode = false;

document.getElementById('sunCheck').addEventListener('change', function() {
    const rootColors = document.querySelector(':root');
    if(this.checked){
        rootColors.style.setProperty('--gray', '#313131');
        rootColors.style.setProperty('--white', '#747474');
        rootColors.style.setProperty('--green', '#fcc473');
        rootColors.style.setProperty('--background', '#202020');
        console.log("on");
    }
    else{
        console.log("off");
        rootColors.style.setProperty('--gray', '#747474');
        rootColors.style.setProperty('--white', '#ffffff');
        rootColors.style.setProperty('--green', '#4e923f');
        rootColors.style.setProperty('--background', '#afafaf');
    }
});