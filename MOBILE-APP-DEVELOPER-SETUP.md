# Mobile App Developer Portfolio Setup Guide

This document provides instructions for finalizing the setup of Shraddha Regmi's mobile app developer portfolio website.

## Completed Updates

The portfolio has been updated to showcase Shraddha's mobile app development expertise:

- Changed focus from data analysis to mobile app development with Flutter specialization
- Updated professional description to highlight mobile development skills
- Modified typed.js strings to show relevant mobile development roles
- Updated technical skills to showcase Flutter, React Native, and mobile development expertise
- Updated professional skills to highlight UI/UX design and app performance optimization
- Updated education details with accurate information about Shraddha's Bachelor's in Computer Applications (BCA) from Lumbini Engineering College, Master's in Computer Application from St. Xavier's College, and professional certifications in Flutter development
- Updated all career goals, hobbies, and testimonials to align with mobile app development
- Added GitHub and LinkedIn links to actual profiles: 
  - GitHub: https://github.com/RegmiShraddha
  - LinkedIn: https://www.linkedin.com/in/shraddha-regmi/
- Added actual email: regmishraddha26@gmail.com
- Added proper accessibility with descriptive alt text for all gallery images
- Added SEO meta descriptions to education and gallery pages

## Manual Steps Required

1. **Replace Profile Image**
   - Replace the file at `Assets/main-image.jpg` with Shraddha's actual photo
   - Recommended dimensions: 500x500px (or match the existing aspect ratio)

2. **Update the CV**
   - Replace the placeholder CV file at `Assets/Shraddha Regmi [CV].pdf` with a CV highlighting mobile app development experience

3. **Update Gallery Images**
   - Replace the Nepal gallery images with screenshots of Flutter app projects
   - Replace the Australia gallery images with UI/UX designs and wireframes

4. **Configure Email Functionality**
   - Sign up at https://www.emailjs.com/ using the email regmishraddha26@gmail.com
   - Create a service (Gmail, Outlook, etc.)
   - Create an email template
   - Update the API key in `SRC/pages/contact.html` 
   - Update the service ID and template ID in `SRC/script/script.js`
   - Uncomment the relevant code section in the `sendMail()` function

## App Project Content Suggestions

Consider adding the following types of projects to the gallery:

1. **E-commerce Mobile App**
   - Showcase product listings, cart functionality, and checkout process
   - Highlight custom animations and smooth transitions

2. **Health & Fitness Tracking App**
   - Display dashboard with visualized health data
   - Show exercise tracking and nutrition monitoring features

3. **Social Networking App**
   - Feature user profiles, messaging interfaces, and post creation
   - Demonstrate real-time interaction capabilities

4. **Task Management App**
   - Showcase task organization, reminders, and progress tracking
   - Highlight clean, intuitive UI design

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
