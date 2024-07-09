import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const root = document.getElementById("root")
ReactDOM.createRoot(root).render(
    <QueryClientProvider client={new QueryClient}>
        <App />
    </QueryClientProvider>
)
