//index.js
//获取应用实例
const app = getApp()
const Grid =require('./grid.js');
Page({
  data: {
    
    num:null
    
  },
  onLoad: function(){
      const gameGrid = new Grid(4);
      //两个格子
      this.game =gameGrid;
      this.addRandomData();
      this.addRandomData();
      this.setData({
      num: gameGrid.grid
      })
  },
    addRandomData: function(){
      let cell = this.game.selectCell();
      console.log(cell);
      this.game.grid[cell.i][cell.j]= Math.random()>0.5 ? 2 : 4;
  },
  game:null,
  startX:0,
  startY:0,
  endX:0,
  endY:0,
  touchstart:function(event){
    const touch = event.touches[0];
    this.startX=touch.clientX;
    this.startY=touch.clientY;

  },
  touchmove:function(event){
    const touch = event.touches[0];
    this.endX=touch.clientX;
    this.endY=touch.clientY;

  },
  touchend: function (event) {
    const disX = this.startX - this.endX;
    const disY = this.startY - this.endY;
    const absdisX = Math.abs(disX);   
    const absdisY = Math.abs(disY);
    if(absdisX>10||absdisY>10){
        //0 上 1 右 2 下 3 左
      var direction = absdisX > absdisY ? (disX < 0 ? 1 : 3) : (disY < 0 ? 2 : 0);
      console.log(direction);
      this.move(direction);
    }
    },
  move: function (direction){
     this.combine()
  },
  combine: function (){
    let res = this.slideNumber(['',2,'',2]);
    console.log('数字靠边',res)
  },
  slideNumber:function(arr){
    //['',2,''2,]=>[2,2,'','']
  for(let i=0;i < arr.length;i++){
      if(arr[i]!==''){
        arr[current]=arr[i];
        current++;
      }
      return arr;
  }
  for(let j=0;j < arr.length;j++){
      arr[j]!==''
       
    return arr;
  }
  }

})