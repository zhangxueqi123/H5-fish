var aneObj = function(){
  //start point,control point,end point(sin)
  this.rootx = [];
  this.headx = [];
  this.heady = [];
  this.amp = [];
  this.alpha = 0;
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function(){
  for(var i=0;i<this.num;i++){
    this.rootx[i] = i * 16 + Math.random() * 20;//[0,1)
    this.headx[i] = this.rootx[i];
    this.heady[i] = canHeight - 250 + Math.random() * 50;
    this.amp[i] = Math.random() * 50 + 50;
  }
}
aneObj.prototype.draw = function()
{
  this.alpha += deltaTime * 0.0008;
  var l = Math.sin(this.alpha);
  ctx2.save();//只在这个范围内更改透明度等值
  ctx2.globalAlpha=0.6;
  ctx2.lineWidth = 20;//图线粗细
  ctx2.lineCap = "round";//线条结束图形为圆
  ctx2.strokeStyle = "#3b154e";//线条颜色
   for(var i=0;i<this.num;i++)
   {
     //beginPath,moveTo,lineTo,stroke,strokeStyle,lineWidth,lineCap,globalAlpha
     ctx2.beginPath();//开始绘制
     ctx2.moveTo(this.rootx[i],canHeight);//可以绘制范围
     this.headx[i] = this.rootx[i] + l * this.amp[i];
     ctx2.quadraticCurveTo(this.rootx[i],canHeight - 100,this.headx[i],this.heady[i]);//绘制到哪里
     ctx2.stroke();
   }
   ctx2.restore();
}
