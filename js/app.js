var inputOperandA = document.querySelector("#operand_a");
var inputOperandB = document.querySelector("#operand_b");
var inputOperator = document.querySelector("#operator");
var output = document.querySelector("#output");
var error = document.querySelector("#error");

var showError = function(){
	error.setAttribute("class", "");
};

var hideError = function(){
	error.setAttribute("class", "hidden");
};

var showResult = function(result){
	output.value = result + "";
};



var multiply = function(a, b){
	return a * (100-b)/100;
};



var isOperator = function(operator){
	return operator == "*";
};

var isNumber = function(a){
	return !Number.isNaN(a);
};

var isNonZeroNumber = function(a){
	return isNumber(a) && a != 0;
};

var isInteger = function(a){
	return Number.isInteger(a);
};

var isNaturalNumber = function(a){
	return isInteger(a) && a > 0;
};
var isNaturalNumber = function(b){
	return isInteger(b) && b > 0 && b <100;
};

var isMultiplication = function(operator, a, b){
	return operator == "*" && isNumber(a) && isNumber(b);
}


var isReady = function(operator, a, b){
	return  isMultiplication(operator, a, b);
};

var startCalc = function(){
	var operandA = inputOperandA.value;
	var operandB = inputOperandB.value;
	var operator = inputOperator.value;

	operandA = Number(operandA);
	operandB = Number(operandB);

	hideError();
	if(isReady(operator, operandA, operandB)){
		var result = 0;
		if(operator == "*"){
			result = multiply(operandA, operandB);
		}
		showResult(result);
	}else{
		showError();
	}
};


var initApp = function(){//ボタンを押して実行
	var calcButton = document.querySelector("#calcButton");

	calcButton.addEventListener("click", startCalc)
};

initApp(); 
