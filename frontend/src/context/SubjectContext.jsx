import { createContext, useContext, useState} from "react";

const SubjectContext = createContext();

export const SubjectProvider = ({ children }) => {
    const [selectedLecture, setSelectedLecture] = useState(null);
    const [subTopic , setSubTopic] = useState(null);
    const [buttonActive, setButtonActive] = useState(null);
    const [buttonActiveLecture, setButtonActiveLecture] = useState(null);
    const [subTopicSidebarActive , setSubTopicSidebarActive] = useState(true);
    const [dropDown, setDropDown] = useState(null);
    const [chapter , setChapter] = useState(0);
    const [chapterActive , setChapterActive] = useState(null);
    const [starred , setStarred] = useState(0);


    return (
        <SubjectContext.Provider value={{ chapter, setChapter, selectedLecture, setSelectedLecture, subTopic, setSubTopic, buttonActive, setButtonActive, buttonActiveLecture, setButtonActiveLecture, subTopicSidebarActive, setSubTopicSidebarActive, dropDown, setDropDown, chapterActive, setChapterActive, starred, setStarred }}>
            {children}
        </SubjectContext.Provider>
    );
};

export const useSubject = () => {
    return useContext(SubjectContext);
};
