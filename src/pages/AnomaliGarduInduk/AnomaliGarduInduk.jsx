import { Route, Routes } from "react-router";
import AGList from "./AGList";
import AGCreate from "./AGCreate";

const AnomaliGarduInduk = () => {
  return(
    <div className="m-7">
      <Routes>
        <Route index element={<AGList/>}/>
        <Route path="create" element={<AGCreate/>}/>
      </Routes>
  </div>
  ); 
};

export default AnomaliGarduInduk;
