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
    
    // Services
    waterTax: "पानी का बिल",
    waterTaxDesc: "ऑनलाइन पानी का बिल भुगतान",
    birthCertificate: "जन्म प्रमाणपत्र",
    birthCertificateDesc: "जन्म प्रमाणपत्र के लिए आवेदन",
    
    // About Section
    title: "मेहसाणा महानगरपालिका के बारे में",
    subtitle: "समावेशी विकास के साथ स्वच्छ, हरित, डिजिटल रूप से जुड़ा मेहसाणा - पारदर्शी शासन, आधुनिक अवसंरचना और कुशल नागरिक सेवाएं प्रदान करना।",
    vision: "हमारा दृष्टिकोण",
    visionText: "एक स्मार्ट, स्वच्छ और सुंदर मेहसाणा बनाना जो सभी नागरिकों के लिए बेहतर जीवन की गुणवत्ता प्रदान करे।",
    mission: "हमारा मिशन", 
    missionText: "आधुनिक तकनीक और पारदर्शी शासन के माध्यम से कुशल नागरिक सेवाएं प्रदान करना।",
    headquarters: "मुख्यालय",
    headquartersAddress: "नगर भवन, मेहसाणा - 384001, गुजरात",
    viewContact: "संपर्क देखें",
    viewMap: "मानचित्र देखें",
    councilSeats: "पार्षद सीटें",
    establishmentDate: "स्थापना तिथि",
    organizationalStructure: "संगठनात्मक संरचना",
    commissioner: "नगर आयुक्त",
    commissionerDesc: "प्रशासनिक मुखिया और मुख्य कार्यकारी अधिकारी",
    mayor: "महापौर",
    mayorDesc: "निर्वाचित प्रमुख और नगरपालिका परिषद के अध्यक्ष",
    standingCommittees: "स्थायी समितियां",
    standingCommitteesDesc: "विभिन्न विभागों की निगरानी करने वाली समितियां",
    wardCouncillors: "वार्ड पार्षद",
    wardCouncillorsDesc: "वार्ड स्तर पर निर्वाचित प्रतिनिधि",
    keyEvents: "मुख्य घटनाएं",
    
    // Services Section
    services: {
      title: "सेवाएं",
      subtitle: "मेहसाणा महानगरपालिका की डिजिटल सेवाओं का लाभ उठाएं",
      mainServices: "मुख्य सेवाएं",
      available: "उपलब्ध",
      comingSoon: "जल्द आ रहा है",
      helpline: "नागरिक हेल्पलाइन",
      helplineDesc: "किसी भी सहायता के लिए हमसे संपर्क करें - 24/7 उपलब्ध",
      departments: "विभाग",
      viewAllServices: "सभी सेवाएं देखें",
      newServicesAnnouncement: "नई सेवाओं की घोषणा",
      newServicesDesc: "नवीनतम सेवाओं और अपडेट के लिए न्यूज़लेटर की सदस्यता लें",
      subscribeNewsletter: "न्यूज़लेटर की सदस्यता लें"
    },
    
    // News Section
    news: {
      title: "समाचार और घोषणाएं",
      subtitle: "मेहसाणा महानगरपालिका की नवीनतम खबरें और अपडेट",
      latestNews: "ताज़ा खबरें",
      announcement: "घोषणा",
      notice: "नोटिस",
      event: "कार्यक्रम",
      scheme: "योजना",
      readFullNews: "पूरी खबर पढ़ें",
      viewAllNews: "सभी समाचार देखें"
    },
    
    // Footer
    footer: {
      quickLinks: "त्वरित लिंक",
      importantLinks: "महत्वपूर्ण लिंक",
      contactInfo: "संपर्क जानकारी",
      followUs: "हमें फॉलो करें",
      address: "पता",
      phone: "फ़ोन",
      email: "ईमेल",
      workingHours: "कार्य समय",
      mondayToFriday: "सोमवार से शुक्रवार",
      saturday: "शनिवार",
      sunday: "रविवार (बंद)",
      allRightsReserved: "सभी अधिकार सुरक्षित",
      privacy: "गोपनीयता नीति",
      terms: "नियम और शर्तें",
      sitemap: "साइटमैप",
      accessibility: "पहुंच",
      rti: "आरटीआई",
      tenders: "निविदाएं",
      careers: "करियर",
      downloads: "डाउनलोड"
    },
    
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
    
    // Services
    waterTax: "Water Bill",
    waterTaxDesc: "Online water bill payment",
    birthCertificate: "Birth Certificate",
    birthCertificateDesc: "Apply for birth certificate",
    
    // About Section
    title: "About Mehsana Municipal Corporation",
    subtitle: "Inclusive development with clean, green, digitally connected Mehsana - providing transparent governance, modern infrastructure and efficient citizen services.",
    vision: "Our Vision",
    visionText: "To create a smart, clean and beautiful Mehsana that provides better quality of life for all citizens.",
    mission: "Our Mission",
    missionText: "To provide efficient citizen services through modern technology and transparent governance.",
    headquarters: "Headquarters",
    headquartersAddress: "Nagar Bhavan, Mehsana - 384001, Gujarat",
    viewContact: "View Contact",
    viewMap: "View Map",
    councilSeats: "Council Seats",
    establishmentDate: "Establishment Date",
    organizationalStructure: "Organizational Structure",
    commissioner: "Municipal Commissioner",
    commissionerDesc: "Administrative head and chief executive officer",
    mayor: "Mayor",
    mayorDesc: "Elected head and chairman of municipal council",
    standingCommittees: "Standing Committees",
    standingCommitteesDesc: "Committees overseeing various departments",
    wardCouncillors: "Ward Councillors",
    wardCouncillorsDesc: "Elected representatives at ward level",
    keyEvents: "Key Events",
    
    // Services Section
    services: {
      title: "Services",
      subtitle: "Take advantage of Mehsana Municipal Corporation's digital services",
      mainServices: "Main Services",
      available: "Available",
      comingSoon: "Coming Soon",
      helpline: "Citizen Helpline",
      helplineDesc: "Contact us for any assistance - available 24/7",
      departments: "Departments",
      viewAllServices: "View All Services",
      newServicesAnnouncement: "New Services Announcement",
      newServicesDesc: "Subscribe to newsletter for latest services and updates",
      subscribeNewsletter: "Subscribe Newsletter"
    },
    
    // News Section
    news: {
      title: "News and Announcements",
      subtitle: "Latest news and updates from Mehsana Municipal Corporation",
      latestNews: "Latest News",
      announcement: "Announcement",
      notice: "Notice",
      event: "Event",
      scheme: "Scheme",
      readFullNews: "Read Full News",
      viewAllNews: "View All News"
    },
    
    // Footer
    footer: {
      quickLinks: "Quick Links",
      importantLinks: "Important Links",
      contactInfo: "Contact Information",
      followUs: "Follow Us",
      address: "Address",
      phone: "Phone",
      email: "Email",
      workingHours: "Working Hours",
      mondayToFriday: "Monday to Friday",
      saturday: "Saturday",
      sunday: "Sunday (Closed)",
      allRightsReserved: "All Rights Reserved",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      sitemap: "Sitemap",
      accessibility: "Accessibility",
      rti: "RTI",
      tenders: "Tenders",
      careers: "Careers",
      downloads: "Downloads"
    },
    
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
    
    // Services
    waterTax: "પાણીનું બિલ",
    waterTaxDesc: "ઓનલાઇન પાણીનું બિલ ચુકવણી",
    birthCertificate: "જન્મ પ્રમાણપત્ર",
    birthCertificateDesc: "જન્મ પ્રમાણપત્ર માટે અરજી",
    
    // About Section
    title: "મહેસાણા મહાનગરપાલિકા વિશે",
    subtitle: "સ્વચ્છ, હરિત, ડિજિટલ રીતે જોડાયેલ મહેસાણા સાથે સર્વસમાવેશક વિકાસ - પારદર્શક શાસન, આધુનિક ઇન્ફ્રાસ્ટ્રક્ચર અને કુશળ નાગરિક સેવાઓ પ્રદાન કરવી.",
    vision: "અમારો દ્રષ્ટિકોણ",
    visionText: "એક સ્માર્ટ, સ્વચ્છ અને સુંદર મહેસાણા બનાવવું જે બધા નાગરિકો માટે જીવનની બહેતર ગુણવત્તા પ્રદાન કરે.",
    mission: "અમારું મિશન",
    missionText: "આધુનિક તકનીક અને પારદર્શક શાસન દ્વારા કુશળ નાગરિક સેવાઓ પ્રદાન કરવી.",
    headquarters: "મુખ્ય મથક",
    headquartersAddress: "નગર ભવન, મહેસાણા - 384001, ગુજરાત",
    viewContact: "સંપર્ક જુઓ",
    viewMap: "નકશો જુઓ",
    councilSeats: "પાર્ષદ સીટો",
    establishmentDate: "સ્થાપના તારીખ",
    organizationalStructure: "સંસ્થાકીય માળખું",
    commissioner: "નગર કમિશનર",
    commissionerDesc: "વહીવટી વડા અને મુખ્ય કાર્યકારી અધિકારી",
    mayor: "મેયર",
    mayorDesc: "ચૂંટાયેલા વડા અને મ્યુનિસિપલ કાઉન્સિલના અધ્યક્ષ",
    standingCommittees: "સ્થાયી સમિતિઓ",
    standingCommitteesDesc: "વિવિધ વિભાગોની દેખરેખ કરતી સમિતિઓ",
    wardCouncillors: "વોર્ડ પાર્ષદો",
    wardCouncillorsDesc: "વોર્ડ સ્તરે ચૂંટાયેલા પ્રતિનિધિઓ",
    keyEvents: "મુખ્ય ઘટનાઓ",
    
    // Services Section
    services: {
      title: "સેવાઓ",
      subtitle: "મહેસાણા મહાનગરપાલિકાની ડિજિટલ સેવાઓનો લાભ ઉઠાવો",
      mainServices: "મુખ્ય સેવાઓ",
      available: "ઉપલબ્ધ",
      comingSoon: "જલ્દી આવી રહી છે",
      helpline: "નાગરિક હેલ્પલાઇન",
      helplineDesc: "કોઈપણ સહાય માટે અમારો સંપર્ક કરો - 24/7 ઉપલબ્ધ",
      departments: "વિભાગો",
      viewAllServices: "બધી સેવાઓ જુઓ",
      newServicesAnnouncement: "નવી સેવાઓની જાહેરાત",
      newServicesDesc: "નવીનતમ સેવાઓ અને અપડેટ માટે ન્યૂઝલેટરની સબ્સ્ક્રિપ્શન લો",
      subscribeNewsletter: "ન્યૂઝલેટર સબ્સ્ક્રાઇબ કરો"
    },
    
    // News Section
    news: {
      title: "સમાચાર અને જાહેરાતો",
      subtitle: "મહેસાણા મહાનગરપાલિકાના નવીનતમ સમાચાર અને અપડેટ",
      latestNews: "તાજા સમાચાર",
      announcement: "જાહેરાત",
      notice: "નોટિસ",
      event: "કાર્યક્રમ",
      scheme: "યોજના",
      readFullNews: "સંપૂર્ણ સમાચાર વાંચો",
      viewAllNews: "બધા સમાચાર જુઓ"
    },
    
    // Footer
    footer: {
      quickLinks: "ઝડપી લિંક",
      importantLinks: "મહત્વપૂર્ણ લિંક",
      contactInfo: "સંપર્ક માહિતી",
      followUs: "અમને ફોલો કરો",
      address: "સરનામું",
      phone: "ફોન",
      email: "ઈમેઇલ",
      workingHours: "કામના કલાકો",
      mondayToFriday: "સોમવારથી શુક્રવાર",
      saturday: "શનિવાર",
      sunday: "રવિવાર (બંધ)",
      allRightsReserved: "બધા હક્કો સુરક્ષિત",
      privacy: "ગોપનીયતા નીતિ",
      terms: "નિયમો અને શરતો",
      sitemap: "સાઇટમેપ",
      accessibility: "સુલભતા",
      rti: "આરટીઆઇ",
      tenders: "ટેન્ડર",
      careers: "કારકિર્દી",
      downloads: "ડાઉનલોડ"
    },
    
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
    const keys = key.split('.');
    let result: any = translations[language];
    
    for (const k of keys) {
      result = result?.[k];
    }
    
    return typeof result === 'string' ? result : key;
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