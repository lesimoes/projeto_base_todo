let contador = 3;
let idAlertaChato;

function finalizarTarefa (elemento) {
    
    const li = elemento.parentNode;
    const eFinalizada = li.classList.contains("finalizada");

    
    if(eFinalizada) {
        li.classList.remove("finalizada");
        contador ++;
    } else {
        li.classList.add("finalizada");
        contador --;
    }

    atualizarContador();
 
}


function adicionarTarefasDemo () {
    const tarefas = [
        "Adicione uma tarefa no botão acima ☝️",
        "Passe o mouse na tarefa para ver o botão excluir 🗑️",
        "Clique na tarefa para marca-la como feita ✔️",
        
    ];

    const ul = document.querySelector("ul");

   
    let tarefaHTML = "";
    
     

    for (let i = 0 ; i < tarefas.length ; i++){
        tarefaHTML += `<li>
            <div class="btn-delete" onclick="deletarTarefa(this)">
                <ion-icon name="trash-outline"></ion-icon>
            </div>
            <span onclick="finalizarTarefa(this)">${tarefas[i]}</span>
        </li>`;
    }

    ul.innerHTML = tarefaHTML;

}

function finalizarTarefas () {
    const tarefas = document.querySelectorAll("li");
    let index = 0;
    while (index < tarefas.length) {
        tarefas[index].classList.add("finalizada");
        index ++;
    }

    contador = 0;
    atualizarContador();
}

function atualizarContador () {
    const elementoContador = document.querySelector("h1");
    elementoContador.innerHTML = `To-do List (${contador})`;
}


function deletarTarefa (elemento) {
    
    const li = elemento.parentNode;
    li.classList.add("remove");
    setTimeout(function(){
        li.remove();
    }, 500)
}

function alertChato () {
    const alerta = document.querySelector(".bottom");
    idAlertaChato = setInterval(function() {
        if (contador) {
            alerta.classList.toggle("show-alert");
        }
        if (contador === 0) {
            alerta.classList.remove("show-alert");
        }
        
    }, 1000);
}

function pararAlertaChato () {
    const alerta = document.querySelector(".bottom");
    alerta.innerHTML = "😢";
    clearInterval(idAlertaChato);
}
alertChato();
adicionarTarefasDemo();