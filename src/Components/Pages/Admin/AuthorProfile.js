import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { localAuthors } from '../Blog';
import { AuthContext } from '../../../App';
import axios from 'axios';

export default function AuthorProfile() {
    const appContext = useContext(AuthContext);
    const [remoteAuthors, setRemoteAuthors] = useState('');
    const { authorId } = useParams();
    // if (blogData) {
    //SELECT AUTHOR WITH THIS ID
    const collectAuthors = async () =>
        await axios.get('https://magnet.co.ke/API/user/users').then(function (response) {
            console.log("ALL AUTHORS ARE: ", response.data);
            setRemoteAuthors(response.data);
        });

    useEffect(() => {
        collectAuthors();
    }, [])

    if (remoteAuthors) {
        var oneAuthor = remoteAuthors.find(author => author.id === authorId);
    } else {
        var oneAuthor = localAuthors.find(author => author.id === authorId);
    }


    return (
        <>
            <section className="hero-section">
                <div className="bg-wrap hero-section_bg">
                    <div className="bg" data-bg="images/bg/1.jpg" />
                </div>
                <div className="container">
                    <div className="hero-section_title">
                        <h2>Author Page</h2>
                    </div>
                    <div className="clearfix" />
                    <div className="breadcrumbs-list fl-wrap">
                        <a href="#">Home</a> <a href="#">Authors</a>
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
                            <div className="left_fix-bar fl-wrap">
                                <div className="profile-card-wrap fl-wrap">
                                    <div className="profile-card_media fl-wrap">
                                        {/* {
                                            oneAuthor.profile ?
                                                <img src={oneAuthor.profile} alt="" />
                                                : <img src="https://images.freeimages.com/images/small-previews/391/arriving-with-the-refraction-3-1573536.jpg" alt='' />
                                        } */}

                                        <div className="profile-card_media_content">
                                            <h4>{oneAuthor.name ? oneAuthor.name : <h4>Author Name</h4>}</h4>
                                            <h5>Author since {oneAuthor.joined ? oneAuthor.joined : <div>12th April 2022</div>}</h5>
                                        </div>
                                        <div className="abs_bg" />
                                        <div className="profile-card-stats">
                                            <ul>
                                                <li>
                                                    <span><div>20</div></span>Articles
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
                                            {oneAuthor.bio ? oneAuthor.bio : <div>This should be a short story about the author.</div>}
                                        </p>
                                        <p>Filled with content hourly on the day of going live.</p>
                                        <div className="pc_contacts">
                                            <ul>
                                                <li>
                                                    <span>Write:</span> <a href="#">{oneAuthor.email ? oneAuthor.email : <div>author@email.com</div>}</a>
                                                </li>
                                                <li>
                                                    <span>Call:</span> <a href="#">{oneAuthor.phone ? oneAuthor.phone : <div>+254 712345678</div>}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="profile-card-footer fl-wrap">
                                        <div className="profile-card-footer_title">Follow: </div>
                                        <div className="profile-card-social">
                                            <ul>
                                                <li>
                                                    <Link to={oneAuthor.facebook ? oneAuthor.facebook : <div>his facebook URL</div>}>
                                                        <i className="fab fa-facebook-f" />
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link to={oneAuthor.instagram ? oneAuthor.instagram : <div>his instagram URL</div>}>
                                                        <i className="fab fa-instagram" />
                                                    </Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="main-container fl-wrap fix-container-init">
                                <div className="section-title">
                                    <h3>{oneAuthor.name ? oneAuthor.name : <div>Author Name</div>} Articles:</h3>
                                    <div className="steader_opt steader_opt_abs">
                                        <select
                                            name="filter"
                                            id="list"
                                            data-placeholder="Persons"
                                            className="style-select no-search-select"
                                        >
                                            <option>Latest</option>
                                            <option>Most Read</option>
                                            <option>Most Viewed</option>
                                            <option>Most Commented</option>
                                        </select>
                                    </div>
                                </div>
                                {/*grid-post-wrap*/}
                                <div className="grid-post-wrap">
                                    <div className="row">
                                        {/*grid-post-item*/}
                                        {
                                            localAuthors ? localAuthors.map(key => (


                                                console.log("THIS IS WHAT IS BROUGHT: " + key.blogs)
                                            )) : <h3>Blogs </h3>
                                        }
                                        <div className="col-md-6">
                                            <div className="grid-post-item  bold_gpi  fl-wrap">
                                                <div className="grid-post-media">
                                                    <a href="post-single.html" className="gpm_link">
                                                        <div className="bg-wrap">
                                                            <div className="bg" data-bg="images/all/1.jpg" />
                                                        </div>
                                                    </a>
                                                    <span className="post-media_title">
                                                        © Image Copyrights Title
                                                    </span>
                                                </div>
                                                <a
                                                    className="post-category-marker purp-bg"
                                                    href="category.html"
                                                >
                                                    Sports
                                                </a>
                                                <div className="grid-post-content">
                                                    <h3>
                                                        <a href="post-single.html">
                                                            Goodwin must Break Clarkson hold on Flags
                                                        </a>
                                                    </h3>
                                                    <span className="post-date">
                                                        <i className="far fa-clock" /> 18 may 2022
                                                    </span>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                        sed do eiusmod tempor incididunt .Lorem ipsum dolor sit
                                                        amet, consectetur adipiscing elit
                                                    </p>
                                                </div>
                                                <div className="grid-post-footer">
                                                    <div className="author-link">
                                                        <a href="author-single.html">
                                                            <img src="images/avatar/1.jpg" alt="" />{" "}
                                                            <span>By Jane Taylor</span>
                                                        </a>
                                                    </div>
                                                    <ul className="post-opt">
                                                        <li>
                                                            <i className="far fa-comments-alt" /> 6
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-eye" /> 587{" "}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/*grid-post-item end*/}
                                        {/*grid-post-item end*/}
                                    </div>
                                </div>
                                {/*grid-post-wrap end*/}
                                <div className="clearfix" />
                                <div className="load-more_btn">
                                    <i className="fal fa-undo" />
                                    Load More
                                </div>
                                {/*pagination*/}
                                <div className="pagination">
                                    <a href="#" className="prevposts-link">
                                        <i className="fas fa-caret-left" />
                                    </a>
                                    <a href="#">01.</a>
                                    <a href="#" className="current-page">
                                        02.
                                    </a>
                                    <a href="#">03.</a>
                                    <a href="#">04.</a>
                                    <a href="#" className="nextposts-link">
                                        <i className="fas fa-caret-right" />
                                    </a>
                                </div>
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
