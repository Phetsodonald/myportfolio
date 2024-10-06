const menuIcon = document.querySelector(".menu");
const closeIcon = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");



menuIcon.addEventListener("click",()=>{
    sidebar.style.display = "flex";
})


closeIcon.addEventListener("click",()=>{
    sidebar.style.display = "none";
})