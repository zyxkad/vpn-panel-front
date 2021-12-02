
(function(){

$(document).ready(function(){
	const $login_username = $('#login-username');
	const $login_password = $('#login-password');
	$('#login-username').focus();
	$('#login-box').on('submit', function(event){
		event.preventDefault();
		const username = $login_username.val();
		if(!username){
			alert('用户名不能为空!');
			$login_username.focus();
			return;
		}
		const password = $login_password.val();
		if(!password){
			alert('密码不能为空!');
			$login_password.focus();
			return;
		}
		const sha256pwd = CryptoJS.SHA256(username + ';' + password).toString(CryptoJS.enc.Hex);
		const remember = $('#login-remember').prop('checked');
		$.ajax({
			type: "POST",
			url: "/api/login",
			data: {
				"username": username,
				"password": password
			},
			success: function(res){
				if(res.data){
					if(res.data.status === 'ok'){
						window.location = '/dashboard';
						return;
					}
					if(res.data.status === 'error'){
						switch(res.data.error){
							case "PasswordError":{
								$login_password.select();
							}break;
						}
						alert(res.data.errorMessage);
						return;
					}
				}
				console.error('Unknown response:', res);
				alert('内部服务器错误');
			},
			failed: function(res){
				console.error('Failed response:', res);
				alert('内部服务器错误');
			}
		});
		// if(!(username === 'admin' && sha256pwd === '466aaf2c87dc07124712dbd9c4f9780c140fe7600f049d4688210c8e5f5aa16c'/* admi730 */)){
		// 	console.log(username, 'try log with wrong password', sha256pwd);
		// 	alert('账号或密码错误!');
		// 	$login_password.select();
		// 	return;
		// }
		// window.location = '/dashboard';
	});
});

})();
