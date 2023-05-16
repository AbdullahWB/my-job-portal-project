import React, { useContext, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
    const { signIn, googleLogin, githubLogin, resetEmail } = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const emailRef = useRef()

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                const err = (error.message);
                toast.error(err)
            })
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

    const handelRestPasswords = (event) => {
        const email = (emailRef.current.value);
        if (!email) {
            toast.error("Enter your email to rest password ⚠️")
        }
        resetEmail(email)
            .then(() => {
                toast.success('Product added! 🛒')
            })
            .catch(error => {
                const err = (error.message);
                toast.error(err)
            })
    }

    return (
        <>
            <div className='py-[130px]'>
                <div className='grid md:grid-cols-2 grid-cols-1 w-[80%] mx-auto gap-8'>
                    <div className='flex justify-center items-center'>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <div className="card-body md:p-10 p-5">
                                <h1 className='text-3xl text-primary'>Login</h1>
                                <p className='text-gray-600 mb-5'>You Have account place Login</p>
                                <div>
                                    <form onSubmit={handleLogin}>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input ref={emailRef} type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
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
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className="form-control">
                                                <label className="cursor-pointer label">
                                                    <span className="label-text mr-2">Remember me</span>
                                                    <input type="checkbox" className="checkbox checkbox-error" />
                                                </label>
                                            </div>
                                            <div>
                                                <button className='btn btn-link btn-primary' onClick={handelRestPasswords}>Forgot Password?</button>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center flex-col'>
                                            <button type="submit" className="btn mt-5 mb-5 btn-primary w-[30%] text-white">Login</button>
                                            <div className='flex flex-col justify-center items-center'>
                                                <p className='mb-5'>or sign in with other accounts?</p>
                                                <div className='grid gap-8 grid-cols-2'>
                                                    <button onClick={handleGoogle} className="btn btn-outline btn-accent"><FaGoogle className='mr-2'></FaGoogle> Google</button>
                                                    <button onClick={handleGithub} className="btn btn-outline btn-secondary"><FaGithub className='mr-2'></FaGithub> GitHub</button>
                                                </div>
                                                <p className='mt-5'>Don’t have an account? <Link to='/singUp' className='text-primary'>Click here to sign up.</Link></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-[100%] h-full' src="https://img.freepik.com/free-vector/preferences-concept-illustration_114360-1403.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;