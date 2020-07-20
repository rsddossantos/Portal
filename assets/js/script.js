var slideItem=0;

window.onload=function(){
	setInterval(passarSlide,5000);
	
	var slidewidth=document.getElementById("slideshow").offsetWidth;
	var objs=document.getElementsByClassName("slide");
	for (var i in objs){
		objs[i].style.width=slidewidth;
	}
}

function passarSlide(){
	var slidewidth=document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("bolinha")[slideItem].style.backgroundColor="transparent";
	if(slideItem>=3){
		slideItem=0
	}else{
		slideItem++;
	}
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft="-"+(slidewidth*slideItem)+"px";
	document.getElementsByClassName("bolinha")[slideItem].style.backgroundColor="white";
	
}
function mudarSlide(pos) {
	document.getElementsByClassName("bolinha")[slideItem].style.backgroundColor="transparent";
	slideItem=pos;
	var slidewidth=document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft="-"+(slidewidth*slideItem)+"px";
	document.getElementsByClassName("bolinha")[slideItem].style.backgroundColor="white"; // tentativa de pintar a bola da vez mas tem que ser colocado algo para limpar, senão fica pintada pra sempre */
}