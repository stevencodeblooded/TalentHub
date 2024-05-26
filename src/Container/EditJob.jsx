import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { editJobFailure, editJobStart, editJobSuccess } from "../Components/redux/authSlice";

const EditJob = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { editLoading } = useSelector(state => state.user);

    const [formData, setFormData] = useState({
        title: '',
        company_info: '',
        job_description: [[]],
        requirements: [[]],
        benefits: [[]],
        location: '',
        salary: ''
    });

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_DB_URL}/description/${id}`);
                if (!response.ok) {
                    toast.error('Failed to fetch job details');
                }
                const jobData = await response.json();
                const job = jobData.data;
                setFormData({
                    title: job.title,
                    company_info: job.company_info,
                    job_description: job.job_description,
                    requirements: job.requirements,
                    benefits: job.benefits,
                    location: job.location,
                    salary: job.salary
                });
            } catch (error) {
                toast.error('Error fetching job details:', error.message);
            }
        };

        fetchJob();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };
    
    const handleJobListings = (e) => {
        const { name, value } = e.target;
        const items = value.split('\n').map(item => item.trim());
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: [items]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(editJobStart());

        try {
            const response = await fetch(`${import.meta.env.VITE_DB_URL}/edit/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                toast.error('Failed to update job details');
            }

            const data = await response.json();
            dispatch(editJobSuccess(data.message));
            navigate(`/careers/${id}`);
            toast.success(data.message);
        } catch (error) {
            console.error('Error updating job details:', error.message);
            dispatch(editJobFailure(error.message));
            toast.error('Failed to update job details');
        }
    };

    return (
        <div>
            <div className="bg-green-200 py-20">
                <h2 className='max-w-6xl px-3 mx-auto text-transparent mb-10 bg-gradient-to-r from-green-500 to-black bg-clip-text text-4xl lg:text-5xl leading-snug lg:leading-snug font-semibold'>Update Job Details</h2>
            </div>
            <section className="max-w-4xl mx-auto px-3 my-12">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="title" className="text-lg text-green-700 font-semibold">Title:</label>
                        <input type="text" name="title" id="title" placeholder="Job title or position" value={formData.title} onChange={handleChange} className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="company_info" className="text-lg text-green-700 font-semibold">Brief info about the company:</label>
                        <textarea id="company_info" placeholder="A brief introduction about the hiring company" name="company_info" value={formData.company_info} onChange={handleChange} rows="4" className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md"></textarea>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="job_description" className="text-lg text-green-700 font-semibold">What will you do:</label>
                        <textarea id="job_description" name="job_description" placeholder="Enter each item on a new line" value={formData.job_description.flat().join('\n')} onChange={handleJobListings} rows="4" className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md"></textarea>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="requirements" className="text-lg text-green-700 font-semibold">What you should have:</label>
                        <textarea id="requirements" name="requirements" placeholder="Enter each item on a new line" value={formData.requirements.flat().join('\n')} onChange={handleJobListings} rows="8" className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md"></textarea>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="benefits" className="text-lg text-green-700 font-semibold">What we offer:</label>
                        <textarea id="benefits" name="benefits" placeholder="Enter each item on a new line" value={formData.benefits.flat().join('\n')} onChange={handleJobListings} rows="8" className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md"></textarea>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="location" className="text-lg text-green-700 font-semibold">Location:</label>
                        <input type="text" id="location" name="location" placeholder="Enter the location or (Remote)" value={formData.location} onChange={handleChange} className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="salary" className="text-lg text-green-700 font-semibold">Salary:</label>
                        <input type="number" id="salary" name="salary" placeholder="Enter the monthly gross salary for the job" value={formData.salary} onChange={handleChange} className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md" />
                    </div>

                    <button type="submit" className={`flex items-center justify-center gap-3 mt-7 bg-green-500 hover:bg-green-600 transition-all py-3 rounded-3xl w-full text-white font-semibold text-sm mx-auto`}>{editLoading ? <ClipLoader color="#fff" size={'20px'} /> : <span>Save My Changes <FontAwesomeIcon icon={faPaperPlane} /></span>}</button>
                </form>
            </section>
        </div>
    );
};

export default EditJob;
