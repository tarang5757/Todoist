const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("buttonClick");


function addTask() {
    if (inputBox.value === '') {
        alert("Please type something in the field!")
    }
    else {
        //create a list item
        let li = document.createElement("li");
        //set the value of the list item to be text that was entered in inputbox
        li.innerHTML = inputBox.value;
        //add it to container in html
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = ""
    dataSave()
};

//This function helps us restore data if we refresh our page
function dataSave() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}



button.addEventListener('click', function () {
    addTask()
});

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        dataSave();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        dataSave()
    }
}, false);

showTask()

inputBox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask()
    }
})

