import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import UserRegister from "../Components/UserRegister";
import UserLogin from "../Components/UserLogin";
import ResetPassword from "../Components/ResetPassword";
import SetnewPassword from "../Components/SetnewPassword";
import UrlShortener from "../Components/UrlShortener";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLogin />,
  },
  {
    path: "/login",
    element: <UserLogin />,
  },
  {
    path: "/register",
    element: <UserRegister />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/setnew-password",
    element: <SetnewPassword />,
  },
  {
    path: "/url-shortener",
    element: <UrlShortener />,
  },

  
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;
