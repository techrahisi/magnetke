import React, { useState } from "react";
import { localBlogs } from "../Pages/Blog";
import { Link } from "react-router-dom";

function GridCard(props) {
  const { blog } = props;
  return (
    <div className="grid-post-media  gpm_sing bold_gpi_half">
      <div
        className="bg"
        style={{ backgroundImage: `url(${blog.image})` }}
      ></div>
      <div className="author-link">
        <Link to={`/blogs/${blog.id}`}>
          <img src={blog.author.profile} alt="" />{" "}
          <span>{blog.author.name}</span>
        </Link>
      </div>
      <div className="grid-post-media_title">
        <Link to={`/blogs/${blog.id}`} className="post-category-marker">
          {blog.category}
        </Link>
        <h4>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </h4>
        <span className="video-date">
          <i className="far fa-clock" /> {blog.dateMade}
        </span>
        <ul className="post-opt">
          <li>
            <i className="far fa-comments-alt" />
            {blog.comments}
          </li>
          <li>
            <i className="fal fa-eye" /> {blog.views}
          </li>
        </ul>
      </div>
    </div>
  );
}

function GridSliderCard(props) {
  const { blog } = props;
  return (
    <div className="swiper-slide">
      <div className="grid-post-item  bold_gpi  fl-wrap">
        <div className="grid-post-media gpm_sing">
          <div
            className="bg"
            style={{ backgroundImage: `url(${blog.image})` }}
          ></div>
          <div className="author-link">
            <Link to="/contact">
              <img src={blog.author.profile} alt="" />
              <span>{blog.author.name}</span>
            </Link>
          </div>
          <div className="grid-post-media_title">
            <Link to={`/blogs/${blog.id}`} className="post-category-marker">
              {blog.category}
            </Link>
            <h4>
              <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
            </h4>
            <span className="video-date">
              <i className="far fa-clock" />
              {blog.dateMade}
            </span>
            <ul className="post-opt">
              <li>
                <i className="far fa-comments-alt" />
                {blog.comments}
              </li>
              <li>
                <i className="fal fa-eye" />
                {blog.views}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridSlider(props) {
  const { blogs } = props;
  const middleCard = Math.round(blogs.length / 2) - 1;

  const [swiperWrapperStyle, setSwiperWrapperStyle] = useState({
    transform: `translateX(-${middleCard}00%)`,
    transition: "transform 500ms ease-in",
  });

  const setCurrentCard = useState(middleCard)[1];

  const setNextCard = () => {
    setCurrentCard((currCard) => {
      if (currCard < blogs.length - 1) {
        setSwiperWrapperStyle({
          ...swiperWrapperStyle,
          transform: `translateX(-${currCard + 1}00%)`,
        });
        return currCard + 1;
      }
      return currCard;
    });
  };

  const setPrevCard = () => {
    setCurrentCard((currCard) => {
      if (currCard > 0) {
        setSwiperWrapperStyle({
          ...swiperWrapperStyle,
          transform: `translateX(-${currCard - 1}00%)`,
        });
        return currCard - 1;
      }
      return currCard;
    });
  };

  return (
    <div className="single-slider-wrap fl-wrap">
      <div className="single-slider fl-wrap">
        <div className="swiper-container">
          <div style={swiperWrapperStyle} className="swiper-wrapper">
            {blogs.map((blog, index) => (
              <GridSliderCard key={index} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <div className="ss-slider-cont ss-slider-cont-prev" onClick={setPrevCard}>
        <i className="fas fa-caret-left" />
      </div>
      <div className="ss-slider-cont ss-slider-cont-next" onClick={setNextCard}>
        <i className="fas fa-caret-right" />
      </div>
    </div>
  );
}

export default function SliderHome() {
  return (
    <div className="hero-hrid fl-wrap gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <GridSlider blogs={localBlogs.slice(0, 5)} />
          </div>

          <div className="col-md-3">
            <div className="grid-post-item bold_gpi fl-wrap">
              <GridCard
                blog={
                  localBlogs[
                    Math.round(Math.random() * 100) % (localBlogs.length - 1)
                  ]
                }
              />
            </div>
            <div className="grid-post-item bold_gpi fl-wrap">
              <GridCard
                blog={
                  localBlogs[
                    Math.round(Math.random() * 100) % (localBlogs.length - 1)
                  ]
                }
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="grid-post-item bold_gpi fl-wrap">
              <GridCard
                blog={
                  localBlogs[
                    Math.round(Math.random() * 100) % (localBlogs.length - 1)
                  ]
                }
              />
            </div>
            <div className="grid-post-item bold_gpi fl-wrap">
              <GridCard
                blog={
                  localBlogs[
                    Math.round(Math.random() * 100) % (localBlogs.length - 1)
                  ]
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
