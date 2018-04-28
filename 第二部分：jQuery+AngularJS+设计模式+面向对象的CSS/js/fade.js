$(document).ready(function () {
    $("#in").click(function () {
        $("#div1").fadeIn(1000);
        $("#div2").fadeIn(1000);
        $("#div3").fadeIn(1000);
    });
    $("#out").click(function () {
        $("#div1").fadeOut(1000);
        $("#div2").fadeOut(1000);
        $("#div3").fadeOut(1000);
    });
    $("#toggle").click(function () {
        $("#div1").fadeToggle(1000);
        $("#div2").fadeToggle(1000);
        $("#div3").fadeToggle(1000);
    });
    $("#to").click(function () {
        $("#div1").fadeTo(1000,0.3);
        $("#div2").fadeTo(1000,0.5);
        $("#div3").fadeTo(1000,0.7);//淡化效果，透明度0-1,0是完全透明
    });
});