var letsCookButton = document.querySelector(".lets-cook-button");
var sideDishButton = document.querySelector(".radiobutton1");
var mainDishButton = document.querySelector(".radiobutton2");
var dessertButton = document.querySelector(".radiobutton3");
var box2Content = document.querySelector(".box2");
var addRecipeButtonTop = document.querySelector(".add-a-recipe-button");
var footer = document.querySelector(".footer");
var addNewButton = document.querySelector(".add-new-button");
var recipeTypeInput = document.querySelector(".recipe-type-form");
var recipeNameInput = document.querySelector(".recipe-name-input");
var radioButtonInput1 = document.querySelector(".radiobuttoninput1");
var radioButtonInput2 = document.querySelector(".radiobuttoninput2");
var radioButtonInput3 = document.querySelector(".radiobuttoninput3");

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var currentDish;

var sides = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies"
]

var mainDishes = [
"Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Yellow Curry",
"Bibimbap",
"Chicken Parmesean",
"Butternut Squash Soup",
"BBQ Chicken Burgers",
"Ramen",
"Empanadas",
"Chicken Fried Rice",
"Sheet Pan Fajitas",
"Margarita Pizza"
]

var desserts = [
"Apple Pie",
"Lemon Meringue Pie",
"Black Forest Cake",
"Banana Bread",
"Peach Cobbler",
"Cheesecake",
"Funfetti Cake",
"Baklava",
"Flan",
"Macarons",
"Macaroons",
"Chocolate Cupcakes",
"Pavlova",
"Pumpkin Pie",
"Key Lime Pie",
"Tart Tatin",
"Croissants",
"Eclairs"
]

sideDishButton.addEventListener('click', chooseSideDish);
mainDishButton.addEventListener('click', chooseMainDish);
dessertButton.addEventListener('click', chooseDessert);
letsCookButton.addEventListener('click', displayDish);
addRecipeButtonTop.addEventListener('click', displayFooter);
addNewButton.addEventListener('click', addNewRecipe);

function chooseSideDish() {
  currentDish = sides[getRandomIndex(sides)];
}

function chooseMainDish() {
  currentDish = mainDishes[getRandomIndex(mainDishes)];
}

function chooseDessert() {
  currentDish = desserts[getRandomIndex(desserts)];
}

function displayDish() {
  var box2NewText = `
  <h1><em>You should make:</em></h1>
  <p><b>${currentDish}!</b></p>`;
  box2Content.innerHTML = '';
  box2Content.innerHTML += box2NewText;

  resetButtons();
}

function resetButtons() {
  radioButtonInput1.checked = false;
  radioButtonInput2.checked = false;
  radioButtonInput3.checked = false;
}


function displayFooter() {
  footer.style.display = "block";
}

function displayNewRecipe() {
  var box2NewText = `
  <h1><em>Added new recipe:</em></h1>
  <p><b>${currentDish}!</b></p>`;
  box2Content.innerHTML = '';
  box2Content.innerHTML += box2NewText;

  resetButtons();
}




// Goal: when the user clicks Add New Button, it takes the input from
// recipe Name and adds it to the array chosen in recipe type.

// Input: user chooses Side, Main Dish or Dessert, then adds a string into
// recipe name field.

// Output: recipe displays in the second box, adds recipe to appropriate array

function addNewRecipe() {
  currentDish = recipeNameInput.value;
  var selection = recipeTypeInput.value;
  if (selection === "side") {
    sides.push(currentDish)
  };
  if (selection === "main-dish") {
    mainDishes.push(currentDish)
  }
  if (selection === "dessert") {
    desserts.push(currentDish)
  }


  displayNewRecipe()
}
