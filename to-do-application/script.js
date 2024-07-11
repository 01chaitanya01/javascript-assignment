let data = []; //create a list to store the tasks

// on click the add button valid the input and append the data in data list and append the row in list container
document.getElementById("addButton").addEventListener("click", () => {
  const taskInput = document.getElementById("taskInput");
  const listContainer = document.getElementById("listContainer");

  // validating the input
  if (taskInput.value.length > 0) {
    const taskData = {
      id: data.length > 0 ? data[data.length - 1].id + 1 : 1, //getting the last id and creating new one
      task: taskInput.value,
    };

    // append the data in data list
    data.push(taskData);
    const listRow = document.createElement("div");
    listRow.className = "list-row";
    listRow.innerHTML = `
      <div class="task-list">
        <input type="checkbox" id="task${taskData.id}" />
        <label for="task${taskData.id}">${taskData.task}</label>
      </div>
      <div class="remove-btn">
        <button class="x-btn" onclick="removeTask(${taskData.id})"><i class="fa fa-close"></i></button>
      </div>
    `;

    // append the row in list comtainer
    listContainer.append(listRow);

    taskInput.value = "";
    console.log(data);
  } else {
    console.log("enter something");
  }
});

function removeTask(id) {
  const listContainer = document.getElementById("listContainer");
  const taskIndex = data.findIndex((task) => task.id === id); // finding the index of specific task id

  if (taskIndex !== -1) {
    data.splice(taskIndex, 1); //deleting the task from the data list

    // accessing the parent div which is list-row
    const taskElement = document.querySelector(`#task${id}`).parentNode
      .parentNode;

    //removing the task row from the list container
    listContainer.removeChild(taskElement);

    console.log(data);
  }
}
