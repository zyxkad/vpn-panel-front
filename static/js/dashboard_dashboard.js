
(function(){

$(document).ready(function(){
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
		$server_total_count.text(234);
		$online_server_count.text(230);
		$user_total_count.text(3341);
		$online_user_count.text(1794);
		// $.ajax({ // update dashboard datas
		// 	type: "GET",
		// 	url: "/api/dashboard/data",
		// 	success: function(res){
		// 		if(res.data){
		// 			if(res.data.status === 'ok'){
		// 				$server_total_count.text(res.data.server.total);
		// 				$online_server_count.text(res.data.server.online);
		// 				$user_total_count.text(res.data.user.total);
		// 				$online_user_count.text(res.data.user.online);
		// 				return;
		// 			}
		// 			if(res.data.status === 'error'){
		// 				console.error('Get dashboard data error:', res.data.errorMessage);
		// 				return;
		// 			}
		// 		}
		// 		console.error('Unknown response:', res);
		// 	}
		// });
	}
	updateData();
	setInterval(updateData, 3000);
});

})()
