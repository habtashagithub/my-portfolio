import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About Me", href: "#about" },
  { name: "My Skills", href: "#skills" },
  { name: "My Projects", href: "#projects" },
  { name: "Contact Me", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow"
          : "py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">

        {/* Logo */}
        <a href="#hero" className="text-xl font-bold text-primary">
          haSha Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">

          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}

          {/* Theme Toggle in middle */}
          <ThemeToggle />

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background/95 backdrop-blur flex flex-col items-center justify-center space-y-8 text-xl">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
