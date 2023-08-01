// 遇到的问题是表格动态创建
var html = "";
for(var i=1; i<=5;i++){
	html +="<tr>"+"<td>"+i.toFixed(2)+"</td>"+"<td>"+i*i.toFixed(2)+"</td>"+"<td>"+(1/i).toFixed(2)+"</td>"+"<td>"+Math.sqrt(i).toFixed(2)+"</td>";
}
document.querySelector(".tbody").innerHTML=html;


function validationChecking(){
	alert("We are checking the validation of your form");
	
	var thereIsAnError = false;
	
	var Name = document.getElementById("name").value;
	var Age = document.getElementById("age").value;
	var Phone = document.getElementById("phone").value;
	
	// The way to search which one is checked. important
	var radio = document.getElementsByName("gender");
	
	var Gender = "";
	if(radio[0].checked){
		Gender="Male";
	}else if(radio[1].checked){
		Gender="Female";
	}
	
	var errInfo="";
	
	if(Name == ""){
		errInfo+="Your name can't be blank. ";
		thereIsAnError = true;
	}else if(Name.length >15){
		errInfo += "Your name is too long. ";
		thereIsAnError = true;
	}
	
	// How to transform a string to number and check if it's a number
	var temp = Number(Age);
	if(!isNaN(temp) && Age<0){
		errInfo+="Age should not be a negative number. ";
		thereIsAnError = true;
	}else if ( isNaN(temp) ) {
		errInfo+="Age should be a number. ";
		thereIsAnError = true;
	}

	if(Gender == "") {errInfo+="Gender must be selected. "; thereIsAnError=true;}
	
	if(thereIsAnError){
		document.getElementById("errors").value = errInfo;
	}else {
		document.getElementById("output").value="Name: "+Name+ " Age: "+Age+" Gender: "+Gender+" Phone: "+ Phone;
	}
}
