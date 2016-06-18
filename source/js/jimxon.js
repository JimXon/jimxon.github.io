// JavaScript Document

$(document).ready(function () {
    // 禁用ajax缓存
    $.ajaxSetup({
        cache: false
    });
    // 自动高度
    ChangeHtmlHeight(".auto-height");
    // 个性化滚动条
    $("body").niceScroll({
        cursorcolor: "#3A5795", cursorwidth: "10px", cursorborder: "1px solid rgba(255,255,255,0.33)", cursorborderradius: "5px", cursoropacitymax: 1, touchbehavior: false,
    });
});

$(window).resize(function () {
    // 自动高度
    ChangeHtmlHeight(".auto-height");
});

//////// some function ////////
////// 高度调整，免得有些1080P或更大屏幕下面留空白
function ChangeHtmlHeight(element) {
    HeightDifference = document.documentElement.clientHeight - document.body.clientHeight;
    if (HeightDifference > 0) {
        EditHeight = $(element).height() + HeightDifference + 1;
        $(element).css("min-height", EditHeight + "px");
    }
}
////// 某元素下的所有a标签，批量添加新窗口打开属性
function addNewWindowsOpenForA(element) {
    $(element).find("a").attr("target", "_blank");
}