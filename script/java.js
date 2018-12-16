window.onscroll = function() {glisse()};

function glisse() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("navbar").style.position ="";
		document.getElementById("entre").style.position ="";
		document.getElementById("navbar").style.top = "-57px";
		document.getElementById("entre").style.top = "-100px";
		document.getElementById("navbar").style.opacity = "0.4";
		document.getElementById("gotop_bouton").style.display = "block";

	} else {
		document.getElementById("navbar").style.position ="";
		document.getElementById("entre").style.position ="";
		document.getElementById("navbar").style.top = "0px;";
		document.getElementById("entre").style.top = "7%";
		document.getElementById("navbar").style.opacity = "1";
		document.getElementById("gotop_bouton").style.display = "none";}
		// document.getElementById("imagetopa").style.opacity = "1";
		// document.getElementById("imagetop").style.opacity = "1";
	}

function changecote() {
	var slide = document.getElementById("slide");
	slide.style.left="0px";
	var image_slide_haut = document.getElementById("image_slide_haut");
 	var info= document.getElementById("info");
	var nom=document.getElementById("nom");
	var prenom=document.getElementById("prenom"); 
	var age=document.getElementById("age");
	var adresse=document.getElementById("adresse");
	var image_slide_bas =document.getElementById("image_slide_bas");

	image_slide_haut.style.opacity="1";
	info.style.opacity="1";
	nom.style.opacity="1";
	prenom.style.opacity="1";
	age.style.opacity="1";
	adresse.style.opacity="1";
	image_slide_bas.style.opacity="1";}

function normalcote() {
	var slide = document.getElementById("slide");
	slide.style.left="-10%";

	var image_slide_haut = document.getElementById("image_slide_haut");
 	var info= document.getElementById("info");
	var nom=document.getElementById("nom");
	var prenom=document.getElementById("prenom"); 
	var age=document.getElementById("age");
	var adresse=document.getElementById("adresse");
	var image_slide_bas =document.getElementById("image_slide_bas");

	image_slide_haut.style.opacity="0";
	info.style.opacity="0";
	nom.style.opacity="0";
	prenom.style.opacity="0";
	age.style.opacity="0";
	adresse.style.opacity="0";
	image_slide_bas.style.opacity="0";}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 100;
  document.documentElement.scrollTop = 100;
}
