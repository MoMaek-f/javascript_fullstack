function init(){
    var width =document.documentElement.clientWidth;
    document.documentElement.style.fontSize=width/10+'px';
}
init();

window.onresize=function(){
    init();
}