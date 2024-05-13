import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const MySubmited = () => {
    const { user } = useContext(AuthContext);
    const [submitAssignment, setSubmitAssignment] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/submits?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // setSubmitAssignment(data)
                const remaining = data.filter(assignmentdata => assignmentdata.email === user?.email);
                // console.log(remaining);
                setSubmitAssignment(remaining)
            })
    }, [])

    return (
        <div className=''>
            {/* <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3"></th>
                                <th className="p-3">Title</th>
                                <th className="p-3">Marks</th>
                                <th className="p-3">Obtained Marks</th>
                                <th className="p-3 text-right">feedback</th>
                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Microsoft Corporation</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="dark:text-gray-600">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="dark:text-gray-600">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$15,792</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                        <span>Pending</span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> */}


            <div className="overflow-x-auto my-12">
                <table className="table table-xs ">
                    <thead className='bg-gray-300'>
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