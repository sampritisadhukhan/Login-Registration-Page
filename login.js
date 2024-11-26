const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw_hide");


formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));


pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uli-eye");
        } else {
            getPwInput.type = "[passwoed]";
            icon.classList.replace("uli-eye", "uil-eye-slash");
        }            
    });
});


signupBtn.addEventListener("click", (e) => {
     e.preventElementDefault();
     formContainer.classList.add("active");
});


loginBtnupBtn.addEventListener("click", (e) => {
    e.preventElementDefault();
    formContainer.classList.add("active");
});