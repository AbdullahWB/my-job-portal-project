import React from 'react';

const JobCart = ({ job }) => {
    const { _id, title, salary, vacancy, category, status, image, deadline, postedBy, description, skills } = job;
    return (
        <div>
            <div className="card p-20 w-full h-full grid grid-row-2 gap-5 bg-base-100 shadow-xl">
                <div className='grid grid-cols-2 gap-4'>
                    <figure><img className='w-full md:h-[420px] h-auto object-cover rounded-lg' src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{category}</p>
                        <p>Job type:{status}</p>
                        <p>Salary:{salary}</p>
                        <p>Need vacancy:{vacancy}</p>
                        <p className='text-xl font-semibold'>Skills</p>
                        <ul className='grid grid-cols-3 gap-3 bg-teal-50 p-3'>
                            {
                                skills?.map(skill => <li
                                    className=''
                                >{skill.value}</li>)
                            }
                        </ul>
                        <p>Application deadline: {deadline}</p>
                        <p>Posted by: {postedBy}</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl'>About Job:</h1>
                    {description}
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Apply now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCart;