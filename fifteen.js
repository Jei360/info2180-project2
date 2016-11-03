$(document).ready(function()
{
	var puzzle= $("#puzzlearea");
	var pieces= $("#puzzlearea").children();
	var shuf=document.getElementById("shufflebutton");
	//var shuf= $("#shufflebutton");
	var tpos=0;
	var lpos=0;
	var rand;
	var temp1;
	var temp2;
	var emt=300;
	var eml=300;
	console.log (pieces);
	
	for (var x=0;x<pieces.length; x++)//Arranges the puzzle
	{
		//pieces[x].style.backgroundRepeat= "no-repeat";
		if(lpos===400){
			lpos=0;
			tpos=tpos+100;
		}
		pieces[x].setAttribute("class", "puzzlepiece");
		pieces[x].style.top= tpos+ "px";
		pieces[x].style.left= lpos+"px";
		pieces[x].style.backgroundPosition = '-' +lpos+ 'px -' +tpos+ 'px'; 
		lpos=lpos+100;
	}
	
	//start();
	
	shuf.addEventListener("click", function()
	{
		console.log("It works");
		//start();
		for (var i=pieces.length-1;i>=0;i--)
		{
			pieces[i].setAttribute("class", "puzzlepiece");
			rand=Math.floor(Math.random()*i);
			temp1=pieces[i].style.top;
			temp2=pieces[i].style.left;
			pieces[i].style.top=pieces[rand].style.top;
			pieces[i].style.left=pieces[rand].style.left;
			pieces[rand].style.top=temp1;
			pieces[rand].style.left=temp2;
		}
		
		for(var j=0;j<pieces.length;j++)
		{
			if(pieces[j].style.top===emt+'px' || pieces[j].style.left===eml+'px')
			{
				if(pieces[j].style.top===emt+100+'px' || pieces[j].style.top===emt-100+'px' || pieces[j].style.left===eml+100+'px' || pieces[j].style.left===eml-100+'px')
				{
					console.log("This is" +j);
					pieces[j].setAttribute("class", "puzzlepiece movablepiece");
					console.log("Working! " +parseInt(emt)-100+'px');
					console.log(pieces[j].style.top===parseInt(emt)-100+'px');
					pieces[j].addEventListener("click", function()
					{
							console.log("Before: emt=" +emt+ " eml=" +eml);
							console.log("current top="+this.style.top+"current left=" +this.style.left);
							console.log("And then:");
							temp1=this.style.top;
							temp2=this.style.left;
							console.log(parseInt(emt)+'px');
							console.log(eml+'px');
							this.style.top=parseInt(emt)+'px';
							this.style.left=parseInt(eml)+'px';
							emt=temp1;
							eml=temp2;
							console.log("emt=" +emt+ " eml=" +eml);
							console.log("current top="+this.style.top+"current left=" +this.style.left);
							console.log("Next loop:");
					});
				}
			}
		}
	});
	
});