// JavaScript Document

$(document).ready(function () {
    // 禁用ajax缓存
	$.ajaxSetup({
        cache: false
    });
    // 个性化滚动条
    $("body").niceScroll({
        cursorcolor: "#3A5795", cursorwidth: "10px", cursorborder: "1px solid rgba(255,255,255,0.33)", cursorborderradius: "5px", cursoropacitymax: 1, touchbehavior: false,
    });
});