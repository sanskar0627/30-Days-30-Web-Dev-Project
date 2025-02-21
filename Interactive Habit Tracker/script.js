document.addEventListener("DOMContentLoaded", loadHabits);

function addHabit() {
    let habitInput = document.getElementById("habitInput");
    let habitText = habitInput.value.trim();
    
    if (habitText === "") {
        alert("Enter a habit!");
        return;
    }

    let habits = JSON.parse(localStorage.getItem("habits")) || [];
    habits.push({ text: habitText, completed: false });
    localStorage.setItem("habits", JSON.stringify(habits));

    habitInput.value = "";
    loadHabits();
}

function loadHabits() {
    let habitList = document.getElementById("habitList");
    habitList.innerHTML = "";

    let habits = JSON.parse(localStorage.getItem("habits")) || [];

    habits.forEach((habit, index) => {
        let habitDiv = document.createElement("div");
        habitDiv.classList.add("habit");
        if (habit.completed) habitDiv.classList.add("completed");

        habitDiv.innerHTML = `
            <span>${habit.text}</span>
            <button onclick="toggleHabit(${index})">${habit.completed ? "Undo" : "Done"}</button>
            <button class="delete-btn" onclick="deleteHabit(${index})">X</button>
        `;

        habitList.appendChild(habitDiv);
    });
}

function toggleHabit(index) {
    let habits = JSON.parse(localStorage.getItem("habits")) || [];
    habits[index].completed = !habits[index].completed;
    localStorage.setItem("habits", JSON.stringify(habits));
    loadHabits();
}

function deleteHabit(index) {
    let habits = JSON.parse(localStorage.getItem("habits")) || [];
    habits.splice(index, 1);
    localStorage.setItem("habits", JSON.stringify(habits));
    loadHabits();
}
