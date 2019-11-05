

 



//sets the entered data to the appropriate variables
function setData(){
  var username = document.getElementById("username").value;
var Name = document.getElementById("Name").value,
 Address = document.getElementById("Address").value,
 Suburb = document.getElementById("Suburb").value,
 City = document.getElementById("City").value,
 country = document.getElementById("country").value,
 state = document.getElementById("state").value,
 Postcode = document.getElementById("Postcode").value,
 Email = document.getElementById("Email").value,
 Phone = document.getElementById("Phone").value,
 Website = document.getElementById("Website").value,
 Age = document.getElementById("Age").value;
 


  localStorage.setItem("username", username);
localStorage.setItem("Name", Name);
localStorage.setItem("Address", Address);
localStorage.setItem("Suburb", Suburb);
localStorage.setItem("City", City);
localStorage.setItem("country", country);
localStorage.setItem("state", state);
localStorage.setItem("Postcode", Postcode);
localStorage.setItem("Email", Email);
localStorage.setItem("Phone", Phone);
localStorage.setItem("Website", Website);
localStorage.setItem("Age", Age);

localStorage.setItem("visted",true);

}

//pre fills the form on reload
function getData(){

  //keep all of this incase stuffing around fails
var username = localStorage.getItem("username"),
  Name = localStorage.getItem("Name"),
 Address = localStorage.getItem("Address"),
 Suburb = localStorage.getItem("Suburb"),
 City = localStorage.getItem("City"),
 country = localStorage.getItem("country"),
 state = localStorage.getItem("state"),
 Postcode = localStorage.getItem("Postcode"), 
 Email = localStorage.getItem("Email"),
 Phone = localStorage.getItem("Phone"),
 Website = localStorage.getItem("Website"),
 Age = localStorage.getItem("Age");

 



 //keep all of this incase stuffing around fails
  document.getElementById("username").value = username;
 document.getElementById("Name").value = Name; 
 document.getElementById("Address").value = Address; 
 document.getElementById("Suburb").value = Suburb;
 document.getElementById("City").value = City;

 if(localStorage.getItem("visted")){ 
  document.getElementById("country").value = country;
  changeState()
  document.getElementById("state").value = state;
}

 document.getElementById("Postcode").value = Postcode;
 document.getElementById("Email").value = Email;
 document.getElementById("Phone").value = Phone;
 document.getElementById("Website").value = Website;
 document.getElementById("Age").value = Age;


 validateLocal();



}









function validateErrors(formField, errorField) {
  theField = document.getElementById(formField);
  
  //create a variable for the form field
  theError = document.getElementById(errorField);
  
  //create a variable for the error field
  var thePattern = new RegExp("^" + theField.pattern + "$");
  //create a new pattern by reading in pattern from HTML and adding delimiters
  if (!thePattern.test(theField.value)) {
    //set a transition because it looks nice
    theField.style.transition = "background .3s";
    //test data in field against regex pattern from HTML
    theField.style.background = "#FF9999";
    //sets field background to red
    theError.style.display = "block";
    //displays the <span> containing the error msg
    theError.innerHTML = theField.title;
    //displays the error message by reading the HTML title and writing it to the
    //span
    theField.focus();
    //set focus to field
    return false;
  } else {
    theField.style.transition = "background .3s";
    theField.style.background = "#CCFFCC";
    //sets field background to green

    theError.style.display = "none";
    //removes error message
    return true;
  }
}



function changeState() {
  // store a reference to country and state select lists
  var country = document.getElementById("country").value;
  var state = document.getElementById("state");

  // if country selected is Australia
  // populate state select list with Australian states
  if (country == "AU") {
    state.innerHTML = "";
    state.options[state.options.length] = new Option("-- select state --", "0");
    state.options[state.options.length] = new Option("South Australia", "SA");
    state.options[state.options.length] = new Option("New South Wales", "NSW");
    state.options[state.options.length] = new Option("Victoria", "VIC");
    state.options[state.options.length] = new Option("Queensland", "QLD");
    state.options[state.options.length] = new Option("Tasmania", "TAS");
    state.options[state.options.length] = new Option("Western Australia", "WA");
    state.options[state.options.length] = new Option(
      "Australian Capital Territory",
      "ACT"
    );
    state.options[state.options.length] = new Option(
      "Northern Territory",
      "NT"
    );
  } else if (country === "NZ") {
    // if country selected is New Zealand
    // populate state select list with New Zealand regions

    state.innerHTML = "";
    //added in 0 for the value on the line below
    state.options[state.options.length] = new Option(
      "-- select region --",
      "0"
    );
    state.options[state.options.length] = new Option("Auckland", "AU");
    state.options[state.options.length] = new Option("Nothland", "NO");
    state.options[state.options.length] = new Option("Southland", "SO");
  } else {
    // if no country selected populate state select list
    // with one option that tells user to select country first
    state.innerHTML = "";
    state.options[state.options.length] = new Option("-- select country first --", "0");
  }

}




