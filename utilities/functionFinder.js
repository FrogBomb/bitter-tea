function findFunctionNames(codestr){
    /*
    Attempts to finds the javascript functions in a string containing javascript code. 
    
    PARAMETERS:
        codestr: A string of javascript code
        
    OUTPUT:
        An array of the function names from the input string. WILL NOT FIND ANONYMOUS FUNCTIONS
        OR FUNCTIONS INSIDE ANOTHER FUNCTION CONTEXT!
    */
    var funcRE = /^(?:[^\{(?!\})]\s*function\s*)[\w]+\s*(?=\()/g;
    return funcRE.match(codestr); 
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

module.exports = {
    findFunctionNames   : findFunctionNames,
    findFunctions       : findFunctions
}