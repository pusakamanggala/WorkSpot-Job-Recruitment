import React, { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  let navigate = useNavigate();

  const [data, setData] = useState(null);

  const [input, setInput] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: 0,
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: 0,
    salary_max: 0,
  });
  const [fetchStatus, setFetchStatus] = useState(true);

  const [currentId, setCurrentId] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    let title = input.title;
    let job_description = input.job_description;
    let job_qualification = input.job_qualification;
    let job_type = input.job_type;
    let job_tenure = input.job_tenure;
    let job_status = input.job_status;
    let company_name = input.company_name;
    let company_city = input.company_city;
    let company_image_url = input.company_image_url;
    let salary_max = input.salary_max;
    let salary_min = input.salary_min;

    if (currentId === -1) {
      axios
        .post(
          "https://dev-example.sanbercloud.com/api/job-vacancy",
          { title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )
        .then((res) => {
          console.log(res);
          setFetchStatus(true);
          navigate("/dashboard/vacancy");
        });
    } else {
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
          { title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )
        .then((res) => {
          setFetchStatus(true);
          navigate("/dashboard/vacancy");
        });
    }

    setCurrentId(-1);

    setInput({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: 0,
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: 0,
      salary_max: 0,
    });
  };
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

    setFetchStatus(false);
  };
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setInput({ ...input, [name]: value });
  };
  const handleDelete = (event) => {
    let idData = parseInt(event.target.value);
    console.log(idData);
    axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`, { headers: { Authorization: "Bearer " + Cookies.get("token") } }).then((res) => {
      setFetchStatus(true);
    });
  };

  const handleEdit = (event) => {
    let idData = parseInt(event.target.value);

    setCurrentId(idData);
    navigate(`/dashboard/vacancy/edit/${idData}`);
  };

  let handleFunction = {
    handleEdit,
    handleInput,
    handleSubmit,
    handleDelete,
    fecthData,
  };

  let state = {
    data,
    setData,
    input,
    setInput,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
