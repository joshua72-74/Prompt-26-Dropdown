const men = document.querySelector(".men");
const women = document.querySelector(".women");
const kid = document.querySelector(".kid");

const msection = document.querySelector(".men-section");
const wsection = document.querySelector(".women-section");
const ksection = document.querySelector(".kid-section");

men.addEventListener("click", ()=>{
    if(msection.style.display === "none"){
        msection.style.display = "flex";
    }
    else{
        msection.style.display = "none";
    }
})

women.addEventListener("click", ()=>{
    if(wsection.style.display === "none"){
        wsection.style.display = "flex";
    }
    else{
        wsection.style.display = "none";
    }
})

kid.addEventListener("click", ()=>{
    if(ksection.style.display === "none"){
        ksection.style.display = "flex";
    }
    else{
        ksection.style.display = "none";
    }
})