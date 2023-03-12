const getAllBreeds = async () => {
  const x = await fetch("https://dog.ceo/api/breeds/list/all");
  const response = await x.json();
  const data = response.message;
  console.log(data);
  return data;
};

async function readBreedData() {
  const data = await getAllBreeds();
  // console.log(readBreedData);
  console.log(hound);
}
let emptyArray = [];

breeds.forEach((breed) => {
  console.log(data[breed]);
  console.log(data[breed].length);
  const breeds = object.values(data);
  if ((data[breed] = "hound")) {
    emptyArray.push(`${breed} - 1`);
  } else {
    emptyArray.push(`${breed} - ${data[breed]}`);
  }
});

console.log(emptyArray);

readBreedData();
