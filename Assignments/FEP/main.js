import "./style.css";

const app = document.getElementById("app"); //we are caching the element so we can attach to the DOM

let clickCount = 0;
let firstCard = "";
let secondCard = "";
let cardIds = [];

const picturesPick = async () => {
  const x = await fetch(
    "https://https://www.flickr.com/services/rest/?method=flickr.photos.getPopular&api_key=f315febdc75fb1e9b82dec177517312a&user_id=197962419%40N03&per_page=10&page=1&format=json&nojsoncallback=1.ceo/api/breeds/list/all"
  );
  const response = await x.json();
  const data = response.message;
  // console.log(data);
  return data;
};

[...data, ...data].forEach((item, index) => renderItem(item.name, index)); //duplicating your array and housing it into an array
//grid of 4 rows of 5 taller than wide

function renderItem(name, index) {
  const div = document.createElement("div");
  div.setAttribute("createRandomId()");
  app.appendChild(div); //entry point to the DOM
  div.classList = "card";
  div.id = createRandomId();
}

//add a class to elements in the HTML
app.addEventListener("click", handleClick);

function handleClick(e) {
  const el = e.target;
  const card = el.getAttribute("data-name");
  // let isMatch = firstCard === getCardName(card);
  // let isNotMatch = firstCard != getCardName(card);

  const isRevealed = el.classList.contains("revealed");

  if (el.classList.contains("card") && !isRevealed) {
    clickCount += 1;
    cardIds.push(el.id);

    if (clickCount === 1) {
      firstCard = getCardName(card);
      toggleStyle(el);
    }

    if (clickCount === 2) {
      const secondCard = getCardName(card);
      checkIsMatch(secondCard);
    }

    if (clickCount > 2) {
      toggleStyle(el);
    }
  }

  function getCardName(str) {
    const words = str.split("-");
    return words[0];
  }
}

function toggleStyle(el) {
  if (!el) {
    app.querySelectorAll(".card").forEach((el) => {
      el.classList.remove("active");
    });
  } else {
    el.classList.toggle("active");
  }
}

function checkIsMatch(val) {
  if (firstCard === val) {
    cardIds.forEach((cardId) => {
      document.getElementById(cardId).classList.add("revealed");
    });
  } else {
    toggleStyle();
  }
  clickCount = 0;
  cardIds = [];
  console.log(firstCard === val);
  // return firstCard === val;
}

function createRandomId() {
  return (Math.random() + 1).toString(36).substring(7);
}

// app.removeEventListener('handleClick');
