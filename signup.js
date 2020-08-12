document.getElementById('signup').addEventListener('click', function(event) {
	event.preventDefault();
	var email, username, password, cnfpassword, mob, arr, address;
	email = document.getElementById('email');
	username = document.getElementById('username');
	password = document.getElementById('password');
	cnfpassword = document.getElementById('cnfpassword');
	mob = document.getElementById('mobile');
	address = document.getElementById('address');
	if (localStorage.getItem([ username.value ])) {
		alert('Username already exist');
	} else if (password.value === cnfpassword.value) {
		arr = {
			email: email.value,
			username: username.value,
			password: password.value,
			mob: mob.value,
			address: address.value
		};
		arr = JSON.stringify(arr);
		localStorage.setItem([ username.value ], arr);
		clearfields(email, username, password, cnfpassword, mob, address);
		alert('New user Created');
	} else {
		alert('Password and confirm password doesnt match');
	}
});
function clearfields(email, username, password, cnfpassword, mob, address) {
	email.value = '';
	username.value = '';
	password.value = '';
	cnfpassword.value = '';
	mob.value = '';
	address.value = '';
}
