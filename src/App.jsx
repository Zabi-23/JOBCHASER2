/* import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import JobList from './components/JobList';
 import data from './components/Data'; 
import fetchData from './components/Api';
import './App.css'



function App() {
  const [jobs, setJobs] = useState([]);
  // kod (1) Filterar jobb baserad på söktermen
  const [ searchTerm, setSearchTerm] = useState('');

  //kod(2) skulle fetcha data
  useEffect(() =>{
    const fetchDataAndSetJobs = async () =>{
      try{
        const data = await fetchData();
        console.log('Data from API', data); 
        setJobs(data);
      }catch(error){
        console.error('Error fetching data:', error);
      }
    };
    fetchDataAndSetJobs();
  },[]);
  
 
  //slut kod(2)


  //kod(1)
  // Kod för att uppdatera filtreringslogiken
const filteredJobs = jobs.length > 0 ? jobs.filter(job => 
  job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
  job.position.toLowerCase().includes(searchTerm.toLowerCase())
) : []; 



    // slut kod(1)


    return (
      <div>
        <main>
          <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {jobs.length > 0 ? (
            <JobList jobs={filteredJobs} />
          ) : (
            <p>Loading jobs...</p>
          )}
        </main>
      </div>
    );
    
}



export default App;  */

 
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import JobList from './components/JobList';
import fetchData from './components/Api';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchDataAndSetJobs = async () => {
      try {
        const data = await fetchData();
        console.log('Data from API', data);
        setJobs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataAndSetJobs();
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.employer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.headline.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <main>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {jobs.length > 0 ? (
          <JobList jobs={filteredJobs} />
        ) : (
          <p>Loading jobs...</p>
        )}
      </main>
    </div>
  );
}

export default App; 






