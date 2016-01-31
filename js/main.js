function readDeviceOrientation() {
                 		
    if (Math.abs(window.orientation) === 90) {
        // Landscape
        document.getElementById("orientation").innerHTML = "LANDSCAPE 90";
    } else if (Math.abs(window.orientation) === -90) {
    	// Portrait
    	document.getElementById("orientation").innerHTML = "LANDSCAPE -90";
    } else if (Math.abs(window.orientation) === 0) {
    	// Portrait
    	document.getElementById("orientation").innerHTML = "PORTRAIT 0";
    } else if (Math.abs(window.orientation) === 180) {
    	// Portrait
    	document.getElementById("orientation").innerHTML = "PORTRAIT 180";
    }
}

window.onorientationchange = readDeviceOrientation;