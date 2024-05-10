import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAssignment = () => {

    const singleAssignment = useLoaderData();
    // console.log(singleAssignment);
    const { _id,title, description, marks, imageURL, difficultyLevel, date } = singleAssignment;

    const handleCustomization = (event) => {
        console.log(event.target.value);
    };

    const handleUpdateAssignment = (e) =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const imageURL = form.imageURL.value;
        const difficultyLevel = form.difficultyLevel.value;
        const date = form.date.value;
        const updatedAssignment = {title,description,marks,imageURL,difficultyLevel,date}
        // console.log(updatedAssignment);

        fetch(`http://localhost:5000/assignment/${_id}`,{
            method: "PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updatedAssignment),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.modifiedCount > 0) {
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
            thi is create assignment page
            <form onSubmit={handleUpdateAssignment} className="my-12">
                <div className="mb-3">
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
                <div className="mb-3">
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
                <div className="mb-3">
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
                <div className="mb-3">
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
                <div className="mb-3">
                    <label className="block w-full">
                        <span className="mb-1 text-lg font-semibold">Assignment Difficulty Level</span>
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
                <div className="mb-3">
                    <label className="block w-full">
                        <span className="mb-1 text-lg font-semibold">Due Date</span>
                        <input 
                        type="date" 
                        name='date' 
                        defaultValue={date}
                        className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" 
                        />
                    </label>
                </div>
                <div className='mt-6'>
                    <button type="submit" className="bg-[#D2B48C] hover:bg-[#D2B48C] text-lg w-full text-[#331A15] font-bold py-2 px-4 rounded">Create Assignment</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateAssignment;