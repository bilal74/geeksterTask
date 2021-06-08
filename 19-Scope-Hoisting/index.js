var a;
a=1;
console.log(a);
// var a;
for(var i=0;i<=10;i++){}
console.log(i);
(function(){
    "use strict";
    var x=10;
    // console.log(y);
    function scope(){
        var y=20;
        console.group(x);
    }
    scope();
})();
"use strict";
x=1;
var x;
console.log(x);
"use strict";
console.log(fn1());
function fn1(){
    console.log(fun());
    function fun(){
        return "Welcome";
    }
    return "go";
}