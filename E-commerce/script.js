const createBtn = document.querySelector("#Create");
const formDiv = document.querySelector(".form");
const cross = document.querySelector("#close");
const productDiv = document.querySelector("#products");
const form = document.querySelector("form");

const productarr = [];

let updateIndex = null;

let ui = () => {
  productDiv.innerHTML = "";
  productarr.forEach((elem, index) => {
    productDiv.innerHTML += `<div class="proCrd">
          <div class="img">
            <img
              src="${elem.imgurl}"
              alt=""
            />
          </div>

          <div class="text">
            <h3>${elem.productname}</h3>
            <p>${elem.description}</p>
            <p>${elem.price}</p>
          </div>

          <div class="btn">
            <button onclick="updateproduct('${elem.productname}')" id="update">Update</button>
            <button onclick="deleteproduct('${index}')" id="delete">Delete</button>
          </div>
        </div>`;
  });
};

createBtn.addEventListener("click", () => {
  formDiv.style.display = "flex";
});

cross.addEventListener("click", () => {
  formDiv.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let productname = event.target[0].value;
  let description = event.target[1].value;
  let price = event.target[2].value;
  let imgurl = event.target[3].value;

  if (
    productname.trim() === "" ||
    description.trim() === "" ||
    price.trim() === "" ||
    imgurl.trim() === ""
  ) {
    alert("Please fill all the fields");
    return;
  }

  let obj = {
    productname,
    description,
    price,
    imgurl,
  };

  if (updateIndex != null) {
    productarr[updateIndex] = obj;
    updateIndex = null;
  } else {
    productarr.push(obj);
  }

  ui();

  form.reset();
  formDiv.style.display = "none";
});

const updateproduct = (name) => {
  formDiv.style.display = "flex";
  let product = productarr.find((elem) => elem.productname === name);
  updateIndex = productarr.findIndex((elem) => elem.productname === name);
  form[0].value = product.productname;
  form[1].value = product.description;
  form[2].value = product.price;
  form[3].value = product.imgurl;
};

const deleteproduct = (index) => {
  productarr.splice(index, 1);
  ui();
};
