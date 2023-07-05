import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { localBlogs } from "./Blog";

export default function Singleblog() {
  const [blogData, setBlogData] = useState("");

  const { blogId } = useParams();

  // if (blogData) {
  var oneBlog = localBlogs.find((post) => post.id === blogId);

  // } else {
  //     var oneBlog = localBlogs;

  // }



  return (
    <div className="content">
      <div className="breadcrumbs-header fl-wrap">
        <div className="container">
          <div className="breadcrumbs-header_url">
            <a href="#">Home</a>
            <span>Blog List style</span>
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
          <div className="row">
            <div className="col-md-8">
              <div className="main-container fl-wrap fix-container-init">
                {/* single-post-header  */}
                <div className="single-post-header fl-wrap">
                  <a className="post-category-marker" href="category.html">
                    {oneBlog.category}
                  </a>
                  <div className="clearfix" />
                  <h1>{oneBlog.title}</h1>
                  <h4>{oneBlog.short}</h4>
                  <div className="clearfix" />
                  <div className="author-link">
                    <a href="author-single.html">
                      <img src={oneBlog.author.profile} alt="" />{" "}
                      <span>{oneBlog.author.name}</span>
                    </a>
                  </div>
                  <span className="post-date">
                    <i className="far fa-clock" /> {oneBlog.dateMade}
                  </span>
                  <ul className="post-opt">
                    <li>
                      <i className="far fa-comments-alt" /> {oneBlog.comments}{" "}
                    </li>
                    <li>
                      <i className="fal fa-eye" />
                      {oneBlog.views}{" "}
                    </li>
                  </ul>
                </div>
                {/* single-post-header end   */}
                {/* single-post-media   */}
                <div className="single-post-media fl-wrap">
                  <div className="single-slider-wrap fl-wrap">
                    <div className="single-slider fl-wrap">
                      <div className="swiper-container">
                        <div className="swiper-wrapper lightgallery">
                          {/* swiper-slide   */}
                          <div className="swiper-slide hov_zoom">
                            <img src={oneBlog.image} alt="" />
                            <a
                              href="images/all/1.jpg"
                              className="box-media-zoom   popup-image"
                            >
                              <i className="fas fa-search" />
                            </a>
                            <span className="post-media_title pmd_vis">
                              {oneBlog.title}
                            </span>
                          </div>
                          {/* swiper-slide end   */}
                          {/* swiper-slide   */}
                          <div className="swiper-slide hov_zoom">
                            <img src={oneBlog.image} alt="" />
                            <a
                              href="images/all/1.jpg"
                              className="box-media-zoom   popup-image"
                            >
                              <i className="fas fa-search" />
                            </a>
                            <span className="post-media_title pmd_vis">
                              {oneBlog.title}
                            </span>
                          </div>
                          {/* swiper-slide end   */}
                          {/* swiper-slide   */}
                          <div className="swiper-slide hov_zoom">
                            <img src={oneBlog.image} alt="" />
                            <a
                              href="images/all/1.jpg"
                              className="box-media-zoom   popup-image"
                            >
                              <i className="fas fa-search" />
                            </a>
                            <span className="post-media_title pmd_vis">
                              {oneBlog.title}
                            </span>
                          </div>
                          {/* swiper-slide end   */}
                        </div>
                      </div>
                    </div>
                    <div className="ss-slider-controls2">
                      <div className="ss-slider-pagination pag-style" />
                    </div>
                    <div className="ss-slider-cont ss-slider-cont-prev">
                      <i className="fas fa-caret-left" />
                    </div>
                    <div className="ss-slider-cont ss-slider-cont-next">
                      <i className="fas fa-caret-right" />
                    </div>
                  </div>
                </div>
                {/* single-post-media end   */}
                {/* single-post-content   */}
                <div className="single-post-content spc_column fl-wrap">
                  <div className="single-post-content_column">
                    <div className="share-holder ver-share fl-wrap">
                      <div className="share-title">
                        Share This <br /> Article:
                      </div>
                      <div className="share-container  isShare" />
                    </div>
                  </div>
                  <div className="fs-wrap smpar fl-wrap">
                    <div className="fontSize">
                      <span className="fs_title">Font size: </span>
                      <input
                        type="text"
                        className="rage-slider"
                        data-step={1}
                        data-min={12}
                        data-max={15}
                        defaultValue={12}
                      />
                    </div>
                    <div className="show-more-snopt smact">
                      <i className="fal fa-ellipsis-v" />
                    </div>
                    <div className="show-more-snopt-tooltip">
                      <a href="#comments" className="custom-scroll-link">
                        {" "}
                        <i className="fas fa-comment-alt" /> Write a Comment
                      </a>
                      <a href="#">
                        {" "}
                        <i className="fas fa-exclamation-triangle" /> Report{" "}
                      </a>
                    </div>
                    <a
                      className="print-btn"
                      href="javascript:window.print()"
                      data-microtip-position="bottom"
                    >
                      <span>Print</span>
                      <i className="fal fa-print" />
                    </a>
                  </div>
                  <div className="clearfix" />
                  <div className="single-post-content_text" id="font_chage">
                    <p className="has-drop-cap">{oneBlog.content}</p>
                    <h4 className="mb_head">{oneBlog.title}</h4>
                    <p>{oneBlog.content}</p>
                    <div className="single-post-content_text_media fl-wrap">
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src="images/all/1.jpg"
                            alt=""
                            className="respimg"
                          />
                        </div>
                        <div className="col-md-6">
                          <p> {oneBlog.content} </p>
                          <p> {oneBlog.content} </p>
                        </div>
                      </div>
                    </div>
                    <p> {oneBlog.content} </p>
                    <h4 className="mb_head">{oneBlog.title}</h4>
                    <div className="single-post-content_text_media fl-wrap">
                      <div className="row">
                        <div className="col-md-6">
                          <p className="has-drop-cap"> {oneBlog.content} </p>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="images/all/1.jpg"
                            alt=""
                            className="respimg"
                          />
                        </div>
                      </div>
                    </div>
                    <p> {oneBlog.content} </p>
                    <blockquote>
                      <p> {oneBlog.content} </p>
                    </blockquote>
                    <p>{oneBlog.content}</p>
                    <p> {oneBlog.content}</p>
                  </div>
                  <div className="single-post-footer fl-wrap">
                    <div className="post-single-tags">
                      <span className="tags-title">
                        <i className="fas fa-tag" /> Tags :{" "}
                      </span>
                      <div className="tags-widget">{oneBlog.tags}</div>
                    </div>
                  </div>
                  {/* single-post-nav"   */}
                  <div className="single-post-nav fl-wrap">
                    <a href="#" className="single-post-nav_prev spn_box">
                      <div className="spn_box_img">
                        <img
                          src="images/all/1.jpg"
                          className="respimg"
                          alt=""
                        />
                      </div>
                      <div className="spn-box-content">
                        <span className="spn-box-content_subtitle">
                          <i className="fas fa-caret-left" /> Prev Post
                        </span>
                        <span className="spn-box-content_title">
                          New VR Glasses and Headset System Release
                        </span>
                      </div>
                    </a>
                    <a href="#" className="single-post-nav_next spn_box">
                      <div className="spn_box_img">
                        <img
                          src="images/all/1.jpg"
                          className="respimg"
                          alt=""
                        />
                      </div>
                      <div className="spn-box-content">
                        <span className="spn-box-content_subtitle">
                          Next Post <i className="fas fa-caret-right" />
                        </span>
                        <span className="spn-box-content_title">
                          $310m to help businesses in latest Lockdow
                        </span>
                      </div>
                    </a>
                  </div>
                  {/* single-post-nav"  end   */}
                </div>
                {/* single-post-content  end   */}
                <div className="limit-box2 fl-wrap" />
                {/* post-author*/}
                <div className="post-author fl-wrap">
                  <div className="author-img">
                    <img src="images/avatar/1.jpg" alt="" />
                  </div>
                  <div className="author-content fl-wrap">
                    <h5>
                      Written By <a href="author-single.html">Mark Rose</a>
                    </h5>
                    <p>
                      At one extremity the rope was unstranded, and the separate
                      spread yarns were all braided and woven round the socket
                      of the harpoon; the pole was then driven hard up into the
                      socket..
                    </p>
                  </div>
                  <div className="profile-card-footer fl-wrap">
                    <Link
                      to="/contact"
                      className="post-author_link"
                      onClick={() =>
                        window.scrollTo({ top: 0, behaviour: "smooth" })
                      }
                    >
                      View Profile <i className="fas fa-caret-right" />
                    </Link>
                    <div className="profile-card-footer_soc">
                      <div className="profile-card-footer_title">Follow: </div>
                      <div className="profile-card-social">
                        <ul>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-vk" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*post-author end*/}
                <div className="more-post-wrap  fl-wrap">
                  <div className="pr-subtitle prs_big">Related Posts</div>
                  <div className="list-post-wrap list-post-wrap_column fl-wrap">
                    <div className="row">
                      <div className="col-md-6">
                        {/*list-post*/}
                        <div className="list-post fl-wrap">
                          <a
                            className="post-category-marker"
                            href="category.html"
                          >
                            Science
                          </a>
                          <div className="list-post-media">
                            <a href="#">
                              <div className="bg-wrap">
                                <div
                                  className="bg"
                                  data-bg="images/all/1.jpg"
                                />
                              </div>
                            </a>
                            <span className="post-media_title">
                              © Image Copyrights Title
                            </span>
                          </div>
                          <div className="list-post-content">
                            <h3>
                              <a href="#">How to start Home renovation.</a>
                            </h3>
                            <span className="post-date">
                              <i className="far fa-clock" /> 05 April 2022
                            </span>
                          </div>
                        </div>
                        {/*list-post end*/}
                      </div>
                      <div className="col-md-6">
                        {/*list-post*/}
                        <div className="list-post fl-wrap">
                          <a
                            className="post-category-marker"
                            href="category.html"
                          >
                            Sports
                          </a>
                          <div className="list-post-media">
                            <a href="#">
                              <div className="bg-wrap">
                                <div
                                  className="bg"
                                  data-bg="images/all/1.jpg"
                                />
                              </div>
                            </a>
                            <span className="post-media_title">
                              © Image Copyrights Title
                            </span>
                          </div>
                          <div className="list-post-content">
                            <h3>
                              <a href="#">
                                Warriors face season defining clash
                              </a>
                            </h3>
                            <span className="post-date">
                              <i className="far fa-clock" /> 11 March 2022
                            </span>
                          </div>
                        </div>
                        {/*list-post end*/}
                      </div>
                    </div>
                  </div>
                </div>
                {/*comments  */}
                <div id="comments" className="single-post-comm fl-wrap">
                  <div className="pr-subtitle prs_big">
                    Commnets <span>3</span>
                  </div>
                  <ul className="commentlist clearafix">
                    <li className="comment">
                      <div className="comment-author">
                        <img
                          alt=""
                          src="images/avatar/1.jpg"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="comment-body smpar">
                        <h4>
                          <a href="#">Kevin Antony</a>
                        </h4>
                        <div className="box-widget-menu-btn smact">
                          <i className="far fa-ellipsis-h" />
                        </div>
                        <div className="show-more-snopt-tooltip bxwt">
                          <a href="#">
                            {" "}
                            <i className="fas fa-reply" /> Reply
                          </a>
                          <a href="#">
                            {" "}
                            <i className="fas fa-exclamation-triangle" /> Report{" "}
                          </a>
                        </div>
                        <div className="clearfix" />
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Phasellus hendrerit. Pellentesque aliquet nibh
                          nec urna. In nisi neque, aliquet vel, dapibus id,
                          mattis vel, nisi. Sed pretium, ligula sollicitudin
                          laoreet viverra, tortor libero sodales leo, eget
                          blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                        </p>
                        <a className="comment-reply-link" href="#">
                          <i className="fas fa-reply" /> Reply
                        </a>
                        <div className="comment-meta">
                          <i className="far fa-clock" /> January 02, 2020
                        </div>
                        <div className="comment-body_dec" />
                      </div>
                    </li>
                    <li className="comment comment_reply">
                      <div className="comment-author">
                        <img
                          alt=""
                          src="images/avatar/1.jpg"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="comment-body smpar">
                        <h4>
                          <a href="#">Liza Rose</a>
                        </h4>
                        <div className="box-widget-menu-btn smact">
                          <i className="far fa-ellipsis-h" />
                        </div>
                        <div className="show-more-snopt-tooltip bxwt">
                          <a href="#">
                            {" "}
                            <i className="fas fa-reply" /> Reply
                          </a>
                          <a href="#">
                            {" "}
                            <i className="fas fa-exclamation-triangle" /> Report{" "}
                          </a>
                        </div>
                        <div className="clearfix" />
                        <p>
                          {" "}
                          In enim justo, rhoncus ut, imperdiet a, venenatis
                          vitae, justo. Nullam dictum felis eu pede mollis
                          pretium.
                        </p>
                        <a className="comment-reply-link" href="#">
                          <i className="fas fa-reply" /> Reply
                        </a>
                        <div className="comment-meta">
                          <i className="far fa-clock" /> January 02, 2020
                        </div>
                        <div className="comment-body_dec" />
                      </div>
                    </li>
                    <li className="comment">
                      <div className="comment-author">
                        <img
                          alt=""
                          src="images/avatar/1.jpg"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="comment-body smpar">
                        <h4>
                          <a href="#">Liza Rose</a>
                        </h4>
                        <div className="box-widget-menu-btn smact">
                          <i className="far fa-ellipsis-h" />
                        </div>
                        <div className="show-more-snopt-tooltip bxwt">
                          <a href="#">
                            {" "}
                            <i className="fas fa-reply" /> Reply
                          </a>
                          <a href="#">
                            {" "}
                            <i className="fas fa-exclamation-triangle" /> Report{" "}
                          </a>
                        </div>
                        <div className="clearfix" />
                        <p>
                          {" "}
                          Donec quam felis, ultricies nec, pellentesque eu,
                          pretium quis, sem. Nulla consequat massa quis enim.
                          Donec pede justo, fringilla vel, aliquet nec,
                          vulputate eget, arcu. In enim justo, rhoncus ut,
                          imperdiet a, venenatis vitae, justo. Nullam dictum
                          felis eu pede mollis pretium.
                        </p>
                        <a className="comment-reply-link" href="#">
                          <i className="fas fa-reply" /> Reply
                        </a>
                        <div className="comment-meta">
                          <i className="far fa-clock" /> January 02, 2020
                        </div>
                        <div className="comment-body_dec" />
                      </div>
                    </li>
                  </ul>
                  <div className="clearfix" />
                  <div id="addcom" className="clearafix">
                    <div className="pr-subtitle">
                      {" "}
                      Leave A Comment <i className="fas fa-caret-down" />
                    </div>
                    <div className="comment-reply-form fl-wrap">
                      <form
                        id="add-comment"
                        className="add-comment custom-form"
                      >
                        <fieldset>
                          <div className="row">
                            <div className="col-md-6">
                              <input
                                type="text"
                                placeholder="Your Name *"
                                defaultValue=""
                              />
                            </div>
                            <div className="col-md-6">
                              <input
                                type="text"
                                placeholder="Email Address*"
                                defaultValue=""
                              />
                            </div>
                          </div>
                          <textarea
                            placeholder="Your Comment:"
                            defaultValue={""}
                          />
                        </fieldset>
                        <button className="btn float-btn color-btn">
                          {" "}
                          Submit Comment <i className="fas fa-caret-right" />{" "}
                        </button>
                      </form>
                    </div>
                  </div>
                  {/*end respond*/}
                </div>
                {/*comments end */}
              </div>
            </div>
            <div className="col-md-4">
              {/* sidebar   */}
              <div className="sidebar-content fl-wrap fixed-bar">
                {/* box-widget */}
                <div className="box-widget fl-wrap">
                  <div className="box-widget-content">
                    <div className="search-widget fl-wrap">
                      <form action="#">
                        <input
                          name="se"
                          id="se12"
                          type="text"
                          className="search"
                          placeholder="Search..."
                          defaultValue=""
                        />
                        <button className="search-submit2" id="submit_btn12">
                          <i className="far fa-search" />{" "}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                {/* box-widget  end */}
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
                {/* box-widget */}
                <div className="box-widget fl-wrap">
                  <div className="widget-title">Categories</div>
                  <div className="box-widget-content">
                    <ul className="cat-wid-list">
                      <li>
                        <Link
                          to="/blog"
                          onClick={() =>
                            window.scrollTo({ top: 0, behaviour: "smooth" })
                          }
                        >
                          Science
                        </Link>
                        <span>3</span>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          onClick={() =>
                            window.scrollTo({ top: 0, behaviour: "smooth" })
                          }
                        >
                          Politics
                        </Link>{" "}
                        <span>6</span>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          onClick={() =>
                            window.scrollTo({ top: 0, behaviour: "smooth" })
                          }
                        >
                          Technology
                        </Link>{" "}
                        <span>12</span>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          onClick={() =>
                            window.scrollTo({ top: 0, behaviour: "smooth" })
                          }
                        >
                          Sports
                        </Link>{" "}
                        <span>4</span>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          onClick={() =>
                            window.scrollTo({ top: 0, behaviour: "smooth" })
                          }
                        >
                          Business
                        </Link>{" "}
                        <span>22</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* box-widget  end */}
                {/* box-widget */}
                <div className="box-widget fl-wrap">
                  <div className="widget-title">Popular Tags</div>
                  <div className="box-widget-content">
                    <div className="tags-widget">
                      <Link
                        to="/blog"
                        onClick={() =>
                          window.scrollTo({ top: 0, behaviour: "smooth" })
                        }
                      >
                        Science
                      </Link>
                      <Link
                        to="/blog"
                        onClick={() =>
                          window.scrollTo({ top: 0, behaviour: "smooth" })
                        }
                      >
                        Politics
                      </Link>
                      <Link
                        to="/blog"
                        onClick={() =>
                          window.scrollTo({ top: 0, behaviour: "smooth" })
                        }
                      >
                        Technology
                      </Link>
                      <Link
                        to="/blog"
                        onClick={() =>
                          window.scrollTo({ top: 0, behaviour: "smooth" })
                        }
                      >
                        Business
                      </Link>
                      <Link
                        to="/blog"
                        onClick={() =>
                          window.scrollTo({ top: 0, behaviour: "smooth" })
                        }
                      >
                        Sports
                      </Link>
                      <Link
                        to="/blog"
                        onClick={() =>
                          window.scrollTo({ top: 0, behaviour: "smooth" })
                        }
                      >
                        Food
                      </Link>
                    </div>
                  </div>
                </div>
                {/* box-widget  end */}
                {/* box-widget */}
                <div className="box-widget fl-wrap">
                  <div className="widget-title">Follow Us</div>
                  <div className="box-widget-content">
                    <div className="social-widget">
                      <a href="#" target="_blank" className="facebook-soc">
                        <i className="fab fa-facebook-f" />
                        <span className="soc-widget-title">Likes</span>
                        <span className="soc-widget_counter">2640</span>
                      </a>
                      <a href="#" target="_blank" className="twitter-soc">
                        <i className="fab fa-twitter" />
                        <span className="soc-widget-title">Followers</span>
                        <span className="soc-widget_counter">1456</span>
                      </a>
                      <a href="#" target="_blank" className="youtube-soc">
                        <i className="fab fa-youtube" />
                        <span className="soc-widget-title">Followers</span>
                        <span className="soc-widget_counter">1456</span>
                      </a>
                      <a href="#" target="_blank" className="instagram-soc">
                        <i className="fab fa-linkedin" />
                        <span className="soc-widget-title">Followers</span>
                        <span className="soc-widget_counter">1456</span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* box-widget  end */}
                {/* box-widget */}
                <div className="box-widget fl-wrap">
                  <div className="box-widget-content">
                    {/* content-tabs-wrap */}
                    <div className="content-tabs-wrap tabs-act tabs-widget fl-wrap">
                      <div className="content-tabs fl-wrap">
                        <ul className="tabs-menu fl-wrap no-list-style">
                          <li className="current">
                            <a href="#"> Popular News </a>
                          </li>
                          <li>
                            <a href="#">Recent News</a>
                          </li>
                        </ul>
                      </div>
                      {/*tabs */}
                      <div className="tabs-container">
                        {/*tab */}
                        <div className="tab">
                          <div
                            id="tab-popular"
                            className="tab-content first-tab"
                          >
                            <div className="post-widget-container fl-wrap">
                              {/* post-widget-item */}
                              {localBlogs ? (
                                localBlogs.map((key) => (
                                  <div className="post-widget-item fl-wrap">
                                    <div className="post-widget-item-media">
                                      <Link to={`/blogs/${key.id}`}>
                                        <img src={key.image} alt="" />
                                      </Link>
                                    </div>
                                    <div className="post-widget-item-content">
                                      <h4>
                                        <Link to={`/blogs/${key.id}`}>
                                          {key.title}
                                        </Link>
                                      </h4>
                                      <ul className="pwic_opt">
                                        <li>
                                          <span>
                                            <i className="far fa-clock" />
                                            {key.dateMade}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="far fa-comments-alt" />
                                            {key.comments}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="fal fa-eye" />
                                            {key.views}
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <h3>Loading....</h3>
                              )}

                              {/* post-widget-item end */}
                            </div>
                          </div>
                        </div>
                        {/*tab  end*/}
                        {/*tab */}
                        <div className="tab">
                          <div id="tab-resent" className="tab-content">
                            <div className="post-widget-container fl-wrap">
                              {/* post-widget-item */}
                              {localBlogs ? (
                                localBlogs.map((key) => (
                                  <div className="post-widget-item fl-wrap">
                                    <div className="post-widget-item-media">
                                      <Link to={`/blogs/${key.id}`}>
                                        <img src={key.image} alt="" />
                                      </Link>
                                    </div>
                                    <div className="post-widget-item-content">
                                      <h4>
                                        <Link to={`/blogs/${key.id}`}>
                                          {key.title}
                                        </Link>
                                      </h4>
                                      <ul className="pwic_opt">
                                        <li>
                                          <span>
                                            <i className="far fa-clock" />
                                            {key.dateMade}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="far fa-comments-alt" />
                                            {key.comments}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="fal fa-eye" />{" "}
                                            {key.views}
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <h3>Loading...</h3>
                              )}

                              {/* post-widget-item end */}
                            </div>
                          </div>
                        </div>
                        {/*tab end*/}
                      </div>
                      {/*tabs end*/}
                    </div>
                    {/* content-tabs-wrap end */}
                  </div>
                </div>
                {/* box-widget  end */}
              </div>
              {/* sidebar  end */}
            </div>
          </div>
          <div className="limit-box fl-wrap" />
        </div>
      </section>
      {/* section end */}
      {/* section  */}
      <div className="gray-bg ad-wrap fl-wrap">
        <div className="content-banner-wrap">
          <img src="images/all/banner.jpg" className="respimg" alt="" />
        </div>
      </div>
      {/* section end */}
    </div>
  );
}
