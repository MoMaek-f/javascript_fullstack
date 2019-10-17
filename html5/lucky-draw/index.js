var lottery =document.querySelector('.lottery')
var ali = lottery.querySelectorAll('li')
var prize =document.querySelector('.prize')
var arr =[1,2,3,4,5,6,7,8]
var i=0
var count=0
var totalcount =9
var speed =500 
var minspeed =500
var timer
var isclick=true
var index=1 //转到哪一个商品上
ali[ali.length-1].onclick=function(){
    if(isclick){
        count=0
        run()
        isclick = false
    }
}
function run(){
    speed -=50
    if(speed<=10){
        speed=10
    }
    for(var j=0;j<ali.length;j++)
    {
        ali[j].classList.remove('active')

    }
    i++
    if(i>=ali.length-1)
    {
        i=0
        count++
    }
        prize.innerHTML=arr[i]
        ali[i].classList.add('active')
    if(count>=totalcount && (i+1)==index){
        speed=minspeed
        clearTimeout(timer)
        isclick=true
    }
    else{
        timer=setTimeout(run,speed) //run中调用run --递归
        if(count>=totalcount-1||speed<=50)
        {
            speed+=100
        }
    }
}
