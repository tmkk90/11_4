function Phone(brand, price, color, productionYear) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.productionYear = productionYear;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " and the phone was produced in " + this.productionYear + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", 2016);
var iPhone5S = new Phone("Apple", 1250, "black", 2014);
var SamsungS2 = new Phone("Samsung", 500, "white", 2010);

iPhone6S.printInfo();
iPhone5S.printInfo();
SamsungS2.printInfo();