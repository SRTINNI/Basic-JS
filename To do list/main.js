// main.js

// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push(taskText);
        renderTasks();
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

// Function to render tasks in the list
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        
        const deleteButton = document.createElement("span");
        deleteButton.textContent = "❌";
        deleteButton.setAttribute("onclick", `deleteTask(${index})`);
        
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Initial rendering of tasks
renderTasks();
