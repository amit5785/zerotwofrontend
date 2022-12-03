import React, { useState }  from "react";
import { Link} from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
function Navbar() {

  const [btnstatus,setBtnstatus]=useState(true);
  const {user}=useAuth();
  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div >
            <Link to="/" >
              <span className="self-center flex items-center flex-row justify-center align-middle gap-4 text-lg font-semibold whitespace-nowrap dark:text-white">
                <svg width="49" height="44" viewBox="0 0 49 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.1039 15.8C20.1039 12.8333 19.7372 10.45 19.0039 8.65C18.3039 6.81667 17.3706 5.48333 16.2039 4.65C15.0372 3.81666 13.7372 3.4 12.3039 3.4C10.9039 3.4 9.60391 3.83333 8.40391 4.7C7.23724 5.53333 6.30391 6.86666 5.60391 8.7C4.90391 10.5333 4.55391 12.9 4.55391 15.8C4.55391 19.8 5.23724 22.8833 6.60391 25.05C7.97057 27.1833 9.87057 28.25 12.3039 28.25C14.7706 28.25 16.6872 27.1833 18.0539 25.05C19.4206 22.8833 20.1039 19.8 20.1039 15.8ZM12.3039 31.65C9.97057 31.65 7.90391 31.0833 6.10391 29.95C4.33724 28.7833 2.95391 27.0333 1.95391 24.7C0.953906 22.3333 0.453906 19.3667 0.453906 15.8C0.453906 11.9667 1.02057 8.9 2.15391 6.6C3.28724 4.3 4.75391 2.63333 6.55391 1.6C8.35391 0.533333 10.2706 -2.38419e-07 12.3039 -2.38419e-07C14.3706 -2.38419e-07 16.3039 0.533333 18.1039 1.6C19.9372 2.66666 21.4039 4.36666 22.5039 6.7C23.6372 9 24.2039 12.0333 24.2039 15.8C24.2039 19.3333 23.7039 22.2833 22.7039 24.65C21.7039 26.9833 20.3039 28.7333 18.5039 29.9C16.7372 31.0667 14.6706 31.65 12.3039 31.65ZM29.7055 3.75C29.7055 3.15 30.0888 2.56667 30.8555 2C31.6221 1.4 32.6555 0.916665 33.9555 0.549999C35.2555 0.183333 36.6721 -2.38419e-07 38.2055 -2.38419e-07C40.3388 -2.38419e-07 42.1721 0.366666 43.7055 1.1C45.2388 1.8 46.4221 2.8 47.2555 4.1C48.0888 5.4 48.5055 6.93333 48.5055 8.7C48.5055 10.5333 47.9888 12.3333 46.9555 14.1C45.9555 15.8667 44.2221 17.8833 41.7555 20.15L33.6055 27.7H48.4555C48.5888 27.8333 48.7055 28.05 48.8055 28.35C48.9055 28.6167 48.9555 28.9333 48.9555 29.3C48.9555 29.8333 48.8055 30.25 48.5055 30.55C48.2388 30.85 47.8721 31 47.4055 31H29.7555C29.4221 30.7667 29.1721 30.4833 29.0055 30.15C28.8388 29.7833 28.7555 29.4 28.7555 29C28.7555 28.4667 28.8555 28 29.0555 27.6C29.2555 27.1667 29.5555 26.7667 29.9555 26.4L38.9555 17.75C41.0221 15.8167 42.4388 14.2 43.2055 12.9C43.9721 11.5667 44.3555 10.1833 44.3555 8.75C44.3555 7.18333 43.8221 5.9 42.7555 4.9C41.6888 3.9 40.0721 3.4 37.9055 3.4C36.4388 3.4 35.1221 3.65 33.9555 4.15C32.8221 4.65 31.8721 5.18333 31.1055 5.75C30.7388 5.58333 30.4055 5.33333 30.1055 5C29.8388 4.66666 29.7055 4.25 29.7055 3.75Z" fill="white"/>
                  <path d="M1.2494 35.2881C0.835043 34.9177 0.968509 34.4846 1.41794 34.585C4.05835 36.0917 24.4513 44.7297 43.833 36.8952C44.9116 36.7747 45.0127 37.4978 44.6757 37.7992C21.6423 51.0073 1.69883 35.6899 1.2494 35.2881Z" fill="white"/>
                  <path d="M45.3694 40.963C45.0997 41.6862 45.6869 41.5154 45.9874 41.3146C48.2795 39.5066 48.7205 37.3973 48.9453 35.9409C49.1687 34.1757 48.6927 34.0244 47.7989 33.8731C44.7265 33.3531 41.6912 34.3775 40.3133 35.0835C39.7515 35.3849 40.0886 35.6898 40.4256 35.6396C41.1934 35.4722 43.3245 35.1876 45.7065 35.3885C48.6839 35.6396 45.7065 40.059 45.3694 40.963Z" fill="white"/>
                </svg>
                <p className="text-2xl">
                  ZeroTwo
                </p>
              </span>
              
            </Link>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            onClick={()=>{setBtnstatus(!btnstatus)}}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div
            className={ btnstatus ? "hidden w-full md:flex md:items-center md:w-auto":"w-full md:flex md:items-center md:w-auto"}
            id="menu"
          >
            <ul className="pt-4 text-base text-gray-400 md:flex md:justify-between md:pt-0">
              <li onClick={()=>{setBtnstatus(!btnstatus)}} >
                <Link className="md:p-4 py-2 block hover:text-white" to="/">
                  New Realeases
                </Link>
              </li>
              <li onClick={()=>{setBtnstatus(!btnstatus)}}>
                <Link className="md:p-4 py-2 block hover:text-white" to="/">
                  About
                </Link>
              </li>
              <li onClick={()=>{setBtnstatus(!btnstatus)}}>
                <Link className="md:p-4 py-2 block hover:text-white" to="/">
                  Contact
                </Link>
              </li>
              <li onClick={()=>{setBtnstatus(!btnstatus)}}>
              { user?(<></>):(
                  <Link
                    className="text-white bg-sky-500 md:p-3 mt-1 block py-3 pr-4 md:pl-3  md:hover:bg-transparent md:border md:dark:hover:bg-transparent font-serif focus:outline-none focus:ring-blue-300 md:hover:bg-opacity-10 rounded"
                      to="/login"
                    >
                      Get started
                    </Link>)
              }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
