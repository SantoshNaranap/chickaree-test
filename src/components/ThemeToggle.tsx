
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";
import { toast } from "@/hooks/use-toast";
import ThemeSelector from "./ThemeSelector";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we can access the window object safely
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    
    // Preserve the current palette when toggling theme
    const currentPalette = localStorage.getItem("theme-palette") || "system";
    if (currentPalette !== "system") {
      document.documentElement.classList.forEach(className => {
        if (className.startsWith('palette-')) {
          document.documentElement.classList.remove(className);
        }
      });
      document.documentElement.classList.add(`palette-${currentPalette}`);
    }
    
    toast({
      title: `${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} theme activated`,
      description: `Application appearance updated to ${newTheme} mode`,
      duration: 1500,
    });
  };

  return (
    <div className="flex items-center gap-2">
      <ThemeSelector />
      <Toggle
        aria-label="Toggle theme"
        className="border-border bg-background hover:bg-secondary transition-colors"
        pressed={theme === "light"}
        onPressedChange={toggleTheme}
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4 text-foreground" />
        ) : (
          <Moon className="h-4 w-4 text-foreground" />
        )}
      </Toggle>
    </div>
  );
};

export default ThemeToggle;
