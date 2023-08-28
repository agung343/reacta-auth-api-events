import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";

import type { Events } from "../components/Events/List";
import EventList from "../components/Events/List";

export default function EventsPage() {
    const {events} = useLoaderData() as Events

    return (
        <Suspense fallback={
            <p style={{textAlign: "center"}}>
                Loading...
            </p>
        }>
            <Await resolve={events}>
                {(loadedEvents) => <EventList events={loadedEvents} />}
            </Await>
        </Suspense>
    )
}

