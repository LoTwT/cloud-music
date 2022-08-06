import { IconStyle } from "./assets/iconfont/iconfont"
import { BrowserRouter } from "react-router-dom"
import RouterGenerator from "./routes"

import { Provider } from "react-redux"

import { GlobalStyle } from "./style"

import "./App.css"
import store from "./store"

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
