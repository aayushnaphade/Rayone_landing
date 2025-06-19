// Blog form template with proper attributes for Google Apps Script integration
export const getBlogSubscriptionForm = () => {
    return `
    <form data-form-type="blog-subscribe" style="background:rgba(255,255,255,0.07);border-radius:14px;padding:18px 10px;display:flex;flex-direction:column;gap:10px;">
        <h4 style="color:#fff;margin:0 0 5px 0;">Subscribe to our newsletter</h4>
        <p style="color:#B3B3B3;margin:0 0 10px 0;font-size:14px;">Get the latest updates and resources delivered to your inbox.</p>
        <input type="text" name="name" placeholder="Name" style="padding:8px 10px;border-radius:8px;border:1px solid #232336;background:#181825;color:#fff;font-size:1rem;">
        <input type="email" name="email" placeholder="Email" style="padding:8px 10px;border-radius:8px;border:1px solid #232336;background:#181825;color:#fff;font-size:1rem;">
        <button type="submit" style="background:#9f09f7;color:#fff;border:none;border-radius:8px;padding:10px;font-weight:600;cursor:pointer;">Subscribe</button>
    </form>
    `;
};
