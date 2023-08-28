import { redirect } from "react-router-dom";

export type Token = {
    token: string | null
}

export function getTokenExpireDate(): number | null {
    const storeExpireDate: string | null = localStorage.getItem("expired")

    if (!storeExpireDate) {
        return null
    }

    const expireDate: Date = new Date(storeExpireDate)
    const now: Date = new Date()
    const durationLeft = expireDate.getTime() - now.getTime()
    return durationLeft
}

export function getAuthToken():string | null {
    const token = localStorage.getItem("token")

    if (!token) {
        return null
    }

    const tokenDuration = getTokenExpireDate()

    if (tokenDuration === 0) {
        return "TOKEN IS EXPIRED"
    }

    return token
}

export function tokenLoader() {
    return getAuthToken()
}

export function checkAuthToken() {
    const token = getAuthToken()

    if (token === null) {
        return redirect("/auth")
    }

    return null
}
