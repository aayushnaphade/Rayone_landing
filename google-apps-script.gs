// Google Apps Script for handling both email collection and questionnaire responses
// This code should be added to your existing Google Apps Script project

function doPost(e) {
  try {
    const params = e.parameter;
    const formType = params.formType;
    
    // Get the spreadsheet (replace with your actual spreadsheet ID)
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    
    if (formType === 'questionnaire') {
      // Handle questionnaire responses
      return handleQuestionnaireResponse(spreadsheet, params);
    } else {
      // Handle email collection (existing functionality)
      return handleEmailCollection(spreadsheet, params);
    }
    
  } catch (error) {
    console.error('Error in doPost:', error);
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function handleQuestionnaireResponse(spreadsheet, params) {
  try {
    // Get or create the UserSurvey sheet
    let sheet = spreadsheet.getSheetByName('UserSurvey');
    
    if (!sheet) {
      // Create the sheet if it doesn't exist
      sheet = spreadsheet.insertSheet('UserSurvey');
      
      // Add headers
      const headers = [
        'Timestamp',
        'Role',
        'AI Usage Plan',
        'Important Features',
        'LLM Preference',
        'Current Usage',
        'IP Address',
        'User Agent'
      ];
      
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format the header row
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#7a07c7');
      headerRange.setFontColor('white');
      headerRange.setFontWeight('bold');
      headerRange.setFontSize(11);
    }
    
    // Get the current timestamp
    const timestamp = new Date();
    
    // Prepare the row data
    const rowData = [
      timestamp,
      params.role || 'Not specified',
      params.aiUsage || 'Not specified',
      params.features || 'Not specified',
      params.llmPreference || 'Not specified',
      params.currentUsage || 'Not specified',
      getClientIP(),
      getClientUserAgent()
    ];
    
    // Add the new row
    sheet.appendRow(rowData);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, sheet.getLastColumn());
    
    // Add some formatting to the data
    const lastRow = sheet.getLastRow();
    const dataRange = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn());
    dataRange.setBorder(true, true, true, true, true, true);
    
    console.log('Questionnaire response saved successfully');
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Questionnaire response saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    console.error('Error handling questionnaire response:', error);
    throw error;
  }
}

function handleEmailCollection(spreadsheet, params) {
  try {
    // Get or create the Sheet1 (existing email collection)
    let sheet = spreadsheet.getSheetByName('Sheet1');
    
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Sheet1');
      
      // Add headers for email collection
      const headers = ['Timestamp', 'Email', 'Source', 'IP Address', 'User Agent'];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format the header row
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#bd4bff');
      headerRange.setFontColor('white');
      headerRange.setFontWeight('bold');
    }
    
    // Get the current timestamp
    const timestamp = new Date();
    
    // Prepare the row data
    const rowData = [
      timestamp,
      params.email || '',
      params.source || 'unknown',
      getClientIP(),
      getClientUserAgent()
    ];
    
    // Add the new row
    sheet.appendRow(rowData);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, sheet.getLastColumn());
    
    console.log('Email saved successfully');
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Email saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    console.error('Error handling email collection:', error);
    throw error;
  }
}

// Helper function to get client IP (limited in Apps Script)
function getClientIP() {
  try {
    return Session.getTemporaryActiveUserKey() || 'Unknown';
  } catch (e) {
    return 'Unknown';
  }
}

// Helper function to get client user agent (limited in Apps Script)
function getClientUserAgent() {
  try {
    return 'Web Browser';
  } catch (e) {
    return 'Unknown';
  }
}

// Function to get sheet statistics (optional - for monitoring)
function getSheetStats() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  const emailSheet = spreadsheet.getSheetByName('Sheet1');
  const surveySheet = spreadsheet.getSheetByName('UserSurvey');
  
  const stats = {
    emailCount: emailSheet ? emailSheet.getLastRow() - 1 : 0, // -1 for header
    surveyCount: surveySheet ? surveySheet.getLastRow() - 1 : 0, // -1 for header
    lastEmailSubmission: emailSheet && emailSheet.getLastRow() > 1 ? 
      emailSheet.getRange(emailSheet.getLastRow(), 1).getValue() : 'None',
    lastSurveySubmission: surveySheet && surveySheet.getLastRow() > 1 ? 
      surveySheet.getRange(surveySheet.getLastRow(), 1).getValue() : 'None'
  };
  
  console.log('Sheet Statistics:', stats);
  return stats;
}

// Test function to verify setup
function testSetup() {
  console.log('Testing Google Apps Script setup...');
  
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  console.log('Spreadsheet ID:', spreadsheet.getId());
  console.log('Spreadsheet Name:', spreadsheet.getName());
  
  const sheets = spreadsheet.getSheets();
  console.log('Available sheets:', sheets.map(sheet => sheet.getName()));
  
  return 'Setup test completed successfully';
}