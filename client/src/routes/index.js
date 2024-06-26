import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import EmailPage from "../pages/EmailPage";
import PasswordPage from "../pages/PasswordPage";
import Home from "../pages/Home";
import MessagePage from "../components/MessagePage";
import AuthLayout from "../layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "register",
        element: (
          <AuthLayout>
            <Register />
          </AuthLayout>
        ),
      },
      {
        path: "email",
        element: (
          <AuthLayout>
            <EmailPage />
          </AuthLayout>
        ),
      },
      {
        path: "password",
        element: (
          <AuthLayout>
            <PasswordPage />
          </AuthLayout>
        ),
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
