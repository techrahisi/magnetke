import React, { useState, useEffect } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
import firebase from '../../../Services/firebase';
import CKEditor from "react-ckeditor-component";
import loader from '../../../images/loading.gif';

export default function AddBlog() {
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState("");
    const navigate = useNavigate();


    const RegSchema = Yup.object().shape({
        title: Yup.string()
            .required("Blog title is required."),
        author: Yup.string()
            .required("Author name is required."),

        short: Yup.string()
            .required("Please add a short description about this article")
            .min(4, "Field should be at least 4 characters."),
        category: Yup.string()
            .required("Article category is required")
    });
    let onChange = (e) => {
        // console.log("Changes are here" + e.editor.getData())
        let data = e.editor.getData();
        setContent(data);
    }
    let afterPaste = (e) => (
        setContent(e.editor.getData())
    )

    const onFormSubmit = async (form) => {
        await setLoading(true);

        const key = await firebase.generateKey()

        const dataSource = document.getElementById('pictures').files[0];
        // let data = Object.values(dataSource)
        // let images = [];
        // for (var file of data) {

        var ImageURL = await firebase.storeImage(key, "image", dataSource)

        let blog = {
            image: ImageURL,
            title: form.title,
            author: form.author,
            date: form.date,
            short: form.short,
            category: form.category,
            content: content ? content : "You typed blank content!"

        }

        let callMe = () => alert(blog.date + "-" + blog.content + "-" + blog.title)


        await callMe();

        form.title = "";
        form.author = "";
        form.date = "";
        form.short = "";
        form.category = "";




        setLoading(false);
    };



    return (
        <>

            <section>
                <div className="container">
                    {/* CHECKOUT TABLE */}
                    <div className="row">
                        <div className="col-md-8">

                            <h4 className="cart-title">Post a new article</h4>
                            <Formik
                                initialValues={{
                                    title: "",
                                    author: "",
                                    date: "",
                                    short: "",
                                    catgory: "",
                                    content: "",
                                }}
                                validateOnChange
                                validationSchema={RegSchema}
                                onSubmit={onFormSubmit}
                            >
                                <Form className="custom-form" method="post" action="#">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input id="pictures" name='files' type="file" />
                                        </div>
                                        <div className="col-sm-6">
                                            <Field
                                                type="text"
                                                name="title"
                                                placeholder="Blog Title *"
                                                defaultValue=""
                                            />
                                            <ErrorMessage
                                                name="title"
                                                component="div"
                                                className="error-wrap"
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <Field
                                                type="text"
                                                name="author"
                                                placeholder="Author"
                                                defaultValue=""
                                            />
                                            <ErrorMessage
                                                name="author"
                                                component="div"
                                                className="error-wrap"
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <Field
                                                type="date"
                                                name="date"
                                                placeholder="Date Made"
                                                defaultValue=""
                                            />

                                        </div>
                                        <div className="col-sm-6">
                                            <Field
                                                type="text"
                                                name="short"
                                                placeholder="Short Description"
                                                defaultValue=""
                                            />
                                            <ErrorMessage
                                                name="short"
                                                component="div"
                                                className="error-wrap"
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <Field
                                                type="text"
                                                name="category"
                                                placeholder="Blog category *"
                                                defaultValue=""
                                            />
                                            <ErrorMessage
                                                name="category"
                                                component="div"
                                                className="error-wrap"
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <CKEditor
                                                activeClass="p10"
                                                content={content ? content : ""}
                                                events={{
                                                    "change": onChange,

                                                    "afterPaste": afterPaste
                                                }}

                                            />


                                        </div>
                                    </div>

                                    <div className="clearfix" />
                                    {loading ? (
                                        <button type="submit" className="btn   color-bg float-btn">
                                            Posting...<i className="fas fa-caret-right" />
                                        </button>
                                    ) : (
                                        <button type="submit" className="btn   color-bg float-btn">
                                            Post<i className="fas fa-caret-right" />
                                        </button>
                                    )}
                                </Form>
                            </Formik>
                        </div>

                    </div>
                    {/* /CHECKOUT TABLE */}
                </div>
            </section>
        </>

    )

}
