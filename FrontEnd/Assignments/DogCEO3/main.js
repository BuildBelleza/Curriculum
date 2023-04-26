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

// async function getBreedsAndSubbreedCount() {
//   const terd = await getData(); //here- `terd` is an object
//   console.log(terd);

//   const newTerd = Object.keys(terd); //here - we took `terd` and made it an array of keys. Those  keys

//   console.log(newTerd);
// }

// async function readBreedData() {
//   const x = await readBreedData;
//   const response = await x.json();
//   const data = response.image;
//   return data;
// }
//   //you said you chose the async & await approach rather than the what_____approach, yesterday?

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

// readBreedData();
// const data = await readBreedData();
// return data;
// console.log(data);

// why is the action being fired twice?

// const breeds = Object.keys(data);
// console.log(breeds);
//   //this is when the breed and square bracket are created from the data? what we see in the console window...

// let emptyArray = [];

// breeds.forEach((breed) => {
//   //     // console.log(data[breed]);
//   //     // console.log(data[breed].length);
//   if (data[breed].length < 1) {
//     emptyArray.push(`${breed} - 1`);
//   } else {
//     emptyArray.push(`${breed} - ${data[breed].length}`);
//   }
//   return emptyArray;
// });

//   // console.log(emptyArray);

//   // the line 45 is not being requested in the assignment instructions for this particular assignment. It will be requested in DogCEO4...or somewhere further along... possibly. That is why we commented it out. We dont need it here specifically or necessarily.

getData();
getAllBreeds();
readBreedData();
// getBreedsAndSubbreedCount();

// this is calling the function? when you tell it to 'read', we are doing what...calling it?   Answer: no, this is actually executing or firing the function with the name we gave it. If we comment this line out, the terminal will never run it.

//can an object be composed of numbers data instead of strings? Ask Matt...
