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
  "/contact": "/pages/contact.html",
};

async function handleLocation() {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main").innerHTML = html;

  // adds the hover effect for letters after some period
  const letters = document.querySelectorAll(".text-animate");
  setTimeout(() => {
    letters.forEach((letter) => {
      letter.classList.replace("text-animate", "text-animate-hover");
    });
  }, 4000);

  // associates form submition function with the form
  if (path === "/contact") {
    const form = document.getElementById("form");
    form.addEventListener("submit", (e) => submitForm(e, form));
  }
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

// sends the form as an email to my email address
function submitForm(e, form) {
  e.preventDefault();

  emailjs.sendForm("service_nveufte", "template_ng4rmqq", form).then(
    () => {
      alert("SUCCESS! Your message has been sent.");
      form.reset();
    },
    (error) => {
      alert("FAILED! Please try again.");
      console.log("Error: ", error.message);
    }
  );
}
