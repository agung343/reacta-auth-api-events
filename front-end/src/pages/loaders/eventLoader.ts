import { json, defer, LoaderFunctionArgs } from "react-router-dom";

const url = import.meta.env.VITE_URL

async function loadEvent(id: string) {
    const response = await fetch(`${url}/events/` + id)

    if (!response.ok) {
        throw json(
            {message: "Could not fetch details for selected event"},
            {status: 500}
        )
    }

    const resData = await response.json()
    return resData.event
}

async function loadEvents() {
    const response = await fetch(`${url}/events`)

    if (!response.ok) {
        throw json(
            {message: "Could not fetch events."},
            {status: 500}
        )
    }

    const resData = await response.json()
    return resData.events
}

export async function eventDetailLoader({params}: LoaderFunctionArgs) {
    const id = params.eventId as string
    
    return defer({
        event: await loadEvent(id),
        events: await loadEvents()
    })
}