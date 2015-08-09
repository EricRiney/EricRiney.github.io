
function init(){
	var h1tags = document.getElementsByTagName("h1");
	h1tags[0].onclick = changeColor;
	h1tags[1].onclick = changeColor;
}

function changeColor(){
	this.innerHTML = "Click Again";
	var randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
	this.style.color = randomColor;
}

function toggleImg() {
	var img = document.getElementById("doge");
	var isImgVisible = img.style.visibility != "visible";
	img.style.visibility = isImgVisible ? "visible" : "hidden";

}

onload = init;

$(function() {
	

	//$(".lead").html("meow");

	$(".game-wrapper").on('click', function(){
		$(".game-wrapper").slideToggle(1000).slideToggle(1000);
	});

	var content = "new awesome content";
	
	$("button").on('click', function() {
		var lablId = $(this).attr("data-spanid")
		$('#' + lablId).toggle(500);		
		$('#' + ".label-body").html(content);

		//$("#defaultlbl").toggle(500);
	});
	$('li').on('click', function(){
		$(this).next().hide();
	});
	//$("#defaultbtn").html("meow");
	//$("#primarybtn").toggle();
	//$("#defaultlbl").hide();
	//$("#doge").hide(1000);
});
