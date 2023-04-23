const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const navs = require("./data/navs.json");

const server = express();

server.use(express.static(__dirname + "/public"));

//.use is middleware and is saying root here and static is saying to use the public folder. __dirname is a global variable that is the path to the current directory. The + is saying to add the public folder to the end of the path.

server.engine("html", es6Renderer);
server.set("views", "views");
server.set("view engine", "html");

server.get("/", (req, res) => {
  res.render("index", {
    locals: {
      title: "Video Server 203",
      navs
    },
    partials: {
      footer: "partials/footer",
      header: "partials/header",
      main: "partials/main/landing",
    },
  });
});

server.get("/contact-us", (req, res) => {
  res.render("index", {
    locals: {
      title: "Video Server 203",
      navs
    },
    partials: {
      footer: "partials/footer",
      header: "partials/header",
      main: "partials/main/contact-us",
    },
  });
});

server.get("/gallery", (req, res) => {
  res.render("index", {
    locals: {
      title: "Video Server 203",
      navs
    },
    partials: {
      footer: "partials/footer",
      header: "partials/header",
      main: "partials/main/gallery",
    },
  });
});

server.get("/about", (req, res) => {
  res.render("index", {
    locals: {
      title: "Video Server 203",
      navs
    },
    partials: {
      footer: "partials/footer",
      header: "partials/header",
      main: "partials/main/about",
    },
  });
});

server.get("/landing", (req, res) => {
  res.render("index", {
    locals: {
      title: "Video Server 203",
      navs
    },
    partials: {
      footer: "partials/footer",
      header: "partials/header",
      main: "partials/main/landing",
    },
  });
});

server.get("/heartbeat", (req, res) => {
  res.json({ is: "working" });
});

server.listen(8080, () => {
  console.log("The server is listening at PORT 8080");
});
