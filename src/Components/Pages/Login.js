import React, { useState, useContext } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import bcrypt from 'bcryptjs';
import loader from "../../images/loading.gif";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../App';


export default function Login() {
  const [loading, setLoading] = useState(false);
  const appContext = useContext(AuthContext);
  const navigate = useNavigate();
  const salt = bcrypt.genSaltSync(10);

  const RegSchema = Yup.object().shape({
    name: Yup.string()
      .required("Username is required."),

    password: Yup.string()
      .required("Password is required.")
      .min(4, "Password should be at least 4 characters."),
  });

  const onFormSubmit = async (form) => {

    await setLoading(true);






    const hashedPassword = bcrypt.hashSync(form.password, salt);

    //let data2 = bcrypt.compareSync(form.password, db.password);

    let user = {
      name: form.name,
      password: form.password,
    };
    //TODO: MAKE THIS WORK!!
    await axios.post('https://magnet.co.ke/API/login/index.php', user).then(function (response) {
      if (response.data != 0) {
        toast.success("Successful login")
        console.log(response.data);
        if (response.data.isAdmin != 0) {
          localStorage.setItem('user', JSON.stringify(response.data));
          appContext.user = response.data;
          navigate('/adminpanel');
          window.location.reload();
        } else {
          localStorage.setItem('user', JSON.stringify(response.data));
          appContext.user = response.data;
          navigate('/authorpanel');
          window.location.reload();
        }
        //setTimeout(() => navigate("/"), 1000);
      } else {
        toast.error(`Login failed, check your username/password or register an account `)
      }
    });

    setLoading(false);

    form.name = "";
    form.password = "";
  };

  return (
    <div className="content">
      <div className="breadcrumbs-header fl-wrap">
        <div className="container">
          <div className="breadcrumbs-header_url">
            <a href="#">Home</a>
            <a href="#">Login</a>
          </div>
          <div className="scroll-down-wrap">
            <div className="mousey">
              <div className="scroller" />
            </div>
            <span>Scroll Down To Discover</span>
          </div>
        </div>
        <div className="pwh_bg" />
      </div>
      {/*section   */}
      <section>
        <div className="container">
          {/* CHECKOUT TABLE */}
          <div className="row">
            <div className="col-md-8">
              <h4 className="cart-title">Login to account</h4>
              <Formik
                initialValues={{
                  name: "",
                  password: "",
                }}
                validateOnChange
                validationSchema={RegSchema}
                onSubmit={onFormSubmit}
              >
                <Form className="custom-form" method="post" action="#">
                  <div className="row">
                    <div className="col-sm-6">
                      <Field
                        type="text"
                        name="name"
                        placeholder="Username *"
                        defaultValue=""
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error-wrap"
                      />
                    </div>
                    <div className="col-sm-6">
                      <Field
                        type="password"
                        name="password"
                        placeholder="Your last password *"
                        defaultValue=""
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error-wrap"
                      />
                    </div>
                  </div>

                  <div className="clearfix" />
                  {loading ? (
                    <button type="submit" className="btn   color-bg float-btn">
                      Logging in ...... <i className="fas fa-caret-right" />
                    </button>

                  ) : (
                    <button type="submit" className="btn   color-bg float-btn">
                      Login <i className="fas fa-caret-right" />
                    </button>
                  )}
                </Form>
              </Formik>
            </div>
            <div className="col-md-4"></div>
          </div>
          {/* /CHECKOUT TABLE */}
        </div>
      </section>
    </div>
  );
}