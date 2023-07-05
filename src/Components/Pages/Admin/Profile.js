import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddBlog from './AddBlog';
import { AuthContext } from '../../../App';

export default function Profile() {
    const [profile, setProfile] = useState();

    const appContext = useContext(AuthContext);

    useEffect(() => {
        setProfile(appContext.user);
    }, [])

    return (
        profile
            ?
            <>
                <section className="hero-section" />

                {/* section end  */}
                {/*section   */}
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="left_fix-bar fl-wrap">
                                    <div className="profile-card-wrap fl-wrap">
                                        <div className="profile-card_media fl-wrap">
                                            <img src={profile.profile} alt='' />


                                            <div className="profile-card_media_content">
                                                <h4>{profile.name}</h4>
                                                <h5>{profile.joined}</h5>
                                            </div>
                                            <div className="abs_bg" />
                                            <div className="profile-card-stats">
                                                <ul>
                                                    <li>
                                                        <span>20</span>Articles
                                                    </li>
                                                    <li>
                                                        <span>1567</span> Views
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="profile-card_content">
                                            <h4>About</h4>
                                            <p>
                                                This should be a short story about the author.
                                            </p>
                                            <p>Filled with content hourly on the day of going live.</p>
                                            <div className="pc_contacts">
                                                <ul>
                                                    <li>
                                                        <span>Write:</span> <a href="#">{profile.email}</a>
                                                    </li>
                                                    <li>
                                                        <span>Call:</span> <a href="#">{profile.mobile}</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="main-container fl-wrap fix-container-init">

                                    {/*grid-post-wrap*/}
                                    <div className="grid-post-wrap">
                                        <div className="row">
                                            <AddBlog />
                                            <div className="breadcrumbs-header fl-wrap">
                                                <h3>Your previous posts</h3>
                                            </div>

                                            <div className="post-widget-container fl-wrap">
                                                {/* post-widget-item */}
                                                <div className="post-widget-item fl-wrap">
                                                    <div className="post-widget-item-media">
                                                        <a href="#">
                                                            <img src="https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="post-widget-item-content">
                                                        <h4>
                                                            <a href="#">Magpie nesting zone sites.</a>
                                                        </h4>
                                                        <ul className="pwic_opt">
                                                            <li>
                                                                <span>
                                                                    <i className="far fa-clock" /> 05 april 2021
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    <i className="far fa-comments-alt" /> 16
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    <i className="fal fa-eye" /> 727
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* post-widget-item end */}
                                            </div>




                                        </div>
                                    </div>
                                    {/*grid-post-wrap end*/}
                                    <div className="clearfix" />


                                    {/*pagination*/}

                                    {/*pagination end*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="limit-box fl-wrap" />
                </section>
            </>
            :
            <>
                <section className="hero-section" />

                {/* section end  */}
                {/*section   */}
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="left_fix-bar fl-wrap">
                                    <div className="profile-card-wrap fl-wrap">
                                        <div className="profile-card_media fl-wrap">
                                            <img src="https://images.freeimages.com/images/small-previews/391/arriving-with-the-refraction-3-1573536.jpg" alt='' />


                                            <div className="profile-card_media_content">
                                                <h4>Author Name</h4>
                                                <h5>Author since: 12th April 2022 </h5>
                                            </div>
                                            <div className="abs_bg" />
                                            <div className="profile-card-stats">
                                                <ul>
                                                    <li>
                                                        <span>20</span>Articles
                                                    </li>
                                                    <li>
                                                        <span>1567</span> Views
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="profile-card_content">
                                            <h4>About</h4>
                                            <p>
                                                This should be a short story about the author.
                                            </p>
                                            <p>Filled with content hourly on the day of going live.</p>
                                            <div className="pc_contacts">
                                                <ul>
                                                    <li>
                                                        <span>Write:</span> <a href="#">author@email.com</a>
                                                    </li>
                                                    <li>
                                                        <span>Call:</span> <a href="#">+254 712345678</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="main-container fl-wrap fix-container-init">

                                    {/*grid-post-wrap*/}
                                    <div className="grid-post-wrap">
                                        <div className="row">
                                            <AddBlog />
                                            <div className="breadcrumbs-header fl-wrap">
                                                <h3>Your previous posts</h3>
                                            </div>

                                            <div className="post-widget-container fl-wrap">
                                                {/* post-widget-item */}
                                                <div className="post-widget-item fl-wrap">
                                                    <div className="post-widget-item-media">
                                                        <a href="#">
                                                            <img src="https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="post-widget-item-content">
                                                        <h4>
                                                            <a href="#">Magpie nesting zone sites.</a>
                                                        </h4>
                                                        <ul className="pwic_opt">
                                                            <li>
                                                                <span>
                                                                    <i className="far fa-clock" /> 05 april 2021
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    <i className="far fa-comments-alt" /> 16
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    <i className="fal fa-eye" /> 727
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* post-widget-item end */}
                                            </div>




                                        </div>
                                    </div>
                                    {/*grid-post-wrap end*/}
                                    <div className="clearfix" />


                                    {/*pagination*/}

                                    {/*pagination end*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="limit-box fl-wrap" />
                </section>
            </>
    )
}
