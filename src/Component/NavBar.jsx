import { Link, NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import Myimage from '../../public/Picsart_23-08-27_20-55-51-979.jpg'
import './NavBar.css'
const NavBar = () => {
    return (
        <div className="text-center">
            <img className="rounded-full lg:w-4/5 md:w-2/5 w-4/5 m-auto" src={Myimage} alt="" />
            <h1  className=" name text-3xl "> <span className="text-green-500">Arman</span> Sardar</h1>
            <div className="flex justify-evenly">
                <Link to={'https://www.linkedin.com/in/arman-sardar-57774628a/'} target="_blank"> <FaLinkedin  className="text-teal-800 text-3xl"/></Link>
                <Link target="_blank" to={'https://github.com/01ArmanSardar'}><FaSquareGithub className="text-teal-800 text-2xl"/></Link>
                <Link target="_blank" to={'https://www.facebook.com/mdarman.sardar.7?mibextid=ZbWKwL'}><FaFacebook className="text-teal-800 text-1xl"/></Link>
            
            
            </div>
            {/* <NavLink className={' btn btn-outline btn-info m-1' }   to={'/'}>Home</NavLink> <br /> */}
            <NavLink  className={' btn btn-outline btn-info m-1' }  to={'/about'}>about</NavLink> <br />
            
            <NavLink className={' btn btn-outline btn-info m-1' }  to={'/project'}>project</NavLink> <br />
            <NavLink className={' btn btn-outline btn-info m-1' }  to={'/skill'}>Skill</NavLink>
        </div>
    );
};

export default NavBar;