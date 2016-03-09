//by fleur.wang 
$(document).ready(function(){
	//监听滚动到了页面底部
	var html = '<div class="follow-tips">'+
				'<a class="avatar follow-link"><img class="avatar-image" src="http://7xpcru.com1.z0.glb.clouddn.com/jllk_profile.png?imageView2/2/w/76" width="38" height="38" alt=""></a>'+
				'<a class="follow-link blog-name-title" href="https://github.com/JLLK" target="new_window"><span class="blog-name">JLLK</span> <span class="blog-title">tomchen</span></a>'+
				'<a class="follow-button follow-link" target="new_window" href="https://github.com/JLLK">Follow</a>'+
				'</div>';
	$('html').append(html);
});