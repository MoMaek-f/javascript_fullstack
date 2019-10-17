const playAction = process.argv[2];
console.log(playAction)
if (playAction != 'rock'&& playAction!='paper' && playAction!='scissor'){
    throw new Error('出错了，再来过');

}
else{
    let computerAction;
    let random = Math.random()*3;
    console.log(Math.random());
    if (random<1){
        computerAction='rock';
        console.log('电脑出了石头')
    }
    else if (random>2){
        computerAction='paper';
        console.log('电脑出了剪刀')
    }
    else {
        computerAction='scissor';
        console.log('电脑出了布')
    }
    if(playAction == computerAction)
    {
         console.log('平局');
    }
     else if((palyerAction == "scissor" && computerAction =='rock') ||( palyerAction == "rock" && computerAction == "paper") ||
     (palyerAction == "paper" && computerAction == "scissor" )){
         console.log('你输了');
     }
     else{
        console.log('你赢了');
     }

     }

