
console.log("Your index.js file is loaded correctly!");
<script>
	function bounce(bouncingCount, speed) {
		var top = 200;
		var speedRatio = speed / top;
		var heightRatio = top / bouncingCount;

		for (var i = 1; i <= bouncingCount; i++) {
			$('#image2').animate({
				'bottom' : top
			}, speed);
			$('#image2').animate({
				'bottom' : 0
			}, speed / 2);
			top = top - (heightRatio);
			speed = speedRatio * top;
		}
	}

	$("#image2").click(function() {
		bounce(10, 500);
	});
</script>
  