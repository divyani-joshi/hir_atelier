import Collection from "./pages/Collection"
import Home from "./pages/Home"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Service from "./pages/Service"
import CustomeOrder from "./pages/CustomeOrder"
import Blog from "./pages/Blog"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Contact from "./pages/Contact"
import Mehendi from "./pages/Mehendi"
import Fashion from "./pages/Fashion"
import Crafts from "./pages/Crafts"
import Logout from "./common/Logout"
import Profile from "./pages/Profile"
import RouteLoader from "./common/RouteLoader";
import ScrollToTop from "./pages/ScrollToTop"

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
      <RouteLoader>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/collection" element={<Collection/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/customorder" element={<CustomeOrder/>}/>
          <Route path="/blog" element={<Blog/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/signup" element={<Signup/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/profile" element={<Profile/>}/>
           <Route path="/mehendi/:category_id" element={<Mehendi/>}/>
           <Route path="/fashion/:category_id" element={<Fashion/>}/>
           <Route path="/craft/:category_id" element={<Crafts/>}/>
        </Routes>
        </RouteLoader>
      </BrowserRouter>
    </>
  )
}

export default App
