// Elements for Dom manipulation


let header = document.querySelector(".header");
let navbar = document.querySelector(".nav-links");
let navcloser = document.getElementById("nav-closer");
let heroSection = document.querySelector(".hero-section");
let scroller=document.getElementById("scroller");

// Sticky navbar

window.addEventListener("scroll", () => {
  if (window.scrollY > heroSection.offsetTop) {
    header.classList.add("fix-header");
  } else {
    if (header.classList.contains("fix-header")) {
      header.classList.remove("fix-header");
    }
  }
});

// Responsive navbar

function showNav() {
  navbar.style.display = "flex";
  navbar.classList.add("responsive-nav");
  navcloser.style.display = "inline-block";
  document.body.style.overflow = "hidden";
}
function closeNav() {
  if (navbar.classList.contains("responsive-nav")) {
    navbar.style.display = "none";
    navbar.classList.remove("responsive-nav");
    navcloser.style.display = "none";
    document.body.style.overflow = "visible";
  }
}

// Scroll to element feature

function scrolltoElement(elemClass){
    let elem=document.getElementsByClassName(elemClass)[1];
    if(elem){
      elem.scrollIntoView({ behavior: "smooth"});
    }
}

//  Scroll to top
scroller.addEventListener("click",()=>{
    heroSection.scrollIntoView({behavior: "smooth"});
});



