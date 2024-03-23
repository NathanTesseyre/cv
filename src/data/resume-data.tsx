import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nathan Testeyre",
  initials: "NT",
  location: "Toulouse, France",
  locationLink: "https://www.google.com/maps/place/Toulouse",
  about:
    "DevOps enthusiast with a constant desire to learn about anything relative to IT. Automation and bug-fixing enjoyer.",
  summary:
    "Following a 10-year career in education, I initially focused on the back-end before specializing in DevOps. I've been in charge of this aspect of the DAGDA project for CNES for almost a year and a half now. The main objective of this project is to create the most complete space database possible, in order to centralize the information needed to run the various projects carried out within CNES. Having worked on a number of important themes, I'm now looking to consolidate my skills and share my experience in a new and exciting context.",
  avatarUrl: "https://image.noelshack.com/fichiers/2024/12/2/1710863988-cropped-image-1.png",
  contact: {
    email: "n.tesseyre@gmail.com",
    tel: "+33659222577",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nathan-tesseyre-655766233/",
        icon: LinkedInIcon,
      },
    ],
  },
  personalWebsiteUrl: "https://nathantesseyre.fr/",
  education: [
    {
      school: "LDNR La Formation Numérique",
      link: "https://www.ldnr.fr/",
      degree: "Titre Professionnel Développeur Web & Web Mobile",
      start: "Oct. 2021",
      end: "Aug. 2022",
    },
  ],
  work: [
    {
      company: "CS Group",
      link: "https://www.csgroup.eu/fr/",
      badges: ["CNES","DevOps"],
      title: "DAGDA - DevOps Engineer",
      start: "Jan. 2023",
      end: "Current",
      description:
        "Built idempotent and reusable Ansible playbooks and roles from a suite of Shell commands. Developed a multi-branch Jenkins continuous integration pipeline, setting up SonarQube reports, automated integration tests and Docker image scans via Xray. Interfacing the system's Keycloak authentication layer with CNES's Single Sign-On solution.",
    },
    {
      company: "CS Group",
      link: "https://www.csgroup.eu/fr/",
      badges: ["CNES","JAVA"],
      title: "DAGDA - Backend Developper",
      start: "Aug. 2022",
      end: "Dec. 2022",
      description:
        "Development of a JAVA/Spring module to build up a complete history of known solar activity data. Setting up the raw file persistence system in an Amazon S3 Datalake. Construction of the PostgreSQL database consultation rights system via a PostgREST overlay through Keycloak roles.",
    },
    {
      company: "BuyBox",
      link: "https://www.buybox.net/",
      badges: ["Internship","Full-stack"],
      title: "BB360 - Full-stack Internship",
      start: "May 2022",
      end: "Jul. 2022",
      description:
        "Feature development for gift cards expert start-up's internal dashboard. Monitoring tool of company's customers end points. Design, data model, Vue.js front-end implementation, PHP back-end.",
    },
  ],
  skills: [
    "Docker",
    "Ansible",
    "Jenkins",
    "Keycloak",
    "PostgreSQL",
    "JAVA",
    "SonarQube",
    "Vue.js",
    "PHP",
  ]
} as const;
