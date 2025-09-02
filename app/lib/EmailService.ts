import nodemailer from 'nodemailer';

class EmailService {
  private transporter: nodemailer.Transporter | null = null;

  constructor() {
    // Only initialize transporter on client-side or when explicitly needed
    if (typeof window === 'undefined') {
      // Server-side: initialize during first use
      this.transporter = null;
    }
  }

  private async initializeTransporter() {
    if (this.transporter) return this.transporter;
    
    try {
      this.transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER || 'your-email@gmail.com',
          pass: process.env.EMAIL_PASS || 'your-app-password'
        }
      });
      console.log('EmailService: Email service configured with SMTP settings');
      return this.transporter;
    } catch (error) {
      console.error('EmailService: Failed to initialize transporter:', error);
      throw error;
    }
  }

  async sendEmail(to: string, subject: string, text: string, html?: string) {
    try {
      const transporter = await this.initializeTransporter();
      
      const mailOptions = {
        from: process.env.EMAIL_USER || 'your-email@gmail.com',
        to,
        subject,
        text,
        html
      };

      const result = await transporter.sendMail(mailOptions);
      return result;
    } catch (error) {
      console.error('EmailService: Failed to send email:', error);
      throw error;
    }
  }
}

export default EmailService;

// Export a singleton instance
export const emailService = new EmailService();
