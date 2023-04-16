import "./scss/style.scss";

// ROUTER IMPLEMENTATION

const navLinks = document.querySelectorAll(".menu-link");
navLinks.forEach((elem) => elem.addEventListener("click", route));

function route(event) {
  event = event || window.event;
  event.preventDefault();
  if (event.target)
    window.history.pushState({}, "", event.target.closest("a").href);
  handleLocation();
}

const routes = {
  404: "/pages/404.html",
  "/": "/pages/home.html",
  "/about": "/pages/about.html",
  "/projects": "/pages/projects.html",
  "/contactme": "/pages/contactme.html",
};

async function handleLocation() {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main").innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
