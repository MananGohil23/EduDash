import { createContext, useContext, useState} from "react";

const SubjectContext = createContext();

export const SubjectProvider = ({ children }) => {
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedSubTopic, setSelectedSubTopic] = useState(null);

    return (
        <SubjectContext.Provider value={{ selectedSubject, setSelectedSubject, selectedSubTopic, setSelectedSubTopic }}>
            {children}
        </SubjectContext.Provider>
    );
};

export const useSubject = () => {
    return useContext(SubjectContext);
};
