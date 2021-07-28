let contador = 3;


function adicionarTarefaDelay () {
    setTimeout(adicionarTarefa, 600);
}

function finalizarTarefa(elemento) {

    const li = elemento.parentNode;
    const eFinalizada = li.classList.contains("finalizada");

    if (eFinalizada) {
        li.classList.remove("finalizada");
        contador++;
    } else {
        li.classList.add("finalizada");
        contador--;
    }

    atualizarContador();

}

function adicionarTarefasDemo() {

    const tarefas = [
        "Adicione uma tarefa no botão acima ☝️",
        "Passe o mouse na tarefa para ver o botão excluir 🗑️",
        "Clique na tarefa para marca-la como feita ✔️"
    ];

    const ul = document.querySelector("ul");
    let index = 0;
    let tarefasHTML = "";
    while (index < tarefas.length) {
        tarefasHTML += `<li>
                <div class="btn-delete">
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
                <span onclick="finalizarTarefa(this)">${tarefas[index]}</span>
            </li>`;
            index ++;
    }

    ul.innerHTML = tarefasHTML;
}

function adicionarTarefa () {
    const input = document.querySelector("input");
    const tarefa = input.value;
    const ul = document.querySelector("ul");
    ul.innerHTML += `<li>
        <div class="btn-delete">
            <ion-icon name="trash-outline"></ion-icon>
        </div>
        <span onclick="finalizarTarefa(this)">${tarefa}</span>
    </li>`;

    input.value = "";
    contador ++;
    atualizarContador();
}

function atualizarContador() {
    const elementoContador = document.querySelector("h1");
    elementoContador.innerHTML = `To-do List (${contador})`
}

function limparTarefas() {
    
    const tarefas = document.querySelectorAll("li");
    for (let i = 0 ; i < tarefas.length ; i ++) {
        tarefas[i].classList.add("finalizada");
    }
    
    contador = 0;
    atualizarContador();
}

adicionarTarefasDemo();