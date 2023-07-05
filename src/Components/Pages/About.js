import React from "react";

export default function About() {
  return (
    <div className="content">
      {/*section   */}
      <div className="breadcrumbs-header fl-wrap">
        <div className="container">
          <div className="breadcrumbs-header_url">
            <a href="#">Home</a>
            <span>About</span>
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
      {/* section end  */}
      {/*section   */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="section-title sect_dec">
                <h2>Our Story</h2>
                <h4>Who we are</h4>
              </div>
              <div className="about-wrap">
                <p>
                  Aliquam luctus tempor orci sit amet finibus. Duis porttitor,
                  ex ac molestie consectetur, metus tellus venenatis velit, et
                  interdum enim lorem a purus. Fusce scelerisque, massa vitae
                  rhoncus elementum, enim acinia pharetra?{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu
                  ultrices libero. Curabitur vulputate vestibulum elementum.
                  Suspendisse id neque a nibh mollis blandit. Quisque varius
                  eros ac purus dignissim. Proin eu ultrices libero.{" "}
                </p>
                <a
                  href="https://vimeo.com/225223404"
                  className="btn float-btn color-btn image-popup"
                >
                  {" "}
                  <span>Our Story Video</span>{" "}
                  <i className="fas fa-caret-right" />
                </a>
              </div>
            </div>
            <div className="col-md-1" />
            <div className="col-md-6">
              <div className="about-img fl-wrap">
                <img src="images/all/1.jpg" className="respimg" alt="" />
                <div className="about-img-hotifer color-bg">
                  <p>
                    Your website is fully responsive so visitors can view your
                    content from their choice of device.
                  </p>
                  <h4>Mark Antony</h4>
                  <h5>Gmag CEO</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-dec" />
      </section>
      {/*about end   */}
    </div>
  );
}
