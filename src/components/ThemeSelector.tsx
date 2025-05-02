import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";

// Define palettes with their properties
export const PALETTES = {
  // Dark Palettes
  midnight: {
    name: "Midnight Blue",
    type: "dark",
    description: "Deep navy tones with bright blue accents"
  },
  forest: {
    name: "Dark Forest",
    type: "dark",
    description: "Rich forest greens with mint highlights"
  },
  volcanic: {
    name: "Volcanic",
    type: "dark",
    description: "Deep purples with vibrant coral accent"
  },
  
  // Light Palettes  
  fresh: {
    name: "Fresh Air",
    type: "light",
    description: "Clean blues with navy text"
  },
  sand: {
    name: "Warm Sand",
    type: "light",
    description: "Warm cream and amber tones"
  },
  mint: {
    name: "Clean Mint",
    type: "light",
    description: "Crisp mint greens on white"
  },
  
  // Vibrant Palettes
  sunset: {
    name: "Sunset",
    type: "vibrant",
    description: "Warm peach and coral with indigo"
  },
  electric: {
    name: "Electric",
    type: "vibrant",
    description: "Bold purple, cyan and yellow"
  },
  
  // Monochromatic Palettes
  slate: {
    name: "Slate Gradient",
    type: "monochrome",
    description: "Various shades of slate blue"
  },
  teal: {
    name: "Teal Tones",
    type: "monochrome",
    description: "Graduated teal from dark to bright"
  },
  
  // Accessibility-Focused
  highContrast: {
    name: "High Contrast",
    type: "accessibility",
    description: "Maximum contrast for readability"
  },
  softContrast: {
    name: "Soft Contrast",
    type: "accessibility",
    description: "Easy-on-eyes contrast with blue accent"
  },
  
  // Default System
  system: {
    name: "System Default",
    type: "system",
    description: "Follows your system preference"
  }
};

const ThemeSelector = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [palette, setPalette] = useState("system");
  
  // After mounting, we can access the window object safely
  useEffect(() => {
    setMounted(true);
    
    // Get palette from localStorage or use default
    const savedPalette = localStorage.getItem("theme-palette") || "system";
    setPalette(savedPalette);
    
    // Apply the palette class to the document on mount
    applyPaletteClass(savedPalette);
    
    // Apply appropriate theme based on palette
    applyThemeBasedOnPalette(savedPalette);
  }, [setTheme]);
  
  const applyPaletteClass = (paletteKey: string) => {
    // Remove any existing palette classes
    document.documentElement.classList.forEach(className => {
      if (className.startsWith('palette-')) {
        document.documentElement.classList.remove(className);
      }
    });
    
    // Add the new palette class
    document.documentElement.classList.add(`palette-${paletteKey}`);
  };
  
  const applyThemeBasedOnPalette = (paletteKey: string) => {
    const paletteInfo = PALETTES[paletteKey as keyof typeof PALETTES];
    if (paletteInfo) {
      if (paletteKey === "system") {
        setTheme("system");
      } else if (paletteInfo.type === "dark" || paletteInfo.type === "monochrome") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  };
  
  if (!mounted) {
    return null;
  }
  
  const handlePaletteChange = (value: string) => {
    setPalette(value);
    localStorage.setItem("theme-palette", value);
    
    // Apply the palette class
    applyPaletteClass(value);
    
    // Set the appropriate theme (light/dark) based on palette type
    applyThemeBasedOnPalette(value);
    
    toast({
      title: `${PALETTES[value as keyof typeof PALETTES]?.name || "Theme"} applied`,
      description: "Color palette has been updated",
      duration: 1500,
    });
  };
  
  const getGroupedPalettes = () => {
    const groups = {
      dark: [] as [string, {name: string, type: string, description: string}][],
      light: [] as [string, {name: string, type: string, description: string}][],
      vibrant: [] as [string, {name: string, type: string, description: string}][],
      monochrome: [] as [string, {name: string, type: string, description: string}][],
      accessibility: [] as [string, {name: string, type: string, description: string}][],
      system: [] as [string, {name: string, type: string, description: string}][],
    };
    
    Object.entries(PALETTES).forEach(([key, value]) => {
      groups[value.type as keyof typeof groups].push([key, value]);
    });
    
    return groups;
  };
  
  const groups = getGroupedPalettes();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className="border-border bg-background hover:bg-secondary transition-colors"
        >
          <Palette className="h-4 w-4 text-foreground" />
          <span className="sr-only">Select color palette</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Color Palette</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuRadioGroup value={palette} onValueChange={handlePaletteChange}>
          {groups.system.length > 0 && (
            <>
              <DropdownMenuLabel className="text-xs text-muted-foreground font-normal mt-1">System</DropdownMenuLabel>
              {groups.system.map(([key, { name }]) => (
                <DropdownMenuRadioItem key={key} value={key} className="cursor-pointer">
                  {name}
                </DropdownMenuRadioItem>
              ))}
              <DropdownMenuSeparator />
            </>
          )}
          
          {groups.dark.length > 0 && (
            <>
              <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">Dark Palettes</DropdownMenuLabel>
              {groups.dark.map(([key, { name }]) => (
                <DropdownMenuRadioItem key={key} value={key} className="cursor-pointer">
                  {name}
                </DropdownMenuRadioItem>
              ))}
              <DropdownMenuSeparator />
            </>
          )}
          
          {groups.light.length > 0 && (
            <>
              <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">Light Palettes</DropdownMenuLabel>
              {groups.light.map(([key, { name }]) => (
                <DropdownMenuRadioItem key={key} value={key} className="cursor-pointer">
                  {name}
                </DropdownMenuRadioItem>
              ))}
              <DropdownMenuSeparator />
            </>
          )}
          
          {groups.vibrant.length > 0 && (
            <>
              <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">Vibrant Palettes</DropdownMenuLabel>
              {groups.vibrant.map(([key, { name }]) => (
                <DropdownMenuRadioItem key={key} value={key} className="cursor-pointer">
                  {name}
                </DropdownMenuRadioItem>
              ))}
              <DropdownMenuSeparator />
            </>
          )}
          
          {groups.monochrome.length > 0 && (
            <>
              <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">Monochromatic Palettes</DropdownMenuLabel>
              {groups.monochrome.map(([key, { name }]) => (
                <DropdownMenuRadioItem key={key} value={key} className="cursor-pointer">
                  {name}
                </DropdownMenuRadioItem>
              ))}
              <DropdownMenuSeparator />
            </>
          )}
          
          {groups.accessibility.length > 0 && (
            <>
              <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">Accessibility Focused</DropdownMenuLabel>
              {groups.accessibility.map(([key, { name }]) => (
                <DropdownMenuRadioItem key={key} value={key} className="cursor-pointer">
                  {name}
                </DropdownMenuRadioItem>
              ))}
            </>
          )}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSelector;
