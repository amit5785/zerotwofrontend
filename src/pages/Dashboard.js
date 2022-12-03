import React, {useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../context/AuthProvider';
import { Auth } from 'aws-amplify';
function Dashboard() {
    const [error,setError]=useState("");
    const navigate=useNavigate();
    const {user}=useAuth();

    const handleClick= async (event)=>{
        event.preventDefault();
        
        try{
            await Auth.signOut();
            navigate('/');
        }catch(err){
            setError(err.message);
            alert(error);
        }
    }

    return (
        <>
            <main>
                <div className="flex flex-col md:flex-row">
                    <nav aria-label="alternative nav">
                        <div className="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">
                            <div className="md:mt-24 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                                <div className='content-center hidden md:block py-2'>
                                    <div className='hero container max-w-screen-lg mx-auto flex justify-center'>
                                        <img src="https://www.w3schools.com/w3css/img_avatar3.png" className='w-2/3 rounded-full ring-2' alt="" />
                                    </div>
                                    <h1 className='text-blue-600 text-lg text-center font-medium'>{user && user.attributes.email}</h1>
                                </div>
                                <hr />
                                <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                                    <li className="mr-3 flex-1">
                                        <a href="/" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                                            <i className="fas fa-tasks pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Tasks</span>
                                        </a>
                                    </li>
                                    <li className="mr-3 flex-1">
                                        <a href="/" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                                            <i className="fa fa-envelope pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Messages</span>
                                        </a>
                                    </li>
                                    <li className="mr-3 flex-1">
                                        <a href="/" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600">
                                            <i className="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Analytics</span>
                                        </a>
                                    </li>
                                    <li className="mr-3 flex-1">
                                        <a href="/" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                                            <i className="fa fa-wallet pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Payments</span>
                                        </a>
                                    </li>
                                    <li className="mr-3 flex-1">
                                        <Link className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500" onClick={handleClick}>
                                            <i className="fa fa-wallet pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Logout</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </nav>
                    <section>
                        <div id="main" className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">

                            <div className="bg-gray-800 pt-3">
                                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                                    <h1 className="font-bold pl-2">Analytics</h1>
                                </div>
                            </div>
                                <p>
                                    This page is in developement phase
                                </p>

                            </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Dashboard