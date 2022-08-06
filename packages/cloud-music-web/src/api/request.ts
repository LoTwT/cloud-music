import { apiFetch } from "./config"

export const getBanner = () => apiFetch<Record<string, any>>("/banner")

export const getRecommendList = () =>
  apiFetch<Record<string, any>>("/personalized")
