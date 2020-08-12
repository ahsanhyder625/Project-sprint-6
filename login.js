document.getElementById('login').addEventListener('click', function(event) {
	event.preventDefault();
	var username, password, user;
	username = document.getElementById('username');
	password = document.getElementById('password');
	user = JSON.parse(localStorage.getItem([ username.value ]));
	if (user) {
		console.log(user.password, password.value);
		if (user['password'] === password.value) {
			alert('Login Successful');
			window.localStorage.setItem('user', username.value);
			window.location.href = './dashboard.html';
		} else {
			alert('Incorrect Password');
		}
	}
});
