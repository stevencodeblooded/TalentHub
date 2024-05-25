import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { letsChatStart, letsChatSuccess, letsChatFailure } from '../redux/authSlice'
import { ClipLoader } from "react-spinners";

const LetsTalk = () => {
  const dispatch = useDispatch()
  const { chatLoading } = useSelector(state => state.user)
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setContactFormData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleFormSubmission = async (e) => {
    e.preventDefault()

    dispatch(letsChatStart())
    try {
      const res = await fetch(`${import.meta.env.VITE_DB_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(contactFormData)
      })
  
      if(res.ok) {
        const data = await res.json()
        toast.success(data.message)
        dispatch(letsChatSuccess(data.message))
        setContactFormData({
          name: '',
          email: '',
          message: ''
        })
      } else {
        const err = await res.json()
        dispatch(letsChatFailure(err.message))
        toast.error(err.message)
      }
    } catch (error) {
      dispatch(letsChatFailure(error))
      toast.error(error);
    }

  }
  
  return (
    <div>
      <section className=" max-w-6xl mx-auto px-3">
        <div className="my-32">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            <div className="w-full md:w-1/2 text-center md:text-start" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <h2 className='text-4xl leading-snug font-semibold mb-4'>Catch up with <span className="text-green-500">Talent Hub!</span></h2>
              <p>Got a question about Talent Hub?</p>
              <p className="text-sm">Let us know.</p>
            </div>
            <div className="w-full md:w-1/2 md:px-0">
              <form onSubmit={handleFormSubmission} className="flex flex-col gap-3">
                <input type="text" name="name" required value={contactFormData.name} onChange={handleChange} placeholder="Name" className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md" />
                <input type="email" name="email" required value={contactFormData.email} onChange={handleChange} placeholder="Email" className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md" />
                <textarea name="message" required value={contactFormData.message} onChange={handleChange} rows="4" placeholder="Talk to us..." className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md" />
                <button disabled={chatLoading} className={`${chatLoading && 'cursor-not-allowed'} flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition-all py-3 rounded-3xl w-full text-white font-semibold text-sm mx-auto`}>{ chatLoading ? <ClipLoader color="#fff" size={'20px'} /> : <span>Send Your Message <FontAwesomeIcon icon={faPaperPlane} /></span>}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LetsTalk