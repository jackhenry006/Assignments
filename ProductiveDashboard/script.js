// ================= TODO LIST =================

const todoBtn = document.querySelector("#todo button");

const todoContainer = document.querySelector("#todoContainer");

const todoClose = document.querySelector("#todoClose");

const overlay = document.querySelector(".overlay");

const popup = document.querySelector(".flex");

const close = document.querySelector("#close");

const form = document.querySelector("#formBox");

const taskInput = document.querySelector("#taskInput");

const taskBox = document.querySelector("#taskBox");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let editIndex = null;

// OPEN TODO PAGE

todoBtn.onclick = () => {
  todoContainer.style.display = "block";

  renderTasks();
};

// CLOSE TODO PAGE

todoClose.onclick = () => {
  todoContainer.style.display = "none";
};

// OPEN CREATE POPUP

document.querySelector("#todo button").addEventListener("dblclick", () => {
  popup.style.display = "block";

  overlay.style.display = "block";
});

close.onclick = () => {
  popup.style.display = "none";

  overlay.style.display = "none";
};

overlay.onclick = () => {
  popup.style.display = "none";

  overlay.style.display = "none";
};

// DISPLAY TASKS

function renderTasks() {
  taskBox.innerHTML = "";

  tasks.forEach((task, index) => {
    taskBox.innerHTML += `

        <div class="task">


        <p>${task}</p>


        <div class="btn">


        <button onclick="editTask(${index})">
        Edit
        </button>


        <button onclick="deleteTask(${index})">
        Delete
        </button>


        </div>


        </div>

        `;
  });
}

// ADD TASK

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let value = taskInput.value.trim();

  if (value === "") return;

  if (editIndex === null) {
    tasks.push(value);
  } else {
    tasks[editIndex] = value;

    editIndex = null;
  }

  saveTasks();

  renderTasks();

  taskInput.value = "";

  popup.style.display = "none";

  overlay.style.display = "none";
});

// SAVE

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// DELETE

function deleteTask(index) {
  tasks.splice(index, 1);

  saveTasks();

  renderTasks();
}

// EDIT

function editTask(index) {
  taskInput.value = tasks[index];

  editIndex = index;

  popup.style.display = "block";

  overlay.style.display = "block";
}

renderTasks();

// ================= POMODORO =================

const timerDisplay = document.querySelector("#timer");

const start = document.querySelector("#start");

const pause = document.querySelector("#pause");

const reset = document.querySelector("#reset");

let pomodoro = JSON.parse(localStorage.getItem("pomodoro")) || {
  seconds: 1500,
};

let seconds = pomodoro.seconds;

let interval = null;

function updateTimer() {
  let min = Math.floor(seconds / 60);

  let sec = seconds % 60;

  timerDisplay.innerHTML = `${min}:${sec < 10 ? "0" : ""}${sec}`;

  localStorage.setItem(
    "pomodoro",
    JSON.stringify({
      seconds: seconds,
    }),
  );
}

start.onclick = () => {
  if (interval) return;

  interval = setInterval(() => {
    if (seconds > 0) {
      seconds--;

      updateTimer();
    } else {
      clearInterval(interval);

      interval = null;

      alert("Pomodoro Completed");
    }
  }, 1000);
};

pause.onclick = () => {
  clearInterval(interval);

  interval = null;
};

reset.onclick = () => {
  clearInterval(interval);

  interval = null;

  seconds = 1500;

  updateTimer();
};

updateTimer();

// ================= DAILY GOAL =================

const goalText = document.querySelector("#goalText");

const addGoal = document.querySelector("#addGoal");

const goalList = document.querySelector("#goalList");

let goals = JSON.parse(localStorage.getItem("goals")) || [];

function showGoals() {
  goalList.innerHTML = "";

  goals.forEach((goal, index) => {
    goalList.innerHTML += `


<li class="goal">


${goal}


<button onclick="removeGoal(${index})">
❌
</button>


</li>


`;
  });
}

showGoals();

addGoal.onclick = () => {
  let value = goalText.value.trim();

  if (!value) return;

  goals.push(value);

  localStorage.setItem("goals", JSON.stringify(goals));

  goalText.value = "";

  showGoals();
};

function removeGoal(index) {
  goals.splice(index, 1);

  localStorage.setItem("goals", JSON.stringify(goals));

  showGoals();
}

// ================= CLOCK =================

function clock() {
  let now = new Date();

  document.querySelector("#time").innerHTML = now.toLocaleTimeString();

  document.querySelector("#date").innerHTML = now.toLocaleDateString();
}

setInterval(clock, 1000);

clock();

// ================= QUOTES =================

let quotes = [
  "Believe you can and you're halfway there.",

  "Success is built daily.",

  "Work hard in silence.",

  "Stay focused.",
];

document.querySelector("#newQuote").onclick = () => {
  let random = Math.floor(Math.random() * quotes.length);

  document.querySelector("#quote").innerHTML = quotes[random];
};
