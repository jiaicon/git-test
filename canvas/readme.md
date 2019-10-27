beginPath  
开始一个路径，直到下个beginPath
1. 在这之间，出现的属性会被覆盖。
2. 每一个beginPath，下面的lineTo重新赋值，moveTo也是。
3. 第一个beginPath可省略。

closePath
与beginPath成对存在
最后一步到起点可以省略

填充色
myCanvas.fillStyle = 'yellow';
myCanvas.fill();

绘制矩形的方法
ctx.rect(x, y, width, height);
ctx.fillRect(x, y, width, height);
ctx.strokeRect(x, y, width, height)

lineCap
线条的帽子
可选 round(圆) square(方形)  butt

lineJoin
线条相接
miter(default) 尖角
bevel
round


translate
rotate
scale
translate会改变canvas的坐标原点，所以为了确保原点，一般先使用translate

transform(a, b, c, d, e, f)
setTransform(a, b, c, d, e, f)

save()
restore()
成对出现,保存和恢复当前绘图状态


createLinearGradient();
填充颜色
线性渐变颜色

createPattern(img, repeat-style);
填充样式
可以填充图片，也可以填充canvas、video等


曲线
1. context.arc(centerX, centerY, radius, starttingAngel, endingAngel, anticlockwise = false);
	圆点坐标
	radius: 半径
	starttingAngel: 开始点
	endingAngel: 终结点
	anticlockwise: 是否逆时针

2. context.arcTo(x1, y1, x2, y2, radius);
	x1、y1：圆点坐标
	x2、y2：终点坐标

