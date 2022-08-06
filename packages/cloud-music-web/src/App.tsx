import { BrowserRouter } from "react-router-dom"
import RouterGenerator from "./routes"

import store from "./store"
import { Provider } from "react-redux"

import { GlobalStyle } from "./style"
import { IconStyle } from "./assets/iconfont/iconfont"
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {<RouterGenerator />}
      </BrowserRouter>
    </Provider>
  )
}

export default App
