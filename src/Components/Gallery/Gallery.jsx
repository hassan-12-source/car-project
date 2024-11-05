import React, { useState } from 'react'
import './Gallery.css'
import photos from './data';

function Gallery() {


    const [filteredPhotos, setFilteredPhotos] = useState(photos);

    const showAllPhotos = () => {
        setFilteredPhotos(photos);
    };

    const showRepairingPhotos = () => {
        setFilteredPhotos(photos.filter(photo => photo.category === 'repairing'));
    };

    const showCarWashPhotos = () => {
        setFilteredPhotos(photos.filter(photo => photo.category === 'car wash'));
    };

    const showPaintPhotos = () => {
        setFilteredPhotos(photos.filter(photo => photo.category === 'paint'));
    };

    const showNewPhotos = () => {
        setFilteredPhotos(photos.filter(photo => photo.category === 'new'));
    };

    return (

        <div>
            <div className='text-gallery'>
                <h1>OUR GALLERY</h1>
                <p>We have best car images collections</p>
            </div>
            <div className='gallery-1'>
                <button onClick={showAllPhotos}>All</button>
                <button onClick={showRepairingPhotos}>Repairing</button>
                <button onClick={showCarWashPhotos}>Car Wash</button>
                <button onClick={showPaintPhotos}>Paint</button>
                <button onClick={showNewPhotos}>New</button>
            </div>
            <div className="photo-container">
                {filteredPhotos.map(photo => (
                    <img
                    key={photo.id}
                    src={photo.url}
                    alt={`Photo ${photo.id}`}
                    className={photo.category === 'car' ? 'square' : 'vertical'}
                />
                ))}
            </div>
        </div>
    )
}

export default Gallery