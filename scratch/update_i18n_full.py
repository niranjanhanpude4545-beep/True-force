import json
import os

i18n_content = """import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: { home: "Home", services: "Services", careers: "Careers", gallery: "Gallery", contact: "Contact", bookConsult: "Book Consultation" },
      hero: {
        badge: "Elite Strategic Force",
        title1: "Uncompromising",
        title2: "Tactical Security",
        subtitle: "The ultimate command center for urban protection and industrial dominance.",
        activateBtn: "Activate Defense",
        commandBtn: "Command Control",
        online: "Operational Nodes Active",
        rating: "4.9/5 Trust Score",
        isoVerified: "ISO 27001 VERIFIED",
        psaraLicensed: "PSARA LICENSED",
        threatLevel: "THREAT LEVEL: CRITICAL",
        maxResponse: "2 MIN RESPONSE",
        securityClearance: "SECURITY CLEARANCE: MAXIMUM",
        personnel: "Personnel",
        responseTime: "Response Time",
        coverageArea: "Coverage Area",
        operational: "24/7 Operational HUD"
      },
      capabilities: {
        badge: "Elite Capabilities",
        title1: "Operational",
        title2: "Supremacy",
        subtitle: "We don't just observe. We predict, intercept, and absolutely dominate the security perimeter through advanced technology and elite human forces.",
        ai: { title: "AI Command Integration", desc: "Real-time surveillance analytics feeding directly into our centralized command servers." },
        qrt: { title: "Tactical QRT Units", desc: "Elite Quick Response Teams deployed in marked interceptor vehicles." },
        intel: { title: "Classified Intel Core", desc: "Proprietary urban risk-mapping algorithms providing predictive security models." },
        biometric: { title: "Biometric Force Verification", desc: "Every operative is rigorously verified through military-grade background checks." }
      },
      partners: {
        badge: "Trusted By Industry Leaders",
        title1: "Protecting",
        title2: "India's Finest",
        subtitle: "Trusted by leading enterprises across IT, manufacturing, pharma, and infrastructure sectors.",
        stats: { clients: "Active Clients", partners: "Enterprise Partners", years: "Years of Trust", retention: "Client Retention" }
      },
      forceMap: {
        badge: "Live Coverage",
        title: "Tactical Deployment Map",
        subtitle: "View our real-time Security Density across Pune.",
        zone: "Zone",
        activeGuards: "Active Units",
        avgResponseTime: "Avg. Response",
        industrialHub: "Industrial Hub"
      },
      services: {
        title: "Strategic Security Services",
        subtitle: "Comprehensive protection protocols for every vertical.",
        overview: "Overview",
        howItIsDone: "How It's Done",
        costEstimator: "Average Cost Estimator",
        requestQuote: "Request Formal Quote",
        corporate: { name: "Corporate Security", desc: "Premium protection for high-value office assets.", details: "On-site monitoring, executive protection, and fire safety systems.", cost: "₹45,000 / Site" },
        residential: { name: "Residential Security", desc: "Gated community and apartment complex safety.", details: "Visitor management, CCTV monitoring, and patrol checks.", cost: "₹38,000 / Node" },
        industrial: { name: "Industrial Security", desc: "Rugged asset protection for manufacturing units.", details: "Perimeter control, inventory safety, and night patrols.", cost: "₹55,000 / Sector" },
        event: { name: "Event Security", desc: "Dynamic crowd control and VIP safety.", details: "Tactical placement, entry screening, and quick response teams.", cost: "₹15,000 / Event" },
        executive: { name: "Executive Protection", desc: "Personal bodyguards for VIPs.", details: "Discreet close-range protection and travel security.", cost: "₹80k / Mo" },
        cyber: { name: "Cyber Intel", desc: "Digital perimeter defense.", details: "Network monitoring, encryption, and threat hunting.", cost: "Variable" }
      },
      roi: {
        title: "Tactical Quote",
        subtitle: "ROI Metrics & Force Calculation",
        description: "Calculate your force requirements based on asset class and threat level.",
        parameters: "Strategic Profile",
        assetClass: "Asset Classification",
        threatLevel: "Risk Assessment",
        coverageArea: "Operational Scale",
        perimeters: "Primary Perimeters",
        operational: "24/7 Operational HUD",
        additionalGuards: "Estimated Force Requirement",
        estMonthlyCost: "Estimated Tactical Investment",
        monthly: "Monthly",
        perDeployment: "Per Deployment",
        subjectToAudit: "Inclusive of basic training, surveillance integration & duty insurance",
        clearance: "Security Clearance",
        threatAssessment: "Threat Assessment",
        forceDeployment: "Force Deployment",
        roiMetrics: "ROI Metrics",
        coverage: "Coverage",
        incidents: "Incident Reduction",
        savings: "Estimated Savings",
        investment: "Investment",
        requestBtn: "Request Deployment",
        propOptions: { residential: "Residential", industrial: "Industrial", corporate: "Corporate", event: "Event" },
        threatOptions: { low: "Low Risk", medium: "Medium Risk", high: "High Risk" },
        shiftOptions: { "12": "12 Hour Shift", "24": "24/7 Command" }
      },
      trust: {
        badge: "Verified & Certified",
        title1: "Elite Security",
        title2: "Certifications",
        subtitle: "Internationally recognized standards ensuring absolute compliance.",
        clientsTitle1: "Trusted Across",
        clientsTitle2: "Sectors",
        clientsSubtitle: "Delivering uncompromising security to critical infrastructure.",
        verified: "Verified",
        certs: {
          iso: { name: "ISO 27001", desc: "Information Security" },
          psara: { name: "PSARA Licensed", desc: "Private Security" },
          gdpr: { name: "GDPR Compliant", desc: "Data Protection" },
          bsi: { name: "BSI Verified", desc: "Quality Standard" }
        },
        sectors: { techParks: "Tech Parks", industrial: "Industrial Zones", corporate: "Corporate Hubs", residential: "Residential Spaces", retail: "Retail Malls", logistics: "Logistics Centers" }
      },
      reviews: {
        title1: "What Our",
        title2: "Clients",
        subtitle: "Say",
        googleBadge: "Google Reviews",
        verified: "Based on verified Google Reviews",
        items: {
          r1: { name: "Rajesh Sharma", date: "2 weeks ago", text: "Exceptional service by TrueForce. Their guards are well-trained and extremely professional." },
          r2: { name: "Priya Deshmukh", date: "1 month ago", text: "We hired TrueForce for our residential society. The shift transitions are seamless." },
          r3: { name: "Amit Patil", date: "2 months ago", text: "Highly reliable security firm in Pune. Transparent pricing and no hidden fees." }
        }
      },
      commander: {
        chatTitle: "Commander AI",
        placeholder: "Message command...",
        quickActions: { quote: "Request Quote", coverage: "Check Coverage", human: "Speak to Human", jobs: "View Careers" },
        responses: {
          systemOnline: "SYSTEM ONLINE. I am the TrueForce Commander AI. How can I assist with your security perimeter today?",
          pricing: "Pricing depends on the threat level, operational hours, and required unit type. Standard guarding starts effectively at industry rates.",
          services: "We offer comprehensive operational dominance: Corporate Security, Residential Monitoring, Industrial/Manufacturing patrols, VIP Executive Protection, and elite Cybersecurity tracking.",
          location: "Our tactical network primarily secures major IT hubs, corporate parks, and high-value residential sectors in Pune and Maharashtra.",
          greeting: "Commander AI awaiting instructions. Identify your security requirements or ask me about our services.",
          human: "Connecting you to human command. You can reach our 24/7 Operations Center via the WhatsApp support button.",
          jobs: "We are always recruiting elite personnel. Please visit our Careers page to submit your application.",
          fallback: "Understood. Re-routing your request. For clearance on this specific inquiry, our human command operatives will need to intervene."
        }
      },
      verification: {
        activeGuard: "ACTIVE ELITE OPERATIVE",
        assigned: "Assigned To:",
        bgCheck: "Background Verification:",
        cleared: "CLEARED",
        psara: "PSARA Compliance:",
        completed: "COMPLETED",
        exp: "Tactical Experience:",
        verified: "Verified Tactical Audit"
      },
      common: {
        back: "Back to Command Center",
        email: "Email",
        share: "Share",
        download: "Download PDF",
        contact: "Contact",
        motto: "ELITE SECURITY SOLUTIONS",
        reference: "Reference",
        date: "Date",
        validity: "Valid for 15 Days from Issue Date",
        sqft: "Sq.Ft",
        entryPoints: "Entry Points",
        alertLevel: "Alert Level",
        hourCommandLoop: "Hour Active Command Loop",
        auditStatus: "Audit Status",
        commandNode: "Assigned Command Node",
        invoiceDisclaimer: "TrueForce Elite Security Audit. This document is a tactical recommendation based on user-provided parameters."
      },
      footer: { rights: "© 2026 TrueForce Strategic Services. All Rights Reserved." }
    }
  },
  hi: {
    translation: {
      nav: { home: "होम", services: "सेवाएं", careers: "करियर", gallery: "गैलरी", contact: "संपर्क", bookConsult: "परामर्श बुक करें" },
      hero: {
        badge: "एलीट स्ट्रैटेजिक फोर्स",
        title1: "अटूट",
        title2: "सामरिक सुरक्षा",
        subtitle: "शहरी सुरक्षा और औद्योगिक प्रभुत्व के लिए अंतिम कमांड सेंटर।",
        activateBtn: "सुरक्षा सक्रिय करें",
        commandBtn: "कमांड कंट्रोल",
        online: "ऑपरेशनल नोड्स सक्रिय",
        rating: "4.9/5 ट्रस्ट स्कोर",
        isoVerified: "ISO 27001 सत्यापित",
        psaraLicensed: "PSARA लाइसेंस प्राप्त",
        threatLevel: "खतरे का स्तर: गंभीर",
        maxResponse: "2 मिनट प्रतिक्रिया",
        securityClearance: "सुरक्षा मंजूरी: अधिकतम",
        personnel: "कर्मी",
        responseTime: "प्रतिक्रिया समय",
        coverageArea: "कवरेज क्षेत्र",
        operational: "24/7 ऑपरेशनल HUD"
      },
      capabilities: {
        badge: "एलीट क्षमताएं",
        title1: "परिचालन",
        title2: "सर्वोच्चता",
        subtitle: "हम केवल निरीक्षण नहीं करते। हम उन्नत तकनीक और विशिष्ट मानव बलों के माध्यम से सुरक्षा परिधि की भविष्यवाणी करते हैं, बीच में रोकते हैं और पूरी तरह से प्रभुत्व रखते हैं।",
        ai: { title: "AI कमांड एकीकरण", desc: "वास्तविक समय निगरानी विश्लेषण हमारे केंद्रीकृत कमांड सर्वर में सीधे फीड हो रहा है।" },
        qrt: { title: "सामरिक QRT इकाइयाँ", desc: "चिह्नित इंटरसेप्टर वाहनों में तैनात एलीट क्विक रिस्पांस टीमें।" },
        intel: { title: "वर्गीकृत इंटेल कोर", desc: "मालिकाना शहरी जोखिम-मानचित्रण एल्गोरिदम भविष्य कहनेवाला सुरक्षा मॉडल प्रदान करते हैं।" },
        biometric: { title: "बायोमेट्रिक बल सत्यापन", desc: "सैन्य-ग्रेड पृष्ठभूमि जांच के माध्यम से प्रत्येक कार्यात्मक को कड़ाई से सत्यापित किया जाता है।" }
      },
      partners: {
        badge: "उद्योग के नेताओं द्वारा विश्वसनीय",
        title1: "सुरक्षा",
        title2: "भारत के बेहतरीन",
        subtitle: "आईटी, विनिर्माण, फार्मा और बुनियादी ढांचा क्षेत्रों में अग्रणी उद्यमों द्वारा विश्वसनीय।",
        stats: { clients: "सक्रिय ग्राहक", partners: "एंटरप्राइज पार्टनर", years: "विश्वास के वर्ष", retention: "ग्राहक प्रतिधारण" }
      },
      forceMap: {
        badge: "लाइव कवरेज",
        title: "सामरिक तैनाती मानचित्र",
        subtitle: "पुणे में हमारे वास्तविक समय के सुरक्षा घनत्व को देखें।",
        zone: "क्षेत्र",
        activeGuards: "सक्रिय इकाइयाँ",
        avgResponseTime: "औसत प्रतिक्रिया",
        industrialHub: "औद्योगिक केंद्र"
      },
      services: {
        title: "रणनीतिक सुरक्षा सेवाएं",
        subtitle: "प्रत्येक वर्टिकल के लिए व्यापक सुरक्षा प्रोटोकॉल।",
        overview: "अवलोकन",
        howItIsDone: "यह कैसे किया जाता है",
        costEstimator: "औसत लागत अनुमानक",
        requestQuote: "औपचारिक उद्धरण का अनुरोध करें",
        corporate: { name: "कॉर्पोरेट सुरक्षा", desc: "उच्च मूल्य वाली कार्यालय संपत्तियों के लिए प्रीमियम सुरक्षा।", details: "ऑन-साइट निगरानी, कार्यकारी सुरक्षा और अग्नि सुरक्षा प्रणाली।", cost: "₹45,000 / साइट" },
        residential: { name: "आवासीय सुरक्षा", desc: "गेटेड समुदाय और अपार्टमेंट परिसर की सुरक्षा।", details: "आगंतुक प्रबंधन, सीसीटीवी निगरानी और गश्ती दल।", cost: "₹38,000 / नोड" },
        industrial: { name: "औद्योगिक सुरक्षा", desc: "विनिर्माण इकाइयों के लिए सुरक्षा।", details: "परिधि नियंत्रण, सूची सुरक्षा और रात की गश्त।", cost: "₹55,000 / सेक्टर" },
        event: { name: "इवेंट सुरक्षा", desc: "गतिशील भीड़ नियंत्रण और वीआईपी सुरक्षा।", details: "रणनीतिक प्लेसमेंट, प्रवेश स्क्रीनिंग और त्वरित प्रतिक्रिया टीमें।", cost: "₹15,000 / इवेंट" },
        executive: { name: "कार्यकारी सुरक्षा", desc: "वीआईपी के लिए व्यक्तिगत सुरक्षा गार्ड।", details: "सतर्क सुरक्षा और यात्रा सुरक्षा।", cost: "₹80k / महीना" },
        cyber: { name: "साइबर इंटेल", desc: "डिजिटल परिधि रक्षा।", details: "नेटवर्क निगरानी, एन्क्रिप्शन और सुरक्षा जांच।", cost: "परिवर्तनीय" }
      },
      roi: {
        title: "सामरिक उद्धरण",
        subtitle: "ROI मेट्रिक्स और बल गणना",
        description: "संपत्ति वर्ग और खतरे के स्तर के आधार पर अपनी बल आवश्यकताओं की गणना करें।",
        parameters: "रणनीतिक प्रोफ़ाइल",
        assetClass: "संपत्ति वर्गीकरण",
        threatLevel: "जोखिम मूल्यांकन",
        coverageArea: "परिचालन पैमाना",
        perimeters: "प्राथमिक परिधि",
        operational: "24/7 परिचालन HUD",
        additionalGuards: "अनुमानित बल की आवश्यकता",
        estMonthlyCost: "अनुमानित सामरिक निवेश",
        monthly: "मासिक",
        perDeployment: "तैनाती के अनुसार",
        subjectToAudit: "बुनियादी प्रशिक्षण, निगरानी एकीकरण और कर्तव्य बीमा शामिल है",
        clearance: "सुरक्षा निकासी",
        threatAssessment: "खतरे का आकलन",
        forceDeployment: "बल तैनाती",
        roiMetrics: "ROI मेट्रिक्स",
        coverage: "कवरेज",
        incidents: "घटना में कमी",
        savings: "अनुमानित बचत",
        investment: "निवेश",
        requestBtn: "तैनाती का अनुरोध करें",
        propOptions: { residential: "आवासीय", industrial: "औद्योगिक", corporate: "कॉर्पोरेट", event: "इवेंट" },
        threatOptions: { low: "कम जोखिम", medium: "मध्यम जोखिम", high: "उच्च जोखिम" },
        shiftOptions: { "12": "12 घंटे की शिफ्ट", "24": "24/7 कमांड" }
      },
      trust: {
        badge: "सत्यापित और प्रमाणित",
        title1: "एलीट सुरक्षा",
        title2: "प्रमाणपत्र",
        subtitle: "पूर्ण अनुपालन सुनिश्चित करने वाले अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त मानक।",
        clientsTitle1: "भरोसेमंद",
        clientsTitle2: "सेक्टर",
        clientsSubtitle: "महत्वपूर्ण बुनियादी ढांचे को सुरक्षा प्रदान करना।",
        verified: "सत्यापित",
        certs: {
          iso: { name: "ISO 27001", desc: "सूचना सुरक्षा" },
          psara: { name: "PSARA लाइसेंस प्राप्त", desc: "निजी सुरक्षा" },
          gdpr: { name: "GDPR अनुपालन", desc: "डेटा संरक्षण" },
          bsi: { name: "BSI सत्यापित", desc: "गुणवत्ता मानक" }
        },
        sectors: { techParks: "टेक पार्क", industrial: "औद्योगिक क्षेत्र", corporate: "कॉर्पोरेट हब", residential: "आवासीय स्थान", retail: "रिटेल मॉल", logistics: "लॉजिस्टिक्स केंद्र" }
      },
      reviews: {
        title1: "हमारे ग्राहक",
        title2: "क्या",
        subtitle: "कहते हैं",
        googleBadge: "गूगल समीक्षा",
        verified: "सत्यापित गूगल समीक्षाओं के आधार पर",
        items: {
          r1: { name: "राजेश शर्मा", date: "2 सप्ताह पहले", text: "ट्रूफोर्स द्वारा असाधारण सेवा। उनके गार्ड अच्छी तरह से प्रशिक्षित और बेहद पेशेवर हैं।" },
          r2: { name: "प्रिया देशमुख", date: "1 महीना पहले", text: "हमने अपनी सोसायटी के लिए ट्रूफोर्स को काम पर रखा है। शिफ्ट परिवर्तन निर्बाध हैं।" },
          r3: { name: "अमित पाटिल", date: "2 महीने पहले", text: "पुणे में अत्यधिक विश्वसनीय सुरक्षा फर्म। पारदर्शी मूल्य निर्धारण।" }
        }
      },
      commander: {
        chatTitle: "कमांडर AI",
        placeholder: "संदेश कमांड...",
        quickActions: { quote: "उद्धरण मांगें", coverage: "कवरेज देखें", human: "बात करें", jobs: "करियर" },
        responses: {
          systemOnline: "सिस्टम ऑनलाइन। मैं ट्रूफोर्स कमांडर AI हूं। मैं आज आपकी सुरक्षा परिधि में कैसे सहायता कर सकता हूं?",
          pricing: "मूल्य निर्धारण खतरे के स्तर और परिचालन घंटों पर निर्भर करता है।",
          services: "हम कॉर्पोरेट सुरक्षा, आवासीय निगरानी और औद्योगिक गश्त प्रदान करते हैं।",
          location: "हमारा नेटवर्क मुख्य रूप से पुणे और महाराष्ट्र के प्रमुख केंद्रों को सुरक्षित करता है।",
          greeting: "कमांडर AI निर्देशों की प्रतीक्षा कर रहा है। अपनी सुरक्षा आवश्यकताओं की पहचान करें।",
          human: "आपको मानव कमांड से जोड़ रहा हूं। आप व्हाट्सएप के माध्यम से हमसे संपर्क कर सकते हैं।",
          jobs: "हम हमेशा कर्मियों की भर्ती कर रहे हैं। कृपया आवेदन करने के लिए पेज देखें।",
          fallback: "समझ गया। आपके अनुरोध को री-रूट कर रहा हूं।"
        }
      },
      verification: {
        activeGuard: "सक्रिय एलीट ऑपरेटिव",
        assigned: "सौंपा गया:",
        bgCheck: "पृष्ठभूमि सत्यापन:",
        cleared: "साफ़",
        psara: "PSARA अनुपालन:",
        completed: "पूरा",
        exp: "सामरिक अनुभव:",
        verified: "सत्यापित सामरिक ऑडिट"
      },
      common: {
        back: "कमांड सेंटर पर वापस",
        email: "ईमेल",
        share: "साझा करें",
        download: "PDF डाउनलोड करें",
        contact: "संपर्क",
        motto: "एलीट सुरक्षा समाधान",
        reference: "संदर्भ",
        date: "तारीख",
        validity: "जारी करने की तारीख से 15 दिनों के लिए वैध",
        sqft: "वर्ग फुट",
        entryPoints: "प्रवेश द्वार",
        alertLevel: "सतर्क स्तर",
        hourCommandLoop: "घंटे सक्रिय कमांड लूप",
        auditStatus: "ऑडिट स्थिति",
        commandNode: "सौंपा गया कमांड नोड",
        invoiceDisclaimer: "यह दस्तावेज़ उपयोगकर्ता द्वारा प्रदान किए गए मापदंडों के आधार पर एक सामरिक सिफारिश है।"
      },
      footer: { rights: "© 2026 ट्रूफोर्स स्ट्रैटेजिक सर्विसेज। सर्वाधिकार सुरक्षित।" }
    }
  },
  mr: {
    translation: {
      nav: { home: "होम", services: "सेवा", careers: "करीअर", gallery: "गॅलरी", contact: "संपर्क", bookConsult: "सल्ला बुक करा" },
      hero: {
        badge: "एलिट स्ट्रॅटेजिक फोर्स",
        title1: "अतूट",
        title2: "सामरिक सुरक्षा",
        subtitle: "शहरी सुरक्षा आणि औद्योगिक वर्चस्वासाठी अंतिम कमांड सेंटर।",
        activateBtn: "सुरक्षा सक्रिय करा",
        commandBtn: "कमांड कंट्रोल",
        online: "ऑपरेशनल नोड्स सक्रिय",
        rating: "4.9/5 ट्रस्ट स्कोर",
        isoVerified: "ISO 27001 सत्यापित",
        psaraLicensed: "PSARA परवानाकृत",
        threatLevel: "धोका पातळी: गंभीर",
        maxResponse: "2 मिनिट प्रतिसाद",
        securityClearance: "सुरक्षा क्लिअरन्स: कमाल",
        personnel: "कर्मचारी",
        responseTime: "प्रतिसाद वेळ",
        coverageArea: "कवरेज क्षेत्र",
        operational: "24/7 ऑपरेशनल HUD"
      },
      capabilities: {
        badge: "एलिट क्षमता",
        title1: "कार्यात्मक",
        title2: "सर्वोच्चता",
        subtitle: "आम्ही फक्त निरीक्षण करत नाही. आम्ही प्रगत तंत्रज्ञान आणि एलिट मानवी दलांच्या माध्यमातून सुरक्षा परिमितीची भविष्यवाणी करतो, अडवतो आणि पूर्णपणे वर्चस्व गाजवतो।",
        ai: { title: "AI कमांड एकत्रीकरण", desc: "रिअल-टाइम देखरेख विश्लेषण थेट आमच्या कमांड सर्व्हरमध्ये फीड केले जाते।" },
        qrt: { title: "सामरिक QRT युनिट्स", desc: "चिन्हांकित इंटरसेप्टर वाहनांमध्ये तैनात एलिट क्विक रिस्पॉन्स टीम्स।" },
        intel: { title: "वर्गीकृत इंटेल कोर", desc: "शहरी जोखीम-मॅपिंग अल्गोरिदम सुरक्षा मॉडेल प्रदान करतात।" },
        biometric: { title: "बायोमेट्रिक फोर्स पडताळणी", desc: "प्रत्येक ऑपरेटिव्ह मिलिटरी-ग्रेड पार्श्वभूमी तपासणीद्वारे पडताळला जातो।" }
      },
      partners: {
        badge: "उद्योगातील नेत्यांकडून विश्वसनीय",
        title1: "रक्षण",
        title2: "भारतातील सर्वोत्तम",
        subtitle: "आयटी, उत्पादन, फार्मा आणि पायाभूत सुविधा क्षेत्रातील अग्रणी उद्योगांद्वारे विश्वसनीय।",
        stats: { clients: "सक्रिय ग्राहक", partners: "एंटरप्राइझ भागीदार", years: "विश्वासाची वर्षे", retention: "ग्राहक टिकवून ठेवणे" }
      },
      forceMap: {
        badge: "थेट कव्हरेज",
        title: "सामरिक तैनात नकाशा",
        subtitle: "पुणे येथील आमची रिअल-टाइम सुरक्षा घनता पहा।",
        zone: "झोन",
        activeGuards: "सक्रिय युनिट्स",
        avgResponseTime: "सरासरी प्रतिसाद",
        industrialHub: "औद्योगिक केंद्र"
      },
      services: {
        title: "धोरणात्मक सुरक्षा सेवा",
        subtitle: "प्रत्येक वर्टिकलसाठी सर्वसमावेशक सुरक्षा प्रोटोकॉल।",
        overview: "आढावा",
        howItIsDone: "हे कसे केले जाते",
        costEstimator: "सरासरी खर्च अंदाज",
        requestQuote: "औपचारिक कोटची विनंती करा",
        corporate: { name: "कॉर्पोरेट सुरक्षा", desc: "उच्च-मूल्य असलेल्या कार्यालयीन मालमत्तांसाठी संरक्षण।", details: "साइटवर देखरेख, कार्यकारी संरक्षण आणि अग्नि सुरक्षा प्रणाली।", cost: "₹45,000 / साइट" },
        residential: { name: "आवासीय सुरक्षा", desc: "सोसायटी आणि अपार्टमेंट कॉम्प्लेक्सची सुरक्षितता।", details: "अभ्यागत व्यवस्थापन, सीसीटीव्ही देखरेख आणि गस्त।", cost: "₹38,000 / नोड" }
      },
      roi: {
        title: "सामरिक कोट",
        subtitle: "ROI मेट्रिक्स आणि फोर्स गणना",
        description: "तुमच्या मालमत्तेनुसार आणि धोक्याच्या पातळीनुसार सुरक्षा दलाची गणना करा।",
        parameters: "धोरणात्मक प्रोफाइल",
        assetClass: "मालमत्ता वर्गीकरण",
        threatLevel: "जोखीम मूल्यांकन",
        coverageArea: "परिचालन प्रमाण",
        perimeters: "प्राथमिक परिमिती",
        operational: "24/7 परिचालन HUD",
        additionalGuards: "अंदाजित फोर्स आवश्यकता",
        estMonthlyCost: "अंदाजित सामरिक गुंतवणूक",
        monthly: "मासिक",
        perDeployment: "तैनातीनुसार",
        subjectToAudit: "प्रशिक्षण, देखरेख आणि विमा समाविष्ट आहे",
        clearance: "सुरक्षा क्लिअरन्स",
        threatAssessment: "धोका मूल्यांकन",
        forceDeployment: "फोर्स तैनाती",
        roiMetrics: "ROI मेट्रिक्स",
        coverage: "कव्हरेज",
        incidents: "घटनांमध्ये घट",
        savings: "अंदाजित बचत",
        investment: "गुंतवणूक",
        requestBtn: "तैनातीची विनंती करा",
        propOptions: { residential: "आवासीय", industrial: "औद्योगिक", corporate: "कॉर्पोरेट", event: "इव्हेंट" },
        threatOptions: { low: "कमी धोका", medium: "मध्यम धोका", high: "उच्च धोका" },
        shiftOptions: { "12": "12 तास शिफ्ट", "24": "24/7 कमांड" }
      },
      trust: {
        badge: "सत्यापित आणि प्रमाणित",
        title1: "एलिट सुरक्षा",
        title2: "प्रमाणपत्रे",
        subtitle: "आंतरराष्ट्रीय स्तरावर मान्यताप्राप्त मानके।",
        clientsTitle1: "विश्वासार्ह",
        clientsTitle2: "सेक्टर",
        clientsSubtitle: "महत्वपूर्ण पायाभूत सुविधांना सुरक्षा प्रदान करणे।",
        verified: "सत्यापित",
        certs: {
          iso: { name: "ISO 27001", desc: "माहिती सुरक्षा" },
          psara: { name: "PSARA परवानाकृत", desc: "खाजगी सुरक्षा" },
          gdpr: { name: "GDPR सुसंगत", desc: "डेटा संरक्षण" },
          bsi: { name: "BSI सत्यापित", desc: "गुणवत्ता मानक" }
        },
        sectors: { techParks: "टेक पार्क", industrial: "औद्योगिक क्षेत्र", corporate: "कॉर्पोरेट हब", residential: "रहिवासी जागा", retail: "रिटेल मॉल्स", logistics: "लॉजिस्टिक्स केंद्रे" }
      },
      reviews: {
        title1: "आमचे ग्राहक",
        title2: "काय",
        subtitle: "म्हणतात",
        googleBadge: "गुगल रिव्ह्यू",
        verified: "आधारित सत्यापित गुगल रिव्ह्यूजवर",
        items: {
          r1: { name: "राजेश शर्मा", date: "2 आठवड्यांपूर्वी", text: "ट्रूफोर्सची उत्कृष्ट सेवा. गार्ड प्रशिक्षित आणि अत्यंत व्यावसायिक आहेत।" },
          r2: { name: "प्रिया देशमुख", date: "1 महिन्यापूर्वी", text: "आम्ही आमच्या सोसायटीसाठी ट्रूफोर्सची निवड केली आहे। त्यांची सेवा उत्तम आहे।" },
          r3: { name: "अमित पाटील", date: "2 महिन्यांपूर्वी", text: "पुण्यातील विश्वसनीय सुरक्षा फर्म।" }
        }
      },
      commander: {
        chatTitle: "कमांडर AI",
        placeholder: "संदेश कमांड...",
        quickActions: { quote: "कोट विनंती", coverage: "कव्हरेज तपासा", human: "माणसाशी बोला", jobs: "करीअर पहा" },
        responses: { systemOnline: "सिस्टम ऑनलाइन. मी ट्रूफोर्स कमांडर AI आहे. मी आज तुम्हाला कशी मदत करू शकतो?" }
      },
      verification: {
        activeGuard: "सक्रिय एलिट ऑपरेटिव्ह",
        assigned: "सोपविले आहे:",
        bgCheck: "पार्श्वभूमी पडताळणी:",
        cleared: "क्लियर",
        psara: "PSARA अनुपालन:",
        completed: "पूर्ण",
        exp: "सामरिक अनुभव:",
        verified: "सत्यापित सामरिक ऑडिट"
      },
      common: {
        back: "कमांड सेंटरकडे परत",
        email: "ईमेल",
        share: "शेअर करा",
        download: "PDF डाउनलोड करा",
        contact: "संपर्क",
        motto: "एलिट सुरक्षा सोल्यूशन्स",
        reference: "संदर्भ",
        date: "तारीख",
        validity: "जारी केल्यापासून 15 दिवस वैध",
        sqft: "स्क्वेअर फूट",
        entryPoints: "प्रवेश बिंदू",
        alertLevel: "अलर्ट पातळी",
        hourCommandLoop: "तास सक्रिय कमांड लूप",
        auditStatus: "ऑडिट स्थिती",
        commandNode: "सोपवलेले कमांड नोड",
        invoiceDisclaimer: "हा दस्तऐवज वापरकर्त्याने दिलेल्या माहितीवर आधारित एक शिफारस आहे।"
      },
      footer: { rights: "© 2026 ट्रूफोर्स स्ट्रॅटेजिक सर्व्हिसेस. सर्व हक्क राखीव।" }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
"""

with open('src/i18n.js', 'w', encoding='utf-8') as f:
    f.write(i18n_content)
print("Successfully written complete translations to i18n.js")
