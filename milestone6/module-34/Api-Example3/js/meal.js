const loadMeals = (searchText) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
   

}

const displayMeals = (meals)=>{
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML ='';
    meals.forEach(meal =>{
       // console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML=`
        <div class="card">
        <img src="${meal.strMealThumb
        }" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions}</p>
        <!-- Button trigger modal -->
        <button onclick="loadMealsDetails2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
        Launch demo modal
        </button>
        </div>
        `
        mealsContainer.appendChild(mealDiv);
    })
}

const searchMeals = ()=>{
    const searchText = document.getElementById('search-field').value;
    console.log(searchText)
    loadMeals(searchText);
}

const loadMealDetail = (idMeal)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
    .catch(error => console.log(error))
   
}

//async aWAIT
const loadMealsDetails2 = async(idMeal) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
   try{
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0])
   }catch(error){
    console.log(error);
   }

}

const displayMealDetails = meal =>{
    document.getElementById('mealDetailsLabel').innerText= meal.strMeal;
    const mealsDetails = document.getElementById('mealDetailsBody');
    mealsDetails.innerHTML=`
        <img class="img-fluid" src="${meal.strMealThumb}">
    `
}

    loadMeals('fish')