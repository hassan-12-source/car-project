import React from 'react';
import Slider from 'react-slick'; 
import './Products.css';
import productsData from './data.js';

function Products() {

    const settings = {
        infinite: true,
        speed: 500, 
        slidesToShow: 3, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 3000,
        centerMode: true, 
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2, 
                    slidesToScroll: 1, 
                },
            },
            {
                breakpoint: 643, 
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 320, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div
            className="background-container"
            style={{
                backgroundImage: `url('/images/section-bg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                height: '100vh',
                width: '100%',
            }}
        >
            <div className="content">
                <h1>OUR PRODUCTS</h1>
                <p>Limited-time discounts</p>
                <Slider {...settings}>
                    {productsData.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.imageUrl} alt={product.title} className="product-image" />
                            <div className='text-container'>
                                <h2 className="product-title">{product.title}</h2>
                                <p className="product-description">{product.description}</p>
                                <p className="product-price">{product.price}</p>
                                <button className='order-btn'>ORDER</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Products;
