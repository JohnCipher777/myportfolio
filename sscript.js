function askPassword() {
   var rptn_limit_notfnd = true;
   var repetation = 0;
do{
  var password = prompt("ENTER KEY:");
  if (password === null) {
    // User clicked "Cancel" in the prompt 
    return; // Exit the function
  }

  if (password === "Ftzog@445@#$777") {
    var purpose = prompt("WHAT'S YOUR PURPOSE: ");
    
    // User clicked "Cancel" in the prompt
    if (purpose === null || purpose === " ") {
        return; // Exit the function
      }

    //analyze the user purpose if valid
    if(purpose == "Job" || purpose == "job"){
        location.href = "documents/RESUME.rar";
        return;//exit the function
    }else{
        alert("ACCESS DENIED.");
        rptn_limit_notfnd = false;
    }
  } else {
      if(password.trim() === ''){
        alert("DON'T LEAVE IT BLANK");
        repetation++;
      }else{
        alert("INCORRECT PASSWORD!.\nPLEASE TRY AGAIN.");
        repetation++;
      }

      if(repetation==3){
        alert("LOOKS LIKE YOU REACH THE MAXIMUM ATTEMPT!\nPLEASE CLICK DOWNLOAD AGAIN IF YOU WISH TO TRY AGAIN");
        rptn_limit_notfnd = false;
       }else{
        rptn_limit_notfnd = true;
      }
  }
 }while(rptn_limit_notfnd);
}

function showWelcomeMessage(){
    var name = prompt("What's your Name?:");
      if (name) {
        alert("HELLO, " + name.toUpperCase() + "!\nWELCOME TO MY PORTFOLIO.");
      } else {
        alert("HELLO, ANONYMOUS!\nWELCOME TO MY PORTFOLIO.");
      }
}

function clearForm() {
  // Get the form element
  var form = document.getElementById("contactForm");

  // Get all input fields within the form
  var input  = form.getElementsByTagName("input");
  var inputs = form.getElementsByTagName("select");
  var inputs2 = form.getElementsByTagName("textarea");

  // Check if all input fields are empty
  var isEmpty = true;
  for (var i = 0; i < inputs.length; i++) {
    if (input[i].value.trim() !== "" || inputs[i].value.trim() !== "" || inputs2[i].value.trim() !== "") {
      isEmpty = false;
      break;
    }
  }

  // Display a message if all fields are empty
  if (isEmpty) {
    alert("No Data Entered.\n Nothing to Clear.");
  }else{
    // Reset the form
    //the inputted value for message box should be reset if the message box
    //is the only box that has a value also the list of items should be also resetted
    //if it was the only box that has a value
    alert("Do you want to proceed?");
    form.reset();       
  }
}
