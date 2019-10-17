var parent= document.getElementById('content-items')
// console.log(parent)
var send =document.getElementById('send')
send.addEventListener('click',function()
{
    var html = $('<li class="content-item">'+
    '<div class="pic">'+
        '<img src="http://img1.imgtn.bdimg.com/it/u=1864942380,1660582897&fm=26&gp=0.jpg" alt="">'+
    '</div>'+
    '<div class="message">'+
        '<p class="name">BOOM</p>'+
       '<p class="detail">哦boomboom</p>'+
    '</div>'+
'</li>')
html.appendTo(parent)
    // var li = document.createElement('li')
    // li.setAttribute('class','content-item')
    
    // var divpic= document.createElement('div')
    // divpic.setAttribute('class','pic')
    // li.appendChild(divpic)
    
    // var img= document.createElement('img')
    // img.setAttribute('src','http://img1.imgtn.bdimg.com/it/u=1864942380,1660582897&fm=26&gp=0.jpg')
    // divpic.appendChild(img)
    
    // var message= document.createElement('div')
    // message.setAttribute('class','message')
    // li.appendChild(message)
    
    // var p1=document.createElement('p')
    // p1.setAttribute('class','name')
    // var p1text=document.createTextNode('BOOM')
    // p1.appendChild(p1text)
    // message.appendChild(p1)
    
    // var p2=document.createElement('p')
    // p2.setAttribute('class','detail')
    // var p2text=document.createTextNode('zhazha是傻子')
    // p2.appendChild(p2text)
    // message.appendChild(p2)
    // parent.appendChild(li)
}
)

