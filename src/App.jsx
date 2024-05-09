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
import { Provider } from "react-redux"
import { store } from "./Components/redux/store"
import PostJob from "./Container/PostJob"
import Account from "./Container/Account"

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
        <Route path="post" element={<PostJob />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )
  return (
    <Provider store={store}>
      <RouterProvider
        router={router} 
      />
    </Provider>
  )
}

export default App