
'use stric';

(function(){

const $HEAD = $(document.head);
const $BODY = $(document.body);

const PartData = (function(){
	const $header_title = $('#header-title');
	const $article = $('#body');

	function _Page({id, title=null, body='', assets=null, onload=null, onunload=null}){
		this.id = id;
		this.title = title || this.id;
		this.body = body;
		this.assets = assets;
		this._onload = onload;
		this._onunload = onunload;
	}

	_Page.prototype.load = function(){
		if(this.assets){
			if(this.assets.css){
				for(let url of this.assets.css){
					if($HEAD.children('link[href=' + window.escape(url) + ']').length === 0){
						$HEAD.append($(`<link rel="stylesheet" type="text/css"/>`).prop('href', url).attr('k-part-id', this.id));
					}
				}
			}
			if(this.assets.js){
				for(let url of this.assets.js){
					$BODY.append($(`<script></script>`).prop('src', url).attr('k-part-id', this.id));
				}
			}
		}
		if(this._onload){
			this._onload();
		}
		$header_title.text(this.title);
		$article.html(this.body);
	}

	_Page.prototype.unload = function(){
		$('*[k-part-id=' + window.escape(this.id) + ']').remove();
		if(this._onunload){
			this._onunload();
		}
		$header_title.text('');
		$article.html('');
	}

	const part404 = new _Page({
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

	window.Page = PartData;
	return PartData;
})();

// PartData({
// 	id: "room-set",
// 	title: "房间管理",
// 	body: `TODO: 房间管理`
// });

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
	{
		let dp = PartData.get($('.side-nav-link[nav-current]').removeAttr('nav-current').attr('page-id'));
		(dp && dp.id !== '404') && dp.unload();
	}
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
	$(window).on('unload', function(){
		let dp = PartData.get($('.side-nav-link[nav-current]').attr('page-id'));
		(dp && dp.id !== '404') && dp.unload();
	});

	$('.side-nav-link').click(function(){
		var $this = $(this);
		if($this.is('[nav-current]')){
			return;
		}
		var pid = $this.attr("page-id");
		var part = PartData.get(pid);
		{
			let dp = PartData.get($('.side-nav-link[nav-current]').removeAttr('nav-current').attr('page-id'));
			(dp && dp.id !== '404') && dp.unload();
		}
		$this.attr('nav-current', '');
		window.history.pushState(null, null, '#' + pid);
		part.load();
	});
});


})();
