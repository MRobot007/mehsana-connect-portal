import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  AlertCircle, 
  Clock, 
  CheckCircle, 
  X, 
  Upload,
  Search,
  Filter,
  MessageSquare,
  Phone,
  MapPin
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ComplaintPortal = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'new' | 'track'>('new');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    category: '',
    priority: '',
    subject: '',
    description: '',
    trackingId: ''
  });

  const complaintCategories = [
    "जल आपूर्ति संबंधी",
    "सड़क और यातायात",
    "कचरा संग्रह",
    "स्ट्रीट लाइट",
    "नाली की सफाई",
    "पार्क और बगीचे",
    "शोर प्रदूषण",
    "भवन निर्माण संबंधी",
    "कर संबंधी",
    "अन्य"
  ];

  const priorityLevels = [
    { value: "high", label: "उच्च प्राथमिकता", color: "bg-red-100 text-red-800" },
    { value: "medium", label: "मध्यम प्राथमिकता", color: "bg-yellow-100 text-yellow-800" },
    { value: "low", label: "सामान्य", color: "bg-green-100 text-green-800" }
  ];

  const sampleComplaints = [
    {
      id: "MMC2025001",
      subject: "सड़क पर गड्ढे की समस्या",
      category: "सड़क और यातायात",
      status: "प्रगति में",
      priority: "उच्च प्राथमिकता",
      date: "15 जन 2025",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      id: "MMC2025002", 
      subject: "पानी की कमी",
      category: "जल आपूर्ति संबंधी",
      status: "हल किया गया",
      priority: "उच्च प्राथमिकता",
      date: "14 जन 2025",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      id: "MMC2025003",
      subject: "स्ट्रीट लाइट खराब",
      category: "स्ट्रीट लाइट",
      status: "दर्ज की गई",
      priority: "मध्यम प्राथमिकता", 
      date: "13 जन 2025",
      statusColor: "bg-orange-100 text-orange-800"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const complaintId = `MMC${Date.now()}`;
    
    toast({
      title: "शिकायत सफलतापूर्वक दर्ज की गई",
      description: `आपकी शिकायत ID: ${complaintId}। SMS/Email द्वारा अपडेट मिलेगा।`,
    });
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      category: '',
      priority: '',
      subject: '',
      description: '',
      trackingId: ''
    });
  };

  const handleTrackComplaint = () => {
    if (!formData.trackingId) {
      toast({
        title: "त्रुटि",
        description: "कृपया ट्रैकिंग ID दर्ज करें",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "शिकायत की स्थिति",
      description: `ID: ${formData.trackingId} - आपकी शिकायत प्रगति में है और 48 घंटों में हल हो जाएगी।`,
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-government-blue to-government-blue/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            नागरिक शिकायत पोर्टल
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            आपकी आवाज़, हमारी प्राथमिकता - तुरंत शिकायत दर्ज करें और समाधान पाएं
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <Button
              variant={activeTab === 'new' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('new')}
              className="rounded-md"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              नई शिकायत दर्ज करें
            </Button>
            <Button
              variant={activeTab === 'track' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('track')}
              className="rounded-md"
            >
              <Search className="h-4 w-4 mr-2" />
              शिकायत ट्रैक करें
            </Button>
          </div>
        </div>

        {activeTab === 'new' && (
          <div className="max-w-4xl mx-auto">
            {/* Guidelines */}
            <Card className="mb-8 border-l-4 border-government-orange">
              <CardContent className="p-6">
                <h3 className="font-semibold text-government-blue mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  शिकायत दर्ज करने से पहले ध्यान दें
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                  <li>सभी आवश्यक जानकारी सही तरीके से भरें</li>
                  <li>अपना सही फ़ोन नंबर और ईमेल दर्ज करें</li>
                  <li>समस्या का स्पष्ट विवरण दें</li>
                  <li>यदि संभव हो तो फोटो अपलोड करें</li>
                  <li>आपातकालीन मामलों के लिए सीधे हेल्पलाइन नंबर पर कॉल करें</li>
                </ul>
              </CardContent>
            </Card>

            {/* Complaint Form */}
            <Card>
              <CardHeader>
                <CardTitle>शिकायत फॉर्म</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h4 className="font-medium mb-4">व्यक्तिगत जानकारी</h4>
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
                        <Label htmlFor="phone">मोबाइल नंबर *</Label>
                        <Input 
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">ईमेल पता</Label>
                        <Input 
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="address">पता *</Label>
                        <Input 
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Complaint Details */}
                  <div>
                    <h4 className="font-medium mb-4">शिकायत विवरण</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="category">शिकायत की श्रेणी *</Label>
                        <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="श्रेणी चुनें" />
                          </SelectTrigger>
                          <SelectContent>
                            {complaintCategories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="priority">प्राथमिकता *</Label>
                        <Select value={formData.priority} onValueChange={(value) => handleInputChange('priority', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="प्राथमिकता चुनें" />
                          </SelectTrigger>
                          <SelectContent>
                            {priorityLevels.map((priority) => (
                              <SelectItem key={priority.value} value={priority.value}>
                                {priority.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="subject">शिकायत का विषय *</Label>
                      <Input 
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="description">विस्तृत विवरण *</Label>
                      <Textarea 
                        id="description"
                        rows={4}
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        required
                        placeholder="कृपया अपनी समस्या का विस्तृत विवरण दें..."
                      />
                    </div>
                    
                    <div>
                      <Label>फोटो अपलोड करें (वैकल्पिक)</Label>
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                        <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-2">फोटो अपलोड करने के लिए क्लिक करें</p>
                        <Button variant="outline" size="sm">
                          फाइल चुनें
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    शिकायत दर्ज करें
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'track' && (
          <div className="max-w-4xl mx-auto">
            {/* Track Complaint */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>शिकायत ट्रैक करें</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Label htmlFor="trackingId">ट्रैकिंग ID दर्ज करें</Label>
                    <Input 
                      id="trackingId"
                      placeholder="जैसे: MMC2025001"
                      value={formData.trackingId}
                      onChange={(e) => handleInputChange('trackingId', e.target.value)}
                    />
                  </div>
                  <Button onClick={handleTrackComplaint} className="mt-6">
                    <Search className="h-4 w-4 mr-2" />
                    खोजें
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Complaints */}
            <Card>
              <CardHeader>
                <CardTitle>हाल की शिकायतें</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sampleComplaints.map((complaint) => (
                    <div key={complaint.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-government-blue">
                            {complaint.subject}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            ID: {complaint.id} • {complaint.date}
                          </p>
                        </div>
                        <Badge className={complaint.statusColor}>
                          {complaint.status}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-muted-foreground">
                          श्रेणी: {complaint.category}
                        </span>
                        <span className="text-muted-foreground">
                          प्राथमिकता: {complaint.priority}
                        </span>
                      </div>
                      
                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" size="sm">
                          विस्तार देखें
                        </Button>
                        <Button variant="outline" size="sm">
                          अपडेट पाएं
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Contact Information */}
        <Card className="mt-8 bg-government-light-blue">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-government-blue mb-4">
              तत्काल सहायता चाहिए?
            </h3>
            <p className="text-muted-foreground mb-6">
              आपातकालीन स्थिति में सीधे संपर्क करें
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default">
                <Phone className="h-4 w-4 mr-2" />
                हेल्पलाइन: 1800-XXX-XXXX
              </Button>
              <Button variant="outline">
                <MessageSquare className="h-4 w-4 mr-2" />
                WhatsApp: +91-98XXX-XXXXX
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ComplaintPortal;