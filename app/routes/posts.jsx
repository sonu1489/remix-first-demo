import { Outlet } from "@remix-run/react"
const posts = () => {
  return (
    <div>
        <h1>
            post routess
        </h1>
        <Outlet/>


    </div>
  )
}

export default posts