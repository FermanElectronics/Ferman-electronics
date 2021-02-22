//nav scroll animation
const header = document.querySelector(".main-header");
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
//mail button
const insta_btn = Array.from(document.getElementsByClassName("insta-btn"));
insta_btn.forEach(page);
function page(element) {
  element.addEventListener("click", () => {
    location.href = "https://www.instagram.com/ferman_electronics/";
  });
}
//mail button
const cot_btn = Array.from(document.getElementsByClassName("cot-btn"));
cot_btn.forEach(mail);
function mail(element) {
  element.addEventListener("click", () => {
    location.href = "mailto:electronics.ferman.ventas@gmail.com";
  });
}