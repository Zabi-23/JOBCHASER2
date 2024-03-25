import React from "react";
import Job from './Job'

function JobList({ jobs }) {
    console.log("Jobs in JobList:", jobs);

    return (
        <div className="container">
            {jobs.map((job) => (
                <Job key={job.id} job={job} />
            ))}
        </div>
    );
}

export default JobList;

