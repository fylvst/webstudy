window.onload=function (){
    //页面加载完成时绑定各种事件

}
//鼠标悬浮时显示背景颜色
function showBGColor(){
    //event：当前发生的事件
    //event.srcElement：事件源
    // alert(event.srcElement);
    //  alert(event.srcElement.tagName);
    if(event&&event.srcElement&&event.srcElement.tagName=="TD"){
        var td=event.srcElement;
        var tr=td.parentElement;
        alert("1");
        tr.style.backgroundColor="navy";
        var tds=tr.cells;
        fro(var i=0;i<tds.length;i++){
            tds[i].style.color="white";
        }
    }
}
function clearBGColor(){
    if(event&&event.srcElement&&event.srcElement.tagName==="TD"){
        var td=event.srcElement;
        var tr=td.parentElement;
        tr.style.backgroundColor="transparent";
        var tds=tr.cells;
        for(var i=0;i<tds.length;i++){
            tds[i].style.color="threeddarkshadow";
        }
    }
}
function showhand(){
    if(event&&event.srcElement&&event.srcElement.tagName==="TD"){
        var td=event.srcElement;
        td.style.cursor="hand";
    }
}