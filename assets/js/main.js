var ul = document.querySelector("ul");
var input = document.querySelector("input");
var addButton = document.querySelector("#add-button");

function init(){

    //add default todos
    new Todo("Todo 1", ul);

    addListeners();
}

//aux functions
function addListeners(){
    input.addEventListener('keypress', inputListener);

    addButton.addEventListener('click', addButtonListener);
}

function inputListener(event){
    if(event.which === 13 && this.value.replace(/ /g, "") !== ""){
        new Todo(this.value, ul); // creates a new todo
        this.value = ""; // sets input to blank;
    }
}

function addButtonListener(){
    if(this.classList.contains("fa-plus")){
        this.classList.remove("fa-plus");
        this.classList.add("fa-caret-up");
    } else{
        this.classList.remove("fa-caret-up");
        this.classList.add("fa-plus");
    }

    input.classList.toggle("hide");
}

// starts
init();