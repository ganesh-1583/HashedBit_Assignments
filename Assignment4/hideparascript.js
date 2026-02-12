function togglePara() {
    const para = document.getElementById("myPara");
    const btn = document.querySelector("button");

    if (para.style.display === "none") {
        para.style.display = "block";
        btn.textContent = "Hide Paragraph";
    } else {
        para.style.display = "none";
        btn.textContent = "Show Paragraph";
    }
}