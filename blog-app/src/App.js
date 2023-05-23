import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import "./style.scss";

import Login from './pages/Login';
import Register from './pages/Register';//
import Single from './pages/Single';
import Write from './pages/Write';
import Home from './pages/Home';
import Navbar from "./compoments/Navbar";
import Footer from "./compoments/Footer";
import Menu from "./compoments/Menu";

const Layout = () => {//
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:
//       <>
//         <Navbar />
//         <Home />
//         <Footer />
//       </>
//     ,
//   },
//   {
//     path: "/single",
//     element: <Single />,
//   },
//   {
//     path: "/write",
//     element: <Write />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/menu",
//     element: <Menu />,
//   }
// ]);

const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/single",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/menu",
        element: <Menu />,
      }
    ],
  },

]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
      {/* <p>Hello</p> */}
    </div>
  );
}

export default App;
