/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

const textPath = document.querySelector("#text-path");

const h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';

document.addEventListener('DOMContentLoaded', e => {
  let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  textPath.setAttribute("startOffset", (percent * 20))
});


document.addEventListener("scroll", e => {
  let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    textPath.setAttribute("startOffset", (-percent * 20))
  } else {
    textPath.setAttribute("startOffset", (percent * 20))
  }
});