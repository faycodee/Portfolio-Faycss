const menu = document.getElementById("menu");
const menu2 = document.getElementById("menu2");
const actions = document.getElementById("actions");

function applic1() {
  menu.style.display = "none";
  menu2.style.display = "block";
  actions.style.display = "block";
}
function applic2() {
  menu.style.display = "block";
  menu2.style.display = "none";
  actions.style.display = "none";
}

function signup() {
  location.href = "signup.html";
}
