// 🎵 Music
document.getElementById("musicBtn").onclick = () => {
  document.getElementById("music").play();
  document.getElementById("musicBtn").style.display = "none";
};

// 💌 Messages
const messages = [
  "Umida... I’ve been thinking about everything 💔",
  "And the more I think, the more I realize how deeply I hurt you...",
  "Not just what I did... but how it made you feel...",
  "You didn’t deserve that from me...",
  "You are the calm in my chaos...",
  "The warmth in my cold days...",
  "And losing you feels like losing a part of myself...",
  "I know 'sorry' is just a word...",
  "But I want to prove it with my actions...",
  "With patience... with change...",
  "If there is even a small place left in your heart...",
  "Please... let me fix what I broke 🥺"
];

let i = 0;
const textEl = document.getElementById("text");

function typeMessage() {
  if (i < messages.length) {
    let msg = messages[i];
    let j = 0;
    textEl.innerHTML = "";

    let interval = setInterval(() => {
      textEl.innerHTML += msg[j];
      j++;
      if (j === msg.length) {
        clearInterval(interval);
        i++;
        setTimeout(typeMessage, 1500);
      }
    }, 40);
  } else {
    document.getElementById("buttons").classList.remove("hidden");
  }
}

typeMessage();

// 💖 Forgive
function forgive() {
  document.getElementById("title").innerText = "You made me the happiest 💖";
  document.getElementById("text").innerText = "I will prove my love with actions, not just words.";

  document.getElementById("buttons").style.display = "none";

  const final = document.getElementById("final");
  final.classList.remove("hidden");
  final.innerText = "Thank you for staying with me, Umida 🥹💍";
}

// 😏 Escape button
document.getElementById("noBtn").onmouseover = () => {
  const btn = document.getElementById("noBtn");
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 80 + "%";
  btn.style.left = Math.random() * 80 + "%";
};

// 🌸 Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart-float";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (20 + Math.random() * 20) + "px";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 300);

// ✨ Sparkles
function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.innerHTML = "✨";
  sparkle.style.position = "absolute";
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 100 + "vh";
  sparkle.style.fontSize = (10 + Math.random() * 10) + "px";
  sparkle.style.opacity = Math.random();

  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 3000);
}
setInterval(createSparkle, 500);