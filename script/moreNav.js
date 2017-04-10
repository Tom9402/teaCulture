/**
 * Created by 杨子豪 on 2017/4/1.
 */
$(function () {
    $(".more").click(function () {
        $(this).children("ul").css("display","block");
    }).blur(function () {
        $(this).children("ul").css("display","none");
    });
});