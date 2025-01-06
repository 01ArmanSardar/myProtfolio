import { FaBootstrap } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { BsFillCCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Skill = () => {
    return (
        <div className="">
            <div className="p-10">
            <h1 className="text-3xl font-serif">Progrraming Language and Tools  |</h1>
            <div className="flex "> <FaBootstrap className="text-6xl m-2 " />
                <RiTailwindCssFill className="text-6xl m-2" />
                <FaPython className="text-6xl m-2" />
                <BsFillCCircleFill className="text-6xl m-2" />
                <FaJsSquare className="text-6xl m-2" />
                <FaHtml5 className="text-6xl m-2" />
                <FaCss3Alt className="text-6xl m-2" />
                <FaReact className="text-6xl m-2" />
                <DiDjango className="text-6xl m-2" />
                <SiMysql className="text-6xl m-2" /></div>
                </div>
                <div className="p-14">
            <h1 className="text-4xl text-green-300">workFlow</h1>
            
                <li className="text-2xl">Responsive Desgin</li>
                <li className="text-2xl">first mobile</li>
                <li className="text-2xl">Problem Solving <strong>On</strong> <Link className="btn btn-outline btn-info" to={'https://leetcode.com/u/armansardar0109/'}>LeetCode</Link> <Link className="btn btn-outline btn-info"  to={'https://www.naukri.com/code360/profile/7f0f3f31-05ba-4014-bc25-07416ad054bc'}>CodingNinja</Link></li>
               
            
            </div>


        </div>
    );
};

export default Skill;