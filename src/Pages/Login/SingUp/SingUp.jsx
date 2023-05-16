import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Provider/AuthProvider';

const SingUp = () => {
    const { createUser, googleLogin, githubLogin } = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const [accepted, setAccepted] = useState(false)
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                const err = (error.message);
                toast.error(err)
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                const err = (error.message);
                toast.error(err)
            })
    }

    const handleGithub = () => {
        githubLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                const err = (error.message);
                toast.error(err)
            })
    }

    return (
        <div className='grid md:grid-cols-2 grid-cols-1 w-[80%] mx-auto gap-8 py-[130px]'>
            <div className='flex justify-center items-center'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body p-10">
                        <h1 className='text-3xl text-primary'>Register</h1>
                        <p className='text-gray-600 mb-5'>Create your Food Master account.</p>
                        <div>
                            <form onSubmit={handleRegister}>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="name" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type={show ? "text" : "password"} name="password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                    <p className='text-[20px] inline-block absolute right-[10px] top-[8px] cursor-pointer' onClick={() => setShow(!show)}>
                                        <span>
                                            {
                                                show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                            }
                                        </span>
                                    </p>
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="photo" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo URL</label>
                                </div>
                                <div className='flex justify-between'>
                                    <div className="form-control">
                                        <label className="cursor-pointer label">
                                            <span className="label-text mr-2">{<>Accept<Link className='btn btn-link btn-primary ml-2 p-0' to="/terms">Term & Conditions</Link></>}</span>
                                            <input onClick={handleAccepted} type="checkbox" className="checkbox checkbox-error" />
                                        </label>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center flex-col'>
                                    <button disabled={!accepted} type="submit" className="btn mt-5 mb-5 btn-primary w-[30%] text-white">Register</button>
                                    <div className='flex flex-col justify-center items-center'>
                                        <p className='mb-5'>or sign in with other accounts?</p>
                                        <div className='grid gap-8 grid-cols-2'>
                                            <button onClick={handleGoogle} className="btn btn-outline btn-accent"><FaGoogle className='mr-2'></FaGoogle> Google</button>
                                            <button onClick={handleGithub} className="btn btn-outline btn-secondary"><FaGithub className='mr-2'></FaGithub> GitHub</button>
                                        </div>
                                        <p className='mt-5'>Already have an Account <Link to='/login' className='text-primary'>Sign In</Link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img className='w-auto h-auto' src="https://img.freepik.com/free-vector/preferences-concept-illustration_114360-1403.jpg" alt="" />
            </div>
        </div>
    );
};

export default SingUp;