import React, { useState, useContext } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import loader from "../../images/loading.gif";
import { toast } from "react-toastify";
import axios from "axios";
import bcrypt from 'bcryptjs';
import firebase from "../../Services/firebase";


export default function Register() {
  const [loading, setLoading] = useState(false);


  const salt = bcrypt.genSaltSync(10);

  const navigate = useNavigate();

  const RegSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is not valid.")
      .required("Email is required."),
    phone: Yup.string()
      .matches(
        /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/,
        "Invalid phone number, use numbers please: 07..."
      )
      .required("Phone number is required please")
      .min(10, "Please type at least 10 characters. Use 07... format")
      .max(10, "Sorry, thats too long. Please use 07... format"),
    fname: Yup.string()
      .required("Firstname is required.")
      .min(4, "Firstname should be at least 4 characters."),
    lname: Yup.string()
      .required("Lastname is required.")
      .min(4, "Lastname should be at least 4 characters."),
    password2: Yup.string().required("Please type password again."),
    password: Yup.string()
      .required("Password is required.")
      .min(4, "Password should be at least 4 characters."),
  });

  const onFormSubmit = async (form) => {
    const key = await firebase.generateKey()
    await setLoading(true);
    const dataSource = document.getElementById('pictures').files[0];
    var ImageURL = await firebase.storeImage(key, "image", dataSource)

    if (form.password === form.password2) {

      const hashedPassword = bcrypt.hashSync(form.password, salt);

      let user = {
        profile: ImageURL,
        name: form.fname + " " + form.lname,
        email: form.email,
        mobile: form.phone,
        password: form.password
      };



      await axios.post('https://magnet.co.ke/API/user/users/save', user).then(function (response) {

        if (response.data.status === 1) {
          toast.success("User created successfully! They should login with fullname and password");

        } else {
          toast.error(`Error ${response.data.message}`)
        }
      });

      form.fname = "";
      form.lname = "";
      form.phone = "";
      form.email = "";
      form.password = "";
      form.password2 = "";
      setLoading(false);


    } else {
      toast.error("Sorry, your passwords don't match, please try again.");
    }


  };

  return (
    <div className="content">
      <div className="breadcrumbs-header fl-wrap">
        <div className="container">
          <div className="breadcrumbs-header_url">
            <a href="#">Home</a>
            <a href="#">Register</a>
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
              <h4 className="cart-title">Register author</h4>
              <Formik
                initialValues={{
                  fname: "",
                  lname: "",
                  phone: "",
                  email: "",
                  password: "",
                  password2: "",
                }}
                validateOnChange
                validationSchema={RegSchema}
                onSubmit={onFormSubmit}
              >
                <Form className="custom-form" method="post" action="#">
                  <div className="row">
                    <div className="col-sm-6">
                      <label>Profile *
                      </label>
                      <input id="pictures" name='files' type="file" />


                      <Field
                        type="text"
                        name="fname"
                        placeholder="First Name *"
                        defaultValue=""
                      />
                      <ErrorMessage
                        name="fname"
                        component="span"
                        className="error-wrap"
                      />
                    </div>
                    <div className="col-sm-6">
                      <Field
                        type="text"
                        name="lname"
                        placeholder="Last Name *"
                        defaultValue=""
                      />
                      <ErrorMessage
                        name="lname"
                        component="div"
                        className="error-wrap"
                      />
                    </div>
                    <div className="col-sm-6">
                      <Field
                        type="text"
                        name="email"
                        placeholder="Email Address *"
                        defaultValue=""
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error-wrap"
                      />
                    </div>
                    <div className="col-sm-6">
                      <Field
                        type="text"
                        name="phone"
                        placeholder="Phone *"
                        defaultValue=""
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="error-wrap"
                      />
                    </div>
                    <div className="col-sm-6">
                      <Field
                        type="password"
                        name="password"
                        placeholder="Create a password *"
                        defaultValue=""
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error-wrap"
                      />
                    </div>
                    <div className="col-sm-6">
                      <Field
                        type="password"
                        name="password2"
                        placeholder="Confirm your password *"
                        defaultValue=""
                      />
                      <ErrorMessage
                        name="password2"
                        component="div"
                        className="error-wrap"
                      />
                    </div>
                  </div>

                  <div className="clearfix" />
                  {loading ? (
                    <button type="submit" className="btn   color-bg float-btn">
                      Registering..... <i className="fas fa-caret-right" />
                    </button>
                    // <div className="ajax-wrapper fl-wrap">
                    //   <div className="ajax-loader">
                    //     <img src={loader} alt="" />
                    //   </div>
                    //   <div id="ajax-content" className="fl-wrap"></div>
                    // </div>
                  ) : (
                    <button type="submit" className="btn   color-bg float-btn">
                      Register <i className="fas fa-caret-right" />
                    </button>
                  )}
                </Form>
              </Formik>
            </div>
            <div className="col-md-4">
              {/* CART TOTALS  */}
              {/* <div className="cart-totals  fl-wrap">
                                <h3>Cart Totals</h3>
                                <table className="total-table">
                                    <tbody>
                                        <tr>
                                            <th>Cart Subtotal:</th>
                                            <td>$695 </td>
                                        </tr>
                                        <tr>
                                            <th>Shipping Total:</th>
                                            <td>$52 </td>
                                        </tr>
                                        <tr>
                                            <th>Total:</th>
                                            <td>$767 </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button
                                    type="submit"
                                    onclick="location.href='shop.html'"
                                    className="cart-totals_btn color-bg"
                                >
                                    Back to Shop
                                </button>
                            </div> */}
              {/* /CART TOTALS  */}
            </div>
          </div>
          {/* /CHECKOUT TABLE */}
        </div>
      </section>
    </div>
  );
}
