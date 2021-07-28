let contador = 3;

function finalizarTarefa (elemento) {

    const li = elemento.parentNode;
    const eFinalizada = li.classList.contains("finalizada");
    const elementoContador = document.querySelector("h1");
        

    if (eFinalizada) {
        li.classList.remove("finalizada");
        contador ++;
        elementoContador.innerHTML = `To-do List (${contador})`
        
    } else {
        li.classList.add("finalizada");
        contador --;
        elementoContador.innerHTML = `To-do List (${contador})`
    }
    
}