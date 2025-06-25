const heading = document.getElementById("heading");
const button = document.getElementById("changeTextBtn");
const colorButton = document.getElementById("changeColorBtn");

// Function to change the text of the heading
function changeHeadingText(){
    heading.textContent = "Text Changed!";
}
button.addEventListener("click", changeHeadingText);
colorButton.addEventListener("click", () => {
    heading.style.color = heading.style.color === "black" ? "blue" : "black";
});

const input = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const greetMsg = document.getElementById("greetingMessage");

greetBtn.addEventListener("click", () => {
    const name = input.value.trim();
    if (name){
        greetMsg.textContent = "Hello, " + name + "!";
    }else
        greetMsg.textContent = "Please enter your name.";
});