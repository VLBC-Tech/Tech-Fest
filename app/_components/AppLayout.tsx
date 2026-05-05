"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      <Toaster
        position="top-right"
        gutter={10}
        toastOptions={{
          duration: 3000,
          style: {
            padding: "0.5rem",
            fontSize: "0.8rem",
            boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.3)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default AppLayout;
