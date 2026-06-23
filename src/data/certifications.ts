export type Certification = {
  title: string;
  name: string;
  issueDate: string;
  expiryDate?: string;
  image: string;
  imageAlt: string;
  certificateUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "Google Analytics Certification",
    name: "Ong Qiren",
    issueDate: "May 19, 2026",
    expiryDate: "May 19, 2027",
    image: "/assets/site/google_analytics_certificate.png",
    imageAlt: "Google Analytics Certification for Ong Qiren",
  },
  {
    title: "CCNA: Introduction to Networks",
    name: "qiren ong",
    issueDate: "February 17, 2026",
    image: "/assets/site/ccna-introduction-to-networks-certificate.png",
    imageAlt: "CCNA: Introduction to Networks certificate for qiren ong",
    certificateUrl: "/assets/site/ccna-introduction-to-networks-certificate.pdf",
  },
];
