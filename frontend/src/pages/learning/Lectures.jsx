import React from 'react'
import {FaChevronDown , FaChevronUp} from 'react-icons/fa';
import  Physics  from '../../subjects/Physics';
import Mathematics from '../../subjects/Maths';
import BEEDE from '../../subjects/Bee';
import CEM from '../../subjects/Cem';
import Chemistry from '../../subjects/Chemistry';
import CLanguage from '../../subjects/C';
import Java from '../../subjects/Java';
import { useSubject } from '../../context/SubjectContext';
const Lectures = () => {
    const { setChapter, selectedLecture, setSelectedLecture, setSubTopic, setButtonActive, buttonActiveLecture, setButtonActiveLecture, setSubTopicSidebarActive, dropDown, setDropDown, chapterActive, setChapterActive } = useSubject();
    

    const physics = ["1. Fibre Optics" , "2. Quantum Mechanics" , "3. Interference and Diffraction" , "4. Sensors" , "5. Lasers" , "6. Electodynamics"];
    const maths = ["1. Algebra" , "2. Calculus" , "3. Geometry" , "4. Trigonometry"];
    const bee = ["1. AC Circuits" , "2. Digital Electronics" , "3. Logic Gates" , "4. Communication Systems"];
    const cem = ["1. Strength of Materials" , "2. Fluid Mechanics" , "3. Structural Analysis" , "4. Geotechnical Engineering"];
    const chem = ["1. Organic Chemistry" , "2. Inorganic Chemistry" , "3. Physical Chemistry" , "4. Analytical Chemistry"];
    const clanguage = ["1. Introduction to C" , "2. Variables and Data Types" , "3. Arrays" , "4. Pointers" , "5. Functions" , "6. Structures" , "7. File Handling"];
    const java = ["1. Introduction to Java" , "2. Object-Oriented Programming" , "3. Inheritance and Polymorphism" , "4. Exception Handling" , "5. Collections Framework" , "6. Multithreading" , "7. JavaFX" , "8. JDBC" , "9. Servlets and JSP" , "10. Spring Framework" , "11. Hibernate" , "12. Design Patterns" , "13. Java Best Practices" , "14. Java Interview Questions" , "15. Java Projects"];
    return (
        <>
            <div className = "bg-gradient-to-r from-slate-900 to-blue-700 pt-[60px] min-h-screen flex">
                <div className = "max-w-[275px] shadow-lg rounded-lg p-6">
                    <h1 className = "text-4xl text-white font-bold mb-10 items-center flex justify-center">
                        Subjects
                    </h1>
                    <div className = "flex flex-col gap-4 transition">
                        <div className = {`rounded-lg shadow-md text-white p-4 hover:scale-[110%] ${buttonActiveLecture === 1 ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white scale-[110%]' : 'hover:bg-blue-600 hover:text-white'}`} onClick={() => {setSelectedLecture(1); setSubTopic(null)}}>
                            <div className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(1); document.getElementsByClassName("PhyVideo")[0].width = 900; document.getElementsByClassName("video").height = 600}}>
                                <div className = "flex flex-col gap-2">
                                    <div className = "flex items-center justify-between gap-2" onClick = {() => {setSubTopicSidebarActive(false); setChapter(null); setChapterActive(null);}}>   
                                        <h1 className = "cursor-pointer" onClick={() =>setDropDown(null)}>Physics</h1>
                                        <button onClick={() => setDropDown(dropDown === 1 ? 0 : 1)}>
                                            {dropDown === 1 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dropDown === 1 ? 'max-h-96 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
                                        <div className = "flex flex-col gap-2 text-white p-2 border border-blue-400 rounded-md cursor-pointer">{physics.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'hover:bg-emerald-400'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1); setSubTopicSidebarActive(true)}} key={index}>{item}</p>))}
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className = {`rounded-lg shadow-md text-white p-4 hover:scale-[110%] ${buttonActiveLecture === 2 ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white scale-[110%]' : 'hover:bg-blue-600 hover:text-white'}`} onClick={() => {setSelectedLecture(2); setSubTopic(null)}}>
                            <div className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(2); document.getElementsByClassName("video")[0].width = 900; document.getElementsByClassName("video").height = 600}}>
                                <div className = "flex flex-col gap-2">
                                    <div className = "flex items-center justify-between gap-2" onClick = {() => {setSubTopicSidebarActive(false); setChapter(null); setChapterActive(null);}}>   
                                        <h1 className = "cursor-pointer" onClick = {() => setDropDown(null)}>Mathematics</h1>
                                        <button onClick={() => setDropDown(dropDown === 2 ? 0 : 2)}>
                                            {dropDown === 2 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dropDown === 2 ? 'max-h-96 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
                                        <div className = "flex flex-col gap-2 text-white p-2 border border-blue-400 rounded-md cursor-pointer">{maths.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'hover:bg-emerald-400'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1)}} key={index}>{item}</p>))}
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className = {`rounded-lg shadow-md text-white p-4 hover:scale-[110%] ${buttonActiveLecture === 3 ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white scale-[110%]' : 'hover:bg-blue-600 hover:text-white'}`} onClick={() => {setSelectedLecture(3); setSubTopic(null)}}>
                            <h2 className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(3); document.getElementsByClassName("video")[0].width = 900; document.getElementsByClassName("video").height = 600}}>
                                <div className = "flex flex-col gap-2">
                                    <div className = "flex items-center justify-between gap-2"  onClick = {() => {setSubTopicSidebarActive(false); setChapter(null); setChapterActive(null);}}>   
                                        <h1 className = "cursor-pointer" onClick = {() => setDropDown(null)}>BEE&DE</h1>
                                        <button onClick={() => setDropDown(dropDown === 3 ? 0 : 3)}>
                                            {dropDown === 3 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dropDown === 3 ? 'max-h-96 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
                                        <div className = "flex flex-col gap-2 text-white p-2 border border-blue-400 rounded-md cursor-pointer">{bee.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'hover:bg-emerald-400'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1)}} key={index}>{item}</p>))}
                                        </div>
                                    </div>
                                </div>
                            </h2>    
                        </div>
                        <div className = {`rounded-lg shadow-md text-white p-4 hover:scale-[110%] ${buttonActiveLecture === 4 ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white scale-[110%]' : 'hover:bg-blue-600 hover:text-white'}`} onClick={() => {setSelectedLecture(4); setSubTopic(null)}}>
                            <h2 className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(4); document.getElementsByClassName("video")[0].width = 900; document.getElementsByClassName("video").height = 600}}>
                                <div className = "flex flex-col gap-2">
                                    <div className = "flex items-center justify-between gap-2"  onClick = {() => {setSubTopicSidebarActive(false); setChapter(null); setChapterActive(null);}}>   
                                        <h1 className = "cursor-pointer" onClick={() => setDropDown(null)}>CEM</h1>
                                        <button onClick={() => setDropDown(dropDown === 4 ? 0 : 4)}>
                                            {dropDown === 4 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dropDown === 4 ? 'max-h-96 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
                                        <div className = "flex flex-col gap-2 text-white p-2 border border-blue-400 rounded-md cursor-pointer">{cem.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'hover:bg-emerald-400'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1)}} key={index}>{item}</p>))}
                                        </div>
                                    </div>
                                </div>
                            </h2>    
                        </div>
                        <div className = {`rounded-lg shadow-md text-white p-4 hover:scale-[110%] ${buttonActiveLecture === 5 ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white scale-[110%]' : 'hover:bg-blue-600 hover:text-white'}`} onClick={() => {setSelectedLecture(5); setSubTopic(null)}}>
                            <h2 className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(5); document.getElementsByClassName("video")[0].width = 900; document.getElementsByClassName("video").height = 600}}>
                                <div className = "flex flex-col gap-2">
                                    <div className = "flex items-center justify-between gap-2"  onClick = {() => {setSubTopicSidebarActive(false); setChapter(null); setChapterActive(null);}}>   
                                        <h1 className = "cursor-pointer" onClick={() => setDropDown(null)}>Chemistry</h1>
                                        <button onClick={() => setDropDown(dropDown === 5 ? 0 : 5)}>
                                            {dropDown === 5 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dropDown === 5 ? 'max-h-96 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
                                        <div className = "flex flex-col gap-2 text-white p-2 border border-blue-400 rounded-md cursor-pointer">{chem.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'hover:bg-emerald-400'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1)}} key={index}>{item}</p>))}
                                        </div>
                                    </div>
                                </div>
                            </h2>    
                        </div>
                        <div className = {`rounded-lg shadow-md text-white p-4 hover:scale-[110%] ${buttonActiveLecture === 6 ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white scale-[110%]' : 'hover:bg-blue-600 hover:text-white'}`} onClick={() => {setSelectedLecture(6); setSubTopic(null)}}>
                            <h2 className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(6); document.getElementsByClassName("video")[0].width = 900; document.getElementsByClassName("video").height = 600}}>
                                <div className = "flex flex-col gap-2">
                                    <div className = "flex items-center justify-between gap-2"  onClick = {() => {setSubTopicSidebarActive(false); setChapter(null); setChapterActive(null);}}>   
                                        <h1 className = "cursor-pointer" onClick={() => setDropDown(null)}>C Programming</h1>
                                        <button onClick={() => setDropDown(dropDown === 6 ? 0 : 6)}>
                                            {dropDown === 6 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dropDown === 6 ? 'max-h-96 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
                                        <div className = "flex flex-col gap-2 text-white p-2 border border-blue-400 rounded-md cursor-pointer">{clanguage.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'hover:bg-emerald-400'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1)}} key={index}>{item}</p>))}
                                        </div>
                                    </div>
                                </div>
                            </h2>    
                        </div>
                        <div className = {`rounded-lg shadow-md text-white p-4 hover:scale-[110%] ${buttonActiveLecture === 7 ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white scale-[110%]' : 'hover:bg-blue-600 hover:text-white'}`} onClick={() => {setSelectedLecture(7); setSubTopic(null)}}>
                            <h2 className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(7); document.getElementsByClassName("video")[0].width = 900; document.getElementsByClassName("video").height = 600}}>
                                <div className = "flex items-center justify-between gap-2"  onClick = {() => {setSubTopicSidebarActive(false); setChapter(null); setChapterActive(null);}}>   
                                        <h1 className = "cursor-pointer" onClick={() => setDropDown(null)}>OOP Using Java</h1>
                                        <button onClick={() => setDropDown(dropDown === 7 ? 0 : 7)}>
                                            {dropDown === 7 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dropDown === 7 ? 'max-h-96 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
                                        <div className = "flex flex-col gap-2 text-white p-2 border border-blue-400 rounded-md cursor-pointer">{java.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'hover:bg-emerald-400'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1)}} key={index}>{item}</p>))}
                                        </div>
                                    </div>
                            </h2>    
                        </div>
                    </div>
                </div>
                <div className = {`${selectedLecture === null ? 'block' : 'hidden'} text-4xl font-bold text-white items-center flex justify-center w-full`}>
                    <h1 >Please select a subject to view its content</h1>
                </div>
                <div className = {`${selectedLecture === null ? 'hidden' : 'rounded-lg flex'}`}>
                    <Physics />
                    <Mathematics />
                    <BEEDE />
                    <CEM />
                    <Chemistry />
                    <CLanguage />
                    <Java />
                </div>
            </div>
        </>
    );
};

export default Lectures;