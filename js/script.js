/*var app = {
  sayHello: function (name) {
    return 'Hello, ' + name;
  }
};*/


var app = {
  pow: function (base, exp) {
    if ( checkNumber(base) && checkNumber(exp) ) {
      result = checkExponentSign(base, exp);
      return ( 'Result: ', result );
        } else {
        return ('Error. Reload page and enter integer.');
        }
  }
};

function checkNumber(a) { //возвращает true, если аргументы - целые числа
  return !isNaN( parseFloat(a) ) && isFinite(a) && parseInt(a) == a; 
}


function checkExponentSign(a, n) { //возвращает результат вовзведения числа "а" в степень "n" при n>0, n=0, n<0
  var res = 1;  
  
  if (n >= 0) {
      res = raise(a, n, res);
  } else {
      n = -n;
      res = 1 / raise(a, n, res);
    }

  return res;
}


function raise(a, n, res) {
  for (var i = 0; i < n; i++) {
    res *= a;
  }
  
  return res;
}    

app.pow();
module.exports = app;



    











