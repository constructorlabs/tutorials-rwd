const btn = document.querySelector("#toggle-overlay");
const overlay = document.querySelector("#overlay");

btn.addEventListener('click', () => {
  overlay.classList.toggle("is-active")
})
