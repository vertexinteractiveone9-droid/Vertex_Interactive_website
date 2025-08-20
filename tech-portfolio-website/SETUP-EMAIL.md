# 📧 Email Setup Instructions - FormSubmit Integration

## ⚡ Quick Setup (2 Minutes!)

Your website is **already configured** for FormSubmit email integration. Just follow these 2 simple steps:

### Step 1: Replace Your Email Address

**Replace `your-email@example.com` with YOUR actual email address in these files:**

1. **File: `index.html` (Line 89)**
   ```html
   <form class="contact-form" id="contactForm" action="https://formsubmit.co/YOUR-EMAIL@EXAMPLE.COM" method="POST">
   ```

2. **File: `cart.html` (Line 68)**
   ```html
   <form class="billing-form" id="billingForm" action="https://formsubmit.co/YOUR-EMAIL@EXAMPLE.COM" method="POST">
   ```

### Step 2: Test Your Forms
1. Upload your website to your server
2. Fill out the contact form and submit
3. Check your email (and spam folder)
4. Test the order form from the cart page

## 🎉 That's It! You're Done!

### ✅ What You'll Get:

**Contact Form Emails:**
- Subject: "New Contact Form Submission - TechPro Solutions"
- Contains: Name, Email, Phone, Message

**Order Form Emails:**
- Subject: "New Order - Inaya School Management Software" 
- Contains: School name, address, phone, selected features, theme choice, order ID

### 🔧 Optional Customization:

**Update Domain URLs (Optional):**
If you want custom redirect pages, update these lines:

1. **index.html (Line 92):** `<input type="hidden" name="_next" value="https://YOURDOMAIN.com/thank-you.html">`

2. **cart.html (Line 71):** `<input type="hidden" name="_next" value="https://YOURDOMAIN.com/order-confirmation.html">`

### 🆘 Need Help?

**Common Issues:**
- **Not receiving emails?** Check spam folder, verify email address is correct
- **Form not submitting?** Check browser console for errors
- **Want to change email subject?** Edit the `_subject` hidden input fields

**FormSubmit Features:**
- ✅ Free forever
- ✅ No signup required  
- ✅ Instant delivery
- ✅ Professional formatting
- ✅ Spam protection included

---

**Your website forms are now live and will send emails directly to your inbox! 🚀**
