handlebars.registerHelper('unitPanel', function(funcName, paramArr, options){
	/*
	funcName : str
		Name of the function
		
	paramArr : str[]
		Array of parameter strings
	*/
	 return options.fn({coolStuff: funcName, paramArr: paramArr});
});

handlebars.registerHelper('paramFields', function(paramArr, options){
	/*
	paramArr : str[]
		Array of parameter strings
	*/
	var ret = "";
	for(var i = 0; i<paramArr.length; i++){
		ret += options.fn({label:paramArr[i]});
	}
});
/*
funcName = "sum";
numParams = 2;

function sum(arg0, arg1){...}
*/