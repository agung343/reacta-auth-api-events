import type { ActionFunctionArgs } from "react-router-dom";
import { json, redirect } from "react-router-dom";

import { getAuthToken } from "../../util/auth-token";

export async function deleteEventDetail({params, request}: ActionFunctionArgs) {
    const eventId = params.eventId as string
    const token = getAuthToken()
    const url = import.meta.env.VITE_URL

    const response = await fetch(`${url}/events/` + eventId, {
        method: request.method,
        headers: {
            "Authorization": "Bearer " + token
        }
    })

    if (!response.ok) {
        throw json(
            {message: "An error occured, could not delete event."},
            {status: 500}
        )
    }
    return redirect("/events")
}