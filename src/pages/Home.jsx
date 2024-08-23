import React from 'react';
import Navigation from '../components/Navigation';
import Swiper from '../components/Swiper';
import data from '../data/translation.json'; 

export default function Home () {
    console.log(data); // Check if the data is correctly logged

    return (
        <div>
            <Navigation />
            <Swiper />
            <h1 className='bg-blue-400'>penis</h1>
            <div style={{ width: '100px', height: '100px' }}>
                <div dangerouslySetInnerHTML={{ __html: data.en.whyUsSvg4[0] }} />
            </div>
        </div>
    );
}
