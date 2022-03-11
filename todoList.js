
const input = document.querySelector("input[type='text']");
const list = document.querySelector('#ul-list-tache');
let titreH3 = document.querySelector("h3");
let btnReset = document.querySelector("#btn-reset");

input.addEventListener('keydown', (e) => {
    if (e.keyCode == '13') {
        let inputValue = input.value.trim();
        if(inputValue !== "") {
            btnReset.classList.remove("invisible");
            titreH3.classList.remove("invisible");
            list.innerHTML += `<li>${inputValue}</li>`;
            sauvegarderTache();
            input.value = "";
        }
    }
})

// Réinitialiser todo list
btnReset.addEventListener('click', ()=> { 
    btnReset.classList.add("invisible");
    titreH3.classList.add("invisible");
    window.localStorage.removeItem('todoList');
    afficherTacheExistante();
})

list.addEventListener('click', (e) => {
    e.target.classList.toggle('done');
    sauvegarderTache();
})

function sauvegarderTache() {
    localStorage.todoList = list.innerHTML;
}

function afficherTacheExistante() {
    if (localStorage.getItem("todoList") === null) {
        btnReset.classList.add('invisible');
        list.innerHTML = " ";
    } else { 
        btnReset.classList.remove("invisible");
        titreH3.classList.remove("invisible");
        list.innerHTML = localStorage.todoList;
    }
}

afficherTacheExistante();
