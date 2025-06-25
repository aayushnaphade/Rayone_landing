# Google Apps Script Setup for Questionnaire Responses

## Overview
This setup will allow you to collect questionnaire responses in a separate "UserSurvey" sheet while maintaining your existing email collection in "Sheet1".

## Setup Instructions

### 1. Update Your Existing Google Apps Script

1. **Open your existing Google Apps Script project** (the one you're using for email collection)
2. **Replace your existing code** with the code from `google-apps-script.gs` file
3. **Save the project** (Ctrl+S)

### 2. Sheet Structure

After setup, your Google Spreadsheet will have:

**Sheet1 (Existing Email Collection):**
- Timestamp
- Email  
- Source
- IP Address
- User Agent

**UserSurvey (New Questionnaire Responses):**
- Timestamp
- Role
- AI Usage Plan
- Important Features
- LLM Preference
- Current Usage
- IP Address
- User Agent

### 3. Deploy the Updated Script

1. **Click "Deploy" → "New deployment"**
2. **Choose type: "Web app"**
3. **Set execute as: "Me"**
4. **Set access: "Anyone"**
5. **Click "Deploy"**
6. **Copy the web app URL** (it should be the same as your existing one)

### 4. Verify Your Apps Script URL

Make sure your React app is using the correct URL. The current URL in your code is:
```
https://script.google.com/macros/s/AKfycbyTLptn3JnmA_GAK3OToi0NbIVVieWJ4e3uaTcBx3I0p9yewlk2XT3hsKHhM8PMiMzMoA/exec
```

### 5. Test the Setup

1. **Run the `testSetup()` function** in Apps Script to verify everything is working
2. **Check the execution log** for any errors
3. **Test with a real questionnaire submission** from your website

## Data Flow

### Email Collection (Existing)
```
Website Form → Google Apps Script → Sheet1
```

### Questionnaire Responses (New)
```
Questionnaire Modal → Google Apps Script → UserSurvey Sheet
```

## Response Data Structure

### Email Data (Sheet1):
- **Timestamp**: When the email was submitted
- **Email**: User's email address
- **Source**: Where the email came from (footer_waitlist, etc.)
- **IP Address**: User's IP (limited by Apps Script)
- **User Agent**: Browser information

### Questionnaire Data (UserSurvey):
- **Timestamp**: When questionnaire was completed
- **Role**: Developer, Startup founder, Enterprise team, Researcher, Student
- **AI Usage Plan**: Internal tools, Customer-facing apps, etc.
- **Important Features**: Speed, Cost, Model variety, API ease of use
- **LLM Preference**: Mistral, LLaMA 3, Falcon, etc.
- **Current Usage**: Yes actively, I've tried a few, etc.
- **IP Address**: User's IP (limited by Apps Script)
- **User Agent**: Browser information

## Troubleshooting

### Common Issues:

1. **"UserSurvey sheet not found"**
   - The script will automatically create it on first use
   - Make sure you have edit permissions on the spreadsheet

2. **"Permission denied"**
   - Re-authorize the script permissions
   - Check that the script has access to Google Sheets

3. **"No data appearing"**
   - Check the Apps Script execution log
   - Verify the web app URL is correct
   - Make sure the deployment is set to "Anyone" access

### Debug Steps:

1. **Check Apps Script Logs:**
   - Go to Apps Script → Execution log
   - Look for any error messages

2. **Test Individual Functions:**
   - Run `testSetup()` to verify basic functionality
   - Run `getSheetStats()` to see current data counts

3. **Verify Permissions:**
   - Make sure the script has access to Google Sheets
   - Check that the spreadsheet isn't restricted

## Monitoring

Use the `getSheetStats()` function to monitor your data collection:

```javascript
// Run this in Apps Script to see current stats
getSheetStats()
```

This will show you:
- Total email submissions
- Total questionnaire responses  
- Last submission timestamps

## Security Notes

- The script uses `mode: 'no-cors'` for web requests
- IP address collection is limited by Google Apps Script
- All data is stored in your private Google Spreadsheet
- Consider adding data validation if needed

## Next Steps

1. **Deploy the updated script**
2. **Test with a sample questionnaire**
3. **Monitor the UserSurvey sheet for responses**
4. **Optionally set up email notifications for new responses**

Your questionnaire responses will now be automatically saved to the UserSurvey sheet! 🎉