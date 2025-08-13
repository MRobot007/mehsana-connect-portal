import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Building2,
  Users,
  MessageSquare,
  Send
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent Successfully",
      description: "Your message has been sent to Mehsana Municipal Corporation. We will respond within 24 hours.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Building2,
      title: "मुख्यालय",
      details: ["नगर भवन, मेहसाणा", "गुजरात - 384001"],
      action: "दिशा देखें"
    },
    {
      icon: Phone,
      title: "फ़ोन नंबर",
      details: ["+91-2762-123456", "+91-2762-789012"],
      action: "कॉल करें"
    },
    {
      icon: Mail,
      title: "ईमेल",
      details: ["info@mehsanammc.org", "helpdesk@mehsanammc.org"],
      action: "ईमेल भेजें"
    },
    {
      icon: Clock,
      title: "कार्यालय समय",
      details: ["सोमवार - शुक्रवार: 10:00 - 18:00", "शनिवार: 10:00 - 14:00"],
      action: "समय देखें"
    }
  ];

  const departments = [
    {
      name: "मेयर कार्यालय",
      phone: "+91-2762-111111",
      email: "mayor@mehsanammc.org"
    },
    {
      name: "नगर आयुक्त",
      phone: "+91-2762-222222", 
      email: "commissioner@mehsanammc.org"
    },
    {
      name: "जल आपूर्ति विभाग",
      phone: "+91-2762-333333",
      email: "water@mehsanammc.org"
    },
    {
      name: "स्वास्थ्य विभाग",
      phone: "+91-2762-444444",
      email: "health@mehsanammc.org"
    },
    {
      name: "इंजीनियरिंग विभाग",
      phone: "+91-2762-555555",
      email: "engineering@mehsanammc.org"
    },
    {
      name: "कर विभाग",
      phone: "+91-2762-666666",
      email: "tax@mehsanammc.org"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-government-blue to-government-blue/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            संपर्क करें
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            मेहसाणा महानगरपालिका से जुड़ें - आपके सुझाव हमारे लिए महत्वपूर्ण हैं
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-government-light-blue p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <info.icon className="h-8 w-8 text-government-blue" />
                </div>
                <h3 className="font-semibold text-government-blue mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground mb-1">
                    {detail}
                  </p>
                ))}
                <Button variant="outline" size="sm" className="mt-3">
                  {info.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-government-blue" />
                संदेश भेजें
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">पूरा नाम *</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">फ़ोन नंबर *</Label>
                    <Input 
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">ईमेल पता *</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">विषय *</Label>
                  <Input 
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">संदेश *</Label>
                  <Textarea 
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  संदेश भेजें
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Department Contacts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6 text-government-blue" />
                विभागीय संपर्क
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="border-b border-muted pb-4 last:border-b-0">
                    <h4 className="font-semibold text-government-blue mb-2">
                      {dept.name}
                    </h4>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>{dept.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>{dept.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contacts */}
        <Card className="mt-8 bg-gradient-to-r from-red-500 to-red-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">आपातकालीन संपर्क</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">100</div>
                <div className="text-sm">पुलिस</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">101</div>
                <div className="text-sm">अग्निशमन</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">108</div>
                <div className="text-sm">एम्बुलेंस</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">1077</div>
                <div className="text-sm">आपदा नियंत्रण</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Map Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-government-blue" />
              हमारा स्थान
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-government-blue mx-auto mb-2" />
                <p className="text-muted-foreground">
                  नगर भवन, मेहसाणा, गुजरात - 384001
                </p>
                <Button variant="outline" className="mt-2">
                  Google Maps में देखें
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;