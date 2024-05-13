import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const GiveMark = () => {

    const subAssignment = useLoaderData();
    // console.log(subAssignment);
    const { _id, pdf, message, email, studentName, assignment_id, marks, title } = subAssignment;

    const handleMark = (e) => {
        e.preventDefault();
        const form = e.target;
        const givemark = form.givmark.value;
        const feedback = form.feedback.value;
        const update = { givemark, feedback, pdf, message, email, studentName, assignment_id, marks, title }
        // console.log(update);

        fetch(`http://localhost:5000/submits/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // navigate('/assignments')
                    Swal.fire({
                        title: 'success!',
                        text: 'Assignment update Successfully Done.',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <div className="border m-4 p-5 md:w-1/2 mx-auto">

                <div>
                    <p className='text-lg font-medium'>
                        <span>Examinee Name: </span>
                        <span>{studentName}</span>
                    </p>
                    <p className='text-lg font-medium'>
                        <span>Email: </span>
                        <span>{email}</span>
                    </p>
                </div>
                <p className="py-4 font-bold text-xl">
                    <span>Assignment: </span>
                    <span>{title}</span>
                </p>
                <div className='my-4'>
                    <p className='text-lg font-medium'>Assignment Link:</p>
                    <a href={pdf} target='_blank' className='hover:underline text-primary'>{pdf}</a>
                </div>
                <form onSubmit={handleMark} action="">
                    <div>
                        <label className="block w-full">
                            <span className="mb-1 text-lg font-semibold">Give Mark</span>
                            <input type="text" name='givmark' placeholder="Enter mark" className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                        </label>
                        <label className="block w-full mt-5">
                            <span className="mb-1 text-lg font-semibold">Feedback</span>
                            <input type='text' name="feedback" id="" placeholder="Enter Feedback" className="block  w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-2" ></input>
                        </label>
                    </div>
                    <div className="my-6">
                        <button className="btn w-full text-white text-lg bg-[#FF3811] hover:bg-[#FF3811] font-semibold">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GiveMark;