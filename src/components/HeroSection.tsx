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
      {/* Hero Background */}
      <div 
        className="relative h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mehsanaHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-government-blue/90 to-government-blue/70"></div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              मेहसाणा महानगरपालिका में आपका स्वागत है
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              स्वच्छ, हरित, डिजिटल रूप से जुड़ा मेहसाणा के साथ समावेशी विकास। 
              पारदर्शी शासन, आधुनिक अवसंरचना और कुशल नागरिक सेवाएं प्रदान करना।
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                ऑनलाइन सेवाएं
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-government-blue">
                महानगरपालिका के बारे में
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Services */}
      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickServices.map((service, index) => (
            <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="bg-government-light-blue p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-government-blue transition-colors">
                  <service.icon className="h-8 w-8 text-government-blue group-hover:text-white mx-auto" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-government-blue">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
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