import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Tweets from "./pages/Tweets";
import { Suspense, lazy } from "react";
import MainLayout from "./layouts/MainLayout";
const Home = lazy(() => import("./pages/Home"));
const Tweets = lazy(() => import("./pages/Tweets"));

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route
            index
            element={
              // <Suspense fallback={<Loader />}>
              <Suspense fallback="">
                <Home />
              </Suspense>
            }
          />
          <Route
            path="tweets"
            element={
              <Suspense fallback="">
                <Tweets />
              </Suspense>
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
