async function getAPIKey() {
    const response = await fetch("config.json");
    const data = await response.json();
    return data.API_KEY;
}

async function fetchRecipe() {
    const apiKey = await getAPIKey();
    const url = `https://www.themealdb.com/api/json/v1/${apiKey}/random.php`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const meal = data.meals[0];

        document.getElementById("recipe-title").textContent = meal.strMeal;
        document.getElementById("recipe-image").src = meal.strMealThumb;
        document.getElementById("recipe-instructions").textContent = meal.strInstructions;
        document.querySelector(".recipe-box").style.display = "block";
    } catch (error) {
        alert("Error fetching recipe. Please try again.");
    }
}
