import { Route, Routes } from "react-router"
import AJList from "./AJList_new"
import AJCreate from "./AJCreate_new"

const AnomaliJaringan= () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/50 via-white to-emerald-50/30">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Routes>
          <Route index element={<AJList/>}></Route>
          <Route path="create" element={<AJCreate/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default AnomaliJaringan