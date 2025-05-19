
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
    const currentPalette = localStorage.getItem("theme-palette") || "system";
    if (currentPalette !== "system") {
      document.documentElement.classList.forEach(className => {
        if (className.startsWith('palette-')) {
          document.documentElement.classList.remove(className);
        }
      });
      document.documentElement.classList.add(`palette-${currentPalette}`);
    }
  }, [setTheme]);

  if (!mounted) {
    return null;
  }

  return <ThemeSelector />;
};

export default ThemeToggle;
