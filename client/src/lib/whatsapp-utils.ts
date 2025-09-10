// WhatsApp utility functions for contact forms
export const createWhatsAppMessage = (formData: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  budget?: string;
  services?: string[];
  message?: string;
}) => {
  const phoneNumber = "919647457831"; // +91 9647457831 without + and spaces
  
  let message = `Hi! I'm interested in your IT services.\n\n`;
  message += `*Contact Details:*\n`;
  message += `Name: ${formData.name}\n`;
  message += `Email: ${formData.email}\n`;
  
  if (formData.phone) {
    message += `Phone: ${formData.phone}\n`;
  }
  
  if (formData.company) {
    message += `Company: ${formData.company}\n`;
  }
  
  if (formData.budget) {
    message += `Budget: ${formData.budget}\n`;
  }
  
  if (formData.services && formData.services.length > 0) {
    message += `Services Interested: ${formData.services.join(', ')}\n`;
  }
  
  if (formData.message) {
    message += `\n*Project Details:*\n${formData.message}`;
  }
  
  message += `\n\nPlease contact me to discuss further. Thank you!`;
  
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export const createSimpleWhatsAppMessage = (message: string) => {
  const phoneNumber = "919647457831";
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export const openWhatsApp = (url: string) => {
  window.open(url, '_blank');
};
