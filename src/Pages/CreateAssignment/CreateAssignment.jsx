
const CreateAssignment = () => {

    const handleCustomization = (event) => {
        console.log(event.target.value);
    };

    return (
        <div>
            thi is create assignment page
            <form className="my-12">
                <div className="mb-3">
                    <label className="block w-full">
                        <span className="mb-1 text-lg font-semibold">Title</span>
                        <input type="text" name='title' placeholder="Enter Photo URL" required className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                    </label>
                </div>
                <div className="mb-3">
                    <label className="block w-full">
                        <span className="mb-1 text-lg font-semibold">Description</span>
                        <input type="text" name='description' placeholder="Enter Photo URL" required className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                    </label>
                </div>
                <div className="mb-3">
                    <label className="block w-full">
                        <span className="mb-1 text-lg font-semibold">Marks</span>
                        <input type="number" name='marks' placeholder="Enter Photo URL" required className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                    </label>
                </div>
                <div className="mb-3">
                    <label className="block w-full">
                        <span className="mb-1 text-lg font-semibold">Marks</span>
                        <input type="text" name='imageURL' placeholder="Enter Photo URL" required className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                    </label>
                </div>
                <div className="mb-3">
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
                <div className="mb-3">
                    <label className="block w-full">
                        <span className="mb-1 text-lg font-semibold">Due Date</span>
                        <input type="date" name='date' placeholder="Enter Photo URL" required className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                    </label>
                </div>
                <div className='mt-6'>
                    <button type="submit" className="bg-[#D2B48C] hover:bg-[#D2B48C] text-lg w-full text-[#331A15] font-bold py-2 px-4 rounded">Create Assignment</button>
                </div>
            </form>
        </div>
    );
};

export default CreateAssignment;