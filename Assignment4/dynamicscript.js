const textEl = document.getElementById("text-container");
const colorInput = document.getElementById("colorbox");
const colorBtn = document.getElementById("colorchange");
const fontSizeInput = document.getElementById("fontsize");
const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underline");
const boldBtn = document.getElementById("bold");
const fontList = document.getElementById("list");
const getStyleBtn = document.getElementById("getstyle");
const cssPropsP = document.getElementById("css-props");

colorBtn.addEventListener("click", () => {
    const c = colorInput.value.trim();
    if (c) textEl.style.color = c;
});

fontSizeInput.addEventListener("input", () => {
    textEl.style.fontSize = fontSizeInput.value + "px";
});

italicBtn.addEventListener("click", () => {
    textEl.style.fontStyle =
        textEl.style.fontStyle === "italic" ? "normal" : "italic";
});

underlineBtn.addEventListener("click", () => {
    textEl.style.textDecoration =
        textEl.style.textDecoration === "underline" ? "none" : "underline";
});

boldBtn.addEventListener("click", () => {
    textEl.style.fontWeight =
        textEl.style.fontWeight === "bold" ? "normal" : "bold";
});

fontList.addEventListener("change", () => {
    textEl.style.fontFamily = fontList.value;
});

getStyleBtn.addEventListener("click", () => {
    const style = window.getComputedStyle(textEl);
    const props = [
        `color: ${style.color};`,
        `font-size: ${style.fontSize};`,
        `font-family: ${style.fontFamily};`,
        `text-decoration: ${style.textDecorationLine};`,
        `font-style: ${style.fontStyle};`,
        `font-weight: ${style.fontWeight};`
    ];
    cssPropsP.textContent = props.join(" ");
});