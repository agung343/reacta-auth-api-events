import { json, defer, type LoaderFunctionArgs } from "react-router-dom";

type LoaderFunctionArgsWithoutRequest = Omit<LoaderFunctionArgs, "request">;

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

export async function eventDetailLoader({params}: LoaderFunctionArgsWithoutRequest) {
    const id = params.eventId as string
    
    return defer({
        event: await loadEvent(id),
    })
}