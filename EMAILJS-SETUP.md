# EmailJS Setup Guide for Shraddha Regmi's Portfolio

This guide will help you set up EmailJS to enable the contact form functionality on the portfolio website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Select "Gmail" and connect your Google account
   - **Outlook**: Select "Outlook" and connect your Microsoft account
   - **Other**: Choose appropriate provider

4. Give your service a meaningful name (e.g., "shraddha-portfolio-contact")
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template structure:

### Template Name: `portfolio_contact_form`

### Subject: `New Contact from Portfolio - {{name}}`

### Content:
```
Hello Shraddha,

You have received a new message from your portfolio website:

From: {{name}}
Email: {{email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and copy the **Template ID**

## Step 4: Get Public Key

1. Go to "Account" > "General"
2. Find your **Public Key** (also called User ID)
3. Copy this key

## Step 5: Update Contact Form

Replace the following placeholders in `SRC/pages/contact.html`:

```html
<!-- Find this script tag and update the src -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script type="text/javascript">
   (function(){
      emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your Public Key
   })();
</script>
```

## Step 6: Update JavaScript Code

In `SRC/script/script.js`, find the `sendMail()` function and update:

```javascript
function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }

    const serviceID = "YOUR_SERVICE_ID";      // Replace with your Service ID
    const templateID = "portfolio_contact_form"; // Replace with your Template ID

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('message').value = "";

                contactSubmitAfter.classList.add('show');
                formSection.classList.add('hide');
                contactSection.classList.add('csa-cs');
                contactForm.classList.add('csa-cf');
            }
        )
        .catch((error) => {
            console.log('Error sending email:', error);
            // You can add error handling here
            alert('Failed to send message. Please try again.');
            
            // Reset button state
            contactButton.classList.remove('loading');
            contactLoad.classList.remove('show');
            submitText.classList.remove('hide');
        })
}
```

## Step 7: Test the Contact Form

1. Open `SRC/pages/contact.html` in a web browser
2. Fill out the contact form with test data
3. Submit the form
4. Check your email for the test message
5. Check EmailJS dashboard for delivery statistics

## Current Status

✅ Contact form HTML structure is ready
✅ Form validation is implemented
✅ Success/error UI states are ready
⏳ EmailJS integration needs to be completed

## Security Notes

- Never expose your Private Key in client-side code
- Only use the Public Key in the frontend
- Consider setting up domain restrictions in EmailJS settings
- Monitor your monthly email quota (free plan: 200 emails/month)

## Troubleshooting

### Common Issues:

1. **Form submits but no email received**
   - Check EmailJS dashboard for delivery status
   - Verify Service ID and Template ID are correct
   - Check spam folder

2. **"Failed to send" error**
   - Verify Public Key is correct
   - Check browser console for specific error messages
   - Ensure EmailJS script is loaded

3. **Template variables not working**
   - Ensure template variable names match form field IDs exactly
   - Variables are case-sensitive: `{{name}}` not `{{Name}}`

### Testing Steps:

1. Test with different email providers
2. Test on different devices/browsers
3. Monitor EmailJS quota usage
4. Test form validation edge cases

## Next Steps

1. Create EmailJS account using Shraddha's email
2. Configure email service (recommend Gmail)
3. Create email template with professional styling
4. Update the JavaScript with actual IDs
5. Test thoroughly across different scenarios
6. Consider adding email auto-responder for users

For support, contact EmailJS support or refer to their [documentation](https://www.emailjs.com/docs/).
