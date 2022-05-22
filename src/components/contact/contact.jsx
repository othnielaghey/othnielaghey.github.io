import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rcwr5iw', 'template_wo8f6ok', form.current, 'jYHaS7oWfTnel3uS5')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent Successfully !')
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Message</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>othnielignacio@gmail.com</h5>
            <a href="mailto:othnielignacio@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon"/>
            <h4>Linkedin</h4>
            <h5>othniel.aghey</h5>
            <a href="mailto:othnielignacio@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5></h5>
            <a href="https://api.whatsapp.com/send?phone=22893236791" target="_blank">Send a message</a>
          </article>

        </div>
        {/* end of options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message"required></textarea>
          <button type="submit"className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact