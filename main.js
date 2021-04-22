
var last_position_of_x,last_position_of_y ;
    canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
color = "red";
var width=screen.width;
var height=screen.height;
var new_width=screen.width-70
var new_height=screen.height-300
if (width<992){
  document.getElementById("myCanvas").width=new_width;
  document.getElementById("myCanvas").height=new_height;
  document.body.style.overflow="hidden"
  canvas.addEventListener("touchstart" , mytouchstart)
}

width_of_line = 10;
function mytouchstart(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("input_number").value;
    last_position_of_x =e.touches[0].clientX-canvas.offsetLeft
    last_position_of_y =e.touches[0].clientY-canvas.offsetTop
}
canvas.addEventListener("touchmove", mytouchmove);
function mytouchmove(e) {
    color= document.getElementById("color").value;
   width_of_line = document.getElementById("input_number").value; 
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
    
        ctx.beginPath()
        ctx.strokestyle = color
        ctx.linewidth = width_of_line
        console.log("Last position of X and Y coordinates =")
        console.log("X=" + last_position_of_x + "Y=" + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("Current position of X and Y coordinates =" + "X=" + current_position_of_mouse_x + "Y=" + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y)
        ctx.stroke()
    
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;

}


function cleararea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}