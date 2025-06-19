/**
 * Rayone Web App Form Handler
 * For use with landing page forms and blog subscriptions
 * 
 * Handles form submissions from:
 * - Main waitlist form
 * - Blog subscription forms
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    var timestamp = new Date();
    var params = e.parameter;
    var email = params.email;
    var name = params.name || ""; // Optional name field for blog subscriptions
    var source = params.source || "main_form"; // Track which form was used
    
    // Validate email
    if (!email || !validateEmail(email)) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Please provide a valid email address."
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Check if this email already exists - optional duplicate prevention
    var data = sheet.getDataRange().getValues();
    var isDuplicate = false;
    
    for (var i = 0; i < data.length; i++) {
      if (data[i][1] === email) {
        isDuplicate = true;
        break;
      }
    }
    
    if (isDuplicate) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "info",
        message: "You're already on our list!"
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // All good, append the row with all data
    sheet.appendRow([timestamp, email, name, source]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Thank you! You've been added to our list."
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    Logger.log("Error in form submission: " + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: "An error occurred: " + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function validateEmail(email) {
  var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}
