import React, { useState } from "react";
import { TextInput, Label, Button } from "flowbite-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  let navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
    image_url: "",
  });

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    let { name, email, password, image_url } = input;
    // console.log(input)

    axios
      .post("https://dev-example.sanbercloud.com/api/register", { name, email, password, image_url })
      .then((res) => {
        console.log(res);
        navigate("/Login");
      })

      .catch((error) => {
        // console.log(error)
        alert(error.message);
      });
  };

  return (
    <div className='w-screen h-screen mx-auto flex justify-center items-center bg-cyan-50'>
      <div className='mx-auto bg-white p-10 rounded-lg sm:w-10/12 md:w-5/12 lg:w-5/12 shadow-md'>
        <form onSubmit={handleRegister} className='flex flex-col gap-4'>
          <h1 className='text-center mb-8 font-semibold'>Create your new account</h1>
          <div>
            <div className='mb-2 block'>
              <Label value='Your Name' />
            </div>
            <TextInput name='name' value={input.name} onChange={handleInput} type='text' required={true} />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label value='Foto Profile' />
            </div>
            <TextInput name='image_url' value={input.image_url} onChange={handleInput} type='url' required={true} />
          </div>
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
      </div>
    </div>
  );
};

export default RegisterForm;
