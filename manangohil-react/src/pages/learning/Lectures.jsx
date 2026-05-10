import React from 'react'
import { useState } from 'react';
import {FaChevronDown , FaChevronUp} from 'react-icons/fa';
const Lectures = () => {
    const [selectedLecture, setSelectedLecture] = useState(null);
    const [subTopic , setSubTopic] = useState(null);
    const [buttonActive, setButtonActive] = useState(null);
    const [buttonActiveLecture, setButtonActiveLecture] = useState(null);
    const [subTopicSidebarActive , setSubTopicSidebarActive] = useState(true);
    const [dropDown, setDropDown] = useState(null);
    const [chapter , setChapter] = useState(null);
    const [chapterActive , setChapterActive] = useState(null);

    const physics = ["1. Fibre Optics" , "2. Quantum Mechanics" , "3. Interference and Diffraction" , "4. Sensors" , "5. Lasers" , "6. Electodynamics"];
    const maths = ["1. Algebra" , "2. Calculus" , "3. Geometry" , "4. Trigonometry"];
    const bee = ["1. AC Circuits" , "2. Digital Electronics" , "3. Logic Gates" , "4. Communication Systems"];
    const cem = ["1. Strength of Materials" , "2. Fluid Mechanics" , "3. Structural Analysis" , "4. Geotechnical Engineering"];
    const chem = ["1. Organic Chemistry" , "2. Inorganic Chemistry" , "3. Physical Chemistry" , "4. Analytical Chemistry"];
    const clanguage = ["1. Introduction to C" , "2. Variables and Data Types" , "3. Arrays" , "4. Pointers" , "5. Functions" , "6. Structures" , "7. File Handling"];
    const java = ["1. Introduction to Java" , "2. Object-Oriented Programming" , "3. Inheritance and Polymorphism" , "4. Exception Handling" , "5. Collections Framework" , "6. Multithreading" , "7. JavaFX"];
    return (
        <>
            <div className = "bg-gray-100 h-full flex">
                <div className = "bg-white w-[350px] shadow-lg rounded-lg p-6">
                    <h1 className = "text-4xl font-bold mb-6 text-slate-900 items-center flex justify-center">
                        Subjects
                    </h1>
                    <div className = "flex flex-col gap-4 transition">
                        <div className = {`rounded-lg shadow-md text-slate-900 p-4 hover:scale-[110%] ${buttonActiveLecture === 1 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`} onClick={() => {setSelectedLecture(1); setSubTopic(null)}}>
                            <div className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(1); document.getElementsByClassName("PhyVideo")[0].width = 900; document.getElementsByClassName("video").height = 600}}>
                                <div className = "flex flex-col gap-2">
                                    <div className = "flex items-center justify-between gap-2" onClick = {() => {setSubTopicSidebarActive(false);}}>   
                                        <h1 onClick={() => {setChapter(null); setChapterActive(null);}}>Physics</h1>
                                        <button onClick={() => setDropDown(dropDown === 1 ? 0 : 1)}>
                                            {dropDown === 1 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className = {`${dropDown === 1 ? 'block' : 'hidden'}`}>
                                        <div className = "flex flex-col gap-2 bg-white text-slate-900 p-2 rounded-md cursor-pointer">{physics.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-slate-900 text-white' : 'hover:bg-gray-300'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1); setSubTopicSidebarActive(true)}} key={index}>{item}</p>))}
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className = {`rounded-lg shadow-md text-slate-900 p-4 hover:scale-[110%] ${buttonActiveLecture === 2 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`} onClick={() => {setSelectedLecture(2); setSubTopic(null)}}>
                            <div className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(2); setSubTopic(null); setButtonActive(null); setSubTopicSidebarActive(true); document.getElementsByClassName("video")[0].width = 900; document.getElementsByClassName("video").height = 600}}>
                                <div className = "flex flex-col gap-2">
                                    <div className = "flex items-center justify-between gap-2" onClick = {() => {setSubTopicSidebarActive(false);}}>   
                                        <h1 onClick={() => {setChapter(null); setChapterActive(null);}}>Mathematics</h1>
                                        <button onClick={() => setDropDown(dropDown === 2 ? 0 : 2)}>
                                            {dropDown === 2 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className = {`${dropDown === 2 ? 'block' : 'hidden'}`}>
                                        <div className = "flex flex-col gap-2 bg-white text-slate-900 p-2 rounded-md cursor-pointer">{maths.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-slate-900 text-white' : 'hover:bg-gray-300'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1)}} key={index}>{item}</p>))}
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className = {`rounded-lg shadow-md text-slate-900 p-4 hover:scale-[110%] ${buttonActiveLecture === 3 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`} onClick={() => {setSelectedLecture(3); setSubTopic(null)}}>
                            <h2 className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(3); setSubTopic(null); setButtonActive(null); setSubTopicSidebarActive(true); document.getElementsByClassName("video")[0].width = 900; document.getElementsByClassName("video").height = 600}}>
                                <div className = "flex flex-col gap-2">
                                    <div className = "flex items-center justify-between gap-2">   
                                        <h1 onClick={() => {setChapter(null); setChapterActive(null);}}>BEE&DE</h1>
                                        <button onClick={() => setDropDown(dropDown === 3 ? 0 : 3)}>
                                            {dropDown === 3 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className = {`${dropDown === 3 ? 'block' : 'hidden'}`}>
                                        <div className = "flex flex-col gap-2 bg-white text-slate-900 p-2 rounded-md cursor-pointer">{bee.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-slate-900 text-white' : 'hover:bg-gray-300'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1)}} key={index}>{item}</p>))}
                                        </div>
                                    </div>
                                </div>
                            </h2>    
                        </div>
                        <div className = {`rounded-lg shadow-md text-slate-900 p-4 hover:scale-[110%] ${buttonActiveLecture === 4 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`} onClick={() => {setSelectedLecture(4); setSubTopic(null)}}>
                            <h2 className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(4); setSubTopic(null); setButtonActive(null); setSubTopicSidebarActive(true); document.getElementsByClassName("video")[0].width = 900; document.getElementsByClassName("video").height = 600}}>
                                <div className = "flex flex-col gap-2">
                                    <div className = "flex items-center justify-between gap-2">   
                                        <h1 onClick={() => {setChapter(null); setChapterActive(null);}}>CEM</h1>
                                        <button onClick={() => setDropDown(dropDown === 4 ? 0 : 4)}>
                                            {dropDown === 4 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className = {`${dropDown === 4 ? 'block' : 'hidden'}`}>
                                        <div className = "flex flex-col gap-2 bg-white text-slate-900 p-2 rounded-md cursor-pointer">{cem.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-slate-900 text-white' : 'hover:bg-gray-300'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1)}} key={index}>{item}</p>))}
                                        </div>
                                    </div>
                                </div>
                            </h2>    
                        </div>
                        <div className = {`rounded-lg shadow-md text-slate-900 p-4 hover:scale-[110%] ${buttonActiveLecture === 5 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`} onClick={() => {setSelectedLecture(5); setSubTopic(null)}}>
                            <h2 className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(5); setSubTopic(null); setButtonActive(null); setSubTopicSidebarActive(true); document.getElementsByClassName("video")[0].width = 900; document.getElementsByClassName("video").height = 600}}>
                                <div className = "flex flex-col gap-2">
                                    <div className = "flex items-center justify-between gap-2">   
                                        <h1 onClick={() => {setChapter(null); setChapterActive(null);}}>Chemistry</h1>
                                        <button onClick={() => setDropDown(dropDown === 5 ? 0 : 5)}>
                                            {dropDown === 5 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className = {`${dropDown === 5 ? 'block' : 'hidden'}`}>
                                        <div className = "flex flex-col gap-2 bg-white text-slate-900 p-2 rounded-md cursor-pointer">{chem.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-slate-900 text-white' : 'hover:bg-gray-300'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1)}} key={index}>{item}</p>))}
                                        </div>
                                    </div>
                                </div>
                            </h2>    
                        </div>
                        <div className = {`rounded-lg shadow-md text-slate-900 p-4 hover:scale-[110%] ${buttonActiveLecture === 6 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`} onClick={() => {setSelectedLecture(6); setSubTopic(null)}}>
                            <h2 className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(6); setSubTopic(null); setButtonActive(null); setSubTopicSidebarActive(true); document.getElementsByClassName("video")[0].width = 900; document.getElementsByClassName("video").height = 600}}>
                                <div className = "flex flex-col gap-2">
                                    <div className = "flex items-center justify-between gap-2">   
                                        <h1 onClick={() => {setChapter(null); setChapterActive(null);}}>C Programming</h1>
                                        <button onClick={() => setDropDown(dropDown === 6 ? 0 : 6)}>
                                            {dropDown === 6 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className = {`${dropDown === 6 ? 'block' : 'hidden'}`}>
                                        <div className = "flex flex-col gap-2 bg-white text-slate-900 p-2 rounded-md cursor-pointer">{clanguage.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-slate-900 text-white' : 'hover:bg-gray-300'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1)}} key={index}>{item}</p>))}
                                        </div>
                                    </div>
                                </div>
                            </h2>    
                        </div>
                        <div className = {`rounded-lg shadow-md text-slate-900 p-4 hover:scale-[110%] ${buttonActiveLecture === 7 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`} onClick={() => {setSelectedLecture(7); setSubTopic(null)}}>
                            <h2 className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(7); setSubTopic(null); setButtonActive(null); setSubTopicSidebarActive(true); document.getElementsByClassName("video")[0].width = 900; document.getElementsByClassName("video").height = 600}}>
                                <div className = "flex items-center justify-between gap-2">   
                                        <h1 onClick={() => {setChapter(null); setChapterActive(null);}}>OOP Using Java</h1>
                                        <button onClick={() => setDropDown(dropDown === 7 ? 0 : 7)}>
                                            {dropDown === 7 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className = {`${dropDown === 7 ? 'block' : 'hidden'}`}>
                                        <div className = "flex flex-col gap-2 bg-white text-slate-900 p-2 rounded-md cursor-pointer">{java.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-slate-900 text-white' : 'hover:bg-gray-300'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1)}} key={index}>{item}</p>))}
                                        </div>
                                    </div>
                            </h2>    
                        </div>
                    </div>
                </div>
                <div className = {`${selectedLecture === null ? 'block' : 'hidden'} text-4xl font-bold text-slate-900 items-center flex justify-center w-full`}>
                    <h1 >Please select a subject to view its content</h1>
                </div>
                <div className = {`${selectedLecture === null ? 'hidden' : 'rounded-lg flex'}`}>
                    <div className = {`text-4xl font-bold text-white ${selectedLecture === 1 ? 'block' : 'hidden'}`}>
                        <div className = "flex justify-start m-5 gap-4">
                            <div className = "flex-1 w-full max-w-[1200px]">
                                <div className = "rounded-lg text-slate-900 h-[600px] flex items-center justify-center">
                                        <h2 className = {`text-3xl font-bold ${subTopic === null ? 'block' : 'hidden'}`}>
                                            Please select a Sub-Topic to continue...
                                        </h2>
                                        <div className = {`${chapter === 1 ? 'block' : 'hidden'}`}>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/4nZk_lP9lcg?si=SGQaeDHfDjoww5GV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 1 ? 'block' : 'hidden'}`}></iframe>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/jbwu6_cajoQ?si=cDdIfNJDH4eUm8DP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className={`PhyVideo rounded-lg video ${subTopic === 2 ? 'block' : 'hidden'}`}></iframe>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/YXeO0o1DU6s?si=qKUuQNj3Btg5aKcc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 3 ? 'block' : 'hidden'}`}></iframe>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/WbCMAQPpeMw?si=o4lJsG9_wj6L78A0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 4 ? 'block' : 'hidden'}`}></iframe>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/dHv3wcLu55U?si=JHbzGMb3bKHdF63o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 5 ? 'block' : 'hidden'}`}></iframe>
                                        </div>
                                        <div className = {`${chapter === 2 ? 'block' : 'hidden'}`}>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/mDh7KWFBPXQ?si=87xbx7A0td8-LLSY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 6 ? 'block' : 'hidden'}`}></iframe>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/IMNDVXfI5ok?si=apVSfGxOvJxz2uPR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 7 ? 'block' : 'hidden'}`}></iframe>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/ZL7vK1H4s5Y?si=6Gaiah0fRd7yEV2T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 8 ? 'block' : 'hidden'}`}></iframe>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/E-Lr3_LGTeY?si=x1jmQ30_hBj1R8Op" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 9 ? 'block' : 'hidden'}`}></iframe>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/tFsNT91wfG0?si=sA6dL7iQTQ3OfRZR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 10 ? 'block' : 'hidden'}`}></iframe>
                                            <iframe width="900" height="600" src="https://www.youtube.com/embed/hF5ZYGqcREw?si=X82cd6k_31InnSKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`PhyVideo rounded-lg video ${subTopic === 11 ? 'block' : 'hidden'}`}></iframe>
                                        </div>
                                </div >
                                <div className = {`${chapter === 1 ? 'block' : 'hidden'}`}>
                                    <div className = {`${subTopic === 1 ? 'block' : 'hidden'}`}>
                                        <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Introduction to Optical Fibres </h1>
                                    </div>
                                    <div className = {`${subTopic === 2 ? 'block' : 'hidden'}`}>
                                        <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Numerical Aperture of an Optical Fibre </h1>
                                    </div>
                                    <div className = {`${subTopic === 3 ? 'block' : 'hidden'}`}>
                                        <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Problems on Numerical Aperture and Acceptance Angle </h1>
                                    </div>
                                    <div className = {`${subTopic === 4 ? 'block' : 'hidden'}`}>
                                        <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Problems on V-Number and Modes of Propagation </h1>
                                    </div>
                                    <div className = {`${subTopic === 5 ? 'block' : 'hidden'}`}>
                                        <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Step Index and Graded Index Fibres </h1>
                                    </div>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Description
                                    </h1>
                                    <p className = "text-gray-600 text-lg">
                                        In this lecture series, we will cover the fundamental data structures that are essential for any programmer. We will start with an introduction to data structures and their importance in computer science. Then, we will dive into specific data structures such as arrays, linked lists, stacks, queues, trees, graphs, hashing, sorting techniques, and searching techniques. We will also touch upon advanced data structures for those who want to explore further. Each lecture will include explanations, examples, and practical applications to help you understand how to use these data structures effectively in your programming projects.
                                    </p>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Resources
                                    </h1>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
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
                                    <button className = "flex justify-center bg-slate-900 text-white text-3xl rounded-lg shadow-lg shadow-slate-950/30 w-10 h-10" onClick={() => {setSubTopicSidebarActive(!subTopicSidebarActive); document.getElementsByClassName("PhyVideo")[subTopic === null ? 0 : subTopic - 1].width = 900; document.getElementsByClassName("PhyVideo")[subTopic === null ? 0 : subTopic - 1].height = 600}}>
                                        {'<'}
                                    </button>     
                            </div>
                            <div className = {`bg-white rounded-lg shadow-lg shadow-slate-950/30 w-[300px] p-4 ${subTopicSidebarActive ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                                <div className = "flex bg-slate-900 rounded-lg text-white justify-start gap-8 p-2 mb-4"> 
                                    <button className = "ml-2 mb-1 text-2xl" onClick={() => {setSubTopicSidebarActive(!subTopicSidebarActive); document.getElementsByClassName("PhyVideo")[subTopic === null ? 0 : subTopic - 1].width = 1200}}>
                                        |||
                                    </button>
                                    <h1 className = "text-2xl font-bold">
                                        Sub-Topics
                                    </h1>
                                </div>
                                <div className = {`flex flex-col gap-4 ${chapter === 1 ? 'block' : 'hidden'}`}>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 1 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(1); setButtonActive(1)}}>
                                            Introduction to Optical Fibres
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 2 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(2); setButtonActive(2)}}>
                                            Numerical Aperture of an Optical Fibre
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 3 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(3); setButtonActive(3)}}>
                                            Problems on Numerical Aperture and Acceptance Angle
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 4 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(4); setButtonActive(4)}}>
                                            Problems on V-Number and Modes of Propagation
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 5 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(5); setButtonActive(5)}}>
                                            Step Index and Graded Index Fibres
                                        </h2>
                                    </div> 
                                </div>
                                <div className = {`flex flex-col gap-4 ${chapter === 2 ? 'block' : 'hidden'}`}>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 6 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(6); setButtonActive(6)}}>
                                            Introduction to Quantum Mechanics
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 7 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(7); setButtonActive(7)}}>
                                            Phase and Group Velocity
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 8 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(8); setButtonActive(8)}}>
                                            Heisenberg's Uncertainty Principle
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 9 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(9); setButtonActive(9)}}>
                                            Time Dependent Wave Equation
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 10 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(10); setButtonActive(10)}}>
                                            Time Independent Wave Equation
                                        </h2>
                                    </div> 
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 11 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(11); setButtonActive(11)}}>
                                            Numericals
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = {`text-4xl font-bold text-white items-center flex justify-center ${selectedLecture === 2 ? 'block' : 'hidden'}`}>
                        <div className = "flex justify-start m-5 gap-4">
                            <div className = "flex-1 w-full max-w-[1200px]">
                                <div className = "rounded-lg text-slate-900 h-[600px] flex items-center justify-center">
                                    <h2 className = {`text-3xl font-bold ${subTopic === null ? 'block' : 'hidden'}`}>
                                        Please select a Sub-Topic to continue...
                                    </h2>
                                    <iframe width="900" height="600" src="https://www.youtube.com/embed/u8JZ9gU5o4g?si=KIdQYkMFPhiauZON" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`Algovideo rounded-lg video ${subTopic === 1 ? 'block' : 'hidden'}`}></iframe>
                                    <iframe width="900" height="600" src="https://www.youtube.com/embed/itbkP50iggM?si=BjiB2V27EiaMFNR3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen className = {`Algovideo rounded-lg video ${subTopic === 2 ? 'block' : 'hidden'}`}></iframe>
                                </div>
                                <div className = {`${subTopic === 1 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Introduction to Algorithms </h1>
                                </div>
                                <div className = {`${subTopic === 2 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Algorithm Analysis </h1>
                                </div>
                                <div className = {`${subTopic === 3 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Design Techniques </h1>
                                </div>
                                <div className = {`${subTopic === 4 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Recursion </h1>
                                </div>
                                <div className = {`${subTopic === 5 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Searching Algorithms </h1>
                                </div>
                                <div className = {`${subTopic === 6 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Sorting Algorithms </h1>
                                </div>
                                <div className = {`${subTopic === 7 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Graph Algorithms </h1>
                                </div>
                                <div className = {`${subTopic === 8 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> String Algorithms </h1>
                                </div>
                                <div className = {`${subTopic === 9 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Greedy Algorithms </h1>
                                </div>
                                <div className = {`${subTopic === 10 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Dynamic Programming </h1>
                                </div>
                                <div className = {`${subTopic === 11 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Complexity Classes </h1>
                                </div>
                                <div className = {`${subTopic === 12 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Advanced Topics </h1>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Description
                                    </h1>
                                    <p className = "text-gray-600 text-lg">
                                        In this lecture series, we will cover the fundamental algorithms that are essential for any programmer. We will start with an introduction to algorithms and their importance in computer science. Then, we will dive into specific algorithms such as algorithm analysis, design techniques, recursion, searching algorithms, sorting algorithms, graph algorithms, string algorithms, greedy algorithms, dynamic programming, complexity classes, and advanced topics for those who want to explore further. Each lecture will include explanations, examples, and practical applications to help you understand how to use these algorithms effectively in your programming projects.
                                    </p>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Resources
                                    </h1>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
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
                                    <button className = "flex justify-center bg-slate-900 text-white text-3xl rounded-lg shadow-lg shadow-slate-950/30 w-10 h-10" onClick={() => {setSubTopicSidebarActive(!subTopicSidebarActive); document.getElementsByClassName("Algovideo")[subTopic === 0 ? 0 : subTopic - 1].width = 900; document.getElementsByClassName("Algovideo")[subTopic === 0 ? 0 : subTopic - 1].height = 600}}>
                                        {'<'}
                                    </button>     
                            </div>
                            <div className = {`bg-white rounded-lg shadow-lg shadow-slate-950/30 w-[300px] p-4 ${subTopicSidebarActive ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                                <div className = "flex bg-slate-900 rounded-lg text-white justify-start gap-8 p-2 mb-4"> 
                                    <button className = "mb-1 ml-2 text-2xl" onClick={() => {setSubTopicSidebarActive(!subTopicSidebarActive); document.getElementsByClassName("Algovideo")[subTopic === null ? 0 : subTopic - 1].width = 1200; document.getElementsByClassName("Algovideo")[subTopic === null ? 0 : subTopic - 1].height = 600}}>
                                        |||
                                    </button>
                                    <h1 className = "text-2xl font-bold">
                                        Sub-Topics
                                    </h1>
                                </div>
                                <div className = "flex flex-col gap-4">
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 1 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(1); setButtonActive(1)}}>
                                            Introduction to Algorithms
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 2 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(2); setButtonActive(2)}}>
                                            Algorithm Analysis
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 3 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(3); setButtonActive(3)}}>
                                            Design Techniques
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 4 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(4); setButtonActive(4)}}>
                                            Recursion
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 5 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(5); setButtonActive(5)}}>
                                            Searching Algorithms
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 6 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(6); setButtonActive(6)}}>
                                            Sorting Algorithms 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 7 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(7); setButtonActive(7)}}>
                                            Graph Algorithms 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 8 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(8); setButtonActive(8)}}>
                                            String Algorithms 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 9 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(9); setButtonActive(9)}}>
                                            Greedy Algorithms (Detailed)
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 10 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(10); setButtonActive(10)}}>
                                            Dynamic Programming (Detailed)
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 11 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(11); setButtonActive(11)}}>
                                            Complexity Classes (Basic)
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 12 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(12); setButtonActive(12)}}>
                                            Advanced Topics (Optional)
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = {`text-4xl font-bold text-white items-center flex justify-center ${selectedLecture === 3 ? 'block' : 'hidden'}`}>
                        <div className = "flex justify-start m-5 gap-4">
                            <div className = "flex-1 w-full max-w-[1200px]">
                                <div className = "bg-black rounded-lg h-[600px] flex items-center justify-center">
                                    <h2 className = "text-xl font-bold text-white">
                                        JavaScript Fundamentals lectures coming soon...
                                    </h2>
                                </div>
                                <div className = {`${subTopic === 1 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Introduction to JavaScript </h1>
                                </div>
                                <div className = {`${subTopic === 2 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> JavaScript Syntax and Basics </h1>
                                </div>
                                <div className = {`${subTopic === 3 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Variables and Data Types </h1>
                                </div>
                                <div className = {`${subTopic === 4 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Operators </h1>
                                </div>
                                <div className = {`${subTopic === 5 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Control Statements </h1>
                                </div>
                                <div className = {`${subTopic === 6 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Functions </h1>
                                </div>
                                <div className = {`${subTopic === 7 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Arrays </h1>
                                </div>
                                <div className = {`${subTopic === 8 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Objects </h1>
                                </div>
                                <div className = {`${subTopic === 9 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Error Handling </h1>
                                </div>
                                <div className = {`${subTopic === 10 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> ES6+ Features </h1>
                                </div>
                                <div className = {`${subTopic === 11 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Asynchronous JavaScript </h1>
                                </div>
                                <div className = {`${subTopic === 12 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Browser Storage </h1>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Description
                                    </h1>
                                    <p className = "text-gray-600 text-lg">
                                        In this lecture series, we will cover the fundamental concepts of JavaScript programming. We will start with an introduction to JavaScript and its role in web development. Then, we will dive into JavaScript syntax and basics, variables and data types, operators, control statements, functions, arrays, objects, error handling, ES6+ features, asynchronous JavaScript, and browser storage. Each lecture will include explanations, examples, and practical applications to help you understand how to use JavaScript effectively in your web development projects.
                                        </p>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Resources
                                    </h1>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
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
                                    <button className = "flex justify-center bg-slate-900 text-white text-3xl rounded-lg shadow-lg shadow-slate-950/30 w-10 h-10" onClick={() => setSubTopicSidebarActive(!subTopicSidebarActive)}>
                                        {'<'}
                                    </button>     
                            </div>
                            <div className = {`bg-white rounded-lg shadow-lg shadow-slate-950/30 w-[300px] p-4 ${subTopicSidebarActive ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                                <div className = "flex bg-slate-900 rounded-lg text-white justify-start gap-8 p-2 mb-4"> 
                                    <button className = "ml-2 mb-1 text-2xl" onClick={() => setSubTopicSidebarActive(!subTopicSidebarActive)}>
                                        |||
                                    </button>
                                    <h1 className = "text-2xl font-bold">
                                        Sub-Topics
                                    </h1>
                                </div>
                                <div className = "flex flex-col gap-4">
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 1 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(1); setButtonActive(1)}}>
                                            Introduction to JavaScript
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 2 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(2); setButtonActive(2)}}>
                                            JavaScript Syntax and Basics
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 3 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(3); setButtonActive(3)}}>
                                            Variables and Data Types
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 4 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(4); setButtonActive(4)}}>
                                            Operators
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 5 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(5); setButtonActive(5)}}>
                                            Control Statements
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 6 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(6); setButtonActive(6)}}>
                                            Functions
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 7 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(7); setButtonActive(7)}}>
                                            Arrays
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 8 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(8); setButtonActive(8)}}>
                                            Objects 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 9 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(9); setButtonActive(9)}}>
                                            Error Handling
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 10 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(10); setButtonActive(10)}}>
                                            ES6+ Features (Basics)
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 11 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(11); setButtonActive(11)}}>
                                            Asynchronous JavaScript (Introduction)
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 12 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(12); setButtonActive(12)}}>
                                            Browser Storage (LocalStorage and SessionStorage)
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = {`text-4xl font-bold text-white items-center flex justify-center ${selectedLecture === 4 ? 'block' : 'hidden'}`}>
                        <div className = "flex justify-start m-5 gap-4">
                            <div className = "flex-1 w-full max-w-[1200px]">
                                <div className = "bg-black rounded-lg h-[600px] flex items-center justify-center">
                                    <h2 className = "text-xl font-bold text-white">
                                        Document Object Method (DOM) lectures coming soon...
                                    </h2>
                                </div>
                                <div className = {`${subTopic === 1 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Introduction to DOM </h1>
                                </div>
                                <div className = {`${subTopic === 2 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Accessing DOM Elements </h1>
                                </div>
                                <div className = {`${subTopic === 3 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> DOM Traversal </h1>
                                </div>
                                <div className = {`${subTopic === 4 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Manipulating DOM Elements </h1>
                                </div>
                                <div className = {`${subTopic === 5 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Creating and Removing DOM Elements </h1>
                                </div>
                                <div className = {`${subTopic === 6 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Event Handling </h1>
                                </div>
                                <div className = {`${subTopic === 7 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Event Propagation </h1>
                                </div>
                                <div className = {`${subTopic === 8 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Forms and DOM </h1>
                                </div>
                                <div className = {`${subTopic === 9 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> DOM Collections </h1>
                                </div>
                                <div className = {`${subTopic === 10 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> BOM (Browser Object Model) Basics </h1>
                                </div>
                                <div className = {`${subTopic === 11 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> DOM Performance and Best Practices </h1>
                                </div>
                                <div className = {`${subTopic === 12 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Modern DOM Features and APIs </h1>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Description
                                    </h1>
                                    <p className = "text-gray-600 text-lg">
                                        In this lecture series, we will cover the fundamental concepts of the Document Object Model (DOM) and how it interacts with JavaScript to create dynamic web pages. We will start with an introduction to the DOM and its structure, then move on to accessing and manipulating DOM elements, event handling, forms, DOM collections, and performance best practices. Each lecture will include explanations, examples, and practical applications to help you understand how to use the DOM effectively in your web development projects.
                                        </p>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Resources
                                    </h1>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
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
                                    <button className = "flex justify-center bg-slate-900 text-white text-3xl rounded-lg shadow-lg shadow-slate-950/30 w-10 h-10" onClick={() => setSubTopicSidebarActive(!subTopicSidebarActive)}>
                                        {'<'}
                                    </button>     
                            </div>
                            <div className = {`bg-white rounded-lg shadow-lg shadow-slate-950/30 w-[300px] p-4 ${subTopicSidebarActive ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                                <div className = "flex bg-slate-900 rounded-lg text-white justify-start gap-8 p-2 mb-4"> 
                                    <button className = "mb-1 ml-2 text-2xl" onClick={() => setSubTopicSidebarActive(!subTopicSidebarActive)}>
                                        |||
                                    </button>
                                    <h1 className = "text-2xl font-bold">
                                        Sub-Topics
                                    </h1>
                                </div>
                                <div className = "flex flex-col gap-4">
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 1 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(1); setButtonActive(1)}}>
                                            Introduction to DOM 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 2 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(2); setButtonActive(2)}}>
                                            Accessing DOM Elements
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 3 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(3); setButtonActive(3)}}>
                                            DOM Traversal
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 4 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(4); setButtonActive(4)}}>
                                            Manipulating DOM Elements
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 5 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(5); setButtonActive(5)}}>
                                            Creating and Removing DOM Elements
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 6 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(6); setButtonActive(6)}}>
                                            Event Handling 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 7 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(7); setButtonActive(7)}}>
                                            Event Propagation
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 8 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(8); setButtonActive(8)}}>
                                            Forms and DOM 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 9 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(9); setButtonActive(9)}}>
                                            DOM Collections
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 10 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(10); setButtonActive(10)}}>
                                            BOM (Browser Object Model) Basics
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 11 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(11); setButtonActive(11)}}>
                                            DOM Performance and Best Practices
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 12 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(12); setButtonActive(12)}}>
                                            Modern DOM Features and APIs
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = {`text-4xl font-bold text-white items-center flex justify-center ${selectedLecture === 5 ? 'block' : 'hidden'}`}>
                        <div className = "flex justify-start m-5 gap-4">
                            <div className = "flex-1 w-full max-w-[1200px]"> 
                                <div className = "bg-black rounded-lg h-[600px] flex items-center justify-center">
                                    <h2 className = "text-xl font-bold text-white">
                                        React.js lectures coming soon...
                                    </h2>
                                </div>
                                <div className = {`${subTopic === 1 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Introduction to React </h1>
                                </div>
                                <div className = {`${subTopic === 2 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Setting up React </h1>
                                </div>
                                <div className = {`${subTopic === 3 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> JSX (JavaScript XML) </h1>
                                </div>
                                <div className = {`${subTopic === 4 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Components </h1>
                                </div>
                                <div className = {`${subTopic === 5 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Props </h1>
                                </div>
                                <div className = {`${subTopic === 6 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> State </h1>
                                </div>
                                <div className = {`${subTopic === 7 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Event Handling </h1>
                                </div>
                                <div className = {`${subTopic === 8 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Conditional Rendering </h1>
                                </div>
                                <div className = {`${subTopic === 9 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Lists and Keys </h1>
                                </div>
                                <div className = {`${subTopic === 10 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Forms in React </h1>
                                </div>
                                <div className = {`${subTopic === 11 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Hooks </h1>
                                </div>
                                <div className = {`${subTopic === 12 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Routing </h1>
                                </div>
                                <div className = {`${subTopic === 13 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Styling in React </h1>
                                </div>
                                <div className = {`${subTopic === 14 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> API Calls and Data Fetching in React </h1>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Description
                                    </h1>
                                    <p className = "text-gray-600 text-lg">
                                        In this lecture series, we will cover the fundamental concepts of React.js, a popular JavaScript library for building user interfaces. We will start with an introduction to React and its core principles, then move on to setting up a React development environment, understanding JSX, creating components, managing state and props, handling events, conditional rendering, lists and keys, forms in React, hooks, routing, styling, and making API calls. Each lecture will include explanations, examples, and practical applications to help you understand how to use React effectively in your web development projects.
                                        </p>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Resources
                                    </h1>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
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
                                    <button className = "flex justify-center bg-slate-900 text-white text-3xl rounded-lg shadow-lg shadow-slate-950/30 w-10 h-10" onClick={() => setSubTopicSidebarActive(!subTopicSidebarActive)}>
                                        {'<'}
                                    </button>     
                            </div>
                            <div className = {`bg-white rounded-lg shadow-lg shadow-slate-950/30 w-[300px] p-4 ${subTopicSidebarActive ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                                <div className = "flex bg-slate-900 rounded-lg text-white justify-start gap-8 p-2 mb-4"> 
                                    <button className = "ml-2 mb-1 text-2xl" onClick={() => setSubTopicSidebarActive(!subTopicSidebarActive)}>
                                        |||
                                    </button>
                                    <h1 className = "text-2xl font-bold">
                                        Sub-Topics
                                    </h1>
                                </div>
                                <div className = "flex flex-col gap-4">
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 1 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(1); setButtonActive(1)}}>
                                            Introduction to React 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 2 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(2); setButtonActive(2)}}>
                                            Setting up React
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 3 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(3); setButtonActive(3)}}>
                                            JSX (JavaScript XML)
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 4 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(4); setButtonActive(4)}}>
                                            Components
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 5 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(5); setButtonActive(5)}}>
                                            Props
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 6 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(6); setButtonActive(6)}}>
                                            State 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 7 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(7); setButtonActive(7)}}>
                                            Event Handling
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 8 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(8); setButtonActive(8)}}>
                                            Conditional Rendering 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 9 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(9); setButtonActive(9)}}>
                                            Lists and Keys
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 10 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(10); setButtonActive(10)}}>
                                            Forms in React 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 11 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(11); setButtonActive(11)}}>
                                            Hooks
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 12 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(12); setButtonActive(12)}}>
                                            Routing 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 13 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(13); setButtonActive(13)}}>
                                            Styling in React 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 14 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(14); setButtonActive(14)}}>
                                            API Calls and Data Fetching in React 
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = {`text-4xl font-bold text-white items-center flex justify-center ${selectedLecture === 6 ? 'block' : 'hidden'}`}>
                        <div className = "flex justify-start m-5 gap-4">
                            <div className = "flex-1 w-full max-w-[1200px]">
                                <div className = "bg-black rounded-lg h-[600px] flex items-center justify-center">
                                    <h2 className = "text-xl font-bold text-white">
                                        Node.js lectures coming soon...
                                    </h2>
                                </div>
                                <div className = {`${subTopic === 1 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Introduction to Node </h1>
                                </div>
                                <div className = {`${subTopic === 2 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Installation and Setup </h1>
                                </div>
                                <div className = {`${subTopic === 3 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Node.js Architecture </h1>
                                </div>
                                <div className = {`${subTopic === 4 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Core Modules </h1>
                                </div>
                                <div className = {`${subTopic === 5 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> File System Operations </h1>
                                </div>
                                <div className = {`${subTopic === 6 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Creating a Server </h1>
                                </div>
                                <div className = {`${subTopic === 7 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Modules in Node.js </h1>
                                </div>
                                <div className = {`${subTopic === 8 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Package Management </h1>
                                </div>
                                <div className = {`${subTopic === 9 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Asynchronous Programming </h1>
                                </div>
                                <div className = {`${subTopic === 10 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Event Handling </h1>
                                </div>
                                <div className = {`${subTopic === 11 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Working with Frameworks </h1>
                                </div>
                                <div className = {`${subTopic === 12 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> RESTFul APIs </h1>
                                </div>
                                <div className = {`${subTopic === 13 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Database Integration </h1>
                                </div>
                                <div className = {`${subTopic === 14 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Authentication and Security </h1>
                                </div>
                                <div className = {`${subTopic === 15 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Error Handling and Debugging </h1>
                                </div>
                                <div className = {`${subTopic === 16 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Environment Variables and Configuration </h1>
                                </div>
                                <div className = {`${subTopic === 17 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Streams and Buffers </h1>
                                </div>
                                <div className = {`${subTopic === 18 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Performance and Scaling </h1>
                                </div>
                                <div className = {`${subTopic === 19 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Testing </h1>
                                </div>
                                <div className = {`${subTopic === 20 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Deployment and Hosting </h1>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Description
                                    </h1>
                                    <p className = "text-gray-600 text-lg">
                                        In this lecture series, we will cover the fundamental concepts of Node.js, a powerful JavaScript runtime built on Chrome's V8 engine. We will start with an introduction to Node.js and its architecture, then move on to installation and setup, core modules, file system operations, creating a server, working with modules, package management, asynchronous programming, event handling, and working with frameworks. We will also cover RESTful APIs, database integration, authentication and security, error handling and debugging, environment variables and configuration, streams and buffers, performance and scaling, testing, and deployment. Each lecture will include explanations, examples, and practical applications to help you understand how to use Node.js effectively in your web development projects.
                                        </p>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Resources
                                    </h1>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
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
                                    <button className = "flex justify-center bg-slate-900 text-white text-3xl rounded-lg shadow-lg shadow-slate-950/30 w-10 h-10" onClick={() => setSubTopicSidebarActive(!subTopicSidebarActive)}>
                                        {'<'}
                                    </button>     
                            </div>
                            <div className = {`bg-white rounded-lg shadow-lg shadow-slate-950/30 w-[300px] p-4 ${subTopicSidebarActive ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                                <div className = "flex bg-slate-900 rounded-lg text-white justify-start gap-8 p-2 mb-4"> 
                                    <button className = "ml-2 mb-1 text-2xl" onClick={() => setSubTopicSidebarActive(!subTopicSidebarActive)}>
                                        |||
                                    </button>
                                    <h1 className = "text-2xl font-bold">
                                        Sub-Topics
                                    </h1>
                                </div>
                                <div className = "flex flex-col gap-4">
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 1 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(1); setButtonActive(1)}}>
                                            Introduction to Node.js
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 2 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(2); setButtonActive(2)}}>
                                            Installation and Setup
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 3 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(3); setButtonActive(3)}}>
                                            Node.js Architecture
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 4 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(4); setButtonActive(4)}}>
                                            Core Modules
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 5 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(5); setButtonActive(5)}}>
                                            File System Operations
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 6 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(6); setButtonActive(6)}}>
                                            Creating a Server 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 7 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(7); setButtonActive(7)}}>
                                            Modules in Node.js
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 8 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(8); setButtonActive(8)}}>
                                            Package Management
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 9 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(9); setButtonActive(9)}}>
                                            Asynchronous Programming
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 10 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(10); setButtonActive(10)}}>
                                            Event Handling  
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 11 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(11); setButtonActive(11)}}>
                                            Working with Frameworks
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 12 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium " onClick = {() => {setSubTopic(12); setButtonActive(12)}}>
                                            RESTFul APIs 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 13 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(13); setButtonActive(13)}}>
                                            Database Integration (Introduction)
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 14 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(14); setButtonActive(14)}}>
                                            Authentication and Security (Basics)
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 15 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(15); setButtonActive(15)}}>
                                            Error Handling and Debugging
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 16 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(16); setButtonActive(16)}}>
                                            Environment Variables and Configuration
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 17 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(17); setButtonActive(17)}}>
                                            Streams and Buffers
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 18 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(18); setButtonActive(18)}}>
                                            Performance and Scaling
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 19 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(19); setButtonActive(19)}}>
                                            Testing (Basic)
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 20 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(20); setButtonActive(20)}}>
                                            Deployment and Hosting (Introduction)
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = {`text-4xl font-bold text-white items-center flex justify-center ${selectedLecture === 7 ? 'block' : 'hidden'}`}>
                        <div className = "flex justify-start m-5 gap-4">
                            <div className = "flex-1 w-full max-w-[1200px]">
                                <div className = "bg-black rounded-lg h-[600px] flex items-center justify-center">
                                    <h2 className = "text-xl font-bold text-white">
                                        Machine Learning lectures coming soon...
                                    </h2>
                                </div>
                                <div className = {`${subTopic === 1 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Introduction to Machine Learning </h1>
                                </div>
                                <div className = {`${subTopic === 2 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Types of Machine Learning </h1>
                                </div>
                                <div className = {`${subTopic === 3 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Data Preprocessing </h1>
                                </div>
                                <div className = {`${subTopic === 4 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Supervised Learning Algorithms </h1>
                                </div>
                                <div className = {`${subTopic === 5 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Unsupervised Learning Algorithms </h1>
                                </div>
                                <div className = {`${subTopic === 6 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Model Evaluation and Validation </h1>
                                </div>
                                <div className = {`${subTopic === 7 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Overfitting and Underfitting </h1>
                                </div>
                                <div className = {`${subTopic === 8 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Feature Engineering </h1>
                                </div>
                                <div className = {`${subTopic === 9 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Optimization Techniques </h1>
                                </div>
                                <div className = {`${subTopic === 10 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Neural Networks </h1>
                                </div>
                                <div className = {`${subTopic === 11 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Introduction to Deep Learning </h1>
                                </div>
                                <div className = {`${subTopic === 12 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Reinforcement Learning </h1>
                                </div>
                                <div className = {`${subTopic === 13 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Tools and Libraries </h1>
                                </div>
                                <div className = {`${subTopic === 14 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Model Deployment </h1>
                                </div>
                                <div className = {`${subTopic === 15 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Ethics in Machine Learning </h1>
                                </div>
                                <div className = {`${subTopic === 16 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Real World Applications </h1>
                                </div>
                                <div className = {`${subTopic === 17 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Advanced Topics </h1>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Description
                                    </h1>
                                    <p className = "text-gray-600 text-lg">
                                        In this lecture series, we will cover the fundamental concepts of Machine Learning, a subset of artificial intelligence that enables computers to learn from data and make predictions or decisions without being explicitly programmed. We will start with an introduction to machine learning and its types, then move on to data preprocessing, supervised and unsupervised learning algorithms, model evaluation and validation, overfitting and underfitting, feature engineering, optimization techniques, neural networks, deep learning, reinforcement learning, tools and libraries, model deployment, ethics in machine learning, real-world applications, and advanced topics. Each lecture will include explanations, examples, and practical applications to help you understand how to use machine learning effectively in various domains.
                                        </p>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Resources
                                    </h1>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Comments
                                    </h1>
                                    <div className = "flex justify-between">
                                        <input type = "text" placeholder = "Add a comment..." className = "w-full max-w-[1200px] text-lg text-gray-700 border border-gray-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-gray-400" />
                                        <button className = "ml-4 px-4 text-lg py-2 bg-slate-900 text-white rounded-full hover:bg-red-600 transition">
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className = {`fixed top-24 right-4 ${subTopicSidebarActive ? 'hidden' : 'block'}`}>
                                    <button className = "flex justify-center bg-slate-900 text-white text-3xl rounded-lg shadow-lg shadow-slate-950/30 w-10 h-10" onClick={() => setSubTopicSidebarActive(!subTopicSidebarActive)}>
                                        {'<'}
                                    </button>     
                            </div>
                            <div className = {`bg-white rounded-lg shadow-lg shadow-slate-950/30 w-[300px] p-4 ${subTopicSidebarActive ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                                <div className = "flex bg-slate-900 rounded-lg text-white justify-start gap-8 p-2 mb-4"> 
                                    <button className = "ml-2 mb-1 text-2xl" onClick={() => setSubTopicSidebarActive(!subTopicSidebarActive)}>
                                        |||
                                    </button>
                                    <h1 className = "text-2xl font-bold">
                                        Sub-Topics
                                    </h1>
                                </div>
                                <div className = "flex flex-col gap-4">
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 1 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(1); setButtonActive(1)}}>
                                            Introduction to Machine Learning
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 2 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(2); setButtonActive(2)}}>
                                            Types of Machine Learning
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 3 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(3); setButtonActive(3)}}>
                                            Data Preprocessing
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 4 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(4); setButtonActive(4)}}>
                                            Supervised Learning Algorithms
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 5 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(5); setButtonActive(5)}}>
                                            Unsupervised Learning Algorithms
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 6 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(6); setButtonActive(6)}}>
                                            Model Evaluation and Validation
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 7 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(7); setButtonActive(7)}}>
                                            Overfitting and Underfitting
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 8 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(8); setButtonActive(8)}}>
                                            Feature Engineering
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 9 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(9); setButtonActive(9)}}>
                                            Optimization Techniques
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 10 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(10); setButtonActive(10)}}>
                                            Neural Networks (Basics) 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 11 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(11); setButtonActive(11)}}>
                                            Introduction to Deep Learning 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 12 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium " onClick = {() => {setSubTopic(12); setButtonActive(12)}}>
                                            Reinforcement Learning (Basics) 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 13 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(13); setButtonActive(13)}}>
                                            Tools and Libraries 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 14 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(14); setButtonActive(14)}}>
                                            Model Deployment (Intoduction)
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 15 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(15); setButtonActive(15)}}>
                                            Ethics in Machine Learning
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 16 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(16); setButtonActive(16)}}>
                                            Real World Applications 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 17 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(17); setButtonActive(17)}}>
                                            Advanced Topics (Optional)
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lectures;