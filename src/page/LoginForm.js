import React, { useState } from "react";
import { TextInput, Label, Button } from "flowbite-react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginForm = () => {
  let navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    let { email, password } = input;
    // console.log(input)

    axios
      .post("https://dev-example.sanbercloud.com/api/login ", { email, password })
      .then((res) => {
        console.log(res);
        let data = res.data;
        let { user } = data;
        Cookies.set("token", data.token, { expires: 1 });
        Cookies.set("user", JSON.stringify(user), { expires: 1 });
        navigate("/");
      })

      .catch((error) => {
        // console.log(error)
        alert(error.message);
      });

    setInput({
      email: "",
      password: "",
    });
  };

  return (
    <div className='w-screen h-screen mx-auto flex justify-center items-center bg-cyan-50'>
      <div className='mx-auto bg-white p-10 rounded-lg sm:w-10/12 md:w-5/12 lg:w-5/12 shadow-md'>
        <form onSubmit={handleLogin} className='flex flex-col gap-4'>
          <h1 className='text-center mb-8 font-semibold'>Sign to your account</h1>
          <div>
            <div className='mb-2 block'>
              <Label value='Your email' />
            </div>
            <TextInput name='email' value={input.email} onChange={handleInput} type='text' required={true} />
          </div>
          <div>
            <div className='mb-2 block '>
              <Label value='Your password' />
            </div>
            <TextInput minLength='8' name='password' value={input.password} onChange={handleInput} type='password' required={true} />
          </div>
          <Button type='submit'>Submit</Button>
        </form>
        <p className='flex justify-center'>
          Don't have an account?
          <Link className='text-blue-500' to='/register'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
