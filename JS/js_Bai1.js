function RandomNumber(so) {
	var x = Math.floor((Math.random() * so) + 1)
	document.getElementsByName("KetQua")[0].value = x;
}
function RandomManyNumber(so) {
	var soLan = so;
	var daySo = [];
	while (soLan > 0) {
		var x = Math.floor((Math.random() * so) + 1)
		daySo.push(x);
		soLan--;
	}
	document.getElementById('ketQua').innerHTML = daySo;
}
