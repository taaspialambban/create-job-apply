import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Headers from "../Headers/Headers";


const Dashboard = () => {

    return (
        <div className="bg-gray-200">
       <div className="max-w-5xl mx-auto text-black">
       <Headers></Headers>
       <Outlet></Outlet>
       </div>
        <Footer></Footer>
      </div>
    );
};

export default Dashboard;