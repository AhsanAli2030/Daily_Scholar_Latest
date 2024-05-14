import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_Page from "./Pages/Home_Page";
import Bar_Loader from "./Components/Bar_Loader";
const App = () => {
  return (
    <>
      <div className="bg-[#1B1A1D]">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Bar_Loader />}>
                  <Home_Page />
                </Suspense>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
