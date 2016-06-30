// JavaScript Document

$(document).ready(function () {
    addNewWindowsOpenForA(".jx-url-list");
    BootstrapTooltip(".jx-url-list");
    // 模态框相关
    $("#modal").on("hidden.bs.modal", function () {
        changeModalWord("null");
    });
    $("#modal-UA").on("show.bs.modal", function () {
        checkUA();
    });
    $("#modal-UA").on("hidden.bs.modal", function () {
        $("#modal-UA .display").text("null");
    });
    clickMenuOrBtn();
    runCmd("#form-cmd");
});

//////// some function ////////
////// 某元素下的所有a标签，批量添加Bootstrap的tooltip插件参数
function BootstrapTooltip(element) {
    $(element).find("a[title]").data("placement", "bottom").tooltip();
}
function showAllUrl() {
    $(".jx-main").find("li.hidden").removeClass("hidden");
    $(".jx-main").find("li.hidden-xs").removeClass("hidden-xs");
    $(".jx-main").find(".col-md-3.hidden").removeClass("hidden");
    $(".jx-main").find(".col-md-4.hidden").removeClass("hidden");
    $(".jx-main").find(".col-md-6.hidden").removeClass("hidden");
    $(".jx-main").find(".col-md-8.hidden").removeClass("hidden");
    $(".jx-main").find(".col-md-12.hidden").removeClass("hidden");
}
////// 点击菜单或按钮
function clickMenuOrBtn() {
    $("#menu-check-ua").click(function () {
        checkUA();
        checkScreen();
        $("#modal-UA").modal();
    });
    $("#menu-test-preview-mode").click(function () {
        $("body").toggleClass("test-preview-mode");
    });
    $("#menu-fade-effect").click(function () {
        $(".tab-pane").toggleClass("fade");
        $(".tab-pane.fade.active").addClass("in");
        $("body").toggleClass("fade-effect");
        $(".modal").toggleClass("fade");
    });
    $("#btn-getUAandScr").click(function () {
        checkUA();
        checkScreen();
    });
}
////// 运行CMD命令
function runCmd(form) {
    $(form).submit(function () {
        var cmd = $("#input-cmd").val();
        cmd = cmd.toLocaleLowerCase();
        switch (cmd) {
            case "help":
                loadingModal("帮助", "text", "不用help了，什么也没有，以为这样就能得到提示吗？自己去源码里面找吧。。毕竟你还是太年轻了，too young, too simple, sometimes naive. 年轻人就要提高一下自己姿势水平，不要总想搞个大新闻！");
                break;
            case "helpme":
                loadingModal("这才是真正的帮助", "ajax", "/ajax/helpme.txt");
                break;
            case "test":
            case "t":
                $("#modal-test").modal();
                break;
            case "ua":
                $("#modal-UA").modal();
                break;
            case "翻墙":
            case "fq":
            case "fanqiang":
                loadingModal("翻墙工具箱", "ajax", "/ajax/fanqiang.txt");
                break;
            case "all":
                showAllUrl();
                break;
            case "3":
                $(".jx-main .col-md-6").addClass("col-md-4").removeClass("col-md-6");
                $(".jx-main .col-md-12").addClass("col-md-4").removeClass("col-md-12");
                $(".jx-main .col-md-8").addClass("col-md-4").removeClass("col-md-8");
                break;
            case "2":
                $(".jx-main .col-md-4").addClass("col-md-6").removeClass("col-md-4");
                $(".jx-main .col-md-12").addClass("col-md-6").removeClass("col-md-12");
                $(".jx-main .col-md-8").addClass("col-md-6").removeClass("col-md-8");
                break;
            case "1":
                $(".jx-main .col-md-6").addClass("col-md-12").removeClass("col-md-6");
                $(".jx-main .col-md-4").addClass("col-md-12").removeClass("col-md-4");
                $(".jx-main .col-md-8").addClass("col-md-12").removeClass("col-md-8");
                break;
            case "":
                break;
            default:
                loadingModal("Error", "html", "此命令无效，请输入&quot;help&quot;获取帮助");
                break;
        }
        $("#input-cmd").val(null);
    });
}
////// 初始化Modal的文字
function changeModalWord(value) {
    if (value == "null") {
        $("#modal .modal-title").text("null");
        $("#modal .modal-body").text("null");
    }
    if (value == "loading") {
        $("#modal .modal-title").text("标题加载中……");
        $("#modal .modal-body").html("请稍后……<br>正在从远端加载数据");
    }
}
////// 打开Modal，三种方式载入内容
function loadingModal(title, how, body) {
    changeModalWord("loading");
    $("#modal .modal-title").text(title);
    var modal = "#modal .modal-body";
    if (how == "text")
        $(modal).text(body);
    if (how == "html")
        $(modal).html(body);
    if (how == "ajax")
        $(modal).load(body);
    $("#modal").modal();
}
////// 检测浏览器UA和屏幕参数
function checkUA() {
    $("#modal-UA .ua").text(navigator.userAgent);
}
function checkScreen() {
    $("#modal-UA .scrW").text(screen.width);
    $("#modal-UA .scrH").text(screen.height);
    $("#modal-UA .avaW").text(screen.availWidth);
    $("#modal-UA .avaH").text(screen.availHeight);
    $("#modal-UA .colDep").text(screen.colorDepth);
    $("#modal-UA .xhtmlW").text(document.documentElement.clientWidth);
    $("#modal-UA .xhtmlH").text(document.documentElement.clientHeight);
    $("#modal-UA .htmlW").text(document.body.clientWidth);
    $("#modal-UA .htmlH").text(document.body.clientHeight);
    var arrDPI = new Array;
    if (window.screen.deviceXDPI) {
        arrDPI[0] = "X: " + window.screen.deviceXDPI + "PX";
        arrDPI[1] = " Y: " + window.screen.deviceYDPI + "PX";
    }
    else {
        var tmpNode = document.createElement("DIV");
        tmpNode.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
        document.body.appendChild(tmpNode);
        arrDPI[0] = "横向：" + parseInt(tmpNode.offsetWidth) + "像素";
        arrDPI[1] = " 纵向：" + parseInt(tmpNode.offsetHeight) + "像素";
        tmpNode.parentNode.removeChild(tmpNode);
    }
    $("#modal-UA .ppi").text(arrDPI);
}

