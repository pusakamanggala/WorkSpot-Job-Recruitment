import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const DasboardLayout = (props) => {
  let navigate = useNavigate();
  return (
    <main className='bg-teal-500 h-screen overflow-hidden relative'>
      <div className='flex items-center justify-between '>
        <div className='h-7/12 hidden lg:block ml-2 relative w-80'>
          <div className='bg-white h-full dark:bg-gray-700 rounded-md'>
            <div className='flex items-center justify-start pt-6 ml-8'>
              <Link to='/'>
                <img className='w-36' src={Logo} alt='' />
              </Link>
            </div>
            <nav className='mt-6 pb-5'>
              <div>
                <Link to='/dashboard/vacancy'>
                  <div className='w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4'>
                    <span className='text-left'>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z'
                        />
                      </svg>
                    </span>

                    <span className='mx-2 text-sm font-normal'>Vacancy</span>
                  </div>
                </Link>
                <Link to='/dashboard/add-vacancy'>
                  <div className='w-full flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent'>
                    <span className='text-left'>
                      <svg width={20} height={20} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                      </svg>
                    </span>

                    <span className='mx-2 text-sm font-normal'>Add New</span>
                  </div>
                </Link>
                <Link to='/dashboard/security'>
                  {" "}
                  <div className='w-full flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-tran  sparent' href='#'>
                    <span className='text-left'>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
                        />
                      </svg>
                    </span>

                    <span className='mx-2 text-sm font-normal'>Security</span>
                  </div>
                </Link>
                <div
                  onClick={() => {
                    Cookies.remove("token");
                    Cookies.remove("user");
                    navigate("/");
                    alert("You have signed out");
                  }}
                  className='w-full flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent'
                >
                  <span className='text-left'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75' />
                    </svg>
                  </span>

                  <span className='mx-2 text-sm font-normal'>Sign Out</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className='flex flex-col w-full md:space-y-4'>
          <header className='w-full h-16 z-40 flex items-center justify-between'>
            <div className='block lg:hidden ml-6'>
              <button className='flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md'>
                <svg width={20} height={20} className='text-gray-400' fill='currentColor' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z'></path>
                </svg>
              </button>
            </div>
            <div className='w-full flex justify-end p-10'></div>
          </header>
          <div className='overflow-auto h-screen pb-24 px-4 md:px-6 rounded-t-md'>{props.children}</div>
        </div>
      </div>
    </main>
  );
};

export default DasboardLayout;
