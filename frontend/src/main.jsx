import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.scss"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./error-page.jsx"
import Home from "./pages/Home.jsx"
import Catalog from "./pages/Catalog.jsx"
import My from "./pages/My.jsx"
import Paid from "./pages/Paid.jsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/catalog",
				element: <Catalog />,
			},
			{
				path: "/my",
				element: <My />,
			},
			{
				path: "/paid",
				element: <Paid />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
