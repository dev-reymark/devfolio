"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { Dropdown, Button, Label } from "@heroui/react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Dropdown>
            <Button variant="outline" isIconOnly className="h-8 w-8 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100" aria-label="Toggle theme">
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Dropdown.Popover>
                <Dropdown.Menu onAction={(key) => setTheme(key as string)}>
                    <Dropdown.Item id="light" textValue="Light">
                        <div className="flex items-center gap-2">
                            <Sun className="h-4 w-4" />
                            <Label>Light</Label>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item id="dark" textValue="Dark">
                        <div className="flex items-center gap-2">
                            <Moon className="h-4 w-4" />
                            <Label>Dark</Label>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item id="system" textValue="System">
                        <div className="flex items-center gap-2">
                            <Monitor className="h-4 w-4" />
                            <Label>System</Label>
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}