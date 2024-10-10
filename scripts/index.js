const menuIcon = document.querySelector(".menu");
const closeIcon = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");
const submitBtn = document.querySelector(".submit");
let nameInput = document.querySelector(".submit");
let emailInput = document.querySelector(".submit");
let massageInput = document.querySelector(".submit");


menuIcon.addEventListener("click",()=>{
    sidebar.style.display = "flex";
})


closeIcon.addEventListener("click",()=>{
    sidebar.style.display = "none";
})


submitBtn.addEventListener(" click",()=>{
    nameInput.value = "";
    emailInput.value = "";
    massageInput.innerHTML = "";
})