export const hostName = "vasando.ir"
export const baseUrl = "https://" + hostName

export const apiKeys = {
  exp_list: "exp_list",
  exp_filters: "exp_filters",
} as const

export const apiUrls = {
  exp_list: "/api/user/experiences",
  exp_filters: "/api/admin/experiences/filters",
} as const
