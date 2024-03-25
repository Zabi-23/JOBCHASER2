/* 
import React, { useState, useEffect } from 'react';
import fetchData from './Api';
import JobList from './JobList';
import Loader from './Loader'; // Förutsatt att du har en Loader-komponent

function JobFetcher() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataAndSetJobs = async () => {
      try {
        const data = await fetchData();
        console.log('Data from API', data);
        setJobs(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
    fetchDataAndSetJobs();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <JobList jobs={jobs} />
      )}
    </div>
  );
}

export default JobFetcher; */
