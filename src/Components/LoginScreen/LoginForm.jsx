import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { signinStart, signinSuccess, signinFailure } from "../redux/authSlice";
import { ClipLoader } from "react-spinners";

const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading } = useSelector(state => state.user)
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target
        setLoginFormData((prev) => {
          return {
            ...prev,
            [name]: value
          }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        dispatch(signinStart())
        try {
          const res = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginFormData)
          })
          if (res.ok) {
            const data = await res.json()
            dispatch(signinSuccess(data.user))
            navigate('/')
            toast.success(data.message)
          } else {
            const error = await res.json()
            toast.error(error.message)
            dispatch(signinFailure(error.message))
          }
        } catch (error) {
          toast.error(error)
          dispatch(signinFailure(error.message))
        }
    }
  return (
    <div>
      <section  className=" max-w-xl mx-auto px-3">
        <div className=" my-24">
          <h2 data-aos="zoom-in" data-aos-duration="1500" className="text-transparent py-3 bg-gradient-to-r from-black to-green-500 bg-clip-text text-4xl text-center font-semibold mb-8 z-50">Welcome Back!</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input type="email" required name="email" value={loginFormData.email} onChange={handleChange} placeholder="Email" className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md"/>
              <input type="password" required name="password" placeholder="Password" value={loginFormData.password} onChange={handleChange} className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md" />
              <button disabled={loading} type="submit" className={`${loading && 'cursor-not-allowed'} flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 transition-all py-3 rounded-3xl px-8 text-white font-semibold text-sm `}>{ loading ? <ClipLoader color="#fff" size={'20px'} /> : <span>Login <FontAwesomeIcon icon={faPaperPlane} /></span> }</button>
              <p className="font-semibold text-xs text-center my-8">Don't have an account? No worries <span className="text-green-500 hover:border-b pb-1 border-green-600 hover:text-green-600 transition-all"><Link to={'/signup'}>Signup</Link></span></p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default LoginForm