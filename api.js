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
    container.textContent = '';

    meals?.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>${meal.strMeal}</h1>
        <p>${meal.strIngredient18 ? meal.strIngredient18 : 'no'}</p>
        <button onclick="loadMealDetails('${meal.strMeal}')">click me</button>
        `
        container.appendChild(div);

    });
    toggleSipnner('none');
    toggleSearchResults('block');
}

const loadMealDetails = (mealName) => {
    console.log(mealName);
}

const toggleSipnner = (displayStyle) => {
    document.getElementById('spinner').style.display = displayStyle;

}

const toggleSearchResults = (displayStyle) => {
    document.getElementById('meals').style.display = displayStyle;

}


const searchMeal = () => {
    const searchText = document.getElementById('serach-field').value;

    // display spinner  
    toggleSipnner('block');
    toggleSearchResults('none');
    loadMeals(searchText);
    document.getElementById('serach-field').value = '';
}