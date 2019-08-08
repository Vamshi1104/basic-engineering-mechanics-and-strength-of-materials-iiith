var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = window.innerWidth; //Setting the canvas to full width of the window
canvas.height = window.innerHeight; //Setting the canvas to full height of the window
var x=0;
var y=0;
var pat;
		
	function drawMain()
   	{
		c.beginPath();
		c.lineWidth="10";
		c.strokeStyle="#006599";
		c.rect(150,50,1000,600);
		c.closePath();
		c.stroke();
		function draw(lw,ss,x1,y1,x2,y2) //function for generalized drawing
			{
			c.beginPath();
			c.lineWidth=lw;
			c.StrokeStyle=ss;
			c.moveTo(x1,y1);
			c.lineTo(x2,y2);
			c.closePath();
			c.stroke();
			}
		draw("3","#006599",350,50,350,650);
		draw("1","#006599",535,39,750,39);
		c.font="25px Arial";
		c.fillStyle="#006599";
		c.strokeStyle="black";
		c.fillText("Compression Test",535,35);
		c.stroke();
		c.fillStyle="#006599";
		c.fillRect(450,250,250,25);
		c.fillRect(450,550,250,25);
		c.stroke();
		c.beginPath();
		c.moveTo(450,550);
		c.lineTo(480,500);
		c.lineTo(670,500);
		c.lineTo(700,550);
		c.stroke();
		c.fill();
		c.rect(450,550,250,25);
		c.stroke();
		c.fillStyle="black";
		c.fillRect(455,275,15,275);
		c.fillRect(480,275,15,230);
		c.fillRect(680,275,15,275);
		c.fillRect(655,275,15,230);
		c.closePath();
		c.beginPath();
		c.fillStyle="white";
		c.arc(570,410,100,0.38*Math.PI,0.62*Math.PI);
		c.lineTo(533,480);
		c.lineTo(528,475);
		c.lineTo(528,465);
		c.lineTo(612,465);
		c.lineTo(612,475);
		c.lineTo(607,480);
		c.lineTo(607,503);
		c.fill();
		c.stroke();
		c.beginPath();
		c.fillStyle="gray";
		c.rect(510,435,120,30);
		c.fill();
		c.moveTo(510,435);
		c.lineTo(520,420);
		c.lineTo(620,420);
		c.lineTo(630,435);
		c.fill();
		c.stroke();
		
		c.beginPath();
		c.fillStyle="gray";
		c.rect(510,310,120,30);
		c.fill();
		c.moveTo(510,310);
		c.lineTo(520,295);
		c.lineTo(620,295);
		c.lineTo(630,310);
		c.fill();
		c.stroke();
		c.closePath();
		
		c.beginPath();
		c.fillStyle="white";
		c.arc(570,260,100,1.38*Math.PI,1.62*Math.PI);
		c.lineTo(605,285);
		c.lineTo(610,295);
		c.lineTo(610,305);
		c.lineTo(530,305);
		c.lineTo(530,295);
		c.lineTo(535,285);
		c.lineTo(535,166);
		c.fill();
		c.stroke();
		
		c.fillStyle="#006599";
		c.fillRect(450,250,250,25);
		c.closePath();
		c.beginPath();
		c.fillStyle="white";
		c.rect(520,130,100,15);
		c.stroke();
		c.beginPath();
		c.lineWidth="7";
		c.moveTo(567,145);
		c.lineTo(567,160);
		c.stroke();
		c.moveTo(600,145);
		c.lineTo(600,165);
		c.stroke();
		c.moveTo(538,145);
		c.lineTo(538,166);
		c.stroke();
		c.moveTo(700,555);
		c.lineTo(740,555);
		c.stroke();
		
		c.lineWidth="1";
		c.closePath();
		
		c.fill();
		c.stroke();
		c.closePath();
		c.beginPath();
		c.fillStyle="#006599";
		c.rect(750,350,150,225);
		c.fill();
		c.moveTo(750,575);
		c.lineTo(735,550);
		c.lineTo(735,350);
		c.lineTo(750,350);
		c.fill();
		c.stroke();
		c.closePath();
		
		c.beginPath();
		c.fillStyle="gray";
		c.rect(725,320,200,30);
		c.moveTo(725,320);
		c.lineTo(715,270);
		c.lineTo(900,270);
		c.lineTo(925,320);
		c.fill();
		c.stroke();
		c.closePath();
		c.beginPath();
		c.moveTo(725,350);
		c.lineTo(715,300);
		c.lineTo(715,270);
		c.lineTo(725,320);
		c.closePath();
		c.fill();
		c.stroke();
		window.onload = function() {
			var img = new Image();
			img.src="image.jpg"
			img.onload=function()
			{
			c.drawImage(img, 820, 370,50,50);
			}
		}
		
		im = function() {
			var img1 = new Image();
			img1.src="image1.jpg";
			img1.onload=function()
			{
			c.drawImage(img1, 820, 285,80,30);
			}
		}
		im();
		var img2=new Image();
		img2.src="pattern.jpg";
		img2.onload=function()
		{
		pat=c.createPattern(img2,"repeat");
		c.fillStyle=pat;
		c.beginPath();
		c.rect(360,535,40,40);
		c.stroke();
		c.fill();
		c.closePath();
		c.beginPath();
		c.moveTo(360,535);
		c.lineTo(410,500);
		c.lineTo(450,500);
		c.lineTo(400,535);
		c.lineTo(360,535);
		c.stroke();
		c.fill();
		c.closePath();
		c.beginPath();
		c.moveTo(400,535);
		c.lineTo(400,575);
		c.lineTo(450,540);
		c.lineTo(450,500);
		c.lineTo(400,535);
		c.fill();
		c.stroke();
		c.closePath();
		
		
		
		c.beginPath();
		c.rect(960,535,40,40);
		c.stroke();
		c.fill();
		c.closePath();
		c.beginPath();
		c.moveTo(960,535);
		c.lineTo(910,500);
		c.lineTo(950,500);
		c.lineTo(1000,535);
		c.lineTo(960,535);
		c.stroke();
		c.lineTo(960,575);
		c.lineTo(910,530);
		c.lineTo(910,500);
		c.fill();
		c.stroke();
		c.closePath();
		}
	}
	function main()
	{
		lowerPiston();
		upperPiston();
	}
	
	function upperPiston()
	{
		if(x<35)
		{
		upperPistonid=requestAnimationFrame(upperPiston);
		c.clearRect(500,200,140,170);
		c.fillStyle="#006599";
		c.fillRect(450,250,250,25);
		c.beginPath();
		c.fillStyle="gray";
		c.rect(510,310+x,120,30);
		c.fill();
		c.moveTo(510,310+x);
		c.lineTo(520,295+x);
		c.lineTo(620,295+x);
		c.lineTo(630,310+x);
		c.fill();
		c.stroke();
		c.closePath();
		
		c.beginPath();
		c.fillStyle="white";
		c.arc(570,260,100,1.38*Math.PI,1.62*Math.PI);
		c.fillStyle="white";
		c.lineTo(605,285+x);
		c.lineTo(610,295+x);
		c.lineTo(610,305+x);
		c.lineTo(530,305+x);
		c.lineTo(530,295+x);
		c.lineTo(535,285+x);
		c.lineTo(535,166);
		c.fill();
		c.stroke();
		c.closePath();
		x=x+0.3;
		c.fillStyle="#006599";
		c.fillRect(450,250,250,25);
		}
		else
		{
			c.lineWidth="5";
			c.beginPath();
			c.moveTo(560,375);
			c.lineTo(580,395);
			c.stroke();
			c.lineWidth="1";
		}
			
	}
		
	function lowerPiston()
	{
		if(y>-25)
		{
		lowerPistonid=requestAnimationFrame(lowerPiston);
		c.clearRect(500,350,140,140);
		c.fillStyle=pat;
		c.rect(530,400+y,80,30);
		c.fill();
		c.stroke();
		c.beginPath();
		c.fillStyle="white";
		c.arc(570,410,100,0.38*Math.PI,0.62*Math.PI);
		c.lineTo(533,480+y);
		c.lineTo(528,475+y);
		c.lineTo(528,465+y);
		c.lineTo(612,465+y);
		c.lineTo(612,475+y);
		c.lineTo(607,480+y);
		c.lineTo(607,503);
		c.fill();
		c.stroke();
		c.beginPath();
		c.fillStyle="gray";
		c.rect(510,435+y,120,30);
		c.fill();
		c.moveTo(510,435+y);
		c.lineTo(520,420+y);
		c.lineTo(620,420+y);
		c.lineTo(630,435+y);
		c.fill();
		c.stroke();
		y=y-0.3;
		}
		else
		{
			cancelAnimationFrame(lowerPistonid);
		}
		
	}
		
	drawMain();