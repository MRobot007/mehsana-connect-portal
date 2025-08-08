import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ExternalLink
} from "lucide-react";
import mehsanaLogo from "@/assets/mehsana-logo.png";

const Footer = () => {
  const quickLinks = [
    { label: "महानगरपालिका के बारे में", href: "#about" },
    { label: "ऑनलाइन सेवाएं", href: "#services" },
    { label: "नागरिक सेवाएं", href: "#citizen-services" },
    { label: "विभाग", href: "#departments" },
    { label: "परियोजनाएं", href: "#projects" },
    { label: "संपर्क", href: "#contact" }
  ];

  const citizenServices = [
    { label: "प्रॉपर्टी टैक्स भुगतान", href: "#property-tax" },
    { label: "जन्म/मृत्यु प्रमाणपत्र", href: "#certificates" },
    { label: "बिल्डिंग परमिशन", href: "#building-permission" },
    { label: "RTI आवेदन", href: "#rti" },
    { label: "शिकायत पोर्टल", href: "#complaints" },
    { label: "ट्रेड लाइसेंस", href: "#trade-license" }
  ];

  const importantLinks = [
    { label: "Gujarat Government", href: "https://gujaratindia.gov.in", external: true },
    { label: "Digital India", href: "https://digitalindia.gov.in", external: true },
    { label: "Swachh Bharat Mission", href: "https://swachhbharatmission.gov.in", external: true },
    { label: "PM Awas Yojana", href: "#", external: true },
    { label: "AMRUT Scheme", href: "#", external: true },
    { label: "Smart Cities Mission", href: "#", external: true }
  ];

  return (
    <footer className="bg-government-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={mehsanaLogo} 
                alt="Mehsana Municipal Corporation" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-lg font-bold">मेहसाणा महानगरपालिका</h3>
                <p className="text-sm opacity-90">Mehsana Municipal Corporation</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              स्वच्छ, हरित, डिजिटल रूप से जुड़ा मेहसाणा के साथ समावेशी विकास। 
              पारदर्शी शासन और कुशल नागरिक सेवाएं।
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">त्वरित लिंक</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 transition-opacity hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Citizen Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">नागरिक सेवाएं</h4>
            <ul className="space-y-2">
              {citizenServices.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-sm opacity-90 hover:opacity-100 transition-opacity hover:underline"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">संपर्क जानकारी</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <p>मेहसाणा महानगरपालिका कार्यालय</p>
                  <p>मेहसाणा, गुजरात - 384001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="text-sm opacity-90">+91-2762-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span className="text-sm opacity-90">commissioner@mmc.org.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 mt-1" />
                <div className="text-sm opacity-90">
                  <p>सोमवार - शुक्रवार: 10:00 AM - 6:00 PM</p>
                  <p>शनिवार: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Government Links */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4">महत्वपूर्ण लिंक</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {importantLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : ""}
                className="text-sm opacity-90 hover:opacity-100 transition-opacity hover:underline flex items-center"
              >
                {link.label}
                {link.external && <ExternalLink className="h-3 w-3 ml-1" />}
              </a>
            ))}
          </div>
        </div>

        {/* Emergency Numbers */}
        <div className="bg-red-600 rounded-lg p-4 mb-8">
          <h4 className="text-lg font-semibold mb-3">आपातकालीन नंबर</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <strong>आग ब्रिगेड:</strong> 101
            </div>
            <div>
              <strong>पुलिस:</strong> 100
            </div>
            <div>
              <strong>एम्बुलेंस:</strong> 108
            </div>
            <div>
              <strong>आपदा हेल्पलाइन:</strong> 1070
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-90">
              © 2025 मेहसाणा महानगरपालिका। सभी अधिकार सुरक्षित।
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="opacity-90 hover:opacity-100 transition-opacity hover:underline">
                गोपनीयता नीति
              </a>
              <a href="#terms" className="opacity-90 hover:opacity-100 transition-opacity hover:underline">
                उपयोग की शर्तें
              </a>
              <a href="#accessibility" className="opacity-90 hover:opacity-100 transition-opacity hover:underline">
                पहुंच नीति
              </a>
              <a href="#sitemap" className="opacity-90 hover:opacity-100 transition-opacity hover:underline">
                साइट मैप
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;