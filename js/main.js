//Select the button from the dom
let backToTopButton = document.querySelector(".back-to-top");

//On scroll execute the scroll Function
window.onscroll = function () {
  scrollFunction();
};

//If the body is scrolled more than 40 it display the button
function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    backToTopButton.style.opacity = "100%";
    backToTopButton.style.pointerEvents = "auto";
  } else {
    backToTopButton.style.opacity = "0%";
    backToTopButton.style.pointerEvents = "none";
  }
}

//Go to top 0 fonction
function topFunction() {
  document.body.scrollTop = 0; // This is for safari
  document.documentElement.scrollTop = 0; // This is for Chrome
}

backToTopButton.addEventListener("click", () => {
  topFunction();
});
