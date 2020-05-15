var intro = document.querySelector(".intro");
var enter = document.querySelector("a.enter");

enter.onclick = function toggleIntro() {
    intro.classList.toggle('hidden');
}