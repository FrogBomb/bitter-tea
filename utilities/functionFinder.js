function findFunctionNames(codestr){
    /*
    Attempts to finds the javascript functions in a string containing javascript code. 
    
    PARAMETERS:
        codestr: A string of javascript code
        
    OUTPUT:
        An array of the function names from the input string. WILL NOT FIND ANONYMOUS FUNCTIONS!
    */
    var funcRE = /(^\s*function\s*)[\w]+(?=\()/g;
    return funcRE.match(codestr); 
}

function findFunctions(codestr){
}

module.exports = {
    findFunctionNames: findFunctionNames
}