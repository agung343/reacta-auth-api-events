import { Suspense } from "react";
import { useRouteLoaderData, Await, useLoaderData } from "react-router-dom";

import EventItem from "../components/Events/Item";
// import EventList from "../components/Events/List";
import type { Events } from "../components/Events/List";

export default function EventDetailPage() {
    const {event} = useRouteLoaderData("event-detail") as Record<string, string>
    // const {events} = useLoaderData() as Events
    
    return(<>
        <Suspense fallback={
            <p style={{textAlign: "center"}}>
                Loading ...
            </p>
        }>
            <Await resolve={event}>
                {(loadedEvent) => <EventItem event={loadedEvent} />}
            </Await>
        </Suspense>

        {/* <Suspense fallback={
            <p style={{textAlign: "center"}}>
                Loading ...
            </p>
        }>
            <Await resolve={events}>
                {(loadedEvents) => <EventList events={loadedEvents} />}
            </Await>
        </Suspense> */}
    </>)
}
