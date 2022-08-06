import * as actionTypes from "./constants"
import { fromJS } from "immutable" // 将 JS 对象转换成 immutable 对象
import {
  getBanner,
  getRecommendList as getRecommends,
} from "../../../api/request"
import { Dispatch } from "redux"

type TData = Record<string, any>

export const changeBannerList = (data: TData) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data),
})

export const changeRecommendList = (data: TData) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data),
})

export const changeEnterLoading = (data: boolean) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data,
})

export const getBannerList = () => {
  return (dispatch: Dispatch) => {
    getBanner()
      .then((data) => {
        dispatch(changeBannerList(data.banners))
      })
      .catch(() => {
        console.log("轮播图数据传输错误")
      })
  }
}

export const getRecommendList = () => {
  return (dispatch: Dispatch) => {
    changeEnterLoading(true)
    getRecommends()
      .then((data) => {
        dispatch(changeRecommendList(data.result))
        dispatch(changeEnterLoading(false)) // 改变 loading
      })
      .catch(() => {
        console.log("推荐歌单数据传输错误")
      })
  }
}
