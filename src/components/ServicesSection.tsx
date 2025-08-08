import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CreditCard,
  FileText,
  Building2,
  Users,
  Droplets,
  Lightbulb,
  Phone,
  Shield,
  Heart,
  Truck,
  TreePine,
  GraduationCap,
  Scale,
  Calculator,
  Search,
  Megaphone
} from "lucide-react";

const ServicesSection = () => {
  const onlineServices = [
    {
      icon: CreditCard,
      title: "प्रॉपर्टी टैक्स भुगतान",
      description: "ऑनलाइन प्रॉपर्टी टैक्स भुगतान और नई कनेक्शन",
      status: "उपलब्ध",
      category: "वित्त"
    },
    {
      icon: Droplets,
      title: "पानी टैक्स भुगतान",
      description: "पानी टैक्स भुगतान और नए कनेक्शन के लिए आवेदन",
      status: "उपलब्ध",
      category: "जल आपूर्ति"
    },
    {
      icon: FileText,
      title: "जन्म/मृत्यु प्रमाणपत्र",
      description: "जन्म और मृत्यु प्रमाणपत्र के लिए ऑनलाइन आवेदन",
      status: "उपलब्ध",
      category: "प्रमाणपत्र"
    },
    {
      icon: Building2,
      title: "बिल्डिंग प्लान अप्रूवल",
      description: "निर्माण योजना की स्वीकृति के लिए आवेदन",
      status: "उपलब्ध",
      category: "नगर नियोजन"
    },
    {
      icon: Users,
      title: "दुकान एवं स्थापना पंजीकरण",
      description: "व्यापारिक प्रतिष्ठानों का पंजीकरण",
      status: "शीघ्र",
      category: "व्यापार"
    },
    {
      icon: Heart,
      title: "विवाह पंजीकरण",
      description: "विवाह प्रमाणपत्र के लिए ऑनलाइन आवेदन",
      status: "शीघ्र",
      category: "प्रमाणपत्र"
    },
    {
      icon: Search,
      title: "RTI आवेदन",
      description: "सूचना का अधिकार आवेदन और ट्रैकिंग",
      status: "उपलब्ध",
      category: "पारदर्शिता"
    },
    {
      icon: Shield,
      title: "फायर सेफ्टी सर्टिफिकेट",
      description: "अग्नि सुरक्षा प्रमाणपत्र के लिए आवेदन",
      status: "शीघ्र",
      category: "सुरक्षा"
    }
  ];

  const departments = [
    {
      icon: Building2,
      title: "नगर नियोजन एवं भवन अनुमति",
      description: "शहरी नियोजन और निर्माण अनुमति सेवाएं"
    },
    {
      icon: Heart,
      title: "स्वास्थ्य विभाग",
      description: "सार्वजनिक स्वास्थ्य सेवाएं और स्वच्छता"
    },
    {
      icon: Shield,
      title: "अग्निशमन और आपातकालीन सेवाएं",
      description: "अग्नि सुरक्षा और आपातकालीन प्रतिक्रिया"
    },
    {
      icon: Truck,
      title: "ठोस अपशिष्ट प्रबंधन",
      description: "कचरा संग्रह और निस्तारण सेवाएं"
    },
    {
      icon: Droplets,
      title: "जल आपूर्ति",
      description: "पानी की आपूर्ति और वितरण सेवाएं"
    },
    {
      icon: Lightbulb,
      title: "सड़क प्रकाश",
      description: "सड़क प्रकाश व्यवस्था और रखरखाव"
    },
    {
      icon: TreePine,
      title: "उद्यान एवं पार्क",
      description: "हरित क्षेत्र विकास और रखरखाव"
    },
    {
      icon: GraduationCap,
      title: "शिक्षा विभाग",
      description: "नगरपालिका स्कूल और शिक्षा सेवाएं"
    },
    {
      icon: Calculator,
      title: "संपत्ति कर विभाग",
      description: "कर निर्धारण और संग्रह सेवाएं"
    },
    {
      icon: Scale,
      title: "कानूनी विभाग",
      description: "कानूनी सलाह और मुकदमा प्रबंधन"
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-government-blue mb-4">
            ऑनलाइन सेवाएं
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            डिजिटल इंडिया के तहत नागरिकों को सुविधाजनक और पारदर्शी सेवाएं प्रदान करना
          </p>
        </div>

        {/* Online Services Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-government-blue mb-8">
            मुख्य ऑनलाइन सेवाएं
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onlineServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="bg-government-light-blue p-3 rounded-full group-hover:bg-government-blue transition-colors">
                      <service.icon className="h-6 w-6 text-government-blue group-hover:text-white" />
                    </div>
                    <span 
                      className={`text-xs px-2 py-1 rounded-full ${
                        service.status === 'उपलब्ध' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {service.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-government-blue mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {service.description}
                  </p>
                  <span className="text-xs text-government-orange font-medium">
                    {service.category}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="hero" size="lg">
              सभी ऑनलाइन सेवाएं देखें
            </Button>
          </div>
        </div>

        {/* Citizen Services Banner */}
        <Card className="bg-gradient-to-r from-government-orange to-government-orange/80 text-white mb-16">
          <CardContent className="p-8 text-center">
            <Phone className="h-16 w-16 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-4">
              नागरिक सहायता हेल्पलाइन
            </h3>
            <p className="text-lg mb-6">
              सभी नागरिक सेवाओं के लिए हमारी 24/7 हेल्पलाइन पर संपर्क करें
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-government-orange">
                📞 +91-2762-XXXXXX
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-government-orange">
                📧 help@mmc.org.in
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Departments */}
        <div>
          <h3 className="text-2xl font-bold text-government-blue mb-8 text-center">
            विभाग और सेवाएं
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-government-light-blue p-3 rounded-full flex-shrink-0">
                      <dept.icon className="h-6 w-6 text-government-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-government-blue mb-2">
                        {dept.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {dept.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-government-light-blue">
            <CardContent className="p-8">
              <Megaphone className="h-12 w-12 text-government-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-government-blue mb-4">
                नई सेवाओं की घोषणा
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                हम निरंतर नई डिजिटल सेवाएं जोड़ रहे हैं। अपडेट के लिए जुड़े रहें।
              </p>
              <Button variant="default" size="lg">
                न्यूज़लेटर सब्सक्राइब करें
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;