
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigate } from 'react-router-dom';
import assignment from '../../assets/images/assignmnt.jpg'
import toast from 'react-hot-toast';

const GiveMark = () => {
    const navigate = useNavigate();
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
                    navigate('/pendingAssignment')
                    toast.success("Assignment view complate & mark done.")
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>GiveMark</title>
            </Helmet>

            <div className='mt-8'>
                <h2 className="text-3xl  md:text-4xl lg:text-5xl font-bold text-center py-4 md:mb-12 bg-gray-100 rounded-md"
                >Give Marks</h2>
            </div>
            <div className='flex flex-col md:flex-row mb-12 gap-8'>
                <div className="p-5 md:w-1/2 md:shadow-lg">
                    <p className="pt-4 font-bold text-xl">
                        <span>Assignment: </span>
                        <span>{title}</span>
                    </p>
                    <div className='my-4'>
                        <p className='text-lg font-medium'>Assignment Link:</p>
                        <a href={pdf} target='_blank' className='hover:underline text-primary'>{pdf}</a>

                        <p className='mt-4'>
                            <span className='text-lg font-semibold '>Nodes:</span>
                            <span className='font-semibold ml-2'>{message}</span>
                        </p>
                    </div>
                    <form onSubmit={handleMark} action="">
                        <div>
                            <label className="block w-full">
                                <span className="mb-1 text-base font-semibold">Give Mark</span>
                                <input type="text" name='givmark' placeholder="Enter mark" className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                            </label>
                            <label className="block w-full mt-5">
                                <span className="mb-1 text-base font-semibold">Feedback</span>
                                <input type='text' name="feedback" id="" placeholder="Enter Feedback" className="block  w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-2" ></input>
                            </label>
                        </div>
                        <div className="my-6">
                            <button className="btn w-full text-white text-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-semibold">Submit</button>
                        </div>
                    </form>
                </div>
                <div className='md:w-1/2'>
                    <img className='h-full' src={assignment} alt="" />
                </div>
            </div>
        </div>
    );
};

export default GiveMark;