var fs = require('fs');
var array = process.argv;
fs.readFile(array[2],function(err,contents){
var line = 0;
var str = contents.toString();
	for(var i = 0; i < str.length; i++){
    	if(str[i] === '\n')
        	line++;
    }
    console.log(line);
});
