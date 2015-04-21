var app = angular.module("ewlApp", []);

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

function pausecomp(millis)
 {
  var date = Date.now();
  var curDate = null;
  do { curDate = Date.now(); }
  while(curDate-date < millis);
}