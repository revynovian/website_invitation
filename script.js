// nama tamu
const params = new URLSearchParams(document.location.search);
  let tamu = params.get("yth");
  if (tamu) {
    console.log(tamu)
    document.getElementById("nama-tamu").innerHTML = tamu;
}

// setting button dan scroll
const mySong = document.getElementById("mySong");
const bukaUndangan = document.getElementById("button_open");
const tombolIcon = document.getElementById("button_music");
const logoIcon = document.getElementById("icon_music");

// header button
function showIconMusic() {
  tombolIcon.style.visibility = "visible";
}

function disableScroll() {
  document.body.classList.add("stop-scrolling");
}

function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}

bukaUndangan.addEventListener("click", () => {
  mySong.play();
  showIconMusic();
  enableScroll();
})

disableScroll();

// back to top when reload
const home = document.getElementById("header");
home.scrollIntoView();

// change icon play/pause
tombolIcon.addEventListener("click", () => {
  if(mySong.paused) {
    mySong.play();
    logoIcon.classList.add("button_icon_c");
    logoIcon.classList.remove("button_icon_d");
  }else {
    mySong.pause();
    logoIcon.classList.remove("button_icon_c");
    logoIcon.classList.add("button_icon_d");
  }
})     

// animation on scroll
const observer = new IntersectionObserver((entries)=> {
  entries.forEach((entry) => {
    entry.target.classList.toggle('animate', entry.isIntersecting);
  })
})
const hiddenElements = document.querySelectorAll('.anim');

hiddenElements.forEach((e)=> observer.observe(e))