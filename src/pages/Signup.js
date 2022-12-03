import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Auth} from 'aws-amplify'
import Alert from '../components/Alert';
function Signup() {


    const email=useRef();
    const password=useRef();
    const name=useRef();
    const userName=useRef();
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();

    const handleSubmit= async (event)=>{
        event.preventDefault();

        try{
            setError("");
            setLoading(true);
            Auth.signUp(email.current.value,password.current.value);
            navigate('/verify',{state:{email:email.current.value,username:userName.current.value}});
        }catch(err){
            setError(err.message);
        }

        setLoading(false);
    }


    return (
        <>
            <div className="min-h-screen py-6 flex bg-gray-900 flex-col justify-center sm:py-12 pattern">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                           {error && <Alert danger={true} message={error} />}
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-wrap m-2">
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Name" ref={name} />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="userName" className="leading-7 text-sm text-gray-600">User Name</label>
                                            <input type="text" id="userName" name="userName" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="User name"  ref={userName}/>
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                            <input id="email" type="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Email' ref={email} />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                            <input type="password" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Password' ref={password} />
                                        </div>
                                    </div>

                                    <p className='text-sm px-2'>Already have account? <Link to="/login" className='underline'>login</Link></p>
                                    
                                    <div className="p-2 w-full">
                                        <button className="flex mx-auto border hover:shadow-sky-500 border-sky-500 px-3 py-1 font-medium rounded-lg  text-sky-500 hover:bg-sky-500 hover:text-slate-900  text-lg" type='submit' disabled={loading} >Signup</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup