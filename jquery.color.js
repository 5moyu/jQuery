/*
插件的种类：
	1、封装对象方法的插件
	2、封装全局函数的插件
	3、选择器插件

jQuery提供了两个用于扩展jQuery功能的方法
	1、jQuery.fn.extend()
		用于扩展第一种‘封装对象方法’
	2、jQuery.extend()
		用于后两种‘封装全局函数’和‘选择器’


*/


/*
	color()插件
	实现以下两个功能
	1、设置匹配元素的颜色
	2、获取匹配元素（元素集合中的第1个）的颜色
*/


;(function($){
	//这里写插件代码
	$.fn.extend({
		"color":function(value){
			if(value==undefined){
				return this.css("color");
			}else{
				return this.css("color",value);
			}
		}
	});
})(jQuery);


/*
;(function($){
	jQuery.fn.extend({
		"color":function(value){
			return this.css("color",value);
		}
	});
})(jQuery);

*/