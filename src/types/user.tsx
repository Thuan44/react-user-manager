type UserStore = {
    id: number
    email: string
    firstName?: string
    lastName?: string
    username?: string
    gender?: string
    image?: string
    accessToken?: string
    refreshToken?: string
    clearUser: () => void
}

export type { UserStore }