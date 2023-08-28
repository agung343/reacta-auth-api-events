import { type ActionFunctionArgs } from "react-router-dom";

export default async function newsletterAction({request}: ActionFunctionArgs) {
    const data = await request.formData()
    const email = data.get("email")

    console.log(email)
    return {
        message: "Signup succesfully"
    }
}