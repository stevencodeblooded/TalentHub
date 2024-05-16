import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { postJobFailure, postJobStart, postJobSuccess } from "../Components/redux/authSlice";

const PostJob = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { postLoading } = useSelector(state => state.user)
    const [formData, setFormData] = useState({
        title: '',
        company_info: '',
        job_description: [],
        requirements: [],
        benefits: [],
        location: '',
        salary: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => {
            const { name, value } = e.target
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleJobListings = e => {
        const {name, value} = e.target;
        const items = value.split('\n').map(item => item.trim())
        setFormData(prevData => ({
          ...prevData,
          [name]: [items],
        }));
    };

    const handleFormSubmission = async (e) => {
        e.preventDefault()

        dispatch(postJobStart())
        const res = await fetch(`${import.meta.env.VITE_DB_URL}/jd`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (res.ok) {
            const data = await res.json()
            const id = data?.job?._id
            dispatch(postJobSuccess(data.message))
            navigate(`/careers/${id}`)
            toast.success(data.message)
        } else {
            const data = await res.json()
            toast.error(data.message)
            dispatch(postJobFailure(data.message))
        }
    }
    
  return (
    <div>
        <div className="bg-green-200 py-20">
            <h2 data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1500" className='max-w-6xl px-3 mx-auto text-transparent mb-10 bg-gradient-to-r from-green-500 to-black bg-clip-text text-4xl lg:text-5xl leading-snug lg:leading-snug font-semibold'>Fill The Job Description</h2>
        </div>
        <section className="max-w-4xl mx-auto px-3 my-12">
            <form onSubmit={handleFormSubmission} className="flex flex-col gap-3">
                <label htmlFor="title" className="text-sm font-semibold ">Title:</label>
                <input type="text" name="title" id="title" placeholder="Job title or position" value={formData.title} onChange={handleChange} rows="4" required className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md" />

                <label htmlFor="company_info" className="text-sm font-semibold ">Brief info about the company:</label>
                <textarea id="company_info" placeholder="A brief introduction about the hiring company" name="company_info" value={formData.company_info} onChange={handleChange} rows="4" required className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md"></textarea>

                <label htmlFor="job_description" className="text-sm font-semibold ">What will you do:</label>
                <textarea id="job_description" name="job_description" placeholder="Enter each item on a new line" onChange={handleJobListings} rows="4" required className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md"></textarea>

                <label htmlFor="requirements" className="text-sm font-semibold ">What you should have:</label>
                <textarea id="requirements" name="requirements" placeholder="Enter each item on a new line" onChange={handleJobListings} rows="8" required className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md"></textarea>

                <label htmlFor="benefits" className="text-sm font-semibold ">What we offer:</label>
                <textarea id="benefits" placeholder="Enter each item on a new line" name="benefits" rows="8" onChange={handleJobListings} required className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md"></textarea>

                <label htmlFor="location" className="text-sm font-semibold ">Location:</label>
                <input type="text" id="location" placeholder="Enter the location or (Remote)" name="location" value={formData.location} onChange={handleChange} required className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md"/>

                <label htmlFor="salary" className="text-sm font-semibold">Salary:</label>
                <input type="text" id="salary" placeholder="Enter the monthly gross salary for the job" name="salary" value={formData.salary} onChange={handleChange} required className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md"/>

                <button disabled={postLoading} type="submit" className={`${postLoading && 'cursor-not-allowed'} flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-all py-3 rounded-3xl w-fit px-8 text-white font-semibold text-sm mx-auto`}>{ postLoading ? <ClipLoader color="#fff" size={'20px'} /> : <span>Post Your Job <FontAwesomeIcon icon={faPaperPlane} /></span> }</button>
            </form>
        </section>
    </div>
  )
}

export default PostJob