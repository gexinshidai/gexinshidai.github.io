
$(function () {
    $("#SearchResult").bind("click", function () {
        var obj = $(".select_showbox").html();
        if (obj == "请选择") {
            alert("请选择分类！");
            return false;
        }
        var SeacherContent = $("#SeacherContent").val();
        if (SeacherContent == "" || SeacherContent == "搜索你需要的内容") {
            alert("请搜索你需要的内容！");
            return false;
        }
        if (obj == "课程") {
            window.open("/Search/kecheng/" + SeacherContent);
        }
        else if (obj == "资讯") {
            window.open("/Search/zixun/" + SeacherContent);
        }
    })
})

function Ffocus() {
    if ($("#SeacherContent").val() == "搜索你需要的内容") {
        $("#SeacherContent").val("");
    }
}