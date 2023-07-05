import React from "react";

export default function FollowUs(props) {
  const facebookAccountUrl =
    "https://www.facebook.com/The-Magnet-Kenya-232512507895452/";
  const twitterAccountUrl = "https://twitter.com/MagnetKenya";
  const instagramAccountUrl = "https://www.instagram.com/themagnetkenya/";
  const linkedInAccountUrl =
    "https://www.linkedin.com/in/the-magnet-kenya-683929242/";

  const facebookLikes = Math.round(Math.random() * 10000);
  const twitterFollowers = Math.round(Math.random() * 10000);
  const instagramFollowers = Math.round(Math.random() * 10000);
  const linkedInFollowers = Math.round(Math.random() * 10000);

  return (
    <div className="box-widget fl-wrap">
      <div className="widget-title">Follow Us</div>
      <div className="box-widget-content">
        <div className="social-widget">
          <a
            href={facebookAccountUrl}
            target="_blank"
            rel="noreferrer"
            className="facebook-soc"
          >
            <i className="fab fa-facebook-f"></i>
            <span className="soc-widget-title">Likes</span>
            <span className="soc-widget_counter">{facebookLikes}</span>
          </a>
          <a
            href={twitterAccountUrl}
            target="_blank"
            rel="noreferrer"
            className="twitter-soc"
          >
            <i className="fab fa-twitter"></i>
            <span className="soc-widget-title">Followers</span>
            <span className="soc-widget_counter">{twitterFollowers}</span>
          </a>
          <a
            href={instagramAccountUrl}
            target="_blank"
            rel="noreferrer"
            className="instagram-soc"
          >
            <i className="fab fa-instagram"></i>
            <span className="soc-widget-title">Followers</span>
            <span className="soc-widget_counter">{instagramFollowers}</span>
          </a>
          <a
            href={linkedInAccountUrl}
            target="_blank"
            rel="noreferrer"
            className="instagram-soc"
          >
            <i className="fab fa-linkedin"></i>
            <span className="soc-widget-title">Followers</span>
            <span className="soc-widget_counter">{linkedInFollowers}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
