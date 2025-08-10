import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Bell, FileText, Megaphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const NewsSection = () => {
  const { t } = useLanguage();

  const news = [
    {
      id: 1,
      title: "मेहसाणा महानगरपालिका का शुभारंभ",
      description: "1 जनवरी 2025 को मेहसाणा औपचारिक रूप से महानगरपालिका बना। नागरिकों को बेहतर सेवाएं प्रदान करने का संकल्प।",
      date: "1 जनवरी 2025",
      category: "महत्वपूर्ण",
      badge: "नया",
      urgent: true
    },
    {
      id: 2,
      title: "ऑनलाइन सेवा पोर्टल लॉन्च",
      description: "नागरिकों की सुविधा के लिए डिजिटल सेवा पोर्टल का शुभारंभ। अब घर बैठे करें सभी काम।",
      date: "5 जनवरी 2025",
      category: "डिजिटल सेवा",
      badge: "लाइव"
    },
    {
      id: 3,
      title: "स्वच्छता अभियान की शुरुआत",
      description: "'स्वच्छ मेहसाणा, सुंदर मेहसाणा' अभियान के तहत शहर की साफ-सफाई में नागरिकों का सहयोग आमंत्रित।",
      date: "10 जनवरी 2025",
      category: "स्वच्छता",
      badge: "चालू"
    },
    {
      id: 4,
      title: "नई पार्षद सीटों की घोषणा",
      description: "13 वार्डों में 52 पार्षद सीटों के लिए चुनाव की तारीख जल्द घोषित होगी।",
      date: "15 जनवरी 2025",
      category: "चुनाव",
      badge: "आगामी"
    },
    {
      id: 5,
      title: "जल आपूर्ति सुधार योजना",
      description: "24x7 पानी की आपूर्ति के लिए नई पाइपलाइन और वाटर ट्रीटमेंट प्लांट का निर्माण शुरू।",
      date: "20 जनवरी 2025",
      category: "बुनियादी ढांचा",
      badge: "प्रगति में"
    },
    {
      id: 6,
      title: "LED स्ट्रीट लाइट प्रोजेक्ट",
      description: "ऊर्जा बचत के लिए पूरे शहर में पारंपरिक स्ट्रीट लाइट को LED लाइट से बदला जाएगा।",
      date: "25 जनवरी 2025",
      category: "ऊर्जा",
      badge: "अनुमोदित"
    }
  ];

  const announcements = [
    {
      title: "संपत्ति कर भुगतान की अंतिम तारीख",
      description: "वित्तीय वर्ष 2024-25 के लिए संपत्ति कर भुगतान की अंतिम तारीख 31 मार्च 2025 है।",
      type: "महत्वपूर्ण",
      urgent: true
    },
    {
      title: "ट्रेड लाइसेंस नवीनीकरण",
      description: "सभी व्यापारी अपने ट्रेड लाइसेंस का समय पर नवीनीकरण कराएं।",
      type: "सूचना",
      urgent: false
    },
    {
      title: "पार्किंग नियम संशोधन",
      description: "मुख्य बाजार क्षेत्र में नए पार्किंग नियम 1 फरवरी से प्रभावी होंगे।",
      type: "नियम",
      urgent: false
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "नया":
      case "लाइव":
        return "bg-green-100 text-green-800";
      case "चालू":
      case "प्रगति में":
        return "bg-blue-100 text-blue-800";
      case "आगामी":
      case "अनुमोदित":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-government-blue mb-4">
            {t('news.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('news.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main News */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-government-blue mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-2" />
              {t('news.latestNews')}
            </h3>
            <div className="space-y-6">
              {news.map((item) => (
                <Card key={item.id} className={`hover:shadow-lg transition-shadow cursor-pointer ${item.urgent ? 'border-red-200 bg-red-50/30' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Badge className={getBadgeColor(item.badge)}>
                          {item.badge}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-government-blue mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <Button variant="ghost" className="text-government-blue p-0 h-auto">
                      {t('news.readMore')}
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                {t('news.viewAllNews')}
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Important Announcements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-government-blue">
                  <Megaphone className="h-5 w-5 mr-2" />
                  {t('news.importantAnnouncements')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${announcement.urgent ? 'border-red-200 bg-red-50' : 'border-border bg-background'}`}>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className={announcement.urgent ? 'border-red-500 text-red-700' : ''}>
                        {announcement.type}
                      </Badge>
                      {announcement.urgent && (
                        <Bell className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                    <h5 className="font-semibold text-sm mb-2">
                      {announcement.title}
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      {announcement.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-government-blue">
                  {t('news.quickLinks')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start text-government-blue">
                  📋 RTI आवेदन
                </Button>
                <Button variant="ghost" className="w-full justify-start text-government-blue">
                  💰 ऑनलाइन भुगतान
                </Button>
                <Button variant="ghost" className="w-full justify-start text-government-blue">
                  📞 शिकायत दर्ज करें
                </Button>
                <Button variant="ghost" className="w-full justify-start text-government-blue">
                  📄 प्रमाणपत्र डाउनलोड
                </Button>
                <Button variant="ghost" className="w-full justify-start text-government-blue">
                  🏛️ टेंडर नोटिस
                </Button>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="bg-government-light-blue">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-government-blue mb-2">
                  {t('news.needHelp')}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('news.needHelpDesc')}
                </p>
                <Button variant="default" size="sm" className="w-full">
                  {t('news.contactNow')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;