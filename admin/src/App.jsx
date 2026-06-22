import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./common/Navbar"
import Overview from "./pages/Overview"
import Categories from "./pages/Categories"
import Product from "./pages/Product"
import Blog from "./pages/Blog"
import Service from "./pages/Service"
import Booking from "./pages/Booking"
import AddBlog from "./pages/AddBlog"
import AddService from "./pages/AddService"
import AddCategory from "./pages/AddCategory"
import User from "./pages/User"
import Login from "./pages/login"
import Layout from "./pages/Layout"

function App() {
 return (
    <>
   <BrowserRouter>
  <Routes>

    <Route path="/login" element={<Login />} />

    <Route element={<Layout />}>
      <Route path="/" element={<Overview />} />
      <Route path="/category" element={<Categories />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/service" element={<Service />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/addblog" element={<AddBlog />} />
      <Route path="/addservice" element={<AddService />} />
      <Route path="/addcategory" element={<AddCategory />} />
      <Route path="/user" element={<User />} />
    </Route>

  </Routes>
</BrowserRouter>
    
      
       
    </>
  )
}

export default App
