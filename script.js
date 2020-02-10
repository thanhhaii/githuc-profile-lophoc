function BoxCloseOpen() {
    if ($(".box").css("display") == "block") {
        $(".box").css("display", "none");
        $("#open").css("display","block");
    }
    else {
        $(".box").css("display", "block");
        $("#open").css("display","none");
    }

}