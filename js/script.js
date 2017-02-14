var app = {
  pow: function(a, n) {
    if ( this.checkNumber(a) && this.checkNumber(n) ) {
    result = this.checkExponentSign(a, n);
      console.log ( 'Result: ', a, '^', n, '=', result );
      return result;
  } else console.log ('Error. Reload page and enter integer.');
    return ('error');
  },
  checkNumber: function(a) {
    return !isNaN( parseFloat(a) ) && isFinite(a) && parseInt(a) == a; 
  },
  checkExponentSign: function (a,n) {
    var res = 1;  
    if (n >= 0) {
        res = this.raise(a, n, res);
    } else {
        n = -n;
        res = 1 / this.raise(a, n, res);
      }
    return res;
  },
  raise: function(a, n, res) {
    for (var i = 0; i < n; i++) {
    res *= a;
    }
    return res;
  }
}

app.pow();


try 
{
  module.exports = app;
}
catch (e) {}



    











