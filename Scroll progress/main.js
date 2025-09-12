let el = document.querySelector(".scroller");
height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);

console.log("Finishx");
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
  console.log(scrollTop / height);
});