// The first option in your country select in your HTML must be
//<option value = "0"> select country </option>
//Call this function using an onchange event on your state select
//Add the same if statement into the end of function changeState() and
//change the id from your state select to your country select

function countryColours() {
  if (document.getElementById("country").value == "0") {
    document.getElementById("country").style.background = "#FF9999";
  } else {
    document.getElementById("country").style.background = "#CCFFCC";
  }
}



function stateColours() {
  if (document.getElementById("state").value == "0") {
    document.getElementById("state").style.background = "#FF9999";
  } else {
    document.getElementById("state").style.background = "#CCFFCC";
  }
}

function validatePostcode(){
  var Postcode = document.getElementById("Postcode");
  var postcodeError = document.getElementById("postcodeError")
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  switch (state) {
    case "SA":
      var postcodeRegEx = /^5[0-9]{3}$/;
      break;
    case "NSW":
       var postcodeRegEx = /^2[0-9]{3}$/;
      break;
       case "QLD":
       var postcodeRegEx = /^4[0-9]{3}$/;
      break;
       case "VIC":
       var postcodeRegEx = /^3[0-9]{3}$/;
      break;
       case "TAS":
       var postcodeRegEx = /^7[0-9]{3}$/;
      break;
       case "WA":
       var postcodeRegEx = /^6[0-9]{3}$/;
      break;
       case "NT":
       var postcodeRegEx = /^(08|09)[0-9]{2}$/;
      break;
       case "ACT":
       var postcodeRegEx = /^2[0-9]{3}$/;
      break;
  }
  if(postcodeRegEx == undefined && country == "NZ"){
    Postcode.style.background = "#CCFFCC";
    //sets field background to green

    postcodeError.style.display = "none";
    //removes error message
  return true;
  }
 else if(postcodeRegEx == undefined ||(!postcodeRegEx.test(Postcode.value)) ){
//failure . You need to add in the code to colour the field red and display the
//test data in field against regex pattern from HTML
    Postcode.style.background = "#FF9999";
    //sets field background to red
    postcodeError.style.display = "block";
    //displays the <span> containing the error msg
    postcodeError.innerHTML = Postcode.title;
    //displays the error message by reading the HTML title and writing it to the
    //span
    Postcode.focus();
    //set focus to field
return false;
}
 else
{
//success. Add code to turn field green and remove any error messages from the
//postcodeError span.
 Postcode.style.background = "#CCFFCC";
    //sets field background to green

    postcodeError.style.display = "none";
    //removes error message
  return true;
}
  
}  


function validate(){
 var elements = document.getElementById("form_one").elements;
 for (var i = 0, element; element = elements[i++];)
	 {
	 if ((element == "[object HTMLInputElement]" || element == "[object HTMLSelectElement]") && (element.style.backgroundColor != "rgb(204, 255, 204)" ))
		 {
		 //if input is not a color picker
		 
		 if (element.type!='color' && element.type!='submit')
			 {
			 alert("Please enter data for any fields that are not green");
			 
			 return false;
			 }
		 }
	 }
 if (document.getElementById("color-checj").value
!='#000000')
 {
 alert("please select a colour from the colour picker");
 document.getElementById("color-checj").focus();
 return false;
 }
}

function validateLocal(){
  var elements = document.getElementById("form_one").elements;
  for (var i = 0, element; element = elements[i++];)
    {
    if (element == "[object HTMLInputElement]" )
      {
      //if input is not a color picker
      
      if (element.type!='color' && element.type!='submit')
        {
          element.value != "" ? validateErrors(element.id.toString(), element.id.toString().toLowerCase() + "Error" )  : null;
        }
      }
      else if(element == "[object HTMLSelectElement]"){
        element.value != "0" ?  element.style.background = "#CCFFCC" : null;
      }
    }
 }


//created a form clear button for ease of testing

function clearForm(){
  var elements = document.getElementById("form_one").elements;
  clearInterval(myInterval);
  localStorage.clear();
 for (var i = 0, element; element = elements[i++];){

   if (element == "[object HTMLInputElement]" || element == "[object HTMLSelectElement]" ){
    if (element.type!='color' && element.type!='submit' && element.type!="button")
    {
      element.type == "select-one" ? element.value = "0" :  element.value = "";
      element.style.background = "white";
    }
   }
 }
}

var myInterval = setInterval(setData, 3000);
