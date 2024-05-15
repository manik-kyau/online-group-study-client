import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import toast from "react-hot-toast";

const UpdateAssignment = () => {

    const singleAssignment = useLoaderData();
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());

    const { _id, title, description, marks, imageURL, difficultyLevel, date } = singleAssignment;

    const handleCustomization = (event) => {
        console.log(event.target.value);
    };

    const handleUpdateAssignment = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const imageURL = form.imageURL.value;
        const difficultyLevel = form.difficultyLevel.value;
        const date = startDate;
        const updatedAssignment = { title, description, marks, imageURL, difficultyLevel, date }
        // console.log(updatedAssignment);

        fetch(`http://localhost:5000/assignment/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedAssignment),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    navigate('/assignments')
                    toast.success("Assignment update Successfully Done.")
                }
            })
    }

    return (
        <>
            <Helmet>
                <title>UpdateAssignment</title>
            </Helmet>
            <div>
                <div className='text-center space-y-4 mt-8'>
                    <h2 className='text-5xl font-bold'>Update Assignment</h2>
                    <p className='text-base font-medium md:w-2/3 mx-auto'>An update assignment involves revising or modifying existing work in response to new requirements, feedback, or changes in circumstances. It requires assessing previous work, understanding the reasons behind the updates, and planning how to implement them effectively.</p>
                </div>
                <form onSubmit={handleUpdateAssignment} className="my-12">
                    <div className="flex flex-col md:flex-row md:gap-8">
                        <div className="mb-3 md:w-1/2">
                            <label className="block w-full">
                                <span className="mb-1 text-lg font-semibold">Title</span>
                                <input
                                    type="text"
                                    name='title'
                                    defaultValue={title}
                                    placeholder="Enter Title"
                                    className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1"
                                />
                            </label>
                        </div>
                        <div className="mb-3 md:w-1/2">
                            <label className="block w-full">
                                <span className="mb-1 text-lg font-semibold">Description</span>
                                <input
                                    type="text"
                                    name='description'
                                    defaultValue={description}
                                    placeholder="Enter Description"
                                    className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-8">
                        <div className="mb-3 md:w-1/2">
                            <label className="block w-full">
                                <span className="mb-1 text-lg font-semibold">Marks</span>
                                <input
                                    type="number"
                                    name='marks'
                                    defaultValue={marks}
                                    placeholder="Enter Marks"
                                    className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1"
                                />
                            </label>
                        </div>
                        <div className="mb-3 md:w-1/2">
                            <label className="block w-full">
                                <span className="mb-1 text-lg font-semibold">Photo URL</span>
                                <input
                                    type="text"
                                    name='imageURL'
                                    defaultValue={imageURL}
                                    placeholder="Enter Photo URL"
                                    className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-8">
                        <div className="mb-3 md:w-1/2">
                            <label className="block w-full">
                                <span className="mb-1 text-lg font-semibold">Difficulty Level</span>
                                <select
                                    className='text-base w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1'
                                    name="difficultyLevel"
                                    id=""
                                    defaultValue={difficultyLevel}
                                    onChange={handleCustomization}>
                                    <option className='bg-white text-black' value="" disabled>Assignment Difficulty Level</option>
                                    <option className='bg-white text-black' value="Easy"> Easy</option>
                                    <option className='bg-white text-black' value="Medium"> Medium</option>
                                    <option className='bg-white text-black' value="Hard">Hard</option>
                                </select>
                            </label>
                        </div>
                        <div className="mb-3 md:w-1/2">
                            <label className="block w-full">
                                <span className="mb-1 text-lg font-semibold">Due Date</span>

                                <DatePicker 
                                selected={startDate} 
                                onChange={(date) => setStartDate(date)} 
                                defaultValue={date}
                                className="w-[462px] md:w-[460px] lg:w-[572px] outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-[3px]"
                                />


                                {/* <input
                                    type="date"
                                    name='date'
                                    defaultValue={date}
                                    className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1"
                                /> */}
                            </label>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <button type="submit" className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-lg w-full text-white font-bold py-2 px-4 rounded">Create Assignment</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateAssignment;