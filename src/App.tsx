
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
import { useEffect } from "react";

// Function to apply the saved palette on app initialization
const AppContent = () => {
  useEffect(() => {
    // Get palette from localStorage or use default
    const savedPalette = localStorage.getItem("theme-palette") || "system";
    
    // Apply the palette class to the document
    document.documentElement.classList.forEach(className => {
      if (className.startsWith('palette-')) {
        document.documentElement.classList.remove(className);
      }
    });
    
    // Add the palette class
    document.documentElement.classList.add(`palette-${savedPalette}`);
    
    // Force browser to recalculate styles
    document.body.style.visibility = 'hidden';
    setTimeout(() => {
      document.body.style.visibility = 'visible';
    }, 50);
  }, []);

  return (
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
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <AppContent />
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
