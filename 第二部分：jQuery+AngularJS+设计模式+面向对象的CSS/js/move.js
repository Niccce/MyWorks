$(document).ready(function () {
    $("#flipshow").click(function () {
        $("#content").slideDown(1000);
    });
    $("#fliphide").click(function () {
        $("#content").slideUp(500);
    });
    $("#fliptoggle").click(function () {
        $("#content").slideToggle(500);
    });
});