import React from 'react';
import { FaSistrix } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-7xl font-light text-gray-800'>To Choose <span className='text-primary font-extrabold'>Right Jobs.</span></h1>
                <p className='text-xl text-gray-500 my-5'>2400 Peoples are daily search in this portal,  100 user added job portal!</p>
                <div className='flex justify-between w-full '>
                    <input type="text" placeholder="Type here" className="input input-bordered border-primary w-full mr-5" />
                    <button className='btn btn-primary text-white'><FaSistrix></FaSistrix>Search</button>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img src="https://jobes-nextjs.vercel.app/assets/images/bg/hero3-img-with-vec.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;