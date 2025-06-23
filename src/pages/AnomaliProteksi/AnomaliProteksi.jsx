import { Route, Routes } from "react-router";
import APList from "./APList_new";
import APCreate from "./APCreate_new";

const AnomaliProteksi = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Routes>
          <Route index element={<APList/>} />
          <Route path="create" element ={<APCreate/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default AnomaliProteksi