document.querySelector('#req').addEventListener('click', () => {
    getRandomMeal().then(json => {
        setMeal(json);
    });
})

async function getRandomMeal() {
    const result = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    return await result.json();
}

function setMeal(data) {
    document.querySelector('#meal h1').textContent = data.meals[0].strMeal;
}