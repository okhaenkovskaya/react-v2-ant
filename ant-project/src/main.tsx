import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Provider} from "react-redux";

import PublicLayout from "./layouts/";
import {store} from "./store"

import { HomePage, AboutPage,ContactPage, ErrorPage, ProductPage, CartPage } from "./pages"

const router = createBrowserRouter([
    {
        path: "",
        element: <PublicLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },
            {
                path: "/product/:id",
                element: <ProductPage />,
            },
            {
                path: "/cart",
                element: <CartPage />,
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>,
)
