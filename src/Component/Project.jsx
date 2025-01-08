import { Link } from "react-router-dom";
import { FaSquareGithub } from "react-icons/fa6";
const Project = () => {

    return (
        <div className="grid grid-cols-2">
            <div className="grid-cols-1 p-9">
                <Link className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-success" target="_blank" to={'https://dreamhouse-bf644.web.app/'}>DreamHouse</Link>
                <Link target="_blank" to={'https://github.com/01ArmanSardar/DreamHouse'} ><FaSquareGithub className="text-xl"></FaSquareGithub></Link>
                <div className="collapse bg-base-200 m-5">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title text-xl font-medium">description</div>
                    <div className="collapse-content">
                        
                            <li>Implimentend user-friendly registration with Password toggle visivility (show/hide)</li>
                            <li>Ensured presistent login sessions using Firebase onAuthSTateChanged method</li>
                            <li>added protected routes for Estate Details to restrict acces to logged-in users only</li>
                            <li>Developed an Estates section showcasing categorized property
                                <li className="mx-8">image ,title ,price ,status,(sale/rent),location,area and facilities</li>
                                <li className="mx-8">A  viewProperty button to Navigate to detaild estate page</li>
                            <li>included email-based and Google login authentication with password validation</li>    
                            <li>Created a conditional Navbar showing user info when logged in or a logout button otherwise</li>
                            <li>Added Toast/SweetAlert notifications for succcesfully actions and error handeling</li>
                            <li>Developed a custom 404 page for non-existent routes to ensure seamless navigation</li>

                            </li>
                        
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">tools and tech</div>
                    <div className="collapse-content">
                        <strong className="btn bg-violet-300">Tailwind</strong> <strong className="btn bg-violet-300">Firebase Auth</strong> <strong className="btn bg-violet-300">React</strong><strong className="btn bg-violet-300">Express</strong> <strong className="btn bg-violet-300">Fast Marquee</strong> <strong className="btn bg-violet-300">DaisyUi</strong> <strong className="btn bg-violet-300">Animate.css</strong>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Project;