/* import React from "react";

function Job({ job }) {
    const { company, logo, position } = job;

    return (
       
          <div className="job-card">
  
                 
              <img src={logo} alt={company} className="w-16 h-16 mr-4"  />
                  <div className="job-details">
                      <h2 >{company}</h2>
                      <p>{position}</p>
                  </div>
              
          </div>
                            
    );
}

export default Job;  */

import React from "react";

function Job({ job }) {
    return (
        <div className="job-card">
            <img src={job.logo} alt={job.company} className="job-logo" />
            <div className="job-details">
                <h2>{job.company}</h2>
                <h3>{job.position}</h3>
                <p>{job.brief}</p>
            </div>
        </div>
    );
}

export default Job;







