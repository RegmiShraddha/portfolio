# Shraddha Regmi Portfolio Setup Instructions

This document provides instructions for finalizing the setup of Shraddha Regmi's portfolio website.

## Completed Updates

The portfolio has been updated with Shraddha's information across all pages:
- Changed name from "Riton" to "Shraddha Regmi"
- Updated professional descriptions to reflect data analysis background
- Modified typed.js strings to show relevant skills
- Updated page titles, footer copyright, and social media links
- Updated all skills, education, career details, hobbies, and testimonials
- Added placeholder contact information
- Added placeholder CV file
- Added accessibility improvements to social media links

## Manual Steps Required

1. **Replace Profile Image**
   - Replace the file at `Assets/main-image.jpg` with Shraddha's actual photo
   - Recommended dimensions: 500x500px (or match the existing aspect ratio)

2. **Update the CV**
   - Replace the placeholder CV file at `Assets/Shraddha Regmi [CV].pdf` with the actual CV

3. **Configure Email Functionality**
   - Sign up at https://www.emailjs.com/
   - Create a service (Gmail, Outlook, etc.)
   - Create an email template
   - Update the API key in `SRC/pages/contact.html` 
   - Update the service ID and template ID in `SRC/script/script.js`
   - Uncomment the relevant code section in the `sendMail()` function

4. **Update Contact Information**
   - Update the placeholder email, phone, and address in `SRC/pages/contact.html` if needed

5. **Update Gallery Images**
   - Replace the images in `Assets/gallery/` with relevant photos

6. **Update Social Media Links**
   - Update the social media links in each page's footer to point to Shraddha's actual profiles

## Testing

After making these changes, please test:
1. Responsive design across different devices
2. Contact form submission
3. CV download functionality
4. Link navigation between pages
5. Social media links

## Technical Notes

- The site uses HTML, CSS, and JavaScript
- Typed.js is used for the typing animation on the homepage
- Font Awesome and Boxicons are used for icons
- The contact form is set up to work with EmailJS once configured
