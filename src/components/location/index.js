import React from 'react';

const Location = () => {
    return (
        <div className='location_wrapper'>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8731.226344963718!2d-83.05272426933398!3d42.3370648697123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d2d9a03c1c7%3A0x7b1632d8f2b357ce!2sMusic+Hall+Center+for+the+Performing+Arts!5e0!3m2!1sen!2sde!4v1538563067395"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen>
            </iframe>
            <div className='location_tag'>
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;