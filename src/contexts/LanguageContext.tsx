import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'hi' | 'en' | 'gu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  hi: {
    // Header
    home: "गृहपृष्ठ",
    about: "महानगरपालिका के बारे में",
    onlineServices: "ऑनलाइन सेवाएं",
    citizenServices: "नागरिक सेवाएं",
    departments: "विभाग",
    projects: "परियोजनाएं",
    contact: "संपर्क",
    helpline: "हेल्पलाइन",
    email: "ईमेल",
    corporationName: "मेहसाणा महानगरपालिका",
    corporationNameEng: "Mehsana Municipal Corporation",
    tagline: "स्वच्छ, हरित, डिजिटल रूप से जुड़ा मेहसाणा",
    
    // Hero Section
    welcomeTitle: "मेहसाणा महानगरपालिका",
    corporationSince: "1 जनवरी 2025 से महानगरपालिका",
    heroDescription: "स्वच्छ, हरित, डिजिटल रूप से जुड़ा मेहसाणा के साथ समावेशी विकास। पारदर्शी शासन, आधुनिक अवसंरचना और कुशल नागरिक सेवाएं।",
    onlineServicesBtn: "ऑनलाइन सेवाएं",
    aboutCorporationBtn: "महानगरपालिका के बारे में",
    onlineServices24x7: "24/7 ऑनलाइन सेवाएं",
    emergency: "आपातकाल: 100 | 101 | 108",
    
    // Quick Services
    quickServices: "तुरंत सेवाएं",
    quickServicesDesc: "डिजिटल मेहसाणा की सुविधा से घर बैठे सभी नागरिक सेवाओं का लाभ उठाएं",
    propertyTax: "प्रॉपर्टी टैक्स भुगतान",
    propertyTaxDesc: "ऑनलाइन प्रॉपर्टी टैक्स भुगतान",
    certificates: "जन्म/मृत्यु प्रमाणपत्र",
    certificatesDesc: "जन्म और मृत्यु प्रमाणपत्र सेवाएं",
    buildingPermission: "बिल्डिंग परमिशन",
    buildingPermissionDesc: "निर्माण अनुमति आवेदन",
    complaintPortal: "शिकायत पोर्टल",
    complaintPortalDesc: "ऑनलाइन शिकायत दर्ज करें",
    
    // Statistics
    population: "जनसंख्या",
    area: "क्षेत्रफल",
    wards: "वार्ड",
    established: "स्थापना",
    populationValue: "3.5+ लाख",
    areaValue: "80+ वर्ग किमी",
    wardsValue: "13",
    establishedValue: "1 जन 2025",
    totalResidents: "कुल निवासी",
    totalArea: "कुल क्षेत्र",
    administrativeWards: "प्रशासनिक वार्ड",
    corporationStatus: "महानगरपालिका दर्जा",
    
    // Trending Section
    trendingServices: "ट्रेंडिंग सेवाएं",
    smcApp: "SMC Citizen Connect App",
    smcAppDesc: "मोबाइल ऐप डाउनलोड करें - सभी सेवाएं एक जगह",
    treePlantation: "Tree Plantation Drive 2025",
    treePlantationDesc: "वृक्षारोपण में योगदान दें - हरित मेहसाणा बनाएं",
    waterQuality: "Water Quality Testing",
    waterQualityDesc: "पानी की गुणवत्ता रिपोर्ट ऑनलाइन देखें",
    digitalPayment: "Digital Payment Portal",
    digitalPaymentDesc: "सभी कर और शुल्क ऑनलाइन भुगतान",
    viewInfo: "जानकारी देखें",
    
    // Common
    viewAll: "सभी देखें",
    readMore: "और पढ़ें",
    new: "NEW",
    active: "ACTIVE",
    live: "LIVE",
    popular: "POPULAR"
  },
  en: {
    // Header
    home: "Home",
    about: "About Corporation",
    onlineServices: "Online Services",
    citizenServices: "Citizen Services",
    departments: "Departments",
    projects: "Projects",
    contact: "Contact",
    helpline: "Helpline",
    email: "Email",
    corporationName: "Mehsana Municipal Corporation",
    corporationNameEng: "मेहसाणा महानगरपालिका",
    tagline: "Clean, Green, Digitally Connected Mehsana",
    
    // Hero Section
    welcomeTitle: "Mehsana Municipal Corporation",
    corporationSince: "Municipal Corporation since 1 January 2025",
    heroDescription: "Inclusive development with clean, green, digitally connected Mehsana. Providing transparent governance, modern infrastructure and efficient citizen services.",
    onlineServicesBtn: "Online Services",
    aboutCorporationBtn: "About Corporation",
    onlineServices24x7: "24/7 Online Services",
    emergency: "Emergency: 100 | 101 | 108",
    
    // Quick Services
    quickServices: "Quick Services",
    quickServicesDesc: "Take advantage of all citizen services from home with the convenience of Digital Mehsana",
    propertyTax: "Property Tax Payment",
    propertyTaxDesc: "Online property tax payment",
    certificates: "Birth/Death Certificates",
    certificatesDesc: "Birth and death certificate services",
    buildingPermission: "Building Permission",
    buildingPermissionDesc: "Construction permit application",
    complaintPortal: "Complaint Portal",
    complaintPortalDesc: "Register complaints online",
    
    // Statistics
    population: "Population",
    area: "Area",
    wards: "Wards",
    established: "Established",
    populationValue: "3.5+ Lakh",
    areaValue: "80+ Sq Km",
    wardsValue: "13",
    establishedValue: "1 Jan 2025",
    totalResidents: "Total Residents",
    totalArea: "Total Area",
    administrativeWards: "Administrative Wards",
    corporationStatus: "Corporation Status",
    
    // Trending Section
    trendingServices: "Trending Services",
    smcApp: "SMC Citizen Connect App",
    smcAppDesc: "Download mobile app - all services in one place",
    treePlantation: "Tree Plantation Drive 2025",
    treePlantationDesc: "Contribute to tree plantation - make Mehsana green",
    waterQuality: "Water Quality Testing",
    waterQualityDesc: "View water quality reports online",
    digitalPayment: "Digital Payment Portal",
    digitalPaymentDesc: "Pay all taxes and fees online",
    viewInfo: "View Details",
    
    // Common
    viewAll: "View All",
    readMore: "Read More",
    new: "NEW",
    active: "ACTIVE",
    live: "LIVE",
    popular: "POPULAR"
  },
  gu: {
    // Header
    home: "મુખ્ય પૃષ્ઠ",
    about: "મહાનગરપાલિકા વિશે",
    onlineServices: "ઓનલાઇન સેવાઓ",
    citizenServices: "નાગરિક સેવાઓ",
    departments: "વિભાગો",
    projects: "પ્રોજેક્ટ્સ",
    contact: "સંપર્ક",
    helpline: "હેલ્પલાઇન",
    email: "ઈમેઇલ",
    corporationName: "મહેસાણા મહાનગરપાલિકા",
    corporationNameEng: "Mehsana Municipal Corporation",
    tagline: "સ્વચ્છ, હરિત, ડિજિટલ રીતે જોડાયેલ મહેસાણા",
    
    // Hero Section
    welcomeTitle: "મહેસાણા મહાનગરપાલિકા",
    corporationSince: "1 જાન્યુઆરી 2025 થી મહાનગરપાલિકા",
    heroDescription: "સ્વચ્છ, હરિત, ડિજિટલ રીતે જોડાયેલ મહેસાણા સાથે સર્વસમાવેશક વિકાસ. પારદર્શક શાસન, આધુનિક ઇન્ફ્રાસ્ટ્રક્ચર અને કુશળ નાગરિક સેવાઓ પ્રદાન કરવી.",
    onlineServicesBtn: "ઓનલાઇન સેવાઓ",
    aboutCorporationBtn: "મહાનગરપાલિકા વિશે",
    onlineServices24x7: "24/7 ઓનલાઇન સેવાઓ",
    emergency: "કટોકટી: 100 | 101 | 108",
    
    // Quick Services
    quickServices: "તાત્કાલિક સેવાઓ",
    quickServicesDesc: "ડિજિટલ મહેસાણાની સુવિધા સાથે ઘરેથી જ તમામ નાગરિક સેવાઓનો લાભ ઉઠાવો",
    propertyTax: "પ્રોપર્ટી ટેક્સ ચુકવણી",
    propertyTaxDesc: "ઓનલાઇન પ્રોપર્ટી ટેક્સ ચુકવણી",
    certificates: "જન્મ/મૃત્યુ પ્રમાણપત્ર",
    certificatesDesc: "જન્મ અને મૃત્યુ પ્રમાણપત્ર સેવાઓ",
    buildingPermission: "બિલ્ડિંગ પરમિશન",
    buildingPermissionDesc: "બાંધકામ પરવાનગી અરજી",
    complaintPortal: "ફરિયાદ પોર્ટલ",
    complaintPortalDesc: "ઓનલાઇન ફરિયાદ નોંધાવો",
    
    // Statistics
    population: "વસ્તી",
    area: "વિસ્તાર",
    wards: "વોર્ડ",
    established: "સ્થાપના",
    populationValue: "3.5+ લાખ",
    areaValue: "80+ વર્ગ કિમી",
    wardsValue: "13",
    establishedValue: "1 જાન 2025",
    totalResidents: "કુલ રહેવાસીઓ",
    totalArea: "કુલ વિસ્તાર",
    administrativeWards: "વહીવટી વોર્ડ",
    corporationStatus: "મહાનગરપાલિકા દરજ્જો",
    
    // Trending Section
    trendingServices: "ટ્રેન્ડિંગ સેવાઓ",
    smcApp: "SMC Citizen Connect App",
    smcAppDesc: "મોબાઇલ એપ્લિકેશન ડાઉનલોડ કરો - બધી સેવાઓ એક જગ્યાએ",
    treePlantation: "Tree Plantation Drive 2025",
    treePlantationDesc: "વૃક્ષારોપણમાં યોગદાન આપો - મહેસાણાને હરિયાળો બનાવો",
    waterQuality: "Water Quality Testing",
    waterQualityDesc: "પાણીની ગુણવત્તા રિપોર્ટ ઓનલાઇન જુઓ",
    digitalPayment: "Digital Payment Portal",
    digitalPaymentDesc: "બધા કર અને ફી ઓનલાઇન ચૂકવો",
    viewInfo: "વિગતો જુઓ",
    
    // Common
    viewAll: "બધું જુઓ",
    readMore: "વધુ વાંચો",
    new: "નવું",
    active: "સક્રિય",
    live: "લાઇવ",
    popular: "લોકપ્રિય"
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('hi');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['hi']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};