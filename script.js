document.getElementById("changeColor").addEventListener("click", () => {
  document.getElementsByTagName("h2")[0].style.color = "blue";
});

var x = 10;
setInterval(() => {
  if (x >= 0) {
    document.getElementsByTagName("h2")[0].innerText = x;
    x--;
  }
}, 1000);
