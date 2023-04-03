import { SunIcon } from "@heroicons/react/24/solid";
import { IconButton, Text } from "@latinstation/ui";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleTheme = () => setTheme(currentTheme === "light" ? "dark" : "light");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <IconButton icon={<SunIcon className="w-7 h-7 text-yellow_warning" />} onClick={handleTheme} />;
};

export default ThemeButton;
