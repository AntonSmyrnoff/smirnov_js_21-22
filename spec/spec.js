var app = require('../js/script.js');

var a = 2;
var n = 4;


describe("checkNumber", function() {
		it("проверяет а на целочисленность", function() {
			var result = app.checkNumber(a);
			expect(result).toBe(true);	
		})
	 })

describe("pow", function() {
		it("возводит а в степень n", function() {
			var result = app.pow(a, n);
			expect(result).toBe(16);	
		})
	 })



