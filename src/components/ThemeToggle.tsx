
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { toast } from "@/hooks/use-toast";
import ThemeSelector from "./ThemeSelector";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  // After mounting, we can access the window object safely
  useEffect(() => {
    setMounted(true);
    
    // Force dark mode on component mount
    setTheme("dark");
    
    // Preserve the current palette when setting dark theme
    const currentPalette = localStorage.getItem("theme-palette") || "volcanic";
    if (currentPalette !== "system") {
      document.documentElement.classList.forEach(className => {
        if (className.startsWith('palette-')) {
          document.documentElement.classList.remove(className);
        }
      });
      document.documentElement.classList.add(`palette-${currentPalette}`);
    }
    
    // Force dark class on document
    document.documentElement.classList.add('dark');
    
    // Show a toast message indicating dark mode is active
    toast({
      title: "Dark theme active",
      description: "The application is now in dark mode with the selected palette",
      duration: 1500,
    });
  }, [setTheme]);

  if (!mounted) {
    return null;
  }

  return <ThemeSelector />;
};

export default ThemeToggle;
