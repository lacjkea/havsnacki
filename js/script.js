let prevScrollpos = window.pageYOffset;
console.log("prev" + prevScrollpos);

const stickynav = document.querySelector(".navbar-nav");
const navbarbrand = document.querySelector(".navbar-brand");

window.onscroll = function () {
  console.log("prev" + prevScrollpos);
  let currentScrollPos = window.pageYOffset;
  console.log("cur" + currentScrollPos);
  if (prevScrollpos + 10 > currentScrollPos) {
    // stickynav.classList.remove("bg-dark");
    // navbarbrand.classList.remove("d-none");
    //document.getElementById("navbar").style.top = "0";
  } else if (prevScrollpos == 10) {
    stickynav.classList.remove("bg-dark");
    navbarbrand.classList.remove("d-none");
  } else {
    stickynav.classList.add("bg-dark");
    navbarbrand.classList.add("d-none");

    //document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};
