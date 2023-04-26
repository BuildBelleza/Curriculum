const ArrayOfImages = ["https://dog.ceo/api/breeds/image/random/4"]; //your assumed array
// ArrayOfImages.forEach(function (image) {
//   // for each link l in ArrayOfImages

//   let img1 = document.createElement("img"); // create an img element
//   img1.src = "https://dog.ceo/api/breeds/image/random"; // set its src to the link l
//   document.body.appendChild(img1); // append it to the body

//   let img2 = document.createElement("img"); // create an img element
//   img2.src = "https://dog.ceo/api/breeds/image/random"; // set its src to the link l
//   document.body.appendChild(img2);

//   let img3 = document.createElement("img"); // create an img element
//   img3.src = "https://dog.ceo/api/breeds/image/random"; // set its src to the link l
//   document.body.appendChild(img3);

//   let img4 = document.createElement("img"); // create an img element
//   img4.src = "https://dog.ceo/api/breeds/image/random"; // set its src to the link l
//   document.body.appendChild(img4);
// });

const click = document.querySelector("#button");

button.addEventListener("onclick", (images) => {
  const ArrayOfImages = forEach(function (image) {
    // for each link l in ArrayOfImages

    let img1 = document.createElement("img"); // create an img element
    (img1.src = "https://dog.ceo/api/breeds/image/random"),
      { mode: "no-cors" }.type; // set its src to the link l
    document.body.appendChild(img1); // append it to the body

    let img2 = document.createElement("img"); // create an img element
    img2.src = "https://dog.ceo/api/breeds/image/random"; // set its src to the link l
    document.body.appendChild(img2);

    let img3 = document.createElement("img"); // create an img element
    img3.src = "https://dog.ceo/api/breeds/image/random"; // set its src to the link l
    document.body.appendChild(img3);

    let img4 = document.createElement("img"); // create an img element
    img4.src = "https://dog.ceo/api/breeds/image/random"; // set its src to the link l
    document.body.appendChild(img4);

    // ArrayOfImages();

    // console.log(ArrayOfImages);
  });
  //   "https://dog.ceo/api/breeds/image/random",
  //   { mode: "no-cors" }.type,
  // ; //your assumed array

  // console.log(randomDogs);

  // fetch("https://dog.ceo/api/breed/hound/images")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  // const getData = async () => {
  //   //   //   // function declaration - declaring some variables *hit Matt with articulation of what this is doing exactly.
  //   const x = await fetch("https://dog.ceo/api/breeds/image/list/all", {
  //     mode: "no-cors",
  //   }).type;
  //   const response = await x.json();
  //   //   //   //is this the interpolation? answer=no  response is = to await x.json()  await is essentially meaning...we are having to use this because are we waiting for the server side to parse the data to json? Which is the promise...in essence...?
  // const data = response.message;
  // console.log(data);
  // return data;

  //   //   //return is 'caching' (or preserving it for later use) the data returned for use later
  // };

  // console.log((await fetch("https://api.example/status")).type); // "cors"
  // const getAllBreeds = async () => {
  //   const x = await fetch("https://dog.ceo/api/breeds/image/random/4");
  //   const response = await x.json();
  //   const data = response.message;
  //   // console.log(data);
  //   return data;
  // };

  // const readBreedData = async () => {
  //   const data = await getAllBreeds();
  //   // console.log(listOfBreedsObject);
  //   const breeds = Object.keys(data);
  //   // console.log(breeds);

  //   let emptyArray = [];

  //   breeds.forEach((breed) => {
  //     // console.log(data[breed]);
  //     // console.log(data[breed].length);
  //     if (data[breed].length < 1) {
  //       emptyArray.push(`${breed} - 1`);
  //     } else {
  //       emptyArray.push(`${breed} - ${data[breed].length}`);
  //     }
  //   });

  // console.log(emptyArray);
});
