const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", () => {
  let hexacode = "#";
  for (let i = 0; i < 6; i++) {
    hexacode += hex[RandomNumber()];
  }

  color.innerText = hexacode;
  document.body.style.backgroundColor = hexacode;
});

let RandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
