var practice = document.querySelector(".pracArea");
var home = document.querySelector(".home");
var vision = document.querySelector(".ourVi");
var att = document.querySelector(".att");
var cont = document.querySelector(".cont");

home.addEventListener("click",function(){
	window.scrollTo(0,0);
})

practice.addEventListener("click",function(){
	window.scrollTo(0,1030);
})

vision.addEventListener("click",function(){
	window.scrollTo(0,1550);
})

att.addEventListener("click",function(){
	window.scrollTo(0,2300);
})

cont.addEventListener("click",function(){
	window.scrollTo(0,2950);
})