let navMenu = document.querySelector(".navs");
let menuBtn = document.querySelector(".menu-btn");
let width = window.innerWidth;

menuBtn.addEventListener("click",()=>{
    navMenu.classList.toggle("toggle");
    menuBtn.classList.toggle("rotate");
})

if(width >= 720){
    navMenu.classList.remove("toggle");
    menuBtn.classList.remove("rotate");
}

window.addEventListener("resize",()=>{
    width = window.innerWidth;
    if(width >= 720){
        navMenu.classList.remove("toggle");
        menuBtn.classList.remove("rotate");
    }
})

