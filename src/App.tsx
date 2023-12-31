import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";
import Dashboard from "./GymDashBoard/Dashboard";
import Plan from "./GymDashBoard/Plan/Plan";
import Batch from "./GymDashBoard/Batch/Batch";
import CreateGym from "./CreateGym/CreateGym";
import Member from "./GymDashBoard/Member/member";
import AddMember from "./GymDashBoard/Member/AddMember";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/creategym" element={<CreateGym />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/batch" element={<Batch />} />
          <Route path="/members" element={<Member />} />
          <Route path="/addmembers" element={<AddMember />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
