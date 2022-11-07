import React from "react";
import style from "../../styles/pages/contact/contact.module.scss";

const ContactForm = () => {
  return (
    <div>
      <div className={`${style.contact_sec_main_div}`}>
        <div className={`${style.map_div}`} >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41264374768!2d72.75225623680046!3d21.15934583219656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1667473007475!5m2!1sen!2sin"
          ></iframe>
        </div>
        <div className="container">
          <div className={`${style.contact_block} contact-block`}>
            <div className={`${style.contact_form_area_outer}`}>
              <div className={`${style.contact_form_area}`}>
                <div className={`${style.contact_form_area_inner}`}>
                  <h2 className={`${style.contact_heading}`}>get in touch</h2>
                  <form
                    className={`${style.contact_form}`}
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className={`${style.form_group} form-group`}>
                          <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className={`${style.form_group} form-group`}>
                          <input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className={`${style.form_group} form-group`}>
                          <input
                            name="subject"
                            type="text"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className={`${style.form_group} form-group`}>
                          <textarea
                            name="comment"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-12 text-center">
                        <div className="loading"></div>
                        <button
                          type="submit"
                          id="submit"
                          className={`${style.btn_contact} btn btn-primary btn-white`}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
