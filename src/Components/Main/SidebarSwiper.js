import React, { useState } from "react";
import { Link } from "react-router-dom";

function SwiperCard(props) {
  const { blog } = props;
  return (
    <div className="swiper-slide">
      <div className="grid-post-item bold_gpi fl-wrap">
        <div className="grid-post-media gpm_sing">
          <div className="bg-wrap">
            <div
              className="bg"
              style={{ backgroundImage: `url(${blog.image})` }}
            ></div>
            <div className="overlay"></div>
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

export default function SidebarSwiper(props) {
  const { blogs, title } = props;
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
    <div className="box-widget fl-wrap">
      <div className="box-widget-content">
        <div className="single-grid-slider slider_widget">
          <div className="slider_widget_title">{title}</div>
          <div className="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events">
            <div style={swiperWrapperStyles} className="swiper-wrapper">
              {blogs.map((blog, index) => (
                <SwiperCard key={index} blog={blog} />
              ))}
            </div>

            <div className="sgs-pagination sgs_hor swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
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
    </div>
  );
}
