import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { localBlogs } from "../Pages/Blog.js";

export default function TopBar() {
  const currentDateTime = new Date(),
    months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    day = currentDateTime.getDate(),
    month = months[currentDateTime.getMonth()],
    year = currentDateTime.getFullYear();

  const hotNewsTickerInterval = 5000;
  const hotNews = localBlogs.slice(0, 4);
  const [currentHotNews, setCurrentHotNews] = useState(0);

  const getNextHotNews = useCallback(() => {
    setCurrentHotNews((current) => {
      if (current < hotNews.length - 1) return current + 1;
      return 0;
    });
  }, [hotNews]);

  const getPrevHotNews = useCallback(() => {
    setCurrentHotNews((current) => {
      if (current === 0) return hotNews.length - 1;
      return current - 1;
    });
  }, [hotNews]);

  useEffect(() => {
    const intervalId = window.setInterval(
      getNextHotNews,
      hotNewsTickerInterval
    );
    return () => window.clearInterval(intervalId);
  }, [getNextHotNews]);

  const [hideTopBar, setHideTopBar] = useState(false);

  useEffect(function () {
    function handleScroll() {
      const documentScrollTop = window.document.documentElement.scrollTop;
      const innerHeader = window.document.querySelector(".header-inner");
      const innerHeaderHeight = innerHeader.getBoundingClientRect()["height"];

      if (documentScrollTop > innerHeaderHeight) setHideTopBar(true);
      else setHideTopBar(false);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  return (
    <div className={`top-bar fl-wrap ${hideTopBar ? "scroll-sticky" : ""}`}>
      <div className="container">
        <div className="date-holder">
          <span className="date_num">{day}</span>
          <span className="date_mounth">{month}</span>
          <span className="date_year">{year}</span>
        </div>
        <div className="header_news-ticker-wrap">
          <div className="hnt_title">Hot News:</div>
          <div className="header_news-ticker fl-wrap">
            <ul>
              <li>
                <Link to={`blogs/${hotNews[currentHotNews]["id"]}`}>
                  {hotNews[currentHotNews]["title"]}
                </Link>
              </li>
            </ul>
          </div>
          <div className="n_contr-wrap">
            <div className="n_contr p_btn">
              <i className="fas fa-caret-left" onClick={getPrevHotNews} />
            </div>
            <div className="n_contr n_btn">
              <i className="fas fa-caret-right" onClick={getNextHotNews} />
            </div>
          </div>
        </div>
        <ul className="topbar-social">
          <li>
            <a
              href="https://www.facebook.com/The-Magnet-Kenya-232512507895452/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/MagnetKenya"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/themagnetkenya/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/the-magnet-kenya-683929242/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
