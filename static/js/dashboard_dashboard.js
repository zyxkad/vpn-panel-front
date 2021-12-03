
(function(){

$(document).ready(function(){
	const $user_welecome = $('#user-welecome');
	const $server_total_count = $('#server-total-count');
	const $online_server_count = $('#online-server-count');
	const $user_total_count = $('#user-total-count');
	const $online_user_count = $('#online-user-count');
	function updateData(){
		var date = new Date();
		{ // update welecone
			$user_welecome.text('欢迎, 现在系统时间是: ' + date.getFullYear() + '-' + new String(date.getMonth()).padStart(2, '0') +
				'-' + new String(date.getDate()).padStart(2, '0') + ' ' + new String(date.getHours()).padStart(2, '0') +
				':' + new String(date.getMinutes()).padStart(2, '0') + ':' + new String(date.getSeconds()).padStart(2, '0'));
		}
		$.ajax({ // update dashboard datas
			async: false,
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

		setTimeout(updateData, 3000 - (Math.ceil(new Date().getMilliseconds() / 1000) * 1000 - date.getMilliseconds()));
	}
	updateData();
});

})()
