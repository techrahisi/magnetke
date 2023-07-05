import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./Components/Main/Header";
import Footer from "./Components/Main/Footer";
import Home from "./Components/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Pages/Contact";
import Blog from "./Components/Pages/Blog";
import NotFound from "./Components/Pages/NotFound";
import About from "./Components/Pages/About";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
import Search from "./Components/Pages/Search";
import AdminDashboard from "./Components/Pages/Admin/AdminDashboard";
import Singleblog from "./Components/Pages/Singleblog";
import ProgressBar from "react-scroll-progress-bar";
import AuthorProfile from "./Components/Pages/Admin/AuthorProfile";
import AuthorDashboard from "./Components/Pages/Admin/AuthorDashboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Components/Pages/Admin/Profile";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <ProgressBar color="#e93314" height="2px" />
        <Header />
        <ToastContainer />
        <div id="wrapper">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="blogs/:blogId" element={<Singleblog />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/authors/:authorId" element={<AuthorProfile />} />
              <Route path="/adminpanel" element={<AdminDashboard />} />
              <Route path="/authorpanel" element={<AuthorDashboard />} />
              <Route path="/search" element={<Search />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
