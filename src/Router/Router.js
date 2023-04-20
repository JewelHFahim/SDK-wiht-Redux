import Edit from "../Pages/Edit";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Pages/Home");
const { default: Add } = require("../Pages/Add");
const { default: View } = require("../Pages/View");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/view/:id",
    element: <View />,
  },
]);


export default router;