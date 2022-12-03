import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Auth} from 'aws-amplify'
import Alert from '../components/Alert'
function Login() {
    const email= useRef();
    const password=useRef();
    const [showReset,setShowReset]=useState(false);
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();

    const handleSubmit= async (event)=>{
        event.preventDefault();

        if(loading)
        {
            return ;
        }

        try{
            setError("");
            setLoading(true);
            await Auth.signIn(email.current.value,password.current.value);
            navigate('/dashboard');
        }catch(err){
            setError(err.message);
        }
        setLoading(false);
    }

    const handleReset= async (event)=>{
        event.preventDefault();
        try{
            setError("");
            setLoading(true);
            await Auth.forgotPassword(email.current.value);
            navigate('/reset',{state:{email:email.current.value}});
        }catch(err){
            setError(err.message);
        }
        setLoading(false);
    }


    return (
        showReset ?(
            <>
                <div className="min-h-screen py-6 flex bg-gray-900 flex-col justify-center sm:py-12 pattern">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-2xl font-semibold">Reset Password</h1>
                                </div>
                                {error && <Alert danger={true} message={error} />}
                                <form>
                                    <div className="divide-y divide-gray-200">
                                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                            <div className="relative">
                                                <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email" ref={email} />
                                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                            </div>

                                            <div className="relative flex justify-between">
                                                <button className="border hover:shadow-sky-500 border-sky-500 px-3 py-1 font-medium rounded-lg  text-sky-500 hover:bg-sky-500 hover:text-slate-900  text-lg" disabled={loading} onClick={handleReset} >{!loading ? "Send Code":"Sending..."} </button>
                                                <p className='text-sm'><Link className='underline' onClick={()=>{setShowReset(!showReset)}} >Login? </Link></p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ):(
            <>
                <div className="min-h-screen py-6 flex bg-gray-900 flex-col justify-center sm:py-12 pattern">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-2xl font-semibold">LOGIN</h1>
                                </div>
                                {error && <Alert danger={true} message={error} />}
                                <form onSubmit={handleSubmit}>
                                    <div className="divide-y divide-gray-200">
                                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                            <div className="relative">
                                                <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email" ref={email} />
                                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                            </div>
                                            <div className="relative">
                                                <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" ref={password}/>
                                                <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                            </div>
                                            <div className='relative'>
                                                <p className='text-sm'>New here? <Link to="/signup" className='underline'>SignUp</Link></p>
                                            </div>
                                            
                                            <div className="relative flex justify-between">
                                                <button className="border hover:shadow-sky-500 border-sky-500 px-3 py-1 font-medium rounded-lg  text-sky-500 hover:bg-sky-500 hover:text-slate-900  text-lg" type='submit'disabled={loading} >{!loading ? "Login":"LogingIn..."} </button>
                                                <p className='text-sm'>Forget <Link className='underline' onClick={()=>{setShowReset(!showReset)}} >Password?</Link></p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    )
}

export default Login