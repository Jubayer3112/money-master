function totalExpense() {
  const food = getInputValue("food");
  const rent = getInputValue("rent");
  const clothes = getInputValue("clothes");
  const income = getInputValue("income");

  if (isNaN(food) || isNaN(rent) || isNaN(clothes) || isNaN(income)) {
    alert("Please Must be use amount by number");
    return;
  }
  const sum = food + rent + clothes;
  if (sum > income) {
    alert("You should less your cost");
    return;
  }
  setValue("totalExpense", sum);
  const remainBalance = income - sum;
  if (remainBalance < 0) {
    alert("You should less your cost");
    return;
  }
  setValue("balance", remainBalance);
}

function saveAmount() {
  const income = getInputValue("income");
  const rate = getInputValue("savings");
  const save = income * (rate / 100);

  if (isNaN(rate) || isNaN(save)) {
    alert("Please Must be use amount by number");
    return;
  }
  setValue("savingsAmount", save);

  const balance = document.getElementById("balance");
  const totalBalance = balance.innerText;
  const remainingBalance = totalBalance - save;

  setValue("remainBalance", remainingBalance);
}
