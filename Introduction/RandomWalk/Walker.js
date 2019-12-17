class Walker {
	var x, y;

	function Walker() {
		x = windowWidth/2;
		y = windowHeight/2;
	}

	function display() {
		stroke(0);
		point(x, y);
	}

	function step() {
		let choice = Math.floor(Math.random() * 4);

		if (choice == 0) {
			x += 1;
		} else if (choice == 1) {
			x -= 1;
		} else if (choice == 2) {
			y += 1;
		} else {
			y -= 1;
		}
	}
}
