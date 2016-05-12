module.exports = function(functionToTest, comp){
/*
    PARAMETERS:
        functionToTest      : <function: input -> output >
            This is the function that will be tested.
            
        comp (optional)     : <function (a, b) -> boolean >
            A function to compare the desired outputs to the given outputs of the function.
            
    OUTPUT:
        <OUTPUT>            : <function: (input, desiredOut, successScore, failureScore) -> null> 
            A function for unit testing that keeps a score in it's own parameter
            input will be an array of the input arguements.
            
        <OUTPUT>.score      : numeric
            Parameter of the output that keeps a score. Initially will be 0.
            
*/
    if(!comp){
        comp = function(a, b){return a === b;};
    }
    var retFunction = function(input, desiredOut, successScore, failureScore){
        retFunction.score += comp(functionToTest(...input), desiredOut) ? successScore : failureScore;
    };
    retFunction.score = 0;
};
