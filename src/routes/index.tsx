import { useRoutes, Navigate } from "react-router-dom"
import Home from "../application/Home"
import Rank from "../application/Rank"
import Recommend from "../application/Recommend"
import Singers from "../application/Singers"

const RouterGenerator = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        { index: true, element: <Recommend /> },
        {
          path: "singers",
          element: <Singers />,
        },
        {
          path: "rank",
          element: <Rank />,
        },
      ],
    },
  ])
}

export default RouterGenerator
