/*
$(document).ready(function() {
	$("#clickBtn").click(function(){
		var e=jQuery.Event("MyEvent");
		$("#clickBtn").trigger(e);
	});

	$("#clickBtn").bind("MyEvent",function(event) {
		console.log(event);
	});
});

*/

//简化版
var clickBtn;
$(document).ready(function() {
	clickBtn=$("#clickBtn");
	clickBtn.click(function(){
		var e=jQuery.Event("MyEvent");
		clickBtn.trigger(e);//trigger() 方法触发被选元素的指定事件类型
	});

	clickBtn.bind("MyEvent",function(event) {
		console.log(event);
	});
});