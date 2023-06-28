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