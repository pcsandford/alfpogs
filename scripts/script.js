"use strict"

//set the welcome based on time of day
const today = new Date();
const currentHour = today.getHours();

if (currentHour < 12) {
  document.getElementById("greeting").textContent = "Good morning!";
} else if (currentHour < 18) {
  document.getElementById("greeting").textContent = "Good afternoon!";
} else {
  document.getElementById("greeting").textContent = "Good evening!";
}

//toggle the light and dark modes

let darkFlag = false;

const r = document.querySelector(":root");
const darkButton = document.getElementById("buttonDark");
const lightButton = document.getElementById("buttonLight");
const darkModeMessage = document.getElementById("darkModeMessage");

darkButton.addEventListener("click",() => {
	if(!darkFlag) {
		console.log("go dark");
		r.style.setProperty('--light-background', '#30336B');
		r.style.setProperty('--text-light-base', '#DCDDE1');
		r.style.setProperty('--text-light-accent', '#ECCC68');
		r.style.setProperty('--text-light-subtle', '#DCDDE1');

		lightButton.style.textDecoration = "none";
		darkButton.style.textDecoration = "underline";

		darkModeMessage.style.display = "inline-block";



		darkFlag = true;
	} else {
		return;
	}
});

lightButton.addEventListener("click",() => {
	if (darkFlag) {
		console.log("go light");
	r.style.setProperty('--light-background', '#FFF');
	r.style.setProperty('--text-light-base', '#34495E');
	r.style.setProperty('--text-light-accent', '#C0392B');
	r.style.setProperty('--text-light-subtle', '#7F8FA6');

	lightButton.style.textDecoration = "underline";
		darkButton.style.textDecoration = "none";

		darkModeMessage.style.display = "none";

	darkFlag = false;
} else {
	return;
}

});


