import React , {useState , useEffect} from 'react'
import { useSubject } from '../context/SubjectContext';

const playlists = {
        1: "PLT3bOBUU3L9jVJYwDCDE8FOJDvr0cU6U0",
        2: "PLT3bOBUU3L9gUQNXoRtPX-wW9QXq31c4r",
        3: "PLT3bOBUU3L9jJXGSFC_BQczz7nZpmcjO6",
        4: "PL81b_GzVmpj_f5oVMbGVzS757qTB94UDo"
    }



const Cem = () => {
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

    const chapterContent = videos.map(video => video.title);

  return (
    <>
            <div className = {`text-4xl font-bold text-white ${selectedLecture === 4 ? 'block' : 'hidden'}`}>
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
                                        Computational Engineering Mechanics (CEM) is a multidisciplinary field that combines principles of engineering, mathematics, and computer science to analyze and solve complex problems in various engineering domains. It involves the use of computational methods and simulations to model and predict the behavior of physical systems, such as structures, fluids, and materials. CEM is widely used in industries such as aerospace, automotive, civil engineering, and manufacturing to optimize designs, improve performance, and reduce costs. By leveraging advanced algorithms and high-performance computing, CEM enables engineers to gain insights into the behavior of complex systems and make informed decisions in the design and analysis process.
                                    </p>
                                    <p className = {`text-gray-300 text-lg ${chapter === 1 ? 'block' : 'hidden'}`}>
                                        System of Forces is a fundamental concept in engineering mechanics that involves analyzing the forces acting on a body or structure. It encompasses the study of equilibrium, where the sum of forces and moments must equal zero for a system to be in a state of balance. This topic covers various types of forces, including gravitational, normal, frictional, and applied forces, as well as their interactions and effects on structures. Understanding the system of forces is crucial for designing safe and efficient structures, as it allows engineers to predict how a structure will respond to different loading conditions and ensure its stability and integrity.
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 2 ? 'block' : 'hidden'}`}>
                                        Equilibrium of Rigid Bodies is a fundamental topic in engineering mechanics that focuses on the conditions necessary for a rigid body to be in a state of equilibrium. It involves analyzing the forces and moments acting on a body and ensuring that they balance each other out. This topic covers concepts such as free-body diagrams, the principles of statics, and the application of equilibrium equations to solve for unknown forces and moments. Understanding the equilibrium of rigid bodies is essential for designing structures and mechanical systems that can withstand various loading conditions without collapsing or experiencing excessive deformation.
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 3 ? 'block' : 'hidden'}`}>
                                        Friction is a force that opposes the relative motion or tendency of motion between two surfaces in contact. It plays a crucial role in engineering mechanics, as it affects the behavior of structures and mechanical systems. This topic covers different types of friction, including static friction, kinetic friction, and rolling friction, as well as their characteristics and applications. Understanding friction is essential for designing systems that can effectively manage and utilize this force, such as brakes, clutches, and tires, to ensure safety and performance in various engineering applications.
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 4 ? 'block' : 'hidden'}`}>
                                        Kinematics of Rigid Bodies is a fundamental topic in engineering mechanics that focuses on the motion of rigid bodies without considering the forces that cause the motion. It involves analyzing the position, velocity, and acceleration of rigid bodies in two or three-dimensional space. This topic covers concepts such as relative motion, angular velocity, and the use of coordinate systems to describe the motion of rigid bodies. Understanding kinematics is essential for designing and analyzing mechanical systems, as it allows engineers to predict how a body will move under various conditions and ensure its proper functioning in applications such as robotics, vehicle dynamics, and machinery design.   
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
                                    {chapterContent.map((subtopic, index) => (
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
                                            {subtopic}
                                        </h2>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default Cem
