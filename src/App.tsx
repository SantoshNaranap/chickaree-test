
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Bots from "./pages/Bots";
import Lab from "./pages/Lab";
import Sources from "./pages/Sources";
import AddSource from "./pages/AddSource";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/lab" replace />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/bots" element={<Bots />} />
            <Route path="/sources" element={<Sources />} />
            <Route path="/sources/add" element={<AddSource />} />
            <Route path="/subscriptions" element={<Index />} />
            <Route path="/settings" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
