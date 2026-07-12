// ================= TODO =================

const todoButton = document.querySelector("#todo button");

const modal = document.querySelector(".flex");

const blackOverlay = document.querySelector(".overlay");

const close = document.querySelector("#close");

const form = document.querySelector("#formBox");

const taskInput = document.querySelector("#taskInput");

const taskBox = document.querySelector("#taskBox");

const todoContainer = document.querySelector("#todoContainer");

const todoClose = document.querySelector("#todoClose");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let editIndex = null;

// open popup

todoButton.onclick = () => {
  todoContainer.style.display = "block";

  todoClose.style.display = "flex";

  modal.style.display = "block";

  blackOverlay.style.display = "block";
};

// close popup

close.onclick = () => {
  modal.style.display = "none";

  blackOverlay.style.display = "none";

  taskInput.value = "";

  editIndex = null;
};

blackOverlay.onclick = () => {
  modal.style.display = "none";

  blackOverlay.style.display = "none";

  taskInput.value = "";

  editIndex = null;
};

todoContainer.onclick = (e) => {
  if (e.target === todoContainer) {
    todoContainer.style.display = "none";
    todoClose.style.display = "none";
  }
};

todoClose.onclick = () => {
  todoContainer.style.display = "none";
  todoClose.style.display = "none";
  modal.style.display = "none";
  blackOverlay.style.display = "none";
  taskInput.value = "";
  editIndex = null;
};

// show tasks

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

renderTasks();

// create task

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

  modal.style.display = "none";

  blackOverlay.style.display = "none";
});

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(index) {
  tasks.splice(index, 1);

  saveTasks();

  renderTasks();
}

function editTask(index) {
  taskInput.value = tasks[index];

  editIndex = index;

  modal.style.display = "block";

  blackOverlay.style.display = "block";

  todoContainer.style.display = "block";
}

// ================= POMODORO =================

const timer = document.querySelector("#timer");

const start = document.querySelector("#start");

const pause = document.querySelector("#pause");

const reset = document.querySelector("#reset");

let pomodoroData = JSON.parse(localStorage.getItem("pomodoro")) || {
  seconds: 1500,

  running: false,
};

let seconds = pomodoroData.seconds;

let interval = null;

function updateTimer() {
  let min = Math.floor(seconds / 60);

  let sec = seconds % 60;

  timer.innerHTML = `${min}:${sec < 10 ? "0" : ""}${sec}`;

  localStorage.setItem(
    "pomodoro",
    JSON.stringify({
      seconds: seconds,
      running: false,
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

      alert("Pomodoro Complete 🎉");
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

// ================= DAILY GOALS =================

const goalText = document.querySelector("#goalText");

const addGoal = document.querySelector("#addGoal");

const goalList = document.querySelector("#goalList");

let goals = JSON.parse(localStorage.getItem("goals")) || [];

function displayGoals() {
  goalList.innerHTML = "";

  goals.forEach((goal, index) => {
    goalList.innerHTML += `


<li class="goal">


<span onclick="completeGoal(this)">
${goal}
</span>


<button onclick="removeGoal(${index})">
❌
</button>


</li>



`;
  });
}

displayGoals();

addGoal.onclick = () => {
  let value = goalText.value.trim();

  if (!value) return;

  goals.push(value);

  localStorage.setItem("goals", JSON.stringify(goals));

  goalText.value = "";

  displayGoals();
};

function removeGoal(index) {
  goals.splice(index, 1);

  localStorage.setItem("goals", JSON.stringify(goals));

  displayGoals();
}

function completeGoal(el) {
  el.classList.toggle("completed");
}

// ================= CLOCK =================

function clock() {
  let date = new Date();

  document.querySelector("#time").innerHTML = date.toLocaleTimeString();

  document.querySelector("#date").innerHTML = date.toLocaleDateString();
}

setInterval(clock, 1000);

clock();

// ================= QUOTES =================

const quotes = [
  "Believe you can and you're halfway there.",

  "Success is built daily.",

  "Stay focused and keep moving.",

  "Dream big, work hard.",
];

document.querySelector("#newQuote").onclick = () => {
  let random = Math.floor(Math.random() * quotes.length);

  document.querySelector("#quote").innerHTML = quotes[random];
};
