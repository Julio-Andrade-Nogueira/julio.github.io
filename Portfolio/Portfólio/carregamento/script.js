document.addEventListener("DOMContentLoaded", function() {

    var i = 0;

    function contador() {
        i++;
        if ( i > 2.5) {
    
            window.location.href = "/Portfólio/carregamento/Principal/index.html";
            
        }
    }


    setInterval(contador,1000);

}
)
