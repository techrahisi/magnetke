import React from 'react';
import Register from '../Register';
import AddBlog from './AddBlog';
import AuthorProfile from './AuthorProfile';
import EditAuthor from './EditAuthor';
import EditBlog from './EditBlog';

export default function AdminDashboard() {
    //GET ALL AUTHORS FUNCTION
    //GET ALL BLOGS FUNCTION TOO
    return (
        <>

            <AddBlog />
            <h3>Add a new author</h3>
            <Register />
            <EditAuthor />
            <EditBlog />

        </>
    )
}
