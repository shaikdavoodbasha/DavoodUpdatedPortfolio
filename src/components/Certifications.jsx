// import React, { useEffect, useState } from "react";
// import { motion, useMotionValue } from "framer-motion";
// import img1 from "../assets/img1.png"
// import img3 from "../assets/img3.png"
// import img4 from "../assets/img4.png"
// import img5 from "../assets/img5.png"
// import img7 from "../assets/img7.png"
// import img8 from "../assets/img8.png"
// import img10 from "../assets/img10.png"



// const imgs = [
//     img3,
//     img1,
//     img4,
//     img5,
//     img7,
//     img8,
//     img10
// ];

// const ONE_SECOND = 1000;
// const AUTO_DELAY = ONE_SECOND * 10;
// const DRAG_BUFFER = 50;

// const SPRING_OPTIONS = {
//     type: "spring",
//     mass: 3,
//     stiffness: 400,
//     damping: 50,
// };

// export const Certifications = () => {
//     const [imgIndex, setImgIndex] = useState(0);

//     const dragX = useMotionValue(0);

//     useEffect(() => {
//         const intervalRef = setInterval(() => {
//             const x = dragX.get();

//             if (x === 0) {
//                 setImgIndex((pv) => {
//                     if (pv === imgs.length - 1) {
//                         return 0;
//                     }
//                     return pv + 1;
//                 });
//             }
//         }, AUTO_DELAY);

//         return () => clearInterval(intervalRef);
//     }, []);

//     const onDragEnd = () => {
//         const x = dragX.get();

//         if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
//             setImgIndex((pv) => pv + 1);
//         } else if (x >= DRAG_BUFFER && imgIndex > 0) {
//             setImgIndex((pv) => pv - 1);
//         }
//     };

//     return (
//         <div className=" w-full h-full   relative overflow-hidden bg-[#000000] p-8 px-[3vw]">
//             <div className="flex justify-start items-start pb-5">
//                 <p className="text-[40px] bg-custom-red-gradient bg-clip-text text-transparent">CERTIFICATIONS</p>
//             </div>
//             <motion.div
//                 drag="x"
//                 dragConstraints={{
//                     left: 0,
//                     right: 0,
//                 }}
//                 style={{
//                     x: dragX,
//                 }}
//                 animate={{
//                     translateX: `-${imgIndex * 100}%`,
//                 }}
//                 transition={SPRING_OPTIONS}
//                 onDragEnd={onDragEnd}
//                 className="flex cursor-grab items-center active:cursor-grabbing"
//             >
//                 <Images imgIndex={imgIndex} />
//             </motion.div>

//             <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
//             <GradientEdges />
//         </div>
//     );
// };

// const Images = ({ imgIndex }) => {
//     return (
//         <>
//             {imgs.map((imgSrc, idx) => {
//                 return (
//                     <motion.div
//                         key={idx}
//                         style={{
//                             backgroundImage: `url(${imgSrc})`,
//                             backgroundSize: "contain",
//                             backgroundPosition: "center",
//                             backgroundRepeat:"no-repeat",
//                             width:"1300px",
//                             height:"500px",
//                         }}
//                         animate={{
//                             scale: imgIndex === idx ? 0.95 : 0.85,
//                         }}
//                         transition={SPRING_OPTIONS}
//                         className="aspect-video w-screen shrink-0 rounded-xl  object-cover"
//                     />
//                 );
//             })}
//         </>
//     );
// };

// const Dots = ({ imgIndex, setImgIndex }) => {
//     return (
//         <div className="mt-4 flex w-full justify-center gap-2">
//             {imgs.map((_, idx) => {
//                 return (
//                     <button
//                         key={idx}
//                         onClick={() => setImgIndex(idx)}
//                         className={`h-3 w-3 rounded-full transition-colors ${idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
//                             }`}
//                     />
//                 );
//             })}
//         </div>
//     );
// };

// const GradientEdges = () => {
//     return (
//         <>
//             <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
//             <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
//         </>
//     );
// };
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"


const imgs = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};

export const Certifications = () => {
    const [imgIndex, setImgIndex] = useState(0);

    const dragX = useMotionValue(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragX.get();

            if (x === 0) {
                setImgIndex((pv) => {
                    if (pv === imgs.length - 1) {
                        return 0;
                    }
                    return pv + 1;
                });
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, []);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
            setImgIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((pv) => pv - 1);
        }
    };

    return (
        <div className="relative overflow-hidden  bg-[#000000] py-8 ">
            <div className="flex justify-start items-start pb-5 px-[2vw] sm:px-[3vw] md:px-[5vw] ">
                <p className="text-[40px] bg-custom-red-gradient bg-clip-text text-transparent">CERTIFICATIONS</p>
            </div>
            <motion.div
                drag="x"
                dragConstraints={{
                    left: 0,
                    right: 0,
                }}
                style={{
                    x: dragX,
                }}
                animate={{
                    translateX: `-${imgIndex * 100}%`,
                }}
                transition={SPRING_OPTIONS}
                onDragEnd={onDragEnd}
                className="flex cursor-grab items-center active:cursor-grabbing"
            >
                <Images imgIndex={imgIndex} />
            </motion.div>

            <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
            <GradientEdges />
        </div>
    );
};

const Images = ({ imgIndex }) => {
    return (
        <>
            {imgs.map((imgSrc, idx) => {
                return (
                    <motion.div
                        key={idx}
                        style={{
                            backgroundImage: `url(${imgSrc})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        animate={{
                            scale: imgIndex === idx ? 0.95 : 0.85,
                        }}
                        transition={SPRING_OPTIONS}
                        className="aspect-video w-screen shrink-0 rounded-xl bg-neutral-800 object-cover"
                    />
                );
            })}
        </>
    );
};

const Dots = ({ imgIndex, setImgIndex }) => {
    return (
        <div className="mt-4 flex w-full justify-center gap-2">
            {imgs.map((_, idx) => {
                return (
                    <button
                        key={idx}
                        onClick={() => setImgIndex(idx)}
                        className={`h-3 w-3 rounded-full transition-colors ${idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
                            }`}
                    />
                );
            })}
        </div>
    );
};

const GradientEdges = () => {
    return (
        <>
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
        </>
    );
};