import "./App.css";
import { Home, Navbar, Login, Signup, ForgotPassword, UserHabit, Archive, Pomodoro, Stats } from "./frontend/components/index-components"
import { Routes, Route, Navigate} from "react-router-dom"
import { useSelector } from "react-redux"
function App() {
  const { jwtToken } = useSelector((store) => store.habit)
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path = "/login" element = {<Login />} />
          <Route path = "/signup" element = {<Signup />} />
          <Route path = "/forgotpassword" element = {<ForgotPassword />} />
          <Route path = "/" element = {<Home />} />
          <Route path = "/habits" element = {jwtToken ?<UserHabit />  :<Navigate to =  "/login"  />} />
          <Route path = "/archive" element = {jwtToken ?<Archive />  :<Navigate to =  "/login"  />} />
          <Route path = "/pomodoro" element = {jwtToken ?<Pomodoro />  :<Navigate to =  "/login"  />} />
          <Route path = "/stats" element = {jwtToken ?<Stats />  :<Navigate to =  "/login"  />} />
      </Routes>
    </div>
  );
}

export default App;
