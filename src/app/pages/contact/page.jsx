'use client'
import "../../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="content-section">
      <div className="contact-container">
        <div className="contact-info" data-aos="fade-right">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-description">
            Feel free to reach out for collaborations, job opportunities, or just a chat!
          </p>
          <div className="contact-details">
            <p><strong>Email:</strong> vishnupbofficial@gmail.com.com</p>
            <p><strong>Phone:</strong> +91 9947880371 / +353 894164860</p>
          </div>
          <div className="social-icons">
            <a href="https://github.com/yourgithub" target="_blank" className="social-icon github">GitHub</a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="social-icon linkedin">LinkedIn</a>
            <a href="https://twitter.com/yourtwitter" target="_blank" className="social-icon twitter">Twitter</a>
          </div>
        </div>
        <div className="contact-form" data-aos="fade-left">
          <form>
            <input type="text" placeholder="Your Name" required className="input-field" />
            <input type="email" placeholder="Your Email" required className="input-field" mailto="vishnupbofficial@gmail.com" />
            <textarea placeholder="Your Message" required className="input-field message"></textarea>
            <button type="submit" className="send-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}