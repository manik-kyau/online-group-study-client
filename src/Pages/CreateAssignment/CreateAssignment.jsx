import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateAssignment = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [startDate, setStartDate] = useState(new Date());

    const handleCustomization = (event) => {
        console.log(event.target.value);
    };

    const handleCreateAssignment = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const imageURL = form.imageURL.value;
        const difficultyLevel = form.difficultyLevel.value;
        const date = startDate;
        const userEmail = user.email;
        const userName = user.displayName;
        const userPhoto = user.photoURL;
        const newAssignment = { title, description, marks, imageURL, difficultyLevel, date, userEmail, userName, userPhoto }
        console.log(newAssignment);

        if (title.length < 1) {
            toast.error('Please Enter Assignment Title!')
            return;
        }
        else if (description.length < 1) {
            toast.error('Please Enter Assignment Description!')
            return;
        }
        else if (marks.length < 1) {
            toast.error('Please Enter Assignment Mark!')
            return;
        }
        else if (imageURL.length < 1) {
            toast.error('Please Enter Image link!')
            return;
        }

        // send data to the server
        fetch('http://localhost:5000/assignments', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate("/assignments")
                if (data.insertedId) {
                    toast.success("Assignment Create Successfully Done.")
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>CrteateAssignment</title>
            </Helmet>
            <div>
                <div className='text-center space-y-4 mt-8'>
                    <h2 className='text-5xl font-bold'>Create Assignment</h2>
                    <p className='text-base font-medium md:w-2/3 mx-auto'>Provide a concise description (a few sentences) of the most essential elements of the assignment. It is helpful to make sure the most important information about the genre, purpose, topic(s), and length of the paper are very easy to find.</p>
                </div>
                <form onSubmit={handleCreateAssignment} className="my-12">
                    <div className="flex flex-col md:flex-row md:gap-8">
                        <div className="mb-3 md:w-1/2">
                            <label className="block w-full">
                                <span className="mb-1 text-lg font-semibold">Title</span>
                                <input type="text" name='title' placeholder="Enter Title" className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                            </label>
                        </div>
                        <div className="mb-3 md:w-1/2">
                            <label className="block w-full">
                                <span className="mb-1 text-lg font-semibold">Description</span>
                                <input type="text" name='description' placeholder="Enter Description" className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:gap-8">
                        <div className="mb-3 md:w-1/2">
                            <label className="block w-full">
                                <span className="mb-1 text-lg font-semibold">Marks</span>
                                <input type="number" name='marks' placeholder="Enter Marks" className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                            </label>
                        </div>
                        <div className="mb-3 md:w-1/2">
                            <label className="block w-full">
                                <span className="mb-1 text-lg font-semibold">Photo URL</span>
                                <input type="url" name='imageURL' placeholder="Enter Photo URL" className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:gap-8">
                        <div className="mb-3 md:w-1/2">
                            <label className="block w-full">
                                <span className="mb-1 text-lg font-semibold">Assignment Difficulty Level</span>
                                <select className='text-base w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1' name="difficultyLevel" required id="" onChange={handleCustomization}>
                                    <option className='bg-white text-black' value="" disabled>Assignment Difficulty Level</option>
                                    <option className='bg-white text-black' value="Easy"> Easy</option>
                                    <option className='bg-white text-black' value="Medium"> Medium</option>
                                    <option className='bg-white text-black' value="Hard">Hard</option>
                                </select>
                            </label>
                        </div>
                        <div className="mb-3 md:w-1/2">
                            <label className="block w-full">
                                <span className="mb-1 text-lg font-semibold ">Due Date</span><br />
                                <DatePicker 
                                selected={startDate} 
                                onChange={(date) => setStartDate(date)} 
                                autoComplete="on"
                                className="w-[462px] md:w-[460px] lg:w-[572px] outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-[2px]"
                                />
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:gap-8">
                        <div className="mb-3 md:w-1/2">
                            <label className="block w-full">
                                <span className="mb-1 text-lg font-semibold">User Name</span>
                                <input type="text" name='userName' value={user?.displayName} placeholder="Enter Name" className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                            </label>
                        </div>
                        <div className="mb-3 md:w-1/2">
                            <label className="block w-full">
                                <span className="mb-1 text-lg font-semibold">User Email</span>
                                <input type="email" name='userEmail' value={user?.email} placeholder="Enter email" className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                            </label>
                        </div>
                    </div>

                    <div className='mt-6'>
                        <button type="submit" className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-lg w-full font-bold py-2 px-4 rounded">Create Assignment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateAssignment;