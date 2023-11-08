// Activating menu links

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("active");
  }
}

links.forEach(ativarLink);

// Activating budget items

const parameters = new URLSearchParams(location.search);

function ativarProduto(parameter) {
  const element = document.getElementById(parameter);
  if (element) {
    element.checked = true;
  }
}
parameters.forEach(ativarProduto);

// Frequently Asked Questions

const questions = document.querySelectorAll(".faq button");

function ativarPergunta(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("active");
  const active = answer.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function eventosPerguntas(question) {
  question.addEventListener("click", ativarPergunta);
}

questions.forEach(eventosPerguntas);

//Bike Image galery
const gallery = document.querySelectorAll(".bicyle-images img");
const gallerycontainer = document.querySelector(".bicyle-images");

function changeImage(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 920px").matches;
  if (media) {
    gallerycontainer.prepend(img);
  }
}

function eventsGallery(img) {
  img.addEventListener("click", changeImage);
}

gallery.forEach(eventsGallery);

//Animation
if (window.SimpleAnime) {
  new SimpleAnime();
}
