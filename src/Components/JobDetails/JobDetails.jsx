// import PropTypes from 'prop-types';

import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job)
    // console.log(jobs, id)
    return (
        <div>
            <h2>Job details</h2>
        </div>
    );
};

JobDetails.propTypes = {
    
};

export default JobDetails;