// import React, { useContext } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../../Providers/AuthProvider';

// const SubmitAssignment = () => {
//     const assignmentData = useLoaderData();
//     const { user } = useContext(AuthContext);

//     const { _id, title, description, marks, imageURL, difficultyLevel, date } = assignmentData;

//     const handleModal = (e) => {
//         e.preventDefault();
//         console.log('parbo na mone hoy');
//         const form = e.target;
//         const pdf = form.pdf.value;
//         const message = form.message.value;
//         const email = user?.email;
//         const name = user?.displayName;
//         const submit = {
//             pdf,
//             message,
//             studentEmail: email,
//             studentName: name,
//             marks,
//             _id,
//             title
//         }
//         console.log(submit);

//         fetch('http://localhost:5000/submits', {
//             method: "POST",
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify(submit)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 // if(data.insertedId){
//                 //     toast.success("Assignment Submitted successfully Done.")
//                 // }
//             })
//     }
//     return (
//         <div>
//             <form onSubmit={handleModal} action="">
//                 <div>
//                     <label className="block w-full">
//                         <span className="mb-1 text-lg font-semibold">Assignment PDF/doc</span>
//                         <input type="text" name='pdf' placeholder="Enter Description" className="block w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-1" />
//                     </label>
//                     <label className="block w-full mt-5">
//                         <span className="mb-1 text-lg font-semibold">Message</span>
//                         <textarea name="message" id="" placeholder="Enter Description" className="block  w-full outline-none rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 p-2 dark:bg-gray-100 border mt-2" ></textarea>
//                     </label>
//                 </div>
//                 <div className="my-6">
//                     <button className="btn text-lg font-semibold">Submit</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default SubmitAssignment;