const noBtn = document.getElementById("noBtn");

const moveButton = () => {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  const randX = Math.random() * maxX;
  const randY = Math.random() * maxY;

  noBtn.style.left = `${randX}px`;
  noBtn.style.top = `${randY}px`;
};

noBtn.addEventListener("mousemove", moveButton);
noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("click", moveButton);

const yesBtn = document.getElementById("yesBtn");
const overlay = document.getElementById("overlay");

yesBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
});

function closeModal() {
  overlay.style.display = "none";
}

//Si quieres que al cerrar le redirija a tu chat de WhatsApp con un mensaje, solo quita el commit, reemplaza tu número y deja que el código haga lo suyo...
/*
function closeModal() {
  const numero = "Aquí va tu número de WhatsApp"; // Reemplaza con tu número de WhatsApp y listo :) ft NINELGOD
  const mensaje = encodeURIComponent("Te perdono, eres lo mejor que me ha pasado ❤️ Te quiero.");
  const url = `https://wa.me/${numero}?text=${mensaje}`;

  window.location.href = url;
}*/
