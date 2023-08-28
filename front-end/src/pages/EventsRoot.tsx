import { Outlet } from "react-router-dom";

import EventNavigation from "../components/Events/Navigation";

export default function EventRootLayout() {
    return (<>
        <EventNavigation />
        <Outlet />
    </>)
}