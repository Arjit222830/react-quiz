$(document).on('click','.accept', function(e){
    $(".modal-fade").modal("hide");
});

/*
$(document).on("keydown", function (e) {
    e.preventDefault();
});
*/

document.oncontextmenu=RightMouseDown;
document.onmousedown = mouseDown; 

function mouseDown(e) {
    if (e.which==3) {
        alert("Right Click is disabled for this quiz");
    }
}
function RightMouseDown() { return false;}