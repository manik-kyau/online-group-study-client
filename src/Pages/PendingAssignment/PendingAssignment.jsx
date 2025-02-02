import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const PendingAssignment = () => {

    const [pendingAssignment, setPendingAssignment] = useState([]);
    const axiosSecure = useAxiosSecure()
    // const { _id, title, email, marks, assignment_id, studentName, pdf } = pendingAssignment;
    const url = '/submition';
    useEffect(() => {
        // fetch('https://online-group-study-server-lilac.vercel.app/submition',{credentials: 'include'})
        //     .then(res => res.json())
        //     .then(data => {
        //         // const remaining = data.filter(dta => dta.givemark === undefined);
        //         // setPendingAssignment(remaining);
        //         setPendingAssignment(data);
        //     })

        axiosSecure.get(url)
        .then(res=>setPendingAssignment(res.data))
    }, [url, axiosSecure])
    const remaining = pendingAssignment.filter(dta => dta.givemark === undefined);

    return (
        <div>
            <Helmet>
                <title>PendingAssignment</title>
            </Helmet>
            <div className="overflow-x-auto my-12">
                <table className="table table-xs">
                    <thead className='bg-gray-200'>
                        <tr className='bg-gray-200 rounded-t-lg'>
                            <th></th>
                            <th className='text-lg font-bold py-4 text-gray-600'>Title</th>
                            <th className='text-lg font-bold text-gray-600'>Marks</th>
                            <th className='text-lg font-bold text-gray-600'>Examinee Name</th>
                            <th className='text-lg font-bold text-center text-gray-600'> Status</th>
                            <th className='text-lg font-bold text-gray-600'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            remaining.map((pAssignment, idx) => (
                                <tr key={idx}>
                                    <th className='text-base font-semibold'>{idx + 1}</th>
                                    <th className='text-base font-semibold'>{pAssignment.title}</th>
                                    <td className='text-base font-semibold'>{pAssignment.marks}</td>
                                    <td>
                                        <p className='text-base font-semibold'>{pAssignment.studentName}</p>
                                        <p>{pAssignment.email}</p>
                                    </td>

                                    <td className='text-base text-center font-semibold'>
                                        <div className={pAssignment?.feedback ? 'bg-green-100 text-green-500 rounded-xl px-2' : 'bg-red-200 text-red-500 rounded-xl px-2'}>{pAssignment?.givemark ? "Complate" : "Pending"}</div>
                                    </td>
                                    <td className='text-base font-semibold text-end'>
                                        <Link to={`/givemark/${pAssignment._id}`}>
                                            <button className=" py-1 w-[110px] text-base text-center rounded-3xl font-semibold  text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Give Mark</button>
                                        </Link>
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