import project1 from "../assets/projects/CIG.png";
import project2 from "../assets/projects/art_hub.jpg";
import project3 from "../assets/projects/Epharmacy.jpg";
import project4 from "../assets/projects/ci-cd.png";

export const HERO_CONTENT = `A passionate and detail-oriented Full-Stack and DevOps Engineer with hands-on experience in developing and deploying scalable applications using NestJS, Node.js, React.js, and AWS. Skilled in building high-performance microservices and integrating systems using Apache Kafka for large-scale message handling. Seeking opportunities to contribute to robust backend architectures, DevOps automation, and cloud-native solutions that deliver real-world impact.`;

export const ABOUT_TEXT = `Skilled Java Developer with expertise in building robust web applications using Spring Boot and React.js. Strong foundation in Data Structures, Algorithms, and Object-Oriented Programming principles. Proficient in developing RESTful APIs and working with SQL databases. Experienced in version control using Git and collaborative development. Passionate about learning new technologies and solving complex problems.`;

export const EXPERIENCES = [
  {
    year: "Sep 2024 - Present",
    role: "Specialist Programmer",
    company: "Infosys, Bengaluru",
    description: `• Contributing to the development of Cube Integration Hub (CIH), a centralized integration platform connecting downstream and upstream services.
• Designed and implemented APIs in NestJS, processing incoming payloads with correlationId, messageId, and processingStatus for validation and response handling.
• Integrated Apache Kafka for asynchronous message handling between microservices, enabling the system to process large payloads and numerous concurrent messages with high throughput.
• Built services to extract, store, and update payload data efficiently using AWS S3 and PostgreSQL, ensuring accurate downstream processing.
• Completed training in MERN stack development and built capstone projects — ArtHub (art marketplace) and E-Pharmacy (medicine ordering platform).
• Hands-on experience in building full-stack applications using React.js, Node.js, Express, and MongoDB.`,
    technologies: ["NestJS", "Node.js", "Apache Kafka", "AWS", "PostgreSQL", "React.js", "MongoDB"],
  },
  {
    year: "March 2024 - June 2024",
    role: "Cloud Production Engineer Intern",
    company: "Chargebee, Chennai",
    description: `• Streamlined and maintained the Chargebee application on AWS Cloud Infrastructure.
• Analyzed, debugged, and resolved cloud incidents and service requests.
• Used tools such as Splunk, DataDog, and CloudWatch for monitoring.
• Ensured compliance with security standards and best practices in cloud infrastructure management.`,
    technologies: ["AWS", "Splunk", "DataDog", "CloudWatch", "Cloud Infrastructure"],
  },
];

export const PROJECTS = [
  {
    title: "Cube Integration Hub (CIH)",
    image: project1,
    description: "Developed Cube Integration Hub (CIH), a centralized platform to integrate downstream and upstream services. " +
      "Designed and implemented APIs in NestJS to process and validate incoming payloads. Integrated Apache Kafka to handle " +
      "large-scale, high-volume message streams between services, improving reliability and scalability. Built services to " +
      "store and update payload data, ensuring data accuracy and smooth service communication.",
    technologies: ["NestJS", "Node.js", "Express.js", "Apache Kafka"],
    link: "#",
  },
  {
    title: "ArtHub - Online Art Marketplace",
    image: project2,
    description: "Developed a full-stack application enabling artists to showcase and sell artwork directly to buyers. " +
      "Implemented dynamic filtering and search features for better user experience. Built RESTful APIs and responsive " +
      "UI with Bootstrap; deployed using cloud services.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Bootstrap"],
    link: "#",
  },
  {
    title: "E-Pharmacy Website",
    image: project3,
    description: "Created an online medicine ordering system with secure authentication and role-based access. " +
      "Integrated order tracking, invoice generation, and responsive design for all devices.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Bootstrap"],
    link: "#",
  },
  {
    title: "Python Application Deployment Using AWS ECR and EKS",
    image: project4,
    description: "Orchestrated a CI/CD pipeline using GitHub Actions, Docker, and AWS services. " +
      "Automated deployment of containerized apps to Amazon EKS via AWS ECR. " +
      "Implemented Infrastructure as Code (IaC) and optimized deployment reliability.",
    technologies: ["AWS", "ECR", "EKS", "GitHub Actions", "Docker"],
    link: "#",
  },
];

export const CONTACT = {
  address: "Bengaluru, Karnataka, India",
  phoneNo: "+91 9346409459",
  email: "pasapalabhuvanesh028@gmail.com",
};

export const EDUCATION = [
  {
    year: "2020 - 2024",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "SRM Institute of Science and Technology",
    percentage: "9.21 CGPA",
  },
  {
    year: "2018 - 2020",
    degree: "Intermediate MPC",
    institution: "Sri Chaitanya Junior College",
    percentage: "9.8 CGPA",
  },
  {
    year: "2017 - 2018",
    degree: "SSC",
    institution: "Sri Chaitanya High School",
    percentage: "10 CGPA",
  },
];

// export const STRENGTHS = [
//   "Self-motivated",
//   "Team Player",
//   "Multi-Tasking",
//   "Creative Thinking",
// ];

// export const CERTIFICATIONS = [
//   "Certified in Java Full Stack Development - Wipro TalentNext",
//   "Front-End Development Certification - Udemy",
// ];

// export const TOOLS_TECHNOLOGIES = {
//   programmingLanguages: ["Java", "JavaScript"],
//   webDevelopment: ["HTML", "CSS", "JavaScript", "React.js"],
//   frameworks: ["Spring Framework"],
//   versionControl: ["Git", "GitHub"],
//   tools: ["VS Code", "PyCharm", "Eclipse"],
// };
