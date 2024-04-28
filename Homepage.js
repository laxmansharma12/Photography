let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
// -----------------------------------------------------
// Function to handle the scroll event
function handleScroll() {
	// Calculate the scroll position relative to the document height
	const scrollPosition = window.scrollY;
	const windowHeight = window.innerHeight;
	const documentHeight = document.body.clientHeight;
	const scrollPercentage =
		(scrollPosition / (documentHeight - windowHeight)) * 100;

	// Target the div by its ID
	const navbar = document.getElementById("Navbar");
	const navItem = document.querySelectorAll(".nav-link");
	const brand = document.getElementById("navbar-brand");

	// Check if scroll percentage is greater than or equal to 10%
	if (scrollPercentage >= 17) {
		navbar.style.backgroundColor = "#fff";
		navbar.style.position = "fixed";
		navItem.forEach((link) => {
			link.style.color = "#000";
		});
		brand.style.color = "#000";
	} else {
		navbar.style.backgroundColor = "";
		navbar.style.position = "";
		navItem.forEach((link) => {
			link.style.color = "";
		});
		brand.style.color = "";
	}
}

// Event listener for the scroll event
window.addEventListener("scroll", handleScroll);
// -------------------------------------------------------------------------
//nav togger functions
let lines = document.getElementById("lines");
let cross = document.getElementById("cross");

lines.addEventListener("click", open);
cross.addEventListener("click", close);

function open() {
	cross.style.display = "block";
	lines.style.display = "none";
}
function close() {
	cross.style.display = "none";
	lines.style.display = "block";
}
