import { useEffect, useState } from "react";
import Logo from "../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Dropdown } from "flowbite-react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const [user, setUser] = useState("undefined");

  let navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("user") !== undefined) setUser(JSON.parse(Cookies.get("user")));
  }, []);

  // console.log(user);

  const HandleUserStatus = (cookies) => {
    if (cookies !== undefined) {
      return (
        // <span
        //   onClick={() => {
        //     Cookies.remove("token");
        //     navigate("/login");
        //   }}
        // >
        //   Sign out
        // </span>
        <div className='flex '>
          <Dropdown label={user.name}>
            <Dropdown.Item>
              <Link to='/dashboard'>Dasboard</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <span
                onClick={() => {
                  Cookies.remove("token");
                  Cookies.remove("user");
                  navigate("/login");
                  alert("You have signed out");
                }}
              >
                Sign out
              </span>
            </Dropdown.Item>
          </Dropdown>
          <div className='flex content-center rounded-full'>
            <img className='w-10 h-10 ml-5 rounded-full object-cover' src={user.image_url} alt='' />
          </div>
        </div>
      );
    } else if (cookies === undefined) {
      return <Link to='/login'>Sign in</Link>;
    }
  };

  return (
    <nav className='w-full bg-white/70 shadow backdrop-blur-sm fixed '>
      <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
        <div>
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>
            <img className='w-32' src={Logo} alt='' />

            <div className='md:hidden'>
              <button className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border' onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' viewBox='0 0 20 20' fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
            <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
              <li className='text-teal-500 hover:text-cyan-500 font-semibold'>
                <Link to='/'>Home</Link>
              </li>

              <li className='text-teal-500 hover:text-cyan-500 font-semibold'>
                {/* <Link to='/login'>Sign in</Link> */}
                {HandleUserStatus(Cookies.get("token"))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
