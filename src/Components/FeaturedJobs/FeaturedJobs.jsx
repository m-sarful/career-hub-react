// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (

        <div>
            <div className="text-center">
                <h2 className="text-3xl font-bold">Featured Jobs {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
        <div className="grid grid-cols-2 space-y-4 space-x-4">
            {
                jobs.slice(0, dataLength).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
            }
        </div>
        <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <div className="text-center mt-4">
            <button onClick={() => setDataLength(jobs.length)} className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white">Show All Jobs</button>
        </div>
        </div>
    
        </div>
    );
};

FeaturedJobs.propTypes = {

};

export default FeaturedJobs;