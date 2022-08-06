import { IconStyle } from "./assets/iconfont/iconfont"
import { BrowserRouter } from "react-router-dom"
import RouterGenerator from "./routes"

import { GlobalStyle } from "./style"

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {<RouterGenerator />}
    </BrowserRouter>
  )
}

export default App
