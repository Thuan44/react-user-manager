type UserStore = {
    id: number
    email: string
    firstName?: string
    lastName?: string
    username?: string
    gender?: string
    image?: string
    role?: string
    accessToken?: string
    refreshToken?: string
    isCheckingUser?: boolean
    clearUser: () => void
    setUser: (user: Partial<UserStore>) => void
}

export type { UserStore }