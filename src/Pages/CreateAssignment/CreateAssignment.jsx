import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const CreateAssignment = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

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
        const date = form.date.value;
        const userEmail = user.email;
        const userName = user.displayName;
        const userPhoto = user.photoURL;
        const newAssignment = { title, description, marks, imageURL, difficultyLevel, date,userEmail,userName,userPhoto }
        console.log(newAssignment);

        // send data to the server
        fetch('http://localhost:5000/assignments',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newAssignment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                toast.success("Assignment Create Successfully Done.")
            }
        })
    }

    return (
        <div>
            thi is create assignment page
            <form onSubmit={handleCreateAssignment} className="my-12">
                <div className="flex flex-col lg:flex-row lg:gap-8">
                    <div className="mb-3 lg:w-1/2">
                        <label className="block w-full">
                            <span className="mb-1 text-lg font-semibold">Title</span>
                            <input type="text" name='title' placeholder="Enter Title" className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                        </label>
                    </div>
                    <div className="mb-3 lg:w-1/2">
                        <label className="block w-full">
                            <span className="mb-1 text-lg font-semibold">Description</span>
                            <input type="text" name='description' placeholder="Enter Description" className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                        </label>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-8">
                    <div className="mb-3 lg:w-1/2">
                        <label className="block w-full">
                            <span className="mb-1 text-lg font-semibold">Marks</span>
                            <input type="number" name='marks' placeholder="Enter Marks" className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                        </label>
                    </div>
                    <div className="mb-3 lg:w-1/2">
                        <label className="block w-full">
                            <span className="mb-1 text-lg font-semibold">Photo URL</span>
                            <input type="text" name='imageURL' placeholder="Enter Photo URL" className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                        </label>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-8">
                    <div className="mb-3 lg:w-1/2">
                        <label className="block w-full">
                            <span className="mb-1 text-lg font-semibold">Assignment Difficulty Level</span>
                            <select className='text-base w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1' name="difficultyLevel" id="" onChange={handleCustomization}>
                                <option className='bg-white text-black' value="" disabled>Assignment Difficulty Level</option>
                                <option className='bg-white text-black' value="Easy"> Easy</option>
                                <option className='bg-white text-black' value="Medium"> Medium</option>
                                <option className='bg-white text-black' value="Hard">Hard</option>
                            </select>
                        </label>
                    </div>
                    <div className="mb-3 lg:w-1/2">
                        <label className="block w-full">
                            <span className="mb-1 text-lg font-semibold">Due Date</span>
                            <input type="date" name='date' className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                        </label>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-8">
                    <div className="mb-3 lg:w-1/2">
                        <label className="block w-full">
                            <span className="mb-1 text-lg font-semibold">Title</span>
                            <input type="text" name='userName' value={user?.displayName}  placeholder="Enter Title" className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                        </label>
                    </div>
                    <div className="mb-3 lg:w-1/2">
                        <label className="block w-full">
                            <span className="mb-1 text-lg font-semibold">Description</span>
                            <input type="email" name='userEmail' value={user?.email} placeholder="Enter Description" className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                        </label>
                    </div>
                </div>

                <div className='mt-6'>
                    <button type="submit" className="bg-[#D2B48C] hover:bg-[#D2B48C] text-lg w-full text-[#331A15] font-bold py-2 px-4 rounded">Create Assignment</button>
                </div>
            </form>
        </div>
    );
};

export default CreateAssignment;