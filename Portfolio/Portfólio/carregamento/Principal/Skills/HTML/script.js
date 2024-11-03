document.addEventListener("DOMContentLoaded", function() {
    

    var projetoCalc = document.getElementById("projeto1");
    var div = document.querySelector('.bg');
    var calcPop = document.querySelector('#calcPop');
    var baixar = document.getElementById("sim");
    var cancelar = document.getElementById("nao");
    var fechar = document.getElementById("fechar");





    projetoCalc.addEventListener('click', function() {

        div.style.opacity = 1;
        div.style.zIndex = 0;
        calcPop.style.zIndex = 1;
        calcPop.style.opacity = 1;
        
    }
    );

    div.addEventListener('click',function(){

        if (modal.style.opacity == 1) {



        } else {

        div.style.opacity = 0;
        div.style.zIndex = -1;
        calcPop.style.opacity = 0;
        calcPop.style.zIndex = -1;

        }
    }
)

baixar.addEventListener('click',function(){

    console.log("Baixou");
    modal.style.opacity = 0;
    modal.style.zIndex  = 0;
    div.style.zIndex = 0;
    calcPop.style.zIndex = 1;


})

cancelar.addEventListener('click',function(){

    console.log("cancelou")
    modal.style.opacity = 0;
    modal.style.zIndex  = 0;
    div.style.zIndex = 0;
    calcPop.style.zIndex = 1;



})

calculadora.addEventListener('click',function(){

    var modal = document.getElementById("modal");
    if(iClaro == -1 || localStorage.getItem("estado",modo) == "true") 
        {
            console.log("if = true");
    
        }else if (iClaro == 1) 
        {
            console.log("if2 = true");
    
        }

    modal.style.opacity = 1;
    modal.style.zIndex  = 2;
    div.style.zIndex = 1;
    calcPop.style.zIndex = 0;

}
)

fechar.addEventListener('click',function(){

    div.style.opacity = 0;
    div.style.zIndex = -1;
    calcPop.style.zIndex = -1;
    calcPop.style.opacity = -1;


})



    var textSkill = document.getElementById("Skill");
    var titulo = document.getElementById("titulo");
    var tituloProjeto = document.getElementById("tituloProjeto");
    var descProjeto = document.getElementById("descProjeto");
    var textoEst = document.getElementById("textoEst");
    var tituloEst = document.getElementById("tituloEst");
    var textoModal = document.getElementById("textoM");
    var btnSim = document.getElementById("sim");
    var btnSimTexto = document.getElementById("btnSim");
    var btnNao = document.getElementById("nao");
    var btnNaoTexto = document.getElementById("btnNao");

    var claro = document.getElementById("claro");
    var iClaro = -1;

    var icone = document.getElementById("icon");
    var modo = localStorage.getItem("estado");


    if ( localStorage.getItem("estado",modo) == "true") {
        
        icone.src = '/Portfólio/imagens/CSS 3.png';
        btnSimTexto.style.Color = '#000';
        btnSim.style.backgroundColor = '#9e9e9e';
        btnNaoTexto.style.Color = '#000';
        btnNao.style.backgroundColor = '#9e9e9e';
        textoModal.style.color = '#7e5627';
        modal.style.backgroundColor = '#FFF';
        calcPop.style.backgroundColor = '#e6e6e6';
        iClaro = iClaro * -1;
        document.body.style.backgroundColor = '#e6e6e6';
        claro.src = '/Portfólio/imagens/lua.png';
        localStorage.setItem("estado",true);
        tituloProjeto.style.color = '#7e5627';
        descProjeto.style.color = '#7e5627';
        textSkill.style.color = '#7e5627';
        tituloEst.style.color = '#7e5627';
        textoEst.style.color = '#7e5627';
        titulo.style.color = '#000';
        

    }

    claro.addEventListener('click',function(){

        
        

    if ( iClaro == -1 ) {

        icone.src = '/Portfólio/imagens/CSS 3.png';
        btnSimTexto.style.Color = '#000';
        btnSim.style.backgroundColor = '#9e9e9e';
        btnNaoTexto.style.Color = '#000';
        btnNao.style.backgroundColor = '#9e9e9e';
        textoModal.style.color = '#7e5627';
        modal.style.backgroundColor = '#FFF';
        calcPop.style.backgroundColor = '#e6e6e6';
        document.body.style.backgroundColor = '#e6e6e6';
        claro.src = '/Portfólio/imagens/lua.png';
        tituloProjeto.style.color = '#7e5627';
        descProjeto.style.color = '#7e5627';
        textSkill.style.color = '#7e5627';
        tituloEst.style.color = '#7e5627';
        textoEst.style.color = '#7e5627';
        localStorage.setItem("estado",true);
        textSkill.style.color = '#7e5627';
        titulo.style.color = '#000';
        projetoCalc.style.backgroundImage = 'linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255),url(/Portfólio/imagens/calculadora.png);';


    }else if ( iClaro == 1 ) {

        icone.src = '/Portfólio/imagens/HTML 5.png';
        btnSimTexto.style.Color = '#000';
        btnSim.style.backgroundColor = '#FFF';
        btnNaoTexto.style.Color = '#000';
        btnNao.style.backgroundColor = '#FFF';
        textoModal.style.color = '#C2B3A3';
        modal.style.backgroundColor = '#373838';

        textSkill.style.color = '#C2B3A3';
        titulo.style.color = '#FFF';
        tituloProjeto.style.color = '#C2B3A3';
        descProjeto.style.color = '#C2B3A3';
        textSkill.style.color = '#C2B3A3';
        tituloEst.style.color = '#C2B3A3';
        textoEst.style.color = '#C2B3A3';
        claro.src = '/Portfólio/imagens/sol.png';
        document.body.style.backgroundColor = '#030502';
        localStorage.setItem("estado",false);
        calcPop.style.backgroundColor = div.style.backgroundColor;
        projetoCalc.style.backgroundImage = 'linear-gradient(rgba(255, 255, 255, 0), rgb(0, 0, 0)),url(/Portfólio/imagens/calculadora.png);';

    }

    iClaro = iClaro * -1;
}
)













































}
)








    
