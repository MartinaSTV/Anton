import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LogIn from "./Pages/LogIn/LogIn";
import Error from "./Pages/Error";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LogIn />, errorElement: <Error /> },
  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
