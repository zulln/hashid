//string.lengh		= len(string)
//arr.push(string)	= arr.append(string)

//!isNaN(string)	= string.isdigit()
//isalpha(string)	= string.isalpha()

//islower(string)	= string.islower()
//isalnum(string)	= string.isalnum()  alfanumerico

function isalpha(hash){
	if(hash.search(/[^A-Za-z\s]/) != -1){
		return false; //if something else than letters
	}
	return true;
}

function islower(hash){
	if (hash == hash.toLowerCase()){
		return true;
	} else {
		return false;
	}
}

function isalnum(hash){
	var exp = /^([0-9]|[a-z])+([0-9a-z]+)$/i;

	if(!hash.match(exp)){
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