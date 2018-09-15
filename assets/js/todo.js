class Todo { // a simple todo
    constructor(content, parent){
        this.content = content;
        this.li = document.createElement('li');
        this.deleteButton = document.createElement('span');
        this.liContent = document.createElement('span');

        this.buildLI();
        this.addToParent(parent);
    }

    buildLI() {
        // Delete button content
        this.deleteButton.innerHTML = "<i class='fa fa-trash'> </i> ";
        this.deleteButton.classList.add("bth-delete");

        // li content
        this.liContent.textContent = this.content;

        this.addToLI();
        this.addListeners();
    }

    
    //click functions
    liContentOnclick(){
        this.classList.toggle("done");
    }
    
    deleteButtonOnClick(){
        this.parentNode.classList.toggle("remove");
    }
    
    //constructor functions
    addToLI(){
        this.li.appendChild(this.deleteButton);
        this.li.appendChild(this.liContent);
    }

    addListeners(){
        this.liContent.addEventListener("click", this.liContentOnclick); // add to todo
        
        this.deleteButton.addEventListener("click", this.deleteButtonOnClick); //to fade out
        this.li.addEventListener("transitionend", this.removeIt); // remove after transition
    }

    addToParent(parent){
        parent.appendChild(this.li);
    }

    //aux functions
    removeIt(){
        if (this.classList.contains("remove")){
            this.remove();
        }
    }
}
