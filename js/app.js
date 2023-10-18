const navBtn = document.querySelector(".hamburger");
const header = document.querySelector("header");
const navBar = document.querySelector("nav");

window.addEventListener("scroll", handleScroll);

function handleScroll() {
  const scrollHeight = window.scrollY;

  if (scrollHeight > 100) {
    header.classList.add("header-fixed");
  } else {
    header.classList.remove("header-fixed");
  }
}

navBtn.addEventListener("click", (e) => {
  document.querySelector(".header-logo").style.display = "none";
  navBar.className = "mobile-nav";
  navBar.children[1].style.display = "block";

  if (e.target.parentElement.parentElement.classList.contains("hamburger")) {
    e.target.parentElement.parentElement.style.order = "1";
    navBar.children[1].style.order = "2";
  }
});
