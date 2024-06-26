import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import EmailPage from "../pages/EmailPage";
import PasswordPage from "../pages/PasswordPage";
import Home from "../pages/Home";
import MessagePage from "../components/MessagePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "email",
        element: <EmailPage />,
      },
      {
        path: "password",
        element: <PasswordPage />,
      },
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: ":userId",
            element: <MessagePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
