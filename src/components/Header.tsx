import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import mehsanaLogo from "@/assets/mehsana-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navigationItems = [
    { label: t('home'), href: "#home" },
    { label: t('about'), href: "#about" },
    { label: t('onlineServices'), href: "#services" },
    { label: t('citizenServices'), href: "#citizen-services" },
    { label: t('departments'), href: "#departments" },
    { label: t('projects'), href: "#projects" },
    { label: t('contact'), href: "#contact" },
  ];

  const handleLanguageChange = (lang: 'hi' | 'en' | 'gu') => {
    setLanguage(lang);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-government-blue text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{t('helpline')}: +91-2762-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>commissioner@mmc.org.in</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`text-white hover:text-government-blue hover:bg-white ${language === 'en' ? 'bg-white/20' : ''}`}
                onClick={() => handleLanguageChange('en')}
              >
                English
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className={`text-white hover:text-government-blue hover:bg-white ${language === 'hi' ? 'bg-white/20' : ''}`}
                onClick={() => handleLanguageChange('hi')}
              >
                हिंदी
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className={`text-white hover:text-government-blue hover:bg-white ${language === 'gu' ? 'bg-white/20' : ''}`}
                onClick={() => handleLanguageChange('gu')}
              >
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
                {t('corporationName')}
              </h1>
              <p className="text-sm text-muted-foreground">
                {t('corporationNameEng')}
              </p>
              <p className="text-xs text-muted-foreground">
                {t('tagline')}
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