import { Outlet, useRouteLoaderData, useSubmit} from "react-router-dom";
import { useEffect } from "react";

import MainNavigation from "../components/MainNavigation";
import { getTokenExpireDate } from "../util/auth-token";

export default function RootLayout() {
    const token = useRouteLoaderData("root")    
    const submit = useSubmit()
    useEffect(() => {
        if (!token) {
            return;
        }
        
        if (token === "TOKEN IS EXPIRED") {
            submit(null, {action: "/logout", method:"post"})
            return;
        }

        const tokenDuration = getTokenExpireDate()

        if (tokenDuration !== null) {
            setTimeout(() => {
                submit(null, {action: "/", method: "post"})
            }, tokenDuration)
        }
    }, [submit, token])


    return(<>
        <MainNavigation />
        <main>
            <Outlet />
        </main>
    </>)
}