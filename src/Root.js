import React, { createContext, useState, Suspense } from "react";
import LoadingSpinner from "./Components/wedgits/LoadingSpinner";
import { Navigate, Route, Routes } from "react-router-dom";
import axios from "axios";
import "react-spring-modal/styles.css";

export const LoginContext = createContext();

const Root = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") != null
  );

  // axios.defaults.baseURL = props.onUrlData?.baseUrl;
  axios.defaults.baseURL = "http://192.168.1.200:1013/";

  const HomePage = React.lazy(() => import("./Components/pages/HomePage"));
  const Category = React.lazy(() => import("./Components/pages/Category"));
  const Filter = React.lazy(() => import("./Components/pages/Filter"));
  const Login = React.lazy(() => import("./Components/wedgits/Login"));
  const ProductDetail = React.lazy(() =>
    import("./Components/pages/ProductDetail")
  );
  const Profile = React.lazy(() => import("./Components/pages/Profile"));

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
        <Route
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Filter />
            </Suspense>
          }
          exact
          path="/filter"
        />
        <Route
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ProductDetail />
            </Suspense>
          }
          exact
          path="/productDetail/:id/:name"
        />

        <Route
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Profile />
            </Suspense>
          }
          exact
          path="/profile"
        />
        <Route
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Login />
            </Suspense>
          }
          exact
          path="/login"
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LoginContext.Provider>
  );
};

export default Root;
