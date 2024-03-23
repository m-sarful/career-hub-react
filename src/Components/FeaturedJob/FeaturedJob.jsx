import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const FeaturedJob = ({job}) => {

    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;

    return (
        <div>
          <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className='px-4 py-2 mr-2 border border-lime-200 text-[#eb674a] rounded font-bold'>{remote_or_onsite}</button>
        <button className='px-4 py-2 mr-2 border border-lime-200 text-[#3c4e8e] rounded font-bold'>{job_type}</button>
    </div>
    <div className='font-semibold flex gap-14 mt-2'>
        <div className="flex gap-2">
              <h1 className="text-xl"><CiLocationOn /></h1>
        <h2>{location}</h2>
        </div>
       <div className="flex gap-2">
       <h1 className="text-xl"><AiOutlineDollar /></h1>
        <h2>{salary}</h2>
       </div>
    </div>
    <div className="card-actions mt-2">
        <Link to={`/job/${id}`}>
      <button className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white">View Details</button>
        </Link>
    </div>
  </div>
</div>
        </div>
    );
};

FeaturedJob.propTypes = {
    job: PropTypes.object
};

export default FeaturedJob;