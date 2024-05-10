import { useEffect, useState } from "react";
import AssignmentCard from "../AssignmentCard/AssignmentCard";

const Assignments = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/assignments')
            .then(res => res.json())
            .then(data => setAssignments(data))
    }, []);

    const handleCustomization = (event) => {
        console.log(event.target.value);
    };

    return (
        <div>
            <div className="mb-3 mt-7 text-center">
                <select className='text-lg font-bold outline-none rounded-md shadow-sm  dark:bg-gray-100 border mt-1 py-3 px-5' name="difficultyLevel" id="" onChange={handleCustomization}>
                    <option className='bg-white text-black' value="" >Assignment Difficulty Level</option>
                    <option className='bg-white text-black' value="Easy"> Easy</option>
                    <option className='bg-white text-black' value="Medium"> Medium</option>
                    <option className='bg-white text-black' value="Hard">Hard</option>
                </select>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                {
                    assignments.map((assignment, idx) => <AssignmentCard
                        key={idx}
                        assignment={assignment}
                    ></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;