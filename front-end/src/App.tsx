import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { tokenLoader } from "./util/auth-token";

import RootLayout from "./pages/RootLayout"
import ErrorPage from "./pages/Error"
import Homepage from "./pages/Home";
import EventRootLayout from "./pages/EventsRoot";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import NewsletterPage from "./pages/Newsletter";
import AuthenticatePage from "./pages/Authentication";

import { authAction } from "./pages/actions/authAction";
import { deleteEventDetail } from "./pages/actions/deleteEventDetailAction";
import eventFormAction from "./pages/actions/eventFormAction";
import newsletterAction from "./pages/actions/newsletterAction";
import logoutAction from "./pages/actions/Logout";

import { eventsLoader } from "./pages/loaders/eventsLoader";
import { eventDetailLoader } from "./pages/loaders/eventLoader";

const router = createBrowserRouter([
  {path: "/", element: <RootLayout />, errorElement: <ErrorPage />, id:"root",loader: tokenLoader, children:
    [
      {index: true, element: <Homepage />},
      {path: "events", element: <EventRootLayout />, children: [
        {index: true, element: <EventsPage />, loader: eventsLoader},
        {path:":eventId", id:"event-detail", loader: eventDetailLoader, children: [
          {index:true, element: <EventDetailPage />, action: deleteEventDetail},
          {path: "edit", element: <EditEventPage />, action: eventFormAction }
        ]},
        {path: "new", element: <NewEventPage />, action: eventFormAction},
      ]},
      {path: "newsletter",element: <NewsletterPage />,action: newsletterAction},
      {path: "auth", element: <AuthenticatePage />, action: authAction},
      {path: "logout", action: logoutAction}
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
