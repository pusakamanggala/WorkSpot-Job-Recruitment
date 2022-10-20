import React from "react";
import { Textarea } from "flowbite-react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";

const NewJobForm = () => {
  let { idData } = useParams();

  const { state, handleFunction } = useContext(GlobalContext);
  const { input, setInput } = state;
  const { handleSubmit, handleInput } = handleFunction;

  useEffect(() => {
    if (idData !== undefined) {
      axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`).then((res) => {
        let data = res.data;
        setInput({
          title: data.title,
          job_description: data.job_description,
          job_qualification: data.job_qualification,
          job_type: data.job_type,
          job_tenure: data.job_tenure,
          job_status: data.job_status,
          company_name: data.company_name,
          company_image_url: data.company_image_url,
          company_city: data.company_city,
          salary_min: data.salary_min,
          salary_max: data.salary_max,
        });
      });
    }
  }, [idData, setInput]);

  return (
    <form onSubmit={handleSubmit} className='bg-white rounded-md p-5'>
      <div className='grid gap-6 mb-6 md:grid-cols-2'>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Title</label>
          <input
            onChange={handleInput}
            name='title'
            value={input.title}
            type='text'
            id='first_name'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Job Title'
            required
          />
        </div>
        <div>
          <label htmlFor='last_name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
            Company Name
          </label>
          <input
            onChange={handleInput}
            name='company_name'
            value={input.company_name}
            type='text'
            id='last_name'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Name of Company'
            required
          />
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Company City</label>
          <input
            onChange={handleInput}
            name='company_city'
            value={input.company_city}
            type='text'
            id='company'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Company City'
            required
          />
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Job Type</label>
          <input
            onChange={handleInput}
            name='job_type'
            value={input.job_type}
            type='text'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Job Type'
            required
          />
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Min Salary</label>
          <input
            onChange={handleInput}
            name='salary_min'
            value={input.salary_min}
            type='number'
            id='company'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Company City'
            required
          />
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Max Salary</label>
          <input
            onChange={handleInput}
            name='salary_max'
            value={input.salary_max}
            type='number'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Job Type'
            required
          />
        </div>
        <div>
          <label htmlFor='website' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
            Company Logo
          </label>
          <input
            onChange={handleInput}
            name='company_image_url'
            value={input.company_image_url}
            type='url'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Image Url'
            required
          />
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Job Tenure</label>
          <input
            onChange={handleInput}
            name='job_tenure'
            value={input.job_tenure}
            type='text'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Tenure'
            required
          />
        </div>
      </div>
      <div className='mb-6'>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Job Description</label>
        <Textarea onChange={handleInput} name='job_description' value={input.job_description} required={true} rows={4} />
      </div>
      <div className='mb-6'>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Job Qalification</label>
        <Textarea onChange={handleInput} name='job_qualification' value={input.job_qualification} required={true} rows={4} />
      </div>
      <div className='mb-6'>
        <label htmlFor='confirm_password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
          JobStatus
        </label>
        <input
          onChange={handleInput}
          name='job_status'
          value={input.job_status}
          type='number'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
export default NewJobForm;
