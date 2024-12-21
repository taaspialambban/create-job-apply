import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs , setJobs] = useState([]);

    // This is ot the best way to load data but right now we do this becuase of this fake data

    const [lengthData , setLengthData] = useState(4)

    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, [])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-6xl">Featured Jobs : {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, lengthData).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
         <div className={lengthData === jobs.length && 'hidden'}>
         <button 
            onClick={() =>setLengthData(jobs.length)}
            className="flex items-center justify-center my-6 btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">See All Jobs</button>
         </div>
        </div>
    );
};

export default FeaturedJobs;