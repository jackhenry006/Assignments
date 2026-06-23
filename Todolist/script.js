let inp = document.querySelector("input");
let btn = document.querySelector("#add");
let todoBox = document.querySelector(".todo-list");
let edit = document.querySelector(".btn-edit");
btn.addEventListener("click", () => {
  let value = inp.value;

  if (value.trim() === "") return;

  todoBox.innerHTML += ` <div class="li">
          <h3>${value}</h3>
          <div>
            <button class="btn_edit">Edit</button>
            <button class="btn del">Delete</button>
          </div>
        </div>`;

  btn_edit.textContent = value;
  inp.value = "";
});
