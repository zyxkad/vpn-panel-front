
(function(){

const PAGE = window.Page({
	id: "dashboard",
	title: "仪表盘",
	body: `
<div id="user">
	<div id="user-info">
		<img id="user-head" src="https://modao.cc/uploads4/images/6841/68419283/v2_qvovp0.jpg"/>
		<div id="user-info-r">
			<span id="user-name">username</span>
			<span id="user-welecome"></span>
		</div>
	</div>
	<div id="user-info2">
		<div id="user-last-login">
			最后登录
			<span id="user-last-login-data">2006-01-02 15:04</span>
		</div>
	</div>
</div>
<section id="counter-box">
	<div class="counter">
		<label for="server-total-count">服务器总数</label>
		<span id="server-total-count">-</span>
	</div>
	<div class="counter">
		<label for="online-server-count">在线服务器</label>
		<span id="online-server-count">-</span>
	</div>
	<div class="counter">
		<label for="user-total-count">VPN用户总数</label>
		<span id="user-total-count">-</span>
	</div>
	<div class="counter">
		<label for="online-user-count">在线用户</label>
		<span id="online-user-count">-</span>
	</div>
</section>
<section id="server-list">
	<header id="server-list-header">
		<h3>服务器列表</h3>
	</header>
	<div id="server-list-box">
		<div class="server-list-item">
			<div class="server-list-item-desc">
				<img class="server-list-item-head" src="https://modao.cc/uploads5/images/7694/76945034/v2_r3ayzx.png" alt="server-list-item-head"/>
				<div>
					<span class="server-list-item-name">vpn-01</span>
					<span class="server-list-item-ip">127.123.45.67</span>
				</div>
			</div>
			<div class="server-list-item-i">
				<label>运营商</label>
				<span class="server-list-item-operator">联通</span>
			</div>
			<div class="server-list-item-i">
				<label>用户数</label>
				<span class="server-list-item-user-total">12</span>
			</div>
			<div class="server-list-item-i">
				<label>上线时间</label>
				<span class="server-list-item-online-date">2017-01-02 23:12</span>
			</div>
			<div class="server-list-item-i">
				<label>已使用流量</label>
				<span>
					上行:<span class="server-list-item-used-upload">13.25GB</span> /
					下行:<span class="server-list-item-used-download">26.31GB</span>
				</span>
			</div>
			<div class="server-list-item-i">
				<label>在线用户</label>
				<span class="server-list-item-online-user">11</span>
			</div>
			<div class="server-list-item-more">
				<a class="server-list-item-more-desc" href="javascript:void(0)">详情</a> |
				<a class="server-list-item-more-more" href="javascript:void(0)">
					更多
					<svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="64 64 896 896" style="width:0.7rem;height:0.7rem;"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
				</a>
			</div>
		</div>
		<div class="server-list-item">
			<div class="server-list-item-desc">
				<img class="server-list-item-head" src="https://modao.cc/uploads5/images/7694/76945035/v2_r3az0q.png" alt="server-list-item-head"/>
				<div>
					<span class="server-list-item-name">vpn-02</span>
					<span class="server-list-item-ip">13.164.163.14</span>
				</div>
			</div>
			<div class="server-list-item-i">
				<label>运营商</label>
				<span class="server-list-item-operator">移动</span>
			</div>
			<div class="server-list-item-i">
				<label>用户数</label>
				<span class="server-list-item-user-total">31</span>
			</div>
			<div class="server-list-item-i">
				<label>上线时间</label>
				<span class="server-list-item-online-date">4444-11-11 11:11</span>
			</div>
			<div class="server-list-item-i">
				<label>已使用流量</label>
				<span>
					上行:<span class="server-list-item-used-upload">12.34GB</span> /
					下行:<span class="server-list-item-used-download">98.76TB</span>
				</span>
			</div>
			<div class="server-list-item-i">
				<label>在线用户</label>
				<span class="server-list-item-online-user">9721</span>
			</div>
			<div class="server-list-item-more">
				<a class="server-list-item-more-desc" href="javascript:void(0)">详情</a> |
				<a class="server-list-item-more-more" href="javascript:void(0)">
					更多
					<svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="64 64 896 896" style="width:0.7rem;height:0.7rem;"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
				</a>
			</div>
		</div>
	</div>
</section>`,
	assets: {
		css: ["/static/font/syht/font.css", "/static/css/dashboard_dashboard.css"]
	},
	onload: function(){
		const $user_welecome = $('#user-welecome');
		const $server_total_count = $('#server-total-count');
		const $online_server_count = $('#online-server-count');
		const $user_total_count = $('#user-total-count');
		const $online_user_count = $('#online-user-count');
		function updateData(){
			{ // update welecone
				let date = new Date();
				$user_welecome.text('欢迎, 现在系统时间是: ' + date.getFullYear() + '-' + new String(date.getMonth()).padStart(2, '0') +
					'-' + new String(date.getDate()).padStart(2, '0') + ' ' + new String(date.getHours()).padStart(2, '0') +
					':' + new String(date.getMinutes()).padStart(2, '0') + ':' + new String(date.getSeconds()).padStart(2, '0'));
			}
			$.ajax({ // update dashboard datas
				type: "GET",
				url: "/api/dashboard/data",
				success: function(res){
					if(res.status === 'ok'){
						$server_total_count.text(res.server.total);
						$online_server_count.text(res.server.online);
						$user_total_count.text(res.user.total);
						$online_user_count.text(res.user.online);
						return;
					}
					if(res.status === 'error'){
						console.error('Get dashboard data error:', res.data.errorMessage);
						return;
					}
					console.error('Unknown response:', res);
				}
			});
		}
		updateData();
		this.interval1 = setInterval(updateData, 3000);
	},
	onunload: function(){
		if(this.interval1){
			clearInterval(this.interval1);
		}
	}
});

})()
