import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { localBlogs } from "../Pages/Blog";
import LatestNews from "./LatestNews.js";
import TopStories from "./TopStories.js";
import SideBar from "./SideBar.js";

export default function Body() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="main-container fl-wrap fix-container-init">
              <LatestNews
                title="Latest News"
                subtitle="Don't miss daily news"
                blogs={localBlogs}
              />
              <div className="clearfix" />
              <TopStories
                title="Top Stories"
                subtitle="Don't miss daily news"
                blogs={localBlogs}
              />
              <Link
                to="/blog"
                className="dark-btn fl-wrap"
                onClick={() => window.scrollTo({ top: 0, behaviour: "smooth" })}
              >
                Read all News
              </Link>
            </div>
          </div>
          <SideBar sectionRef={sectionRef} blogs={localBlogs} />
        </div>
        <div  className="limit-box fl-wrap" />
      </div>
    </section>
  );
}
