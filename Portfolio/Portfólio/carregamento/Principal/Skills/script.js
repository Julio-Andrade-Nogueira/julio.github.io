document.addEventListener("DOMContentLoaded", function() {

    var js = document.getElementById("js");
    var h5 = document.getElementById("h5");
    var hard = document.getElementById("hard");
    var soft = document.getElementById("soft");
    var hardTitle = document.getElementById("hTitle");
    var softTitle = document.getElementById("sTitle");
    var hardText = document.getElementById("ulHard");
    var softText = document.getElementById("ulSoft");


    var modo = localStorage.getItem("estado");


    if (modo == null) {

        modo == false;

    }


    var claro = document.getElementById("claro");
    var iClaro = -1;
 
    claro.addEventListener('click',function(){

        

        if ( iClaro == -1 ) {

            console.log("modo claro");
            console.log(iClaro);
            document.body.style.backgroundColor = '#e6e6e6';
            claro.src = '/Portfólio/imagens/lua.png';
            localStorage.setItem("estado",true);
            js.src = '/Portfólio/imagens/sj.png';
            h5.src = '/Portfólio/imagens/CSS 3.png';
            hardText.style.color = '#7e5627';
            hardTitle.style.color = '#7e5627';
            softTitle.style.color = '#7e5627';
            softText.style.color = '#7e5627';
            soft.style.backgroundColor = '#FFFFFF';
            hard.style.backgroundColor = '#FFFFFF';
            document.body.style.backgroundColor = '#e6e6e6';


        }else if ( iClaro == 1 ) {

            console.log("modo escuro");
            claro.src = '/Portfólio/imagens/sol.png';
            console.log(iClaro);
            document.body.style.backgroundColor = '#030502';
            localStorage.setItem("estado",false);
            js.src = '/Portfólio/imagens/JavaScript Icon.png';
            h5.src = '/Portfólio/imagens/HTML 5.png';
            hardText.style.color = '#C2B3A3';
            hardTitle.style.color = '#C2B3A3';
            softTitle.style.color = '#C2B3A3';
            softText.style.color = '#C2B3A3';
            soft.style.backgroundColor = '#383a3b';
            hard.style.backgroundColor = '#383a3b';



        }



        iClaro = iClaro * -1;
    }
    )

    console.log(modo)
    console.log(typeof(modo))   

    if (modo == 'true') {
        
        iClaro = iClaro * -1;
        js.src = '/Portfólio/imagens/sj.png'
        claro.src = '/Portfólio/imagens/lua.png';
        h5.src = '/Portfólio/imagens/CSS 3.png';
        hardText.style.color = '#7e5627';
        hardTitle.style.color = '#7e5627';
        softTitle.style.color = '#7e5627';
        softText.style.color = '#7e5627';
        soft.style.backgroundColor = '#FFFFFF';
        hard.style.backgroundColor = '#FFFFFF';
        document.body.style.backgroundColor = '#e6e6e6';
        localStorage.setItem("estado",true)


    }else if(modo == 'false'){


    }

    

}


)
