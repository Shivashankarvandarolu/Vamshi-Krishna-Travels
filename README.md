# VK Travels Website

An interactive and user-friendly website for VK Travels, showcasing their cab services and tour offerings with image slideshows and engaging features.

## About

VK Travels is owned by Satyanarayana Goud from Mahabubnagar. They provide cab services in Telangana and Andhra Pradesh, along with tours in South and North India. Their fleet includes Swift Dzire, Creta, Innova Crysta, Toofan, and a 24-seater bus.

## Features

- **Interactive Slideshow**: Hero section with auto-playing image carousel
- **Responsive Design**: Works seamlessly on mobile and desktop
- **Smooth Navigation**: Sticky navigation with smooth scrolling
- **Service Grid**: Visual display of services offered
- **Fleet Showcase**: Images and descriptions of vehicles
- **Image Gallery**: Grid of tour images
- **Customer Testimonials**: Feedback from satisfied customers
- **Contact Form**: Interactive form for inquiries
- **Animations**: Fade-in effects and hover animations for better UX

## Usage

1. Open `index.html` in a web browser to view the website.
2. The website is static and requires no server setup.
3. Navigate through sections using the sticky navigation menu.
4. View the auto-playing slideshow on the homepage.
5. Fill out the contact form to send inquiries (currently shows a success message).

## Files

- `index.html`: Main HTML file with all content and structure
- `styles.css`: CSS styles including responsive design, animations, and slideshow
- `script.js`: JavaScript for slideshow functionality, form handling, and interactivity
- `README.md`: This documentation file

## Email Integration Setup

The contact form now sends customer inquiries directly to the owner via email using EmailJS. To set this up:

### 1. Create an EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

### 2. Set Up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Add a new service (e.g., Gmail, Outlook, etc.)
3. Follow the setup instructions to connect your email account
4. Note down the **Service ID** (e.g., `service_xxxxx`)

### 3. Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Create a new template with the following content:

**Subject:**
```
New Inquiry from {{from_name}} - VK Travels
```

**HTML Body:**
```html
<h2>New Customer Inquiry</h2>
<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
<hr>
<p>This message was sent from the VK Travels website contact form.</p>
<p><strong>Reply to:</strong> {{reply_to}}</p>
```

**Note:** The owner's email (ssgoud96@gmail.com) has been configured in the JavaScript. Make sure your EmailJS template sends emails to this address.

3. Note down the **Template ID** (e.g., `template_xxxxx`)

### 4. Get Your Public Key
1. Go to "Account" in your dashboard
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxxx`)

### 5. Update the JavaScript
1. Open `script.js`
2. Replace the placeholder values:
   ```javascript
   const serviceID = 'YOUR_SERVICE_ID'; // Replace with your Service ID
   const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
   const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
   ```
3. Save the file

### 6. Test the Form
1. Open the website in a browser
2. Fill out and submit the contact form
3. Check your email for the inquiry

**Note:** EmailJS has a free tier with 200 emails per month. For higher volume, consider upgrading or implementing a backend solution.

## Technical Details

- **Slideshow**: Automatic slide transition every 5 seconds with manual controls
- **Form Handling**: Client-side validation and success feedback
- **Responsive**: Uses CSS Grid and Flexbox for layouts
- **Animations**: CSS transitions and JavaScript-powered scroll animations
- **Accessibility**: Semantic HTML and keyboard navigation support

## Browser Support

Works in all modern browsers including Chrome, Firefox, Safari, and Edge.

## Future Enhancements

- Backend integration for actual form submission
- Image modal/lightbox for gallery
- Booking system integration
- Google Maps integration for routes
- Multi-language support

## Troubleshooting

- If images don't load, check your internet connection (placeholders are external)
- For mobile issues, ensure viewport meta tag is present
- If JavaScript doesn't work, check browser console for errors
- Form submission is currently simulated; integrate with a backend service for real functionality