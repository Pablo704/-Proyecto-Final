const  cloud = document.getElementById("cloud");
const  barralateral = document.querySelector(".barra-lateral");
const  spans = document.querySelectorAll("span");
const menu = document.querySelector(".menu");

menu.addEventListener("click",()=>{
    barralateral.classList.toggle("max-barra-lateral");
    if(barralateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if(window.innerWidth<=320){
        barralateral.classList.add("mini-barra-lateral");
        main.classList.add(main-main);
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
});

const main = document.querySelector("main");

cloud.addEventListener("click",()=>{ 
    barralateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");

    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
});

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
    