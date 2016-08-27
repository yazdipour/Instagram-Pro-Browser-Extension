try {
	chrome.storage.sync.get('theme', function(data) {
		if(data.theme==="light")return;
		else $('head').append('<link rel="stylesheet" type="text/css" href="'+chrome.extension.getURL('mystyles.css')+'">');
	});
} catch(e) {
	$('head').append('<link rel="stylesheet" type="text/css" href="'+chrome.extension.getURL('mystyles.css')+'">');
}
try {
	chrome.storage.sync.get('myColor', function(data) {
		$('section>nav').css('background-color', data.myColor);
	});
} catch(e) {
	console.log(e);
}
$('head').append("<script>function svImg(temp) {$url=$(temp).parents('article').find('video').attr('src');if(!$url){$url=$(temp).parents('article').find('div').find('img').attr('src');}var link = document.createElement('a');	link.href = $url;	link.download = $url;	document.body.appendChild(link);	link.click();}</script>");
function loadSaveBtn() {
	setTimeout(function(){
		$('article').each(function(i) {
			if ($(this).find('.SBtn').length) {}
				else $(this).find("form._k3t69").after('<button class="SBtn" onclick="svImg(this)" style="border:none;background-color: #1372cc;height:38px;border-radius: 10px;">save</button>');
		});
	}, 1000);
}
loadSaveBtn();
setTimeout(function(){
	$('div._nljxa>div._myci9>a').each(function(i) {
		$(this).attr('onclick', 'AddSaveBtn(this)');
	});
}, 1000);
$(window).scroll(function() {if($(window).scrollTop() + $(window).height()>$(document).height()-100)loadSaveBtn();});
var s = document.createElement('script');
s.src = chrome.extension.getURL('jquery.js');
s.onload = function() {
	this.remove();
};
(document.head || document.documentElement).appendChild(s);
$('head').append('<script>function AddSaveBtn(temp){loadSaveBtn();}</script>');