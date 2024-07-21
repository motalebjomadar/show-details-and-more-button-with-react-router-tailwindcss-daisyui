import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const job = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const work = job.find(work => work.id === idInt)

    return (
        <div className="border rounded border-black m-5 p-5 text-center font-bold text-2xl">
            <h2 className="">Id : {work.id}</h2>
            <h2>Category : {work.category}</h2>
            <h2>Experience : {work.experience}</h2>
            <h2>Description : {work.description}</h2>
        </div>
    );
};

export default JobDetails;