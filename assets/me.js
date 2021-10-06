if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){

	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "$ zuhn.wtf", "$ zuhn.wt", "$ zuhn.w", "$ zuhn.", "$ zuhn", "$ zuh", "$ zu", "$ z", "$  ", "$ z", "$ zu", "$ zuh", "$ zuhn", "$ zuhn.", "$ zuhn.w", "$ zuhn.wt", "$ zuhn.wtf"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
