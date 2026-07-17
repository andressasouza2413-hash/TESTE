const botao = document.getElementById("explorar");

botao.addEventListener("click", () => {

    window.scrollTo({

        top: window.innerHeight,

        behavior: "smooth"

    });

});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 0 20px rgba(255,0,0,.5)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 100){

        header.style.background="#000";

    }else{

        header.style.background="#090909";

    }

});
