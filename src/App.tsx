import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LogIn from "./Pages/LogIn/componenets/LogIn";
import Error from "./Pages/Error";
import Journal from "./Pages/Journal/Journal";
import Landingpage from "./Pages/LandingPage/LandingPage";
import ProtectedRoutes from "./Pages/LogIn/PrivateRoute";
import Today from "./Pages/Journal/Today";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landingpage />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: "/Journal",
          element: <Journal />,
        },
        {
          path: "/Today",
          element: <Today />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
