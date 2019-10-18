let data = [

    {value:'boom',time:5,color:'blue',speed:1,fontSize:22},
    {value:'kokokoko',time:5,color:'green',speed:1,fontSize:22},
    {value:'diudiu',time:5,color:'red',speed:1,fontSize:22},
    {value:'我好饿',time:5,color:'pink',speed:1,fontSize:22},
    {value:'好饿..',time:15}
]

//
let canvas = document.getElementById('canvas')
let video = document.getElementById('video')
let $text = document.getElementById('text')
let $btn = document.getElementById('btn')
let $color = document.getElementById('color')
let $range = document.getElementById('range')

class CanvasBarrage{
   constructor(canvas,video,opts={}){
     //如果canvas 和 video都没传的话
     if (!canvas|| !video){
       return
     }
     //增加属性，挂载到this 上
     this.video = video
     this.canvas = canvas

     this.canvas.width = video.width
     this.canvas.height = video.height
     
     //获取画布
     this.ctx = canvas.getContext('2d')

     //设置默认参数 如果没有传参数的话就使用默认参数
     let defOps={
       color:'blue',
       speed:1.5,
       opacity:0.5,
       fontSize:20,
       data:[]
      
      }
      //合并对象全部挂载到this实例上
      Object.assign(this,defOps,opts)
      //添加属性，用来判断播放状态，默认true是暂停 
      this.isPause = true
      //获取所有弹幕消息
      this.barrages = this.data.map(item=>new Barrage(item,this))
      //渲染弹幕
      this.render()
   }
   render(){ //渲染弹幕的方法
      //先清除原有的画布
      this.clear()
      //渲染弹幕
      this.randerBarrage()
      //如果没有暂停的话就继续渲染
      if(this.isPause === false){
        requestAnimationFrame(this.render.bind(this))
      }
   }
   clear(){
     this.ctx.clearRect(0,0,this.canvas.wifth,this.canvas.height)
   }
   randerBarrage(){
     //根据视频播放时间和弹幕展示时间作比较，来判断是否展示弹幕
     let time = this.video.currentTime
     this.barrages.forEach(barrage=>{
       //只有在视频播放时间大于弹幕展示时间，才做处理
       if (!barrage.flag && time>= barrage.time){
          //判断当前弹幕是否初始化了
          if(!barrage.isInit){
            barrage.init()
            barrage.isInit = true 
          }
          //弹幕从右往左渲染，所以X坐标减去当前弹幕的速度speed
          barrage.x-=barrage.speed
          barrage.render()
       }
        //如果当前弹幕的x坐标比自身宽度还小，就表示渲染结束
        if(barrage.x < -barrage.width){
          barrage.flag = true 
        }
     });
   }
   add(obj){
      this.barrages.push(new Barrage(obj,this))
   }
}
//Barrage类，用来实例化每一条弹幕
class Barrage{
  constructor(obj,ctx){
    this.value = obj.value
    this.time = obj.time
    this.obj = obj
    this.ctx = ctx
  }
  init(){
    // 如果数据里面没有涉及到以下数据，则使用默认数据
    this.color = this.obj.color || this.context.color
    this.speed = this.obj.speed || this.context.speed
    this.opacity = this.obj.opacity || this.context.opacity
    this.fontSize = this.obj.fontSize || this.context.fontSize

    let p = document.createElement('p')
    p.style.fontSize = this.fontSize +'px'
    p.innerHtml = this.value
    document.body.appendChild(p)
    this.width = p.clientWidth
    document.body.removeChild(p)

    //设置弹幕出现的位置
    this.x = this.context.canvas.width
    this.y = this.context.canvas.height *Math.random()
    
    if(this.y<this.fontSize){
      this.y=this.fontSize
    } 
    else if (this.y>this.context.canvas.height - this.fontSize){
      this.y = this.context.canvas.height - this.fontSize
    }

  }
  //渲染每一条弹幕
  render(){
    //设置画布字体
    this.context.ctx.font = `${this.fontSize}px Arial`
    //设置画布的文字颜色
    this.context.ctx.fillStyle = this.color
    //绘制文字
    this.context.ctx.fillText(this.value,this.x,this.y)
  }
}
let canvasBarrage =new CanvasBarrage(canvas,video,{data})
       video.addEventListener('play',()=>{
  canvasBarrage.isPause = false
  canvasBarrage.render()
})
//发送弹幕的方法
function send(){
   let value = $txt.value
   let time = video.currentTime
   let color =$color.value
   let fontSize =$range.value
   let obj = {value,time,color,fontSize}
   canvasBarrage.add(obj)
}
$btn.addEventListener('click',send)
