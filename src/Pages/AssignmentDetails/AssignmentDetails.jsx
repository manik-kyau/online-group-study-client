import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import userImage from '../../assets/images/user.png';
// import toast from "react-hot-toast";

const AssignmentDetails = () => {

    const navigate = useNavigate()
    const assignmentData = useLoaderData();
    const { user } = useContext(AuthContext);
    // console.log(assignmentData);

    // const { id } = useParams();

    // const singleAssignment = assignmentData.find(data => data._id === id);
    // const { _id, title, description, marks, imageURL, difficultyLevel, date } = singleAssignment;
    const { _id, title, description, marks, imageURL, difficultyLevel, date } = assignmentData;

    const handleModal = (e) => {
        e.preventDefault();
        console.log('parbo na mone hoy');
        const form = e.target;
        const pdf = form.pdf.value;
        const message = form.message.value;
        const email = user?.email;
        const name = user?.displayName;
        const submit = {
            pdf,
            message,
            email,
            studentName: name,
            marks,
            assignment_id: _id,
            title
        }
        console.log(submit);

        fetch('http://localhost:5000/submits', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(submit)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    navigate('/mySubmited')
                    setTimeout(() => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Do you want to continue',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }, 1000);
                }
            })
    }
    return (
        <div className="my-12">

            <div className="p-5 mx-auto sm:p-10 md:p-16 ">
                <div className="flex flex-col  mx-auto overflow-hidden rounded">
                    <img src={imageURL} alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
                    <div className="md:p-6 md:pb-8 m-4 mx-auto md:-mt-16 space-y-6 sm:px-10 sm:mx-12 lg:rounded-md md:bg-gray-900">
                        <div className="space-y-2">
                            <p className="md:text-gray-100">
                                <span className="text-base font-medium">DeadLine: </span>
                                <span>{date}</span>
                            </p>
                            <h2 className="inline-block text-2xl md:text-gray-100 font-semibold sm:text-3xl pb-3">{title}</h2>
                            <p className="md:text-gray-100 text-base font-medium">{description}</p>
                            <div className="pt-6 space-y-4">
                                <p className="md:text-gray-100">
                                    <span className="text-base font font-bold">Difficulty Level:</span>
                                    <span className="ml-2 text-base font-medium">{difficultyLevel}</span>
                                </p>
                                <p className="md:text-gray-100">
                                    <span className="text-base font font-bold">Total Marks:</span>
                                    <span className="ml-2 text-base font-medium">{marks}</span>
                                </p>
                            </div>
                        </div>
                        <div className="md:text-gray-100">
                            <h2 className="text-2xl font-bold mb-3">Created By:</h2>

                            <div className="flex items-center gap-3">
                                <img className="h-14 w-14 rounded-full" src={assignmentData?.userPhoto ? assignmentData?.userPhoto : userImage} alt="" />
                                <div>
                                    <h2 className=" text-base font-medium">{assignmentData?.userName}</h2>
                                    <h2 className=" text-base font-medium">{assignmentData?.userEmail}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            {/* Modal */}
                            <button className="btn text-lg font-semibold bg-[#FF3811] hover:bg-[#FF3811] text-white border-none" onClick={() => document.getElementById('my_modal_3').showModal()}>Take Assignment</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box ">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-900">✕</button>
                                    </form>
                                    <div className="border m-4 p-5">
                                        <p className="py-4 font-bold text-xl text-gray-900">Submit Your Assignment.</p>
                                        <form onSubmit={handleModal} action="">
                                            <div>
                                                <label className="block w-full">
                                                    <span className="mb-1 text-gray-900 text-lg font-semibold">Assignment PDF/doc</span>
                                                    <input type="text" name='pdf' placeholder="Enter Description" className="block w-full outline-none rounded-md placeholder:text-gray-400 shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                                                </label>
                                                <label className="block w-full mt-5">
                                                    <span className="mb-1 text-lg font-semibold text-gray-900">Message</span>
                                                    <textarea name="message" id="" placeholder="Enter Description" className="block  w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-2" ></textarea>
                                                </label>
                                            </div>
                                            <div className="my-6">
                                                <button className="btn text-lg font-semibold bg-[#FF3811] hover:bg-[#FF3811] text-white w-full">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                {/* Modal */}
                {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Take Assignment</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box ">
                        <form method="dialog"> */}
                            {/* if there is a button in form, it will close the modal */}
                            {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form> */}
                        {/* <div className="border m-4 p-5">
                            <p className="py-4 font-bold text-xl">Submit Your Assignment.</p>
                            <form onSubmit={handleModal} action="">
                                <div>
                                    <label className="block w-full">
                                        <span className="mb-1 text-lg font-semibold">Assignment PDF/doc</span>
                                        <input type="text" name='pdf' placeholder="Enter Description" className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
                                    </label>
                                    <label className="block w-full mt-5">
                                        <span className="mb-1 text-lg font-semibold">Message</span>
                                        <textarea name="message" id="" placeholder="Enter Description" className="block  w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-2" ></textarea>
                                    </label>
                                </div>
                                <div className="my-6">
                                    <button className="btn text-lg font-semibold">Submit</button>
                                </div>
                            </form>
                        </div> */}
                    {/* </div>
                </dialog> */}
            </div>
        </div>
    );
};

export default AssignmentDetails;