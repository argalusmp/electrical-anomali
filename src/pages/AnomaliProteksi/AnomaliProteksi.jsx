import { Route, Routes } from "react-router";
import APList from "./APList";
import APCreate from "./APCreate";

const AnomaliProteksi = () => {
  return (
    <div className="m-7">
      <Routes>
        <Route index element={<APList/>} />
        <Route path="create" element ={<APCreate/>}/>
      </Routes>
    </div>
  );
};

export default AnomaliProteksi