var rect = {

	perimeter: (x, y) => (2*(x+y)), // arrows function assignments for easy scope & avoid Javascript OOP
	area: (x, y) => (x*y)
};


function computeRect(l, b) {

	console.log("computing for rectangle with l = " + l + " and b = " + b);
	
	if ( l <= 0 || b<= 0) {
		console.log('rectangle dimensions > 0');
	}
	else {
		console.log("Area of rectangle is " + rect.area(l, b));
		console.log("Perimeter of rectangle is " + rect.perimeter(l, b));
	}
}


computeRect(2, 4);
computeRect(3, -4);
computeRect(5, 0);
computeRect(7, 4);
