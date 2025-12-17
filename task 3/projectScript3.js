let inputTask = document.getElementById("inputs");
let taskcontainer = document.getElementById("AlltaskContainer");

function addtask() {
    if (inputTask.value === "") {
        alert("you must write something!..");
    }
    else {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        let span = document.createElement("span");
        let deletebtn = document.createElement("button");
        deletebtn.innerHTML = "\u00d7";
        deletebtn.classList.add("dltBtn");

        deletebtn.addEventListener("click", function (e) {
            li.remove(e);
        });

        checkbox.addEventListener("change", function () {
            if (this.checked) {
                li.style.textDecoration = "line-through";
            } else {
                li.style.textDecoration = "none";
            }
        });

        span.innerText = inputTask.value;
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deletebtn);
        taskcontainer.appendChild(li);
        inputTask.value = "";
    } 
}

function showAll() {
    let tasks = document.querySelectorAll("#AlltaskContainer li");

    for (let task of tasks) {
        task.style.display = "block";
    }
}

function showPending() {
    let tasks = document.querySelectorAll("#AlltaskContainer li");

    for (let task of tasks) {
        let checkbox = task.querySelector("input");

        if (checkbox.checked) {
            task.style.display = "none";
        } else {
            task.style.display = "block";
        }
    } 
}

function showCompleted() {
    let tasks = document.querySelectorAll("#AlltaskContainer li");

    for (let task of tasks) {
        let checkbox = task.querySelector("input");

        if (checkbox.checked) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    }
}







