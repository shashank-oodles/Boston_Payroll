import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./tailwind.css";
import "./index.css";
import { router } from "./app/router.tsx";
import { store } from './app/redux/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
