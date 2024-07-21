import { useEffect, useState } from "react";
import JobCatagory from "../JobCatagory/JobCatagory";


const JobCatagories = () => {
    const [job, setJob] = useState([]);
    const [more, setMore] = useState([9]);

    useEffect(() => {
        fetch('job.json')
        .then(res =>  res.json())
        .then(data => setJob(data))
    }, [])

    return (
        <div className="font-bold">
            <h1>Job Catagories</h1>
            <h2>Jobs are available {job.length}</h2>
            <div className="grid grid-cols-3 gap-10 text-xl">
                {
                    job.slice(0, more).map(work => <JobCatagory job={work} key={work.id}></JobCatagory>)
                }
            </div>
            <div className={more === job.length && 'hidden'}>
                <button onClick={() => setMore(job.length)} className="btn btn-success">More Catagory</button>
            </div>
        </div>
    );
};

export default JobCatagories;