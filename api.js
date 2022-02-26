const loadSingleUser = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displaySingleUser(data))
}
const loadMeals = (serachText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serachText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

// loadSingleUser();
loadMeals('fish');

const displaySingleUser = (user) => {
    console.log(user.results[0].gender)
}

const displayMeals = (meals) => {
    const container = document.getElementById('meals');
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>${meal.strMeal}</h1>
        <button onclick="loadMealDetails('${meal.strMeal}')">click me</button>
        `
        container.appendChild(div);

    });
}

const loadMealDetails = (mealName) => {
    console.log(mealName);
}