import React , {useState , useEffect} from 'react'
import { useSubject } from '../context/SubjectContext';

const playlists = {
        1: "PL81b_GzVmpj974icYMeETH4DWa4MpU7ZH",
        2: "PLKS7ZMKnbPrSsOQDQOpYrDUp-4zQO8YFX",
        3: "PLT3bOBUU3L9iRoyhs8V1Io-xEsjfq4zI0",
        4: "PL81b_GzVmpj9FatpGbvAzosSGgOAAn5uA",
        5: "PLT3bOBUU3L9i9Ysvmznuawv1mR1r6ml0R",
        6: "PLELyD9hiZ4kjTqFvhtfb0tkSS8pdopqvx",
        7: "PLMBARyqASPojTZP7JXdi8zb5YB0dzmugY",
        8: "PLT3bOBUU3L9g0aergP43HK9ihc_UG7Kbx",
        9: "PLX-8MeNTXgAmKzmCB0zk3Rre68isiVIf5",
        
    }



const Maths = () => {
    const [videos , setVideos] = useState([]);
    const { chapter, selectedLecture, subTopic, setSubTopic, buttonActive, setButtonActive, subTopicSidebarActive, setSubTopicSidebarActive } = useSubject();

    useEffect(() => {
    if (!chapter || !playlists[chapter]) return;

    const fetchVideos = async () => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlists[chapter]}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
            );

                const data = await response.json();

                const fetchedVideos = data.items.map(item => ({
                    title: item.snippet.title,
                    description: item.snippet.description,
                    videoId: item.snippet.resourceId.videoId
                }));

                setVideos(fetchedVideos);
            }
        catch(error) {
            console.error(error);
                }
            };

            fetchVideos();
    }, [chapter]);

    useEffect(() => {
        setSubTopic(null);
        setButtonActive(null);
    }, [chapter , setSubTopic , setButtonActive]  );

  return (
    <>
            <div className = {`text-4xl font-bold text-white ${selectedLecture === 2 ? 'block' : 'hidden'}`}>
                        <div className = "flex justify-start m-5 gap-4">
                            <div className = "flex-1 w-full max-w-[1200px]">
                                <div className = "rounded-lg text-white h-[600px] flex items-center justify-center">
                                        <h2 className = {`text-3xl justify-center font-bold ${subTopic === null ? 'block' : 'hidden'}`}>
                                            Please select a Chapter to continue...
                                        </h2>
                                        {videos.length > 0 && subTopic !== null && (
                                            <iframe
                                                width={subTopicSidebarActive ? "900" : "1200"}
                                                height="600"
                                                src={`https://www.youtube.com/embed/${videos[subTopic - 1]?.videoId}`}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="PhyVideo rounded-lg"
                                            />
                                        )}
                                </div >
                                <div>
                                    {videos.map((video, index) => (
                                        <h1
                                            key={index}
                                            className={`text-3xl font-bold ml-4 mt-4 ${
                                                subTopic === index + 1 ? 'block' : 'hidden'
                                            }`}
                                        >
                                            {video.title}
                                        </h1>
                                    ))}
                                </div>
                                <div className = "rounded-lg shadow-lg ring-1 ring-blue-400 shadow-slate-950/30 p-6 mt-4">
                                    <h1 className = "text-2xl font-bold text-white mb-4 flex items-center justify-start">
                                        Description
                                    </h1>
                                    <p className = {`text-gray-300 text-lg ${chapter === null ? 'block' : 'hidden'}`}>
                                        Mathematics is a fundamental subject that plays a crucial role in various fields, including science, engineering, economics, and technology. It provides the tools and frameworks necessary for understanding and solving complex problems. The subject encompasses a wide range of topics, from basic arithmetic and algebra to advanced calculus, linear algebra, and differential equations. Mathematics is not only essential for academic pursuits but also for everyday life, as it helps us make informed decisions, analyze data, and understand patterns in the world around us. In this lecture series, we will explore key mathematical concepts and their applications across different disciplines.
                                    </p>
                                    <p className = {`text-gray-300 text-lg ${chapter === 1 ? 'block' : 'hidden'}`}>
                                        Matrices are a fundamental mathematical tool used in various fields, including physics, engineering, computer science, and economics. They provide a compact way to represent and manipulate data, solve systems of linear equations, and perform transformations in space. In this lecture, we will explore the basics of matrices, including their properties, operations such as addition, multiplication, and inversion, and their applications in solving real-world problems. We will also delve into concepts like determinants and eigenvalues, which are crucial for understanding the behavior of linear transformations and systems of equations. By the end of this lecture, you will have a solid foundation in matrix theory and its applications.
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 2 ? 'block' : 'hidden'}`}>
                                        Complex numbers are an extension of the real number system that includes the imaginary unit, denoted as 'i', where i^2 = -1. They are used to represent quantities that cannot be expressed as real numbers, such as the square root of negative numbers. In this lecture, we will explore the properties and operations of complex numbers, including addition, subtraction, multiplication, and division. We will also delve into hyperbolic functions, which are analogs of trigonometric functions but for a hyperbola instead of a circle. Additionally, we will discuss the logarithm of complex numbers and its applications in various fields such as engineering and physics. By the end of this lecture, you will have a comprehensive understanding of complex numbers and their significance in mathematics and beyond.
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 3 ? 'block' : 'hidden'}`}>
                                        Partial differentiation is a mathematical technique used to analyze functions of multiple variables. It involves taking the derivative of a function with respect to one variable while treating the other variables as constants. This technique is essential in various fields, including physics, engineering, and economics, as it allows us to understand how a function changes with respect to each variable independently. In this lecture, we will explore the concept of partial differentiation, its rules and properties, and its applications in solving problems involving multivariable functions. We will also discuss higher-order partial derivatives and their significance in understanding the curvature and behavior of functions in multiple dimensions. By the end of this lecture, you will have a solid grasp of partial differentiation and its applications in real-world scenarios.
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 4 ? 'block' : 'hidden'}`}>
                                        Application of partial differentiation is a crucial aspect of multivariable calculus that allows us to analyze and solve real-world problems involving functions of multiple variables. In this lecture, we will explore how partial differentiation can be applied to optimize functions, find critical points, and analyze the behavior of functions in various contexts. We will discuss techniques such as Lagrange multipliers for constrained optimization and how to use partial derivatives to determine the nature of critical points (maxima, minima, or saddle points). Additionally, we will delve into applications in physics, engineering, and economics, where partial differentiation is used to model and solve complex problems. By the end of this lecture, you will have a deeper understanding of how to apply partial differentiation effectively in various scenarios.   
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 5 ? 'block' : 'hidden'}`}>
                                        Numerical methods are a set of techniques used to approximate solutions to mathematical problems that cannot be solved analytically. These methods are essential in various fields, including engineering, physics, and computer science, where complex equations and systems often arise. In this lecture, we will explore different numerical methods for solving equations, such as the Newton-Raphson method, bisection method, and secant method. We will also discuss numerical integration techniques like the trapezoidal rule and Simpson's rule. Additionally, we will delve into the importance of error analysis and convergence in numerical methods to ensure accurate and reliable results. By the end of this lecture, you will have a solid understanding of numerical methods and their applications in solving real-world problems.
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 6 ? 'block' : 'hidden'}`}>
                                        Beta and Gamma functions are special mathematical functions that play a crucial role in various fields, including probability theory, statistics, and physics. The Beta function is defined as an integral that generalizes the factorial function to non-integer values, while the Gamma function extends the factorial function to complex numbers. In this lecture, we will explore the properties and applications of both functions. We will discuss how the Beta function can be used to compute probabilities in beta distributions and how the Gamma function is essential in defining distributions such as the gamma distribution. Additionally, we will delve into the relationship between these functions and their significance in solving problems involving integrals and series. By the end of this lecture, you will have a comprehensive understanding of Beta and Gamma functions and their applications in various mathematical contexts.
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 7 ? 'block' : 'hidden'}`}>
                                        Multiple integrals are a fundamental concept in multivariable calculus that allow us to compute volumes, areas, and other quantities in higher dimensions. They extend the idea of single-variable integration to functions of multiple variables. In this lecture, we will explore the concept of double and triple integrals, their properties, and how to evaluate them using various techniques such as iterated integrals and change of variables. We will also discuss applications of multiple integrals in physics, engineering, and probability theory, where they are used to model phenomena such as mass distribution, fluid flow, and probability densities. By the end of this lecture, you will have a solid understanding of multiple integrals and their significance in analyzing functions of several variables.
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 8 ? 'block' : 'hidden'}`}>
                                        Differential equations of first order and first degree are a fundamental topic in mathematics that have wide-ranging applications in various fields, including physics, engineering, and economics. In this lecture, we will explore the theory and methods for solving such equations. We will discuss different types of first-order differential equations, including separable, exact, and linear equations, and their solution techniques. Additionally, we will delve into applications of these equations in modeling real-world phenomena such as population growth, heat transfer, and electrical circuits. By the end of this lecture, you will have a solid understanding of first-order differential equations and their applications.
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 9 ? 'block' : 'hidden'}`}>
                                        Higher order linear differential equations with constant coefficients and variable coefficients are an important area of study in mathematics and its applications. In this lecture, we will explore the theory and methods for solving such equations. We will discuss the characteristic equation method for constant coefficients and the method of variation of parameters for variable coefficients. Additionally, we will delve into applications of these equations in modeling real-world phenomena such as mechanical vibrations, electrical circuits, and heat transfer. By the end of this lecture, you will have a solid understanding of higher order linear differential equations and their applications.
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
                                    <button className = {`flex justify-center bg-slate-900 text-white text-3xl rounded-lg shadow-lg shadow-slate-950/30 w-10 h-10 ${chapter === null ? 'hidden' : 'block'}`} onClick={() => {setSubTopicSidebarActive(!subTopicSidebarActive)}}>
                                        {'<'}
                                    </button>     
                            </div>
                            <div className = {`rounded-lg shadow-lg shadow-slate-950/30 w-[300px] p-4 ${subTopicSidebarActive ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                                <div className = "flex bg-gradient-to-r from-slate-900 to-blue-900 rounded-lg text-white justify-start gap-8 p-2 mb-4"> 
                                    <button className = "ml-2 mb-1 text-2xl" onClick={() => {setSubTopicSidebarActive(!subTopicSidebarActive)}}>
                                        |||
                                    </button>
                                    <h1 className = "text-2xl font-bold">
                                        Sub-Topics
                                    </h1>
                                </div>
                                <div className="flex flex-col gap-4 overflow-hidden overflow-y-auto h-[1000px] pr-2">
                                    {videos.map((video, index) => (
                                        <h2
                                            key={index}
                                            className={`rounded-lg p-4 text-xl font-bold ${
                                                buttonActive === index + 1
                                                    ? 'bg-slate-900 text-white scale-[110%]'
                                                    : 'hover:bg-blue-500'
                                            }`}
                                            onClick={() => {
                                                setSubTopic(index + 1);
                                                setButtonActive(index + 1);
                                            }}
                                        >
                                            {video.title}
                                        </h2>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default Maths
