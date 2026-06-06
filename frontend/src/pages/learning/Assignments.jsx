import React,
{
    useEffect,
    useState
}
from "react";

import {
    getAssignments,
    createAssignment,
    submitAssignment
}
from "../../services/assignmentService";

const Assignments = () => {

    const [assignments,
        setAssignments] = useState([]);

    const [title,
        setTitle] = useState("");

    const [subject,
        setSubject] = useState("");

    const [description,
        setDescription] = useState("");

    const [dueDate,
        setDueDate] = useState("");

    const loadAssignments =
    async () => {

        const data =
            await getAssignments();

        setAssignments(data);
    };

    useEffect(() => {
        loadAssignments();
    }, []);

    const handleCreate =
    async () => {

        await createAssignment({
            title,
            subject,
            description,
            dueDate
        });

        loadAssignments();

        setTitle("");
        setSubject("");
        setDescription("");
        setDueDate("");
    };

    const submitted =
        assignments.filter(
            a => a.status === "Submitted"
        ).length;

        const overdue =
        assignments.filter(
            a =>
                a.status === "Pending" &&
                new Date(a.dueDate) < new Date()
        ).length;

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-700 text-white p-8">
            <div className="grid grid-cols-3 mt-20 gap-4 mb-8">

                <div className="bg-blue-700 p-6 rounded-xl text-xl font-bold">
                    <h2>Total</h2>
                    <p>{assignments.length}</p>
                </div>

                <div className="bg-green-700 p-6 rounded-xl text-xl font-bold">
                    <h2>Submitted</h2>
                    <p>{submitted}</p>
                </div>

                <div className="bg-red-700 p-6 rounded-xl text-xl font-bold">
                    <h2>Overdue</h2>
                    <p>{overdue}</p>
                </div>

            </div>

            <h1 className="text-4xl  font-bold mb-8">
                Assignments
            </h1>

            <div className="bg-slate-800 p-6 rounded-lg mb-8">
                <h1 className="text-2xl font-bold mb-4">
                    Add Assignments
                </h1>
                <input
                    placeholder="Title"
                    value={title}
                    onChange={(e)=>
                        setTitle(
                            e.target.value
                        )
                    }
                    className="w-full p-2 mb-4 rounded-lg text-black"
                />

                <input
                    placeholder="Subject"
                    value={subject}
                    onChange={(e)=>
                        setSubject(
                            e.target.value
                        )
                    }
                    className="w-full p-2 mb-4 rounded-lg text-black"
                />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e)=>
                        setDescription(
                            e.target.value
                        )
                    }
                    className="w-full p-2 mb-4 rounded-lg text-black"
                />

                <p>
                    Due Date:
                </p>

                <input
                    type="date"
                    value={dueDate}
                    onChange={(e)=>
                        setDueDate(
                            e.target.value
                        )
                    }
                    className="w-full p-2 mb-4 rounded-lg text-black"
                />

                <button
                    onClick={handleCreate}
                    className="bg-blue-600 px-4 py-2 rounded hover:scale-[110%] transition"
                >
                    Add Assignment
                </button>

            </div>

            <div className="grid gap-4">

                {assignments.map(
                    (assignment) => {

                    const overdue =
                        new Date(
                            assignment.dueDate
                        ) < new Date()
                        &&
                        assignment.status
                        !== "Submitted";

                    return (

                    <div
                        key={assignment._id}
                        className="bg-slate-800 p-6 rounded-lg"
                    >

                        <h2 className="text-2xl font-bold">
                            {assignment.title}
                        </h2>

                        <p>
                            {assignment.subject}
                        </p>

                        <p>
                            {assignment.description}
                        </p>

                        <p>
                            Due:
                            {" "}
                            {new Date(
                                assignment.dueDate
                            ).toLocaleDateString()}
                        </p>

                        <p
                            className={
                                overdue
                                ? "text-red-400"
                                : "text-green-400"
                            }
                        >
                            {overdue
                                ? "Overdue"
                                : assignment.status}
                        </p>

                        {assignment.status
                        === "Pending" && (

                            <button
                                onClick={async () => {

                                    await submitAssignment(
                                        assignment._id
                                    );

                                    loadAssignments();
                                }}
                                className="bg-green-600 px-4 py-2 rounded hover:scale-[110%] transition mt-4"
                            >
                                Mark Submitted
                            </button>
                        )}

                    </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Assignments;