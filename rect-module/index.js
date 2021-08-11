var rect = require("./rectangle"); // import rectangle module 
 

function computeRect(l, b) {

	console.log("computing for rectangle with l = " + l + " and b = " + b);
	
	rect(l, b, (err, rectangle) => { 
		if (err) {
			console.log("Error: ", err.message);

		}	
		else {
			console.log("rectangle area is " + rectangle.area());
			console.log("perimeter is " + rectangle.perimeter());
		}
	});
	console.log("This line is after the call to rect");

}


computeRect(2, 4);
computeRect(3, -4);
computeRect(5, 0);
computeRect(7, 4);
