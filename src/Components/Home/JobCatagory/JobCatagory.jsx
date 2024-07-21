import { Link } from "react-router-dom";


const JobCatagory = ({job}) => {
    const {id, position, salary, education} = job;
    return (
        <div className="border rounded border-black p-5">
            <h1>Id : {id}</h1>
            <h1>position : {position}</h1>
            <h1>Education: {education}</h1>
            <h1>Salary : {salary}</h1>
            <div className="flex justify-between">
                <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                <Link><button className="btn btn-primary">Apply Job</button></Link>
            </div>
        </div>
    );
};

export default JobCatagory;