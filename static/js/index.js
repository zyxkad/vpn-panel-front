
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
				if(res.status === 'ok'){
					window.location = '/dashboard';
					return;
				}
				if(res.status === 'error'){
					switch(res.error){
						case "PasswordError":{
							$login_password.select();
							alert('帐号或密码错误');
						}break;
						default:{
							alert(res.errorMessage);
						}
					}
					return;
				}
				console.error('Unknown response:', res);
				alert('内部服务器错误: 未知响应体');
			},
			failed: function(res){
				console.error('Failed response:', res);
				alert('内部服务器错误');
			}
		});
	});
});

})();
