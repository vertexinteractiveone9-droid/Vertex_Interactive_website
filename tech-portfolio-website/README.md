# TechPro Solutions Website

A professional, modern website with dark theme showcasing technology solutions and allowing customers to purchase software.

## Features

✅ **Modern Dark Theme Design**
- Professional dark background (#0D1117)
- Clean, minimal interface
- Responsive design for all devices

✅ **Interactive Elements**
- Sci-fi styled hero animation (only for main heading)
- Smooth scroll effects
- Glowing hover effects and animations
- Progress bars with animations

✅ **Complete Pages**
- **Home Page**: Hero section, customer reviews, contact form
- **About Page**: Mission, goals, upcoming projects with progress bars
- **Products Page**: Inaya School Management Software showcase
- **Cart/Billing Page**: Feature selection, theme options, billing form

✅ **Special Features**
- Mystery Project with fully blurred details (except title)
- Animated progress bars for upcoming projects
- Email integration for form submissions
- Thank you modal with order confirmation

## Project Structure

```
tech-portfolio-website/
├── index.html          # Home page
├── about.html          # About page
├── products.html       # Products page
├── cart.html           # Cart and billing page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # Image assets
└── README.md           # This file
```

## Setup Instructions

### 1. Local Development
1. Download all files to your preferred directory
2. Open `index.html` in your browser
3. Navigate through all pages to test functionality

### 2. Web Server Deployment
1. Upload all files to your web server
2. Ensure file permissions are set correctly
3. Update any absolute paths if needed

### 3. Email Integration Setup (FormSubmit - Ready to Use!)

The website is **already configured** to use FormSubmit for email integration. Just follow these simple steps:

#### ✅ FormSubmit Integration (Recommended - FREE & Easy)

**Step 1: Replace Email Address**
1. **Replace `your-email@example.com`** with your actual email in these files:
   - `index.html` (line 89): Contact form action
   - `cart.html` (line 68): Billing form action

**Step 2: Update Redirect URLs (Optional)**
1. **Replace `https://yourdomain.com`** with your actual domain in:
   - `index.html` (line 92): `_next` parameter
   - `cart.html` (line 71): `_next` parameter
   - Or keep as is to use the included thank-you pages

**Step 3: Test Your Forms**
1. Submit the contact form to verify emails are received
2. Submit an order to test the billing form
3. Check your spam folder initially

#### 🎯 FormSubmit Features Included:
- ✅ **No Backend Required** - Works immediately
- ✅ **Professional Email Templates** - Clean, formatted emails
- ✅ **Spam Protection** - Built-in captcha option
- ✅ **Custom Thank You Pages** - Professional confirmation pages
- ✅ **All Form Fields Captured** - Name, email, phone, message, order details

#### 📧 Email Format You'll Receive:

**Contact Form Email:**
```
Subject: New Contact Form Submission - TechPro Solutions

• Name: [Customer Name]
• Email: [Customer Email] 
• Phone: [Customer Phone]
• Message: [Customer Message]
```

**Order Form Email:**
```
Subject: New Order - Inaya School Management Software

• Product: Inaya School Management Software
• Price: $2,999
• School Name: [School Name]
• Phone Number: [Phone]
• Address: [Address]
• Selected Features: [Features]
• Theme: [Color Theme]
• Order ID: [Auto-generated]
```

#### Alternative Options (If Needed):

**Option A: Formspree**
- Sign up at formspree.io
- Replace FormSubmit URL with Formspree endpoint

**Option B: Backend Integration**
- Set up your own server endpoint
- Replace form actions with your API URL

**Option C: EmailJS**
- Client-side email service
- Requires JavaScript library inclusion

### 4. Customization

#### Update Contact Information
- Edit footer contact details in all HTML files
- Update email addresses in JavaScript form handlers

#### Theme Colors
The website uses CSS custom properties for easy theme updates:
```css
:root {
    --accent-primary: #4F46E5;    /* Primary brand color */
    --accent-secondary: #7C3AED;  /* Secondary brand color */
    --accent-tertiary: #06B6D4;   /* Tertiary accent color */
}
```

#### Content Updates
- **Company Name**: Replace "TechPro Solutions" throughout files
- **Product Details**: Update Inaya software information in products.html
- **Projects**: Modify upcoming projects in about.html
- **Reviews**: Update customer testimonials in index.html

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Performance Features

- CSS Grid and Flexbox for layouts
- Intersection Observer for scroll animations
- Lazy loading support
- Optimized animations
- Service Worker ready

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images (when added)
- Keyboard navigation support
- Screen reader friendly

## Email Templates

### Contact Form Email
```
New Contact Form Submission:

Name: [Name]
Email: [Email]
Phone: [Phone]
Message: [Message]

Submitted: [Timestamp]
```

### Order Form Email
```
New Order Received:

School Information:
- School Name: [School Name]
- Phone: [Phone]
- Address: [Address]

Product: Inaya School Management Software
Selected Features: [Features]
Theme: [Theme Color]

Total Amount: $2,999

Submitted: [Timestamp]
```

## Troubleshooting

### Common Issues
1. **Forms not submitting**: Check console for JavaScript errors
2. **Animations not working**: Ensure CSS and JS files are loaded
3. **Mobile responsiveness**: Test on actual devices
4. **Email not working**: Verify backend endpoint or service setup

### Debug Mode
Enable debug logging by adding to console:
```javascript
localStorage.setItem('debug', 'true');
```

## Future Enhancements

- Add actual product images
- Implement search functionality
- Add blog section
- Include customer portal
- Add multi-language support
- Implement PWA features

## License

This project is created for TechPro Solutions. All rights reserved.

## Support

For technical support or customization requests, contact your development team.

---

**Note**: Remember to update all placeholder content, email addresses, and contact information before going live!
