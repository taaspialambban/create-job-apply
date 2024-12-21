import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStorageJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJob , setAppliesJob] = useState([]);
    const [displayJob , setDisplayJob] = useState([]);

    const handleDisplayJob = filter =>{
        if(filter === 'all'){
            setDisplayJob(appliedJob);
        }
        else if (filter ==='remote'){
            const remoteJOb = appliedJob.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJob(remoteJOb)
        }
      else if (filter === 'onsite'){
        const onsiteJob = appliedJob.filter(job => job.remote_or_onsite === "Onsite");
        setDisplayJob(onsiteJob)
      }
    }

    useEffect(() =>{
        const storageJobId = getStorageJobApplication();
        if(jobs.length >0){

        //     Option : 1
        //    const jobApplies = jobs.filter(job => storageJobId.includes(job.id));


        // Option : 2
        const jobApplies = [];
        for(const id of storageJobId){
            const job = jobs.find(job => job.id === id);
            if(job){
                jobApplies.push(job)
            }
        }
          setAppliesJob(jobApplies);
          setDisplayJob(jobApplies);
        }
    },[jobs])

    return (
        <div>
            <h2>Applied jobs : {appliedJob.length}</h2>

            <details className="dropdown">
  <summary className="btn m-1">open or close</summary>
  <ul className="menu dropdown-content bg-gray-400 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={() => handleDisplayJob('all')}><a>All</a></li>
    <li onClick={()=> handleDisplayJob('remote')}><a>Remote</a></li>
    <li onClick={()=> handleDisplayJob('onsite')}><a>onsite</a></li>
  </ul>
</details>

            <ul className="text-amber-500">
                {
                    displayJob.map(job => <li key={job.id}>
                        <span>{job.job_title} {job.company_name} :
                             {job.remote_or_onsite} </span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;