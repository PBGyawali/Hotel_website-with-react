import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ReCAPTCHA from "react-google-recaptcha";
import Footer from './Footer';

function Contact() {
  const recipient = 'gautamrazhotel@gmail.com';
  const mailtoLink = `mailto:${recipient}`;
  const phoneNumber = '+977 986-2535927'; // Replace with your phone number

  //setting default values for form message elements
  const [contactMessage, setContactMessage] = useState('');
  const [textClass, setTextClass] = useState('');

  //setting default values for form fields
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  //handle form value change

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsVerified(e.target.checked);
  };


  //handle mouse click events
  const handleEmailClick = () => {
    window.open(mailtoLink, '_blank');
  }
  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleMessageSend = (event) => {
    event.preventDefault();

    // Handle form submission
    if (isVerified) {
          if(message!= '' && email!= ''&& message!= ''){
            setContactMessage("Message was sent successfully. we will contact you shortly");
            setTextClass("alert-dark");
          }
          else{
            setContactMessage("Message was not sent. please try again");
            setTextClass("alert-danger");
          }
      } else {
        setContactMessage("Please confirm that you are not a robot.");
        setTextClass("alert-warning");
      }
    setTimeout(() => {
      setContactMessage("");
      setTextClass("");
    }, 5000);
  }

  return (
     //code for contact us section
    <section id="contact" className="bg-dark pt-3 text-white" >
      <div className="container">
        <div className="row text-center">
            <div className="col-md-12">
                <h2 className="">Contact Us</h2>
                <p>Feel free to get in touch with us using the contact information below or the contact form on this page.</p>
            </div>
        </div>
        <div className="row text-center">
          <div className="col-md-6">
                <div className="row">
                      <div className="col-md-12">
                        <div className="contact-item">
                          <button className="bg-dark text-white btn btn-outline-dark btn-lg" onClick={handleEmailClick}>
                            <FontAwesomeIcon icon={faEnvelope} /> Email
                          </button>
                            <p>{recipient}</p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="contact-item">
                          <button className="bg-dark text-white btn btn-outline-dark btn-lg"
                            onClick={handleClick}><FontAwesomeIcon icon={faPhone} /> Phone
                          </button>
                          <p>{phoneNumber}</p>
                        </div>
                      </div>
                </div>
          </div>
            <div className="col-md-6">
                <div className="row">
                  <div className="col-md-4">
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fa fa-map-marker"></i>
                      </div>
                      <h4>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Address
                      </h4>
                      <p>Simara, Nepal</p>
                    </div>
                  </div>
                  <div className="col-md-8">
                  {/* adding google automatically generated map*/}
                  <div id="map">
                  <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4221.53385400703!2d84.97476689492972!3d27.160295719484253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb5574b8813be3%3A0x861df40bfeb18bc6!2sHOTEL%20GAUTAM%20RAJ!5e0!3m2!1sen!2sde!4v1679653143284!5m2!1sen!2sde"
                      style={{ border: '0px',height:'200px' }}  loading="lazy"  title="Navigation"
                  ></iframe>
                </div>
                  </div>
                </div>

            </div>
        </div>
          <div className="justify-content-center w-100">
            <form className="p-4 bg-light border rounded text-dark" onSubmit={handleMessageSend}>
            <div class="position-relative">
                  <div className={`alert ${textClass} position-absolute w-100 text-center`} role="alert">
                          {contactMessage}
                  </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" value={name}
                onChange={handleNameChange} required/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" value={email}
                onChange={handleEmailChange} required/>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Enter your message" value={message}
                onChange={handleMessageChange} required></textarea>
              </div>
              <div className="form-group mt-3">
                  <div className="form-check">
                      <input className="form-check-input" type="checkbox"
                          id="humanCheck"  name="humanCheck"
                          checked={isVerified} onChange={handleCheckboxChange} />
                        <label className="form-check-label" for="humanCheck"> I am not a robot </label>
                  </div>
              </div>
              <button type="submit" className="btn btn-primary mt-3 btn-lg" >Send Message</button>
            </form>
          </div>
       </div>
       {/* inserting imported footer element*/}
        <Footer />
    </section>
  );
}

export default Contact;

