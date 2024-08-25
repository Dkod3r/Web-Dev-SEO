// JavaScript Document
window.addEventListener("load", go);

function go(){
	document.getElementById("resetButton").addEventListener("click",function(){
		var fieldList = document.getElementsByClassName('selected');
		for(var i = 0; i < fieldList.length; i++){
			fieldList[i].classList.remove("error");
			fieldList[i].value = "";
		} // hide all error messages
		document.getElementById("hFirst").classList.add("hidden");
		document.getElementById("hLast").classList.add("hidden");
		document.getElementById("hPhone").classList.add("hidden");
		document.getElementById("hEmail").classList.add("hidden");
		document.getElementById("hPass").classList.add("hidden");
		document.getElementById("success").classList.add("hidden");
		alert("Input cleared.");
	});
	
	var submit = document.getElementById('submitButton');
	submit.addEventListener('click', function(e) {
		e.preventDefault();
		var selected = document.getElementsByClassName('selected');
		var message = ""; //gets filled with error fields
		
		//main fields
		for(var i = 0; i < selected.length-1; i++){
			if(selected[i].value == null || selected[i].value == "" || selected[i].classList.contains("error")){
				message = message + selected[i].id + " ";
				selected[i].classList.add("error");
			} else {
				selected[i].classList.remove("error");
			}
		}
		
		//frequency
		if (document.getElementById("frequency").value == "0"){
			message = message + "frequency";
			document.getElementById("frequency").classList.add("error");
		} else {
			document.getElementById("frequency").classList.remove("error");
		}
		
		//error message
		if (message != ""){
			message = "There are errors in the following fields:\n" + message;
			alert(message);
			message = "";
		} else {
			document.getElementById("success").classList.remove("hidden");
			const form = document.forms.signup;
			form.submit();
		}
		
		
	});
	
	//first name regex testing
	var firstName = document.getElementById('firstName');
	firstName.addEventListener("blur", function(){
		if(0 > firstName.value.search(/^[A-Za-z]+$/)){
			firstName.classList.add("error");
			document.getElementById("hFirst").classList.remove("hidden");
		} else {
			firstName.classList.remove("error");
			document.getElementById("hFirst").classList.add("hidden");
		}
	});
	
	//last name regex testing
	var lastName = document.getElementById('lastName');
	lastName.addEventListener("blur", function(){
		if(0 > lastName.value.search(/^[A-Za-z]+$/)){
			lastName.classList.add("error");
			document.getElementById("hLast").classList.remove("hidden");
		} else {
			lastName.classList.remove("error");
			document.getElementById("hLast").classList.add("hidden");
		}
	});
	
	//phone regex testing
	var phone = document.getElementById('phoneNumber');
	phone.addEventListener("blur", function(){
		if(0 > phone.value.search(/[0-9]{10}/)){
			phone.classList.add("error");
			document.getElementById("hPhone").classList.remove("hidden");
		} else {
			phone.classList.remove("error");
			document.getElementById("hPhone").classList.add("hidden");
		}
	});
	
	//email regex testing
	var email = document.getElementById('email');
	email.addEventListener("blur", function(){
		if(0 > email.value.search(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)){
			email.classList.add("error");
			document.getElementById("hEmail").classList.remove("hidden");
		} else {
			email.classList.remove("error");
			document.getElementById("hEmail").classList.add("hidden");
		}
	});
	
	//password regex testing
	var password = document.getElementById('password');
	password.addEventListener("blur", function(){
		if(0 > password.value.search(/(?=.*\d)(?=.*[a-z]).{6,9}/)){
			password.classList.add("error");
			document.getElementById("hPass").classList.remove("hidden");
		} else {
			password.classList.remove("error");
			document.getElementById("hPass").classList.add("hidden");
		}
	});
}