let balance = 10000;

function updateUI() {
  document.getElementById("balance").innerText = "$" + balance;
}

function addHistory(text) {
  let li = document.createElement("li");
  li.innerText = text;
  document.getElementById("history").appendChild(li);
}

function buy() {
  let amount = parseFloat(document.getElementById("amount").value);
  if (!amount || amount <= 0) return alert("Enter valid amount");

  balance -= amount;
  updateUI();
  addHistory("Bought: $" + amount);
}

function sell() {
  let amount = parseFloat(document.getElementById("amount").value);
  if (!amount || amount <= 0) return alert("Enter valid amount");

  balance += amount;
  updateUI();
  addHistory("Sold: $" + amount);
}
