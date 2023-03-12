const randomDogs = document.getElementById("dogs");

randomDogs.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => console.log(data.message));
});

// console.log(randomDogs);

fetch("https://dog.ceo/api/breed/hound/images")
  .then((response) => response.json())
  .then((data) => console.log(data));

const getData = async () => {
  // function declaration - declaring some variables *hit Matt with articulation of what this is doing exactly.
  const x = await fetch("https://dog.ceo/api/breed/list/hound");
  const response = await x.json();
  //is this the interpolation? answer=no  response is = to await x.json()  await is essentially meaning...we are having to use this because are we waiting for the server side to parse the data to json? Which is the promise...in essence...?
  const data = response.message;
  // console.log(data);
  return data;

  // return is 'caching' (or preserving it for later use) the data returned for use later
};
const getAllBreeds = async () => {
  const x = await fetch("https://dog.ceo/api/breeds/list/all");
  const response = await x.hound();
  const data = response.message;
  // console.log(data);
  return data;
};

const readBreedData = async () => {
  const data = await getAllBreeds();
  // console.log(listOfBreedsObject);
  const breeds = Object.keys(data);
  // console.log(breeds);

  let emptyArray = [];

  breeds.forEach((breed) => {
    // console.log(data[breed]);
    // console.log(data[breed].length);
    if (data[breed].length < 1) {
      emptyArray.push(`${breed} - 1`);
    } else {
      emptyArray.push(`${breed} - ${data[breed].length}`);
    }
  });

  console.log(emptyArray);
};

getData();
getAllBreeds();
readBreedData();
