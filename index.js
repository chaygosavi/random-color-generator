const body = document.body;
const btn = document.querySelector("button");
const span = document.querySelector("span");

function randomColorGenerator() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return (randomColor = `rgb(${red}, ${green}, ${blue})`);
}

btn.addEventListener("click", () => {
  const randomColor = randomColorGenerator();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
});
