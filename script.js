var flag = true;
function bold() {
    if (flag) {
    document.getElementById("text").style.fontWeight = "bold";
    }
    else {
        document.getElementById("text").style.fontWeight = "normal";
    }
    flag = !flag;
}
function italic() {
    if (flag) {
    document.getElementById("text").style.fontStyle = "italic";
    }
    else {
        document.getElementById("text").style.fontStyle = "normal";
    }
    flag = !flag;
}
function underline() {
    if (flag) {
    document.getElementById("text").style.textDecoration = "underline";
    }
    else {
        document.getElementById("text").style.textDecoration = "none";
    }
    flag = !flag;
}
function upperCase() {
    if(flag){
    document.getElementById("text").style.textTransform = "uppercase";
    }
    else {
        document.getElementById("text").style.textTransform = "none";
    }
    flag = !flag;
}
function lowerCase() {
    if(flag){
    document.getElementById("text").style.textTransform = "lowercase";
    }
    else {
        document.getElementById("text").style.textTransform = "none";
    }
    flag = !flag;
}
function capitalize() {
    if(flag){
    document.getElementById("text").style.textTransform = "capitalize";
    }
    else {
        document.getElementById("text").style.textTransform = "none";
    }
    flag = !flag;
}

function count() {
  var string = document.getElementById("text").value;
  if (string != undefined) var charCount = string.length;
  else charCount = 0;
  if (charCount != 0) var wordCount = 1;
  else wordCount = 0;
  var i = 0;
  while (i < charCount) {
    if (string[i] == " " || string[i] == "\n" || string[i] == "\t") wordCount++;
    i++;
  }
  document.getElementById("result").innerHTML =
    charCount + " " + "characters and " + wordCount + " " + "words";
}
function clearText() {
    document.getElementById("text").value = "";
    document.getElementById("text").style.fontWeight = "Normal";
    document.getElementById("text").style.fontStyle = "Normal";
    document.getElementById("text").style.textDecoration = "none";
    document.getElementById("text").style.textTransform = "none";

  document.getElementById("result").innerHTML ="0 characters and 0 words";
}
function openMenu() {
  const menuToggle = document.querySelector(".menu");
  const navigation = document.querySelector(".hamburger");
  menuToggle.classList.toggle("open");
  navigation.classList.toggle("open");
}
