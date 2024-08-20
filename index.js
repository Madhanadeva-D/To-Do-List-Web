// variables

const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

//functions

function addTask(){
    if(inputBox.value === ''){
        alert("You must write the task")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let crossIcon = document.createElement("span");
        crossIcon.innerHTML = "&#10006;";
        li.appendChild(crossIcon);
    }

    inputBox.value = "";
    saveData();

}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();

    }

},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();