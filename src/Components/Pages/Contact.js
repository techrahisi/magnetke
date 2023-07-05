import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const RegSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is not valid.")
      .required("Email is required."),

    name: Yup.string()
      .required("Name is required.")
      .min(4, "Name should be at least 4 characters."),
    message: Yup.string().required("Message is required."),
  });

  const onFormSubmit = async (form) => {
    await setLoading(true);

    let user = {
      names: form.name,
      email: form.email,
      message: form.message,
    };
    let callMe = () =>
      toast.success(
        `Hi, these are your details: ${user.names + "-" + user.email + "-" + user.message
        }`
      );

    await callMe();

    form.name = "";
    form.email = "";
    form.message = "";



    setLoading(false);
  };

  return (
    <div className="content">
      {/*section   */}
      <section className="hero-section">
        <div className="bg-wrap hero-section_bg">
          <div className="bg" data-bg="images/bg/1.jpg" />
        </div>
        <div className="container">
          <div className="hero-section_title">
            <h2>Our Contacts</h2>
          </div>
          <div className="clearfix" />
          <div className="breadcrumbs-list fl-wrap">
            <a href="#">Home</a> <a href="#">Pages</a> <span>Contacts</span>
          </div>
          <div className="scroll-down-wrap scw_transparent">
            <div className="mousey">
              <div className="scroller" />
            </div>
            <span>Scroll Down To Discover</span>
          </div>
        </div>
      </section>
      {/* section end  */}
      {/*section   */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="pr-subtitle prs_big">Details</div>
              {/*card-item */}
              <ul className="contacts-list fl-wrap">
                <li>
                  <span>
                    <i className="fal fa-map-marker" /> Address :
                  </span>{" "}
                  <a href="#">Nairobi Kenya</a>
                </li>
                <li>
                  <span>
                    <i className="fal fa-phone" /> Phone :
                  </span>{" "}
                  <a href="#">+254 100922383</a>
                </li>
                <li>
                  <span>
                    <i className="fal fa-envelope" /> Mail :
                  </span>{" "}
                  <a href="#">info@magnet.co.ke</a>
                </li>
              </ul>
              {/*card-item end */}
              <div className="contact-social fl-wrap">
                <span className="cs-title">Find us on: </span>
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/The-Magnet-Kenya-232512507895452/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/MagnetKenya" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/themagnetkenya/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/the-magnet-kenya-683929242/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/the-magnet-kenya-683929242/"
                      target="_blank"
                    >
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* box-widget */}
              <div className="box-widget-content fl-wrap">
                <div className="banner-widget fl-wrap">
                  <div className="bg-wrap bg-parallax-wrap-gradien">
                    <img
                      alt=""
                      src="https://images.pexels.com/photos/3762940/pexels-photo-3762940.jpeg?auto=compress&cs=tinysrgb&w=600"
                      className="bg"
                    />
                  </div>
                  <div className="banner-widget_content">
                    <h5>Visit us online anytime</h5>
                    <Link
                      to="/contact"
                      className="btn float-btn color-bg small-btn"
                      onClick={() =>
                        window.scrollTo({ top: 0, behaviour: "smooth" })
                      }
                    >
                      Our Location
                    </Link>
                  </div>
                </div>
              </div>
              {/* box-widget  end */}
            </div>
            <div className="col-md-8">
              <div className="pad-con fl-wrap">
                <div className="pr-subtitle prs_big">Drop us a line</div>
                <p>
                  As we address the needs of our customers, email wait times may
                  be longer than usual. In an effort to give you the best
                  customer experience possible, we encourage you to take
                  advantage of our phones. In most cases this is the fastest and
                  easiest option.
                </p>
                <div id="contact-form" style={{ marginTop: 20 }}>
                  <div id="message" />
                  <fieldset>
                    <Formik
                      initialValues={{
                        fname: "",
                        lname: "",
                        email: "",
                        message: "",
                      }}
                      validateOnChange
                      validationSchema={RegSchema}
                      onSubmit={onFormSubmit}
                    >
                      <Form
                        className="custom-form"
                        action="#"
                        name="contactform"
                        id="contactform"
                      >
                        <Field
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your Name *"
                          defaultValue=""
                        />

                        <Field
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email Address*"
                          defaultValue=""
                        />
                        <Field
                          type="text"
                          name="message"
                          id="comments"
                          cols={40}
                          rows={3}
                          placeholder="Your Message:"
                          defaultValue={""}
                        />

                        <button
                          className="btn   color-bg float-btn"
                          id="submit"
                        >
                          Send message <i className="fas fa-caret-right" />
                        </button>
                      </Form>
                    </Formik>
                  </fieldset>
                </div>
                {/* contact form  end*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
