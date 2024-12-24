import React, { useState } from 'react';
import axios from 'axios'; // For sending data to the backend
import '../css/Contact.css'; // Ensure to have a CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/send', formData);
      if (response.status === 200) {
        setEmailSent(true);
        setError('');
      }
    } catch (err) {
      setError('Failed to send message. Try again later.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2><span className='neon-text'>Contact Me</span></h2>
      <div className="form-container">
        
        {emailSent ? (
          <p className="success-message">Email sent successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder='abc@gmail.com'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder='say hello'
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="write your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button className='button' type="submit">Send Message</button>
          </form>
        )}
        {error && <p className="error-message">{error}</p>}
      </div>
    </section>
  );
};

export default Contact;
