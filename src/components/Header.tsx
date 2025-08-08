import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, Globe } from "lucide-react";
import mehsanaLogo from "@/assets/mehsana-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "गृहपृष्ठ", href: "#home" },
    { label: "महानगरपालिका के बारे में", href: "#about" },
    { label: "ऑनलाइन सेवाएं", href: "#services" },
    { label: "नागरिक सेवाएं", href: "#citizen-services" },
    { label: "विभाग", href: "#departments" },
    { label: "परियोजनाएं", href: "#projects" },
    { label: "संपर्क", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-government-blue text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>हेल्पलाइन: +91-2762-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>commissioner@mmc.org.in</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-government-blue hover:bg-white">
                English
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-government-blue hover:bg-white">
                हिंदी
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-government-blue hover:bg-white">
                ગુજરાતી
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <img 
              src={mehsanaLogo} 
              alt="Mehsana Municipal Corporation Logo" 
              className="h-16 w-16"
            />
            <div>
              <h1 className="text-2xl font-bold text-government-blue">
                मेहसाणा महानगरपालिका
              </h1>
              <p className="text-sm text-muted-foreground">
                Mehsana Municipal Corporation
              </p>
              <p className="text-xs text-muted-foreground">
                स्वच्छ, हरित, डिजिटल रूप से जुड़ा मेहसाणा
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="text-government-blue hover:bg-government-light-blue"
                asChild
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-2 pt-4">
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="justify-start text-government-blue hover:bg-government-light-blue"
                  asChild
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <a href={item.href}>{item.label}</a>
                </Button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;