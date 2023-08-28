import { Link } from "react-router-dom";

import classes from "./List.module.scss"

export type EventsProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event: any;
    id: string | number;
    image: string;
    title: string;
    date: string
}

export type Events = {
    events: EventsProps[]
}

export default function EventList({events}: Events) {
    return(
        <div className={classes.events}>
            <h1>All Events</h1>
            {events.length > 0 && (
                <ul className={classes.list}>
                    {events.map(event => (
                        <li key={event.id} className={classes.item}>
                            <Link to={`/events/${event.id}`}>
                                <img src={event.image} alt={event.title} />
                                <div className={classes.content}>
                                    <h2>{event.title}</h2>
                                    <p>{event.date}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}