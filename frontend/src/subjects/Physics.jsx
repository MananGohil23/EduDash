import React from 'react'
import { useSubject } from '../context/SubjectContext';

const Physics = () => {
    const { chapter, selectedLecture, subTopic, setSubTopic, buttonActive, setButtonActive, subTopicSidebarActive, setSubTopicSidebarActive } = useSubject();
    const chapter1Content = ["Introduction to Optical Fibres", "Numerical Aperture of an Optical Fibre", "Problems on Numerical Aperture and Acceptance Angle", "Problems on V-Number and Modes of Propagation", "Step Index and Graded Index Fibres"];
    const chapter2Content = ["Introduction to Quantum Mechanics", "Phase Velocity and Group Velocity", "Heisenberg's Uncertainty Principle", "Schrödinger's Equation (Time Dependent)", "Schrödinger's Equation (Time Independent)", "Numerical Problems on Phase and Group Velocity"];
  return (
    <>
            <div className = {`text-4xl font-bold text-white ${selectedLecture === 1 ? 'block' : 'hidden'}`}>
                        <div className = "flex justify-start m-5 gap-4">
                            <div className = "flex-1 w-full max-w-[1200px]">
                                <div className = "rounded-lg text-white h-[600px] flex items-center justify-center">
                                        <h2 className = {`text-3xl justify-center font-bold ${subTopic === null ? 'block' : 'hidden'}`}>
                                            Please select a Chapter to continue...
                                        </h2>
                                        <div className = {`${chapter === 1 ? 'block' : 'hidden'}`}>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/4nZk_lP9lcg?si=SGQaeDHfDjoww5GV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 1 ? 'block' : 'hidden'}`}></iframe>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/jbwu6_cajoQ?si=cDdIfNJDH4eUm8DP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className={`PhyVideo rounded-lg video ${subTopic === 2 ? 'block' : 'hidden'}`}></iframe>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/YXeO0o1DU6s?si=qKUuQNj3Btg5aKcc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 3 ? 'block' : 'hidden'}`}></iframe>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/WbCMAQPpeMw?si=o4lJsG9_wj6L78A0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 4 ? 'block' : 'hidden'}`}></iframe>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/dHv3wcLu55U?si=JHbzGMb3bKHdF63o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 5 ? 'block' : 'hidden'}`}></iframe>
                                        </div>
                                        <div className = {`${chapter === 2 ? 'block' : 'hidden'}`}>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/mDh7KWFBPXQ?si=87xbx7A0td8-LLSY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 1 ? 'block' : 'hidden'}`}></iframe>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/IMNDVXfI5ok?si=apVSfGxOvJxz2uPR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 2 ? 'block' : 'hidden'}`}></iframe>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/ZL7vK1H4s5Y?si=6Gaiah0fRd7yEV2T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 3 ? 'block' : 'hidden'}`}></iframe>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/E-Lr3_LGTeY?si=x1jmQ30_hBj1R8Op" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 4 ? 'block' : 'hidden'}`}></iframe>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/tFsNT91wfG0?si=sA6dL7iQTQ3OfRZR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 5 ? 'block' : 'hidden'}`}></iframe>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/hF5ZYGqcREw?si=X82cd6k_31InnSKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 6 ? 'block' : 'hidden'}`}></iframe>
                                        </div>
                                </div >
                                <div className = {`${chapter === 1 ? 'block' : 'hidden'}`}>
                                    <div> {chapter1Content.map((subtopic , index) => (
                                        <h1 className = {`text-3xl font-bold ml-4 mt-4 ${subTopic === index+1 ? 'block' : 'hidden'}`} key = {index}> {subtopic} </h1>
                                        ))}
                                    </div>
                                </div>
                                <div className = {`${chapter === 2 ? 'block' : 'hidden'}`}>
                                    <div> {chapter2Content.map((subtopic , index) => (
                                        <h1 className = {`text-3xl font-bold ml-4 mt-4 ${subTopic === index+1 ? 'block' : 'hidden'}`} key = {index}> {subtopic} </h1>
                                        ))}
                                    </div>
                                </div>
                                <div className = {`${chapter === 3 ? 'block' : 'hidden'}`}>
                                    <div> {chapter1Content.map((subtopic , index) => (
                                        <h1 className = {`text-3xl font-bold ml-4 mt-4 ${subTopic === index+1 ? 'block' : 'hidden'}`} key = {index}> {subtopic} </h1>
                                        ))}
                                    </div>
                                </div>
                                <div className = {`${chapter === 4 ? 'block' : 'hidden'}`}>
                                    <div> {chapter1Content.map((subtopic , index) => (
                                        <h1 className = {`text-3xl font-bold ml-4 mt-4 ${subTopic === index+1 ? 'block' : 'hidden'}`} key = {index}> {subtopic} </h1>
                                        ))}
                                    </div>
                                </div>
                                <div className = {`${chapter === 5 ? 'block' : 'hidden'}`}>
                                    <div> {chapter1Content.map((subtopic , index) => (
                                        <h1 className = {`text-3xl font-bold ml-4 mt-4 ${subTopic === index+1 ? 'block' : 'hidden'}`} key = {index}> {subtopic} </h1>
                                        ))}
                                    </div>
                                </div>
                                <div className = {`${chapter === 6 ? 'block' : 'hidden'}`}>
                                    <div> {chapter1Content.map((subtopic , index) => (
                                        <h1 className = {`text-3xl font-bold ml-4 mt-4 ${subTopic === index+1 ? 'block' : 'hidden'}`} key = {index}> {subtopic} </h1>
                                        ))}
                                    </div>
                                </div>
                                <div className = "rounded-lg shadow-lg ring-1 ring-blue-400 shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-white mb-4 flex items-center justify-start">
                                        Description
                                    </h1>
                                    <p className = {`text-gray-300 text-lg ${chapter === null ? 'block' : 'hidden'}`}>
                                        We are going to learn about Physics. Physics is the branch of science concerned with the nature and properties of matter and energy. It encompasses a wide range of phenomena, from the smallest subatomic particles to the largest galaxies. In this course, we will explore various topics in physics, including mechanics, electromagnetism, thermodynamics, quantum mechanics, and more. Through lectures, demonstrations, and problem-solving sessions, we aim to develop a deep understanding of the fundamental principles that govern the physical world around us.
                                    </p>
                                    <p className = {`text-gray-300 text-lg ${chapter === 1 ? 'block' : 'hidden'}`}>
                                        This lecture covers the fundamentals of optical fibres, including their structure, working principle, and applications. It also delves into the concept of numerical aperture, which is crucial for understanding light propagation in fibres. The lecture includes problem-solving sessions on numerical aperture, acceptance angle, V-number, modes of propagation, and the differences between step index and graded index fibres. By the end of this lecture, students will have a solid understanding of optical fibres and their significance in modern communication systems.
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 2 ? 'block' : 'hidden'}`}>
                                        This lecture provides an introduction to quantum mechanics, covering key concepts such as wave-particle duality, the uncertainty principle, and the time-dependent and time-independent Schrödinger equations. It also explores phase and group velocity, which are essential for understanding wave propagation in quantum systems. The lecture includes numerical problems to reinforce the theoretical concepts and enhance problem-solving skills in quantum mechanics.
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 3 ? 'block' : 'hidden'}`}>
                                        This lecture explores the phenomena of interference and diffraction, which are fundamental to understanding wave behavior. It covers the principles of superposition, constructive and destructive interference, and the conditions for observing interference patterns. The lecture also delves into diffraction, including single-slit and double-slit diffraction, as well as diffraction gratings. By the end of this lecture, students will have a comprehensive understanding of how waves interact and the resulting patterns that emerge.
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 4 ? 'block' : 'hidden'}`}>
                                        This lecture focuses on sensors, which are devices that detect and respond to changes in the environment. It covers various types of sensors, including temperature sensors, pressure sensors, and optical sensors. The lecture also explores the principles of sensor operation, signal processing, and applications in different fields such as healthcare, automotive, and industrial automation. By the end of this lecture, students will have a solid understanding of sensor technology and its significance in modern society.   
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 5 ? 'block' : 'hidden'}`}>
                                        This lecture provides an overview of lasers, covering their principles of operation, types, and applications. It explores the concept of stimulated emission, population inversion, and the different components of a laser system. The lecture also delves into various types of lasers, including solid-state lasers, gas lasers, and semiconductor lasers. By the end of this lecture, students will have a comprehensive understanding of laser technology and its wide-ranging applications in fields such as medicine, communication, and manufacturing.
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 6 ? 'block' : 'hidden'}`}>
                                        This lecture covers the fundamentals of electrodynamics, which is the study of electric and magnetic fields and their interactions with charged particles. It explores Maxwell's equations, which describe how electric and magnetic fields are generated and altered by charges and currents. The lecture also delves into electromagnetic waves, their propagation, and applications in communication systems. By the end of this lecture, students will have a solid understanding of electrodynamics and its significance in modern physics and engineering.
                                    </p>
                                </div>
                                <div className = "ring-1 ring-blue-400 rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-white mb-4 flex items-center justify-start">
                                        Resources
                                    </h1>
                                </div>
                                <div className = "ring-1 ring-blue-400 rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-white mb-4 flex items-center justify-start">
                                        Comments
                                    </h1>
                                    <div className = "flex justify-between">
                                        <input type = "text" placeholder = "Add a comment..." className = "w-full max-w-[1200px] text-lg border border-gray-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-gray-400" />
                                        <button className = "ml-4 px-4 text-lg py-2 bg-slate-900 text-white rounded-full hover:bg-red-600 transition">
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className = {`fixed top-24 right-4 ${subTopicSidebarActive ? 'hidden' : 'block'}`}>
                                    <button className = {`flex justify-center bg-slate-900 text-white text-3xl rounded-lg shadow-lg shadow-slate-950/30 w-10 h-10 ${chapter === null ? 'hidden' : 'block'}`} onClick={() => {setSubTopicSidebarActive(!subTopicSidebarActive); document.getElementsByClassName("PhyVideo")[subTopic === null ? 0 : subTopic - 1].width = 900; document.getElementsByClassName("PhyVideo")[subTopic === null ? 0 : subTopic - 1].height = 600}}>
                                        {'<'}
                                    </button>     
                            </div>
                            <div className = {`rounded-lg shadow-lg shadow-slate-950/30 w-[300px] p-4 ${subTopicSidebarActive ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                                <div className = "flex bg-gradient-to-r from-slate-900 to-blue-900 rounded-lg text-white justify-start gap-8 p-2 mb-4"> 
                                    <button className = "ml-2 mb-1 text-2xl" onClick={() => {setSubTopicSidebarActive(!subTopicSidebarActive); document.getElementsByClassName("PhyVideo")[subTopic === null ? 0 : subTopic - 1].width = 1200}}>
                                        |||
                                    </button>
                                    <h1 className = "text-2xl font-bold">
                                        Sub-Topics
                                    </h1>
                                </div>
                                <div className = {`${chapter === 1 ? 'block' : 'hidden'}`}>
                                    <div className = {`flex flex-col gap-4`}>{chapter1Content.map((subtopic, index) => (
                                            <h2 className = {`rounded-lg p-4 text-xl font-bold ${buttonActive === index+1 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-blue-500'}`} onClick = {() => {setSubTopic(index + 1); setButtonActive(index + 1)}} key = {index}>
                                                {subtopic}
                                            </h2>
                                        ))}
                                    </div>
                                </div>
                                <div className = {`${chapter === 2 ? 'block' : 'hidden'}`}>
                                    <div className = {`flex flex-col gap-4`}>{chapter2Content.map((subtopic, index) => (
                                            <h2 className = {`rounded-lg p-4 text-xl font-bold ${buttonActive === index+1 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-blue-500'}`} onClick = {() => {setSubTopic(index + 1); setButtonActive(index + 1)}} key = {index}>
                                                {subtopic}
                                            </h2>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default Physics
