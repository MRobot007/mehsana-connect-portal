import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  MapPin, 
  Calendar,
  Target,
  Eye,
  Crown,
  FileText
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const milestones = [
    {
      year: "2025",
      title: t('about.title'),
      description: "1 जनवरी 2025 को नगरपालिका से महानगरपालिका में उन्नयन"
    },
    {
      year: "2025", 
      title: "9 ग्राम पंचायतों का विलय",
      description: "फतेपुरा, रामोसाना, देदियासन और अन्य का विलय"
    },
    {
      year: "2025",
      title: "13 वार्ड निर्माण", 
      description: "52 पार्षद सीटों के साथ प्रशासनिक संरचना"
    }
  ];

  const organizationalStructure = [
    {
      title: t('about.commissioner'),
      description: t('about.commissionerDesc'),
      icon: Crown
    },
    {
      title: t('about.mayor'),
      description: t('about.mayorDesc'),
      icon: Users
    },
    {
      title: t('about.standingCommittees'),
      description: t('about.standingCommitteesDesc'),
      icon: Building2
    },
    {
      title: t('about.wardCouncillors'),
      description: t('about.wardCouncillorsDesc'),
      icon: MapPin
    }
  ];

  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-government-blue mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-government-blue to-government-blue/90 text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Eye className="h-8 w-8" />
                <span className="text-2xl">{t('about.vision')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                {t('about.visionText')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-government-orange to-government-orange/90 text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Target className="h-8 w-8" />
                <span className="text-2xl">{t('about.mission')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                {t('about.missionText')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <MapPin className="h-12 w-12 text-government-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-government-blue mb-2">{t('stats.areaValue')}</h3>
              <p className="text-muted-foreground">{t('about.totalArea')}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Building2 className="h-12 w-12 text-government-orange mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-government-orange mb-2">{t('stats.wardsValue')}</h3>
              <p className="text-muted-foreground">{t('stats.wards')}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-government-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-government-green mb-2">52</h3>
              <p className="text-muted-foreground">{t('about.councilSeats')}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-12 w-12 text-government-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-government-blue mb-2">{t('stats.establishmentValue')}</h3>
              <p className="text-muted-foreground">{t('about.establishmentDate')}</p>
            </CardContent>
          </Card>
        </div>

        {/* Organizational Structure */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-government-blue mb-8 text-center">
            {t('about.organizationalStructure')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizationalStructure.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-government-blue mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-government-blue mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-government-blue mb-8 text-center">
            {t('about.keyEvents')}
          </h3>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="border-l-4 border-government-orange">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-government-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {milestone.year}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-government-blue mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <Card className="bg-government-light-blue">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-government-blue mb-4">
              {t('about.headquarters')}
            </h3>
            <p className="text-lg mb-4">
              {t('about.headquartersAddress')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default">
                {t('about.viewContact')}
              </Button>
              <Button variant="outline">
                <MapPin className="h-4 w-4 mr-2" />
                {t('about.viewMap')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;