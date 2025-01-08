"use client"

import * as motion from "motion/react-client"

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = i * 0.5
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        }
    },
}

export default function PathDrawing() {
    return (
        <motion.svg
            width="600"
            height="600"
            viewBox="0 0 600 600"
            initial="hidden"
            animate="visible"
            style={image}
        >
            <motion.circle
                className="circle-path"
                cx="100"
                cy="100"
                r="80"
                stroke="#ff0088"
                variants={draw}
                custom={1}
                style={shape}
            />
            <motion.text
            x="100"
            y="110"
            textAnchor="middle"
            fontSize={"20"}
            fill="#ff0088"
            initial={{opacity:0}}
            animate={{opacity:1}}
        transition={{delay:0.5,duration:1}}

            >

                WELCOME
            </motion.text>
            <motion.line
                x1="220"
                y1="30"
                x2="360"
                y2="170"
                stroke="#4ff0b7"
                variants={draw}
                custom={2}
                style={shape}
            />
            <motion.line
                x1="220"
                y1="170"
                x2="360"
                y2="30"
                stroke="#4ff0b7"
                variants={draw}
                custom={2.5}
                style={shape}
            />
            <motion.rect
                width="140"
                height="140"
                x="410"
                y="30"
                rx="20"
                stroke="#0d63f8"
                variants={draw}
                custom={3}
                style={shape}
            />
            <motion.circle
                cx="100"
                cy="300"
                r="80"
                stroke="#0d63f8"
                variants={draw}
                custom={2}
                style={shape}
            />
             <motion.text
            x="100"
            y="310"
            textAnchor="middle"
            fontSize={"20"}
            fill="#0d63f8"
            initial={{opacity:0}}
            animate={{opacity:1}}
        transition={{delay:1,duration:1}}

            >

                SIR
            </motion.text>
            <motion.line
                x1="220"
                y1="230"
                x2="360"
                y2="370"
                stroke="#ff0088"
                custom={3}
                variants={draw}
                style={shape}
            />
            <motion.line
                x1="220"
                y1="370"
                x2="360"
                y2="230"
                stroke="#ff0088"
                custom={3.5}
                variants={draw}
                style={shape}
            />
            <motion.rect
                width="140"
                height="140"
                x="410"
                y="230"
                rx="20"
                stroke="#4ff0b7"
                custom={4}
                variants={draw}
                style={shape}
            />
            <motion.circle
                cx="100"
                cy="500"
                r="80"
                stroke="#4ff0b7"
                variants={draw}
                custom={3}
                style={shape}
            />
            <motion.line
                x1="220"
                y1="430"
                x2="360"
                y2="570"
                stroke="#0d63f8"
                variants={draw}
                custom={4}
                style={shape}
            />
            <motion.line
                x1="220"
                y1="570"
                x2="360"
                y2="430"
                stroke="#0d63f8"
                variants={draw}
                custom={4.5}
                style={shape}
            />
            <motion.rect
                width="140"
                height="140"
                x="410"
                y="430"
                rx="20"
                stroke="#ff0088"
                variants={draw}
                custom={5}
                style={shape}
            />
        </motion.svg>
    )
}

/**
 * ==============   Styles   ================
 */

const image= {
    maxWidth: "80vw",
}

const shape = {
    strokeWidth: 10,
    strokeLinecap: "round",
    fill: "transparent",
}



// import { color } from "motion/react"
// import * as motion from "motion/react-client"

// const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" }

// export default function MotionPath() {
//     return (
//         <div style={{ position: "relative" }}> 
//             <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
//                 <motion.path
//                     d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5"
//                     fill="transparent"
//                     strokeWidth="12"
//                     stroke="var(--hue-6-transparent)"
//                     strokeLinecap="round"
//                     initial={{ pathLength: 0.001 }}
//                     animate={{ pathLength: 1 }}
//                     transition={transition}
//                 />
//             </svg>
            
//             <motion.div 
//                 style={box}
//                 initial={{ offsetDistance: "0%", scale: 2.5 }}
//                 animate={{ offsetDistance: "100%", scale: 1 }}
//                 transition={transition}
//             >
//                 <h1 style={textStyle}>Welcome Sir</h1>
//                 </motion.div>
//         </div>
//     )
// }

// /**
//  * ==============   Styles   ================
//  */

// const box = {
//     width: 100,
//     height: 50,
//     backgroundColor: "#4ff0b7",
//     borderRadius: 10,
//     position: "absolute",
//     top: 0,
//     left: 0,
//     display:"flex",
//     justifyContent:"center",
//     alignItems:"center",
//     offsetPath: `path("M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5")`,

   
// }
// const textStyle={
//     color:"#ffffff",
//     fontSize:"16px",
//     textAlign:"center",
// }
