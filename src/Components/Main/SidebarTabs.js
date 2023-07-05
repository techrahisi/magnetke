import React, { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";

function ContentTabs(props) {
  const { cb } = props;
  const [active, setActive] = useState(1);

  function handleClick(activeTab) {
    setActive(activeTab);
    activeTab === 1 ? cb("popular") : cb("recent");
  }

  return (
    <div className="content-tabs fl-wrap">
      <ul className="tabs-menu fl-wrap no-list-style">
        <li
          onClick={() => handleClick(1)}
          className={active === 1 ? "current" : ""}
        >
          <Link to="#">Popular News</Link>
        </li>
        <li
          onClick={() => handleClick(2)}
          className={active === 2 ? "current" : ""}
        >
          <Link to="#">Recent News</Link>
        </li>
      </ul>
    </div>
  );
}

function PostWidgetItem(props) {
  const { blog } = props;
  return (
    <div className="post-widget-item fl-wrap">
      <div className="post-widget-item-media">
        <Link to={`/blogs/${blog.id}`}>
          <img src={blog.image} alt="" />
        </Link>
      </div>
      <div className="post-widget-item-content">
        <h4>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </h4>
        <ul className="pwic_opt">
          <li>
            <span>
              <i className="far fa-clock" />
              {blog.dateMade}
            </span>
          </li>
          <li>
            <span>
              <i className="far fa-comments-alt" />
              {blog.comments}
            </span>
          </li>
          <li>
            <span>
              <i className="fal fa-eye" />
              {blog.views}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Tabs(props) {
  const { blogs } = props;
  return (
    <div className="tabs-container">
      <div className="tab">
        <div id="tab-popular" className="tab-content first-tab">
          <div className="post-widget-container fl-wrap">
            {blogs.map((blog, index) => (
              <PostWidgetItem key={index} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SidebarTabs(props) {
  const { blogs } = props;
  const [activeTab, setActiveTab] = useState("popular");

  const popularSortingFunc = useCallback((blogA, blogB) => {
    if (blogA.views > blogB.views) return -1;
    else if (blogB.views > blogA.views) return 1;
    return 0;
  }, []);

  const recentSortingFunc = useCallback(function (blogA, blogB) {
    const dateRegex =
      /^(?<day>(?:\d{1,2})(?:st|nd|rd|th))(?<month>january|february|march|april|may|june|july|august|september|october|november|december)(?<year>\d{4})$/i;

    const blogADate = blogA.dateMade,
      blogBDate = blogB.dateMade;

    const blogADateMatch = dateRegex.exec(blogADate);
    const blogADateTime = new Date(
      `${window.parseInt(blogADateMatch.groups["day"])} ${
        blogADateMatch.groups["month"]
      } ${blogADateMatch.groups["year"]}`
    );

    const blogBDateMatch = dateRegex.exec(blogBDate);
    const blogBDateTime = new Date(
      `${window.parseInt(blogBDateMatch.groups["day"])} ${
        blogBDateMatch.groups["month"]
      } ${blogBDateMatch.groups["year"]}`
    );

    if (blogADateTime > blogBDateTime) return -1;
    else if (blogBDateTime > blogADateTime) return 1;
    return 0;
  }, []);

  const popularTabsBlogs = useMemo(
    () => blogs.sort(popularSortingFunc).slice(0, 4),
    [blogs, popularSortingFunc]
  );

  const recentTabsBlogs = useMemo(
    () => blogs.sort(recentSortingFunc).slice(0, 4),
    [blogs, recentSortingFunc]
  );

  const contentTabCallback = useCallback((actTab) => setActiveTab(actTab), []);

  return (
    <div className="box-widget fl-wrap">
      <div className="box-widget-content">
        <div className="content-tabs-wrap tabs-act tabs-widget fl-wrap">
          <ContentTabs cb={contentTabCallback} />
          <Tabs
            blogs={activeTab === "popular" ? popularTabsBlogs : recentTabsBlogs}
          />
        </div>
      </div>
    </div>
  );
}
