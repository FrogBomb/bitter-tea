function findFunctionNames(codestr){
    /*
    Attempts to finds the javascript functions in a string containing javascript code. 
    
    PARAMETERS:
        codestr: A string of javascript code
        
    OUTPUT:
        An array of the function names from the input string. WILL NOT FIND ANONYMOUS FUNCTIONS
        OR FUNCTIONS INSIDE ANOTHER FUNCTION CONTEXT!
    */
    var firstLayerCodestr = codestr.split("{")
		.map(function(val){
		if(val.lastIndexOf("}") == -1){
			return val;
		}
		return val.slice(val.lastIndexOf("}"));})
		.join('{...}').match(/function\s+\w+/g);
	if(firstLayerCodestr){
    	return firstLayerCodestr.map(function(val){return val.slice(val.lastIndexOf(" ")).trim();})
	}
	return [];
                                                   
}

function findFunctions(codestr){//The worst code ever. 
    /*
        Returns an object with keys to the functions defined in codestr
    */
    var _________retObj = {};
    var fNames = findFunctionNames(codestr);
    for(var i = 0; i<fName.length; i++){
        _________retObj[fNames[i]] = undefined;
    }
    eval(codestr);
    for(var __keyValuesInRet in _________retObj){
        _________retObj[__keyValuesInRet] = eval(__keyValuesInRet);
    }
    return _________retObj;
}