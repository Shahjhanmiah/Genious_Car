import React from 'react';

const ServicesCard = ({service}) => {
    const {img,title,price}= service
    return (
        <div className="card w-80 mx-auto mb-4  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">{title}</h2>
          <p className='text-orange-500 text-bold'>price:${price}</p>
          <div className="card-actions text-orange-600">
          <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;