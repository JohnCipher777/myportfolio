function askPassword() {
  const maxAttempts = 3;
  var maxAttemptsNotFound = true;
  var attempts = 0;
  do {
      var password = prompt("ENTER KEY:");
      if (password === null) {
          // User clicked "Cancel" in the prompt
          return; // Exit the function
      }
      
      if (password === "A23#HbfKzP:L.Rx@%^#@777") {
          var purpose = prompt("WHAT'S YOUR PURPOSE:");
          // User clicked "Cancel" in the prompt
          if (purpose === null || purpose.trim() === "") {
              return; // Exit the function
          }

          // Analyze the user purpose if valid
          if (purpose === "job" || purpose === "JOB" || purpose === "Job") {
              alert("ACCESS GRANTED.\nCLICK OK TO PROCEED");
              location.href = "documents/RESUME.rar";
              return; // Exit the function
          } else {
              alert("ACCESS DENIED.");
              attempts++;
          }

          if (attempts === maxAttempts) {
            alert("LOOKS LIKE YOU REACHED THE MAXIMUM ATTEMPTS!\nPLEASE CLICK DOWNLOAD BUTTON IF YOU WISH TO TRY AGAIN");
            maxAttemptsNotFound = false;
            return;
          }
      } else {
          if (password.trim() === '') {
              alert("DON'T LEAVE IT BLANK");
              attempts++;
          } else {
              alert("INVALID KEY!\nPLEASE TRY AGAIN.");
              attempts++;
          }

          if (attempts === maxAttempts) {
            alert("LOOKS LIKE YOU REACHED THE MAXIMUM ATTEMPTS!\nPLEASE CLICK DOWNLOAD BUTTON IF YOU WISH TO TRY AGAIN");
            maxAttemptsNotFound = false;
            return;
          }
      }
  } while (maxAttemptsNotFound);
}

// Function to load and append the popup content
function loadPopupContent() {
 var xhr = new XMLHttpRequest();
 xhr.open("GET", "popup.html", true);
 xhr.onreadystatechange = function () {
     if (xhr.readyState === XMLHttpRequest.DONE) {
         if (xhr.status === 200) {
             // Append the content of the response to the body of main.html
             document.body.innerHTML += xhr.responseText;

             // Show the popup after appending the content
             showPopup();
         } else {
             console.error("Failed to fetch popup content.");
         }
     }
 };
 xhr.send();
}

// Function to show the popup
function showPopup() {
 var popup = document.getElementById('popup');
 popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
 var popup = document.getElementById('popup');
 popup.style.display = 'none';
}
function isMobileDevice() {
 return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function showWelcomeMessage() {
 if (isMobileDevice()) {
   alert("WELCOME TO MY PORTFOLIO");
 }else{
   loadPopupContent();
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
