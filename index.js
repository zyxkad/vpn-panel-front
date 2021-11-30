
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
		const sha256pwd = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
		// TODO checkPassword // username, sha256pwd;
		if(!(username === 'admin' && sha256pwd === 'a671507ee66ddc02929cc29039dddbc2fb0fd3d0f1284c0a3048385b7595c414'/* admi730 */)){
			console.log(username, 'try log with wrong password', sha256pwd);
			alert('账号或密码错误!');
			$login_password.select();
			return;
		}
		console.log(username, 'was logged with password', sha256pwd);
		window.location = './dashboard.html';
	});
});

})();
