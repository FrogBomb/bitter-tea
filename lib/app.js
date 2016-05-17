function getFunctionCodeFromPage(){
    
//Should return a string that is the text (code) from the "functions" input on the page
}

function getUnitTestInfo(){}

//Should return an array of objects from the all the unit test panels that each contain the following keys:
//  .function:      the function of the unit test
//  .testName:      the name of the test (for the displayResults functions)
//  .parameters:    the parameters to test on the function
//  .expOutput:     the expected output of the function with the given parameters.

function addNewTestElement(){
    
//Adds a new unit test html element.
}

function getFunctionDropDownOptions(){

//Should return the function names from the "functions" input on the page
    
    return findFunctionNames(getFunctionCodeFromPage());
}

function runTests(){

//Should run all the tests on the page and then display the results (function for that below)
    var resultInfo = {
		score:"", //+ or -1
		functionName: "", //name of function
		testNumber:"", //test number for function
		actualOutput:""	
	};
    //Put stuff into resultInfo here
    displayResults(resultInfo);

}


function printScoreOnPage(){
	var totalScore = getTotalScore();
//Should display the (total) score parameter on the page	
	document.getElementsByClassName("yourScore").innerHTML = "<h3>Your Score: " + totalScore + "</h3>";
	
}

function displayResults(resultInfo){

//Should display the results from the resultInfo object
    
    //Just make a new function to handle each key value you expect in result info.
    //for example:
	
//    printScoreOnPage(resultInfo.score); 
	
	document.getElementsByClassName("results").innerHTML = "<li>"  + resultInfo.functionName + " || " + resultInfo.testNumber + " || " + resultInfo.actualOutput + " || " + resultInfo.score
};