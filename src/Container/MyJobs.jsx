import { faLocationDot, faMoneyBill, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const MyJobs = () => {
    const [myJobs, setMyJobs] = useState([]);
    const { currentUser } = useSelector(state => state.user);

    useEffect(() => {
        const getAllJobs = async () => {
            const res = await fetch(`${import.meta.env.VITE_DB_URL}/myjobs/${currentUser._id}`);
            const data = await res.json();
            setMyJobs(data.result);
        };

        getAllJobs();
    }, [currentUser._id]);

    const handleJobDeletion = async (e, jobId) => {
        e.preventDefault();

        try {
            const res = await fetch(`${import.meta.env.VITE_DB_URL}/delete/${jobId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            if (res.ok) {
                toast.success(data.message);
                setMyJobs(prevJobs => prevJobs.filter(job => job._id !== jobId));
            } else {
                toast.error(data.error);
            }
        } catch (error) {
            toast.error('Something went wrong', error);
        }
    };

    return (
        <div className="relative my-12">
            <nav className="flex gap-8 max-w-6xl mx-auto px-3 text-sm font-semibold">
                <NavLink to={'/account'} className={({ isActive }) => isActive ? 'border-b-2 p-2 rounded-2xl text-green-500 border-green-500' : 'p-2 hover:text-green-500 transition-all'}>Account</NavLink>
                <NavLink to={'/my-jobs'} className={({ isActive }) => isActive ? 'border-b-2 p-2 rounded-2xl text-green-500 border-green-500' : 'p-2 hover:text-green-500 transition-all'}>My Jobs</NavLink>
                <NavLink to={'/post'} className={({ isActive }) => isActive ? 'border-b-2 p-2 rounded-2xl text-green-500 border-green-500' : 'p-2 hover:text-green-500 transition-all'}>Post Job</NavLink>
            </nav>
            <div className="flex flex-col gap-8 my-20 max-w-5xl mx-auto px-3">
                {myJobs.length === 0 ? (
                    <div className="text-center max-w-3xl mx-auto flex flex-col gap-10">
                        <h2 className="text-4xl leading-snug font-semibold text-transparent bg-gradient-to-r from-black to-green-500 bg-clip-text">Oops! You have no jobs yet.</h2>
                        <p>Once you've posted your job listings, they'll appear right here, ready for you to manage and edit as needed. Keep an eye out for your postings to start populating this page!</p>
                        <Link to={'/post'} className={`bg-green-500 hover:bg-green-600 transition-all py-3 px-20 rounded-3xl text-white font-semibold text-sm mx-auto`}>Create Your Job</Link>
                    </div>
                ) : (
                    myJobs.map(job => (
                        <div key={job._id} className="flex items-center gap-6 justify-between p-8 rounded-lg shadow-md shadow-green-400 hover:shadow-green-600">
                            <div>
                                <h2 className="text-lg font-semibold mb-2">{job.title}</h2>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm">
                                    <p className="flex items-center gap-1"><FontAwesomeIcon icon={faMoneyBill} className="text-green-500" /><span className="font-semibold">{job.salary}</span></p>
                                    <p className="flex items-center gap-1"><FontAwesomeIcon icon={faLocationDot} className="text-green-500" /><span className="font-semibold">{job.location}</span></p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-3">
                                <Link to={`/edit/${job._id}`} className="px-8 py-2 bg-green-500 hover:bg-green-600 transition-all text-white rounded-3xl font-semibold text-sm">Edit</Link>
                                <button onClick={(e) => handleJobDeletion(e, job._id)} className="px-8 py-2 bg-red-500 hover:bg-red-600 transition-all text-white rounded-3xl font-semibold text-sm">Delete <FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MyJobs;
