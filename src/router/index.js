//router configuration 

//import 
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";

import {
  createBrowserRouter,
} from "react-router-dom";
import { AuthRoute } from "@/components/AuthRoute";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish";
import Home from "@/pages/Home";
//配置路由实例
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRoute><Layout /> </AuthRoute>,
    children: [
      {
        index: true, // 将此路由设置为默认路由
        element: <Home />
      },
      {
        path: 'article',
        element: <Article />
      },
      {
        path: 'publish',
        element: <Publish />
      },

    ]
  },
  {
    path: "/login",
    element: <Login />
  },
])

export default router