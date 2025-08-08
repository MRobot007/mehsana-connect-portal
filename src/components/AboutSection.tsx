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

const AboutSection = () => {
  const milestones = [
    {
      year: "2025",
      title: "महानगरपालिका में उन्नयन",
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
      title: "आयुक्त",
      description: "मुख्य कार्यकारी अधिकारी, प्रशासन के लिए जिम्मेदार",
      icon: Crown
    },
    {
      title: "मेयर",
      description: "राजनीतिक प्रमुख (आगामी चुनावों में चुने जाने वाले)",
      icon: Users
    },
    {
      title: "स्थायी समितियां",
      description: "स्वास्थ्य, वित्त, निर्माण कार्य आदि",
      icon: Building2
    },
    {
      title: "वार्ड पार्षद",
      description: "13 वार्डों के निर्वाचित प्रतिनिधि",
      icon: MapPin
    }
  ];

  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-government-blue mb-4">
            महानगरपालिका के बारे में
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            मेहसाणा महानगरपालिका गुजरात नगरपालिका निगम अधिनियम, 1949 के तहत स्थापित
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-government-blue to-government-blue/90 text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Eye className="h-8 w-8" />
                <span className="text-2xl">हमारा विजन</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                "समावेशी विकास के साथ एक स्वच्छ, हरित, डिजिटल रूप से जुड़ा मेहसाणा।"
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-government-orange to-government-orange/90 text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Target className="h-8 w-8" />
                <span className="text-2xl">हमारा मिशन</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                "पारदर्शी शासन, आधुनिक अवसंरचना और कुशल नागरिक सेवाएं प्रदान करना।"
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <MapPin className="h-12 w-12 text-government-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-government-blue mb-2">80+ km²</h3>
              <p className="text-muted-foreground">कुल क्षेत्रफल</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Building2 className="h-12 w-12 text-government-orange mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-government-orange mb-2">13</h3>
              <p className="text-muted-foreground">वार्ड</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-government-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-government-green mb-2">52</h3>
              <p className="text-muted-foreground">पार्षद सीटें</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-12 w-12 text-government-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-government-blue mb-2">1 जन 2025</h3>
              <p className="text-muted-foreground">स्थापना दिवस</p>
            </CardContent>
          </Card>
        </div>

        {/* Organizational Structure */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-government-blue mb-8 text-center">
            संगठनात्मक संरचना
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
            मुख्य घटनाएं
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
              मुख्यालय पता
            </h3>
            <p className="text-lg mb-4">
              मेहसाणा महानगरपालिका कार्यालय, मेहसाणा, गुजरात - 384001
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default">
                संपर्क विवरण देखें
              </Button>
              <Button variant="outline">
                <MapPin className="h-4 w-4 mr-2" />
                मानचित्र में देखें
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;