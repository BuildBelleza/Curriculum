const randomDogs = document.getElementById("dogs");

randomDogs.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => console.log(data.message));
});

console.log(randomDogs);
