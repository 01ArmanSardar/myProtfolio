import { AiFillApi } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

const About = () => {
    return (
        <div className="">
            <div className=" p-6 text-center font-serif">
                <p>Hi! This is ARMAN Currently, I have completed my Diploma in Electronics Engineering from Lakshmipur Polytechnic Institute. I have deep interest in Development and also I have completed CSE Fundamentals with Phitron</p>
            </div>
            <div className="p-5 bg-slate-400">
                <h1 className="text-2xl">What would i offer</h1>
                <div className="grid grid-cols-2 gap-2 text-center">
                    <div className=" bg-base-200 rounded-xl flex p-7">
                    <RiComputerLine className="text-5xl text-emerald-600" />
                        <h1> Frontend Development
                            I can build a beautiful and scalable SPA using HTML,CSS, React.js, Next.js and Jquery</h1>
                    </div>
                    <div className="bg-base-200 rounded-xl flex p-7">
                    <FaDatabase className="text-3xl text-emerald-600" />
                        <h1>Backend Development
                            handle database, server, api using Express & other popular frameworks</h1>
                    </div>
                    <div className="bg-base-200 rounded-xl flex p-7">
                    <AiFillApi className="text-3xl text-emerald-600"/>
                        <h1>API Development
                        I can develop robust REST API using Django</h1>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default About;