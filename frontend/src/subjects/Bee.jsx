import React , {useState , useEffect} from 'react'
import { useSubject } from '../context/SubjectContext';

const playlists = {
        1: "PL81b_GzVmpj_hN39sNfcpzssXM4G7dDSj",
        2: "PL81b_GzVmpj_iPibA0J-aBNb-bitJHz2w",
        3: "PLgwJf8NK-2e6bxsyFDqkSjn9pDhk7J-q8",
        4: "PL81b_GzVmpj-OT81FF03ERn8ooCMVgycH"
    }


const Bee = () => {
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
            <div className = {`text-4xl font-bold text-white ${selectedLecture === 3 ? 'block' : 'hidden'}`}>
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
                                        Basic Electrical Engineering (BEE) is a fundamental course that introduces students to the principles and applications of electrical engineering. The course covers a wide range of topics, including DC circuits, AC circuits, logic gates, latches and flip-flops, and communication systems. Through lectures, problem-solving sessions, and practical applications, students will gain a solid understanding of electrical engineering concepts and their relevance in various fields such as electronics, telecommunications, and power systems. By the end of this course, students will be equipped with the knowledge and skills necessary to analyze and design basic electrical circuits and systems.
                                    </p>
                                    <p className = {`text-gray-300 text-lg ${chapter === 1 ? 'block' : 'hidden'}`}>
                                        DC Circuits are fundamental to understanding the flow of electric current in a circuit. This lecture covers the basic components of DC circuits, including resistors, capacitors, and inductors, as well as Ohm's Law and Kirchhoff's Laws. Students will learn how to analyze simple DC circuits using techniques such as series and parallel combinations, voltage division, and current division. The lecture also includes numerical problems to reinforce the theoretical concepts and enhance problem-solving skills in DC circuit analysis.
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 2 ? 'block' : 'hidden'}`}>
                                        AC Circuits are essential for understanding the behavior of electric circuits that operate with alternating current. This lecture covers the fundamental concepts of AC circuits, including sinusoidal waveforms, phasors, impedance, and power in AC circuits. Students will learn how to analyze AC circuits using techniques such as phasor diagrams, complex impedance, and power factor correction. The lecture also includes numerical problems to reinforce the theoretical concepts and enhance problem-solving skills in AC circuit analysis.
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 3 ? 'block' : 'hidden'}`}>
                                        Logic Gates are the building blocks of digital circuits. This lecture covers the basic logic gates, including AND, OR, NOT, NAND, NOR, XOR, and XNOR gates. Students will learn how to analyze and design combinational logic circuits using these gates, as well as how to simplify logic expressions using Boolean algebra and Karnaugh maps. The lecture also includes numerical problems to reinforce the theoretical concepts and enhance problem-solving skills in digital logic design.
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 4 ? 'block' : 'hidden'}`}>
                                        Latches and Flip-Flops are fundamental components of sequential logic circuits. This lecture covers the basic types of latches and flip-flops, including SR latch, D latch, JK flip-flop, and T flip-flop. Students will learn how to analyze and design sequential logic circuits using these components, as well as how to create state diagrams and timing diagrams for sequential circuits. The lecture also includes numerical problems to reinforce the theoretical concepts and enhance problem-solving skills in sequential logic design.   
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

export default Bee
