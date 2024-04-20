//lay the p
var paragraph = document.getElementsByClassName("myParagraph");
$(document).ready(function () {
	$(".box div").click(function () {
		var background = $(this).attr("background-color");
		var color = $(this).attr("color");
		$("p").css("background-color", background);
		$("p").css("color", color);
		console.log(color);
	});
	$(".btn-plus").click(function () {
		var fontsizefirst = parseInt($("p").css("font-size"));
		var background = $(this).attr("background-color");
		var color = $(this).attr("color");
		$("p").css("font-size", fontsizefirst + 2 + "px");
		if (fontsizefirst > 25) {
			$("p").css("color", "yellow");
		}
		else if (14 < fontsizefirst < 21) {
			$("p").css("color", "violet");

		}
	}
	);
	$(".btn-minus").click(function () {
		var fontsizefirst = parseInt($("p").css("font-size"));
		$("p").css("font-size", fontsizefirst - 1 + "px");
		if (fontsizefirst <= 10) {
			$("p").css("color", "red");
		}
		else if (13 < fontsizefirst < 22) {
			$("p").css("color", "black");
		}
	});
});

