
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
      li.textContent = 'Name: '+existingScores.name +" "+ "-" + " "+ 'Score: ' + existingScores.score;
      li.classList.add('high-score-list');
  
    //   var button = document.createElement("button");
    //   button.textContent = "Complete ✔️";
      row.appendChild(li);
}

renderHighscore();
