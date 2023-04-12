import React from 'react';

const BannerItem = () => {
    return (
        <div id="slide1" className="carousel-item relative w-full">
            <div className="carousel-img">

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    Affordbale <br />
                    Price for car <br />
                    Servicing <br />

                </h1>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                <p className='text-xl text-white'>They are many variation of pages of variable this for code </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4">
                <button className="btn btn-outline btn-warning mr-5">Warning</button>
                <button className="btn btn-outline btn-secondary">Button</button>

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>

    );
};

export default BannerItem;