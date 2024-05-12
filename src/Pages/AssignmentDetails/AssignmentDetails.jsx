import { useContext } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
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
                if(data.insertedId){
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
            <img src={imageURL} alt="" />
            <h2 className="text-3xl font-bold">{title}</h2>
            <p>{description}</p>
            <div>
                {/* <Link to={`/submitAssignment/${_id}`}>
                    <button className="btn">Take Assignment</button>
                </Link> */}
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Take Assignment</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box ">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className="border m-4 p-5">
                            <h3 className="font-bold text-lg">Hello!</h3>
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
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default AssignmentDetails;