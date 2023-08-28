import { json, defer } from "react-router-dom"

async function loadEvents() {
    const url = import.meta.env.VITE_URL;
    const response = await fetch(`${url}/events`) 

    if (!response.ok) {
        throw json(
            {message: "Could not fetch events"},
            {status: 500}
        )
    } else {
        const resData = await response.json()
        return resData.events
    }
}

export function eventsLoader() {
    return defer({
        events: loadEvents()
    })
}