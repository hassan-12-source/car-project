import React from 'react'
import './Blogs.css'
import blogData from './data'

function Blogs() {
    return (
        <div className='blogs-container'>
            <div className='text-blogs'>
                <h1>Our Blog</h1>
                <p>Stay Connected With Our Latest News</p>
            </div>

            <div className='blogs-card'>
                {blogData.map((Blogs) => (
                    <div key={Blogs.id} className='blog-content'>
                        <img src={Blogs.image} alt="" />
                        <p>{Blogs.text}</p>
                    </div>                    
                ))}
            </div>

            <button className='btn-blog'>View More Blogs</button>
        </div>
    )
}

export default Blogs