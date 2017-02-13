var app = require('../js/script.js');

describe("app", function() {
  it("should raise a to n", function() {

  	var result;
  	console.log("app", app);

  	result = app.pow(0.1, 2);

    expect(result).toBe('Error. Reload page and enter integer.');
  });
});