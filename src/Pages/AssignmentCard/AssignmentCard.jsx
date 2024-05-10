import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
const AssignmentCard = ({ assignment,assignments,setAssignments }) => {

    const { _id, title, description, marks, imageURL, difficultyLevel, date, userEmail } = assignment;
    // console.log(userEmail);

    const { user } = useContext(AuthContext);

    // const { user } = useContext(AuthContext);
    // console.log(user?.email);

    const handleDelete = (_id, userEmail) => {
        // console.log(userEmail);
        if (userEmail === user?.email) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {

                    fetch(`http://localhost:5000/assignments/${_id}`, {
                        method: "DELETE"
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remaining = assignments.filter(assnment =>assnment._id !== _id );
                            setAssignments(remaining)
                        }
                    })
                }
            });
        }
        else {
            Swal.fire({
                title: 'Error!',
                text: 'This Assignment is not Yours',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }

    return (
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

                        <Link to={`/update/${_id}`}>
                            <button className="btn text-white text-2xl bg-[#666265] hover:bg-[#3C393B]"><MdModeEdit></MdModeEdit></button>
                        </Link>

                        <button
                            onClick={() => handleDelete(_id, userEmail)}
                            className="btn text-white text-2xl bg-[#EA4744] hover:bg-[#c02b28]"
                        ><MdDelete></MdDelete></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;