import { Route, Routes } from "react-router"
import AJList from "./AJList"
import AJCreate from "./AJCreate"

const AnomaliJaringan= () => {
  return (
    <div className="m-7">
      <Routes>
        <Route index element={<AJList/>}></Route>
        <Route path="create" element={<AJCreate/>}></Route>
      </Routes>
    </div>
  );
};

export default AnomaliJaringan