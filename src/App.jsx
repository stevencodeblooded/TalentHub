import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./Shared/Layout"
import Home from "./Container/Home"
import About from "./Container/About"
import Career from "./Container/Career"
import CareerApplication from "./Container/CareerApplication"
import Contact from "./Container/Contact"
import NotFoundPage from "./Container/NotFoundPage"
import Signup from "./Container/Signup"
import Login from "./Container/Login"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="careers" element={<Career />} />
        <Route path="careers/:id" element={<CareerApplication />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )
  return (
    <RouterProvider
      router={router} 
    />
  )
}

export default App