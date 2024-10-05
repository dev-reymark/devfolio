"use client";

import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Listbox,
  ListboxItem,
  ListboxSection,
  cn,
} from "@nextui-org/react";
import { FaBlog, FaHome, FaRProject, FaToolbox } from "react-icons/fa";
import { FaServicestack, FaUpwork } from "react-icons/fa6";
import { data } from "@/data/resume";
import React from "react";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./theme-switcher";
import { MdOutlineContactPage } from "react-icons/md";

export const IconWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => (
  <div
    className={cn(
      className,
      "flex items-center rounded-small justify-center w-7 h-7 p-1"
    )}
  >
    {children}
  </div>
);

export const iconClasses =
  "text-xl text-default-500 pointer-events-none flex-shrink-0";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const icons = {
    contact: <MdOutlineContactPage className="text-primary/50" size={24} />,
    home: <FaHome className="text-primary size-20" />,
    services: <FaServicestack className="text-warning" size={30} />,
    blog: <FaBlog className="text-success" size={30} />,
    about: {
      project: <FaRProject className="text-secondary" size={30} />,
      work: <FaUpwork className="text-danger" size={30} />,
      skills: <FaToolbox className="text-primary" size={30} />,
    },
  };

  const menuItems = [
    { name: "Home", href: "/", desc: "Get to know me", icon: icons.home },
    {
      name: "Services",
      href: "/services",
      desc: "What I do?",
      icon: icons.services,
    },
    { name: "Blog", href: "/blog", desc: "My thoughts", icon: icons.blog },
    {
      name: "Contact",
      href: "/#contact",
      desc: "Get in touch",
      icon: icons.contact,
    },
    {
      name: "Projects",
      href: "/#projects",
      desc: "My latest projects",
      icon: icons.about.project,
    },
    {
      name: "Work",
      href: "/#work",
      desc: "My past experience",
      icon: icons.about.work,
    },
    {
      name: "Skills",
      href: "/#skills",
      desc: "My skills",
      icon: icons.about.skills,
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="md">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand className="gap-2">
          <Image
            src={data.avatar.url}
            alt={data.avatar.alt}
            className="w-8 h-8 rounded-full"
          />
          <p className="font-bold text-inherit">{data.initial}</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.slice(0, 3).map((item) => (
          <NavbarItem key={item.name}>
            <Link
              color="foreground"
              href={item.href}
              className={`relative inline-block focus:outline-none ${
                pathname === item.href
                  ? "before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-primary"
                  : ""
              }
                `}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button
            size="sm"
            as={Link}
            color="primary"
            variant="shadow"
            href="/#contact"
          >
            Let&apos;s Chat
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem isActive>
          <Listbox aria-label="Listbox menu with sections">
            <ListboxSection title="Main" showDivider>
              {menuItems.slice(0, 4).map((item, index) => (
                <ListboxItem
                  key={`${item.name}-${index}`}
                  description={item.desc}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={pathname === item.href ? "text-primary" : ""}
                  startContent={
                    <IconWrapper className="bg-primary/10 text-primary">
                      {item.icon}
                    </IconWrapper>
                  }
                >
                  {item.name}
                </ListboxItem>
              ))}
            </ListboxSection>
            <ListboxSection title="About">
              {menuItems.slice(4).map((item, index) => (
                <ListboxItem
                  key={`${item.name}-${index}`}
                  description={item.desc}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={pathname === item.href ? "text-primary" : ""}
                  startContent={
                    <IconWrapper className="bg-primary/10 text-primary">
                      {item.icon}
                    </IconWrapper>
                  }
                >
                  {item.name}
                </ListboxItem>
              ))}
            </ListboxSection>
          </Listbox>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
