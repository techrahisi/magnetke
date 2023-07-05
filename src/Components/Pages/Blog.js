import React from "react";
import { Link } from "react-router-dom";

export const localBlogs = [
  {
    id: "1",
    authorId: "2",
    title: "Innovations that Bring Pleasure to All Peoples",
    image:
      "https://images.freeimages.com/images/small-previews/53c/snowy-log-1401474.jpg",
    author: {
      name: "Mark",
      profile:
        "https://images.freeimages.com/images/small-previews/391/arriving-with-the-refraction-3-1573536.jpg",
    },
    tags: "tech, latest, trending",
    views: 4,
    comments: 9,
    dateMade: "27thJune2022",
    short:
      "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur",
    category: "Technology",
    content:
      "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor . Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor",
  },
  {
    id: "2",
    authorId: "3",
    title: "This is a title example 2",
    image:
      "https://images.freeimages.com/images/small-previews/114/log-cabin-1375738.jpg",
    author: {
      name: "Mark2",
      profile:
        "https://images.freeimages.com/images/small-previews/391/arriving-with-the-refraction-3-1573536.jpg",
    },
    tags: "tech, latest, trending",
    views: 7,
    comments: 2,
    dateMade: "26thJune2022",
    short:
      "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur",
    category: "News",
    content:
      "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor . Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor",
  },
  {
    id: "3",
    authorId: "4",
    title: "This is a title example 3",
    image:
      "https://images.freeimages.com/images/small-previews/922/log-bench-1-1560043.jpg",
    author: {
      name: "Mark3",
      profile:
        "https://images.freeimages.com/images/small-previews/391/arriving-with-the-refraction-3-1573536.jpg",
    },
    tags: "tech, latest, trending",
    views: 32,
    comments: 5,
    dateMade: "25thJune2022",
    short:
      "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur",
    category: "Technology",
    content:
      "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor . Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor",
  },
  {
    id: "4",
    authorId: "5",
    title: "This is a title example 4",
    image:
      "https://images.freeimages.com/images/small-previews/db1/turtle-on-a-log-1538773.jpg",
    author: {
      name: "Mark4",
      profile:
        "https://images.freeimages.com/images/small-previews/391/arriving-with-the-refraction-3-1573536.jpg",
    },
    tags: "tech, latest, trending",
    views: 17,
    comments: 8,
    dateMade: "24thJune2022",
    short:
      "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur",
    category: "Lifestyle",
    content:
      "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor . Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor",
  },
  {
    id: "5",
    authorId: "6",
    title: "This is a title example 5",
    image:
      "https://cdn.pixabay.com/photo/2021/10/11/11/12/countryside-6700296_960_720.jpg",
    author: {
      name: "Maxwell",
      profile:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?",
    },
    tags: "News, Trends",
    views: 21,
    comments: 17,
    dateMade: "20thJuly2022",
    short:
      "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur",
    category: "News",
    content:
      "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor . Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel temporary",
  },
];
export const localAuthors = [
  {
    id: "1",
    name: "Mark Jordan",
    profile:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
    phone: "0712345567",
    email: "jordan@hisemail.com",
    bio: "This is just a short story about Mark Jordan",
    joined: "12th April 2022",
    facebook: "fblink_url",
    instagram: "insta_url",
  },
  {
    id: "2",
    name: "John Rambo",
    profile:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
    phone: "07123445637",
    email: "rambo@hisemail.com",
    bio: "This is just a short story about Rambo",
    joined: "10th May 2022",
    facebook: "fblink_url",
    instagram: "insta_url",
  },
  {
    id: "3",
    name: "Barry Allen",
    profile:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
    phone: "0775345567",
    email: "barry@hisemail.com",
    bio: "This is just a short story about Mark Jordan",
    joined: "7th July 2022",
    facebook: "fblink_url",
    instagram: "insta_url"
  },
  {
    id: "4",
    name: "The Guy",
    profile: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
    phone: "0775345567",
    email: "barry@hisemail.com",
    bio: "This is just a short story about Mark Jordan",
    joined: "7th July 2022",
    facebook: "fblink_url",
    instagram: "insta_url"
  }

]

export default function Blog() {
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
                <div className="section-title">
                  <h2>Most Recent World News</h2>
                  <h4>Don't miss daily news</h4>
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
                <div className="list-post-wrap">
                  {localBlogs ? (
                    localBlogs.map((blog) => (
                      <div className="list-post-wrap">
                        {/*list-post*/}
                        <div className="list-post fl-wrap">
                          <div className="list-post-media">
                            <Link
                              to={`/blogs/${blog.id}`}
                              onClick={() =>
                                window.scrollTo({ top: 0, behaviour: "smooth" })
                              }
                            >
                              <div className="bg-wrap">
                                <div className="bg">
                                  <img src={blog.image} alt="" />
                                </div>
                              </div>
                            </Link>
                            <span className="post-media_title">
                              {blog.title}
                            </span>
                          </div>
                          <div className="list-post-content">
                            <a className="post-category-marker" href="#">
                              {blog.category}
                            </a>
                            <h3>
                              <Link
                                to={`/blogs/${blog.id}`}
                                onClick={() =>
                                  window.scrollTo({
                                    top: 0,
                                    behaviour: "smooth",
                                  })
                                }
                              >
                                {blog.title}
                              </Link>
                            </h3>
                            <span className="post-date">
                              <i className="far fa-clock" />
                              {blog.dateMade}
                            </span>
                            <p>{blog.short}</p>
                            <ul className="post-opt">
                              <li>
                                <i className="far fa-comments-alt" />{" "}
                                {blog.comments}{" "}
                              </li>
                              <li>
                                <i className="fal fa-eye" /> {blog.views}{" "}
                              </li>
                            </ul>
                            <div className="author-link">
                              <Link to={`/authors/${blog.id}`}>
                                <img src={blog.author.profile} alt="" />{" "}
                                <span>{blog.author.name}</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/*list-post end*XXXXXXXXXXX*/}
                      </div>
                    ))
                  ) : (
                    <h3>Fetching blogs...</h3>
                  )}
                </div>
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
                        <a href="#">Science</a>
                        <span>3</span>
                      </li>
                      <li>
                        <a href="#">Politics</a> <span>6</span>
                      </li>
                      <li>
                        <a href="#">Technology</a> <span>12</span>
                      </li>
                      <li>
                        <a href="#">Sports</a> <span>4</span>
                      </li>
                      <li>
                        <a href="#">Business</a> <span>22</span>
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
                        <i className="fab fa-instagram" />
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
                            <a href="#tab-popular"> Popular News </a>
                          </li>
                          <li>
                            <a href="#tab-resent">Resent News</a>
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
                                            <i className="far fa-comments-alt" />{" "}
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
                                <h3>Fetching data...</h3>
                              )}
                            </div>
                          </div>
                        </div>
                        {/*tab  end*/}
                        {/*tab */}
                        {localBlogs ? (
                          localBlogs.map((key) => (
                            <div className="tab">
                              <div id="tab-resent" className="tab-content">
                                <div className="post-widget-container fl-wrap">
                                  {/* post-widget-item */}
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
                                  {/* post-widget-item end */}
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <h3>Fetching data....</h3>
                        )}

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
