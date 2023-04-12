import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full my-20">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="carousel-img">
            <img src={img1} alt='' className="w-full  rounded-xl border-radious-12  bottom-8" />
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
            <h1 className='text-xl font-bold text-orange-600'>
              Affordbale <br />
              Price for car <br />
              Servicing <br />

            </h1>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
            <p className='text-xl text-orange-500'>They are many variation of pages of variable this for code </p>
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

      </div>
    </div>
  );
};

export default Banner;