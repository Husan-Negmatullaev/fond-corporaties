document.addEventListener("DOMContentLoaded", () => {
	"use strict"
	const header = document.getElementById("header-fixed")
	const toggleNav = document.getElementById("toggle-nav")
	// const getPadding = header.offsetHeight

	// window.addEventListener("scroll", () => {
	// 	if (window.pageYOffset >= 200) {
	// 		header.classList.add('scrolled')
	// 		header.style.cssText = `
	// 			padding-top: ${getPadding}px !important;
	// 			top: -${getPadding}px !important;
	// 		`
	// 	} else { 
	// 		header.classList.remove('scrolled')
	// 		header.style.cssText = ``
	// 	}
	// })

})

const navBox = document.getElementById('navBox')
const sideNav = document.getElementById("side-nav")

function toggleNav() {
	navBox.classList.toggle("change");
	sideNav.classList.toggle("open")
}

// document.getElementById('name').addEventListener("keyup", (e) => {
// 	if (e.keyCode === 13) {
// 		document.getElementById('form-footer').submit()
// 	}
// })