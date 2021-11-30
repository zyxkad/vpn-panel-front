
(function(){

$(document).ready(function(){
	const $user_welecome = $('#user-welecome');
	function updateWelecome(){
		let date = new Date();
		$user_welecome.text('欢迎, 现在系统时间是: ' + date.getFullYear() + '-' + new String(date.getMonth()).padStart(2, '0') +
			'-' + new String(date.getDate()).padStart(2, '0') + ' ' + new String(date.getHours()).padStart(2, '0') +
			':' + new String(date.getMinutes()).padStart(2, '0') + ':' + new String(date.getSeconds()).padStart(2, '0'));
	}
	updateWelecome();
	setInterval(updateWelecome, 1000);
});

})()
