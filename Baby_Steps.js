var array = process.argv;
var result = 0;
for (var i = 2; i < array.length; i++) {
	result += parseInt(array[i]);
}
console.log(result);