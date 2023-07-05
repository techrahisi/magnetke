import React, {
  useRef,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { Link } from "react-router-dom";
import bannerImage from "../../images/all/banner.jpg";
import loadingGif from "../../images/loading.gif";

function SectionTitle(props) {
  const { categories, title, subtitle, cb } = props;
  const [highlighted, setHighlighted] = useState("All");

  function handleClick(category) {
    setHighlighted(category);
    cb(category);
  }

  return (
    <div className="section-title">
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      <div className="ajax-nav">
        <ul>
          {categories.map((category, index) => (
            <li key={index} onClick={() => handleClick(category)}>
              <Link
                className={category === highlighted ? "current_page" : ""}
                to="#"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Loader(props) {
  const { transition } = props;
  return (
    <div
      style={transition ? { display: "block" } : { display: "none" }}
      className="ajax-loader"
    >
      <img src={loadingGif} alt="" />
    </div>
  );
}

function ListPost(props) {
  const { blog } = props;
  return (
    <div className="list-post fl-wrap">
      <div className="list-post-media">
        <Link
          to={`/blogs/${blog.id}`}
          onClick={() => window.scrollTo({ top: 0, behaviour: "smooth" })}
        >
          <div className="bg-wrap">
            <div className="bg">
              <div
                className="bg"
                style={{ backgroundImage: `url(${blog.image})` }}
              ></div>
            </div>
          </div>
        </Link>
        <span className="post-media_title">{blog.title}</span>
      </div>
      <div className="list-post-content">
        <Link className="post-category-marker" to="/blog">
          {blog.category}
        </Link>
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
            <i className="far fa-comments-alt" /> {blog.comments}{" "}
          </li>
          <li>
            <i className="fal fa-eye" /> {blog.views}{" "}
          </li>
        </ul>
        <div className="author-link">
          <Link to={`/blogs/${blog.id}`}>
            <img src={blog.author.profile} alt="" />{" "}
            <span>{blog.author.name}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function LatestNews(props) {
  const { title, subtitle, blogs } = props;

  const [categoryBlogsListed, setCategoryBlogsListed] = useState("All");
  const [categoryTransition, setCategoryTransition] = useState(false);
  const categoryRef = useRef("All");

  const categoryBlogs = useMemo(
    () =>
      blogs.filter((blog) => {
        if (categoryBlogsListed === "All") return true;
        return blog.category === categoryBlogsListed;
      }),
    [categoryBlogsListed, blogs]
  );

  const categoriesCallback = useCallback((category) => {
    categoryRef.current = category;
    setCategoryTransition(true);
  }, []);

  useEffect(function () {
    const timeoutId = window.setTimeout(() => {
      setCategoryBlogsListed(categoryRef.current);
      setCategoryTransition(false);
    }, 1000);

    return () => window.clearTimeout(timeoutId);
  });

  const categories = [
    "All",
    ...Array.from(
      new Set(
        blogs.reduce((accCategories, currBlog) => {
          accCategories.push(currBlog.category);
          return accCategories;
        }, [])
      )
    ),
  ];

  return (
    <>
      <SectionTitle
        title={title}
        subtitle={subtitle}
        categories={categories}
        cb={categoriesCallback}
      />
      <div className="ajax-wrapper fl-wrap">
        <Loader transition={categoryTransition} />
        <div
          style={
            categoryTransition
              ? { opacity: 0, transition: "opacity 200ms ease-in" }
              : { opacity: 1, transition: "opacity 200ms ease-in" }
          }
          id="ajax-content"
          className="fl-wrap"
        >
          <div className="ajax-inner fl-wrap">
            <div className="list-post-wrap">
              {categoryBlogs.map((blog, index) => (
                <ListPost key={index} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="content-banner-wrap cbw_mar">
        <img src={bannerImage} className="respimg" alt="" />
      </div>
    </>
  );
}
