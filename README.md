## ScoreBoard

Simple web-based scoreboard for tracking Home vs Guest points.

### Demo
https://score-board-0.netlify.app/

### Features
- Increment Home or Guest score by 1, 2, or 3 points
- Reset scores with "New Game"
- Leader highlighting (higher score shown in blue)
- Responsive, minimal UI built with HTML/CSS/JS

### Tech
- HTML, CSS, plain JavaScript
- Fonts via Google Fonts
- Deployed on Netlify

### Files
- index.html — UI markup
- index.css — styles
- index.js — interaction logic

### Usage
1. Open index.html in a browser (or use the demo link).
2. Click +1/+2/+3 buttons under Home or Guest to update scores.
3. Click New Game to reset to 0.

### Code snippets
index.js core functions:
```js
let ho = document.getElementById("homescore")
let go = document.getElementById("guestscore")
const HIGHLIGHT = "#2596be";
const NORMAL = "";

function add1h(){ ho.innerText = (parseInt(ho.innerText) + 1) }
function add2h(){ ho.innerText = (parseInt(ho.innerText) + 2) }
function add3h(){ ho.innerText = (parseInt(ho.innerText) + 3) }
function add1g(){ go.innerText = (parseInt(go.innerText) + 1) }
function add2g(){ go.innerText = (parseInt(go.innerText) + 2) }
function add3g(){ go.innerText = (parseInt(go.innerText) + 3) }
function newg(){ ho.innerText = 0; go.innerText = 0 }

function updateColors() {
  const h = parseInt((ho.textContent || "").trim(), 10) || 0;
  const g = parseInt((go.textContent || "").trim(), 10) || 0;
  if (h === g) {
    ho.style.color = NORMAL; go.style.color = NORMAL;
  } else if (h > g) {
    ho.style.color = HIGHLIGHT; go.style.color = NORMAL;
  } else {
    ho.style.color = NORMAL; go.style.color = HIGHLIGHT;
  }
}
document.addEventListener("click", (e) => {
  if (e.target.closest("button, [role='button']")) setTimeout(updateColors, 0);
});
```

### Improvements & TODO
- Store scores in localStorage for persistence
- Add keyboard shortcuts and undo
- Make buttons accessible (aria-labels) and improve contrast variables
- Extract repeated functions to a generic updateScore(team, value)
- Add tests and CI

### License
Add a license file (MIT recommended) if you want open-source reuse.

### Contributing
Fork, edit files, and open a PR. Describe changes and test in the demo.
