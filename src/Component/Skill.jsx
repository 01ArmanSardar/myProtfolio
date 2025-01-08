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
import 'animate.css';
import './Skill.css'
// import { motion } from "framer-motion"
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
            <h1  className=" work text-4xl  p-2 text-green-300 text-center animate__animated animate__bounce">workFlow.....</h1>
            
                <li className="text-2xl">Responsive Desgin</li>
                <li className="text-2xl">first mobile</li>
                <li className="text-2xl">Problem Solving <strong>On</strong> <Link className="btn btn-outline btn-info" target="_blank" to={'https://leetcode.com/u/armansardar0109/'}>LeetCode</Link> <Link className="btn btn-outline btn-info" target="_blank" to={'https://www.naukri.com/code360/profile/7f0f3f31-05ba-4014-bc25-07416ad054bc'}>CodingNinja</Link> <Link className="btn btn-outline btn-info" target="_blank" to={'https://codeforces.com/profile/MD_ARMAN_SARDAR01?csrf_token=7c41109404d6b4079839d4fc62dec310'}>codeforces</Link> </li>
                <li className="text-2xl">Hacker Rank Contest List : <Link target="_blank" to={'https://www.hackerrank.com/contests/assignment-01-a-introduction-to-c-programming-a-batch-03/challenges'}>C</Link> <Link target="_blank" to={'https://www.hackerrank.com/contests/assignment-02lab-a-introduction-to-c-programming-a-batch-03/challenges'}>1</Link> <Link target="_blank" to={'https://www.hackerrank.com/contests/assignment-03lab-a-introduction-to-c-programming-a-batch-03/challenges'}>2</Link> <Link target="_blank" to={'https://www.hackerrank.com/contests/final-exam-a-introduction-to-c-programming-a-batch-03/challenges'}>3</Link> <Link target="_blank" to={'https://www.hackerrank.com/contests/final-exam-a-introduction-to-c-for-dsa-a-batch-03/challenges'}>C+</Link> | <Link target="_blank" to={'https://www.hackerrank.com/contests/assignment-01-a-basic-data-structures-a-batch-03/challenges'}>DSA</Link> <Link target="_blank" to={'https://www.hackerrank.com/contests/assignment-02-a-basic-data-structures-a-batch-03/challenges '}>1</Link> <Link target="_blank" to={'https://www.hackerrank.com/contests/mid-term-exam-a-basic-data-structures-a-batch-03/challenges'}>2</Link> <Link target="_blank" to={'https://www.hackerrank.com/contests/assignment-03-a-basic-data-structures-a-batch-03/challenges'}>3</Link> <Link target="_blank" to={'https://www.hackerrank.com/contests/assignment-04-a-basic-data-structures-a-batch-03/challenges'}>4</Link> <Link target="_blank" to={'https://www.hackerrank.com/contests/final-exam-a-basic-data-structures-a-batch-03/challenges'}>5</Link> | <Link target="_blank" to={'https://www.hackerrank.com/contests/assignment-02-a-introduction-to-algorithms-a-batch-03/challenges'}>ALgo</Link> <Link target="_blank" to={'https://www.hackerrank.com/contests/mid-term-exam-a-introduction-to-algorithms-a-batch-03/challenges'}>1</Link> <Link target="_blank" to={'https://www.hackerrank.com/contests/assignment-04-a-introduction-to-algorithms-a-batch-03/challenges'}>2</Link> <Link target="_blank" to={'https://www.hackerrank.com/contests/assignment-04-a-introduction-to-algorithms-a-batch-03-1/challenges'}>3</Link> <Link target="_blank" to={'https://www.hackerrank.com/contests/final-exam-a-introduction-to-algorithms-a-batch-03/challenges'}>4</Link> </li>
               
            
            </div>


        </div>
    );
};

export default Skill;