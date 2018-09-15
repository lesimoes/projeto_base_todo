var lis = document.querySelectorAll("li");

function init(){

    setListeners();
}


// init functions
function setListeners(){
    for(var i = 0; i < lis.length; i++){
        lis[i].addEventListener("click", toggleDoneOnClick); //click event
        lis[i].addEventListener("transitionend", function(){this.remove()}); // remove after fadeout

        var deleteButton = lis[i].querySelector("span");
        deleteButton.addEventListener("click", deleteButtonOnClick); // starts fade out
    }
}

// click functions
function toggleDoneOnClick(){
    this.classList.toggle("done");
}

function deleteButtonOnClick(event){
    var li = this.parentNode;
    li.classList.add("remove");
    // li.remove();
    event.stopPropagation(); // avoid other parent listeners
}

// starts
init();