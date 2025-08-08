import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Users, 
  MapPin, 
  Calendar,
  FileText,
  CreditCard,
  Phone,
  AlertCircle
} from "lucide-react";
import mehsanaHero from "@/assets/mehsana-hero.jpg";

const HeroSection = () => {
  const quickServices = [
    {
      icon: CreditCard,
      title: "प्रॉपर्टी टैक्स भुगतान",
      description: "ऑनलाइन प्रॉपर्टी टैक्स भुगतान",
      href: "#property-tax"
    },
    {
      icon: FileText,
      title: "जन्म/मृत्यु प्रमाणपत्र",
      description: "जन्म और मृत्यु प्रमाणपत्र सेवाएं",
      href: "#certificates"
    },
    {
      icon: Building2,
      title: "बिल्डिंग परमिशन",
      description: "निर्माण अनुमति आवेदन",
      href: "#building-permission"
    },
    {
      icon: Phone,
      title: "शिकायत पोर्टल",
      description: "ऑनलाइन शिकायत दर्ज करें",
      href: "#complaints"
    }
  ];

  const statsData = [
    { label: "जनसंख्या", value: "3.5+ लाख", icon: Users },
    { label: "क्षेत्रफल", value: "80+ वर्ग किमी", icon: MapPin },
    { label: "वार्ड", value: "13", icon: Building2 },
    { label: "स्थापना", value: "1 जन 2025", icon: Calendar }
  ];

  return (
    <section id="home" className="relative">
      {/* Hero Slider */}
      <div className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={mehsanaHero} 
            alt="Mehsana Municipal Corporation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-government-blue/85 via-government-blue/70 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="mb-4">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                1 जनवरी 2025 से महानगरपालिका
              </span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              मेहसाणा 
              <span className="block text-government-orange">महानगरपालिका</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-95">
              स्वच्छ, हरित, डिजिटल रूप से जुड़ा मेहसाणा के साथ समावेशी विकास। 
              पारदर्शी शासन, आधुनिक अवसंरचना और कुशल नागरिक सेवाएं।
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4 font-semibold shadow-2xl">
                ऑनलाइन सेवाएं
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-government-blue font-semibold">
                महानगरपालिका के बारे में
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>24/7 ऑनलाइन सेवाएं</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>आपातकाल: 100 | 101 | 108</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
          <div className="animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Quick Services */}
      <div className="container mx-auto px-4 -mt-24 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-government-blue mb-4">तुरंत सेवाएं</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            डिजिटल मेहसाणा की सुविधा से घर बैठे सभी नागरिक सेवाओं का लाभ उठाएं
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickServices.map((service, index) => (
            <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group border-0 overflow-hidden">
              <CardContent className="p-6 text-center relative">
                <div className="bg-gradient-to-br from-government-light-blue to-government-blue/20 p-4 rounded-2xl w-20 h-20 mx-auto mb-4 group-hover:from-government-blue group-hover:to-government-orange transition-all duration-300 shadow-lg">
                  <service.icon className="h-12 w-12 text-government-blue group-hover:text-white mx-auto transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-government-blue group-hover:text-government-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-government-blue to-government-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statsData.map((stat, index) => (
            <Card key={index} className="bg-gradient-to-br from-government-orange to-government-orange/80 text-white">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Notice */}
        <Card className="bg-red-50 border-red-200 mb-16">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-2">
                  आपातकालीन सेवाएं
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>आग ब्रिगेड:</strong> 101
                  </div>
                  <div>
                    <strong>पुलिस:</strong> 100
                  </div>
                  <div>
                    <strong>एम्बुलेंस:</strong> 108
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;