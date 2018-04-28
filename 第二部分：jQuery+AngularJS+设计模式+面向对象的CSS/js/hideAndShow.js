$(document).ready(function () {
    $("#hide").click(function () {
        $("p").hide(1000);
    });
    $("#show").click(function () {
        $("p").show(1000);
    });
    $("#hideAndShow").click(function () {
        $("p").toggle(1000);
    });

});