import "./App.css";
import { Home, Navbar, Login, Signup, ForgotPassword } from "./frontend/components/index-components"
import { Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path = "/login" element = {<Login />} />
          <Route path = "/signup" element = {<Signup />} />
          <Route path = "/forgotpassword" element = {<ForgotPassword />} />
          <Route path = "/" element = {<Home />} />



      </Routes>
    </div>
  );
}

export default App;
