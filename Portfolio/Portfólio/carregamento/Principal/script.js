document.addEventListener("DOMContentLoaded", function() {

    var claro = document.getElementById("claro");
    var iClaro = -1;
    var texto = document.getElementById("texto");
  

    var modo = localStorage.getItem("estado");

    
    if ( localStorage.getItem("estado",modo) == "true") {

        iClaro = iClaro * -1;
        console.log("modo claro");
        console.log(iClaro);
        document.body.style.backgroundColor = '#e6e6e6';
        claro.src = '/Portfólio/imagens/lua.png';
        texto.style.color = '#7e5627';
        localStorage.setItem("estado",true);

    }

    var string = "Como posso te ajudar ?"; 
    var array = string.split("");
    var timer;

    function frameLooper() {
        if (array.length > 0) {
            document.getElementById("texto").innerHTML += array.shift();
        } else {
            clearTimeout(timer);
            return; 
        }
        timer = setTimeout(frameLooper, 105); 
    }

    frameLooper();


 

    claro.addEventListener('click',function(){

        
        

        if ( iClaro == -1 ) {

            console.log("modo claro");
            console.log(iClaro);
            document.body.style.backgroundColor = '#e6e6e6';
            claro.src = '/Portfólio/imagens/lua.png';
            texto.style.color = '#7e5627';
            localStorage.setItem("estado",true);

        }else if ( iClaro == 1 ) {

            console.log("modo escuro");
            claro.src = '/Portfólio/imagens/sol.png';
            console.log(iClaro);
            document.body.style.backgroundColor = '#030502';
            texto.style.color = '#C2B3A3';
            localStorage.setItem("estado",false);

        }

        iClaro = iClaro * -1;
    }
    )

    var skillHover =document.getElementById("skillsH");
    var hoverH = null;
    var skillsDiv = document.getElementById('skills');

     skillsDiv.addEventListener('mouseover',function(){

        hoverH = true;

        skillHover.style.visibility = 'visible';
        skillHover.style.opacity = 1;


     })

     skillsDiv.addEventListener('mouseout',function(){

        hoverH = false;

        skillHover.style.visibility = 'hidden';
        skillHover.style.opacity = 0;


     })





























}


)