import { NavLink, useRouteLoaderData } from "react-router-dom";

import type { Token } from "../../util/auth-token";
import classes from "./Navigation.module.scss"

export default function EventNavigation() {
    const token = useRouteLoaderData("root") as Token
    
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="/events"
                          className={({isActive}) => isActive ? classes.active : undefined}
                        >
                            All Events
                        </NavLink>
                    </li>
                    {token !== null && (
                        <li>
                         <NavLink to="/events/new"
                           className={({isActive}) => isActive ? classes.active : undefined}
                         >
                             New Event
                         </NavLink>
                     </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}