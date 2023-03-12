// const getData = async () => {
//   // function declaration - declaring some variables *hit Matt with articulation of what this is doing exactly.
//   await fetch("https://dog.ceo/api/breeds/list/all");

//   //is this the interpolation? answer=no  response is = to await x.json()  await is essentially meaning...we are having to use this because are we waiting for the server side to parse the data to json? Which is the promise...in essence...?

//   console.log(getData);

//   // return is 'caching' (or preserving it for later use) the data returned for use later
// };

// async () => {
//   await fetch("https://dog.ceo/api/breeds/list/all");
// };

// console.log(fetch);

const randomDogs = document.getElementById("dogs");

function result() {
  fetch("https://dog.ceo/api/breeds/list/all").then((response) =>
    response.json()
  );
}

getresult();
console.log(result);
