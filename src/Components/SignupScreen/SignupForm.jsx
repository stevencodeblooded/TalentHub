import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
  }
  
  return (
    <div>
      <section  className=" max-w-xl mx-auto px-3">
        <div className=" my-24">
          <h2 className="text-transparent py-3 bg-gradient-to-r from-black to-green-500 bg-clip-text text-4xl text-center font-semibold mb-8 z-50">Join Us Today!</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md"/>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md"/>
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md" />
              <button type="submit" className="flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 transition-all py-3 rounded-3xl px-8 text-white font-semibold text-sm ">Signup <FontAwesomeIcon icon={faPaperPlane} /></button>
              <p className="font-semibold text-xs text-center my-8">Do you already have an account, <span className="text-green-500 hover:border-b pb-1 border-green-600 hover:text-green-600 transition-all"><Link to={'/login'}>Login</Link></span></p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default SignupForm