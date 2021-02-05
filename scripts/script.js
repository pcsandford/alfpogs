"use strict"

const today = new Date();
const currentHour = today.getHours();

if (currentHour < 12) {
  document.getElementById("greeting").textContent = "Good morning!";
} else if (currentHour < 18) {
  document.getElementById("greeting").textContent = "Good afternoon!";
} else {
  document.getElementById("greeting").textContent = "Good evening!";
}