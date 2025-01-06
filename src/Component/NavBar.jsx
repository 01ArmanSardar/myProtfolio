import { NavLink } from "react-router-dom";

import Myimage from '../../public/Picsart_23-08-27_20-55-51-979.jpg'
const NavBar = () => {
    return (
        <div className="text-center">
            <img className="rounded-full w-3/4 m-auto" src={Myimage} alt="" />
            <NavLink  to={'/'}>Home</NavLink> <br />
            <NavLink to={'/about'}>about</NavLink> <br />
            <NavLink to={'/blog'}>blog</NavLink> <br />
            <NavLink to={'/project'}>project</NavLink>
        </div>
    );
};

export default NavBar;