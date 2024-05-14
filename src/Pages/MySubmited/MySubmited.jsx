import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

const MySubmited = () => {
    const { user } = useContext(AuthContext);
    const [submitAssignment, setSubmitAssignment] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/submits?email=${user?.email}`,{credentials:'include'})
            .then(res => res.json())
            .then(data => {
                // setSubmitAssignment(data)
                const remaining = data.filter(assignmentdata => assignmentdata.email === user?.email);
                // console.log(remaining);
                setSubmitAssignment(remaining);
            })
    }, [])

    return (
        <div className=''>
            <Helmet>
                <title>MyAssignment</title>
            </Helmet>

            <div className="overflow-x-auto my-12">
                <table className="table table-xs ">
                    <thead className='bg-gray-300 '>
                        <tr>
                            <th></th>
                            <th className='text-lg font-bold py-4'>Title</th>
                            <th className='text-lg font-bold'>Marks</th>
                            <th className='text-lg font-bold'>Obtained Marks</th>
                            <th className='text-lg font-bold'> feedback</th>
                            <th className='text-lg font-bold text-center'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            submitAssignment.map((sAssignment, idx) => (
                                <tr key={idx}>
                                    <th className='text-base font-bold py-4'>{idx + 1}</th>
                                    <td className='text-base font-semibold'>{sAssignment.title}</td>
                                    <td className='text-base font-bold'>{sAssignment.marks}</td>
                                    <td className='text-base font-bold'>{sAssignment?.givemark}</td>
                                    <td className='text-base font-bold'>{sAssignment?.feedback}</td>
                                    <td className='text-base font-bold text-center py-4'>
                                        <div className={sAssignment?.feedback ? 'bg-green-400 text-white rounded-xl' : 'bg-red-500 text-white rounded-xl px-2'}>{sAssignment?.givemark ? "Complate" : "Pending"}</div>
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

export default MySubmited;