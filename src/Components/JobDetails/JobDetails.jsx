// import PropTypes from 'prop-types';
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineSubtitles } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../../Utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const {job_title, salary, job_description, job_responsibility, educational_requirements, contact_information, experiences} = job;
    console.log(job)

    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('you apply submitted successfully')
    }

    return (
        <div>
            <div className="h-36 flex justify-center bg-gray-200 items-center">
                <h2 className="text-4xl font-bold">Job details</h2> 
            </div>
           <div className="mt-4 flex gap-4">
            <div className="w-2/3">
            <h1 className="mt-4"> <span className="font-bold">Job Description</span> : {job_description}</h1>
            <h2 className="mt-4"><span className="font-bold">Job Responsibility : </span>{job_responsibility}</h2>
            <h2 className="mt-4"><span className="font-bold">Educational Requirements : </span>{educational_requirements}</h2>
            <h2 className="mt-4"><span className="font-bold">Experience : </span>{experiences}</h2>
            </div>
            <div className="w-1/3 bg-green-100 p-4 rounded-xl">
                <h1 className="font-bold text-2xl">Job Details</h1>
                <hr />
                <h1 className="flex gap-4"> <span className="mt-1"><AiOutlineDollar /> </span><span className="font-bold">Saraly : </span>{salary}</h1>
                <h1 className="flex gap-4"> <span className="mt-1"><MdOutlineSubtitles /> </span><span className="font-bold">Job Title : </span>{job_title}</h1>
            <div className="mt-4">
                <h1 className="text-2xl font-bold">Contact Information</h1>
                <hr />
                <div>
                    <h1 className="mt-2 flex gap-2"><span className="mt-2"><FaPhoneAlt /></span>  <span className="font-bold">Phone : </span>{contact_information.phone}</h1>

                    <h1 className="mt-2 flex gap-2"><span className="mt-2"><MdOutlineMail /></span> <span className="font-bold">Email : </span>{contact_information.email}</h1>

                    <h1 className="mt-2 flex gap-2"><span className="mt-2"><IoLocationSharp /></span><span className="font-bold">Address: </span>{contact_information.address}</h1>
                </div>
                <div className="mt-2">
                    <button onClick={handleApplyJob} className="btn w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">Apply Now</button>
                </div>
                <ToastContainer />
            </div>
            </div>
           </div>
        </div>
    );
};

JobDetails.propTypes = {
    
};

export default JobDetails;