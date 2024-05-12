import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PendingAssignment = () => {
    const [pendingAssignment, setPendingAssignment] = useState([]);
    const { _id, title, email, marks, assignment_id, studentName, pdf } = pendingAssignment;

    useEffect(() => {
        fetch('http://localhost:5000/submits')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(!data.givemark){
                    console.log(data);
                    setPendingAssignment(data)
                }
                // setPendingAssignment(data)
            })
        // const remaining = data.filter(assignmentdata => assignmentdata.studentEmail === user?.email);
        // console.log(remaining);
        // setSubmitAssignment(remaining)
    }, [])

    return (
        <div>
            <h2>Pending assignment: {pendingAssignment.length}</h2>
            <div className="overflow-x-auto my-12">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Marks</th>
                            <th>Examinee Name</th>
                            <th> Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pendingAssignment.map((pAssignment, idx) => (
                                <tr key={idx}>
                                    <th></th>
                                    <th>{pAssignment.title}</th>
                                    <td>{pAssignment.marks}</td>
                                    <td>{pAssignment.studentName}</td>
                                    <td>pending</td>
                                    <td>
                                        <Link to={`/givemark/${pAssignment._id}`}>
                                            <button className="btn">Give Mark</button>
                                        </Link>
                                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                        {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Give Mark</button> */}
                                        {/* <dialog id="my_modal_3" className="modal"> */}
                                        {/* <div className="modal-box "> */}
                                        {/* <form method="dialog"> */}
                                        {/* if there is a button in form, it will close the modal */}
                                        {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
                                        {/* </form> */}
                                        {/* <div className="border m-4 p-5">
                                            <h3 className="font-bold text-lg">Hello!</h3>
                                            <p className="py-4 font-bold text-xl">Submit Your Assignment.</p>
                                            <form action="">
                                                <div>
                                                    <a href={pAssignment.pdf} target='_blank'>Assignment link </a>
                                                    <label className="block w-full">
                                                        <span className="mb-1 text-lg font-semibold">Give Mark</span>
                                                        <input type="text" name='givmark' placeholder="Enter mark" className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                                                    </label>
                                                    <label className="block w-full mt-5">
                                                        <span className="mb-1 text-lg font-semibold">Feedback</span>
                                                        <input name="feedback" id="" placeholder="Enter Feedback" className="block  w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-2" ></input>
                                                    </label>
                                                </div>
                                                <div className="my-6">
                                                    <button className="btn text-lg font-semibold">Submit</button>
                                                </div>
                                            </form>
                                        </div> */}
                                        {/* </div> */}
                                        {/* </dialog> */}
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingAssignment;