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


// Animasi counter
const counter = document.querySelectorAll(".counter .counter-item h2");
const observer = document.querySelector(".counter .observer");
const speed = 320;


const animateCounter = (countElement, speed) =>{
    counter.forEach(el => {
        let target = +el.getAttribute("data-target");
        let increment = target/speed;
        let value = +el.textContent;
        
        setInterval(() => {
            if(value < target){
                value+=increment;
                el.textContent = Math.ceil(value);    
            }else{
                el.textContent = target;
            }
        }, 10);
    });
}

const startCount = (obs) =>{
    let height = window.innerHeight;
    let topPosition = obs.getBoundingClientRect().top;

    if(topPosition > 0 && height-topPosition > 50){
        animateCounter(counter,speed);
    }
}

startCount(observer);

window.addEventListener("scroll",()=>{
    startCount(observer);
})