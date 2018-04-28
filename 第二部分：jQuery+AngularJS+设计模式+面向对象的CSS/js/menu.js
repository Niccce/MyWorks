$(document).ready(function () {
    $(".main>a").click(function () {
        var ulNode=$(this).next("ul");//获取子菜单

        // if(ulNode.css("display")=="none"){
        //     ulNode.css("display","block");
        // }else
        // {
        //     ulNode.css("display","none");
        // }

        // ulNode.toggle("normal");//参数可以是数字，slow，fast
        ulNode.slideToggle();
        changeIcon($(this));
    });
    $(".hmain").hover(function () {
        $(this).children("ul").slideDown();
        changeIcon($(this).children("a"));
    },function () {
        $(this).children("ul").slideUp();
        changeIcon($(this).children("a"));
    });

});

function changeIcon(mainNode) {
    if(mainNode){                   //indexof()如果没有找到子字符串，则返回-1
        if(mainNode.css("background-image").indexOf("triangle.png")>=0){
            mainNode.css("background-image","url('../image/triangleDown.png')");
        }else {
            mainNode.css("background-image","url('../image/triangle.png')");
        }
    }
}