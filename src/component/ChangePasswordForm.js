import axios from "axios";
import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const ChangePasswordForm = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setInput({ ...input, [name]: value });
  };

  const handleChangePassword = (event) => {
    event.preventDefault();

    let { current_password, new_password, new_confirm_password } = input;

    axios
      .post("https://dev-example.sanbercloud.com/api/change-password", { current_password, new_password, new_confirm_password }, { headers: { Authorization: "Bearer " + Cookies.get("token") } })
      .then((res) => {
        console.log(res);
        alert("Your password has been changed successfully");
        Cookies.remove("token");
        Cookies.remove("user");
        navigate("/login");
      })
      .catch((error) => {
        // console.log(error)
        alert(error.message);
      });

    setInput({
      current_password: "",
      new_password: "",
      new_confirm_password: "",
    });
  };

  return (
    <form className='bg-white rounded-md p-5 mt-36' onSubmit={handleChangePassword}>
      <div className='mb-6'>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Current Password</label>
        <input
          onChange={handleInput}
          name='current_password'
          value={input.current_password}
          type='password'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='•••••••••'
          minLength='8'
          required
        />
      </div>
      <div className='mb-6'>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>New Password</label>
        <input
          onChange={handleInput}
          name='new_password'
          value={input.new_password}
          type='password'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='•••••••••'
          minLength='8'
          required
        />
      </div>
      <div className='mb-6'>
        <label htmlFor='confirm_password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
          Confirm password
        </label>
        <input
          name='new_confirm_password'
          onChange={handleInput}
          value={input.new_confirm_password}
          type='password'
          id='confirm_password'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='•••••••••'
          minLength='8'
          required
        />
      </div>

      <button
        type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Submit
      </button>
    </form>
  );
};
export default ChangePasswordForm;
