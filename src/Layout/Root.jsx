import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar";


const Root = () => {
    return (
        <div className="grid lg:grid-cols-4 bg-gradient-to-r from-emerald-300 from-10% via-sky-500 via-30% to-emerald-600 to-90% h-auto">
            
                <div className="col-span-1 bg-slate-50  lg:m-8 md:m-4 m-2 rounded-2xl"><NavBar></NavBar></div>
                <div className="col-span-3 bg-slate-50 lg:m-8 md:m-4 m-2 rounded-3xl"><Outlet></Outlet></div>
            
            
            
        </div>
    );
};

export default Root;