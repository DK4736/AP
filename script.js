// 🎵 MUSIC (mobile-safe)
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

musicBtn.addEventListener("click", () => {
  music.play().catch(() => {});
  musicBtn.style.display = "none";
});


// 💌 ONE CLEAN MESSAGE (line-by-line feel)
const fullText = `Umida... I’ve been thinking about everything 💔

And I realize how deeply I hurt you...

You didn’t deserve that...

You are the calm in my chaos...
The warmth in my cold days...

Losing you feels like losing a part of me...

I know sorry is just a word...
But I want to prove it with actions...

Please... give me one chance 🥺`;

const textEl = document.getElementById("text");

let i = 0;

function typeEffect() {
  if (i < fullText.length) {
    textEl.innerHTML += fullText[i];
    i++;
    setTimeout(typeEffect, 35);
  } else {
    document.getElementById("buttons").classList.remove("hidden");
  }
}

typeEffect();


// 💖 FORGIVE
function forgive() {
  textEl.innerHTML = `You made me the happiest person 💖
I will prove it every day.`;

  document.getElementById("buttons").style.display = "none";

  const final = document.getElementById("final");
  final.classList.remove("hidden");
  final.innerText = "Thank you for staying with me 🥹💍";
}


// 😏 ESCAPING BUTTON (works on mobile + desktop)
const noBtn = document.getElementById("noBtn");

function moveBtn() {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
}

noBtn.addEventListener("mouseover", moveBtn);
noBtn.addEventListener("touchstart", moveBtn);


// 💖 FLOATING HEARTS (optimized)
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart-float";
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (18 + Math.random() * 20) + "px";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 400);