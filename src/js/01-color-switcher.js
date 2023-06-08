
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
// document.querySelector('body')
console.log(document.querySelector('body').style.backgroundColor = getRandomHexColor() )
// getRandomHexColor()