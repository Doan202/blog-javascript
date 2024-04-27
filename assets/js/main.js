//lay the p
var paragraph = document.getElementsByClassName("myParagraph");
$(document).ready(function () {

	$("html, body").click(function(event) {
		var resetDefault =  {
			"background-color": "#fff",
		};
        // Kiểm tra xem phần tử được click có phải là html hoặc body hay không
        if (event.target.tagName !== "HTML" && event.target.tagName !== "BODY") {
            // Nếu không phải là html hoặc body, không làm gì cả
			$(".box div").click(function () {
				var background = $(this).attr("background-color");
				var color = $(this).attr("color");
		
				$("p").css({
					"background-color": background,
					"color": color,
				});
		
				// console.log(color);
			});
			$(".btn-plus").click(function () {
				var fontsizefirst = parseInt($("p").css("font-size"));
				var background = $(this).attr("background-color");
				var color = $(this).attr("color");
				$("p").css("font-size", fontsizefirst + 2 + "px");
				if (fontsizefirst > 25) {
					$("p").css("color", "yellow");
					console.log("trên 25")
				}
				else if (14 < fontsizefirst && fontsizefirst < 21) {
					$("p").css("color", "violet");
					console.log("từ 14-21")
		
				}
				else {
					console.log("else")
					$("p").css("color", "green");
				}
				console.log(fontsizefirst);
		
			}
			);
			$(".btn-minus").click(function () {
				var fontsizefirst = parseInt($("p").css("font-size"));
				$("p").css("font-size", fontsizefirst - 1 + "px");
				if (fontsizefirst <= 10) {
					$("p").css("color", "red");
				}
				else if (13 < fontsizefirst && fontsizefirst < 22) {
					$("p").css("color", "black");
				}
				else {
					$("p").css("color", "blue");
				}
			});
        } else {
        
        // Thực hiện hành động reset CSS ở đây
        // Ví dụ: reset các thuộc tính CSS của một phần tử có id là "elementId"
		$("p").css(resetDefault);
	}
    });
});

