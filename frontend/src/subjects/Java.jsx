import React , {useState , useEffect} from 'react'
import { useSubject } from '../context/SubjectContext';

const playlists = {
        1: "PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk",
        2: "PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop"
    }



const Java = () => {
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
            <div className = {`text-4xl font-bold text-white ${selectedLecture === 7 ? 'block' : 'hidden'}`}>
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
                                        Java is a versatile and widely-used programming language that is known for its platform independence, object-oriented programming capabilities, and extensive libraries. It is used for developing a wide range of applications, from web and mobile applications to enterprise software and games. Java's "write once, run anywhere" philosophy allows developers to create applications that can run on any device with a Java Virtual Machine (JVM). With its robust security features, scalability, and strong community support, Java continues to be a popular choice for developers around the world.

                                    </p>
                                    <p className = {`text-gray-300 text-lg ${chapter === 1 ? 'block' : 'hidden'}`}>
                                        Object Oriented Programming (OOP) is a programming paradigm that uses "objects" to design applications and computer programs. It utilizes several key principles, including encapsulation, inheritance, polymorphism, and abstraction. OOP allows developers to create modular, reusable code by organizing data and behavior into objects. This approach promotes code maintainability and scalability, making it easier to manage complex software systems. In Java, OOP is a fundamental concept that enables developers to create classes and objects to model real-world entities and their interactions effectively.
                                    </p>
                                    <p className={`text-gray-300 text-lg ${chapter === 2 ? 'block' : 'hidden'}`}>
                                        DSA with Java refers to the implementation of Data Structures and Algorithms using the Java programming language. Data Structures are ways of organizing and storing data to enable efficient access and modification, while Algorithms are step-by-step procedures for solving problems. Java provides a rich set of built-in data structures such as arrays, linked lists, stacks, queues, trees, and graphs, along with powerful libraries like the Collections Framework. Learning DSA with Java helps developers understand how to optimize code for performance and solve complex problems effectively, making it an essential skill for software development and competitive programming.
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

export default Java
