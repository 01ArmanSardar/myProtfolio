import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import Myimage from '../../public/Picsart_23-08-27_20-55-51-979.jpg'
import './NavBar.css'
const NavBar = () => {
    return (
        <div className="text-center">
            <img className="rounded-full w-3/4 m-auto" src={Myimage} alt="" />
            <h1  className=" name text-3xl "> <span className="text-green-500">Arman</span> Sardar</h1>
            <div className="flex justify-evenly">
            <FaLinkedin  className="text-teal-800 text-3xl"/>
            <FaSquareGithub className="text-teal-800 text-2xl"/>
            <FaFacebook className="text-teal-800 text-1xl"/>
            </div>
            {/* <NavLink className={' btn btn-outline btn-info m-1' }   to={'/'}>Home</NavLink> <br /> */}
            <NavLink  className={' btn btn-outline btn-info m-1' }  to={'/about'}>about</NavLink> <br />
            
            <NavLink className={' btn btn-outline btn-info m-1' }  to={'/project'}>project</NavLink> <br />
            <NavLink className={' btn btn-outline btn-info m-1' }  to={'/skill'}>Skill</NavLink>
        </div>
    );
};

export default NavBar;