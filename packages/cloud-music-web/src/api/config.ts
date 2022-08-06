import { $fetch } from "ohmyfetch"

export const apiFetch = $fetch.create({
  baseURL: "http://localhost:3000",
  // onResponse(ctx) {
  //   return ctx.response.json()
  // },
  onResponseError({ response }) {
    return Promise.reject(response)
  },
})
