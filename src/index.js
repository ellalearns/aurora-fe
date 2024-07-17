import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root")
ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <QueryClientProvider client={new QueryClient}>
            <App />
        </QueryClientProvider>
    </BrowserRouter>
)
