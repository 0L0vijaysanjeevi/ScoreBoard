let ho = document.getElementById("homescore")
let go = document.getElementById("guestscore")
const HIGHLIGHT = "#2596be";
const NORMAL = ""; 

function add1h(){
    ho.innerText = (parseInt(ho.innerText) + 1)
}

function add2h(){
    ho.innerText = (parseInt(ho.innerText) + 2)
}

function add3h(){
    ho.innerText = (parseInt(ho.innerText) + 3)
}

function add1g(){
    go.innerText = (parseInt(go.innerText) + 1)
}

function add2g(){
    go.innerText = (parseInt(go.innerText) + 2)
}

function add3g(){
    go.innerText = (parseInt(go.innerText) + 3)
}

function newg(){
    ho.innerText = 0
    go.innerText = 0
}


function updateColors() {
  const h = parseInt((ho.textContent || "").trim(), 10) || 0;
  const g = parseInt((go.textContent || "").trim(), 10) || 0;
  if (h === g) {
    ho.style.color = NORMAL;
    go.style.color = NORMAL;
  } else if (h > g) {
    ho.style.color = HIGHLIGHT;
    go.style.color = NORMAL;
  } else {
    ho.style.color = NORMAL;
    go.style.color = HIGHLIGHT;
  }
}

document.addEventListener("click", (e) => {
  if (e.target.closest("button, [role='button']")) {
    setTimeout(updateColors, 0);
  }
});
