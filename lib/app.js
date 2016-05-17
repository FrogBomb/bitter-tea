function getFunctionCodeFromPage(){
    
//Should return a string that is the text (code) from the "functions" input on the page
    var funcText = document.getElementById("functionText");
    return funcText.value;
}
function getUnitTestPanels(){} //TODO
function getInfoFromUnitPanel(panel){
//Get info from a DOM panel
//  .function:      the function of the unit test
//  .testName:      the name of the test (for the displayResults functions)
//  .parameters:    the parameters to test on the function
//  .expOutput:     the expected output of the function with the given parameters.
    return = {function: getFunctionFromTest(panel),
             testName: getTestNameFromTest(panel),
             parameters: getParametersFromTest(panel),
             expOutput: getExpOutputFromTest(panel)};
    

}
function getFunctionFromTest(panel){}
function getTestNameFromTest(panel){}
function getParametersFromTest(panel){}
function getExpOutputFromTest(panel){}
function getUnitTestInfo(){}

//Should return an array of objects from the all the unit test panels that each contain the following keys:
//  .function:      the function of the unit test
//  .testName:      the name of the test (for the displayResults functions)
//  .parameters:    the parameters to test on the function
//  .expOutput:     the expected output of the function with the given parameters.
    
    var unitPanels = getUnitTestPanels();
    return unitPanels.map(function(panel){return getInfoFromUnitPanel(panel);}]);

}

function addNewTestElement(){
    
    addNewTestElement.acc += 1;
//Adds a new unit test html element to the page.
}

addNewTestElement.acc = 0;
function getFunctionDropDownOptions(){

//Should return the function names from the "functions" input on the page
    
    return findFunctionNames(getFunctionCodeFromPage());
}

function runTests(){

//Should run all the tests on the page and then display the results (function for that below)
    var resultInfo = {};
    //Put stuff into resultInfo here
    displayResults(resultInfo);

}

function printScoreOnPage(score){

//Should display the score parameter on the page
}

function displayResults(resultInfo){

//Should display the results from the resultInfo object
    
    //Just make a new function to handle each key value you expect in result info.
    //for example:
    printScoreOnPage(resultInfo.score); 
}