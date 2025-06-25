const counter = document.getElementById("counter");
const clickBtn = document.getElementById("clickMeBtn");

let count = 0;

function updateCounter(){
    count++;
    counter.textContent = "Click count: " + count;
}

clickBtn.addEventListener("click", updateCounter);
