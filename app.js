//Barra de Navegación
var nav = document.querySelector('.nav_cont'); 
var sec = document.querySelector('#seccion_a'); 
var sec2 = document.querySelector('#seccion_b'); 
var sec3 = document.querySelector('#seccion_c'); 


window.addEventListener('scroll', function(event) { 
    if (window.scrollY <= 90) { 
        nav.style.backgroundColor = 'transparent'; 
        nav.style.height = "200px";
        sec.style.padding = "0 0 0 0"
        sec2.style.padding = "0 0 0 0"
        sec3.style.padding = "0 0 0 0"


        
    } else {
        nav.style.backgroundColor = 'black';
        nav.style.height = "100px";
        nav.style.transition = "all 0.5s"
        sec.style.transition = "all 0.5s"
        sec.style.padding = "100px 0 0 0"
        sec2.style.transition = "all 0.5s"
        sec2.style.padding = "100px 0 0 0"
        sec3.style.transition = "all 0.5s"
        sec3.style.padding = "100px 0 0 0"
    }
});

