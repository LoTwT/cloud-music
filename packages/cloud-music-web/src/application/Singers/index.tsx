import { memo } from "react"
import Horizen from "../../baseUI/horizen-item"
import { categoryTypes } from "../../api/config"
import { NavContainer } from "./style"

function Singers() {
  return (
    <NavContainer>
      <Horizen list={categoryTypes} title={"分类 (默认热门):"}></Horizen>
      {/* <Horizen list={alphaTypes} title={"首字母:"}></Horizen> */}
    </NavContainer>
  )
}

export default memo(Singers)
