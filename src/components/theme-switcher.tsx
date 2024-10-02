/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import { useTheme } from "next-themes";
import { MoonFilledIcon, SunFilledIcon } from "@nextui-org/shared-icons";
import { Switch } from "@nextui-org/react";
import { useIsMounted } from "@/hooks/use-is-mounted";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();
  const isSelected = theme === "dark" && isMounted;
  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Switch
      classNames={{
        wrapper: "shadow-sm",
        startContent: "text-white",
      }}
      endContent={<MoonFilledIcon />}
      isSelected={isSelected}
      size="sm"
      startContent={<SunFilledIcon />}
      onChange={onChange}
    />
  );
}