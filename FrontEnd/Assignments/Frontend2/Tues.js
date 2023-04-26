const app = document.getElementById("app"); //we are caching the element so we can attach to the DOM

[...data, ...data].forEach((item, index) => renderItem(item.name, index)); //duplicating your array and housing it into an array
//grid of 4 rows of 5 taller than wide

function renderItem(name, index) {
  const div = document.createElement("div");
  div.innerText = name;
  div.setAttribute("data-name", `${name}-${index}`);
  div.setAttribute("class", `unclicked`);
  app.appendChild(div); //entry point to the DOM
}
//add a class to elements in the HTML
app.addEventListener("click", handleClick);

function handleClick(e) {
  const name = e.target.getAttribute("data-name");
  name.style.backgroundColor = "red";
}
