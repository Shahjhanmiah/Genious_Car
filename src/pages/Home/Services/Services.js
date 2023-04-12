import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='my-20 '>
            <h2 className='text-orange-500 font-bold text-2xl text-center'> Our Services Area</h2>

            <div className='grid grid-gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4'>
              
                {
                    services.map(service=> <ServicesCard
                    key={service.id}
                    service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;