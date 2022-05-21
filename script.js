const buttons = document.querySelectorAll(".drink-buttons")

function prepareDrink(drink) {
  const chosenDrink = drink.target.id;
  console.log(drink)
  const loader = document.getElementById("loader-wrapper")
  const parentElement = document.createElement("div")
  parentElement.style.padding = "2rem";
  parentElement.style.fontSize = "var(--font-size)"
  parentElement.style.textAlign = "center"
  const childElement = document.createTextNode("Boil some water");
  parentElement.style.color = "#EAEDED";
  const resetButton = document.createElement("button")
  resetButton.classList.add("reset-drink-button")
  resetButton.textContent = "Fancy another drink?"
  const spinner = document.getElementById("spinner")
  const teaGif = document.getElementById("lemon-tea-gif")
  const coffeeGif = document.getElementById("black-coffee-gif")
  const chocolateGif = document.getElementById("hot-chocolate-gif")

  
  

  parentElement.append(childElement, resetButton)

  function displayGif() {
    childElement.textContent = "Your drink is ready, enjoy!"
    spinner.style.display = "none"
    resetButton.style.display = "block"
    resetButton.addEventListener("click", (e) => {
      e.path[6].location.reload()
    })
  }


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
    setTimeout(() => {
      teaGif.style.display = "block"
      displayGif();
    }, 8000);

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
    setTimeout(() => {
      coffeeGif.style.display = "block"
      displayGif();
    }, 8000);
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
    setTimeout(() => {
      chocolateGif.style.display = "block"
      displayGif();
    }, 6000);
  }
}

buttons.forEach(element => element.addEventListener("click", prepareDrink))


