import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar";


const Root = () => {
    return (
        <div className="grid grid-cols-4 bg-gradient-to-r from-emerald-300 from-10% via-sky-500 via-30% to-emerald-600 to-90% h-screen">
            
                <div className="col-span-1 bg-slate-50 m-8 rounded-2xl"><NavBar></NavBar></div>
                <div className="col-span-3 bg-slate-50 m-8 rounded-3xl"><Outlet></Outlet></div>
            
            
            
        </div>
    );
};

export default Root;