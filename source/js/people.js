// JavaScript Document

$(document).ready(function () {
    addNewWindowsOpenForA(".jx-people-bottom");
    clickMenuOrBtn();
    autoFillUrlPrefix();
    $('a[data-toggle="tab"]').on('shown.bs.tab', function () {
        $(window).scroll();
    })
});

//////// some function ////////
////// 点击菜单或按钮
function clickMenuOrBtn() {
    $("#menu-test-preview-mode").click(function () {
        $("body").toggleClass("test-preview-mode");
    });
    $("#menu-fade-effect").click(function () {
        $(".tab-pane").toggleClass("fade");
        $(".tab-pane.fade.active").addClass("in");
        $("body").toggleClass("fade-effect");
        $(".modal").toggleClass("fade");
    });
    $("#menu-loading-profile-pic-direct").click(function () {
        CombinationProfilePicUrl(".jx-people-left img", "direct");
        afterClickLoadingPicBtn();
    });
    $("#menu-loading-profile-pic-lazy").click(function () {
        CombinationProfilePicUrl(".jx-people-left img", "lazy");
        lazyLoadingPic(".jx-people-left img");
        afterClickLoadingPicBtn();
    });
    $("#menu-test-btn-1").click(function () {
        autoFillUrlSuffix("fb", "photos");
    });
    $("#menu-test-btn-2").click(function () {
    });
    $("#menu-test-btn-3").click(function () {
    });
}
// 组合图片地址
function CombinationProfilePicUrl(img, how) {
    var urlPrefix = $("#profilePicPool").text();
    $(img).each(function () {
        var imgName = $(this).data("pic");
        if (typeof (imgName) == "undefined") {
            return;
        }
        var imgUrl = urlPrefix + imgName;
        if (how == "direct") {
            $(this).attr("src", imgUrl);
        }
        if (how == "lazy") {
            $(this).attr("data-original", imgUrl);
        }
    });
}
// 图片延迟加载
function lazyLoadingPic(img) {
    $(img).lazyload({
        effect: "fadeIn"
    });
}
// 点击加载头像按钮之后
function afterClickLoadingPicBtn() {
    $(".li-loading-pic").addClass("hidden");
    $(".li-loaded-pic-finish").removeClass("hidden");
}
// 自动拼接链接前缀
function autoFillUrlPrefix() {
    var fbPrefix = "https://www.facebook.com/";
    var igPrefix = "https://www.instagram.com/";
    var ytPrefix = "https://www.youtube.com/";
    $(".fb>a").each(function () {
        $(this).attr("data-url", fbPrefix + $(this).attr("href"));
        $(this).attr("href", $(this).data("url"));
    });
    $(".ig>a").each(function () {
        $(this).attr("data-url", igPrefix + $(this).attr("href"));
        $(this).attr("href", $(this).data("url"));
    });
    $(".yt>a").each(function () {
        $(this).attr("data-url", ytPrefix + $(this).attr("href"));
        $(this).attr("href", $(this).data("url"));
    });
}
// 自动拼接链接后缀
function autoFillUrlSuffix(type, value) {
    console.log("type:" + type);
    console.log("value:" + value);
}