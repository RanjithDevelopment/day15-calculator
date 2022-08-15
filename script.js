function button(tag, cls, clsval, cli, func, content) {
    var input = document.createElement(tag);
    input.setAttribute(cls, clsval);
    input.addEventListener(cli, func => {
        document.getElementById('result').value += content;

        return func;

    });
    input.innerHTML = content;

    return input;


}
function createbutton(tag, cls, clsval, cli, func, content) {
    var input = document.createElement(tag);
    input.setAttribute(cls, clsval);
    input.addEventListener(cli, func);
    input.innerHTML = content;

    return input;


}

var cl = createbutton("button", "class", "bton", "click", clear, "C");
var dl = createbutton("button", "class", "bton", "click", del, "del");
var a = button("button", "class", "bton ", "click", dis, "%");
var b = button("button", "class", "bton", "click", dis, "/");
var c = button("button", "class", "bton", "click", dis, "7");
var d = button("button", "class", "bton", "click", dis, "8");
var e = button("button", "class", "bton", "click", dis, "9");
var f = button("button", "class", "bton", "click", dis, "*");
var g = button("button", "class", "bton", "click", dis, "4");
var h = button("button", "class", "bton", "click", dis, "5");
var i = button("button", "class", "bton", "click", dis, "6");
var j = button("button", "class", "bton", "click", dis, "-");
var k = button("button", "class", "bton", "click", dis, "1");
var l = button("button", "class", "bton", "click", dis, "2");
var m = button("button", "class", "bton", "click", dis, "3");
var n = button("button", "class", "bton", "click", dis, "+");
var o = button("button", "class", "bton", "click", dis, ".");
var p = button("button", "class", "bton", "click", dis, "0");
var eql = createbutton("button", "class", "bton", "click", calculate, "=");

var sample = document.querySelector(".calculator");
sample.append(cl, dl, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, eql);
document.body.append(sample);
var arr = ['%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '.', '0'];

function dis(val) {


}
function calculate() {
    try {
        let x = document.getElementById('result').value;

        let y = eval(x);

        document.getElementById('result').value = y;

        return y;
    } catch {
        alert("Invalid Numbers");
    }

}
function clear() {
    document.getElementById('result').value = "";

}
// ,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,eql
function del() {
    var w = document.getElementById('result').value.slice(0, -1);
    document.getElementById('result').value = w;
    return w;
}
