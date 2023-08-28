import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/Forms/EventForm";
import type { EventsProps } from "../components/Events/List";

export default function EditEventPage() {
    const data = useRouteLoaderData("event-detail") as EventsProps
    const event = data.event

    return <EventForm method="patch" event={event} />
}