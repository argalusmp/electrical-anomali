import { Route, Routes } from "react-router";
import AGList from "./AGList";
import AGCreate from "./AGCreate";

const AnomaliGarduInduk = () => {
  return(
    <div className="min-h-screen bg-gradient-to-br from-purple-50/50 via-white to-blue-50/30">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Routes>
          <Route index element={<AGList/>}/>
          <Route path="create" element={<AGCreate/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default AnomaliGarduInduk;
