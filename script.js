const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lightboxImg");

function openLb(src, alt=""){
  lbImg.src = src;
  lbImg.alt = alt;
  lb.classList.add("open");
}
function closeLb(){
  lb.classList.remove("open");
  lbImg.src = "";
}

document.addEventListener("click", e => {
  const t = e.target;
  if (t.matches('img[data-lightbox="1"]')) openLb(t.src, t.alt);
  if (t.id === "lightbox") closeLb();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLb();
});
