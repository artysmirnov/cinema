import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.scss"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./error-page.jsx"
import Home from "./pages/Home/Home.jsx"
import Catalog from "./pages/Catalog/Catalog.jsx"
import My from "./pages/My/My.jsx"
import Paid from "./pages/Paid/Paid.jsx"
import Register from "./pages/Register/Register.jsx"
import Login from "./pages/Login/Login.jsx"
import { Provider } from "react-redux"
import { store } from "./Store/store.js"
import Account from "./pages/Account/Account.jsx"
import News from "./pages/News/News.jsx"
import FilmPage from "./pages/FilmPage/FilmPage.jsx"

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
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/account",
				element: <Account />,
			},
			{
				path: "/news",
				element: <News />,
			},
			{
				path: "/movie/:id",
				element: <FilmPage />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)
