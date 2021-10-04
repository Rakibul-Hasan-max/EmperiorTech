import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="blog">
            <h1>Blogs</h1>
            <hr />
            <p>Topic of Different Criteria of Business, Structure, Agency activities, Branding and new opportunities</p>
            <BlogPost></BlogPost>
        </div>

    );
};

const BlogPost = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 cardview">
            <div className="card h-100">
                <img src="https://images.news18.com/ibnlive/uploads/2019/09/news18-home-og.jpg" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <small className="">Last updated 3 mins ago</small>
                </div>
            </div>
            <div className="card h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_GnE4JR24hH9N9HgZaZWYjYR-XZawrqPtQ&usqp=CAU" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <small className="">Last updated 3 mins ago</small>
                </div>
            </div>
            <div className="card h-100">
                <img src="https://img.freepik.com/free-vector/blue-breaking-news-tv-background_1017-14201.jpg?size=626&ext=jpg" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <small className="">Last updated 3 mins ago</small>
                </div>
            </div>
            <div className="card h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hyt9QHptDYRg8SO-AUZwDEljVoEL08W0v9RnXnWsl65z9lO6C_d5tVKR1EVmFFZxVPA&usqp=CAU" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <small className="">Last updated 3 mins ago</small>
                </div>
            </div>
            <div className="card h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsnyMHcQyP_RAkazaDaOCQuWwTo_y-TfVoKw&usqp=CAU" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <small className="">Last updated 3 mins ago</small>
                </div>
            </div>
            <div className="card h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2PCjrSotfgYJBpyqrBDEWETW4yoTzA2nkaQ&usqp=CAU" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <small className="">Last updated 3 mins ago</small>
                </div>
            </div>
            <div className="card h-100">
                <img src="https://images.news18.com/ibnlive/uploads/2019/09/news18-home-og.jpg" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <small className="">Last updated 3 mins ago</small>
                </div>
            </div>
            <div className="card h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_GnE4JR24hH9N9HgZaZWYjYR-XZawrqPtQ&usqp=CAU" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <small className="">Last updated 3 mins ago</small>
                </div>
            </div>
            <div className="card h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsnyMHcQyP_RAkazaDaOCQuWwTo_y-TfVoKw&usqp=CAU" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <small className="">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
        
    );
};

export default Blogs;