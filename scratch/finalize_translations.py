import json
import os

# Full Dictionary
final_resources = {
    "en": {
        "translation": {
            "nav": { "home": "Home", "services": "Services", "careers": "Careers", "gallery": "Gallery", "contact": "Contact", "bookConsult": "Book Consultation" },
            "mobileSticky": { "callNow": "Call Now", "sos": "SOS" },
            "hero": {
                "badge": "Elite Strategic Force",
                "title1": "Uncompromising",
                "title2": "Tactical Security",
                "subtitle": "The ultimate command center for urban protection and industrial dominance.",
                "activateBtn": "Activate Defense",
                "commandBtn": "Command Control",
                "online": "Operational Nodes Active",
                "rating": "4.9/5 Trust Score",
                "isoVerified": "ISO 27001 VERIFIED",
                "psaraLicensed": "PSARA LICENSED",
                "threatLevel": "THREAT LEVEL: CRITICAL",
                "maxResponse": "2 MIN RESPONSE",
                "securityClearance": "SECURITY CLEARANCE: MAXIMUM",
                "personnel": "Personnel",
                "responseTime": "Response Time",
                "coverageArea": "Coverage Area",
                "operational": "24/7 Operational HUD"
            },
            "capabilities": {
                "badge": "Elite Capabilities",
                "title1": "Operational",
                "title2": "Supremacy",
                "subtitle": "We don't just observe. We predict, intercept, and absolutely dominate the security perimeter through advanced technology and elite human forces.",
                "ai": { "title": "AI Command Integration", "desc": "Real-time surveillance analytics feeding directly into our centralized command servers." },
                "qrt": { "title": "Tactical QRT Units", "desc": "Elite Quick Response Teams deployed in marked interceptor vehicles." },
                "intel": { "title": "Classified Intel Core", "desc": "Proprietary urban risk-mapping algorithms providing predictive security models." },
                "biometric": { "title": "Biometric Force Verification", "desc": "Every operative is rigorously verified through military-grade background checks." }
            },
            "partners": {
                "badge": "Trusted By Industry Leaders",
                "title1": "Protecting",
                "title2": "India's Finest",
                "subtitle": "Trusted by leading enterprises across IT, manufacturing, pharma, and infrastructure sectors.",
                "stats": { "clients": "Active Clients", "partners": "Enterprise Partners", "years": "Years of Trust", "retention": "Client Retention" }
            },
            "forceMap": {
                "badge": "Live Coverage",
                "title": "Tactical Deployment Map",
                "subtitle": "View our real-time Security Density across Pune.",
                "zone": "Zone",
                "activeGuards": "Active Units",
                "avgResponseTime": "Avg. Response",
                "industrialHub": "Industrial Hub"
            },
            "services": {
                "title": "Strategic Security Services",
                "subtitle": "Comprehensive protection protocols for every vertical.",
                "overview": "Overview",
                "howItIsDone": "How It's Done",
                "costEstimator": "Average Cost Estimator",
                "requestQuote": "Request Formal Quote",
                "corporate": { "name": "Corporate Security", "desc": "Premium protection for high-value office assets.", "details": "On-site monitoring, executive protection, and fire safety systems.", "cost": "₹45,000 / Site" },
                "residential": { "name": "Residential Security", "desc": "Gated community and apartment complex safety.", "details": "Visitor management, CCTV monitoring, and patrol checks.", "cost": "₹38,000 / Node" },
                "industrial": { "name": "Industrial Security", "desc": "Rugged asset protection for manufacturing units.", "details": "Perimeter control, inventory safety, and night patrols.", "cost": "₹55,000 / Sector" },
                "event": { "name": "Event Security", "desc": "Dynamic crowd control and VIP safety.", "details": "Tactical placement, entry screening, and quick response teams.", "cost": "₹15,000 / Event" },
                "executive": { "name": "Executive Protection", "desc": "Personal bodyguards for VIPs.", "details": "Discreet close-range protection and travel security.", "cost": "₹80k / Mo" },
                "cyber": { "name": "Cyber Intel", "desc": "Digital perimeter defense.", "details": "Network monitoring, encryption, and threat hunting.", "cost": "Variable" }
            },
            "roi": {
                "title": "Tactical Quote",
                "subtitle": "ROI Metrics & Force Calculation",
                "description": "Calculate your force requirements based on asset class and threat level.",
                "parameters": "Strategic Profile",
                "assetClass": "Asset Classification",
                "threatLevel": "Risk Assessment",
                "coverageArea": "Operational Scale",
                "perimeters": "Primary Perimeters",
                "operational": "24/7 Operational HUD",
                "additionalGuards": "Estimated Force Requirement",
                "estMonthlyCost": "Estimated Tactical Investment",
                "monthly": "Monthly",
                "perDeployment": "Per Deployment",
                "subjectToAudit": "Inclusive of basic training, surveillance integration & duty insurance",
                "clearance": "Security Clearance",
                "threatAssessment": "Threat Assessment",
                "forceDeployment": "Force Deployment",
                "roiMetrics": "ROI Metrics",
                "coverage": "Coverage",
                "incidents": "Incident Reduction",
                "savings": "Estimated Savings",
                "investment": "Investment",
                "requestBtn": "Request Deployment",
                "propOptions": { "residential": "Residential", "industrial": "Industrial", "corporate": "Corporate", "event": "Event" },
                "threatOptions": { "low": "Low Risk", "medium": "Medium Risk", "high": "High Risk" },
                "shiftOptions": { "12": "12 Hour Shift", "24": "24/7 Command" }
            },
            "trust": {
                "badge": "Verified & Certified",
                "title1": "Elite Security",
                "title2": "Certifications",
                "subtitle": "Internationally recognized standards ensuring absolute compliance.",
                "clientsTitle1": "Trusted Across",
                "clientsTitle2": "Sectors",
                "clientsSubtitle": "Delivering uncompromising security to critical infrastructure.",
                "verified": "Verified",
                "certs": {
                    "iso": { "name": "ISO 27001", "desc": "Information Security" },
                    "psara": { "name": "PSARA Licensed", "desc": "Private Security" },
                    "gdpr": { "name": "GDPR Compliant", "desc": "Data Protection" },
                    "bsi": { "name": "BSI Verified", "desc": "Quality Standard" }
                },
                "sectors": { "techParks": "Tech Parks", "industrial": "Industrial Zones", "corporate": "Corporate Hubs", "residential": "Residential Spaces", "retail": "Retail Malls", "logistics": "Logistics Centers" }
            },
            "reviews": {
                "title1": "What Our",
                "title2": "Clients",
                "subtitle": "Say",
                "googleBadge": "Google Reviews",
                "verified": "Based on verified Google Reviews",
                "items": {
                    "r1": { "name": "Rajesh Sharma", "date": "2 weeks ago", "text": "Exceptional service by TrueForce. Their guards are well-trained and extremely professional." },
                    "r2": { "name": "Priya Deshmukh", "date": "1 month ago", "text": "We hired TrueForce for our residential society. The shift transitions are seamless." },
                    "r3": { "name": "Amit Patil", "date": "2 months ago", "text": "Highly reliable security firm in Pune. Transparent pricing and no hidden fees." }
                }
            },
            "commander": {
                "chatTitle": "Commander AI",
                "placeholder": "Message command...",
                "quickActions": { "quote": "Request Quote", "coverage": "Check Coverage", "human": "Speak to Human", "jobs": "View Careers" },
                "responses": {
                    "systemOnline": "SYSTEM ONLINE. I am the TrueForce Commander AI. How can I assist with your security perimeter today?",
                    "pricing": "Pricing depends on the threat level, operational hours, and required unit type. Standard guarding starts effectively at industry rates.",
                    "services": "We offer comprehensive operational dominance: Corporate Security, Residential Monitoring, Industrial/Manufacturing patrols, VIP Executive Protection, and elite Cybersecurity tracking.",
                    "location": "Our tactical network primarily secures major IT hubs, corporate parks, and high-value residential sectors in Pune and Maharashtra.",
                    "greeting": "Commander AI awaiting instructions. Identify your security requirements or ask me about our services.",
                    "human": "Connecting you to human command. You can reach our 24/7 Operations Center via the WhatsApp support button.",
                    "jobs": "We are always recruiting elite personnel. Please visit our Careers page to submit your application.",
                    "fallback": "Understood. Re-routing your request. For clearance on this specific inquiry, our human command operatives will need to intervene."
                }
            },
            "verification": {
                "activeGuard": "ACTIVE ELITE OPERATIVE",
                "assigned": "Assigned To:",
                "bgCheck": "Background Verification:",
                "cleared": "CLEARED",
                "psara": "PSARA Compliance:",
                "completed": "COMPLETED",
                "exp": "Tactical Experience:",
                "verified": "Verified Tactical Audit"
            },
            "gallery": {
                "title": "Our Force in Action",
                "subtitle": "A glimpse into our real-time deployments, elite training, and command center.",
                "items": {
                    "c1": "Live Command Operations",
                    "c2": "Advanced CCTV Tracking",
                    "c3": "Tactical Response Teams",
                    "c4": "Cybersecurity Divisions",
                    "c5": "Asset Protection Vaults",
                    "c6": "Patrol Operations"
                }
            },
            "careers": {
                "title": "Join the ",
                "titleSpan": "Elite Force",
                "subtitle": "We are looking for dedicated professionals to join our tactical security network.",
                "applyBtn": "Apply Now",
                "backBtn": "Back to Careers",
                "fullName": "Full Name",
                "phoneNumber": "Phone Number",
                "experience": "Tactical Experience",
                "resume": "Resume / CV",
                "attach": "Attach Document",
                "maxSize": "PDF or DOCX (Max 5MB)",
                "submitBtn": "Submit Application",
                "successTitle": "Intelligence Received",
                "successMsg": "Our recruitment command will review your file and contact you shortly.",
                "appFor": "Application for:",
                "jobs": {
                    "guard": { "title": "Tactical Security Guard", "req": "Previous experience in security or defense. Strong physical readiness." },
                    "supervisor": { "title": "Operations Supervisor", "req": "Leadership experience in security management. Tactical coordination skills." },
                    "vigilance": { "title": "Vigilance Officer", "req": "Experience in static monitoring and patrol logs. High attention to detail." }
                }
            },
            "common": {
                "back": "Back to Command Center",
                "email": "Email",
                "share": "Share",
                "download": "Download PDF",
                "contact": "Contact",
                "motto": "ELITE SECURITY SOLUTIONS",
                "reference": "Reference",
                "date": "Date",
                "validity": "Valid for 15 Days from Issue Date",
                "sqft": "Sq.Ft",
                "entryPoints": "Entry Points",
                "alertLevel": "Alert Level",
                "hourCommandLoop": "Hour Active Command Loop",
                "auditStatus": "Audit Status",
                "commandNode": "Assigned Command Node",
                "invoiceDisclaimer": "TrueForce Elite Security Audit. This document is a tactical recommendation based on user-provided parameters."
            },
            "footer": { "rights": "© 2026 TrueForce Strategic Services. All Rights Reserved." }
        }
    },
    "hi": {
        "translation": {
            "nav": { "home": "होम", "services": "सेवाएं", "careers": "करियर", "gallery": "गैलरी", "contact": "संपर्क", "bookConsult": "परामर्श बुक करें" },
            "mobileSticky": { "callNow": "अभी कॉल करें", "sos": "आपातकालीन" },
            "hero": {
                "badge": "एलीट स्ट्रैटेजिक फोर्स",
                "title1": "अटूट",
                "title2": "सामरिक सुरक्षा",
                "subtitle": "शहरी सुरक्षा और औद्योगिक प्रभुत्व के लिए अंतिम कमांड सेंटर।",
                "activateBtn": "सुरक्षा सक्रिय करें",
                "commandBtn": "कमांड कंट्रोल",
                "online": "ऑपरेशनल नोड्स सक्रिय",
                "rating": "4.9/5 ट्रस्ट स्कोर",
                "isoVerified": "ISO 27001 सत्यापित",
                "psaraLicensed": "PSARA लाइसेंस प्राप्त",
                "threatLevel": "खतरे का स्तर: गंभीर",
                "maxResponse": "2 मिनट प्रतिक्रिया",
                "securityClearance": "सुरक्षा मंजूरी: अधिकतम",
                "personnel": "कर्मी",
                "responseTime": "प्रतिक्रिया समय",
                "coverageArea": "कवरेज क्षेत्र",
                "operational": "24/7 परिचालन HUD"
            },
            "capabilities": {
                "badge": "एलीट क्षमताएं",
                "title1": "परिचालन",
                "title2": "सर्वोच्चता",
                "subtitle": "हम केवल निरीक्षण नहीं करते। हम भविष्यवाणियां करते हैं और सुरक्षा परिधि पर पूर्ण प्रभुत्व रखते हैं।",
                "ai": { "title": "AI कमांड एकीकरण", "desc": "वास्तविक समय निगरानी विश्लेषण हमारे मुख्य सर्वर में फीड होता है।" },
                "qrt": { "title": "सामरिक QRT इकाइयाँ", "desc": "विशेष वाहनों में तैनात त्वरित प्रतिक्रिया दल।" },
                "intel": { "title": "वर्गीकृत इंटेल कोर", "desc": "शहरी जोखिम-मानचित्रण एल्गोरिदम।" },
                "biometric": { "title": "बायोमेट्रिक बल सत्यापन", "desc": "सैन्य-ग्रेड पृष्ठभूमि जांच के साथ सत्यापन।" }
            },
            "partners": {
                "badge": "प्रमुख लीडरों का भरोसा",
                "title1": "सुरक्षा करते हुए",
                "title2": "भारत के बेहतरीन",
                "subtitle": "IT, विनिर्माण और फार्मा क्षेत्रों के बड़े उद्योगों द्वारा विश्वसनीय।",
                "stats": { "clients": "सक्रिय ग्राहक", "partners": "पार्टनर", "years": "विश्वास के वर्ष", "retention": "ग्राहक प्रतिधारण" }
            },
            "forceMap": {
                "badge": "लाइव कवरेज",
                "title": "सामरिक तैनाती मानचित्र",
                "subtitle": "पुणे में हमारी रीयल-टाइम सुरक्षा घनत्व देखें।",
                "zone": "क्षेत्र",
                "activeGuards": "सक्रिय इकाइयाँ",
                "avgResponseTime": "औसत प्रतिक्रिया",
                "industrialHub": "औद्योगिक केंद्र"
            },
            "services": {
                "title": "रणनीतिक सुरक्षा सेवाएं",
                "subtitle": "प्रत्येक क्षेत्र के लिए व्यापक सुरक्षा प्रोटोकॉल।",
                "overview": "अवलोकन",
                "howItIsDone": "यह कैसे किया जाता है",
                "costEstimator": "लागत अनुमानक",
                "requestQuote": "उद्धरण मांगें",
                "corporate": { "name": "कॉर्पोरेट सुरक्षा", "desc": "कार्यालयों के लिए प्रीमियम सुरक्षा।", "details": "ऑन-साइट निगरानी और कार्यकारी सुरक्षा।", "cost": "₹45,000 / साइट" },
                "residential": { "name": "आवासीय सुरक्षा", "desc": "सोसायटी और अपार्टमेंट की सुरक्षा।", "details": "आगंतुक प्रबंधन और CCTV निगरानी।", "cost": "₹38,000 / नोड" },
                "industrial": { "name": "औद्योगिक सुरक्षा", "desc": "विनिर्माण इकाइयों के लिए सुरक्षा।", "details": "परिधि नियंत्रण और रात की गश्त।", "cost": "₹55,000 / सेक्टर" },
                "event": { "name": "इवेंट सुरक्षा", "desc": "भीड़ नियंत्रण और VIP सुरक्षा।", "details": "त्वरित प्रतिक्रिया टीमें।", "cost": "₹15,000 / इवेंट" },
                "executive": { "name": "कार्यकारी सुरक्षा", "desc": "VIP के लिए बॉडीगार्ड।", "details": "Discreet सुरक्षा और यात्रा सुरक्षा।", "cost": "₹80k / Mo" },
                "cyber": { "name": "साइबर इंटेल", "desc": "डिजिटल परिधि रक्षा।", "details": "नेटवर्क निगरानी और थ्रेट हंटिंग।", "cost": "परिवर्तनीय" }
            },
            "roi": {
                "title": "सामरिक उद्धरण",
                "subtitle": "ROI मेट्रिक्स",
                "description": "खतरे के स्तर के आधार पर अपनी बल आवश्यकताओं की गणना करें।",
                "parameters": "रणनीतिक प्रोफ़ाइल",
                "assetClass": "संपत्ति वर्गीकरण",
                "threatLevel": "जोखिम मूल्यांकन",
                "coverageArea": "परिचालन स्तर",
                "perimeters": "प्राथमिक परिधि",
                "operational": "24/7 परिचालन HUD",
                "additionalGuards": "अनुमानित बल आवश्यकता",
                "estMonthlyCost": "अनुमानित निवेश",
                "monthly": "मासिक",
                "perDeployment": "तैनाती के अनुसार",
                "subjectToAudit": "प्रशिक्षण, निगरानी और बीमा शामिल है",
                "clearance": "सुरक्षा मंजूरी",
                "threatAssessment": "खतरे का आकलन",
                "forceDeployment": "बल तैनाती",
                "roiMetrics": "ROI मेट्रिक्स",
                "coverage": "कवरेज",
                "incidents": "घटना में कमी",
                "savings": "अनुमानित बचत",
                "investment": "निवेश",
                "requestBtn": "तैनाती का अनुरोध करें",
                "propOptions": { "residential": "आवासीय", "industrial": "औद्योगिक", "corporate": "कॉर्पोरेट", "event": "इवेंट" },
                "threatOptions": { "low": "कम जोखिम", "medium": "मध्यम जोखिम", "high": "उच्च जोखिम" },
                "shiftOptions": { "12": "12 घंटे की शिफ्ट", "24": "24/7 कमांड" }
            },
            "trust": {
                "badge": "सत्यापित और प्रमाणित",
                "title1": "एलीट सुरक्षा",
                "title2": "प्रमाणपत्र",
                "subtitle": "अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त सुरक्षा मानक।",
                "clientsTitle1": "इन क्षेत्रों का",
                "clientsTitle2": "भरोसा",
                "clientsSubtitle": "महत्वपूर्ण बुनियादी ढांचे को सुरक्षा प्रदान करना।",
                "verified": "सत्यापित",
                "certs": {
                    "iso": { "name": "ISO 27001", "desc": "सूचना सुरक्षा" },
                    "psara": { "name": "PSARA लाइसेंस", "desc": "निजी सुरक्षा" },
                    "gdpr": { "name": "GDPR अनुपालन", "desc": "डेटा प्रोटेक्शन" },
                    "bsi": { "name": "BSI सत्यापित", "desc": "गुणवत्ता मानक" }
                },
                "sectors": { "techParks": "टेक पार्क", "industrial": "औद्योगिक क्षेत्र", "corporate": "कॉर्पोरेट हब", "residential": "आवासीय क्षेत्र", "retail": "रिटेल मॉल", "logistics": "लॉजिस्टिक्स केंद्र" }
            },
            "reviews": {
                "title1": "हमारे ग्राहक",
                "title2": "क्या",
                "subtitle": "कहते हैं",
                "googleBadge": "गूगल रिव्यु",
                "verified": "सत्यापित गूगल रिव्यु पर आधारित",
                "items": {
                    "r1": { "name": "राजेश शर्मा", "date": "2 सप्ताह पहले", "text": "असाधारण सेवा। गार्ड प्रशिक्षित और पेशेवर हैं।" },
                    "r2": { "name": "प्रिया देशमुख", "date": "1 महीना पहले", "text": "हमने अपनी सोसायटी के लिए चुना। सेवा बहुत अच्छी है।" },
                    "r3": { "name": "अमित पाटिल", "date": "2 महीने पहले", "text": "अत्यधिक विश्वसनीय सुरक्षा फर्म।" }
                }
            },
            "commander": {
                "chatTitle": "कमांडर AI",
                "placeholder": "संदेश कमांड...",
                "quickActions": { "quote": "उद्धरण", "coverage": "कवरेज", "human": "संपर्क", "jobs": "करियर" },
                "responses": {
                    "systemOnline": "सिस्टम ऑनलाइन। मैं कमांडर AI हूं। मैं आपकी कैसे मदद कर सकता हूं?",
                    "pricing": "मूल्य निर्धारण खतरे के स्तर पर निर्भर करता है।",
                    "services": "हम कॉर्पोरेट, आवासीय और औद्योगिक सुरक्षा प्रदान करते हैं।",
                    "location": "हम पुणे और महाराष्ट्र के प्रमुख क्षेत्रों में सक्रिय हैं।",
                    "greeting": "कमांडर AI निर्देशों की प्रतीक्षा कर रहा है।",
                    "human": "व्हाट्सएप के माध्यम से हमसे संपर्क करें।",
                    "jobs": "हमारी भर्ती चालू है। करियर पेज देखें।",
                    "fallback": "अनुरोध को आगे भेज रहा हूं।"
                }
            },
            "verification": {
                "activeGuard": "सक्रिय एलीट ऑपरेटिव",
                "assigned": "सौंपा गया:",
                "bgCheck": "बैकग्राउंड वेरिफिकेशन:",
                "cleared": "क्लियर",
                "psara": "PSARA अनुपालन:",
                "completed": "पूरा",
                "exp": "सामरिक अनुभव:",
                "verified": "सत्यापित ऑडिट"
            },
            "gallery": {
                "title": "हमारी फोर्स",
                "subtitle": "हमारी तैनाती, प्रशिक्षण और कमांड सेंटर की झलक।",
                "items": { "c1": "लाइव कमांड", "c2": "CCTV ट्रैकिंग", "c3": "रेस्पॉन्स टीम", "c4": "साइबर प्रभाग", "c5": "संपत्ति वॉल्ट", "c6": "गश्ती अभियान" }
            },
            "careers": {
                "title": "एलीट फोर्स ",
                "titleSpan": "जॉइन करें",
                "subtitle": "हम समर्पित पेशेवरों की तलाश कर रहे हैं।",
                "applyBtn": "अभी आवेदन करें",
                "backBtn": "पीछे जाएं",
                "fullName": "पूरा नाम",
                "phoneNumber": "फ़ोन नंबर",
                "experience": "सामरिक अनुभव",
                "resume": "बायोडेटा",
                "attach": "अटैच करें",
                "maxSize": "PDF (Max 5MB)",
                "submitBtn": "जमा करें",
                "successTitle": "जानकारी मिली",
                "successMsg": "हम जल्द ही आपसे संपर्क करेंगे।",
                "appFor": "पद:",
                "jobs": {
                    "guard": { "title": "सुरक्षा गार्ड", "req": "सुरक्षा क्षेत्र का अनुभव।" },
                    "supervisor": { "title": "ऑपरेशन्स सुपरवाइजर", "req": "नेतृत्व अनुभव।" },
                    "vigilance": { "title": "सतर्कता अधिकारी", "req": "निगरानी अनुभव।" }
                }
            },
            "common": {
                "back": "कमांड सेंटर पर वापस",
                "email": "ईमेल",
                "share": "शेयर करें",
                "download": "डाउनलोड PDF",
                "contact": "संपर्क",
                "motto": "एलीट सुरक्षा समाधान",
                "reference": "संदर्भ",
                "date": "तारीख",
                "validity": "15 दिनों के लिए वैध",
                "sqft": "वर्ग फुट",
                "entryPoints": "प्रवेश द्वार",
                "alertLevel": "सतर्क स्तर",
                "hourCommandLoop": "घंटे कमांड लूप",
                "auditStatus": "ऑडिट स्थिति",
                "commandNode": "कमांड नोड",
                "invoiceDisclaimer": "यह सामरिक सिफारिश है।"
            },
            "footer": { "rights": "© 2026 ट्रूफोर्स स्ट्रैटेजिक सर्विसेज। सर्वाधिकार सुरक्षित।" }
        }
    },
    "mr": {
        "translation": {
            "nav": { "home": "होम", "services": "सेवा", "careers": "करीअर", "gallery": "गॅलरी", "contact": "संपर्क", "bookConsult": "सल्ला बुक करा" },
            "mobileSticky": { "callNow": "आता कॉल करा", "sos": "आणीबाणी" },
            "hero": {
                "badge": "एलिट स्ट्रॅटेजिक फोर्स",
                "title1": "अतूट",
                "title2": "सामरिक सुरक्षा",
                "subtitle": "शहरी सुरक्षा आणि औद्योगिक वर्चस्वासाठी कमांड सेंटर।",
                "activateBtn": "सुरक्षा सक्रिय करा",
                "commandBtn": "कमांड कंट्रोल",
                "online": "ऑपरेशनल नोड्स सक्रिय",
                "rating": "4.9/5 ट्रस्ट स्कोर",
                "isoVerified": "ISO 27001 सत्यापित",
                "psaraLicensed": "PSARA परवानाकृत",
                "threatLevel": "धोका पातळी: गंभीर",
                "maxResponse": "2 मिनिट प्रतिसाद",
                "securityClearance": "सुरक्षा क्लिअरन्स: कमाल",
                "personnel": "कर्मचारी",
                "responseTime": "प्रतिसाद वेळ",
                "coverageArea": "कवरेज क्षेत्र",
                "operational": "24/7 ऑपरेशनल HUD"
            },
            "capabilities": {
                "badge": "एलिट क्षमता",
                "title1": "कार्यात्मक",
                "title2": "सर्वोच्चता",
                "subtitle": "आम्ही फक्त निरीक्षण करत नाही. आम्ही सुरक्षा परिक्षेत्रावर पूर्ण वर्चस्व गाजवतो।",
                "ai": { "title": "AI कमांड एकत्रीकरण", "desc": "रिअल-टाइम देखरेख विश्लेषण आमच्या सर्व्हरमध्ये फीड केले जाते।" },
                "qrt": { "title": "सामरिक QRT युनिट्स", "desc": "वाहनांमध्ये तैनात एलिट प्रतिसाद टीम्स।" },
                "intel": { "title": "इंटेल कोर", "desc": "जोखीम-मॅपिंग अल्गोरिदम।" },
                "biometric": { "title": "बायोमेट्रिक फोर्स पडताळणी", "desc": "पार्श्वभूमी तपासणीद्वारे पडताळणी।" }
            },
            "partners": {
                "badge": "उद्योगातील नेत्यांचा विश्वास",
                "title1": "संरक्षण",
                "title2": "भारतातील सर्वोत्तम",
                "subtitle": "IT, उत्पादन आणि पायाभूत सुविधा क्षेत्रातील अग्रणी उद्योगांद्वारे विश्वसनीय।",
                "stats": { "clients": "सक्रिय ग्राहक", "partners": "भागीदार", "years": "विश्वासाची वर्षे", "retention": "ग्राहक टिकवून ठेवणे" }
            },
            "forceMap": {
                "badge": "थेट कव्हरेज",
                "title": "सामरिक तैनात नकाशा",
                "subtitle": "पुणे येथील सुरक्षा घनता पहा।",
                "zone": "झोन",
                "activeGuards": "सक्रिय युनिट्स",
                "avgResponseTime": "प्रतिसाद वेळ",
                "industrialHub": "औद्योगिक केंद्र"
            },
            "services": {
                "title": "धोरणात्मक सुरक्षा सेवा",
                "subtitle": "प्रत्येक क्षेत्रासाठी सुरक्षा प्रोटोकॉल।",
                "overview": "आढावा",
                "howItIsDone": "हे कसे केले जाते",
                "costEstimator": "खर्च अंदाज",
                "requestQuote": "कोट विनंती करा",
                "corporate": { "name": "कॉर्पोरेट सुरक्षा", "desc": "कार्यालयांसाठी प्रीमियम संरक्षण।", "details": "कार्यकारी संरक्षण आणि अग्नि सुरक्षा।", "cost": "₹45,000 / साइट" },
                "residential": { "name": "आवासीय सुरक्षा", "desc": "सोसायटी सुरक्षितता।", "details": "अभ्यागत व्यवस्थापन आणि CCTV।", "cost": "₹38,000 / नोड" },
                "industrial": { "name": "औद्योगिक सुरक्षा", "desc": "उत्पादन युनिट्ससाठी सुरक्षा।", "details": "माल सुरक्षितता आणि रात्रीची गस्त।", "cost": "₹55,000 / सेक्टर" },
                "event": { "name": "इव्हेंट सुरक्षा", "desc": "गर्दी नियंत्रण।", "details": "प्रतिसाद टीम्स।", "cost": "₹15,000 / इव्हेंट" },
                "executive": { "name": "एक्झिक्युटिव्ह प्रोटेक्शन", "desc": "VIP बॉडीगार्ड।", "details": "प्रवास सुरक्षा।", "cost": "₹80k / Mo" },
                "cyber": { "name": "सायबर इंटेल", "desc": "डिजिटल सुरक्षा।", "details": "नेटवर्क देखरेख।", "cost": "Variable" }
            },
            "roi": {
                "title": "सामरिक कोट",
                "subtitle": "ROI मेट्रिक्स",
                "description": "सुरक्षा दलाची गणना करा।",
                "parameters": "धोरणात्मक प्रोफाइल",
                "assetClass": "मालमत्ता वर्गीकरण",
                "threatLevel": "जोखीम मूल्यांकन",
                "coverageArea": "परिचालन प्रमाण",
                "perimeters": "परिमिती",
                "operational": "24/7 परिचालन HUD",
                "additionalGuards": "फोर्स आवश्यकता",
                "estMonthlyCost": "गुंतवणूक",
                "monthly": "मासिक",
                "perDeployment": "तैनातीनुसार",
                "subjectToAudit": "प्रशिक्षण आणि विमा समाविष्ट",
                "clearance": "सुरक्षा क्लिअरन्स",
                "threatAssessment": "धोका मूल्यांकन",
                "forceDeployment": "फोर्स तैनाती",
                "roiMetrics": "ROI मेट्रिक्स",
                "coverage": "कव्हरेज",
                "incidents": "घटनेमध्ये घट",
                "savings": "अंदाजित बचत",
                "investment": "गुंतवणूक",
                "requestBtn": "विंनती करा",
                "propOptions": { "residential": "आवासीय", "industrial": "औद्योगिक", "corporate": "कॉर्पोरेट", "event": "इव्हेंट" },
                "threatOptions": { "low": "कमी धोका", "medium": "मध्यम धोका", "high": "उच्च धोका" },
                "shiftOptions": { "12": "12 तास शिफ्ट", "24": "24/7 कमांड" }
            },
            "trust": {
                "badge": "सत्यापित",
                "title1": "एलिट सुरक्षा",
                "title2": "प्रमाणपत्रे",
                "subtitle": "आंतरराष्ट्रीय मान्यताप्राप्त मानके।",
                "clientsTitle1": "क्षेत्रानुसार",
                "clientsTitle2": "विश्वास",
                "clientsSubtitle": "महत्वपूर्ण पायाभूत सुविधांना सुरक्षा।",
                "verified": "सत्यापित",
                "certs": {
                    "iso": { "name": "ISO 27001", "desc": "माहिती सुरक्षा" },
                    "psara": { "name": "PSARA परवाना", "desc": "खाजगी सुरक्षा" },
                    "gdpr": { "name": "GDPR सुसंगत", "desc": "डेटा संरक्षण" },
                    "bsi": { "name": "BSI सत्यापित", "desc": "गुणवत्ता मानक" }
                },
                "sectors": { "techParks": "टेक पार्क", "industrial": "औद्योगिक क्षेत्र", "corporate": "कॉर्पोरेट हब", "residential": "रहिवासी जागा", "retail": "रिटेल मॉल्स", "logistics": "लॉजिस्टिक्स" }
            },
            "reviews": {
                "title1": "आमचे ग्राहक",
                "title2": "काय",
                "subtitle": "म्हणतात",
                "googleBadge": "गुगल रिव्ह्यू",
                "verified": "गुगल रिव्ह्यूजवर आधारित",
                "items": {
                    "r1": { "name": "राजेश शर्मा", "date": "2 आठवड्यांपूर्वी", "text": "उत्कृष्ट सेवा. गार्ड अत्यंत व्यावसायिक आहेत।" },
                    "r2": { "name": "प्रिया देशमुख", "date": "1 महिन्यापूर्वी", "text": "आम्ही निवड केली. सेवा उत्तम आहे।" },
                    "r3": { "name": "अमित पाटील", "date": "2 महिन्यांपूर्वी", "text": "विश्वसनीय सुरक्षा फर्म।" }
                }
            },
            "commander": {
                "chatTitle": "कमांडर AI",
                "placeholder": "संदेश कमांड...",
                "quickActions": { "quote": "कोट", "coverage": "कव्हरेज", "human": "संपर्क", "jobs": "करीअर" },
                "responses": {
                    "systemOnline": "सिस्टम ऑनलाइन. मी कमांडर AI आहे. मी कशी मदत करू शकतो?",
                    "pricing": "धोका पातळीवर खर्च अवलंबून असतो।",
                    "services": "आम्ही कॉर्पोरेट, रहिवासी आणि औद्योगिक सुरक्षा देतो।",
                    "location": "आम्ही पुणे आणि महाराष्ट्रात सक्रिय आहोत।",
                    "greeting": "कमांडर AI सूचनांची वाट पाहत आहे।",
                    "human": "व्हॉट्सॲपवर संपर्क साधा।",
                    "jobs": "करीअर पेज पहा।",
                    "fallback": "विनंती पुढे पाठवत आहे।"
                }
            },
            "verification": {
                "activeGuard": "सक्रिय एलिट ऑपरेटिव्ह",
                "assigned": "सोपविले आहे:",
                "bgCheck": "पार्श्वभूमी पडताळणी:",
                "cleared": "क्लियर",
                "psara": "PSARA अनुपालन:",
                "completed": "पूर्ण",
                "exp": "सामरिक अनुभव:",
                "verified": "सत्यापित ऑडिट"
            },
            "gallery": {
                "title": "आमची फोर्स",
                "subtitle": "आमची तैनाती आणि कमांड सेंटरची झलक।",
                "items": { "c1": "थेट कमांड", "c2": "CCTV ट्रॅकिंग", "c3": "प्रतिसाद टीम्स", "c4": "सायबर विभाग", "c5": "मालमत्ता वॉल्ट", "c6": "गस्ती मोहिमा" }
            },
            "careers": {
                "title": "एलिट फोर्समध्ये ",
                "titleSpan": "सामील व्हा",
                "subtitle": "आम्ही व्यावसायिकांच्या शोधात आहोत।",
                "applyBtn": "अर्ज करा",
                "backBtn": "परत जा",
                "fullName": "नाव",
                "phoneNumber": "फोन नंबर",
                "experience": "सामरिक अनुभव",
                "resume": "बायोडेटा",
                "attach": "दस्तऐवज जोडा",
                "maxSize": "PDF (Max 5MB)",
                "submitBtn": "सादर करा",
                "successTitle": "माहिती मिळाली",
                "successMsg": "रिक्रूटमेंट टीम संपर्क साधेल।",
                "appFor": "च्या साठी अर्ज:",
                "jobs": {
                    "guard": { "title": "सुरक्षा रक्षक", "req": "मागील अनुभव।" },
                    "supervisor": { "title": "सुपरवाइजर", "req": "नेतृत्व अनुभव।" },
                    "vigilance": { "title": "सतर्कता अधिकारी", "req": "देखरेख अनुभव।" }
                }
            },
            "common": {
                "back": "कमांड सेंटरकडे परत",
                "email": "ईमेल",
                "share": "शेअर",
                "download": "PDF डाउनलोड",
                "contact": "संपर्क",
                "motto": "एलिट सुरक्षा सोल्यूशन्स",
                "reference": "संदर्भ",
                "date": "तारीख",
                "validity": "15 दिवस वैध",
                "sqft": "स्क्वेअर फूट",
                "entryPoints": "प्रवेश बिंदू",
                "alertLevel": "अलर्ट पातळी",
                "hourCommandLoop": "कमांड लूप",
                "auditStatus": "ऑडिट स्थिती",
                "commandNode": "कमांड नोड",
                "invoiceDisclaimer": "ही एक शिफारस आहे।"
            },
            "footer": { "rights": "© 2026 ट्रूफोर्स स्ट्रॅटेजिक सर्व्हिसेस. सर्व हक्क राखीव।" }
        }
    }
}

# Template
template = """import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = %s;

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

# JSON with ensure_ascii=True to escape non-ASCII characters
with open('src/i18n.js', 'w', encoding='utf-8') as f:
    f.write(template % json.dumps(final_resources, ensure_ascii=True, indent=2))
print("Successfully written ABSOLUTELY complete translations (with Unicode escapes) to i18n.js")
