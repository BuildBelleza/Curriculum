
const promise1 = new Promise((resolve, reject) => {
    resolve(dogImg);
});


const dogImg = fetch("https://dpg.ceo/api/breeds/image/random")
    .then((response) => response.json())
    //.then(data) => console.log(data))

    console.log(dogImg);

    const imgDiv = document.getElementById('img');
    const createImgDiv = document.createElement('img');