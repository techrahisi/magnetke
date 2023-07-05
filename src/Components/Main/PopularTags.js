import React, { useMemo } from "react";
import { Link } from "react-router-dom";

export default function PopularTags(props) {
  const { blogs } = props;

  const categories = useMemo(
    () =>
      Array.from(
        new Set(
          blogs.reduce((accumCategories, currBlog) => {
            accumCategories.push(currBlog.category);
            return accumCategories;
          }, [])
        )
      ),
    [blogs]
  );

  return (
    <div className="box-widget fl-wrap">
      <div className="widget-title">Popular Tags</div>
      <div className="box-widget-content">
        <div className="tags-widget">
          {categories.map((category, index) => (
            <Link key={index} to="/blog">
              {category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
