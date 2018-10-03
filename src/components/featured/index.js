import React from 'react';

import Carroucel from './Carrousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
    return (
        <div style={{position:'relative'}}>
        <Carroucel />
            <div className='artist_name'>
                <div className='wrapper'>
                    Ariana Grande
                </div>
            </div>
            <TimeUntil />
        </div>
    );
};

export default Featured;