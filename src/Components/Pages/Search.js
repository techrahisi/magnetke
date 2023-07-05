import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Search() {
  const [loading, setLoading] = useState(false);

  const RegSchema = Yup.object().shape({
    search: Yup.string()
      .required("Type to search for anything")
      .min(3, "Keep typing..."),
  });

  const onFormSubmit = async (form) => {
    await setLoading(true);

    let callMe = () => alert(`Sorry, the search funtion still pending..`);

    await callMe();

    setLoading(false);

    form.search = "";
  };

  return (
    <div className="content">
      <div className="breadcrumbs-header fl-wrap">
        <div className="container">
          <div className="breadcrumbs-header_url">
            <a href="#">Home</a>
            <a href="#">Search</a>
          </div>
          <div className="scroll-down-wrap">
            <div className="mousey">
              <div className="scroller" />
            </div>
            <span>This is a search page </span>
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
              <h4 className="cart-title">
                Seach for anything #STILL IN PROGRESS
              </h4>
              <Formik
                initialValues={{
                  email: "",
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
                        name="search"
                        placeholder="Search for anything.. *"
                        defaultValue=""
                      />
                      <ErrorMessage
                        name="search"
                        component="div"
                        className="error-wrap"
                      />
                    </div>
                  </div>

                  <div className="clearfix" />
                  {loading ? (
                    <button type="submit" className="btn   color-bg float-btn">
                      Searching... <i className="fas fa-caret-right" />
                    </button>
                  ) : (
                    <button type="submit" className="btn   color-bg float-btn">
                      Search <i className="fas fa-caret-right" />
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
