const buttons = document.querySelectorAll(".drink-buttons")

function prepareDrink(drink) {
  const chosenDrink = drink.target.id;

  const loader = document.getElementById("loader-wrapper")
  const parentElement = document.createElement("div")
  const childElement = document.createTextNode("Boil some water");
  parentElement.style.color = "#EAEDED";

  parentElement.appendChild(childElement)




  if(chosenDrink == "tea") {
    loader.style.display = "flex"
    loader.appendChild(parentElement);
    setTimeout(() => {
      childElement.textContent = "Steep the water in the tea"
    }, 2000);
    setTimeout(() => {
      childElement.textContent = "Pour tea in the cup"
    }, 4000);
    setTimeout(() => {
      childElement.textContent = "Add lemon"
    }, 6000);
  }

  if(chosenDrink == "coffee") {
    loader.style.display = "flex"
    loader.appendChild(parentElement);
    setTimeout(() => {
      childElement.textContent = "Brew the coffee grounds"
    }, 2000);
    setTimeout(() => {
      childElement.textContent = "Pour coffee in the cup"
    }, 4000);
    setTimeout(() => {
      childElement.textContent = "Add sugar and milk"
    }, 6000);
  }

  if(chosenDrink == "chocolate") {
    loader.style.display = "flex"
    loader.appendChild(parentElement);
    setTimeout(() => {
      childElement.textContent = "Add drinking chocolate powder to the water"
    }, 2000);
    setTimeout(() => {
      childElement.textContent = "Pour chocolate in the cup"
    }, 4000);
  }
}

buttons.forEach(element => element.addEventListener("click", prepareDrink))