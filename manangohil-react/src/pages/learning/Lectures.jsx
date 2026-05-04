import React from 'react'
import { useState } from 'react';
const Lectures = () => {
    const [selectedLecture, setSelectedLecture] = useState(null);
    const [subTopic , setSubTopic] = useState(null);
    const [buttonActive, setButtonActive] = useState(null);
    const [buttonActiveLecture, setButtonActiveLecture] = useState(null);
    return (
        <>
            <div className = "bg-gray-100 h-full flex">
                <div className = "bg-white w-[350px] shadow-lg rounded-lg p-6">
                    <h1 className = "text-4xl font-bold mb-6 text-slate-900 items-center flex justify-center">
                        Topics
                    </h1>
                    <div className = "flex flex-col gap-4 transition">
                        <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActiveLecture === 1 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`} onClick={() => {setSelectedLecture(1); setSubTopic(null)}}>
                            <h2 className = "text-xl font-medium" onClick = {() => setButtonActiveLecture(1)}>
                                1. Data Structures 
                            </h2>    
                        </div>
                        <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActiveLecture === 2 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`} onClick={() => {setSelectedLecture(2); setSubTopic(null)}}>
                            <h2 className = "text-xl font-medium" onClick = {() => setButtonActiveLecture(2)}>
                                2. Algorithms 
                            </h2>    
                        </div>
                        <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActiveLecture === 3 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`} onClick={() => {setSelectedLecture(3); setSubTopic(null)}}>
                            <h2 className = "text-xl font-medium" onClick = {() => setButtonActiveLecture(3)}>
                                3. JavaScript Fundamentals
                            </h2>    
                        </div>
                        <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActiveLecture === 4 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`} onClick={() => {setSelectedLecture(4); setSubTopic(null)}}>
                            <h2 className = "text-xl font-medium" onClick = {() => setButtonActiveLecture(4)}>
                                4. Document Object Method (DOM)
                            </h2>    
                        </div>
                        <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActiveLecture === 5 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`} onClick={() => {setSelectedLecture(5); setSubTopic(null)}}>
                            <h2 className = "text-xl font-medium" onClick = {() => setButtonActiveLecture(5)}>
                                5. React.js
                            </h2>    
                        </div>
                        <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActiveLecture === 6 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`} onClick={() => {setSelectedLecture(6); setSubTopic(null)}}>
                            <h2 className = "text-xl font-medium" onClick = {() => setButtonActiveLecture(6)}>
                                6. Node.js
                            </h2>    
                        </div>
                        <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActiveLecture === 7 ? 'bg-slate-900 text-white scale-[110%]' : 'hover:bg-gray-300'}`} onClick={() => {setSelectedLecture(7); setSubTopic(null)}}>
                            <h2 className = "text-xl font-medium" onClick = {() => setButtonActiveLecture(7)}>
                                7. Machine Learning Basics
                            </h2>    
                        </div>
                    </div>
                </div>
                <div className = {`${selectedLecture === null ? 'block' : 'hidden'} text-4xl font-bold text-slate-900 items-center flex justify-center w-full`}>
                    <h1 >Please select a lecture to view its content</h1>
                </div>
                <div className = {`${selectedLecture === null ? 'hidden' : 'rounded-lg w-full'}`}>
                    <div className = {`text-4xl font-bold text-white ${selectedLecture === 1 ? 'block' : 'hidden'}`}>
                        <div className = "flex justify-start m-5 gap-4">
                            <div>
                                <div className = "bg-black rounded-lg  w-[900px] h-[600px] flex items-center justify-center">
                                    <h2 className = "text-xl font-bold text-white">
                                        Data Structures lectures coming soon...
                                    </h2>
                                </div>
                                <div className = {`${subTopic === 1 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Introduction to Data Structures </h1>
                                </div>
                                <div className = {`${subTopic === 2 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Arrays </h1>
                                </div>
                                <div className = {`${subTopic === 3 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Linked Lists </h1>
                                </div>
                                <div className = {`${subTopic === 4 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Stacks </h1>
                                </div>
                                <div className = {`${subTopic === 5 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Queues </h1>
                                </div>
                                <div className = {`${subTopic === 6 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Trees </h1>
                                </div>
                                <div className = {`${subTopic === 7 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Graphs </h1>
                                </div>
                                <div className = {`${subTopic === 8 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Hashing </h1>
                                </div>
                                <div className = {`${subTopic === 9 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Sorting Techniques </h1>
                                </div>
                                <div className = {`${subTopic === 10 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Searching Techniques </h1>
                                </div>
                                <div className = {`${subTopic === 11 ? 'block' : 'hidden'}`}>
                                    <h1 className = "text-3xl font-bold text-slate-900 ml-4 mt-4"> Advanced Data Structures </h1>
                                </div>
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 w-[900px] p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Description
                                    </h1>
                                    <p className = "text-gray-600 text-lg">
                                        In this lecture series, we will cover the fundamental data structures that are essential for any programmer. We will start with an introduction to data structures and their importance in computer science. Then, we will dive into specific data structures such as arrays, linked lists, stacks, queues, trees, graphs, hashing, sorting techniques, and searching techniques. We will also touch upon advanced data structures for those who want to explore further. Each lecture will include explanations, examples, and practical applications to help you understand how to use these data structures effectively in your programming projects.
                                    </p>
                                </div>
                            </div>
                            <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 w-[300px] p-6">
                                <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-center">
                                    Sub-Topics
                                </h1>
                                <div className = "flex flex-col gap-4">
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(1)}>
                                            Introduction to Data Structures
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(2)}>
                                            Arrays
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(3)}>
                                            Linked Lists
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(4)}>
                                            Stacks
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(5)}>
                                            Queues
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(6)}>
                                            Trees
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(7)}>
                                            Graphs
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(8)}>
                                            Hashing
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(9)}>
                                            Sorting Techniques
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(10)}>
                                            Searching Techniques
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(11)}>
                                            Advanced Data Structures (optional)
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = {`text-4xl font-bold text-white items-center flex justify-center ${selectedLecture === 2 ? 'block' : 'hidden'}`}>
                        <div className = "flex justify-start m-5 gap-4">
                            <div>
                                <div className = "bg-black rounded-lg  w-[900px] h-[600px] flex items-center justify-center">
                                    <h2 className = "text-xl font-bold text-white">
                                        Algorithms lectures coming soon...
                                    </h2>
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
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 w-[900px] p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Description
                                    </h1>
                                    <p className = "text-gray-600 text-lg">
                                        In this lecture series, we will cover the fundamental algorithms that are essential for any programmer. We will start with an introduction to algorithms and their importance in computer science. Then, we will dive into specific algorithms such as algorithm analysis, design techniques, recursion, searching algorithms, sorting algorithms, graph algorithms, string algorithms, greedy algorithms, dynamic programming, complexity classes, and advanced topics for those who want to explore further. Each lecture will include explanations, examples, and practical applications to help you understand how to use these algorithms effectively in your programming projects.
                                    </p>
                                </div>
                            </div>
                            <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 w-[300px] p-6">
                                <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-center">
                                    Sub-Topics
                                </h1>
                                <div className = "flex flex-col gap-4">
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(1)}>
                                            Introduction to Algorithms
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(2)}>
                                            Algorithm Analysis
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(3)}>
                                            Design Techniques
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(4)}>
                                            Recursion
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(5)}>
                                            Searching Algorithms
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(6)}>
                                            Sorting Algorithms 
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(7)}>
                                            Graph Algorithms 
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(8)}>
                                            String Algorithms 
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(9)}>
                                            Greedy Algorithms (Detailed)
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(10)}>
                                            Dynamic Programming (Detailed)
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(11)}>
                                            Complexity Classes (Basic)
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(12)}>
                                            Advanced Topics (Optional)
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = {`text-4xl font-bold text-white items-center flex justify-center ${selectedLecture === 3 ? 'block' : 'hidden'}`}>
                        <div className = "flex justify-start m-5 gap-4">
                            <div>
                                <div className = "bg-black rounded-lg  w-[900px] h-[600px] flex items-center justify-center">
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
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 w-[900px] p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Description
                                    </h1>
                                    <p className = "text-gray-600 text-lg">
                                        In this lecture series, we will cover the fundamental concepts of JavaScript programming. We will start with an introduction to JavaScript and its role in web development. Then, we will dive into JavaScript syntax and basics, variables and data types, operators, control statements, functions, arrays, objects, error handling, ES6+ features, asynchronous JavaScript, and browser storage. Each lecture will include explanations, examples, and practical applications to help you understand how to use JavaScript effectively in your web development projects.
                                        </p>
                                </div>
                            </div>
                            <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 w-[300px] p-6">
                                <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-center">
                                    Sub-Topics
                                </h1>
                                <div className = "flex flex-col gap-4">
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(1)}>
                                            Introduction to JavaScript
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(2)}>
                                            JavaScript Syntax and Basics
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(3)}>
                                            Variables and Data Types
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(4)}>
                                            Operators
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(5)}>
                                            Control Statements
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(6)}>
                                            Functions
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(7)}>
                                            Arrays
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(8)}>
                                            Objects 
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(9)}>
                                            Error Handling
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(10)}>
                                            ES6+ Features (Basics)
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(11)}>
                                            Asynchronous JavaScript (Introduction)
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(12)}>
                                            Browser Storage (LocalStorage and SessionStorage)
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = {`text-4xl font-bold text-white items-center flex justify-center ${selectedLecture === 4 ? 'block' : 'hidden'}`}>
                        <div className = "flex justify-start m-5 gap-4">
                            <div>
                                <div className = "bg-black rounded-lg  w-[900px] h-[600px] flex items-center justify-center">
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
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 w-[900px] p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Description
                                    </h1>
                                    <p className = "text-gray-600 text-lg">
                                        In this lecture series, we will cover the fundamental concepts of the Document Object Model (DOM) and how it interacts with JavaScript to create dynamic web pages. We will start with an introduction to the DOM and its structure, then move on to accessing and manipulating DOM elements, event handling, forms, DOM collections, and performance best practices. Each lecture will include explanations, examples, and practical applications to help you understand how to use the DOM effectively in your web development projects.
                                        </p>
                                </div>
                            </div>
                            <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 w-[300px] p-6">
                                <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-center">
                                    Sub-Topics
                                </h1>
                                <div className = "flex flex-col gap-4">
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(1)}>
                                            Introduction to DOM 
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(2)}>
                                            Accessing DOM Elements
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(3)}>
                                            DOM Traversal
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(4)}>
                                            Manipulating DOM Elements
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(5)}>
                                            Creating and Removing DOM Elements
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(6)}>
                                            Event Handling 
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(7)}>
                                            Event Propagation
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(8)}>
                                            Forms and DOM 
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(9)}>
                                            DOM Collections
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(10)}>
                                            BOM (Browser Object Model) Basics
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(11)}>
                                            DOM Performance and Best Practices
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(12)}>
                                            Modern DOM Features and APIs
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = {`text-4xl font-bold text-white items-center flex justify-center ${selectedLecture === 5 ? 'block' : 'hidden'}`}>
                        <div className = "flex justify-start m-5 gap-4">
                            <div>
                                <div className = "bg-black rounded-lg  w-[900px] h-[600px] flex items-center justify-center">
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
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 w-[900px] p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Description
                                    </h1>
                                    <p className = "text-gray-600 text-lg">
                                        In this lecture series, we will cover the fundamental concepts of React.js, a popular JavaScript library for building user interfaces. We will start with an introduction to React and its core principles, then move on to setting up a React development environment, understanding JSX, creating components, managing state and props, handling events, conditional rendering, lists and keys, forms in React, hooks, routing, styling, and making API calls. Each lecture will include explanations, examples, and practical applications to help you understand how to use React effectively in your web development projects.
                                        </p>
                                </div>
                            </div>
                            <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 w-[300px] p-6">
                                <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-center">
                                    Sub-Topics
                                </h1>
                                <div className = "flex flex-col gap-4">
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(1)}>
                                            Introduction to React 
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(2)}>
                                            Setting up React
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(3)}>
                                            JSX (JavaScript XML)
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(4)}>
                                            Components
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(5)}>
                                            Props
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(6)}>
                                            State 
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(7)}>
                                            Event Handling
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(8)}>
                                            Conditional Rendering 
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(9)}>
                                            Lists and Keys
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(10)}>
                                            Forms in React 
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(11)}>
                                            Hooks
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(12)}>
                                            Routing 
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(13)}>
                                            Styling in React 
                                        </h2>
                                    </div>
                                    <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                                        <h2 className = "text-lg font-medium text-gray-700" onClick = {() => setSubTopic(14)}>
                                            API Calls and Data Fetching in React 
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = {`text-4xl font-bold text-white items-center flex justify-center ${selectedLecture === 6 ? 'block' : 'hidden'}`}>
                        <div className = "flex justify-start m-5 gap-4">
                            <div>
                                <div className = "bg-black rounded-lg  w-[900px] h-[600px] flex items-center justify-center">
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
                                <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 w-[900px] p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-start">
                                        Description
                                    </h1>
                                    <p className = "text-gray-600 text-lg">
                                        In this lecture series, we will cover the fundamental concepts of Node.js, a powerful JavaScript runtime built on Chrome's V8 engine. We will start with an introduction to Node.js and its architecture, then move on to installation and setup, core modules, file system operations, creating a server, working with modules, package management, asynchronous programming, event handling, and working with frameworks. We will also cover RESTful APIs, database integration, authentication and security, error handling and debugging, environment variables and configuration, streams and buffers, performance and scaling, testing, and deployment. Each lecture will include explanations, examples, and practical applications to help you understand how to use Node.js effectively in your web development projects.
                                        </p>
                                </div>
                            </div>
                            <div className = "bg-white rounded-lg shadow-lg shadow-slate-950/30 w-[300px] p-6">
                                <h1 className = "text-2xl font-bold text-slate-900 mb-4 flex items-center justify-center">
                                    Sub-Topics
                                </h1>
                                <div className = "flex flex-col gap-4">
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 1 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(1); setButtonActive(1)}}>
                                            Introduction to Node.js
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 2 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(2); setButtonActive(2)}}>
                                            Installation and Setup
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 3 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(3); setButtonActive(3)}}>
                                            Node.js Architecture
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 4 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(4); setButtonActive(4)}}>
                                            Core Modules
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 5 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(5); setButtonActive(5)}}>
                                            File System Operations
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 6 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(6); setButtonActive(6)}}>
                                            Creating a Server 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 7 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(7); setButtonActive(7)}}>
                                            Modules in Node.js
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 8 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(8); setButtonActive(8)}}>
                                            Package Management
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 9 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(9); setButtonActive(9)}}>
                                            Asynchronous Programming
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 10 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(10); setButtonActive(10)}}>
                                            Event Handling  
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 11 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(11); setButtonActive(11)}}>
                                            Working with Frameworks
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 12 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium " onClick = {() => {setSubTopic(12); setButtonActive(12)}}>
                                            RESTFul APIs 
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 13 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(13); setButtonActive(13)}}>
                                            Database Integration (Introduction)
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 14 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(14); setButtonActive(14)}}>
                                            Authentication and Security (Basics)
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 15 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(15); setButtonActive(15)}}>
                                            Error Handling and Debugging
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 16 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(16); setButtonActive(16)}}>
                                            Environment Variables and Configuration
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 17 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(17); setButtonActive(17)}}>
                                            Streams and Buffers
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 18 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(18); setButtonActive(18)}}>
                                            Performance and Scaling
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 19 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(19); setButtonActive(19)}}>
                                            Testing (Basic)
                                        </h2>
                                    </div>
                                    <div className = {`bg-gray-200 rounded-lg shadow-md text-gray-700 p-4 hover:scale-[110%] ${buttonActive === 20 ? 'bg-slate-900 text-white border-2 border-slate-900 scale-[110%]' : 'hover:bg-gray-300'}`}>
                                        <h2 className = "text-lg font-medium" onClick = {() => {setSubTopic(20); setButtonActive(20)}}>
                                            Deployment and Hosting (Introduction)
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = {`text-4xl font-bold text-white items-center flex justify-center ${selectedLecture === 7 ? 'block' : 'hidden'}`}>
                        7. State and Props lectures coming soon...
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lectures;