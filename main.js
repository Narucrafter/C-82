var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
MouseEvent="empty"
var last_position_of_x;
var last_position_of_y;
color="red";
lineWidth=1;
canvas.addEventListener("mouseDown",my_mousedown);
function my_mousedown(e)
{

MouseEvent="mouseDown";

}
canvas.addEventListener("mouseUp",my_mouseup);
function my_mouseup(e)
{

    MouseEvent="mouseDown";

}
canvas.addEventListener("mouseLeave",my_mouseLeave);
function my_mouseLeave(e)
{

MouseEvent="mouseLeave";

}
canvas.addEventListener("mouseMove",my_mousemove);
function my_mousemove(e)
{
var current_postion_of_mouse_x=e.clientX;
var current_postion_of_mouse_y=e.clientY
if(MouseEvent=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=lineWidth;

ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_postion_of_mouse_x,current_postion_of_mouse_y);
ctx.stroke();

}
last_position_of_x=current_postion_of_mouse_x;
last_position_of_y=current_position_of_mouse_y;
}























