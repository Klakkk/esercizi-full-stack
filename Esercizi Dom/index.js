const $input = document.querySelector("#input");
const $list = document.querySelector("#list");

const state= {
  inputTask:""
};

$input.addEventListener("input", (event) => {
  state.inputTask = event.target.value;
});



const addProduct = () => {
const newLi = document.createElement("li");
newLi.innerHTML = `
<input type = "checkbox"/>
<label>${state.inputTask}</label>
`;

$list.appendChild(newLi);
$input.value ="";
};

