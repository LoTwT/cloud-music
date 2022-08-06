import { memo } from "react"
import { Outlet } from "react-router"

function Home() {
  return (
    <>
      <div>Home</div>
      <Outlet />
    </>
  )
}

export default memo(Home)
