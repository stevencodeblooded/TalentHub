import { useState } from "react"
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateUserStart, updateUserFailure, updateUserSuccess, logout } from "../Components/redux/authSlice";
import { ClipLoader } from "react-spinners";

const Account = () => {
    const dispatch = useDispatch()
    const { currentUser, updateLoading, logoutLoading } = useSelector(state => state.user)
    const [formData, setFormData] = useState({
        name: currentUser?.name,
        email: currentUser?.email,
        password: ''
    })

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    } 

    const handleFormSubmission = async e => {
        e.preventDefault()

        dispatch(updateUserStart())
        const res = await fetch(`${import.meta.env.VITE_DB_URL}/${currentUser?._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(formData)
        })

        if (res.ok) {
            const data = await res.json()
            toast.success(data.message);
            setFormData(data?.newUser)
            dispatch(updateUserSuccess(data?.newUser))
        } else {
            const data = await res.json()
            toast.error(data.message)
            dispatch(updateUserFailure(data.message))
        }
    }

    const handleUserLogout = async e => {
        e.preventDefault()
        dispatch(logout())
    }

  return (
    <div className="my-32">
        <section className="max-w-2xl mx-auto px-3">
            <div>
                <h2 data-aos="zoom-in" data-aos-duration="1500" className="text-transparent py-3 bg-gradient-to-r from-black to-green-500 bg-clip-text text-4xl text-center font-semibold mb-8 z-50">Update Your Profile</h2>
                <form className="flex flex-col gap-3">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange}  className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md" />
                    <input type="password" name="password" placeholder="**********" onChange={handleChange}  className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md" />
                    <div className="w-full flex items-center justify-between gap-3">
                        <button disabled={updateLoading || logoutLoading} onClick={handleFormSubmission} className={`${updateLoading && 'cursor-not-allowed'} flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition-all py-3 rounded-3xl w-44 px-8 text-white font-semibold text-sm`}>{ updateLoading ? <ClipLoader color="#fff" size={'20px'} /> : 'Update Profile' }</button>
                        <button disabled={logoutLoading || updateLoading} onClick={handleUserLogout} type="submit" className={`${logoutLoading && 'cursor-not-allowed'} flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 transition-all py-3 rounded-3xl w-32 px-8 text-white font-semibold text-sm`}>{ logoutLoading ? <ClipLoader color="#fff" size={'20px'} /> : 'Logout' }</button>
                    </div>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Account