import { apiFetch } from "./config"

export const getBanner = () => apiFetch<Record<string, any>>("/banner")

export const getRecommendList = () =>
  apiFetch<Record<string, any>>("/personalized")

export const getHotSingerListRequest = (count: number) =>
  apiFetch(`/top/artists?offset=${count}`)

export const getSingerListRequest = (
  category: string,
  alpha: string,
  count: number,
) =>
  apiFetch(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`,
  )
