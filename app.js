let navMenu = document.querySelector(".navs");
let menuBtn = document.querySelector(".menu-btn");
let width = window.innerWidth;

const reset = () =>{
    menuBtn.addEventListener("click",()=>{
        navMenu.classList.toggle("toggle");
        menuBtn.classList.toggle("rotate");
    })
    
    //Hilangkan toggle dan rotate kalau reload 
    if(width >= 720){
        navMenu.classList.remove("toggle");
        menuBtn.classList.remove("rotate");
    }
    
    // Hilangkan toggle dan rotate kalau resize
    window.addEventListener("resize",()=>{
        width = window.innerWidth;
        if(width >= 720){
            navMenu.classList.remove("toggle");
            menuBtn.classList.remove("rotate");
        }
    })
}


reset();