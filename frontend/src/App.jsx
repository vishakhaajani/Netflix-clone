import { Route, Routes } from "react-router-dom"
import Homepage from "./Pages/home/Homepage"
import Loginpage from "./Pages/Loginpage"
import Signuppage from "./Pages/Signuppage"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Loginpage/>} />
        <Route path="/signup" element={<Signuppage/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
