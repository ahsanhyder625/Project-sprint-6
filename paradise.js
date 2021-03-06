var cart = [];
var container = document.querySelector('.container');
var cart1 = document.getElementById('cart');
if (container) {
	container.addEventListener('click', (event) => {
		if (event.target.parentNode.id) {
			var currentcart = event.target.parentNode.id;
			var split = currentcart.split(' ');
			var data = split.slice(0, split.length - 1);
			// console.log(data.join(' '));
			cart.push([ data.join(' '), split[split.length - 1] ]);
		}
		window.localStorage.setItem('cart', JSON.stringify(cart));
		// console.log(cart);
		// console.log(window.localStorage.getItem('cart'));
	});
}
if (cart1) {
	cart1.addEventListener('click', () => {
		event.preventDefault();
		location.href = 'cart.html';
	});
}
if (window.location.href.match('cart.html') != null) {
	var cart = JSON.parse(window.localStorage.getItem('cart'));
	var table = document.querySelector('.tbody');
	var html, newhtml;
	var sum = 0;
	// console.log(cart[0][0], cart.length);
	for (var i = 0; i < cart.length; i++) {
		// var tr = document.createElement('tr');
		// var td1 = document.createElement('td');
		// var td2 = document.createElement('td');
		// var td3 = document.createElement('td');
		// td1.textContent = i + 1;
		// td2.textContent = cart[i][0];
		// td3.textContent = cart[i][1];
		sum += parseInt(cart[i][1]);
		html = '<tr><td scope="row">%id%</td><td scope="row">%dish%</td><td>%price%</td></tr>';
		newhtml = html.replace('%id%', i + 1);
		newhtml = newhtml.replace('%dish%', cart[i][0]);
		newhtml = newhtml.replace('%price%', cart[i][1]);
		table.insertAdjacentHTML('beforeend', newhtml);
		// tr.appendChild(td1, td2, td3);
		// table.appendChild(tr);
	}
	document.getElementById('total').textContent = sum + 25;
	document.getElementById('confirm').addEventListener('click', () => {
		if (JSON.parse(window.localStorage.getItem('cart')).length == 0) {
			alert('Please add item to cart before placing order!');
		} else if (window.localStorage.getItem('user') || JSON.parse(window.localStorage.getItem('cart')).length > 0) {
			window.location.href = 'dashboard.html';
			alert(`Ordered Placed with order number ${Math.floor(Math.random() * 10000000000) + 1}`);
			cart = [];
			window.localStorage.removeItem('cart');
		} else {
			alert('Please Login');
		}
	});
}

if (window.location.href.match('index.html') != null || window.location.href.match('dashboard.html') != null) {
	document.getElementById('search-button').addEventListener('click', () => {
		event.preventDefault();
		var search = document.getElementById('search-box').value.toLowerCase();
		if (search.split(' ').length > 1) {
			search = search.split(' ').join('');
		}
		window.location.href = `${search}.html`;
	});
	var logout = document.getElementById('logout');
	if (logout) {
		logout.addEventListener('click', () => {
			window.localStorage.removeItem('user');
			window.location.href = 'index.html';
		});
	}
}
