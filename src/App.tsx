
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
import Settings from "./pages/Settings";
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
    
    // Force browser to recalculate styles to ensure theme is applied correctly
    document.body.style.visibility = 'hidden';
    setTimeout(() => {
      document.body.style.visibility = 'visible';
    }, 50);
    
    // Add event listener for storage changes to sync palette across tabs
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "theme-palette") {
        const newPalette = event.newValue || "system";
        
        document.documentElement.classList.forEach(className => {
          if (className.startsWith('palette-')) {
            document.documentElement.classList.remove(className);
          }
        });
        
        document.documentElement.classList.add(`palette-${newPalette}`);
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
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
          <Route path="/settings/*" element={<Settings />} />
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
