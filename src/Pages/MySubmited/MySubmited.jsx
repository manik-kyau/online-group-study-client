import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const MySubmited = () => {
    const { user } = useContext(AuthContext);
    const [submitAssignment, setSubmitAssignment] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/submits?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setSubmitAssignment(data))
            // const remaining = data.filter(assignmentdata => assignmentdata.studentEmail === user?.email);
                // console.log(remaining);
                // setSubmitAssignment(remaining)
    }, [])

    return (
        <div className=''>
            <div className="overflow-x-auto my-12">
                <table className="table table-xs ">
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-lg font-bold'>Title</th>
                            <th className='text-lg font-bold'>Marks</th>
                            <th className='text-lg font-bold'>Obtained Marks</th>
                            <th className='text-lg font-bold'> feedback</th>
                            <th className='text-lg font-bold'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            submitAssignment.map((sAssignment,idx)=>(
                                <tr key={idx}>
                            <th className='text-base font-bold'>{idx + 1}</th>
                            <td className='text-base font-bold'>{sAssignment.title}</td>
                            <td className='text-base font-bold'>{sAssignment.marks}</td>
                            <td className='text-base font-bold'>{sAssignment?.givemark}</td>
                            <td className='text-base font-bold'>{sAssignment?.feedback}</td>
                            <td className='bg-green-300 text-base font-bold'>{sAssignment?.givemark ? "Complate" : "Pending"}</td>
                        </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySubmited;