import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Select from 'react-select';
import CreatableSelect from "react-select/creatable";

const AddJob = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [selectedOption, setSelectedOption] = useState(null);
    const onSubmit = (data) => {
        data.skills = selectedOption;
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
                        <option value="Engineering">engineering</option>
                        <option value="Editor">Editor</option>
                        <option value="writer">Writer</option>
                        <option value="Developer">Developer</option>
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
                        value='abdullah917828@gmail.com'
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