function isalpha(hash){
	if(hash.search(/[^A-Za-z\s]/) != -1){
		return false;
	} else {
		return true;
	}
}

function islower(hash){
	if (hash == hash.toLowerCase()){
		return true;
	} else {
		return false;
	}
}

function justCharDig(hash){
	return !/[^a-z0-9\-]/ig.test(hash);
}

function isalnum(hash){
	var exp = /^([0-9]|[a-z])+([0-9a-z]+)$/i;

	if(!hash.match(exp)){
		return false;
	} else {
		return true;
	}
}

function isint(hash){
	if (hash = int(hash)) {
		return true;
	} else {
		return false;
	}
}

function justhex(hash){
	if(hash.search(/[G-Zg-z]/) != -1){
		return false;
	} else {
		return true;
	}
}

function simplerange(stop){
	var arr = [];
	var num = 0;
	while(num < stop){
		arr.push(num);
		num += 1;
	}
	return arr;
}

function clear(){
	document.getElementById('inputHash').value = '';
}

function loaded(){
	if(location.hash){
		inputHash = location.hash.substring(1);
		document.getElementById("inputHash").value = inputHash;
		start();
	} else {
		var input = document.getElementById("inputHash");
		input.value = '';
	}
}