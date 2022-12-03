import React, { useRef,useState } from 'react'
import { useLocation,useNavigate } from 'react-router';
import { Auth } from 'aws-amplify';
import Alert from './Alert';

const PasswordReset = () => {

    const email= useRef();
    const password=useRef();
    const otp=useRef();
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const location=useLocation();

    const handleSubmit= async (event)=>{
        event.preventDefault();

        try{
            setError("");
            setLoading(true);
            const res=await Auth.forgotPasswordSubmit(email.current.value,otp.current.value,password.current.value);
            navigate('/login');
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
                            <div>
                                <h1 className="text-2xl font-semibold">Password Reset</h1>
                            </div>
                            {error && <Alert danger={true} message={error} />}
                            <form onSubmit={handleSubmit}>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                      <div className="relative">
                                            <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email" defaultValue={location.state && location.state.email} ref={email} />
                                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                        </div>
                                        <div className="relative">
                                            <input autoComplete="off" id="newPassword" name="newPassword" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="New Password" ref={password}/>
                                            <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">New Password</label>
                                        </div>

                                        <div className="relative">
                                            <input autoComplete="off" id="otp" name="otp" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Code" ref={otp}/>
                                            <label htmlFor="otp" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Code</label>
                                        </div>

                                        <div className="relative">
                                            <button className="border hover:shadow-sky-500 border-sky-500 px-3 py-1 font-medium rounded-lg  text-sky-500 hover:bg-sky-500 hover:text-slate-900  text-lg" type='submit' disabled={loading} >{!loading ? "Reset":"Reseting..."} </button>
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
}

export default PasswordReset