import React from "react";
import TopBar from "./TopBar.js";
import InnerHeader from "./InnerHeader.js";

export default function Header() {
  return (
    <header className="main-header">
      <TopBar />
      <InnerHeader />
    </header>
  );
}
