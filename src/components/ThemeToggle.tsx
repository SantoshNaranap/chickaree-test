
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";
import { toast } from "@/hooks/use-toast";

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
      duration: 1500,
    });
  };

  return (
    <Toggle
      aria-label="Toggle theme"
      className="mr-2 p-2 border-gray-700"
      pressed={theme === "light"}
      onPressedChange={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-gray-300" />
      ) : (
        <Moon className="h-4 w-4 text-gray-600" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
