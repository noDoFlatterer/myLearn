// 设置画布

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

var ballArr = [];
var i;
var j;


//生成随机数的函数
function r(num){
    return Math.random()*num;
}

//生成小球的类
function Ball(){
    this.x = r(width-50)+20;
    this.y = r(height-50)+20;
    this.r = r(5)+10;
    this.speedX = r(2)+10;
    this.speedY = r(2)+10;
    this.color = "#"+parseInt(Math.random()*0xffffff).toString(16);
}

Ball.prototype.draw = function(){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
};

Ball.prototype.run = function(){
    if(this.x-this.r<=0 || this.x+this.r>=width){
        this.speedX = -this.speedX;
    }

    if(this.y-this.r<=0 || this.y+this.r>=height){
        this.speedY = -this.speedY;
    }
    this.x += this.speedX;
    this.y += this.speedY;
};

for(i=0;i<20;i++){
    var ball = new Ball();
    ballArr.push(ball);
    ball.draw();
}
// function drawCover() {
//     this.beginPath();
    
//     this.fillStyle = 'rgba(255,52,55,0.6)';
    
//     this.rect(0,0,this.ctx.width+10,this.ctx.height+10);
    
//     this.fill();
    
//     }
requestAnimationFrame(function fn(){
    ctx.clearRect(0,0,width,height);
    adminBall.draw();
    for(j=0;j<ballArr.length;j++){
        var ball = ballArr[j]
        var distance = Math.sqrt(Math.pow(ball.x - adminBall.x,2) + Math.pow(ball.y - adminBall.y,2));
        if (distance <= ball.r + adminBall.r) {
                ballArr.splice(j,1);
        }
        ball.run();
        ball.draw();
        // ball.drawCover();
    }
    requestAnimationFrame(fn);
})

// setInterval(function(){
//     ctx.clearRect(0,0,width,height);
//     adminBall.draw();
//     for(j=0;j<ballArr.length;j++){
//         var ball = ballArr[j]
//         var distance = Math.sqrt(Math.pow(ball.x - adminBall.x,2) + Math.pow(ball.y - adminBall.y,2));
//         if (distance <= ball.r + adminBall.r) {
//                 ballArr.splice(j,1);
//         }
//         ball.run();
//         ball.draw();
//     }
// },10)

//生成自己小球的类
function adminBall(){
    this.x = width/2;
    this.y = height/2;
    this.r = 10;
    this.speedtop = 20;
    this.speedup = 20;
    this.speedleft = 20;
    this.speepright = 20;
    this.color = "white";
}

adminBall.prototype.draw = function(){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
};

adminBall.prototype.toprun = function(){
    this.y -= this.speedtop;
    if(this.y-this.r<=0){
        this.y = 10;
    }
    
};

adminBall.prototype.uprun = function(){
    this.y += this.speedup;
    if(this.y+this.r>=height){
        this.y = height-10;
    }
    
};

adminBall.prototype.leftrun = function(){
    this.x -= this.speedleft;
    if(this.x-this.r<=0){
        this.x = 10;
    }
};

adminBall.prototype.rightrun = function(){
    this.x += this.speepright;
    if(this.x+this.r>=width){
        this.x = width-10;
    } 
};

var adminBall = new adminBall();

window.addEventListener("keydown", function (e) {
        if (e.keyCode == 38 || e.keyCode == 87) {
            adminBall.toprun();
            adminBall.draw();
        } else if (e.keyCode == 39 || e.keyCode == 68) {
            adminBall.rightrun();
            adminBall.draw();
        } else if (e.keyCode == 40 || e.keyCode == 83) {
            adminBall.uprun();
            adminBall.draw();
        } else if (e.keyCode == 37 || e.keyCode == 65) {
            adminBall.leftrun();
            adminBall.draw();
        } else {
        }
}, false);


// function ballCrash(){
//     var distance = Math.sqrt(Math.pow(ball.x - adminBall.x,2) + Math.pow(ball.y - adminBall.y,2));
//     //两球的距离小于两个半径的和即为碰撞
//     if (distance <= ball.r + adminBall.r) {
//         return true;//碰撞
//     } else{
//         return false;//没有碰撞
//     }
// }



