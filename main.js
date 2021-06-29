var canvas = new fabric.Canvas('myCanvas');
var ball_x = 0;
var ball_y = 0;
var g_hole_y = 400;
var g_hole_x = 800;
var golf_ball = "";
var golf_hole = "";

function load_ball() {
    fabric.Image.fromURL("ball.png", function (Img) {
        golf_ball = Img;
        golf_ball.scaleToHeight(50);
        golf_ball.scaleToWidth(50);
        golf_ball.set({
            top: ball_y,
            left: ball_x
        });
        canvas.add(golf_ball);
    });
    new_image();
}

function load_hole() {
    fabric.Image.fromURL("golf-h.png", function (Img) {
        golf_hole = Img;
        golf_hole.scaleToHeight(50);
        golf_hole.scaleToWidth(50);
        golf_hole.set({
            top: g_hole_y,
            left: g_hole_x
        });
        canvas.add(golf_hole);
    });
    new_image();
}

if ((ball_x == g_hole_x) & (ball_y == g_hole_y)) {
    canvas.remove(golf_ball);
    document.getElementById("hit_the_goal");
    innerHTML = "You Have Won";
}
window.addEventListener("mykeydown", my_key_down);
function my_key_down(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '37') {
        console.log("Left");
        ball_x = ball_x - 10;
        ball_y = ball_y;
    }
    if (keyPressed == '38') {
        console.log("Up");
        ball_x = ball_x ;
        ball_y = ball_y - 10;
    }
    if (keyPressed == '39') {
        console.log("Right");
        ball_x = ball_x ;
        ball_y = ball_y + 10;
    }
    if (keyPressed == '40') {
        console.log("Down");
        ball_x = ball_x;
        ball_y = ball_y + 10;
    }
}