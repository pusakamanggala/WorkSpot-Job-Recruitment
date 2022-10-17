import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import Cookies from "js-cookie";
import { GlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Result } from "postcss";

const JobList = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { data, setData, input, setInput, fetchStatus, setFetchStatus, currentId, setCurrentId } = state;
  const { handleSubmit, handleInput, handleDelete, handleEdit, fecthData } = handleFunction;

  const handleCurrency = (price) => {
    if (price === 0) return "Free";
    else return new Intl.NumberFormat(["ban", "id"]).format(price);
  };

  const handleJobStatus = (status) => {
    if (status == 1) {
      return <span className='inline-block rounded-md text-white bg-green-400 px-2 py-1 text-xs font-bold mr-3'>Open</span>;
    } else {
      return <span className='inline-block rounded-md text-white bg-red-400 px-2 py-1 text-xs font-bold mr-3'>Close</span>;
    }
  };

  //fetch data
  useEffect(() => {
    if (fetchStatus === true) {
      fecthData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus, fecthData]);

  const [search, setSearch] = useState("");

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    let fecthData = () => {
      axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
          let data = res.data.data;
          setData(data);
        })
        .catch((error) => {
          alert(error.message);
        });

      let searchData = data.filter((res) => {
        return Object.values(res).join(" ").toLowerCase().includes(search.toLowerCase());
      });
      setData([...searchData]);
    };
    fecthData();
  };

  return (
    <div>
      <div className='w-full '>
        <div className=' z-50 -mt-12 w-9/12 flex justify-end fixed'>
          <form onSubmit={handleSearch} className='flex items-center'>
            <label htmlFor='voice-search' className='sr-only'>
              Search
            </label>
            <div className='relative w-full'>
              <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' />
                </svg>
              </div>
              <input
                onChange={handleChangeSearch}
                value={search}
                type='text'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Job Name'
                required
              />
            </div>
            <button
              type='submit'
              className='inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <svg className='mr-2 -ml-1 w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
              Search
            </button>
          </form>
        </div>
        <Table>
          <Table.Head>
            <Table.HeadCell>NO </Table.HeadCell>
            <Table.HeadCell>TITLE</Table.HeadCell>
            <Table.HeadCell>DESCRIPTION</Table.HeadCell>
            <Table.HeadCell>QUALIFICATION</Table.HeadCell>
            <Table.HeadCell>TYPE</Table.HeadCell>
            <Table.HeadCell>TENURE</Table.HeadCell>
            <Table.HeadCell>STATUS</Table.HeadCell>
            <Table.HeadCell>COMPANY</Table.HeadCell>
            <Table.HeadCell className='text-center'>CITY</Table.HeadCell>
            <Table.HeadCell className='text-center'>SALARY</Table.HeadCell>
            <Table.HeadCell className='text-center'>ACTON</Table.HeadCell>
          </Table.Head>
          {data !== null &&
            data.map((res, index) => {
              return (
                <Table.Body key={index} className='divide-y border-b-2'>
                  <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                    <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white text-center'>{index + 1}</Table.Cell>
                    <Table.Cell>{res.title}</Table.Cell>
                    <Table.Cell className='max-w-0 overflow-ellipsis overflow-hidden whitespace-nowrap'>{res.job_description}</Table.Cell>
                    <Table.Cell className='max-w-0 overflow-ellipsis overflow-hidden whitespace-nowrap'>{res.job_qualification}</Table.Cell>
                    <Table.Cell className='text-center'>{res.job_type}</Table.Cell>
                    <Table.Cell className='text-center'>{res.job_tenure}</Table.Cell>
                    <Table.Cell className='text-center'>{handleJobStatus(res.job_status)}</Table.Cell>
                    <Table.Cell className='text-center'>
                      <img src={res.company_image_url} alt='' />
                      {res.company_name}
                    </Table.Cell>
                    <Table.Cell className='text-center'>{res.company_city}</Table.Cell>
                    <Table.Cell className='text-center'>
                      {handleCurrency(res.salary_min)} <br />
                      to
                      <br /> {handleCurrency(res.salary_max)}
                    </Table.Cell>
                    <Table.Cell className='flex flex-row justify-center'>
                      <div className='actionButton mx-2'>
                        <button
                          value={res.id}
                          onClick={handleEdit}
                          type='button'
                          className='h-11 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-full dark:focus:ring-yellow-900'
                        >
                          Edit
                        </button>
                        <button
                          onClick={handleDelete}
                          value={res.id}
                          className='h-11 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 w-full focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
                        >
                          Delete
                        </button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              );
            })}
        </Table>
      </div>
    </div>
  );
};

export default JobList;
