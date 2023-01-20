import React, {useRef}from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m1atp5j', 'template_zkiamfg', form.current, '7NlSM6_9sj2YE04yd')
    e.target.reset()
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">Eduandresalvarezgamba@hotmail.com</span><br />
              <a href="mailto:Eduandresalvarezgamba@hotmail.com.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">+57 3208754533</span>
              <a href="https://api.whatsapp.com/send?phone=573208754533&text=Hello, more information" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-instagram contact__card-icon"></i>
              <h3 className="contact__card-title">Instagram</h3>
              <span className="contact__card-data">eduandres648</span>
              <a href="https://www.instagram.com/eduandres648/" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input type="text" name="name" className="contact__form-input" placeholder="Insert your name" />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input type="email" name="email" className="contact__form-input" placeholder="Insert your Email" />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="Write your project"></textarea>
            </div>
            <button className="button button--flex">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact