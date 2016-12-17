

$(document).ready(function(){

var imageRotator = {
	
	initialze: function() {

		var itemCount = $(".rotatingimage").length;

		var currentItem = 0;

		$(".rotatingimage").eq(currentItem).fadeIn(1);

		var loop = setInterval(function(){
			$(".rotatingimage").eq(currentItem).fadeOut(2500);
			if(currentItem == itemCount -1){
				currentItem = 0;
			} else {
				currentItem++;
			}
			$(".rotatingimage").eq(currentItem).fadeIn(2500);
			}, 5000);
		}
	};

imageRotator.initialze();

// Email Modal

$("#close").click(modalClose);

$("#mailicon").click(modalOpen);
   
});


function modalOpen() {
  document.getElementById("cover").style.display = "block";
  document.getElementById("modal").style.display = "block";
  setTimeout(function(){
    document.getElementById("cover").style.opacity = 1;
    document.getElementById("modal").style.opacity = 1;
  },1); // wait just 1/1000 of a sec for style.display to finish
}
function modalClose() {
  // document.getElementById("cover").style.opacity = 0;
  document.getElementById("modal").style.opacity = 0;
  setTimeout(function(){
    //document.getElementById("cover").style.display = "none";
    document.getElementById("modal").style.display = "none";
  },1000); // match the css 1s transition
}




