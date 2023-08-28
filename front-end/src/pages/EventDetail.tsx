import { Suspense } from "react";
import { useRouteLoaderData, Await } from "react-router-dom";

import EventItem from "../components/Events/Item";

export default function EventDetailPage() {
    const {event} = useRouteLoaderData("event-detail") as Record<string, string>
    
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
    </>)
}
