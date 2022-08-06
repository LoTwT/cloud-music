import { memo, useState } from "react"
import Horizen from "../../baseUI/horizen-item"
import { categoryTypes, alphaTypes } from "../../api/config"
import { NavContainer } from "./style"

function Singers() {
  const [category, setCategory] = useState("")
  const [alpha, setAlpha] = useState("")

  const handleUpdateAlpha = (val: string) => {
    setAlpha(val)
  }

  const handleUpdateCatetory = (val: string) => {
    setCategory(val)
  }

  return (
    <NavContainer>
      <Horizen
        list={categoryTypes}
        title={"分类 (默认热门):"}
        handleClick={handleUpdateCatetory}
        oldVal={category}
      ></Horizen>
      <Horizen
        list={alphaTypes}
        title={"首字母:"}
        handleClick={(val) => handleUpdateAlpha(val)}
        oldVal={alpha}
      ></Horizen>
    </NavContainer>
  )
}

export default memo(Singers)
