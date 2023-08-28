import { redirect } from "react-router-dom"

export default function logoutAction() {
    localStorage.removeItem("token")
    localStorage.removeItem("expired")
    return redirect("/auth?mode=login")
}