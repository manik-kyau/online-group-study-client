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

    const handleAssignment = () => {
        console.log('ami ki parbo');
    }

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
                <div >
                    <h2 className="text-3xl mt-8 md:text-4xl lg:text-5xl font-bold text-center py-4 mb-8 md:mb-12 bg-gray-100 rounded-md"
                    >Total Assignments</h2>
                </div>
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
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                    {
                        filterAssignments.map((assignment, idx) => <AssignmentCard
                            key={idx}
                            assignment={assignment}
                            assignments={assignments}
                            setAssignments={setAssignments}
                            // handleAssignment={handleAssignment}
                        ></AssignmentCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default Assignments;