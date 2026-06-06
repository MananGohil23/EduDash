import axios from "axios";

const API =
"https://edudash-hyka.onrender.com/api/assignments";

const getToken = () =>
    sessionStorage.getItem("token");

export const getAssignments =
async () => {

    const response =
        await axios.get(API, {
            headers: {
                Authorization:
                `Bearer ${getToken()}`
            }
        });

    return response.data;
};

export const createAssignment =
async (assignmentData) => {

    const response =
        await axios.post(
            API,
            assignmentData,
            {
                headers: {
                    Authorization:
                    `Bearer ${getToken()}`
                }
            }
        );

    return response.data;
};

export const submitAssignment =
async (id) => {

    const response =
        await axios.put(
            `${API}/${id}`,
            {},
            {
                headers: {
                    Authorization:
                    `Bearer ${getToken()}`
                }
            }
        );

    return response.data;
};