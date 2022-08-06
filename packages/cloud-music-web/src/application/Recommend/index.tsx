import { memo, useEffect } from "react"
import Slider from "../../components/slider"
import RecommendList from "../../components/list"
import Scroll from "../../components/scroll"
import { Content } from "./style"
import * as actionTypes from "./store/actionCreators"
import { connect } from "react-redux"

interface IRecommendProps {
  bannerList: any
  recommendList: any
  getBannerDataDispatch: () => void
  getRecommendListDataDispatch: () => void
}

function Recommend(props: IRecommendProps) {
  const {
    bannerList,
    recommendList,
    getBannerDataDispatch,
    getRecommendListDataDispatch,
  } = props

  useEffect(() => {
    getBannerDataDispatch()
    getRecommendListDataDispatch()
  }, [])

  const bannerListJS = bannerList ? bannerList.toJS() : []
  const recommendListJS = recommendList ? recommendList.toJS() : []

  return (
    <Content>
      <Scroll className="list">
        <div>
          <Slider bannerList={bannerListJS} />
          <RecommendList recommendList={recommendListJS} />
        </div>
      </Scroll>
    </Content>
  )
}

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state: any) => ({
  // 不要在这里将数据 toJS
  // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
  bannerList: state.getIn(["recommend", "bannerList"]),
  recommendList: state.getIn(["recommend", "recommendList"]),
})

// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch: any) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList())
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
