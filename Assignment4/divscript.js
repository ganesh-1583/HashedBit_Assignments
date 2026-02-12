function createDiv(width, height, text) {
    const container = document.getElementById("container");
    const newDiv = document.createElement("div");

    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";
    newDiv.textContent = text;

    newDiv.classList.add("created-div");
    container.appendChild(newDiv);
}

createDiv(140, 100, "Hello World");
createDiv(50,20,"This is new div");