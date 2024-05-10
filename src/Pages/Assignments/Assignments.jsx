import { useEffect, useState } from "react";
import AssignmentCard from "../AssignmentCard/AssignmentCard";
import Select from 'react-select'
import { Helmet } from "react-helmet-async";

const Assignments = () => {
    const [assignments, setAssignments] = useState([]);
    const [selactDifficultyLevel, setSelectDifficultyLevel] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/assignments')
            .then(res => res.json())
            .then(data => {
                setAssignments(data)
            })
    }, []);

    // const handleCustomization = (event) => {
    //     console.log(event.target.value);
    // };

    // const handleDelete = (_id,userEmail) => {
    //     // console.log(userEmail);
    //     if(userEmail === user?.email){
    //         Swal.fire({
    //             title: "Are you sure?",
    //             text: "You won't be able to revert this!",
    //             icon: "warning",
    //             showCancelButton: true,
    //             confirmButtonColor: "#3085d6",
    //             cancelButtonColor: "#d33",
    //             confirmButtonText: "Yes, delete it!"
    //         }).then((result) => {
    //             if (result.isConfirmed) {

    //                 fetch(`http://localhost:5000/assignments/${_id}`, {
    //                     method: "DELETE"
    //                 })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your file has been deleted.",
    //                             icon: "success"
    //                         });
    //                     }
    //                 })
    //             }
    //         });
    //     }
    //     else{
    //         Swal.fire({
    //             title: 'Error!',
    //             text: 'This Assignment is not Yours',
    //             icon: 'error',
    //             confirmButtonText: 'Cool'
    //         })
    //     }
    // }

    const difficultyLevels = Array.from(
        new Set(assignments.map((res) => res.difficultyLevel))
    )

    const difficultyLevelOptions = difficultyLevels.map((difficultyLevel) => ({
        value: difficultyLevel,
        label: difficultyLevel
    }))

    const filterAssignments = selactDifficultyLevel ? assignments.filter((craf) => craf.difficultyLevel === selactDifficultyLevel.value) : assignments;

    return (
        <>
            <Helmet>
                <title>Assignments</title>
            </Helmet>
            <div>
                <h2 className="text-3xl font-bold">Total Assignment: {assignments.length}</h2>
                <div className="mb-3 mt-7">
                    <Select
                        options={difficultyLevelOptions}
                        isClearable
                        placeholder='Select Difficulty'
                        onChange={(selectOption) => setSelectDifficultyLevel(selectOption)}
                        value={selactDifficultyLevel}
                        className='w-[250px] border-8 rounded-md bg-green-700 text-start mx-auto text-xl text-bold'
                    >
                    </Select>
                    {/* <select className='text-lg font-bold outline-none rounded-md shadow-sm  dark:bg-gray-100 border mt-1 py-3 px-5' name="difficultyLevel" id="" onChange={handleCustomization}>
                    <option className='bg-white text-black' value="" >Assignment Difficulty Level</option>
                    <option className='bg-white text-black' value="Easy"> Easy</option>
                    <option className='bg-white text-black' value="Medium"> Medium</option>
                    <option className='bg-white text-black' value="Hard">Hard</option>
                </select> */}
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                    {
                        filterAssignments.map((assignment, idx) => <AssignmentCard
                            key={idx}
                            assignment={assignment}
                            assignments={assignments}
                            setAssignments={setAssignments}
                        ></AssignmentCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default Assignments;