// brings all tabs header
let tabs = document.querySelectorAll(".tabs li");
console.log(tabs);
let tabsArray = Array.from(tabs);
console.log(tabsArray);

let divs = document.querySelectorAll(".content div");
console.log(divs);
let divsArray = Array.from(divs);
console.log(divsArray);

tabsArray.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    // remove class active
    tabsArray.forEach((tab) => {
      tab.classList.remove("active");
    });
    // add class active to target
    e.currentTarget.classList.add("active");
    // hide all tabs conent
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    // print tab index
    console.log();
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "block";
  });
});
