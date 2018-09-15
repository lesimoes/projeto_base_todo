var ul = document.querySelector("ul");
var input = document.querySelector("input");

function init(){

    //add default todos
    new Todo("Todo 1", ul);

    addListeners();
}

//aux functions
function addListeners(){
    input.addEventListener('keypress', function(event){
        if(event.which === 13){
            new Todo(this.value, ul); // creates a new todo
            this.value = ""; // sets input to blank;
        }
    });
}

// starts
init();