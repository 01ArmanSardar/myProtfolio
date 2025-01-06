import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar";


const Root = () => {
    return (
        <div className="grid grid-cols-4 bg-gray-700 h-screen">
            
                <div className="col-span-1 bg-red-400 m-8"><NavBar></NavBar></div>
                <div className="col-span-3 bg-lime-400 m-8"><Outlet></Outlet></div>
            
            
            
        </div>
    );
};

export default Root;