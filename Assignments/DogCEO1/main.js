// const fetchPromise = fetch("https://dog.ceo/api/breeds/image/random");

// console.log(fetchPromise);

// const getAllBreeds = async () => {
//   const x = await fetch("https://dog.ceo/api/breeds/image/random");
//   const response = await x.json();
//   const data = response.message;
//   // return data;
//   console.log(data);
// };

const fetchPromise = fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => console.log(data));
// // console.log(data);
// // console.log(fetchPromise);

// // async

// fetchPromise.then((response) => {
//   console.log(response, URL);
// });

//   function url ('https//dog.ceo/api/breeds/image/random');

// const
