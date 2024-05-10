import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const AssignmentCard = ({ assignment }) => {
    const { _id, title, description, marks, imageURL, difficultyLevel, date } = assignment;
    return (
        // card-compact
        <div>
            <div className="bg-base-100 border hover:shadow-xl">
                <figure><img className="h-[230px] w-full" src={imageURL} alt="Shoes" /></figure>
                <div className="py-6 px-4">
                    <h2 className="card-title text-2xl text-bold">{title.slice(0, 23)}</h2>

                    <div className="my-4 space-y-3">
                        <p><span className="text-base font-bold">Difficulty:</span>
                            <span className="text-base font-semibold ml-2">{difficultyLevel}</span></p>
                        <p><span className="text-base font-bold">Marks:</span>
                            <span className="text-base font-semibold ml-2">{marks}</span></p>
                    </div>

                    <div className="space-x-4">
                        <Link to={`/details/${_id}`}>
                            <button className="btn text-white text-2xl bg-[#dfab66] hover:bg-[#e29026]"><FaEye></FaEye></button>
                        </Link>

                        <Link to=''>
                            <button className="btn text-white text-2xl bg-[#666265] hover:bg-[#3C393B]"><MdModeEdit></MdModeEdit></button>
                        </Link>

                        <Link to=''>
                            <button className="btn text-white text-2xl bg-[#EA4744] hover:bg-[#c02b28]"><MdDelete></MdDelete></button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;