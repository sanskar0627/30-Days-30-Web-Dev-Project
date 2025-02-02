let totalAmount = 0;

function addExpense() {
    const name = document.getElementById('expense-name').value;
    const amount = document.getElementById('expense-amount').value;

    if (name === "" || amount === "") {
        alert("Please enter valid details!");
        return;
    }

    const expenseList = document.getElementById('expense-list');
    const li = document.createElement('li');
    li.innerHTML = `${name} - ₹${amount} <button class="delete-btn" onclick="deleteExpense(this, ${amount})">X</button>`;
    
    expenseList.appendChild(li);

    totalAmount += parseInt(amount);
    document.getElementById('total-amount').innerText = totalAmount;

    document.getElementById('expense-name').value = "";
    document.getElementById('expense-amount').value = "";
}

function deleteExpense(element, amount) {
    element.parentElement.remove();
    totalAmount -= amount;
    document.getElementById('total-amount').innerText = totalAmount;
}
