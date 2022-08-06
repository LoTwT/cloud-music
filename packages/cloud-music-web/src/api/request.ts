import { apiFetch } from "./config"

export const getBanner = () => apiFetch<Record<string, any>>("/banner")

export const getRecommedList = () =>
  apiFetch<Record<string, any>>("/personalized")
