// ===== AUDIO PLAY/PAUSE =====
const music = document.getElementById("bg-music");
const playBtn = document.getElementById("playPause");
playBtn.addEventListener("click", () => {
    if (music.paused) music.play();
    else music.pause();
});

// ===== LOVEFALL =====
window.onload = function() {
    const confetti = document.getElementById('confetti');
    for (let i = 0; i < 40; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.animationDelay = Math.random() * 6 + 's';
        piece.style.backgroundColor = ['#ff69b4', '#ffb6c1', '#ffd700'][Math.floor(Math.random() * 3)];
        confetti.appendChild(piece);
    }
}

// ===== FOTO KENANGAN FULLSCREEN =====
function openFullscreen(img) {
    const newWin = window.open("");
    newWin.document.write('<img src="' + img.src + '" style="width:100%;height:100%;object-fit:contain;">');
    newWin.document.title = img.alt;
}