import { Form, Link, useActionData, useNavigation, useSearchParams } from "react-router-dom";

import Input from "./Input";
import classes from "./AuthForm.module.scss";

export default function AuthForm() {
    const [searchParams] = useSearchParams()
    const isLogin: boolean = searchParams.get("mode") === "login";

    interface ActionData {
        errors?: Record<string, string>;
        message?: string
    }
    const action = useActionData() as ActionData
    
    const navigation = useNavigation()
    const isSubmitting = navigation.state === "submitting" 

    return (<>
        <Form method="post" className={classes.form}>
            <h1>{isLogin ? "Login" : "Signup - Create a new user"}</h1>
            {action && action.errors && (
                <ul>
                    {Object.values(action.errors).map(
                        err => <li style={{color: "red"}} key={err}>
                            {err}
                        </li>
                    )}
                </ul>
            )}
            {action && action.message && <p style={{color:"red"}}>{action.message}</p>}
            <Input method="input"
             id="email" label="Email" type="email"
            />
            <Input method="input" id="password" label="Password" type="password" />
            <div className={classes.actions}>
                <Link to={`/auth?mode=${isLogin ? "signup": "login"}`}>
                    {isLogin ? "Signup" : "Login"}
                </Link>
                <button disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Save"}
                </button>
            </div>
        </Form>
    </>)
}