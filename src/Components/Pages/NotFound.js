import React from "react";

export default function NotFound() {
  return (
    <div className="content">
      {/*section   */}
      <section className="hero-section error-section">
        <div className="bg-wrap hero-section_bg">
          <div className="bg" data-bg="images/bg/1.jpg" />
        </div>
        <div className="container">
          <div className="error-wrap">
            <h2>404</h2>
            <p>
              We're sorry, but the Page you were looking for, couldn't be found.
            </p>
            <div className="clearfix" />
            <form action="#" className="custom-form">
              <input
                name="se"
                id="se2"
                type="text"
                className="search"
                placeholder="Search.."
                defaultValue="Search..."
              />
              <button className="search-submit color-bg" id="submit_btn2">
                <i className="fa fa-search" />{" "}
              </button>
            </form>
            <div className="clearfix" />
            <p>Or</p>
            <a href="index.html" className="btn color-btn flat-btn">
              {" "}
              <span>Back to Home Page</span>{" "}
              <i className="fas fa-caret-right" />
            </a>
          </div>
        </div>
      </section>
      {/* section end  */}
    </div>
  );
}
