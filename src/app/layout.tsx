
// src/app/layout.tsx
"use client";

import "./globals.css";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "@/core/Store";


export default function RootLayout({ children }: { children: React.ReactNode }) {
 
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <html lang="en">
      <body>
       
        <ReduxProvider store={store}>
        
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
