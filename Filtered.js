     var fs = require('fs');  
     var folder = process.argv[2];
     var ext = '\.' + process.argv[3]; //this will be the file extenstion
     var exp = new RegExp(ext);
       
     fs.readdir(folder, function (err, list) {  
       for (var i = 0; i < list.length; i++) {
        	if(list[i].search(exp)!==-1) console.log(list[i]);
        } 
     })  
   