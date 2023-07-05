import React, { useState } from "react";
import { Link } from "react-router-dom";

function SectionTitle(props) {
  const { title, subtitle } = props;
  return (
    <div className="section-title sect_dec">
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
    </div>
  );
}

function ListPost(props) {
  const { blog } = props;
  return (
    <div className="list-post fl-wrap">
      <Link className="post-category-marker" to="/blog">
        {blog.category}
      </Link>
      <div className="list-post-media">
        <Link to={`/blogs/${blog.id}`}>
          <div className="bg-wrap">
            <div
              className="bg"
              style={{
                backgroundImage: `url(${blog.image})`,
              }}
            ></div>
          </div>
        </Link>
        <span className="post-media_title">{blog.title}</span>
      </div>
      <div className="list-post-content">
        <h3>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </h3>
        <span className="post-date">
          <i className="far fa-clock"></i>
          {blog.dateMade}
        </span>
      </div>
    </div>
  );
}

function PostCards(props) {
  const { blogs, number } = props;
  return (
    <div className="more-post-wrap fl-wrap">
      <div className="list-post-wrap list-post-wrap_column fl-wrap">
        <div className="row">
          {Array(number)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="col-md-6">
                <ListPost
                  blog={
                    blogs[Math.round(Math.random() * 100) % (blogs.length - 1)]
                  }
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function SwiperCard(props) {
  const { blog } = props;
  return (
    <div className="swiper-slide">
      <div className="grid-post-item bold_gpi fl-wrap">
        <div className="grid-post-media gpm_sing">
          <div
            className="bg"
            style={{ backgroundImage: `url(${blog.image})` }}
          ></div>
          <div className="author-link">
            <Link to={`/blogs/${blog.id}`}>
              <img src={blog.author.profile} alt="" />
              <span>{blog.author.name}</span>
            </Link>
          </div>
          <div className="grid-post-media_title">
            <Link className="post-category-marker" to="/blog">
              {blog.category}
            </Link>
            <h4>
              <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
            </h4>
            <span className="video-date">
              <i className="far fa-clock"></i>
              {blog.dateMade}
            </span>
            <ul className="post-opt">
              <li>
                <i className="far fa-comments-alt"></i>
                {blog.comments}
              </li>
              <li>
                <i className="fal fa-eye"></i>
                {blog.views}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Swiper(props) {
  const { blogs } = props;
  const [swiperWrapperStyles, setSwiperWrapperStyles] = useState({
    transform: "translateX(0%)",
    transition: "transform 500ms ease-in",
  });
  const [currentCard, setCurrentCard] = useState(0);

  function changeCard(card) {
    setCurrentCard(card);
    setSwiperWrapperStyles({
      ...swiperWrapperStyles,
      transform: `translateX(-${card}00%)`,
    });
  }

  return (
    <div className="single-grid-slider-wrap fl-wrap">
      <div className="single-grid-slider">
        <div className="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events">
          <div style={swiperWrapperStyles} className="swiper-wrapper">
            {blogs.map((blog, index) => (
              <SwiperCard key={index} blog={blog} />
            ))}
          </div>

          <div className="sgs-pagination sgs_ver swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            <span
              onClick={() => changeCard(0)}
              className={`swiper-pagination-bullet ${
                currentCard === 0 ? "swiper-pagination-bullet-active" : ""
              }`}
            ></span>
            <span
              onClick={() => changeCard(1)}
              className={`swiper-pagination-bullet ${
                currentCard === 1 ? "swiper-pagination-bullet-active" : ""
              }`}
            ></span>
            <span
              onClick={() => changeCard(2)}
              className={`swiper-pagination-bullet ${
                currentCard === 2 ? "swiper-pagination-bullet-active" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TopStories(props) {
  const { blogs, title, subtitle } = props;
  return (
    <>
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="grid-post-wrap">
        <PostCards blogs={blogs} number={2} />
        <Swiper blogs={blogs.slice(0, 3)} />
        <PostCards blogs={blogs} number={4} />
      </div>
    </>
  );
}
