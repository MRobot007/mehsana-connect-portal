import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Smartphone, 
  TreePine, 
  Droplets, 
  Zap,
  ExternalLink,
  Calendar,
  Users
} from "lucide-react";

const TrendingSection = () => {
  const trendingServices = [
    {
      title: "SMC Citizen Connect App",
      description: "मोबाइल ऐप डाउनलोड करें - सभी सेवाएं एक जगह",
      icon: Smartphone,
      status: "NEW",
      color: "from-blue-500 to-purple-600",
      link: "#app-download"
    },
    {
      title: "Tree Plantation Drive 2025",
      description: "वृक्षारोपण में योगदान दें - हरित मेहसाणा बनाएं",
      icon: TreePine,
      status: "ACTIVE",
      color: "from-green-500 to-emerald-600",
      link: "#tree-plantation"
    },
    {
      title: "Water Quality Testing",
      description: "पानी की गुणवत्ता रिपोर्ट ऑनलाइन देखें",
      icon: Droplets,
      status: "LIVE",
      color: "from-cyan-500 to-blue-600",
      link: "#water-quality"
    },
    {
      title: "Digital Payment Portal",
      description: "सभी कर और शुल्क ऑनलाइन भुगतान",
      icon: Zap,
      status: "POPULAR",
      color: "from-orange-500 to-red-600",
      link: "#payments"
    }
  ];

  const announcements = [
    {
      title: "मेहसाणा को मिला महानगरपालिका का दर्जा",
      date: "1 जनवरी 2025",
      type: "महत्वपूर्ण",
      description: "9 ग्राम पंचायतों के साथ विलय"
    },
    {
      title: "नई ऑनलाइन सेवाएं लॉन्च",
      date: "15 जनवरी 2025",
      type: "सेवा",
      description: "24/7 डिजिटल प्लेटफॉर्म"
    },
    {
      title: "स्मार्ट सिटी प्रोजेक्ट",
      date: "आगामी",
      type: "विकास",
      description: "आधुनिक अवसंरचना योजना"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Trending Services */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <TrendingUp className="h-6 w-6 text-government-orange mr-3" />
            <h2 className="text-3xl font-bold text-government-blue">ट्रेंडिंग सेवाएं</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${service.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        {service.status}
                      </Badge>
                    </div>
                    <service.icon className="h-12 w-12 mb-4 opacity-90" />
                    <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/10 rounded-full"></div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-government-blue group-hover:text-white transition-colors">
                      जानकारी देखें
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Latest Announcements */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-government-blue">नवीनतम घोषणाएं</h2>
            <Button variant="outline" className="text-government-blue border-government-blue">
              सभी देखें
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {announcements.map((announcement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge 
                      variant="secondary" 
                      className={`
                        ${announcement.type === 'महत्वपूर्ण' ? 'bg-red-100 text-red-700' : ''}
                        ${announcement.type === 'सेवा' ? 'bg-blue-100 text-blue-700' : ''}
                        ${announcement.type === 'विकास' ? 'bg-green-100 text-green-700' : ''}
                      `}
                    >
                      {announcement.type}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {announcement.date}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 text-government-blue">
                    {announcement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {announcement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;