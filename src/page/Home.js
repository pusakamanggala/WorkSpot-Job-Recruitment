import React, { useEffect } from "react";
import HeroImg2 from "../img/HeroImg.png";
import FooterWave from "../img/footerWave.png";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);

  const handleJobStatus = (status) => {
    if (status === 1) {
      return <span className='inline-block rounded-md text-white bg-green-400 px-2 py-1 text-xs font-bold mr-3'>Open</span>;
    } else {
      return <span className='inline-block rounded-md text-white bg-red-400 px-2 py-1 text-xs font-bold mr-3'>Close</span>;
    }
  };

  //fetch data
  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        let data = res.data.data;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className='heroSection '>
        <img className='bg-cyan-50' src={HeroImg2} alt='' />
        <form className='w-6/12'>
          <div className='flex'>
            <label htmlFor='search-dropdown' className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'>
              Your Email
            </label>
          </div>
        </form>
      </div>
      <div className='max-w-screen mx-auto xl:px-48 md:px-20 sm:px-20 bg-cyan-50'>
        <h1 className='text-center text-3xl font-semibold p-20 text-teal-500'>AVAILABLE JOB POSITION</h1>
        {/* Grid wrapper */}
        <div className='-mx-4 flex flex-wrap'>
          {data !== null &&
            data.map((res, index) => {
              return (
                <>
                  {/* Grid column */}
                  <div className='w-full p-4 sm:w-1/2 lg:w-1/3 b'>
                    {/* Column contents */}
                    <Link to='/dashboard/vacancy'>
                      <div className='p-10 rounded-lg shadow-lg cursor-pointer bg-teal-500 text-white hover:bg-teal-400 hover:m-2'>
                        {/* Card contents */}
                        <img className='w-3/12 rounded' src={res.company_image_url} alt='' />
                        <h1 className=' font-bold'>{res.title}</h1> <h1 className='line-clamp-2  my-2'>{res.job_description}</h1>
                        <h1 className='font-semibold line-clamp-3'>{res.job_qualification}</h1>
                        <h1 className='jobStatus mt-5 '>{handleJobStatus(res.job_status)}</h1>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
        </div>
      </div>
      <div className='footer bg-cyan-50 pt-5'>
        <img src={FooterWave} alt='' />
      </div>
      <div className='footer p-5 flex justify-center flex-col content-center items-center  -mt-32'>
        <h1>
          Created by{" "}
          <a className='text-blue-700' href='https://github.com/pusakamanggala/WorkSpot-Job-Recruitment.git'>
            Pusaka Manggala
          </a>
        </h1>
        <h1>Bandung 2022</h1>
      </div>
    </>
  );
};

export default Home;
