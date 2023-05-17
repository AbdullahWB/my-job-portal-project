import { Result } from 'postcss';
import React, { useEffect, useState } from 'react';
import JobCart from './JobCart';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [activeTab, setActiveTab] = useState("remote");


    useEffect(() => {
        fetch("http://localhost:3000/allJob")
            .then(res => res.json())
            .then(result => {
            setJobs(result)
        })
    },[])


    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };
    return (
        <div className='my-[130px]'>
            <h1 className='text-6xl text-center font-bold text-gray-800'>Available Job's</h1>
            <div className='mt-16 gap-8 flex justify-center items-center'>
                <button
                    onClick={() => handleTabClick("remote")}
                    className={`${activeTab == "remote" ? "btn btn-primary text-white" : "btn btn-outline btn-primary"}`}
                >Remote</button>
                <button
                    onClick={() => handleTabClick("offline")}
                    className={`${activeTab == "offline" ? "btn btn-primary text-white" : "btn btn-outline btn-primary"}`}
                >Offline</button>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10'>
                {
                    jobs.map(job => <JobCart
                        key={job._id}
                        job={job}
                    ></JobCart>)
                }
            </div>
        </div>
    );
};

export default Jobs;