import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./tailwind.css";
import "./index.css";
import App from "./App.tsx";
import {router} from "./app/router.tsx";

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
