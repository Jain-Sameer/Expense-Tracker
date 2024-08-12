const table = document.querySelector("#expenseTable");
const submit = document.querySelector("#AddExpense");
const description = document.querySelector("#Description");
const category = document.querySelector("#category");
const price = document.querySelector("#price");
const form = document.querySelector("form");

submit.addEventListener("click", function () {
  if (checkAllFieldsFilled()) return;
  addExpense();
  resetForm();
});

function resetForm() {
  description.value = "";
  category.value = "";
  price.value = "";
}

function checkAllFieldsFilled() {
  if (
    description.value == "" ||
    price.value.toString() == "" ||
    category.value == ""
  )
    return true;
}
function addExpense() {
  table.innerHTML += `<tr>
    <th class=""> ${description.value} </th>
    <th>${category.value}</th>
    <th>${price.value}</th>
    </tr> `;
}
