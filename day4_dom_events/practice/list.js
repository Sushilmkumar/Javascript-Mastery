const item = document.getElementById("itemInput");
const addBtn = document.getElementById("addItemBtn");
const clearBtn = document.getElementById("clearListBtn");

function addItem(){
    const itemVal = item.value.trim();
    if(itemVal){
        const list = document.getElementById("itemList");
        const newItem = document.createElement("li");
        newItem.textContent = itemVal;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.addEventListener("click", () => {
            newItem.remove();
        });
        newItem.appendChild(deleteBtn);
        list.appendChild(newItem);
        item.value = ""; // Clear the input field after adding the item
    }
}

addBtn.addEventListener("click", addItem);
clearBtn.addEventListener("click", () => {
    const list = document.getElementById("itemList");
    list.innerHTML = "";
})

document.querySelector