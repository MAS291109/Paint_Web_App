var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "red";
var randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    var mouse_x = e.clientX - canvas.offsetLeft;
    var mouse_y = e.clientY - canvas.offsetTop;
console.log("x =" + mouse_x + "Y = " + mouse_y);
circle(mouse_x , mouse_y);
}

function circle(mouse_x, mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();
}

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

document.getElementById("color").innerHTML = color;

    ctx.beginPath();
    ctx.strokeStyle = randomColor;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();