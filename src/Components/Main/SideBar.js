import React, { useRef, useState, useEffect } from "react";
import SidebarTabs from "./SidebarTabs.js";
import PopularTags from "./PopularTags.js";
import FollowUs from "./FollowUs.js";
import SidebarSwiper from "./SidebarSwiper.js";

export default function SideBar(props) {
  const { blogs, sectionRef } = props;
  const sideBarRef = useRef(null);
  const topMargin = 120;

  const [isWideScreen, setIsWideScreen] = useState(true);

  const [sideBarFixedStyles, setSideBarFixedStyles] = useState(null);
  const [sideBarAbsoluteStyles, setSideBarAbsoluteStyles] = useState(null);

  const [sideBarFixed, setSideBarFixed] = useState(false);
  const [sideBarAbsolute, setSideBarAbsolute] = useState(false);

  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    };
  }

  useEffect(() => {
    const { matches } = window.matchMedia(
      "only screen and (min-width: 1065px)"
    );
    if (matches) setIsWideScreen(true);
    else {
      setIsWideScreen(false);
      return;
    }

    const limit =
      sectionRef.current.getBoundingClientRect().height -
      sideBarRef.current.getBoundingClientRect().height -
      140; // section has padding top and bottom of 70px
    const sideBarWidth = sideBarRef.current.getBoundingClientRect().width;
    const sideBarHeight = sideBarRef.current.getBoundingClientRect().height;
    const baseStyle = {
      width: sideBarWidth,
      height: sideBarHeight,
    };

    setSideBarFixedStyles({
      ...baseStyle,
      position: "fixed",
      top: topMargin,
    });
    setSideBarAbsoluteStyles({
      ...baseStyle,
      position: "absolute",
      top: limit,
    });
  }, [sectionRef]);

  useEffect(
    function () {
      const { matches } = window.matchMedia(
        "only screen and (min-width: 1065px)"
      );
      if (!matches) return;

      const sideBarHeight = sideBarRef.current.getBoundingClientRect().height;
      const limit =
        sectionRef.current.getBoundingClientRect().height - sideBarHeight - 140;

      function scrollHandler() {
        const documentScrollTop = window.document.documentElement.scrollTop;
        const sectionTop = getOffset(sectionRef.current).top;
        const fixed =
          documentScrollTop > sectionTop - (topMargin - 70) &&
          documentScrollTop < limit + (limit - sideBarHeight) + 140; // 70px is the height of the innerHeader
        const absolute =
          !fixed && documentScrollTop > limit + (limit - sideBarHeight) + 140;

        if (fixed) setSideBarFixed(true);
        else setSideBarFixed(false);

        if (absolute) setSideBarAbsolute(true);
        else setSideBarAbsolute(false);
      }

      window.addEventListener("scroll", scrollHandler, { passive: true });
      return () =>
        window.removeEventListener("scroll", scrollHandler, {
          passive: true,
        });
    },
    [sectionRef]
  );

  return (
    <div className="col-md-4">
      <div
        ref={sideBarRef}
        className="sidebar-content fl-wrap fix-bar"
        style={(() => {
          if (!isWideScreen) return null;
          else if (sideBarFixed) return sideBarFixedStyles;
          else if (sideBarAbsolute) return sideBarAbsoluteStyles;
          return null;
        })()}
      >
        <SidebarTabs blogs={blogs} />
        <FollowUs />
        <PopularTags blogs={blogs} />
        <SidebarSwiper title="Editor's Choice" blogs={blogs.slice(0, 3)} />
      </div>
    </div>
  );
}
