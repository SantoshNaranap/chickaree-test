
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
    toast({
      title: `${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} theme activated`,
      description: `Application appearance updated to ${newTheme} mode`,
      duration: 1500,
    });
  };

  return (
    <div className="flex items-center">
      <ThemeSelector />
      <Toggle
        aria-label="Toggle theme"
        className="p-2 border-border bg-background hover:bg-secondary transition-colors"
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
