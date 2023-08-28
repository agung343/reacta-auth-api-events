import {NavLink, useRouteLoaderData, Form} from "react-router-dom"

import classes from "./ManNavigation.module.scss"
import Newsletter from "./Newsletter"

import type { Token } from "../util/auth-token"

export default function MainNavigation() {
    const token = useRouteLoaderData("root") as Token

    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink 
                         to="/"
                         className={({isActive}) => isActive ? classes.active : undefined}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                         to="/events"
                         className={({isActive}) => isActive ? classes.active : undefined}
                        >
                            Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                         to="/newsletter"
                         className={({isActive}) => isActive ? classes.active : undefined}
                        >
                            Newsletter
                        </NavLink>
                    </li>
                    {!token && (
                        <li>
                            <NavLink 
                             to="/auth?mode=signup"
                             className={({isActive}) => isActive ? classes.active : undefined}
                            >
                                Signup
                            </NavLink>
                        </li>
                    )}
                    {token && (
                        <li>
                           <Form method="post" action="/logout">
                            <button>Logout</button>
                           </Form>
                        </li>
                    )}
                </ul>
            </nav>
            <Newsletter/>
        </header>   
    )
}