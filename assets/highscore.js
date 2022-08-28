
var row = document.querySelector('.row');
var existingScores = JSON.parse(localStorage.getItem('score')) || {};
var userNameEl = document.getElementById('user-name')

function renderHighscore() {

    // todoList.innerHTML = "";
    // todoCountSpan.textContent = todos.length;
  
    // Render a new li for each todo
    // for (var i = 0; i < existingScores.length; i++) {
    //   var todo = todos[i];
  
      var li = document.createElement("li");
      li.textContent = existingScores.name +"  "+ existingScores.score;
      li.classList.add('high-score-list');
  
    //   var button = document.createElement("button");
    //   button.textContent = "Complete ✔️";
      row.appendChild(li);
    // }
  }
  
renderHighscore();

//   // This function is being called below and will run when the page loads.
//   function init() {
//     // Get stored todos from localStorage
//     var storedTodos = JSON.parse(localStorage.getItem("todos"));
  
//     // If todos were retrieved from localStorage, update the todos array to it
//     if (storedTodos !== null) {
//       todos = storedTodos;
//     }
  
//     // This is a helper function that will render todos to the DOM
//     renderTodos();
//   }