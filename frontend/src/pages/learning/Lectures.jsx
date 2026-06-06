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
    const maths = ["1. Matrices" , "2. Complex Numbers, Hyperbolic function and Logarithm of Complex Numbers" , "3. Partial Differentiation" , "4. Application of Partial Differentiation" , "5. Numerical Methods" , "6. Beta and Gamma Functions and DUIS" , "7. Multiple Integrals" , "8. Differential Equations of First Order and First Degree" , "9. Higher Order Linear Differential Equations with Constant Coefficients and Variable Coefficients"];
    const bee = ["1. DC Circuits" , "2. AC Circuits" , "3. Logic Gates" , "4. Latches and Flip-Flops"];
    const cem = ["1. System of Forces" , "2. Equilibrium of Rigid Bodies" , "3. Friction" , "4. Robot Kinematics (ICR)"];
    const chem = ["1. Spectroscopic Techniques and Applications" , "2. Green Chemistry" , "3. Polymers" , "4. Fuels and Combustion" , "5. Phase Rule and Applications" , "6. Water Technology"];
    const clanguage = ["1. C Programming (Pradeep Giri)" , "2. C Programming (Apna College 10hr One Shot)"];
    const java = ["1. OOP using Java (Kunal Kushwaha)" , "2. Java and DSA with Java (Apna College)"];
    return (
        <>
            <div className = "bg-gradient-to-r from-slate-900 to-blue-700 pt-[60px] min-h-screen flex">
                <div className = "max-w-[275px] shadow-lg rounded-lg p-6">
                    <h1 className = "text-4xl text-white font-bold mb-10 items-center flex justify-center">
                        Subjects
                    </h1>
                    <div className = "flex flex-col gap-4 transition">
                        <div className = {`rounded-lg shadow-md text-white p-4 hover:scale-[110%] ${buttonActiveLecture === 1 ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white scale-[110%]' : 'hover:bg-blue-600 hover:text-white'}`} onClick={() => {setSelectedLecture(1); if(selectedLecture !== 1){
                            setChapter(null);
                            setSubTopic(null);
                            setChapterActive(null);
                        }}}>
                            <div className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(1)}}>
                                <div className = "flex flex-col gap-2">
                                    <div className = "flex items-center justify-between">   
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
                        <div className = {`rounded-lg shadow-md text-white p-4 hover:scale-[110%] ${buttonActiveLecture === 2 ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white scale-[110%]' : 'hover:bg-blue-600 hover:text-white'}`} onClick={() => {setSelectedLecture(2); if(selectedLecture !== 2){
                                    setChapter(null);
                                    setSubTopic(null);
                                    setChapterActive(null);
                                }
                        }}>
                            <div className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(2)}}>
                                <div className = "flex flex-col gap-2">
                                    <div className = "flex items-center justify-between gap-2" onClick = {() => {setSubTopicSidebarActive(false); setChapter(null); setChapterActive(null);}}>   
                                        <h1 className = "cursor-pointer" onClick = {() => setDropDown(null)}>Mathematics</h1>
                                        <button onClick={() => setDropDown(dropDown === 2 ? 0 : 2)}>
                                            {dropDown === 2 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dropDown === 2 ? 'max-h-96 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
                                        <div className = "flex flex-col gap-2 text-white p-2 border border-blue-400 rounded-md cursor-pointer">{maths.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'hover:bg-emerald-400'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1); setSubTopicSidebarActive(true)}} key={index}>{item}</p>))}
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className = {`rounded-lg shadow-md text-white p-4 hover:scale-[110%] ${buttonActiveLecture === 3 ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white scale-[110%]' : 'hover:bg-blue-600 hover:text-white'}`} onClick={() => {setSelectedLecture(3); if(selectedLecture !== 3){
                                    setChapter(null);
                                    setSubTopic(null);
                                    setChapterActive(null);
                                }
                            }}>
                            <h2 className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(3)}}>
                                <div className = "flex flex-col gap-2">
                                    <div className = "flex items-center justify-between gap-2"  onClick = {() => {setSubTopicSidebarActive(false); setChapter(null); setChapterActive(null);}}>   
                                        <h1 className = "cursor-pointer" onClick = {() => setDropDown(null)}>BEE&DE</h1>
                                        <button onClick={() => setDropDown(dropDown === 3 ? 0 : 3)}>
                                            {dropDown === 3 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dropDown === 3 ? 'max-h-96 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
                                        <div className = "flex flex-col gap-2 text-white p-2 border border-blue-400 rounded-md cursor-pointer">{bee.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'hover:bg-emerald-400'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1); setSubTopicSidebarActive(true)}} key={index}>{item}</p>))}
                                        </div>
                                    </div>
                                </div>
                            </h2>    
                        </div>
                        <div className = {`rounded-lg shadow-md text-white p-4 hover:scale-[110%] ${buttonActiveLecture === 4 ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white scale-[110%]' : 'hover:bg-blue-600 hover:text-white'}`} onClick={() => {setSelectedLecture(4); if(selectedLecture !== 4){
                                    setChapter(null);
                                    setSubTopic(null);
                                    setChapterActive(null);
                                }
                            }}>
                            <h2 className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(4)}}>
                                <div className = "flex flex-col gap-2">
                                    <div className = "flex items-center justify-between gap-2"  onClick = {() => {setSubTopicSidebarActive(false); setChapter(null); setChapterActive(null);}}>   
                                        <h1 className = "cursor-pointer" onClick={() => setDropDown(null)}>CEM</h1>
                                        <button onClick={() => setDropDown(dropDown === 4 ? 0 : 4)}>
                                            {dropDown === 4 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dropDown === 4 ? 'max-h-96 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
                                        <div className = "flex flex-col gap-2 text-white p-2 border border-blue-400 rounded-md cursor-pointer">{cem.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'hover:bg-emerald-400'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1); setSubTopicSidebarActive(true)}} key={index}>{item}</p>))}
                                        </div>
                                    </div>
                                </div>
                            </h2>    
                        </div>
                        <div className = {`rounded-lg shadow-md text-white p-4 hover:scale-[110%] ${buttonActiveLecture === 5 ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white scale-[110%]' : 'hover:bg-blue-600 hover:text-white'}`} onClick={() => {setSelectedLecture(5); if(selectedLecture !== 5){
                                    setChapter(null);
                                    setSubTopic(null);
                                    setChapterActive(null);
                                }
                            }}>
                            <h2 className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(5)}}>
                                <div className = "flex flex-col gap-2">
                                    <div className = "flex items-center justify-between gap-2"  onClick = {() => {setSubTopicSidebarActive(false); setChapter(null); setChapterActive(null);}}>   
                                        <h1 className = "cursor-pointer" onClick={() => setDropDown(null)}>Chemistry</h1>
                                        <button onClick={() => setDropDown(dropDown === 5 ? 0 : 5)}>
                                            {dropDown === 5 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dropDown === 5 ? 'max-h-96 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
                                        <div className = "flex flex-col gap-2 text-white p-2 border border-blue-400 rounded-md cursor-pointer">{chem.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'hover:bg-emerald-400'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1); setSubTopicSidebarActive(true)}} key={index}>{item}</p>))}
                                        </div>
                                    </div>
                                </div>
                            </h2>    
                        </div>
                        <div className = {`rounded-lg shadow-md text-white p-4 hover:scale-[110%] ${buttonActiveLecture === 6 ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white scale-[110%]' : 'hover:bg-blue-600 hover:text-white'}`} onClick={() => {setSelectedLecture(6); if(selectedLecture !== 6){
                                    setChapter(null);
                                    setSubTopic(null);
                                    setChapterActive(null);
                                }
                            }}>
                            <h2 className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(6)}}>
                                <div className = "flex flex-col gap-2">
                                    <div className = "flex items-center justify-between gap-2"  onClick = {() => {setSubTopicSidebarActive(false); setChapter(null); setChapterActive(null);}}>   
                                        <h1 className = "cursor-pointer" onClick={() => setDropDown(null)}>C Programming</h1>
                                        <button onClick={() => setDropDown(dropDown === 6 ? 0 : 6)}>
                                            {dropDown === 6 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dropDown === 6 ? 'max-h-96 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
                                        <div className = "flex flex-col gap-2 text-white p-2 border border-blue-400 rounded-md cursor-pointer">{clanguage.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'hover:bg-emerald-400'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1); setSubTopicSidebarActive(true)}} key={index}>{item}</p>))}
                                        </div>
                                    </div>
                                </div>
                            </h2>    
                        </div>
                        <div className = {`rounded-lg shadow-md text-white p-4 hover:scale-[110%] ${buttonActiveLecture === 7 ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white scale-[110%]' : 'hover:bg-blue-600 hover:text-white'}`} onClick={() => {setSelectedLecture(7); if(selectedLecture !== 7){
                                    setChapter(null);
                                    setSubTopic(null);
                                    setChapterActive(null);
                                }
                            }}>
                            <h2 className = "text-xl font-medium" onClick = {() => {setButtonActiveLecture(7)}}>
                                <div className = "flex items-center justify-between gap-2"  onClick = {() => {setSubTopicSidebarActive(false); setChapter(null); setChapterActive(null);}}>   
                                        <h1 className = "cursor-pointer" onClick={() => setDropDown(null)}>OOP Using Java</h1>
                                        <button onClick={() => setDropDown(dropDown === 7 ? 0 : 7)}>
                                            {dropDown === 7 ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dropDown === 7 ? 'max-h-96 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
                                        <div className = "flex flex-col gap-2 text-white p-2 border border-blue-400 rounded-md cursor-pointer">{java.map((item , index) => ( <p className = {`text-lg p-2 rounded-md ${chapterActive === index+1 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'hover:bg-emerald-400'} `} onClick = {() => {setChapter(index+1); setSubTopic(null); setButtonActive(null); setChapterActive(index+1); setSubTopicSidebarActive(true)}} key={index}>{item}</p>))}
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