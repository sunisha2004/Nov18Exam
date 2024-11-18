const tasks= [];

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index)=>{
        const li = document.createElement("li");
        li.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.id = 'detetebut';

        deleteButton.onclick = ()=>{
            tasks.splice(index, 1);
            displayTasks();

        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });


}

addTaskButton.addEventListener("click",() =>{
    const task = taskInput.value;

    if (task){
        tasks.push(task);
        taskInput.value = "";
        displayTasks()
    }
});



