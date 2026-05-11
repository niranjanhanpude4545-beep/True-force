import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  "en": {
    "translation": {
      "nav": {
        "home": "Home",
        "services": "Services",
        "careers": "Careers",
        "gallery": "Gallery",
        "contact": "Contact",
        "bookConsult": "Book Consultation"
      },
      "mobileSticky": {
        "callNow": "Call Now",
        "sos": "SOS"
      },
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
        "ai": {
          "title": "AI Command Integration",
          "desc": "Real-time surveillance analytics feeding directly into our centralized command servers."
        },
        "qrt": {
          "title": "Tactical QRT Units",
          "desc": "Elite Quick Response Teams deployed in marked interceptor vehicles."
        },
        "intel": {
          "title": "Classified Intel Core",
          "desc": "Proprietary urban risk-mapping algorithms providing predictive security models."
        },
        "biometric": {
          "title": "Biometric Force Verification",
          "desc": "Every operative is rigorously verified through military-grade background checks."
        }
      },
      "partners": {
        "badge": "Trusted By Industry Leaders",
        "title1": "Protecting",
        "title2": "India's Finest",
        "subtitle": "Trusted by leading enterprises across IT, manufacturing, pharma, and infrastructure sectors.",
        "stats": {
          "clients": "Active Clients",
          "partners": "Enterprise Partners",
          "years": "Years of Trust",
          "retention": "Client Retention"
        }
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
        "corporate": {
          "name": "Corporate Security",
          "desc": "Premium protection for high-value office assets.",
          "details": "On-site monitoring, executive protection, and fire safety systems.",
          "cost": "\u20b945,000 / Site"
        },
        "residential": {
          "name": "Residential Security",
          "desc": "Gated community and apartment complex safety.",
          "details": "Visitor management, CCTV monitoring, and patrol checks.",
          "cost": "\u20b938,000 / Node"
        },
        "industrial": {
          "name": "Industrial Security",
          "desc": "Rugged asset protection for manufacturing units.",
          "details": "Perimeter control, inventory safety, and night patrols.",
          "cost": "\u20b955,000 / Sector"
        },
        "event": {
          "name": "Event Security",
          "desc": "Dynamic crowd control and VIP safety.",
          "details": "Tactical placement, entry screening, and quick response teams.",
          "cost": "\u20b915,000 / Event"
        },
        "executive": {
          "name": "Executive Protection",
          "desc": "Personal bodyguards for VIPs.",
          "details": "Discreet close-range protection and travel security.",
          "cost": "\u20b980k / Mo"
        },
        "cyber": {
          "name": "Cyber Intel",
          "desc": "Digital perimeter defense.",
          "details": "Network monitoring, encryption, and threat hunting.",
          "cost": "Variable"
        }
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
        "propOptions": {
          "residential": "Residential",
          "industrial": "Industrial",
          "corporate": "Corporate",
          "event": "Event"
        },
        "threatOptions": {
          "low": "Low Risk",
          "medium": "Medium Risk",
          "high": "High Risk"
        },
        "shiftOptions": {
          "12": "12 Hour Shift",
          "24": "24/7 Command"
        }
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
          "iso": {
            "name": "ISO 27001",
            "desc": "Information Security"
          },
          "psara": {
            "name": "PSARA Licensed",
            "desc": "Private Security"
          },
          "gdpr": {
            "name": "GDPR Compliant",
            "desc": "Data Protection"
          },
          "bsi": {
            "name": "BSI Verified",
            "desc": "Quality Standard"
          }
        },
        "sectors": {
          "techParks": "Tech Parks",
          "industrial": "Industrial Zones",
          "corporate": "Corporate Hubs",
          "residential": "Residential Spaces",
          "retail": "Retail Malls",
          "logistics": "Logistics Centers"
        }
      },
      "reviews": {
        "title1": "What Our",
        "title2": "Clients",
        "subtitle": "Say",
        "googleBadge": "Google Reviews",
        "verified": "Based on verified Google Reviews",
        "items": {
          "r1": {
            "name": "Rajesh Sharma",
            "date": "2 weeks ago",
            "text": "Exceptional service by TrueForce. Their guards are well-trained and extremely professional."
          },
          "r2": {
            "name": "Priya Deshmukh",
            "date": "1 month ago",
            "text": "We hired TrueForce for our residential society. The shift transitions are seamless."
          },
          "r3": {
            "name": "Amit Patil",
            "date": "2 months ago",
            "text": "Highly reliable security firm in Pune. Transparent pricing and no hidden fees."
          }
        }
      },
      "commander": {
        "chatTitle": "Commander AI",
        "placeholder": "Message command...",
        "quickActions": {
          "quote": "Request Quote",
          "coverage": "Check Coverage",
          "human": "Speak to Human",
          "jobs": "View Careers"
        },
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
          "guard": {
            "title": "Tactical Security Guard",
            "req": "Previous experience in security or defense. Strong physical readiness."
          },
          "supervisor": {
            "title": "Operations Supervisor",
            "req": "Leadership experience in security management. Tactical coordination skills."
          },
          "vigilance": {
            "title": "Vigilance Officer",
            "req": "Experience in static monitoring and patrol logs. High attention to detail."
          }
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
      "footer": {
        "rights": "\u00a9 2026 TrueForce Strategic Services. All Rights Reserved."
      }
    }
  },
  "hi": {
    "translation": {
      "nav": {
        "home": "\u0939\u094b\u092e",
        "services": "\u0938\u0947\u0935\u093e\u090f\u0902",
        "careers": "\u0915\u0930\u093f\u092f\u0930",
        "gallery": "\u0917\u0948\u0932\u0930\u0940",
        "contact": "\u0938\u0902\u092a\u0930\u094d\u0915",
        "bookConsult": "\u092a\u0930\u093e\u092e\u0930\u094d\u0936 \u092c\u0941\u0915 \u0915\u0930\u0947\u0902"
      },
      "mobileSticky": {
        "callNow": "\u0905\u092d\u0940 \u0915\u0949\u0932 \u0915\u0930\u0947\u0902",
        "sos": "\u0906\u092a\u093e\u0924\u0915\u093e\u0932\u0940\u0928"
      },
      "hero": {
        "badge": "\u090f\u0932\u0940\u091f \u0938\u094d\u091f\u094d\u0930\u0948\u091f\u0947\u091c\u093f\u0915 \u092b\u094b\u0930\u094d\u0938",
        "title1": "\u0905\u091f\u0942\u091f",
        "title2": "\u0938\u093e\u092e\u0930\u093f\u0915 \u0938\u0941\u0930\u0915\u094d\u0937\u093e",
        "subtitle": "\u0936\u0939\u0930\u0940 \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0914\u0930 \u0914\u0926\u094d\u092f\u094b\u0917\u093f\u0915 \u092a\u094d\u0930\u092d\u0941\u0924\u094d\u0935 \u0915\u0947 \u0932\u093f\u090f \u0905\u0902\u0924\u093f\u092e \u0915\u092e\u093e\u0902\u0921 \u0938\u0947\u0902\u091f\u0930\u0964",
        "activateBtn": "\u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0938\u0915\u094d\u0930\u093f\u092f \u0915\u0930\u0947\u0902",
        "commandBtn": "\u0915\u092e\u093e\u0902\u0921 \u0915\u0902\u091f\u094d\u0930\u094b\u0932",
        "online": "\u0911\u092a\u0930\u0947\u0936\u0928\u0932 \u0928\u094b\u0921\u094d\u0938 \u0938\u0915\u094d\u0930\u093f\u092f",
        "rating": "4.9/5 \u091f\u094d\u0930\u0938\u094d\u091f \u0938\u094d\u0915\u094b\u0930",
        "isoVerified": "ISO 27001 \u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924",
        "psaraLicensed": "PSARA \u0932\u093e\u0907\u0938\u0947\u0902\u0938 \u092a\u094d\u0930\u093e\u092a\u094d\u0924",
        "threatLevel": "\u0916\u0924\u0930\u0947 \u0915\u093e \u0938\u094d\u0924\u0930: \u0917\u0902\u092d\u0940\u0930",
        "maxResponse": "2 \u092e\u093f\u0928\u091f \u092a\u094d\u0930\u0924\u093f\u0915\u094d\u0930\u093f\u092f\u093e",
        "securityClearance": "\u0938\u0941\u0930\u0915\u094d\u0937\u093e \u092e\u0902\u091c\u0942\u0930\u0940: \u0905\u0927\u093f\u0915\u0924\u092e",
        "personnel": "\u0915\u0930\u094d\u092e\u0940",
        "responseTime": "\u092a\u094d\u0930\u0924\u093f\u0915\u094d\u0930\u093f\u092f\u093e \u0938\u092e\u092f",
        "coverageArea": "\u0915\u0935\u0930\u0947\u091c \u0915\u094d\u0937\u0947\u0924\u094d\u0930",
        "operational": "24/7 \u092a\u0930\u093f\u091a\u093e\u0932\u0928 HUD"
      },
      "capabilities": {
        "badge": "\u090f\u0932\u0940\u091f \u0915\u094d\u0937\u092e\u0924\u093e\u090f\u0902",
        "title1": "\u092a\u0930\u093f\u091a\u093e\u0932\u0928",
        "title2": "\u0938\u0930\u094d\u0935\u094b\u091a\u094d\u091a\u0924\u093e",
        "subtitle": "\u0939\u092e \u0915\u0947\u0935\u0932 \u0928\u093f\u0930\u0940\u0915\u094d\u0937\u0923 \u0928\u0939\u0940\u0902 \u0915\u0930\u0924\u0947\u0964 \u0939\u092e \u092d\u0935\u093f\u0937\u094d\u092f\u0935\u093e\u0923\u093f\u092f\u093e\u0902 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902 \u0914\u0930 \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u092a\u0930\u093f\u0927\u093f \u092a\u0930 \u092a\u0942\u0930\u094d\u0923 \u092a\u094d\u0930\u092d\u0941\u0924\u094d\u0935 \u0930\u0916\u0924\u0947 \u0939\u0948\u0902\u0964",
        "ai": {
          "title": "AI \u0915\u092e\u093e\u0902\u0921 \u090f\u0915\u0940\u0915\u0930\u0923",
          "desc": "\u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u0938\u092e\u092f \u0928\u093f\u0917\u0930\u093e\u0928\u0940 \u0935\u093f\u0936\u094d\u0932\u0947\u0937\u0923 \u0939\u092e\u093e\u0930\u0947 \u092e\u0941\u0916\u094d\u092f \u0938\u0930\u094d\u0935\u0930 \u092e\u0947\u0902 \u092b\u0940\u0921 \u0939\u094b\u0924\u093e \u0939\u0948\u0964"
        },
        "qrt": {
          "title": "\u0938\u093e\u092e\u0930\u093f\u0915 QRT \u0907\u0915\u093e\u0907\u092f\u093e\u0901",
          "desc": "\u0935\u093f\u0936\u0947\u0937 \u0935\u093e\u0939\u0928\u094b\u0902 \u092e\u0947\u0902 \u0924\u0948\u0928\u093e\u0924 \u0924\u094d\u0935\u0930\u093f\u0924 \u092a\u094d\u0930\u0924\u093f\u0915\u094d\u0930\u093f\u092f\u093e \u0926\u0932\u0964"
        },
        "intel": {
          "title": "\u0935\u0930\u094d\u0917\u0940\u0915\u0943\u0924 \u0907\u0902\u091f\u0947\u0932 \u0915\u094b\u0930",
          "desc": "\u0936\u0939\u0930\u0940 \u091c\u094b\u0916\u093f\u092e-\u092e\u093e\u0928\u091a\u093f\u0924\u094d\u0930\u0923 \u090f\u0932\u094d\u0917\u094b\u0930\u093f\u0926\u092e\u0964"
        },
        "biometric": {
          "title": "\u092c\u093e\u092f\u094b\u092e\u0947\u091f\u094d\u0930\u093f\u0915 \u092c\u0932 \u0938\u0924\u094d\u092f\u093e\u092a\u0928",
          "desc": "\u0938\u0948\u0928\u094d\u092f-\u0917\u094d\u0930\u0947\u0921 \u092a\u0943\u0937\u094d\u0920\u092d\u0942\u092e\u093f \u091c\u093e\u0902\u091a \u0915\u0947 \u0938\u093e\u0925 \u0938\u0924\u094d\u092f\u093e\u092a\u0928\u0964"
        }
      },
      "partners": {
        "badge": "\u092a\u094d\u0930\u092e\u0941\u0916 \u0932\u0940\u0921\u0930\u094b\u0902 \u0915\u093e \u092d\u0930\u094b\u0938\u093e",
        "title1": "\u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0915\u0930\u0924\u0947 \u0939\u0941\u090f",
        "title2": "\u092d\u093e\u0930\u0924 \u0915\u0947 \u092c\u0947\u0939\u0924\u0930\u0940\u0928",
        "subtitle": "IT, \u0935\u093f\u0928\u093f\u0930\u094d\u092e\u093e\u0923 \u0914\u0930 \u092b\u093e\u0930\u094d\u092e\u093e \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u094b\u0902 \u0915\u0947 \u092c\u0921\u093c\u0947 \u0909\u0926\u094d\u092f\u094b\u0917\u094b\u0902 \u0926\u094d\u0935\u093e\u0930\u093e \u0935\u093f\u0936\u094d\u0935\u0938\u0928\u0940\u092f\u0964",
        "stats": {
          "clients": "\u0938\u0915\u094d\u0930\u093f\u092f \u0917\u094d\u0930\u093e\u0939\u0915",
          "partners": "\u092a\u093e\u0930\u094d\u091f\u0928\u0930",
          "years": "\u0935\u093f\u0936\u094d\u0935\u093e\u0938 \u0915\u0947 \u0935\u0930\u094d\u0937",
          "retention": "\u0917\u094d\u0930\u093e\u0939\u0915 \u092a\u094d\u0930\u0924\u093f\u0927\u093e\u0930\u0923"
        }
      },
      "forceMap": {
        "badge": "\u0932\u093e\u0907\u0935 \u0915\u0935\u0930\u0947\u091c",
        "title": "\u0938\u093e\u092e\u0930\u093f\u0915 \u0924\u0948\u0928\u093e\u0924\u0940 \u092e\u093e\u0928\u091a\u093f\u0924\u094d\u0930",
        "subtitle": "\u092a\u0941\u0923\u0947 \u092e\u0947\u0902 \u0939\u092e\u093e\u0930\u0940 \u0930\u0940\u092f\u0932-\u091f\u093e\u0907\u092e \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0918\u0928\u0924\u094d\u0935 \u0926\u0947\u0916\u0947\u0902\u0964",
        "zone": "\u0915\u094d\u0937\u0947\u0924\u094d\u0930",
        "activeGuards": "\u0938\u0915\u094d\u0930\u093f\u092f \u0907\u0915\u093e\u0907\u092f\u093e\u0901",
        "avgResponseTime": "\u0914\u0938\u0924 \u092a\u094d\u0930\u0924\u093f\u0915\u094d\u0930\u093f\u092f\u093e",
        "industrialHub": "\u0914\u0926\u094d\u092f\u094b\u0917\u093f\u0915 \u0915\u0947\u0902\u0926\u094d\u0930"
      },
      "services": {
        "title": "\u0930\u0923\u0928\u0940\u0924\u093f\u0915 \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0938\u0947\u0935\u093e\u090f\u0902",
        "subtitle": "\u092a\u094d\u0930\u0924\u094d\u092f\u0947\u0915 \u0915\u094d\u0937\u0947\u0924\u094d\u0930 \u0915\u0947 \u0932\u093f\u090f \u0935\u094d\u092f\u093e\u092a\u0915 \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u092a\u094d\u0930\u094b\u091f\u094b\u0915\u0949\u0932\u0964",
        "overview": "\u0905\u0935\u0932\u094b\u0915\u0928",
        "howItIsDone": "\u092f\u0939 \u0915\u0948\u0938\u0947 \u0915\u093f\u092f\u093e \u091c\u093e\u0924\u093e \u0939\u0948",
        "costEstimator": "\u0932\u093e\u0917\u0924 \u0905\u0928\u0941\u092e\u093e\u0928\u0915",
        "requestQuote": "\u0909\u0926\u094d\u0927\u0930\u0923 \u092e\u093e\u0902\u0917\u0947\u0902",
        "corporate": {
          "name": "\u0915\u0949\u0930\u094d\u092a\u094b\u0930\u0947\u091f \u0938\u0941\u0930\u0915\u094d\u0937\u093e",
          "desc": "\u0915\u093e\u0930\u094d\u092f\u093e\u0932\u092f\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u092a\u094d\u0930\u0940\u092e\u093f\u092f\u092e \u0938\u0941\u0930\u0915\u094d\u0937\u093e\u0964",
          "details": "\u0911\u0928-\u0938\u093e\u0907\u091f \u0928\u093f\u0917\u0930\u093e\u0928\u0940 \u0914\u0930 \u0915\u093e\u0930\u094d\u092f\u0915\u093e\u0930\u0940 \u0938\u0941\u0930\u0915\u094d\u0937\u093e\u0964",
          "cost": "\u20b945,000 / \u0938\u093e\u0907\u091f"
        },
        "residential": {
          "name": "\u0906\u0935\u093e\u0938\u0940\u092f \u0938\u0941\u0930\u0915\u094d\u0937\u093e",
          "desc": "\u0938\u094b\u0938\u093e\u092f\u091f\u0940 \u0914\u0930 \u0905\u092a\u093e\u0930\u094d\u091f\u092e\u0947\u0902\u091f \u0915\u0940 \u0938\u0941\u0930\u0915\u094d\u0937\u093e\u0964",
          "details": "\u0906\u0917\u0902\u0924\u0941\u0915 \u092a\u094d\u0930\u092c\u0902\u0927\u0928 \u0914\u0930 CCTV \u0928\u093f\u0917\u0930\u093e\u0928\u0940\u0964",
          "cost": "\u20b938,000 / \u0928\u094b\u0921"
        },
        "industrial": {
          "name": "\u0914\u0926\u094d\u092f\u094b\u0917\u093f\u0915 \u0938\u0941\u0930\u0915\u094d\u0937\u093e",
          "desc": "\u0935\u093f\u0928\u093f\u0930\u094d\u092e\u093e\u0923 \u0907\u0915\u093e\u0907\u092f\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u0938\u0941\u0930\u0915\u094d\u0937\u093e\u0964",
          "details": "\u092a\u0930\u093f\u0927\u093f \u0928\u093f\u092f\u0902\u0924\u094d\u0930\u0923 \u0914\u0930 \u0930\u093e\u0924 \u0915\u0940 \u0917\u0936\u094d\u0924\u0964",
          "cost": "\u20b955,000 / \u0938\u0947\u0915\u094d\u091f\u0930"
        },
        "event": {
          "name": "\u0907\u0935\u0947\u0902\u091f \u0938\u0941\u0930\u0915\u094d\u0937\u093e",
          "desc": "\u092d\u0940\u0921\u093c \u0928\u093f\u092f\u0902\u0924\u094d\u0930\u0923 \u0914\u0930 VIP \u0938\u0941\u0930\u0915\u094d\u0937\u093e\u0964",
          "details": "\u0924\u094d\u0935\u0930\u093f\u0924 \u092a\u094d\u0930\u0924\u093f\u0915\u094d\u0930\u093f\u092f\u093e \u091f\u0940\u092e\u0947\u0902\u0964",
          "cost": "\u20b915,000 / \u0907\u0935\u0947\u0902\u091f"
        },
        "executive": {
          "name": "\u0915\u093e\u0930\u094d\u092f\u0915\u093e\u0930\u0940 \u0938\u0941\u0930\u0915\u094d\u0937\u093e",
          "desc": "VIP \u0915\u0947 \u0932\u093f\u090f \u092c\u0949\u0921\u0940\u0917\u093e\u0930\u094d\u0921\u0964",
          "details": "Discreet \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0914\u0930 \u092f\u093e\u0924\u094d\u0930\u093e \u0938\u0941\u0930\u0915\u094d\u0937\u093e\u0964",
          "cost": "\u20b980k / Mo"
        },
        "cyber": {
          "name": "\u0938\u093e\u0907\u092c\u0930 \u0907\u0902\u091f\u0947\u0932",
          "desc": "\u0921\u093f\u091c\u093f\u091f\u0932 \u092a\u0930\u093f\u0927\u093f \u0930\u0915\u094d\u0937\u093e\u0964",
          "details": "\u0928\u0947\u091f\u0935\u0930\u094d\u0915 \u0928\u093f\u0917\u0930\u093e\u0928\u0940 \u0914\u0930 \u0925\u094d\u0930\u0947\u091f \u0939\u0902\u091f\u093f\u0902\u0917\u0964",
          "cost": "\u092a\u0930\u093f\u0935\u0930\u094d\u0924\u0928\u0940\u092f"
        }
      },
      "roi": {
        "title": "\u0938\u093e\u092e\u0930\u093f\u0915 \u0909\u0926\u094d\u0927\u0930\u0923",
        "subtitle": "ROI \u092e\u0947\u091f\u094d\u0930\u093f\u0915\u094d\u0938",
        "description": "\u0916\u0924\u0930\u0947 \u0915\u0947 \u0938\u094d\u0924\u0930 \u0915\u0947 \u0906\u0927\u093e\u0930 \u092a\u0930 \u0905\u092a\u0928\u0940 \u092c\u0932 \u0906\u0935\u0936\u094d\u092f\u0915\u0924\u093e\u0913\u0902 \u0915\u0940 \u0917\u0923\u0928\u093e \u0915\u0930\u0947\u0902\u0964",
        "parameters": "\u0930\u0923\u0928\u0940\u0924\u093f\u0915 \u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932",
        "assetClass": "\u0938\u0902\u092a\u0924\u094d\u0924\u093f \u0935\u0930\u094d\u0917\u0940\u0915\u0930\u0923",
        "threatLevel": "\u091c\u094b\u0916\u093f\u092e \u092e\u0942\u0932\u094d\u092f\u093e\u0902\u0915\u0928",
        "coverageArea": "\u092a\u0930\u093f\u091a\u093e\u0932\u0928 \u0938\u094d\u0924\u0930",
        "perimeters": "\u092a\u094d\u0930\u093e\u0925\u092e\u093f\u0915 \u092a\u0930\u093f\u0927\u093f",
        "operational": "24/7 \u092a\u0930\u093f\u091a\u093e\u0932\u0928 HUD",
        "additionalGuards": "\u0905\u0928\u0941\u092e\u093e\u0928\u093f\u0924 \u092c\u0932 \u0906\u0935\u0936\u094d\u092f\u0915\u0924\u093e",
        "estMonthlyCost": "\u0905\u0928\u0941\u092e\u093e\u0928\u093f\u0924 \u0928\u093f\u0935\u0947\u0936",
        "monthly": "\u092e\u093e\u0938\u093f\u0915",
        "perDeployment": "\u0924\u0948\u0928\u093e\u0924\u0940 \u0915\u0947 \u0905\u0928\u0941\u0938\u093e\u0930",
        "subjectToAudit": "\u092a\u094d\u0930\u0936\u093f\u0915\u094d\u0937\u0923, \u0928\u093f\u0917\u0930\u093e\u0928\u0940 \u0914\u0930 \u092c\u0940\u092e\u093e \u0936\u093e\u092e\u093f\u0932 \u0939\u0948",
        "clearance": "\u0938\u0941\u0930\u0915\u094d\u0937\u093e \u092e\u0902\u091c\u0942\u0930\u0940",
        "threatAssessment": "\u0916\u0924\u0930\u0947 \u0915\u093e \u0906\u0915\u0932\u0928",
        "forceDeployment": "\u092c\u0932 \u0924\u0948\u0928\u093e\u0924\u0940",
        "roiMetrics": "ROI \u092e\u0947\u091f\u094d\u0930\u093f\u0915\u094d\u0938",
        "coverage": "\u0915\u0935\u0930\u0947\u091c",
        "incidents": "\u0918\u091f\u0928\u093e \u092e\u0947\u0902 \u0915\u092e\u0940",
        "savings": "\u0905\u0928\u0941\u092e\u093e\u0928\u093f\u0924 \u092c\u091a\u0924",
        "investment": "\u0928\u093f\u0935\u0947\u0936",
        "requestBtn": "\u0924\u0948\u0928\u093e\u0924\u0940 \u0915\u093e \u0905\u0928\u0941\u0930\u094b\u0927 \u0915\u0930\u0947\u0902",
        "propOptions": {
          "residential": "\u0906\u0935\u093e\u0938\u0940\u092f",
          "industrial": "\u0914\u0926\u094d\u092f\u094b\u0917\u093f\u0915",
          "corporate": "\u0915\u0949\u0930\u094d\u092a\u094b\u0930\u0947\u091f",
          "event": "\u0907\u0935\u0947\u0902\u091f"
        },
        "threatOptions": {
          "low": "\u0915\u092e \u091c\u094b\u0916\u093f\u092e",
          "medium": "\u092e\u0927\u094d\u092f\u092e \u091c\u094b\u0916\u093f\u092e",
          "high": "\u0909\u091a\u094d\u091a \u091c\u094b\u0916\u093f\u092e"
        },
        "shiftOptions": {
          "12": "12 \u0918\u0902\u091f\u0947 \u0915\u0940 \u0936\u093f\u092b\u094d\u091f",
          "24": "24/7 \u0915\u092e\u093e\u0902\u0921"
        }
      },
      "trust": {
        "badge": "\u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924 \u0914\u0930 \u092a\u094d\u0930\u092e\u093e\u0923\u093f\u0924",
        "title1": "\u090f\u0932\u0940\u091f \u0938\u0941\u0930\u0915\u094d\u0937\u093e",
        "title2": "\u092a\u094d\u0930\u092e\u093e\u0923\u092a\u0924\u094d\u0930",
        "subtitle": "\u0905\u0902\u0924\u0930\u0930\u093e\u0937\u094d\u091f\u094d\u0930\u0940\u092f \u0938\u094d\u0924\u0930 \u092a\u0930 \u092e\u093e\u0928\u094d\u092f\u0924\u093e \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u092e\u093e\u0928\u0915\u0964",
        "clientsTitle1": "\u0907\u0928 \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u094b\u0902 \u0915\u093e",
        "clientsTitle2": "\u092d\u0930\u094b\u0938\u093e",
        "clientsSubtitle": "\u092e\u0939\u0924\u094d\u0935\u092a\u0942\u0930\u094d\u0923 \u092c\u0941\u0928\u093f\u092f\u093e\u0926\u0940 \u0922\u093e\u0902\u091a\u0947 \u0915\u094b \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u092a\u094d\u0930\u0926\u093e\u0928 \u0915\u0930\u0928\u093e\u0964",
        "verified": "\u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924",
        "certs": {
          "iso": {
            "name": "ISO 27001",
            "desc": "\u0938\u0942\u091a\u0928\u093e \u0938\u0941\u0930\u0915\u094d\u0937\u093e"
          },
          "psara": {
            "name": "PSARA \u0932\u093e\u0907\u0938\u0947\u0902\u0938",
            "desc": "\u0928\u093f\u091c\u0940 \u0938\u0941\u0930\u0915\u094d\u0937\u093e"
          },
          "gdpr": {
            "name": "GDPR \u0905\u0928\u0941\u092a\u093e\u0932\u0928",
            "desc": "\u0921\u0947\u091f\u093e \u092a\u094d\u0930\u094b\u091f\u0947\u0915\u094d\u0936\u0928"
          },
          "bsi": {
            "name": "BSI \u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924",
            "desc": "\u0917\u0941\u0923\u0935\u0924\u094d\u0924\u093e \u092e\u093e\u0928\u0915"
          }
        },
        "sectors": {
          "techParks": "\u091f\u0947\u0915 \u092a\u093e\u0930\u094d\u0915",
          "industrial": "\u0914\u0926\u094d\u092f\u094b\u0917\u093f\u0915 \u0915\u094d\u0937\u0947\u0924\u094d\u0930",
          "corporate": "\u0915\u0949\u0930\u094d\u092a\u094b\u0930\u0947\u091f \u0939\u092c",
          "residential": "\u0906\u0935\u093e\u0938\u0940\u092f \u0915\u094d\u0937\u0947\u0924\u094d\u0930",
          "retail": "\u0930\u093f\u091f\u0947\u0932 \u092e\u0949\u0932",
          "logistics": "\u0932\u0949\u091c\u093f\u0938\u094d\u091f\u093f\u0915\u094d\u0938 \u0915\u0947\u0902\u0926\u094d\u0930"
        }
      },
      "reviews": {
        "title1": "\u0939\u092e\u093e\u0930\u0947 \u0917\u094d\u0930\u093e\u0939\u0915",
        "title2": "\u0915\u094d\u092f\u093e",
        "subtitle": "\u0915\u0939\u0924\u0947 \u0939\u0948\u0902",
        "googleBadge": "\u0917\u0942\u0917\u0932 \u0930\u093f\u0935\u094d\u092f\u0941",
        "verified": "\u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924 \u0917\u0942\u0917\u0932 \u0930\u093f\u0935\u094d\u092f\u0941 \u092a\u0930 \u0906\u0927\u093e\u0930\u093f\u0924",
        "items": {
          "r1": {
            "name": "\u0930\u093e\u091c\u0947\u0936 \u0936\u0930\u094d\u092e\u093e",
            "date": "2 \u0938\u092a\u094d\u0924\u093e\u0939 \u092a\u0939\u0932\u0947",
            "text": "\u0905\u0938\u093e\u0927\u093e\u0930\u0923 \u0938\u0947\u0935\u093e\u0964 \u0917\u093e\u0930\u094d\u0921 \u092a\u094d\u0930\u0936\u093f\u0915\u094d\u0937\u093f\u0924 \u0914\u0930 \u092a\u0947\u0936\u0947\u0935\u0930 \u0939\u0948\u0902\u0964"
          },
          "r2": {
            "name": "\u092a\u094d\u0930\u093f\u092f\u093e \u0926\u0947\u0936\u092e\u0941\u0916",
            "date": "1 \u092e\u0939\u0940\u0928\u093e \u092a\u0939\u0932\u0947",
            "text": "\u0939\u092e\u0928\u0947 \u0905\u092a\u0928\u0940 \u0938\u094b\u0938\u093e\u092f\u091f\u0940 \u0915\u0947 \u0932\u093f\u090f \u091a\u0941\u0928\u093e\u0964 \u0938\u0947\u0935\u093e \u092c\u0939\u0941\u0924 \u0905\u091a\u094d\u091b\u0940 \u0939\u0948\u0964"
          },
          "r3": {
            "name": "\u0905\u092e\u093f\u0924 \u092a\u093e\u091f\u093f\u0932",
            "date": "2 \u092e\u0939\u0940\u0928\u0947 \u092a\u0939\u0932\u0947",
            "text": "\u0905\u0924\u094d\u092f\u0927\u093f\u0915 \u0935\u093f\u0936\u094d\u0935\u0938\u0928\u0940\u092f \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u092b\u0930\u094d\u092e\u0964"
          }
        }
      },
      "commander": {
        "chatTitle": "\u0915\u092e\u093e\u0902\u0921\u0930 AI",
        "placeholder": "\u0938\u0902\u0926\u0947\u0936 \u0915\u092e\u093e\u0902\u0921...",
        "quickActions": {
          "quote": "\u0909\u0926\u094d\u0927\u0930\u0923",
          "coverage": "\u0915\u0935\u0930\u0947\u091c",
          "human": "\u0938\u0902\u092a\u0930\u094d\u0915",
          "jobs": "\u0915\u0930\u093f\u092f\u0930"
        },
        "responses": {
          "systemOnline": "\u0938\u093f\u0938\u094d\u091f\u092e \u0911\u0928\u0932\u093e\u0907\u0928\u0964 \u092e\u0948\u0902 \u0915\u092e\u093e\u0902\u0921\u0930 AI \u0939\u0942\u0902\u0964 \u092e\u0948\u0902 \u0906\u092a\u0915\u0940 \u0915\u0948\u0938\u0947 \u092e\u0926\u0926 \u0915\u0930 \u0938\u0915\u0924\u093e \u0939\u0942\u0902?",
          "pricing": "\u092e\u0942\u0932\u094d\u092f \u0928\u093f\u0930\u094d\u0927\u093e\u0930\u0923 \u0916\u0924\u0930\u0947 \u0915\u0947 \u0938\u094d\u0924\u0930 \u092a\u0930 \u0928\u093f\u0930\u094d\u092d\u0930 \u0915\u0930\u0924\u093e \u0939\u0948\u0964",
          "services": "\u0939\u092e \u0915\u0949\u0930\u094d\u092a\u094b\u0930\u0947\u091f, \u0906\u0935\u093e\u0938\u0940\u092f \u0914\u0930 \u0914\u0926\u094d\u092f\u094b\u0917\u093f\u0915 \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u092a\u094d\u0930\u0926\u093e\u0928 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964",
          "location": "\u0939\u092e \u092a\u0941\u0923\u0947 \u0914\u0930 \u092e\u0939\u093e\u0930\u093e\u0937\u094d\u091f\u094d\u0930 \u0915\u0947 \u092a\u094d\u0930\u092e\u0941\u0916 \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u094b\u0902 \u092e\u0947\u0902 \u0938\u0915\u094d\u0930\u093f\u092f \u0939\u0948\u0902\u0964",
          "greeting": "\u0915\u092e\u093e\u0902\u0921\u0930 AI \u0928\u093f\u0930\u094d\u0926\u0947\u0936\u094b\u0902 \u0915\u0940 \u092a\u094d\u0930\u0924\u0940\u0915\u094d\u0937\u093e \u0915\u0930 \u0930\u0939\u093e \u0939\u0948\u0964",
          "human": "\u0935\u094d\u0939\u093e\u091f\u094d\u0938\u090f\u092a \u0915\u0947 \u092e\u093e\u0927\u094d\u092f\u092e \u0938\u0947 \u0939\u092e\u0938\u0947 \u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902\u0964",
          "jobs": "\u0939\u092e\u093e\u0930\u0940 \u092d\u0930\u094d\u0924\u0940 \u091a\u093e\u0932\u0942 \u0939\u0948\u0964 \u0915\u0930\u093f\u092f\u0930 \u092a\u0947\u091c \u0926\u0947\u0916\u0947\u0902\u0964",
          "fallback": "\u0905\u0928\u0941\u0930\u094b\u0927 \u0915\u094b \u0906\u0917\u0947 \u092d\u0947\u091c \u0930\u0939\u093e \u0939\u0942\u0902\u0964"
        }
      },
      "verification": {
        "activeGuard": "\u0938\u0915\u094d\u0930\u093f\u092f \u090f\u0932\u0940\u091f \u0911\u092a\u0930\u0947\u091f\u093f\u0935",
        "assigned": "\u0938\u094c\u0902\u092a\u093e \u0917\u092f\u093e:",
        "bgCheck": "\u092c\u0948\u0915\u0917\u094d\u0930\u093e\u0909\u0902\u0921 \u0935\u0947\u0930\u093f\u092b\u093f\u0915\u0947\u0936\u0928:",
        "cleared": "\u0915\u094d\u0932\u093f\u092f\u0930",
        "psara": "PSARA \u0905\u0928\u0941\u092a\u093e\u0932\u0928:",
        "completed": "\u092a\u0942\u0930\u093e",
        "exp": "\u0938\u093e\u092e\u0930\u093f\u0915 \u0905\u0928\u0941\u092d\u0935:",
        "verified": "\u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924 \u0911\u0921\u093f\u091f"
      },
      "gallery": {
        "title": "\u0939\u092e\u093e\u0930\u0940 \u092b\u094b\u0930\u094d\u0938",
        "subtitle": "\u0939\u092e\u093e\u0930\u0940 \u0924\u0948\u0928\u093e\u0924\u0940, \u092a\u094d\u0930\u0936\u093f\u0915\u094d\u0937\u0923 \u0914\u0930 \u0915\u092e\u093e\u0902\u0921 \u0938\u0947\u0902\u091f\u0930 \u0915\u0940 \u091d\u0932\u0915\u0964",
        "items": {
          "c1": "\u0932\u093e\u0907\u0935 \u0915\u092e\u093e\u0902\u0921",
          "c2": "CCTV \u091f\u094d\u0930\u0948\u0915\u093f\u0902\u0917",
          "c3": "\u0930\u0947\u0938\u094d\u092a\u0949\u0928\u094d\u0938 \u091f\u0940\u092e",
          "c4": "\u0938\u093e\u0907\u092c\u0930 \u092a\u094d\u0930\u092d\u093e\u0917",
          "c5": "\u0938\u0902\u092a\u0924\u094d\u0924\u093f \u0935\u0949\u0932\u094d\u091f",
          "c6": "\u0917\u0936\u094d\u0924\u0940 \u0905\u092d\u093f\u092f\u093e\u0928"
        }
      },
      "careers": {
        "title": "\u090f\u0932\u0940\u091f \u092b\u094b\u0930\u094d\u0938 ",
        "titleSpan": "\u091c\u0949\u0907\u0928 \u0915\u0930\u0947\u0902",
        "subtitle": "\u0939\u092e \u0938\u092e\u0930\u094d\u092a\u093f\u0924 \u092a\u0947\u0936\u0947\u0935\u0930\u094b\u0902 \u0915\u0940 \u0924\u0932\u093e\u0936 \u0915\u0930 \u0930\u0939\u0947 \u0939\u0948\u0902\u0964",
        "applyBtn": "\u0905\u092d\u0940 \u0906\u0935\u0947\u0926\u0928 \u0915\u0930\u0947\u0902",
        "backBtn": "\u092a\u0940\u091b\u0947 \u091c\u093e\u090f\u0902",
        "fullName": "\u092a\u0942\u0930\u093e \u0928\u093e\u092e",
        "phoneNumber": "\u092b\u093c\u094b\u0928 \u0928\u0902\u092c\u0930",
        "experience": "\u0938\u093e\u092e\u0930\u093f\u0915 \u0905\u0928\u0941\u092d\u0935",
        "resume": "\u092c\u093e\u092f\u094b\u0921\u0947\u091f\u093e",
        "attach": "\u0905\u091f\u0948\u091a \u0915\u0930\u0947\u0902",
        "maxSize": "PDF (Max 5MB)",
        "submitBtn": "\u091c\u092e\u093e \u0915\u0930\u0947\u0902",
        "successTitle": "\u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u092e\u093f\u0932\u0940",
        "successMsg": "\u0939\u092e \u091c\u0932\u094d\u0926 \u0939\u0940 \u0906\u092a\u0938\u0947 \u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902\u0917\u0947\u0964",
        "appFor": "\u092a\u0926:",
        "jobs": {
          "guard": {
            "title": "\u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0917\u093e\u0930\u094d\u0921",
            "req": "\u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0915\u094d\u0937\u0947\u0924\u094d\u0930 \u0915\u093e \u0905\u0928\u0941\u092d\u0935\u0964"
          },
          "supervisor": {
            "title": "\u0911\u092a\u0930\u0947\u0936\u0928\u094d\u0938 \u0938\u0941\u092a\u0930\u0935\u093e\u0907\u091c\u0930",
            "req": "\u0928\u0947\u0924\u0943\u0924\u094d\u0935 \u0905\u0928\u0941\u092d\u0935\u0964"
          },
          "vigilance": {
            "title": "\u0938\u0924\u0930\u094d\u0915\u0924\u093e \u0905\u0927\u093f\u0915\u093e\u0930\u0940",
            "req": "\u0928\u093f\u0917\u0930\u093e\u0928\u0940 \u0905\u0928\u0941\u092d\u0935\u0964"
          }
        }
      },
      "common": {
        "back": "\u0915\u092e\u093e\u0902\u0921 \u0938\u0947\u0902\u091f\u0930 \u092a\u0930 \u0935\u093e\u092a\u0938",
        "email": "\u0908\u092e\u0947\u0932",
        "share": "\u0936\u0947\u092f\u0930 \u0915\u0930\u0947\u0902",
        "download": "\u0921\u093e\u0909\u0928\u0932\u094b\u0921 PDF",
        "contact": "\u0938\u0902\u092a\u0930\u094d\u0915",
        "motto": "\u090f\u0932\u0940\u091f \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0938\u092e\u093e\u0927\u093e\u0928",
        "reference": "\u0938\u0902\u0926\u0930\u094d\u092d",
        "date": "\u0924\u093e\u0930\u0940\u0916",
        "validity": "15 \u0926\u093f\u0928\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u0935\u0948\u0927",
        "sqft": "\u0935\u0930\u094d\u0917 \u092b\u0941\u091f",
        "entryPoints": "\u092a\u094d\u0930\u0935\u0947\u0936 \u0926\u094d\u0935\u093e\u0930",
        "alertLevel": "\u0938\u0924\u0930\u094d\u0915 \u0938\u094d\u0924\u0930",
        "hourCommandLoop": "\u0918\u0902\u091f\u0947 \u0915\u092e\u093e\u0902\u0921 \u0932\u0942\u092a",
        "auditStatus": "\u0911\u0921\u093f\u091f \u0938\u094d\u0925\u093f\u0924\u093f",
        "commandNode": "\u0915\u092e\u093e\u0902\u0921 \u0928\u094b\u0921",
        "invoiceDisclaimer": "\u092f\u0939 \u0938\u093e\u092e\u0930\u093f\u0915 \u0938\u093f\u092b\u093e\u0930\u093f\u0936 \u0939\u0948\u0964"
      },
      "footer": {
        "rights": "\u00a9 2026 \u091f\u094d\u0930\u0942\u092b\u094b\u0930\u094d\u0938 \u0938\u094d\u091f\u094d\u0930\u0948\u091f\u0947\u091c\u093f\u0915 \u0938\u0930\u094d\u0935\u093f\u0938\u0947\u091c\u0964 \u0938\u0930\u094d\u0935\u093e\u0927\u093f\u0915\u093e\u0930 \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924\u0964"
      }
    }
  },
  "mr": {
    "translation": {
      "nav": {
        "home": "\u0939\u094b\u092e",
        "services": "\u0938\u0947\u0935\u093e",
        "careers": "\u0915\u0930\u0940\u0905\u0930",
        "gallery": "\u0917\u0945\u0932\u0930\u0940",
        "contact": "\u0938\u0902\u092a\u0930\u094d\u0915",
        "bookConsult": "\u0938\u0932\u094d\u0932\u093e \u092c\u0941\u0915 \u0915\u0930\u093e"
      },
      "mobileSticky": {
        "callNow": "\u0906\u0924\u093e \u0915\u0949\u0932 \u0915\u0930\u093e",
        "sos": "\u0906\u0923\u0940\u092c\u093e\u0923\u0940"
      },
      "hero": {
        "badge": "\u090f\u0932\u093f\u091f \u0938\u094d\u091f\u094d\u0930\u0945\u091f\u0947\u091c\u093f\u0915 \u092b\u094b\u0930\u094d\u0938",
        "title1": "\u0905\u0924\u0942\u091f",
        "title2": "\u0938\u093e\u092e\u0930\u093f\u0915 \u0938\u0941\u0930\u0915\u094d\u0937\u093e",
        "subtitle": "\u0936\u0939\u0930\u0940 \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0906\u0923\u093f \u0914\u0926\u094d\u092f\u094b\u0917\u093f\u0915 \u0935\u0930\u094d\u091a\u0938\u094d\u0935\u093e\u0938\u093e\u0920\u0940 \u0915\u092e\u093e\u0902\u0921 \u0938\u0947\u0902\u091f\u0930\u0964",
        "activateBtn": "\u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0938\u0915\u094d\u0930\u093f\u092f \u0915\u0930\u093e",
        "commandBtn": "\u0915\u092e\u093e\u0902\u0921 \u0915\u0902\u091f\u094d\u0930\u094b\u0932",
        "online": "\u0911\u092a\u0930\u0947\u0936\u0928\u0932 \u0928\u094b\u0921\u094d\u0938 \u0938\u0915\u094d\u0930\u093f\u092f",
        "rating": "4.9/5 \u091f\u094d\u0930\u0938\u094d\u091f \u0938\u094d\u0915\u094b\u0930",
        "isoVerified": "ISO 27001 \u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924",
        "psaraLicensed": "PSARA \u092a\u0930\u0935\u093e\u0928\u093e\u0915\u0943\u0924",
        "threatLevel": "\u0927\u094b\u0915\u093e \u092a\u093e\u0924\u0933\u0940: \u0917\u0902\u092d\u0940\u0930",
        "maxResponse": "2 \u092e\u093f\u0928\u093f\u091f \u092a\u094d\u0930\u0924\u093f\u0938\u093e\u0926",
        "securityClearance": "\u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0915\u094d\u0932\u093f\u0905\u0930\u0928\u094d\u0938: \u0915\u092e\u093e\u0932",
        "personnel": "\u0915\u0930\u094d\u092e\u091a\u093e\u0930\u0940",
        "responseTime": "\u092a\u094d\u0930\u0924\u093f\u0938\u093e\u0926 \u0935\u0947\u0933",
        "coverageArea": "\u0915\u0935\u0930\u0947\u091c \u0915\u094d\u0937\u0947\u0924\u094d\u0930",
        "operational": "24/7 \u0911\u092a\u0930\u0947\u0936\u0928\u0932 HUD"
      },
      "capabilities": {
        "badge": "\u090f\u0932\u093f\u091f \u0915\u094d\u0937\u092e\u0924\u093e",
        "title1": "\u0915\u093e\u0930\u094d\u092f\u093e\u0924\u094d\u092e\u0915",
        "title2": "\u0938\u0930\u094d\u0935\u094b\u091a\u094d\u091a\u0924\u093e",
        "subtitle": "\u0906\u092e\u094d\u0939\u0940 \u092b\u0915\u094d\u0924 \u0928\u093f\u0930\u0940\u0915\u094d\u0937\u0923 \u0915\u0930\u0924 \u0928\u093e\u0939\u0940. \u0906\u092e\u094d\u0939\u0940 \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u092a\u0930\u093f\u0915\u094d\u0937\u0947\u0924\u094d\u0930\u093e\u0935\u0930 \u092a\u0942\u0930\u094d\u0923 \u0935\u0930\u094d\u091a\u0938\u094d\u0935 \u0917\u093e\u091c\u0935\u0924\u094b\u0964",
        "ai": {
          "title": "AI \u0915\u092e\u093e\u0902\u0921 \u090f\u0915\u0924\u094d\u0930\u0940\u0915\u0930\u0923",
          "desc": "\u0930\u093f\u0905\u0932-\u091f\u093e\u0907\u092e \u0926\u0947\u0916\u0930\u0947\u0916 \u0935\u093f\u0936\u094d\u0932\u0947\u0937\u0923 \u0906\u092e\u091a\u094d\u092f\u093e \u0938\u0930\u094d\u0935\u094d\u0939\u0930\u092e\u0927\u094d\u092f\u0947 \u092b\u0940\u0921 \u0915\u0947\u0932\u0947 \u091c\u093e\u0924\u0947\u0964"
        },
        "qrt": {
          "title": "\u0938\u093e\u092e\u0930\u093f\u0915 QRT \u092f\u0941\u0928\u093f\u091f\u094d\u0938",
          "desc": "\u0935\u093e\u0939\u0928\u093e\u0902\u092e\u0927\u094d\u092f\u0947 \u0924\u0948\u0928\u093e\u0924 \u090f\u0932\u093f\u091f \u092a\u094d\u0930\u0924\u093f\u0938\u093e\u0926 \u091f\u0940\u092e\u094d\u0938\u0964"
        },
        "intel": {
          "title": "\u0907\u0902\u091f\u0947\u0932 \u0915\u094b\u0930",
          "desc": "\u091c\u094b\u0916\u0940\u092e-\u092e\u0945\u092a\u093f\u0902\u0917 \u0905\u0932\u094d\u0917\u094b\u0930\u093f\u0926\u092e\u0964"
        },
        "biometric": {
          "title": "\u092c\u093e\u092f\u094b\u092e\u0947\u091f\u094d\u0930\u093f\u0915 \u092b\u094b\u0930\u094d\u0938 \u092a\u0921\u0924\u093e\u0933\u0923\u0940",
          "desc": "\u092a\u093e\u0930\u094d\u0936\u094d\u0935\u092d\u0942\u092e\u0940 \u0924\u092a\u093e\u0938\u0923\u0940\u0926\u094d\u0935\u093e\u0930\u0947 \u092a\u0921\u0924\u093e\u0933\u0923\u0940\u0964"
        }
      },
      "partners": {
        "badge": "\u0909\u0926\u094d\u092f\u094b\u0917\u093e\u0924\u0940\u0932 \u0928\u0947\u0924\u094d\u092f\u093e\u0902\u091a\u093e \u0935\u093f\u0936\u094d\u0935\u093e\u0938",
        "title1": "\u0938\u0902\u0930\u0915\u094d\u0937\u0923",
        "title2": "\u092d\u093e\u0930\u0924\u093e\u0924\u0940\u0932 \u0938\u0930\u094d\u0935\u094b\u0924\u094d\u0924\u092e",
        "subtitle": "IT, \u0909\u0924\u094d\u092a\u093e\u0926\u0928 \u0906\u0923\u093f \u092a\u093e\u092f\u093e\u092d\u0942\u0924 \u0938\u0941\u0935\u093f\u0927\u093e \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u093e\u0924\u0940\u0932 \u0905\u0917\u094d\u0930\u0923\u0940 \u0909\u0926\u094d\u092f\u094b\u0917\u093e\u0902\u0926\u094d\u0935\u093e\u0930\u0947 \u0935\u093f\u0936\u094d\u0935\u0938\u0928\u0940\u092f\u0964",
        "stats": {
          "clients": "\u0938\u0915\u094d\u0930\u093f\u092f \u0917\u094d\u0930\u093e\u0939\u0915",
          "partners": "\u092d\u093e\u0917\u0940\u0926\u093e\u0930",
          "years": "\u0935\u093f\u0936\u094d\u0935\u093e\u0938\u093e\u091a\u0940 \u0935\u0930\u094d\u0937\u0947",
          "retention": "\u0917\u094d\u0930\u093e\u0939\u0915 \u091f\u093f\u0915\u0935\u0942\u0928 \u0920\u0947\u0935\u0923\u0947"
        }
      },
      "forceMap": {
        "badge": "\u0925\u0947\u091f \u0915\u0935\u094d\u0939\u0930\u0947\u091c",
        "title": "\u0938\u093e\u092e\u0930\u093f\u0915 \u0924\u0948\u0928\u093e\u0924 \u0928\u0915\u093e\u0936\u093e",
        "subtitle": "\u092a\u0941\u0923\u0947 \u092f\u0947\u0925\u0940\u0932 \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0918\u0928\u0924\u093e \u092a\u0939\u093e\u0964",
        "zone": "\u091d\u094b\u0928",
        "activeGuards": "\u0938\u0915\u094d\u0930\u093f\u092f \u092f\u0941\u0928\u093f\u091f\u094d\u0938",
        "avgResponseTime": "\u092a\u094d\u0930\u0924\u093f\u0938\u093e\u0926 \u0935\u0947\u0933",
        "industrialHub": "\u0914\u0926\u094d\u092f\u094b\u0917\u093f\u0915 \u0915\u0947\u0902\u0926\u094d\u0930"
      },
      "services": {
        "title": "\u0927\u094b\u0930\u0923\u093e\u0924\u094d\u092e\u0915 \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0938\u0947\u0935\u093e",
        "subtitle": "\u092a\u094d\u0930\u0924\u094d\u092f\u0947\u0915 \u0915\u094d\u0937\u0947\u0924\u094d\u0930\u093e\u0938\u093e\u0920\u0940 \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u092a\u094d\u0930\u094b\u091f\u094b\u0915\u0949\u0932\u0964",
        "overview": "\u0906\u0922\u093e\u0935\u093e",
        "howItIsDone": "\u0939\u0947 \u0915\u0938\u0947 \u0915\u0947\u0932\u0947 \u091c\u093e\u0924\u0947",
        "costEstimator": "\u0916\u0930\u094d\u091a \u0905\u0902\u0926\u093e\u091c",
        "requestQuote": "\u0915\u094b\u091f \u0935\u093f\u0928\u0902\u0924\u0940 \u0915\u0930\u093e",
        "corporate": {
          "name": "\u0915\u0949\u0930\u094d\u092a\u094b\u0930\u0947\u091f \u0938\u0941\u0930\u0915\u094d\u0937\u093e",
          "desc": "\u0915\u093e\u0930\u094d\u092f\u093e\u0932\u092f\u093e\u0902\u0938\u093e\u0920\u0940 \u092a\u094d\u0930\u0940\u092e\u093f\u092f\u092e \u0938\u0902\u0930\u0915\u094d\u0937\u0923\u0964",
          "details": "\u0915\u093e\u0930\u094d\u092f\u0915\u093e\u0930\u0940 \u0938\u0902\u0930\u0915\u094d\u0937\u0923 \u0906\u0923\u093f \u0905\u0917\u094d\u0928\u093f \u0938\u0941\u0930\u0915\u094d\u0937\u093e\u0964",
          "cost": "\u20b945,000 / \u0938\u093e\u0907\u091f"
        },
        "residential": {
          "name": "\u0906\u0935\u093e\u0938\u0940\u092f \u0938\u0941\u0930\u0915\u094d\u0937\u093e",
          "desc": "\u0938\u094b\u0938\u093e\u092f\u091f\u0940 \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924\u0924\u093e\u0964",
          "details": "\u0905\u092d\u094d\u092f\u093e\u0917\u0924 \u0935\u094d\u092f\u0935\u0938\u094d\u0925\u093e\u092a\u0928 \u0906\u0923\u093f CCTV\u0964",
          "cost": "\u20b938,000 / \u0928\u094b\u0921"
        },
        "industrial": {
          "name": "\u0914\u0926\u094d\u092f\u094b\u0917\u093f\u0915 \u0938\u0941\u0930\u0915\u094d\u0937\u093e",
          "desc": "\u0909\u0924\u094d\u092a\u093e\u0926\u0928 \u092f\u0941\u0928\u093f\u091f\u094d\u0938\u0938\u093e\u0920\u0940 \u0938\u0941\u0930\u0915\u094d\u0937\u093e\u0964",
          "details": "\u092e\u093e\u0932 \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924\u0924\u093e \u0906\u0923\u093f \u0930\u093e\u0924\u094d\u0930\u0940\u091a\u0940 \u0917\u0938\u094d\u0924\u0964",
          "cost": "\u20b955,000 / \u0938\u0947\u0915\u094d\u091f\u0930"
        },
        "event": {
          "name": "\u0907\u0935\u094d\u0939\u0947\u0902\u091f \u0938\u0941\u0930\u0915\u094d\u0937\u093e",
          "desc": "\u0917\u0930\u094d\u0926\u0940 \u0928\u093f\u092f\u0902\u0924\u094d\u0930\u0923\u0964",
          "details": "\u092a\u094d\u0930\u0924\u093f\u0938\u093e\u0926 \u091f\u0940\u092e\u094d\u0938\u0964",
          "cost": "\u20b915,000 / \u0907\u0935\u094d\u0939\u0947\u0902\u091f"
        },
        "executive": {
          "name": "\u090f\u0915\u094d\u091d\u093f\u0915\u094d\u092f\u0941\u091f\u093f\u0935\u094d\u0939 \u092a\u094d\u0930\u094b\u091f\u0947\u0915\u094d\u0936\u0928",
          "desc": "VIP \u092c\u0949\u0921\u0940\u0917\u093e\u0930\u094d\u0921\u0964",
          "details": "\u092a\u094d\u0930\u0935\u093e\u0938 \u0938\u0941\u0930\u0915\u094d\u0937\u093e\u0964",
          "cost": "\u20b980k / Mo"
        },
        "cyber": {
          "name": "\u0938\u093e\u092f\u092c\u0930 \u0907\u0902\u091f\u0947\u0932",
          "desc": "\u0921\u093f\u091c\u093f\u091f\u0932 \u0938\u0941\u0930\u0915\u094d\u0937\u093e\u0964",
          "details": "\u0928\u0947\u091f\u0935\u0930\u094d\u0915 \u0926\u0947\u0916\u0930\u0947\u0916\u0964",
          "cost": "Variable"
        }
      },
      "roi": {
        "title": "\u0938\u093e\u092e\u0930\u093f\u0915 \u0915\u094b\u091f",
        "subtitle": "ROI \u092e\u0947\u091f\u094d\u0930\u093f\u0915\u094d\u0938",
        "description": "\u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0926\u0932\u093e\u091a\u0940 \u0917\u0923\u0928\u093e \u0915\u0930\u093e\u0964",
        "parameters": "\u0927\u094b\u0930\u0923\u093e\u0924\u094d\u092e\u0915 \u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932",
        "assetClass": "\u092e\u093e\u0932\u092e\u0924\u094d\u0924\u093e \u0935\u0930\u094d\u0917\u0940\u0915\u0930\u0923",
        "threatLevel": "\u091c\u094b\u0916\u0940\u092e \u092e\u0942\u0932\u094d\u092f\u093e\u0902\u0915\u0928",
        "coverageArea": "\u092a\u0930\u093f\u091a\u093e\u0932\u0928 \u092a\u094d\u0930\u092e\u093e\u0923",
        "perimeters": "\u092a\u0930\u093f\u092e\u093f\u0924\u0940",
        "operational": "24/7 \u092a\u0930\u093f\u091a\u093e\u0932\u0928 HUD",
        "additionalGuards": "\u092b\u094b\u0930\u094d\u0938 \u0906\u0935\u0936\u094d\u092f\u0915\u0924\u093e",
        "estMonthlyCost": "\u0917\u0941\u0902\u0924\u0935\u0923\u0942\u0915",
        "monthly": "\u092e\u093e\u0938\u093f\u0915",
        "perDeployment": "\u0924\u0948\u0928\u093e\u0924\u0940\u0928\u0941\u0938\u093e\u0930",
        "subjectToAudit": "\u092a\u094d\u0930\u0936\u093f\u0915\u094d\u0937\u0923 \u0906\u0923\u093f \u0935\u093f\u092e\u093e \u0938\u092e\u093e\u0935\u093f\u0937\u094d\u091f",
        "clearance": "\u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0915\u094d\u0932\u093f\u0905\u0930\u0928\u094d\u0938",
        "threatAssessment": "\u0927\u094b\u0915\u093e \u092e\u0942\u0932\u094d\u092f\u093e\u0902\u0915\u0928",
        "forceDeployment": "\u092b\u094b\u0930\u094d\u0938 \u0924\u0948\u0928\u093e\u0924\u0940",
        "roiMetrics": "ROI \u092e\u0947\u091f\u094d\u0930\u093f\u0915\u094d\u0938",
        "coverage": "\u0915\u0935\u094d\u0939\u0930\u0947\u091c",
        "incidents": "\u0918\u091f\u0928\u0947\u092e\u0927\u094d\u092f\u0947 \u0918\u091f",
        "savings": "\u0905\u0902\u0926\u093e\u091c\u093f\u0924 \u092c\u091a\u0924",
        "investment": "\u0917\u0941\u0902\u0924\u0935\u0923\u0942\u0915",
        "requestBtn": "\u0935\u093f\u0902\u0928\u0924\u0940 \u0915\u0930\u093e",
        "propOptions": {
          "residential": "\u0906\u0935\u093e\u0938\u0940\u092f",
          "industrial": "\u0914\u0926\u094d\u092f\u094b\u0917\u093f\u0915",
          "corporate": "\u0915\u0949\u0930\u094d\u092a\u094b\u0930\u0947\u091f",
          "event": "\u0907\u0935\u094d\u0939\u0947\u0902\u091f"
        },
        "threatOptions": {
          "low": "\u0915\u092e\u0940 \u0927\u094b\u0915\u093e",
          "medium": "\u092e\u0927\u094d\u092f\u092e \u0927\u094b\u0915\u093e",
          "high": "\u0909\u091a\u094d\u091a \u0927\u094b\u0915\u093e"
        },
        "shiftOptions": {
          "12": "12 \u0924\u093e\u0938 \u0936\u093f\u092b\u094d\u091f",
          "24": "24/7 \u0915\u092e\u093e\u0902\u0921"
        }
      },
      "trust": {
        "badge": "\u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924",
        "title1": "\u090f\u0932\u093f\u091f \u0938\u0941\u0930\u0915\u094d\u0937\u093e",
        "title2": "\u092a\u094d\u0930\u092e\u093e\u0923\u092a\u0924\u094d\u0930\u0947",
        "subtitle": "\u0906\u0902\u0924\u0930\u0930\u093e\u0937\u094d\u091f\u094d\u0930\u0940\u092f \u092e\u093e\u0928\u094d\u092f\u0924\u093e\u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u092e\u093e\u0928\u0915\u0947\u0964",
        "clientsTitle1": "\u0915\u094d\u0937\u0947\u0924\u094d\u0930\u093e\u0928\u0941\u0938\u093e\u0930",
        "clientsTitle2": "\u0935\u093f\u0936\u094d\u0935\u093e\u0938",
        "clientsSubtitle": "\u092e\u0939\u0924\u094d\u0935\u092a\u0942\u0930\u094d\u0923 \u092a\u093e\u092f\u093e\u092d\u0942\u0924 \u0938\u0941\u0935\u093f\u0927\u093e\u0902\u0928\u093e \u0938\u0941\u0930\u0915\u094d\u0937\u093e\u0964",
        "verified": "\u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924",
        "certs": {
          "iso": {
            "name": "ISO 27001",
            "desc": "\u092e\u093e\u0939\u093f\u0924\u0940 \u0938\u0941\u0930\u0915\u094d\u0937\u093e"
          },
          "psara": {
            "name": "PSARA \u092a\u0930\u0935\u093e\u0928\u093e",
            "desc": "\u0916\u093e\u091c\u0917\u0940 \u0938\u0941\u0930\u0915\u094d\u0937\u093e"
          },
          "gdpr": {
            "name": "GDPR \u0938\u0941\u0938\u0902\u0917\u0924",
            "desc": "\u0921\u0947\u091f\u093e \u0938\u0902\u0930\u0915\u094d\u0937\u0923"
          },
          "bsi": {
            "name": "BSI \u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924",
            "desc": "\u0917\u0941\u0923\u0935\u0924\u094d\u0924\u093e \u092e\u093e\u0928\u0915"
          }
        },
        "sectors": {
          "techParks": "\u091f\u0947\u0915 \u092a\u093e\u0930\u094d\u0915",
          "industrial": "\u0914\u0926\u094d\u092f\u094b\u0917\u093f\u0915 \u0915\u094d\u0937\u0947\u0924\u094d\u0930",
          "corporate": "\u0915\u0949\u0930\u094d\u092a\u094b\u0930\u0947\u091f \u0939\u092c",
          "residential": "\u0930\u0939\u093f\u0935\u093e\u0938\u0940 \u091c\u093e\u0917\u093e",
          "retail": "\u0930\u093f\u091f\u0947\u0932 \u092e\u0949\u0932\u094d\u0938",
          "logistics": "\u0932\u0949\u091c\u093f\u0938\u094d\u091f\u093f\u0915\u094d\u0938"
        }
      },
      "reviews": {
        "title1": "\u0906\u092e\u091a\u0947 \u0917\u094d\u0930\u093e\u0939\u0915",
        "title2": "\u0915\u093e\u092f",
        "subtitle": "\u092e\u094d\u0939\u0923\u0924\u093e\u0924",
        "googleBadge": "\u0917\u0941\u0917\u0932 \u0930\u093f\u0935\u094d\u0939\u094d\u092f\u0942",
        "verified": "\u0917\u0941\u0917\u0932 \u0930\u093f\u0935\u094d\u0939\u094d\u092f\u0942\u091c\u0935\u0930 \u0906\u0927\u093e\u0930\u093f\u0924",
        "items": {
          "r1": {
            "name": "\u0930\u093e\u091c\u0947\u0936 \u0936\u0930\u094d\u092e\u093e",
            "date": "2 \u0906\u0920\u0935\u0921\u094d\u092f\u093e\u0902\u092a\u0942\u0930\u094d\u0935\u0940",
            "text": "\u0909\u0924\u094d\u0915\u0943\u0937\u094d\u091f \u0938\u0947\u0935\u093e. \u0917\u093e\u0930\u094d\u0921 \u0905\u0924\u094d\u092f\u0902\u0924 \u0935\u094d\u092f\u093e\u0935\u0938\u093e\u092f\u093f\u0915 \u0906\u0939\u0947\u0924\u0964"
          },
          "r2": {
            "name": "\u092a\u094d\u0930\u093f\u092f\u093e \u0926\u0947\u0936\u092e\u0941\u0916",
            "date": "1 \u092e\u0939\u093f\u0928\u094d\u092f\u093e\u092a\u0942\u0930\u094d\u0935\u0940",
            "text": "\u0906\u092e\u094d\u0939\u0940 \u0928\u093f\u0935\u0921 \u0915\u0947\u0932\u0940. \u0938\u0947\u0935\u093e \u0909\u0924\u094d\u0924\u092e \u0906\u0939\u0947\u0964"
          },
          "r3": {
            "name": "\u0905\u092e\u093f\u0924 \u092a\u093e\u091f\u0940\u0932",
            "date": "2 \u092e\u0939\u093f\u0928\u094d\u092f\u093e\u0902\u092a\u0942\u0930\u094d\u0935\u0940",
            "text": "\u0935\u093f\u0936\u094d\u0935\u0938\u0928\u0940\u092f \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u092b\u0930\u094d\u092e\u0964"
          }
        }
      },
      "commander": {
        "chatTitle": "\u0915\u092e\u093e\u0902\u0921\u0930 AI",
        "placeholder": "\u0938\u0902\u0926\u0947\u0936 \u0915\u092e\u093e\u0902\u0921...",
        "quickActions": {
          "quote": "\u0915\u094b\u091f",
          "coverage": "\u0915\u0935\u094d\u0939\u0930\u0947\u091c",
          "human": "\u0938\u0902\u092a\u0930\u094d\u0915",
          "jobs": "\u0915\u0930\u0940\u0905\u0930"
        },
        "responses": {
          "systemOnline": "\u0938\u093f\u0938\u094d\u091f\u092e \u0911\u0928\u0932\u093e\u0907\u0928. \u092e\u0940 \u0915\u092e\u093e\u0902\u0921\u0930 AI \u0906\u0939\u0947. \u092e\u0940 \u0915\u0936\u0940 \u092e\u0926\u0924 \u0915\u0930\u0942 \u0936\u0915\u0924\u094b?",
          "pricing": "\u0927\u094b\u0915\u093e \u092a\u093e\u0924\u0933\u0940\u0935\u0930 \u0916\u0930\u094d\u091a \u0905\u0935\u0932\u0902\u092c\u0942\u0928 \u0905\u0938\u0924\u094b\u0964",
          "services": "\u0906\u092e\u094d\u0939\u0940 \u0915\u0949\u0930\u094d\u092a\u094b\u0930\u0947\u091f, \u0930\u0939\u093f\u0935\u093e\u0938\u0940 \u0906\u0923\u093f \u0914\u0926\u094d\u092f\u094b\u0917\u093f\u0915 \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0926\u0947\u0924\u094b\u0964",
          "location": "\u0906\u092e\u094d\u0939\u0940 \u092a\u0941\u0923\u0947 \u0906\u0923\u093f \u092e\u0939\u093e\u0930\u093e\u0937\u094d\u091f\u094d\u0930\u093e\u0924 \u0938\u0915\u094d\u0930\u093f\u092f \u0906\u0939\u094b\u0924\u0964",
          "greeting": "\u0915\u092e\u093e\u0902\u0921\u0930 AI \u0938\u0942\u091a\u0928\u093e\u0902\u091a\u0940 \u0935\u093e\u091f \u092a\u093e\u0939\u0924 \u0906\u0939\u0947\u0964",
          "human": "\u0935\u094d\u0939\u0949\u091f\u094d\u0938\u0972\u092a\u0935\u0930 \u0938\u0902\u092a\u0930\u094d\u0915 \u0938\u093e\u0927\u093e\u0964",
          "jobs": "\u0915\u0930\u0940\u0905\u0930 \u092a\u0947\u091c \u092a\u0939\u093e\u0964",
          "fallback": "\u0935\u093f\u0928\u0902\u0924\u0940 \u092a\u0941\u0922\u0947 \u092a\u093e\u0920\u0935\u0924 \u0906\u0939\u0947\u0964"
        }
      },
      "verification": {
        "activeGuard": "\u0938\u0915\u094d\u0930\u093f\u092f \u090f\u0932\u093f\u091f \u0911\u092a\u0930\u0947\u091f\u093f\u0935\u094d\u0939",
        "assigned": "\u0938\u094b\u092a\u0935\u093f\u0932\u0947 \u0906\u0939\u0947:",
        "bgCheck": "\u092a\u093e\u0930\u094d\u0936\u094d\u0935\u092d\u0942\u092e\u0940 \u092a\u0921\u0924\u093e\u0933\u0923\u0940:",
        "cleared": "\u0915\u094d\u0932\u093f\u092f\u0930",
        "psara": "PSARA \u0905\u0928\u0941\u092a\u093e\u0932\u0928:",
        "completed": "\u092a\u0942\u0930\u094d\u0923",
        "exp": "\u0938\u093e\u092e\u0930\u093f\u0915 \u0905\u0928\u0941\u092d\u0935:",
        "verified": "\u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924 \u0911\u0921\u093f\u091f"
      },
      "gallery": {
        "title": "\u0906\u092e\u091a\u0940 \u092b\u094b\u0930\u094d\u0938",
        "subtitle": "\u0906\u092e\u091a\u0940 \u0924\u0948\u0928\u093e\u0924\u0940 \u0906\u0923\u093f \u0915\u092e\u093e\u0902\u0921 \u0938\u0947\u0902\u091f\u0930\u091a\u0940 \u091d\u0932\u0915\u0964",
        "items": {
          "c1": "\u0925\u0947\u091f \u0915\u092e\u093e\u0902\u0921",
          "c2": "CCTV \u091f\u094d\u0930\u0945\u0915\u093f\u0902\u0917",
          "c3": "\u092a\u094d\u0930\u0924\u093f\u0938\u093e\u0926 \u091f\u0940\u092e\u094d\u0938",
          "c4": "\u0938\u093e\u092f\u092c\u0930 \u0935\u093f\u092d\u093e\u0917",
          "c5": "\u092e\u093e\u0932\u092e\u0924\u094d\u0924\u093e \u0935\u0949\u0932\u094d\u091f",
          "c6": "\u0917\u0938\u094d\u0924\u0940 \u092e\u094b\u0939\u093f\u092e\u093e"
        }
      },
      "careers": {
        "title": "\u090f\u0932\u093f\u091f \u092b\u094b\u0930\u094d\u0938\u092e\u0927\u094d\u092f\u0947 ",
        "titleSpan": "\u0938\u093e\u092e\u0940\u0932 \u0935\u094d\u0939\u093e",
        "subtitle": "\u0906\u092e\u094d\u0939\u0940 \u0935\u094d\u092f\u093e\u0935\u0938\u093e\u092f\u093f\u0915\u093e\u0902\u091a\u094d\u092f\u093e \u0936\u094b\u0927\u093e\u0924 \u0906\u0939\u094b\u0924\u0964",
        "applyBtn": "\u0905\u0930\u094d\u091c \u0915\u0930\u093e",
        "backBtn": "\u092a\u0930\u0924 \u091c\u093e",
        "fullName": "\u0928\u093e\u0935",
        "phoneNumber": "\u092b\u094b\u0928 \u0928\u0902\u092c\u0930",
        "experience": "\u0938\u093e\u092e\u0930\u093f\u0915 \u0905\u0928\u0941\u092d\u0935",
        "resume": "\u092c\u093e\u092f\u094b\u0921\u0947\u091f\u093e",
        "attach": "\u0926\u0938\u094d\u0924\u0910\u0935\u091c \u091c\u094b\u0921\u093e",
        "maxSize": "PDF (Max 5MB)",
        "submitBtn": "\u0938\u093e\u0926\u0930 \u0915\u0930\u093e",
        "successTitle": "\u092e\u093e\u0939\u093f\u0924\u0940 \u092e\u093f\u0933\u093e\u0932\u0940",
        "successMsg": "\u0930\u093f\u0915\u094d\u0930\u0942\u091f\u092e\u0947\u0902\u091f \u091f\u0940\u092e \u0938\u0902\u092a\u0930\u094d\u0915 \u0938\u093e\u0927\u0947\u0932\u0964",
        "appFor": "\u091a\u094d\u092f\u093e \u0938\u093e\u0920\u0940 \u0905\u0930\u094d\u091c:",
        "jobs": {
          "guard": {
            "title": "\u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0930\u0915\u094d\u0937\u0915",
            "req": "\u092e\u093e\u0917\u0940\u0932 \u0905\u0928\u0941\u092d\u0935\u0964"
          },
          "supervisor": {
            "title": "\u0938\u0941\u092a\u0930\u0935\u093e\u0907\u091c\u0930",
            "req": "\u0928\u0947\u0924\u0943\u0924\u094d\u0935 \u0905\u0928\u0941\u092d\u0935\u0964"
          },
          "vigilance": {
            "title": "\u0938\u0924\u0930\u094d\u0915\u0924\u093e \u0905\u0927\u093f\u0915\u093e\u0930\u0940",
            "req": "\u0926\u0947\u0916\u0930\u0947\u0916 \u0905\u0928\u0941\u092d\u0935\u0964"
          }
        }
      },
      "common": {
        "back": "\u0915\u092e\u093e\u0902\u0921 \u0938\u0947\u0902\u091f\u0930\u0915\u0921\u0947 \u092a\u0930\u0924",
        "email": "\u0908\u092e\u0947\u0932",
        "share": "\u0936\u0947\u0905\u0930",
        "download": "PDF \u0921\u093e\u0909\u0928\u0932\u094b\u0921",
        "contact": "\u0938\u0902\u092a\u0930\u094d\u0915",
        "motto": "\u090f\u0932\u093f\u091f \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0938\u094b\u0932\u094d\u092f\u0942\u0936\u0928\u094d\u0938",
        "reference": "\u0938\u0902\u0926\u0930\u094d\u092d",
        "date": "\u0924\u093e\u0930\u0940\u0916",
        "validity": "15 \u0926\u093f\u0935\u0938 \u0935\u0948\u0927",
        "sqft": "\u0938\u094d\u0915\u094d\u0935\u0947\u0905\u0930 \u092b\u0942\u091f",
        "entryPoints": "\u092a\u094d\u0930\u0935\u0947\u0936 \u092c\u093f\u0902\u0926\u0942",
        "alertLevel": "\u0905\u0932\u0930\u094d\u091f \u092a\u093e\u0924\u0933\u0940",
        "hourCommandLoop": "\u0915\u092e\u093e\u0902\u0921 \u0932\u0942\u092a",
        "auditStatus": "\u0911\u0921\u093f\u091f \u0938\u094d\u0925\u093f\u0924\u0940",
        "commandNode": "\u0915\u092e\u093e\u0902\u0921 \u0928\u094b\u0921",
        "invoiceDisclaimer": "\u0939\u0940 \u090f\u0915 \u0936\u093f\u092b\u093e\u0930\u0938 \u0906\u0939\u0947\u0964"
      },
      "footer": {
        "rights": "\u00a9 2026 \u091f\u094d\u0930\u0942\u092b\u094b\u0930\u094d\u0938 \u0938\u094d\u091f\u094d\u0930\u0945\u091f\u0947\u091c\u093f\u0915 \u0938\u0930\u094d\u0935\u094d\u0939\u093f\u0938\u0947\u0938. \u0938\u0930\u094d\u0935 \u0939\u0915\u094d\u0915 \u0930\u093e\u0916\u0940\u0935\u0964"
      }
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
