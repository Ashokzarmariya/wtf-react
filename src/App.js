import { Route, Routes } from "react-router-dom";
import GymDetail from "./Components/Gyms/GymDetail";
import Gyms from "./Components/Gyms/Gyms";


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Gyms />}></Route>
        <Route path="/gym_details/:gym_name" element={<GymDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
