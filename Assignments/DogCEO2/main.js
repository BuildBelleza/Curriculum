const getAllBreeds = async () => {
  const x = await fetch("https://dog.ceo/api/breeds/list/all");
  const response = await x.json();
  const data = response.message;
  // console.log(data);
  return data;
};

async function readBreedData() {
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
}

readBreedData();
