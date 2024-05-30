import { useEffect, useState } from "react";
import AssignmentCard from "../AssignmentCard/AssignmentCard";
import Select from 'react-select'
import { Helmet } from "react-helmet-async";

const Assignments = () => {
    const [assignments, setAssignments] = useState([]);
    const [search, setSearch] = useState('');
    const [selactDifficultyLevel, setSelectDifficultyLevel] = useState(null);

    useEffect(() => {
        fetch(`https://online-group-study-server-lilac.vercel.app/assignments?search=${search}`)
            .then(res => res.json())
            .then(data => {
                setAssignments(data)
            })
    }, [search]);

    const difficultyLevels = Array.from(
        new Set(assignments.map((res) => res.difficultyLevel))
    )

    const difficultyLevelOptions = difficultyLevels.map((difficultyLevel) => ({
        value: difficultyLevel,
        label: difficultyLevel
    }))

    const filterAssignments = selactDifficultyLevel ? assignments.filter((craf) => craf.difficultyLevel === selactDifficultyLevel.value) : assignments;

    
    const handleSearch =(e) =>{
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText);
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

                <div className="flex md:gap-8 flex-col md:flex-row-reverse justify-center items-center">
                <div className="w-[450px]  mt-[16px]">
                        <form onSubmit={handleSearch} className="">
                            <div className="flex items-center border-2 rounded-md">
                                <div className="w-full">
                                    <input type="text" name='search' placeholder="Search" required="" className=" w-full border-0 px-3 py-[12px]  focus:outline-none placeholder:text-xl text-lg  " />
                                </div>

                                <div >
                                    <input type="submit" value='Search' className="bg-gradient-to-r px-7 from-[#7E90FE] to-[#9873FF] text-white text-xl py-[13px] rounded-r-md cursor-pointer" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="mb-3 mt-7">
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