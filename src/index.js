document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners()
});

// get the form and add event listener
function addingEventListeners() {
  document.getElementById("create-task-form").addEventListener("submit", handleFormSubmit)
}

function handleFormSubmit(e) {
  e.preventDefault()
  // console.log(e)
  const task = e.target[0].value
  console.log(task)

  displayTask(task)
}

function displayTask(task) {
  const taskUl = document.getElementById("tasks")
  const taskLi = document.createElement("li")
  const deleteBtn = document.createElement("button")

  deleteBtn.textContent = "x"
  deleteBtn.addEventListener("click", deleteTask)

  taskLi.textContent = task + " "
  taskLi.appendChild(deleteBtn)
  taskUl.appendChild(taskLi)

}

function deleteTask(e) {
  console.log(e)
  e.target.parentNode.remove()
}





/*function sortTasks() {
  const sortTasksSelect = document.getElementById("sort-tasks")
  if (sortTasksSelect.value === "h-l") {
     taskObjArr.sort((a, b) => a.priorityLevel - b.priorityLevel)
  } else {
     taskObjArr.sort((a, b) => b.priorityLevel - a.priorityLevel)
  }
  displayTasks()
}
*/