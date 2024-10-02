"use client";
import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import {
  FaBlog,
  FaChevronDown,
  FaHome,
  FaRProject,
  FaToolbox,
} from "react-icons/fa";
import { FaServicestack, FaUpwork } from "react-icons/fa6";
import { data } from "@/data/resume";
import React from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const icons = {
    home: <FaHome className="text-default size-20" />,
    services: (
      <FaServicestack className="text-warning" fill="currentColor" size={30} />
    ),
    blog: <FaBlog className="text-success" fill="currentColor" size={30} />,
    about: {
      chevron: <FaChevronDown fill="currentColor" size={15} />,
      project: <FaRProject fill="currentColor" size={30} />,
      work: <FaUpwork fill="currentColor" size={30} />,
      skills: <FaToolbox fill="currentColor" size={30} />,
    },
  };

  const menuItems = [
    "Home",
    "Services",
    "Blog",
    "Contact",
    "Projects",
    "Work",
    "Skills",
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
        <NavbarItem isActive={pathname === "/"} key="home">
          <Link
            color="foreground"
            href="/"
            className={`relative inline-block focus:outline-none ${
              pathname === "/"
                ? "before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-teal-400"
                : ""
            }
              `}
          >
            Home
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
                endContent={icons.about.chevron}
              >
                About
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label=""
            className="w-[200px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              href="/#projects"
              key="proj"
              description="Check out my latest work"
            >
              Project
            </DropdownItem>
            <DropdownItem
              href="/#work"
              key="work"
              description="Past work experience"
            >
              Work Experience
            </DropdownItem>
            <DropdownItem
              href="/#skills"
              key="skill"
              description="My technical skills"
            >
              Skills
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive={pathname === "/blog"} key="blog">
          <Link
            color="foreground"
            href="/blog"
            className={`relative inline-block focus:outline-none ${
              pathname === "/blog"
                ? "before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-teal-400"
                : ""
            }
              `}
          >
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/services"} key="services">
          <Link
            color="foreground"
            href="/services"
            className={`relative inline-block focus:outline-none ${
              pathname === "/services"
                ? "before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-teal-400"
                : ""
            }
              `}
          >
            Services
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/#contact">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
