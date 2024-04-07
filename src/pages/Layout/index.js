//1.test layout
import { request } from "@/utils"
import { useEffect } from "react"

//test interface
const Layout = () => {
  useEffect(() => {
    request.get('/user/profile')
  }, [])
  return <div>
    this is Layout
  </div>
}

export default Layout