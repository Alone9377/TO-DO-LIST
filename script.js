// Function to add a new task
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
  
    if (taskInput.value === '') {
      alert('Please enter a task');
      return;
    }
  
    // Create a new list item
    var li = document.createElement('li');
    li.innerHTML = taskInput.value + ' <button onclick="markAsCompleted(this)">Complete</button> <button onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(li);
  
    // Clear the input field
    taskInput.value = '';
  }
  
  // Function to mark a task as completed
  function markAsCompleted(button) {
    var listItem = button.parentNode;
    listItem.classList.toggle('completed');
  }
  
  // Function to delete a task
  function deleteTask(button) {
    var listItem = button.parentNode;
    listItem.remove();
  }
  