window.onscroll = function() {glisse()};

function glisse() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("navbar").style.position ="";
		document.getElementById("entre").style.position ="";
		document.getElementById("navbar").style.top = "-57px";
		document.getElementById("entre").style.top = "-100px";
		document.getElementById("navbar").style.opacity = "0.4";

	} else {
		document.getElementById("navbar").style.position ="";
		document.getElementById("entre").style.position ="";
		document.getElementById("navbar").style.top = "0px;";
		document.getElementById("entre").style.top = "7%";
		document.getElementById("navbar").style.opacity = "1";}
		// document.getElementById("imagetopa").style.opacity = "1";
		// document.getElementById("imagetop").style.opacity = "1";
	}

function changecote() {
	var slide = document.getElementById("slide");
	slide.style.left="0px";
	var imagecote = document.getElementById("imagecote");
 	var info= document.getElementById("info");
	var nom=document.getElementById("nom");
	var prenom=document.getElementById("prenom"); 
	var age=document.getElementById("age");
	var adresse1=document.getElementById("adresse1");

	imagecote.style.opacity="1";
	info.style.opacity="1";
	nom.style.opacity="1";
	prenom.style.opacity="1";
	age.style.opacity="1";
	adresse1.style.opacity="1";}

function normalcote() {
	var slide = document.getElementById("slide");
	slide.style.left="-10%";

	var imagecote = document.getElementById("imagecote");
	var imagecote = document.getElementById("imagecote");
 	var info= document.getElementById("info");
	var nom=document.getElementById("nom");
	var prenom=document.getElementById("prenom"); 
	var age=document.getElementById("age");
	var adresse1=document.getElementById("adresse1");

	imagecote.style.opacity="0";
	info.style.opacity="0";
	nom.style.opacity="0";
	prenom.style.opacity="0";
	age.style.opacity="0";
	adresse1.style.opacity="0";}


          
 // info.style.opacity=nom.style.opacity=prenom.style.opacity=age.style.opacity=adresse1.style.opacity=

