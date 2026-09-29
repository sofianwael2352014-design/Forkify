let btns = document.querySelectorAll(".btn-search");
let recipesContainer = document.getElementById("recipesContainer");
let btnsearch = document.getElementById("btn-search");
let Input = document.getElementById("input");

async function fetchRecipes(recipe) {
recipesContainer.innerHTML = `
<h2 class="loader">Loading...</h2>`;


  let response = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipe}`,
  );
  let result = await response.json();
  let data = result.data.recipes;
  console.log(data);

  recipesContainer.innerHTML = "";
  data.forEach((recipe) => {
    console.log(recipe.image_url);
    console.log(recipe.title);
    console.log(recipe.publisher);

    recipesContainer.innerHTML += `
          <div class="recipe-card">
          <img class="recipe-img" src="${recipe.image_url}" alt="" />
          <div class="recipe-info">
            <h2>${recipe.title}</h2>
            <p>
          ${recipe.publisher}
            </p>
          </div>
          <div>
            <a href="#" class="btn-view">View Recipe</a>
          </div>
        </div>`;
  });
}

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    fetchRecipes(this.id);
  });
});

btnsearch.addEventListener("click", function () {
  fetchRecipes(Input.value);
});
