/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouteError } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

export default function ErrorPage() {
    const error: any = useRouteError()

    let title: string = "An Error Occured";
    let message: string = "Something went wrong"

    if (error.status === 500) {
        message = error.data.message
    }

    if (error.status === 404) {
        title = "Not found"
        message = "Could not find resource or page"
    }

    return(<>
        <MainNavigation />
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
    </>)
}