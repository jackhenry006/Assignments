const add = document.querySelector(".add");
const flexbox = document.querySelector(".flex");
const cross = document.querySelector("#close");
const formBox = document.querySelector("#formBox");
const taskBox = document.querySelector(".task");
const mainBox = document.querySelector("#mainBox");
let taskArr = [];
let updateIndex = null;
add.addEventListener("click", (event) => {
  flexbox.style.display = "Flex";
});

cross.addEventListener("click", (event) => {
  flexbox.style.display = "none";
});

formBox.addEventListener("submit", (event) => {
  event.preventDefault();
  let taskInput = event.target[0].value;
  if (taskInput.trim() === "") {
    flexbox.style.display = "none";
    return;
  }

  if (updateIndex != null) {
    taskArr[updateIndex] = taskInput;
    updateIndex = null;
  } else {
    taskArr.push(taskInput);
  }

  formBox.reset();
  ui();
  flexbox.style.display = "none";
});

let ui = () => {
  mainBox.innerHTML = "";
  taskArr.forEach((elem, index) => {
    mainBox.innerHTML += `        <div class="task">
          <p>${elem}</p>

          <div class="btn">
            <button onclick="updateTask('${elem}')">Edit</button>
            <button onclick="deleteTask('${index}')">Delete</button>
          </div>
        </div>
`;
  });
};

let deleteTask = (index) => {
  taskArr.splice(index, 1);
  ui();
};

let updateTask = (task) => {
  flexbox.style.display = "Flex";
  let tobeEdit = taskArr.find((elems) => elems === task);
  updateIndex = taskArr.findIndex((elem) => elem === task);
  formBox[0].value = tobeEdit;
};
