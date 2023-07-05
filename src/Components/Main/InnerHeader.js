import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import logo from "../../images/logo.png";


export default function InnerHeader() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(true);
  const [login, setLogin] = useState(false);
  const appContext = useContext(AuthContext);
  const navigate = useNavigate();
  const data = localStorage.getItem('user');
  const users = JSON.parse(data);


  const changeIcon = async () => {
    if (users) {
      appContext.user = users;
      setLogin(true);
    } else {
      setLogin(false)
    }
  }

  useEffect(function () {
    console.log("CONTEXT IS:", users)
    changeIcon();
    const { matches } = window.matchMedia(
      "only screen and (min-width: 1065px)"
    );
    if (matches) setIsWideScreen(true);
    else setIsWideScreen(false);
  }, []);

  const logout = async () => {
    await localStorage.clear();
    await setLogin(false);
    await navigate("/login");
  }

  return (
    <div className="header-inner fl-wrap">
      <div className="container">
        {/* logo holder  */}
        <Link
          to="/"
          className="logo-holder"
          onClick={() => window.scrollTo({ top: 0, behaviour: "smooth" })}
        >
          <img src={logo} alt="" />
        </Link>
        {/* logo holder end */}
        <div className="search_btn htact show_search-btn">
          <i className="far fa-search" />
          <Link
            to="/search"
            className="header-tooltip"
            onClick={() => window.scrollTo({ top: 0, behaviour: "smooth" })}
          >
            Search
          </Link>
        </div>
        <div className="srf_btn htact show-reg-form">

          {!login
            ?
            <Link
              to="/login"
              onClick={() => window.scrollTo({ top: 0, behaviour: "smooth" })}
              style={{ color: "inherit" }}
            >
              <i className="fal fa-sign-in" />
            </Link>

            :
            <>
              <Link
                to="#"
                onClick={() => window.scrollTo({ top: 0, behaviour: "smooth" })}
              >
                <i className="fal fa-user" />
              </Link>

              <div
                className="header-tooltip"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "auto",
                }}
              >
                <Link
                  to="#"
                  onClick={() => logout()}
                  style={{ color: "inherit" }}
                >
                  Logout
                </Link>

              </div>
            </>

          }


          <div
            className="header-tooltip"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
            }}
          >
            {
              !login
                ? (
                  <Link
                    to="/login"
                    onClick={() => window.scrollTo({ top: 0, behaviour: "smooth" })}
                    style={{ color: "inherit" }}
                  >
                    Log In
                  </Link>

                )
                : <></>
            }

            {/* <Link
              to="/register"
              onClick={() => window.scrollTo({ top: 0, behaviour: "smooth" })}
              style={{ color: "inherit" }}
            >
              Register
            </Link> */}
          </div>
        </div>
        {/* nav-button-wrap*/}
        <div
          className="nav-button-wrap"
          onClick={() => setShowMobileMenu((currentState) => !currentState)}
        >
          <div className="nav-button">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* nav-button-wrap end*/}
        {/*  navigation */}
        <div
          className={`${isWideScreen ? "nav-holder" : ""} main-menu ${showMobileMenu ? "vismobmenu" : ""
            }`}
        >
          <nav>
            <ul>
              <li>
                <Link
                  to="/"
                  onClick={() =>
                    window.scrollTo({ top: 0, behaviour: "smooth" })
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={() =>
                    window.scrollTo({ top: 0, behaviour: "smooth" })
                  }
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() =>
                    window.scrollTo({ top: 0, behaviour: "smooth" })
                  }
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() =>
                    window.scrollTo({ top: 0, behaviour: "smooth" })
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {!isWideScreen && (
            <nav className="menusb sliding-menu">
              <div className="sliding-menu-wrapper">
                <ul className="menu-panel-root">
                  <li>
                    <Link
                      to="/"
                      onClick={() =>
                        window.scrollTo({ top: 0, behaviour: "smooth" })
                      }
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      onClick={() =>
                        window.scrollTo({ top: 0, behaviour: "smooth" })
                      }
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      onClick={() =>
                        window.scrollTo({ top: 0, behaviour: "smooth" })
                      }
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      onClick={() =>
                        window.scrollTo({ top: 0, behaviour: "smooth" })
                      }
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          )}
        </div>
        {/* navigation  end */}
      </div>
    </div>
  );
}
