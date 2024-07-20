import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClientProvider } from "./providers/QueryClientProvider.tsx";
import { RouterProvider } from "./providers/RouterProvider.tsx";
import { AudioProvider } from "./providers/AudioProvider.tsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AudioProvider>
      <QueryClientProvider>
        <RouterProvider />
      </QueryClientProvider>
    </AudioProvider>
    <Toaster />
  </React.StrictMode>
);
