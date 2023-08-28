import { json, redirect, type ActionFunctionArgs } from "react-router-dom";

import { getAuthToken } from "../../util/auth-token";

export default async function eventFormAction({request, params}: ActionFunctionArgs) {
    const method = request.method
    console.log(method)
    const data = await request.formData()
    const eventData = {
        title: data.get("title"),
        image: data.get("image"),
        date: data.get("date"),
        description: data.get("description")
    }

    let URL: string = import.meta.env.VITE_URL

    if (method === "PATHC") {
        const eventId = params.eventId as string
        URL = `${URL}/events/` + eventId
        return URL
    }

    const token = getAuthToken()

    const response = await fetch(`${URL}/events`, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify(eventData)
    })

    if (response.status === 422) {
        return response
    }

    if (!response.ok) {
        throw json(
            {message: "Could not save event"},
            {status: 500}
        )
    }

    return redirect("/events")
}