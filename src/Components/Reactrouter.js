import {Route, Routes} from "react-router-dom"
import Contactus from "./front/Contact/Contactus"
import Home from "./front/Home/Home"
import Cisco from "./front/Courses/Cisco/Cisco"
import Courses from "./front/Courses/Courses"
const  Reactrouter= () => {
    return (
        
        <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/courses" element={<Courses />} />
                <Route exact path="/cisco" element={<Cisco />} />
                <Route exact path="/contact" element={<Contactus />} />
        </Routes>
    )
}
export default Reactrouter