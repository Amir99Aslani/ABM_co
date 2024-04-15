import React, { createContext, useState, Suspense } from "react";
import LoadingSpinner from "./Components/wedgits/LoadingSpinner";
import { Navigate, Route, Routes } from "react-router-dom";
import axios from "axios";

export const LoginContext = createContext();

const Root = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") != null
  );

  // axios.defaults.baseURL = props.onUrlData?.baseUrl;
  axios.defaults.baseURL = "http://192.168.1.200:1013/";

  const HomePage = React.lazy(() => import("./Components/pages/HomePage"));
  const Category = React.lazy(() => import("./Components/pages/Category"));

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Routes>
        <Route
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <HomePage />
            </Suspense>
          }
          exact
          path="/"
        />
        <Route
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Category />
            </Suspense>
          }
          exact
          path="/category"
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LoginContext.Provider>
  );
};

export default Root;
