// import { MdLocationPin } from "@react-icons/all-files/fa/FaBeer";
// import { HiLocationMarker , CiDollar } from "@react-icons/all-files/hi/HiLocationMarker/ci/CiDollar";
import { HiLocationMarker} from "@react-icons/all-files/hi/HiLocationMarker";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router";



const Job = ({job}) => {
  const {id, logo ,job_title, company_name, remote_or_onsite, location, job_type, salary } = job
  return (
    <div className="card card-compact shadow-xl">
  <figure>
    <img
      src={logo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className="space-x-4">
      <button className="px-5 py-2 font-extrabold border rounded border-lime-500">{remote_or_onsite}</button>
      <button className="px-5 py-2 font-extrabold border rounded border-lime-500">{job_type}</button>
    </div>
    
    <div className="p-4 flex space-x-3 border-2">
      <h2 className="text-xl flex items-center"> <HiLocationMarker></HiLocationMarker> {location}</h2>
      <h2 className="text-xl flex items-center"> <CiDollar></CiDollar> {salary} </h2>
    </div>


    <div className="card-actions ">
      <Link to={`/job/${id}`}>
      <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">View Details</button>
      </Link>
     
    </div>
  </div>
</div>
  );
};

export default Job;