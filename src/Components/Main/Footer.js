import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import img1 from "../../images/logo2.png";

export default function Footer() {
  const [loading, setLoading] = useState(false);

  const onFormSubmit = async (form) => {
    await setLoading(true);
    let callMe = () =>
      toast.success(`Hello ${form.email}, still working on this feature`);
    await callMe();
    form.email = "";
    setLoading(false);
  };

  const RegSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is not valid.")
      .required("Email is required."),
  });

  return (
    <footer className="fl-wrap main-footer">
      <div className="container">
        {/* footer-widget-wrap */}
        <div className="footer-widget-wrap fl-wrap">
          <div className="row">
            {/* footer-widget */}
            <div className="col-md-4">
              <div className="footer-widget">
                <div className="footer-widget-content">
                  <Link
                    to="/"
                    className="footer-logo"
                    onClick={() =>
                      window.scrollTo({ top: 0, behaviour: "smooth" })
                    }
                  >
                    <img src={img1} alt="" />
                  </Link>
                  <p>
                    As we address the needs of our customers, email wait times
                    may be longer than usual. In an effort to give you the best
                    customer experience possible, we encourage you to take
                    advantage of our phones. In most cases this is the fastest
                    and easiest option.{" "}
                  </p>
                  <div className="footer-social fl-wrap">
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
                        <a
                          href="https://twitter.com/MagnetKenya"
                          target="_blank"
                        >
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
                </div>
              </div>
            </div>
            {/* footer-widget  end*/}
            {/* footer-widget */}
            <div className="col-md-2">
              <div className="footer-widget">
                <div className="footer-widget-title">Categories </div>
                <div className="footer-widget-content">
                  <div className="footer-list footer-box fl-wrap">
                    <ul>
                      <li>
                        {" "}
                        <Link
                          to="/blog"
                          onClick={() =>
                            window.scrollTo({ top: 0, behaviour: "smooth" })
                          }
                        >
                          Politics
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          to="/blog"
                          onClick={() =>
                            window.scrollTo({ top: 0, behaviour: "smooth" })
                          }
                        >
                          Technology
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          to="/blog"
                          onClick={() =>
                            window.scrollTo({ top: 0, behaviour: "smooth" })
                          }
                        >
                          Business
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          to="/blog"
                          onClick={() =>
                            window.scrollTo({ top: 0, behaviour: "smooth" })
                          }
                        >
                          Sports
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          to="/blog"
                          onClick={() =>
                            window.scrollTo({ top: 0, behaviour: "smooth" })
                          }
                        >
                          Science
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* footer-widget  end*/}
            {/* footer-widget */}
            <div className="col-md-2">
              <div className="footer-widget">
                <div className="footer-widget-title">Links</div>
                <div className="footer-widget-content">
                  <div className="footer-list footer-box fl-wrap">
                    <ul>
                      <li>
                        {" "}
                        <Link
                          to="/"
                          onClick={() =>
                            window.scrollTo({ top: 0, behaviour: "smooth" })
                          }
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          to="/about"
                          onClick={() =>
                            window.scrollTo({ top: 0, behaviour: "smooth" })
                          }
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          to="/contact"
                          onClick={() =>
                            window.scrollTo({ top: 0, behaviour: "smooth" })
                          }
                        >
                          Contacts
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          to="/blog"
                          onClick={() =>
                            window.scrollTo({ top: 0, behaviour: "smooth" })
                          }
                        >
                          News
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* footer-widget  end*/}
            {/* footer-widget */}
            <div className="col-md-4">
              <div className="footer-widget">
                <div className="footer-widget-title">Subscribe</div>
                <div className="footer-widget-content">
                  <div className="subcribe-form fl-wrap">
                    <p>
                      Want to be notified when we launch a new template or an
                      udpate. Just sign up and we'll send you a notification by
                      email.
                    </p>
                    <Formik
                      initialValues={{
                        email: "",
                      }}
                      validateOnChange
                      validationSchema={RegSchema}
                      onSubmit={onFormSubmit}
                    >
                      <Form id="subscribe" className="fl-wrap">
                        <Field
                          className="enteremail"
                          name="email"
                          id="subscribe-email"
                          placeholder="Your Email"
                          spellCheck="false"
                          type="text"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="error-wrap"
                        />
                        <button
                          type="submit"
                          id="subscribe-button"
                          className="subscribe-button color-bg"
                        >
                          Send{" "}
                        </button>
                        <label
                          htmlFor="subscribe-email"
                          className="subscribe-message"
                        />
                      </Form>
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
            {/* footer-widget  end*/}
          </div>
        </div>
        {/* footer-widget-wrap end*/}
      </div>
      <div className="footer-bottom fl-wrap">
        <div className="container">
          <div className="copyright">
            <span>2022 © TheMagnet Kenya</span>.{" "}
            <a href="https://techrahisi.co.ke">By Techrahisi</a>{" "}
          </div>
          <div
            className="to-top"
            onClick={() => window.scrollTo({ top: 0, behaviour: "smooth" })}
          >
            <i className="fas fa-caret-up" />
          </div>
          <div className="subfooter-nav">
            <ul>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
