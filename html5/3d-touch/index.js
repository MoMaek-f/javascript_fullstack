const FRAME_WIDTH = 988/4,
    FRAME_HEIGHT = 1164/6,
    MASK_WIGTH =146; //阴影
//面向对象的好处 --封装
    class ThreeDTouch{
    //构造函数
    constructor(el,callback){
        this.el=el;
        this.callback=callback;
        this.bindEvents();
    }
    bindEvents (){
        this.el.addEventListener('touchstart', function() {
            console.log('按下去了');
          })
     
         this.addEventListener('touchforcechange',
         this.touchForceDidChange)
 }
    touchDidStart(){

    }
    touchForceDidChange(enevt){
        document.getElementById('force_val')
        .innerHTML = event.touches[0].force;
    }
}
let toucher = new ThreeDTouch(document.getElementById('force_btn'),function(){})
console.log(toucher);