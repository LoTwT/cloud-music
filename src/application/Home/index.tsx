import { memo } from "react"
import { Outlet } from "react-router"
import { NavLink } from "react-router-dom"
import { Tab, TabItem, Top } from "./style"

function Home() {
  return (
    <>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>

      <Tab>
        <NavLink
          to="/recommend"
          className={({ isActive }) => (isActive ? "selected" : undefined)}
        >
          <TabItem>
            <span> 推荐 </span>
          </TabItem>
        </NavLink>
        <NavLink
          to="/singers"
          className={({ isActive }) => (isActive ? "selected" : undefined)}
        >
          <TabItem>
            <span> 歌手 </span>
          </TabItem>
        </NavLink>
        <NavLink
          to="/rank"
          className={({ isActive }) => (isActive ? "selected" : undefined)}
        >
          <TabItem>
            <span> 排行榜 </span>
          </TabItem>
        </NavLink>
      </Tab>

      <Outlet />
    </>
  )
}

export default memo(Home)
