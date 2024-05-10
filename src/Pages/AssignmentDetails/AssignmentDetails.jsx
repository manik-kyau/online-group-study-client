import { useLoaderData, useParams } from "react-router-dom";

const AssignmentDetails = () => {

    const assignmentData = useLoaderData();

    const {id} = useParams();

    const singleAssignment = assignmentData.find(data => data._id === id);
    // console.log(singleAssignment);
    const { _id, title, description, marks, imageURL, difficultyLevel, date } = singleAssignment;
    return (
        <div className="my-12">
            <img src={imageURL} alt="" />
            <h2 className="text-3xl font-bold">{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default AssignmentDetails;