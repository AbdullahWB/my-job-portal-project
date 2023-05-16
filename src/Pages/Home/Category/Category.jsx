import React from 'react';
import { FaAppStoreIos, FaJsSquare, FaAndroid, FaDatabase } from "react-icons/fa";

const Category = () => {
    return (
        <div className='grid grid-cols-4 gap-8 mb-[130px] mt-[130px]'>
            <div className='flex flex-col justify-center cursor-pointer items-center p-10 border-2 border-primary rounded-lg hover:bg-primary hover:text-white'>
                <FaAppStoreIos className='text-7xl mb-5'></FaAppStoreIos>
                <h2 className='text-xl font-medium'>IOS Developer</h2>
            </div>
            <div className='flex flex-col justify-center cursor-pointer items-center p-10 border-2 border-primary rounded-lg hover:bg-primary hover:text-white'>
                <FaJsSquare className='text-7xl mb-5'></FaJsSquare>
                <h2 className='text-xl font-medium'>MERN Stack Developer</h2>
            </div>
            <div className='flex flex-col justify-center cursor-pointer items-center p-10 border-2 border-primary rounded-lg hover:bg-primary hover:text-white'>
                <FaAndroid className='text-7xl mb-5'></FaAndroid>
                <h2 className='text-xl font-medium'>Android Developer</h2>
            </div>
            <div className='flex flex-col justify-center cursor-pointer items-center p-10 border-2 border-primary rounded-lg hover:bg-primary hover:text-white'>
                <FaDatabase className='text-7xl mb-5'></FaDatabase>
                <h2 className='text-xl font-medium'>Database Developer</h2>
            </div>
        </div>
    );
};

export default Category;