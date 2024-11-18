let text = document.getElementById("changeText");
let image = document.getElementById("img").src = "./images/off.png";
let offText = document.getElementById("changeText").innerHTML = "Off";
let back = document.getElementById("backgroundChang").style.background =
  "#333";
let bulbon = document.getElementById("on");
let bulboff = document.getElementById("off").style.background = "#222";
document.getElementById("off").style.color = "#fff";

function onbtn() {
  document.getElementById("img").src = "WhatsApp_Image_2024-09-23_at_4.19.36_PM-removebg-preview.png";
  text.innerHTML = "On";
  bulbon.style.background = "#f1c40f";
  bulbon.style.color = "#fff";
  document.getElementById("backgroundChang").style.backgroundColor = "#ffdd59";
  text.style.color = "#e84118";
  document.getElementById("off").style.backgroundColor = "#ecf0f1";
  document.getElementById("off").style.color = "#222";
}

function offbtn() {
  document.getElementById("img").src = "WhatsApp_Image_2024-09-23_at_4.08.14_PM__1_-removebg-preview.png";
  text.innerHTML = "Off";
  text.style.color = "gray";
  document.getElementById("off").style.backgroundColor = "#222";
  document.getElementById("off").style.color = "#fff";
  document.getElementById("on").style.backgroundColor = "#fff";
  document.getElementById("on").style.color = "#222";
  document.getElementById("backgroundChang").style.backgroundColor = "#333";
}