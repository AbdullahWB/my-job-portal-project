import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import Select from 'react-select';
import CreatableSelect from "react-select/creatable";
import { AuthContext } from '../../Provider/AuthProvider';
import { Result } from 'postcss';

const AddJob = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [selectedOption, setSelectedOption] = useState(null);
    const onSubmit = (data) => {
        data.skills = selectedOption;
        fetch("http://localhost:3000/postJob", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        console.log(data);
    }
    const options = [
        { value: "JavaScript", label: "JavaScript" },
        { value: "C++", label: "C++" },
        { value: "HTML", label: "HTML" },
        { value: "CSS", label: "CSS" },
        { value: "React", label: "React" },
        { value: "Node", label: "Node" },
        { value: "MongoDB", label: "MongoDB" },
        { value: "Redux", label: "Redux" },
    ];
    return (
        <div className='mt-[100px]'>
            <form className='bg-[rgba(0,166,172,0.1)] rounded-lg p-20' onSubmit={handleSubmit(onSubmit)}>
                {errors.exampleRequired && <span>This field is required</span>}
                <div className='grid grid-cols-2 gap-8'>
                    <input
                        className="input w-full border border-primary"
                        {...register("title")}
                        placeholder="title"
                        defaultValue="Web developer"
                    />

                    <input
                        className="input w-full border border-primary"
                        {...register("salary", { required: true })}
                        placeholder="salary"
                        defaultValue="30k"
                    />
                </div>
                <div className='grid grid-cols-3 gap-8 my-16'>
                    <input
                        className="input w-full border border-primary"
                        {...register("vacancy", { required: true })}
                        placeholder="vacancy"
                        type="number"
                    />
                    <select className="input w-full border border-primary" {...register("category")}>
                        <option value="Engineering">Database Developer</option>
                        <option value="Editor">IOS Developer</option>
                        <option value="writer">Android Developer</option>
                        <option value="Developer">Web Developer</option>
                    </select>
                    <select className="input w-full border border-primary" {...register("status")}>
                        <option value="remote">Remote</option>
                        <option value="offline">Offline</option>
                    </select>
                </div>
                <div className='grid grid-cols-3 gap-8'>
                    <input
                        className="input w-full border border-primary"
                        {...register("image")}
                        placeholder="image link"
                        type="url"
                        defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <input
                        className="input w-full border border-primary"
                        {...register("deadline")}
                        placeholder="deadline"
                        type="date"
                    />
                    <input
                        className="input w-full border border-primary"
                        value={user?.email}
                        {...register("postedBy")}
                        placeholder="your email"
                        type="email"
                    />
                </div>
                <div className='grid grid-cols-2 gap-8 mt-16'>
                    <CreatableSelect
                        className="w-75"
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        isMulti
                    />
                    <input
                        className="input w-full border border-primary"
                        {...register("description")}
                        placeholder="description"
                    />
                </div>
                <input type="submit" className='btn btn-primary text-white mt-10 w-full' />
            </form>
        </div>
    );
};

export default AddJob;