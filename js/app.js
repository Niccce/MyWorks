// JavaScript Document
window.onload=function()
{
	imgLocation("container","box");
	var imgData={"Data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"}]}
		
	//识别滚动条移动
	window.onscroll = function()
	{
		if(checkFlag())
		{
			var cParent = document.getElementById("container");
			for(var i=0;i<imgData.Data.length;i++)
			{
				var cContent=document.createElement("div");
				cContent.className="box";
				cParent.appendChild(cContent);//在container里创建一个class为box的div
				var boxImg=document.createElement("div");
				boxImg.className="box_img";
				cContent.appendChild(boxImg);
				
				var img=document.createElement("img");
				img.src="img/"+imgData.Data[i].src;
				boxImg.appendChild(img);
			}
			imgLocation("container","box");
		}
	}
}

function checkFlag()
{
	var cParent=document.getElementById("container");
	var cContent = getChildElement(cParent,"box");
	var lastContentHeight = cContent[cContent.length - 1].offsetTop;//获取最后一张图片距顶部的高度
	
	//页面未显示部分的高度
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	//console.log(scrollTop);
	
	//页面高度
	var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;
	if(lastContentHeight<scrollTop+pageHeight)
	{
		return true;
	}
}

function imgLocation(parent,content)
{	//将container的所有box全部取出
	var cParent = document.getElementById(parent);//container
	var cContent=getChildElement(cParent,content);//所有box
	//console.log(cContent);
	var imgWidth=cContent[0].offsetWidth;
	
	//第一排图片张数，向下取整（列数）
	var cols = Math.floor(document.documentElement.clientWidth / imgWidth);
	
	//设置container的样式
	cParent.style.cssText="width:"+imgWidth*cols+"px; margin: 0 auto";
	
	var boxHeightArr=[];
	for(var i=0;i<cContent.length;i++)
	{
		if(i<cols)
		{
			boxHeightArr[i]=cContent[i].offsetHeight;//获取第一行照片的所有高度
			//console.log(boxHeightArr[i]);//控制台显示出第一行所有照片高度
		}
		else
		{
			var minHeight=Math.min.apply(null,boxHeightArr);//Math.min后不能跟数组，因此加个apply
			//console.log(minHeight);
			var minIndex = getMinHeightLocation(boxHeightArr,minHeight);
			cContent[i].style.position = "absolute";
			cContent[i].style.top = minHeight+"px";//设置图片的高的位置
			cContent[i].style.left = cContent[minIndex].offsetLeft+'px';
			boxHeightArr[minIndex] = boxHeightArr[minIndex]+cContent[i].offsetHeight;//第二行的第一张位置放好后，minHeight会变，要更新一下
		}
	}
}

function getMinHeightLocation(boxHeightArr,minHeight)
{//用于得知第一行第几张图片的height最小
	for(var i in boxHeightArr)
	{//for in 遍历数组
		if(boxHeightArr[i] == minHeight)
		{
			return i;
		}
	}
}

function getChildElement(parent,content)
{//获取所有类名为content的元素
	var contentArr=[];
	var allContent=parent.getElementsByTagName("*");
	for(var i=0;i<allContent.length;i++)
	{
		if(allContent[i].className==content)
		{
			contentArr.push(allContent[i]);
		}
	}
	return contentArr;
}