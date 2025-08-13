import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  CreditCard, 
  Droplets, 
  FileText, 
  Building2, 
  ExternalLink,
  Download,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    icon: any;
    status: string;
    category: string;
  } | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    propertyId: '',
    amount: '',
    description: ''
  });

  if (!service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Application Submitted",
      description: `Your ${service.title} application has been submitted successfully. You will receive a confirmation SMS/Email shortly.`,
    });
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      propertyId: '',
      amount: '',
      description: ''
    });
    
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getServiceForm = () => {
    if (service.title.includes("Property Tax") || service.title.includes("प्रॉपर्टी टैक्स")) {
      return (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name / पूरा नाम</Label>
              <Input 
                id="name" 
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required 
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number / फ़ोन नंबर</Label>
              <Input 
                id="phone" 
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required 
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="propertyId">Property ID / संपत्ति आईडी</Label>
            <Input 
              id="propertyId" 
              placeholder="Enter your property ID"
              value={formData.propertyId}
              onChange={(e) => handleInputChange('propertyId', e.target.value)}
              required 
            />
          </div>
          
          <div>
            <Label htmlFor="address">Property Address / संपत्ति का पता</Label>
            <Textarea 
              id="address" 
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              required 
            />
          </div>
          
          <div className="flex gap-4">
            <Button type="submit" className="flex-1">
              Pay Tax / कर भुगतान करें
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel / रद्द करें
            </Button>
          </div>
        </form>
      );
    }

    if (service.title.includes("Water") || service.title.includes("पानी")) {
      return (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name / पूरा नाम</Label>
              <Input 
                id="name" 
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required 
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number / फ़ोन नंबर</Label>
              <Input 
                id="phone" 
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required 
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="propertyId">Consumer Number / उपभोक्ता संख्या</Label>
            <Input 
              id="propertyId" 
              placeholder="Enter your consumer number"
              value={formData.propertyId}
              onChange={(e) => handleInputChange('propertyId', e.target.value)}
              required 
            />
          </div>
          
          <div className="flex gap-4">
            <Button type="submit" className="flex-1">
              Pay Water Bill / पानी का बिल भुगतान करें
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel / रद्द करें
            </Button>
          </div>
        </form>
      );
    }

    if (service.title.includes("Certificate") || service.title.includes("प्रमाणपत्र")) {
      return (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name / पूरा नाम</Label>
              <Input 
                id="name" 
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required 
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number / फ़ोन नंबर</Label>
              <Input 
                id="phone" 
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required 
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email">Email Address / ईमेल पता</Label>
            <Input 
              id="email" 
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required 
            />
          </div>
          
          <div>
            <Label htmlFor="description">Purpose / उद्देश्य</Label>
            <Textarea 
              id="description" 
              placeholder="Describe the purpose for the certificate"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              required 
            />
          </div>
          
          <div className="flex gap-4">
            <Button type="submit" className="flex-1">
              Apply for Certificate / प्रमाणपत्र के लिए आवेदन करें
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel / रद्द करें
            </Button>
          </div>
        </form>
      );
    }

    // Default form for other services
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Full Name / पूरा नाम</Label>
            <Input 
              id="name" 
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required 
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number / फ़ोन नंबर</Label>
            <Input 
              id="phone" 
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required 
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="email">Email Address / ईमेल पता</Label>
          <Input 
            id="email" 
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required 
          />
        </div>
        
        <div>
          <Label htmlFor="description">Details / विवरण</Label>
          <Textarea 
            id="description" 
            placeholder="Enter your requirements"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            required 
          />
        </div>
        
        <div className="flex gap-4">
          <Button type="submit" className="flex-1">
            Submit Application / आवेदन जमा करें
          </Button>
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel / रद्द करें
          </Button>
        </div>
      </form>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <service.icon className="h-6 w-6 text-government-blue" />
            {service.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Service Info */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                  <span className="text-xs text-government-orange font-medium">
                    {service.category}
                  </span>
                </div>
                <span 
                  className={`text-xs px-2 py-1 rounded-full ${
                    service.status === 'Available' || service.status === 'उपलब्ध'
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {service.status}
                </span>
              </div>
              
              {/* Service Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Online Processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Quick Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-orange-600" />
                  <span className="text-sm">SMS/Email Updates</span>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download Form
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Track Status
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Application Form */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-4">Apply Online / ऑनलाइन आवेदन करें</h3>
              {getServiceForm()}
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;