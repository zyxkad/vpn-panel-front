
'use stric';

(function(){

const PartData = (function(){
	const $header_title = $('#header-title');
	const $article = $('#body');

	function _PartData({id, title=null, body='', onload=null, onunload=null}){
		this.id = id;
		this.title = title || this.id;
		this.body = body;
		this.onload = onload;
		this.onunload = onunload;
	}

	_PartData.prototype.load = function(){
		if(this.onload){
			this.onload();
		}
		$header_title.text(this.title);
		$article.html(this.body);
	}

	_PartData.prototype.unload = function(){
		if(this.onunload){
			this.onunload();
		}
		$header_title.text('');
		$article.html('');
	}

	const part404 = new _PartData({
		id: '404',
		title: '404 Not found',
		onload: function(){
			this.body = `<h1>404 Not found</h1><hr/><h3>Cannot found page '${window.location.hash}'</h3>`;
		}
	});

	function PartData(obj){
		return PartData._part_map[obj.id] = new _PartData(obj);
	}

	PartData._part_map = {};
	PartData.get = function(id){
		return PartData._part_map[id] || part404;
	}

	return PartData;
})();

PartData({
	id: "dashboard",
	title: "仪表盘",
	body: `<iframe src="./dashboard_dashboard.html" style="width:100%;height:100%;border:none;"></iframe>`
});

PartData({
	id: "room-set",
	title: "房间管理",
	body: `TODO: 房间管理`
});

function onloadPart(){
	var navls = $('.side-nav-link');
	var navl, part;
	var hash = window.location.hash.substring(1);
	if(hash){
		part = PartData.get((navl = navls.filter('[page-id=' + window.escape(hash) + ']')).attr("page-id"));
	}
	if(!hash || !part){
		part = PartData.get((navl = navls.first()).attr("page-id"));
		window.location.hash = navl.attr("page-id");
	}
	$('.side-nav-link[nav-current]').removeAttr('nav-current');
	navl.attr('nav-current', '').parents('.side-nav-list:last-child').attr('nav-select', '');
	part.load();
}

$(document).ready(function(){
	$('.side-nav-list>h4').click(function(){
		var $this = $(this).parent();
		if($this.is('[nav-select]')){
			$this.removeAttr('nav-select');
		}else{
			$this.attr('nav-select', '');
		}
	});

	onloadPart();
	$(window).on('popstate', onloadPart);

	$('.side-nav-link').click(function(){
		var $this = $(this);
		if($this.is('[nav-current]')){
			return;
		}
		var pid = $this.attr("page-id");
		var part = PartData.get(pid);
		$('.side-nav-link[nav-current]').removeAttr('nav-current');
		$this.attr('nav-current', '');
		window.history.pushState(null, null, '#' + pid);
		part.load();
	});
});


})();
