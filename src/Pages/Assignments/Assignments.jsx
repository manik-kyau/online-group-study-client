import { useEffect, useState } from "react";
import AssignmentCard from "../AssignmentCard/AssignmentCard";
import Select from 'react-select'
import { Helmet } from "react-helmet-async";

const Assignments = () => {
    const [assignments, setAssignments] = useState([]);
    const [search, setSearch] = useState('');
    const [selactDifficultyLevel, setSelectDifficultyLevel] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/assignments?search=${search}`)
            .then(res => res.json())
            .then(data => {
                setAssignments(data)
            })
    }, [search]);
    // console.log(search);

    const difficultyLevels = Array.from(
        new Set(assignments.map((res) => res.difficultyLevel))
    )

    const difficultyLevelOptions = difficultyLevels.map((difficultyLevel) => ({
        value: difficultyLevel,
        label: difficultyLevel
    }))

    const filterAssignments = selactDifficultyLevel ? assignments.filter((craf) => craf.difficultyLevel === selactDifficultyLevel.value) : assignments;

    // console.log(search);
    const handleSearch =(e) =>{
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText)
        // console.log(searchText);
    }

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

                <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="w-1/2">
                        <form onSubmit={handleSearch} className="border ">
                            <div className="flex items-center">
                                <div>
                                    <input type="text" name='search' placeholder="Search" required="" className=" border  p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                                </div>

                                <div >
                                    <input type="submit" value='Search' className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white" />
                                    {/* <input className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Search</input> */}
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="mb-3 mt-7 border w-1/2">
                        <Select
                            options={difficultyLevelOptions}
                            isClearable
                            placeholder='Select Difficulty'
                            onChange={(selectOption) => setSelectDifficultyLevel(selectOption)}
                            value={selactDifficultyLevel}
                            className='w-[450px] border-8 rounded-md text-start text-xl text-bold'
                        >
                        </Select>
                    </div>
                    
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