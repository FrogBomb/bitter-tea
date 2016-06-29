var TESTPANELS = [];
function getUnitTestContainer(){
    return document.getElementById("unitTestCont");
}
var CODE_INPUT;
function getFunctionCodeFromPage(){
    
//Should return a string that is the text (code) from the "functions" input on the page
	if(!CODE_INPUT){
    	var funcText = document.getElementById("functionText");
		return funcText.value;
	}
	return CODE_INPUT.getValue();
    
}
function getUnitTestPanels(){
    return TESTPANELS;
}
function getInfoFromUnitPanel(panel){
//Get info from a generated unit panel
//  .functionName:      the function of the unit test
//  .testName:      the name of the test
//  .parameters:    the parameters to test on the function
//  .expOutput:     the expected output of the function with the given parameters.
    return {functionName: panel.getFuncName(),
             testName: panel.testName,
             parameters: panel.getParameters(),
             expOutput: panel.getExpOutput()};
    

}

function getUnitTestInfo(){

//Should return an array of objects from the all the unit test panels that each contain the following keys:
//  .function:      the function of the unit test
//  .testName:      the name of the test (for the displayResults functions)
//  .parameters:    the parameters to test on the function
//  .expOutput:     the expected output of the function with the given parameters.
    
    
    return TESTPANELS.map(function(panel){return getInfoFromUnitPanel(panel);});

}

function addNewTestElement(){
    //Adds a new unit test html element to the page and adds it to TESTPANELS.
    
    addNewTestElement.acc += 1;
    var tmp = makeNewDomTestElement("TEST " + addNewTestElement.acc);
    TESTPANELS.push(tmp);
    getUnitTestContainer().appendChild(tmp.dom);
	populateDropdowns();

}

addNewTestElement.acc = 0;

function getFunctionDropDownOptions(){

//Should return the function names from the "functions" input on the page
    
    return findFunctionNames(getFunctionCodeFromPage());
}

function runTest(testName){//TODO!!!
//Should run the test with the given testName (e.g. TEST 1

    var resultInfo = {
		score: 0, //+ or -1
		functionName: "", //name of function
		testName:"", //test number for function
		actualOutput:""	
	};
	var testPan = TESTPANELS.filter(
		fucntion(v){return v.testName === testName;})[0];
	
	if(testPan === undefined){
		console.log("TEST NOT FOUND!");
		return;
	}
    //Put stuff into resultInfo here
    var testPanInfo = getInfoFromUnitPanel(testPan);
	resultInfo.functionName = testPanInfo.functionName;
	resultInfo.testName = testName;
	

}
function runTests(){
//Should run all the tests on the page and then display the results (function for that below)
    displayResults({score: getTotalScore()});
}

function printScoreOnPage(totalScore){
//	var totalScore = getTotalScore();
//Should display the (total) score parameter on the page	
	document.getElementsByClassName("yourScore").innerHTML = "<h3>Your Score: " + totalScore + "</h3>";
	
}

function getTotalScore(){
    return unitTestScoring.getTotalScore();
}
function getResultForTest(testInfo){
    return "<li>"  + resultInfo.functionName + " || " + resultInfo.testNumber + " || " + resultInfo.actualOutput + " || " + resultInfo.score;
}
function displayResults(resultInfo){

//Should display the results from the resultInfo object

    //Just make a new function to handle each key value you expect in result info.
    //for example:
	
    printScoreOnPage(resultInfo.score); 
//	printScoreOnPage();
	document.getElementsByClassName("results").innerHTML = "<li>"  + resultInfo.functionName + " || " + resultInfo.testNumber + " || " + resultInfo.actualOutput + " || " + resultInfo.score
};

//function onTest1(){
//	
//	document.getElementsByClassName("yourScore")[0].innerHTML = "<h3>Your Score: 1</h3>";
//	
//	document.getElementsByClassName("results")[0].innerHTML = "<li> squareRoot || Test 1 || actual outcome: 4 || score: +1 </li>";
//
//	
//};
//function functionsAreNew(inFunctions){
//	if(functionsAreNew.oldFuncs == undefined){
//		functionsAreNew.oldFuncs = [];
//	}
//	var oldFuncs = functionsAreNew.oldFuncs;
//	for(var i = 0; i<Math.max(inFunctions.length, oldFuncs.length); i++){
//		if(oldFuncs[i]!=inFunctions[i]){
//			functionsAreNew.oldFuncs = inFunctions;
//			return true;
//		}
//	}
//	return false;
//}

function populateDropdowns(){
    var dropdowns = document.getElementsByClassName("functionName");
	var funcNames = getFunctionDropDownOptions();
	for (var d = 0; d < dropdowns.length; d++) {
		var dd = dropdowns[d];
		dd.options.length = 0;
		dd.options[0] = new Option("Pick a Function!", "null", true, false);
		for(var f = 0; f<funcNames.length; f++){
			var op = new Option(funcNames[f], funcNames[f], false, false);
			 dd.add( op );
		}
	}
}


