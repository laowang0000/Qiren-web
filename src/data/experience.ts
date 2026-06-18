export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  keyExperience: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Quality Assurance Intern",
    company: "Galactic Horizons Sdn. Bhd.",
    period: "21 July 2025 - 11 October 2025",
    location: "Malaysia",
    description:
      "Gained hands-on experience in software quality assurance, regression testing, API validation, test documentation, automation testing research, KYC and compliance wall testing, and CI/CD testing workflow exposure within a professional IT environment.",
    keyExperience: [
      "Application regression testing",
      "Functional testing",
      "API validation using Postman",
      "Large-scale user migration validation",
      "Multilingual feature testing",
      "Quality Owner documentation and coordination",
      "KYC and compliance wall testing",
      "Test automation development and optimization",
      "CI/CD workflow exposure",
    ],
  },
];
