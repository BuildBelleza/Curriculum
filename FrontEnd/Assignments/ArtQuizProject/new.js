const navigation = document.getElementById("navigation");
const progress = document.getElementById("progress");

let position = 0;

const handleNav = (e) => {
  const nav = e.target.getAttribute("backbut");
  const isForward = nav === "forward";
  if (isForward) {
    position += 1;
  } else {
    position -= 1;
  }
  SecurityPolicyViolationEvent(position);
};

navigation.addEventListener("click", handleNav);

const getData = async () => {
  const x = await fetch("https://api.artic.edu/api/v1/artworks/?limit=100");
  const parsedJsObject = await x.json();
  // console.log(parsedJsObject.data);
  // console.log(parsedJsObject);
  // console.log("this is the scope of getData");
  return parsedJsObject.data;
};

const getPublicDomain = async () => {
  const data = await getData();
  const filteredData = data.filter((item) => item.is_public_domain === true);
  // console.log(filteredData);
  return filteredData;
};
const getFourRandom = async () => {
  const data = await getPublicDomain();
  // console.log(data);
  const Random = [
    data.pop(data[Math.floor(Math.random(data) * 4)]),
    data.pop(data[Math.floor(Math.random(data) * 4)]),
    data.pop(data[Math.floor(Math.random(data) * 4)]),
    data.pop(data[Math.floor(Math.random(data) * 4)]),
  ];
  return Random;
  // console.log(fourRandom);
};

getFourRandom();

let index = 0;
const getChicagoId = async () => {
  const data = await getFourRandom();

  const Id = [
    data[0].image_id,
    data[1].image_id,
    data[2].image_id,
    data[3].image_id,
  ];

  const x = Id[0];
  const y = Id[1];
  const z = Id[2];
  const a = Id[3];

  // ++index;

  const imageUrl = [
    `https://www.artic.edu/iiif/2/[${Id[0]}]/full/843,/0/default.jpg`,
    `https://www.artic.edu/iiif/2/[${Id[1]}]/full/843,/0/default.jpg`,
    `https://www.artic.edu/iiif/2/[${Id[2]}]/full/843,/0/default.jpg`,
    `https://www.artic.edu/iiif/2/[${Id[3]}]/full/843,/0/default.jpg`,
  ];

  var contentContainer = document.getElementById("body");
  imageUrl.src = imageUrl[0];
  // for (var i=imageUrl; i < result.length; i++)
  // {
  // var image = document.createElement('img');
  // image.src = result[i];
  appendChild(imageUrl);
  const images = document.createElement("img");
  images.src = imageUrl();
  document.querySelector("").appendChild(imageUrl);
  // ++index;
  // console.log(imageUrl);
  // return imageUrl;
  //         const data = await getChicagoId();
  //         // console.log(imageUrl);
  //         const x = await fetch(`https://api.artic.edu/api/v1/artworks/${data}?fields=id,title,image_id`);
  //         const parsedJsObject = await x.json();
  //         console.log(parsedJsObject);
  //         const imageUrl = `${parsedJsObject.config.iiif_url}/${parsedJsObject.data.image_id}/full/843,/0/default.jpg`;
  //         console.log(imageUrl);
  return imagerUrl;
};

getChicagoId();

// return images;

// array.forEach(Id => {
//     `https://www.artic.edu/iiif/2/${Id}/full/843,/0/default.jpg`

// console.log([array]);
// return [array];
// console.log(array);
// return [array];
// console.log(Id);
// return [(`https://www.artic.edu/iiif/2/${parsedJsObject.data.image_id}/full/843,/0/default.jpg`),(`https://www.artic.edu/iiif/2/${parsedJsObject.data.image_id}/full/843,/0/default.jpg`),(`https://www.artic.edu/iiif/2/${parsedJsObject.data.image_id}/full/843,/0/default.jpg`),(`https://www.artic.edu/iiif/2/${parsedJsObject.data.image_id}/full/843,/0/default.jpg`)];

// let Id = getChicagoId [0];
// console.log(Id);

//append an array of images to the DOM
// getChicagoId();

// const appendToDom = async () => {
//         const data = await getChicagoId();
//         // console.log(data);
//         // const x = await fetch(`https://api.artic.edu/api/v1/artworks/${[data]}?fields=id,title,image_id`);
//         // const parsedJsObject = await x.json();
//         // console.log(parsedJsObject);
//         // const imageUrl = (`https://api.artic.edu/api/v1/artworks/${parsedJsObject.data.image_id}/full/843,/0/default.jpg`);
//         // console.log(imageUrl);
//         // return imagerUrl;

// }
// appendToDom();
//append getChicagoId() to the DOM

//create a template literal for all items within my array
// const buildTripleIfUrl = async () => {
//         const data = await getChicagoId();
//         // console.log(imageUrl);
//         const index = [];
//         // const x = getChicagoId();
//         // const parsedJsObject = await x.json();
//         // console.log(parsedJsObject);
//         ++index;

//         const imageUrl = [`https://www.artic.edu/iiif/2/${data[index]}/full/843,/0/default.jpg`];
//         // const Array = []
//         // ++index;
//         console.log(imageUrl);
//         return imageUrl;
//     }
// buildTripleIfUrl();

//     const arrayOfUrls = async () => {
//         const arrayOf = await buildTripleIfUrl();
//         console.log(buildTripleIfUrl);
//         // return [buildTripleIfUrl, buildTripleIfUrl, buildTripleIfUrl, buildTripleIfUrl];
//     }
//     arrayOfUrls();
//     buildTripleIfUrl();

// const buildTripleIfUrl = async () => {
//         const data = await getChicagoId();
//         // console.log(imageUrl);
//         const x = getChicagoId();
//         // const parsedJsObject = await x.json();
//         // console.log(parsedJsObject);
//         const imageUrl = `https://www.artic.edu/iiif/2/${x}/full/843,/0/default.jpg`};
//         // array.forEach(index[] = {`https://www.artic.edu/iiif/2/${x}/full/843,/0/default.jpg`};
//         console.log(imageUrl);
//         // return imagerUrl;

// // }

// buildTripleIfUrl();
// getChicagoId();

// const buildTripleIfUrl = async (Id) => {
//         const data = await getChicagoId();
//         // console.log(imageUrl);
//         const x = await getData;
//         const parsedJsObject = await x.json();
//         // console.log(parsedJsObject);
//         const imageUrl = (`https://api.artic.edu/api/v1/artworks/${parsedJsObject.data.image_id}/full/843,/0/default.jpg`);
//         console.log(imageUrl);
//         return imagerUrl;
// }

// buildTripleIfUrl();

// buildTripleIfUrl();
//     return imagerUrl;
// }

// buildTripleIfUrl();
// let item = getFourRandom[4];
// let id = getFourRandom.id;
// console.log(id);
// let artist_title = item.artist_title;
// let image_id = item.image_id;

// const getIds = async () => {
//         const data = await getFourRandom();
//         data.forEach(item => {
//             const id = item.id;
//             const artist_title = item.artist_title;
//             const image_id = item.image_id;
//             console.log(id);
//             console.log(artist_title);
//             console.log(image_id);
//             return id, artist_title, image_id;

//         })
