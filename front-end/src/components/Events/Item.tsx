import { Link, useSubmit, useRouteLoaderData } from "react-router-dom";

import type { Token } from "../../util/auth-token";
import classes from "./Item.module.scss";

type Events = {
    event: {
        title: string;
        date: string;
        description: string;
        image: string;
    }
}

export default function EventItem({event}: Events) {
    const token = useRouteLoaderData("root") as Token
    const submit = useSubmit()

    function deleteHandler() {
        const proceed = window.confirm("Are you sure?")

        if (proceed) {
            submit(null, {"method": "delete"})
        }
    }

    return(
        <article className={classes.event}>
            <img src={event.image} alt={event.title} />
            <h1>{event.title}</h1>
            <time>{event.date}</time>
            <p>{event.description}</p>
            {token !== null && (
                <menu className={classes.actions}>
                    <Link to="edit">Edit</Link>
                    <button onClick={deleteHandler}>
                        Delete
                    </button>
                </menu>
            )}
        </article>
    )
}