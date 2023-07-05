import React from 'react';
import AddBlog from './AddBlog';
//import AuthorProfile from './AuthorProfile';
import EditBlog from './EditBlog';
import Profile from './Profile';

export default function AuthorDashboard(id) {
    //GET MY INDIVIDUAL BLOGS FUNCTION 
    //EDIT MY OWN BLOGS FUNCTION
    //UPDATE MY OWN PROFILE PIC
    //UPDATE MY CONTACT INFO

    return (
        <div>
            {/* <AuthorProfile/> */}
            <Profile />

            <EditBlog />

        </div>
    )
}
