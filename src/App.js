import React from "react"
import { BrowserRouter as Router } from "react-router-dom";
import Reactrouter from "./Components/Reactrouter";
import Header from './Components/front/Header/Header'

 const App = () => {  
  return(
  <Router>
     <Header />
     <Reactrouter />
  </Router>
  
)
}
export default App
