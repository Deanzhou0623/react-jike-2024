//封装高阶组件
// 核心逻辑：有token 正常跳转 无token登入

import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";

export function AuthRoute({ children }) {
  const token = getToken()
  if (token) {
    // 有token跳转到登入
    return <>{children}</>
  } else {
    //无token跳转到 login
    return <Navigate to={'/login'} replace />
  }
}