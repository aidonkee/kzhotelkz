import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Главная" },
    { href: "#about", label: "О нас" },
    { href: "#rooms", label: "Номера" },
    { href: "#amenities", label: "Услуги" },
    { href: "#testimonials", label: "Отзывы" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass py-3 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <span className={`font-serif text-2xl font-semibold tracking-wide transition-colors duration-300 ${
            isScrolled ? "text-foreground" : "text-white"
          }`}>
            Кызыл Жар
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contact & CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+77172123456"
            className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            <Phone className="w-4 h-4" />
            +7 (7172) 12-34-56
          </a>
          <Button className="btn-luxury text-sm py-2 px-6">
            Забронировать
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-2xl p-6 animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="btn-luxury mt-4">
              Забронировать
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
