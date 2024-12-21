import { useParams } from "react-router";
import { useLoaderData } from "react-router";

import { ToastContainer, toast } from 'react-toastify';
import { saveStorageJobApplication } from "../../utility/localStorage";

const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
   console.log(job)

   const handleApplyJob = () => {
    saveStorageJobApplication(idInt)
    toast('You have apply successfully')
   };

    return (
        <div>
            <h2>Job details of : {id}</h2>
            <div className="grid border-2 p-4 border-purple-600 gap-6 md:grid-cols-4">
                <div className="border-2 space-y-4 md:col-span-3">
                    <h2> <span className="text-2xl font-bold">Job Description</span> : {job.job_description}</h2>
                    <h2> <span className="text-2xl font-bold">Job responsibility</span> : {job.job_responsibility}</h2>
                </div>
                <div className="border-2 ">
                    <h2 className="text-2xl font-bold">Job Details</h2>
                    <h2> <span className="text-xl font-medium">Salary :</span> {job.salary}</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;


