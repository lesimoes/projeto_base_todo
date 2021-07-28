let contador = 3;

function finalizarTarefa (elemento) {

    const li = elemento.parentNode;
    const eFinalizada = li.classList.contains("finalizada");
    
    if (eFinalizada) {
        li.classList.remove("finalizada");
        contador ++;
        elementoContador.innerHTML = `To-do List (${contador})`
        
    } else {
        li.classList.add("finalizada");
        contador --;   
    }

    atualizarContador();
    
}

function atualizarContador () {
    const elementoContador = document.querySelector("h1");
    elementoContador.innerHTML = `To-do List (${contador})`
}

function limparTarefas () {
    const tarefas = document.querySelectorAll("li");
    let index = 0;
    while (index < tarefas.length) {
        tarefas[index].classList.remove("finalizada");
        index ++;
    }
    contador = 0;
    atualizarContador();
}