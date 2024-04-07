//用户相关的状态管理
import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";
import { setToken as _setToken, getToken } from "@/utils";

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() || ''
  },
  //同步修改方法
  reducers: {
    setToken(state, action) {
      //redux
      state.token = action.payload
      //localstorage
      _setToken(action.payload)
    }
  }
})

//结构出actionCreator
const { setToken } = userStore.actions

//获取reducer 函数
const userReducer = userStore.reducer

//异步方法完成登入获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    //1. 发送异步请求
    const res = await request.post('/authorizations', loginForm)
    //2. 提交同步action 进行token存入
    dispatch(setToken(res.data.token))
  }
}
export { fetchLogin, setToken }

export default userReducer