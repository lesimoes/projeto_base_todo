let contador = 3;
let idAlertaChato;
let tarefas = [];


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


function adicionarTarefa () {
    const inputs = document.querySelectorAll(".title input");
 
    const tarefa = inputs[0].value;
    const tempo = inputs[1].value;
    
    tarefas.push({tarefa: tarefa, time: tempo, idInterval: 0})
    atualizarDOMTarefas()
}


function atualizarDOMTarefas () {

    const ul = document.querySelector("ul");
   
    let tarefaHTML = "";

    for (let i = 0 ; i < tarefas.length ; i++){
        if (tarefas[i]) {
            tarefaHTML += `<li id="${i}">
            <div class="btn-delete" onclick="deletarTarefa(this)">
                <ion-icon name="trash-outline"></ion-icon>
            </div>
            <span onclick="finalizarTarefa(this)">${tarefas[i].tarefa}</span>
            <span onclick="iniciarContador(this)">${tarefas[i].tempo}</span>
        </li>`;
        }
    }

    ul.innerHTML = tarefaHTML;
}

function adicionarTarefasDemo () {
    tarefas = [
        {tarefa: "Adicione uma tarefa no botão acima ☝️", tempo: 30, idInterval: 0},
        {tarefa: "Passe o mouse na tarefa para ver o botão excluir 🗑️", tempo: 25, idInterval: 0},
        {tarefa: "Clique na tarefa para marca-la como feita ✔️", tempo: 20, idInterval: 0},
    ];

    atualizarDOMTarefas();
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
        tarefas[li.id] = "";
        atualizarDOMTarefas();
    }, 500)
}

function iniciarContador (elemento) {
    const li = elemento.parentNode;
    if (tarefas[li.id].idInterval === 0) {
        const idInterval = setInterval(decrementarContador, 1000, li.id);
        tarefas[li.id].idInterval = idInterval;
    } else {
        pararContador(li.id);
    } 

}

function decrementarContador (idTarefa) {
    tarefas[idTarefa].tempo --;
    if (tarefas[idTarefa].tempo === 0) {
        const idInterval = tarefas[idTarefa].idInterval;
        tarefas[idTarefa].idInterval = 0;
        clearInterval(idInterval);
    }
    atualizarDOMTarefas();
}

function pararContador (idTarefa) {
    const idInterval = tarefas[idTarefa].idInterval;
    tarefas[idTarefa].idInterval = 0;
    clearInterval(idInterval);
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