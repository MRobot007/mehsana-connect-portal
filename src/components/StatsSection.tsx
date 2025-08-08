import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  MapPin, 
  Building2, 
  Calendar,
  TrendingUp,
  CheckCircle,
  Clock,
  Award
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const StatsSection = () => {
  const { t } = useLanguage();
  
  const statsData = [
    { 
      label: t('population'), 
      value: t('populationValue'), 
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      description: t('totalResidents')
    },
    { 
      label: t('area'), 
      value: t('areaValue'), 
      icon: MapPin,
      color: "from-green-500 to-emerald-500",
      description: t('totalArea')
    },
    { 
      label: t('wards'), 
      value: t('wardsValue'), 
      icon: Building2,
      color: "from-purple-500 to-pink-500",
      description: t('administrativeWards')
    },
    { 
      label: t('established'), 
      value: t('establishedValue'), 
      icon: Calendar,
      color: "from-orange-500 to-red-500",
      description: t('corporationStatus')
    }
  ];

  const achievementStats = [
    {
      title: "ऑनलाइन सेवाएं",
      value: "15+",
      icon: TrendingUp,
      description: "डिजिटल प्लेटफॉर्म पर"
    },
    {
      title: "समाधान दर",
      value: "98%",
      icon: CheckCircle,
      description: "शिकायतों का समाधान"
    },
    {
      title: "औसत समय",
      value: "24 घंटे",
      icon: Clock,
      description: "सेवा प्रदान करने में"
    },
    {
      title: "पुरस्कार",
      value: "5+",
      icon: Award,
      description: "डिजिटल गवर्नेंस में"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-government-blue via-government-blue/95 to-government-blue/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-government-orange rounded-full translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Statistics */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">मेहसाणा महानगरपालिका</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            आंकड़ों में देखें हमारी प्रगति और विकास की कहानी
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statsData.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center text-white">
                <div className={`bg-gradient-to-br ${stat.color} p-4 rounded-2xl w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 mx-auto text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-75">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Statistics */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">सेवा उत्कृष्टता</h3>
            <p className="opacity-90">हमारी प्रतिबद्धता के परिणाम</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievementStats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-white/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-government-orange transition-colors duration-300">
                  <stat.icon className="h-8 w-8 mx-auto" />
                </div>
                <div className="text-2xl font-bold text-government-orange mb-1">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.title}</div>
                <div className="text-sm opacity-75">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;