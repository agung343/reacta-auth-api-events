import { Form, useActionData, useNavigation, useNavigate } from "react-router-dom";

import Input from "./Input";
import classes from "./EventForm.module.scss";

interface Props {
    method: "post" | "patch"
    event?: {
        title?: string
        description?: string
    }
}

interface ActionData {
    errors?: Record<string, string>
}

export default function EventForm({method, event}: Props) {
    const data = useActionData() as ActionData
    const navigate = useNavigate()
    const navigation = useNavigation()

    function cancelHandleClick() {
        navigate("/")
    }

    const isSubmitting = navigation.state === "submitting"

    return (<>
        <Form method={method} className={classes.form}>
            {data && data.errors && (
                <ul>
                    {Object.values(data.errors).map(err => <li key={err}>{err}</li>)}
                </ul>
            )}
            <Input method="input" id="title" label="Title" type="text"
              defaultValue={event ? event.title : ""}
            />
            <Input method="input" id="image" label="Image" type="url" 
              defaultValue={event ? event.title : ""}
            />
            <Input method="input" id="date" label="Date" type="date" 
              defaultValue={event ? event.title : ""}
            />
            <Input method="textarea" id="description" label="Description" 
              defaultValue={event ? event.description : ""}
            />
            <div className={classes.actions}>
                <button type="button" onClick={cancelHandleClick} disabled={isSubmitting}>
                    Cancel
                </button>
                <button disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Save"}
                </button>
            </div>
        </Form>
    </>)
}