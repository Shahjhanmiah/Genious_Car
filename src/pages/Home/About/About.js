import React from 'react';
import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero my-20 min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                <img src={person}alt='' className=" w-3/5 h-full rounded-lg shadow-2xl" />
                <img src={parts}alt='' className="absolute right-5 w-3/5 top-1/2 border-8  rounded-lg shadow-2xl" />

                </div>
                <div className='w-1/2'>
                    <p className='text-2xl font-semibold text-orange-500'>About us</p>
                    <h1 className="my-5 text-3xl font-bold">We are qulifiead</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-warning">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;