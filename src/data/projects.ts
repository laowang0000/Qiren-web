export type ProjectGalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  repositoryName: string;
  title: string;
  name: string;
  slug: string;
  github: string | null;
  label?: string;
  image: string | null;
  video?: string;
  galleryImages?: ProjectGalleryImage[];
  imageAlt: string;
  caption: string;
  placeholderText?: string;
  description: string;
  summary: string;
  tags: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    repositoryName: "TNL-Stable-V2-Submission-Package",
    title: "Malaysia Brand Campaign Sentiment Analysis",
    name: "Malaysia Brand Campaign Sentiment Analysis",
    slug: "malaysia-brand-campaign-sentiment-analysis",
    github: null,
    label: "NLP Research Prototype",
    image: "/assets/projects/malaysia-brand-sentiment/figure_11.png",
    imageAlt: "Malaysia brand campaign sentiment analysis review interface",
    caption: "ASP.NET Core Razor demo interface for analysing customer feedback sentiment.",
    galleryImages: [
      {
        src: "/assets/projects/malaysia-brand-sentiment/figure_11.png",
        alt: "Analyze Review interface for brand campaign sentiment analysis",
        caption: "Analyze Review interface.",
      },
      {
        src: "/assets/projects/malaysia-brand-sentiment/figure_04.png",
        alt: "Three-stage RoBERTa sentiment analysis pipeline diagram",
        caption: "Three-stage RoBERTa pipeline.",
      },
      {
        src: "/assets/projects/malaysia-brand-sentiment/figure_08.png",
        alt: "Malaysia brand campaign sentiment analysis performance chart",
        caption: "Overall metric chart.",
      },
      {
        src: "/assets/projects/malaysia-brand-sentiment/figure_09.png",
        alt: "Per-aspect macro F1 chart for sentiment analysis",
        caption: "Per-aspect macro F1.",
      },
    ],
    description:
      "An NLP research prototype for Malaysian brand feedback that predicts overall sentiment plus aspect-level sentiment for promotion, payment, and customer experience using a three-stage RoBERTa pipeline.",
    summary:
      "A Malaysian customer feedback analytics project with a balanced 600-record dataset, refined aspect labels, transformer fine-tuning, evaluation, and a local Razor dashboard for presenting the workflow.",
    tags: [
      "NLP",
      "Sentiment Analysis",
      "Aspect-Based Sentiment Analysis",
      "RoBERTa",
      "DeBERTa",
      "Python",
      "PyTorch",
      "Hugging Face",
      "ASP.NET Core",
      "Razor",
    ],
    featured: false,
  },
  {
    repositoryName: "web3-llm",
    title: "Web3 Finance LLM: Cryptocurrency Market Insights & Query Analyzer",
    name: "Web3 Finance LLM: Cryptocurrency Market Insights & Query Analyzer",
    slug: "web3-llm",
    github: "https://github.com/laowang0000/web3-llm",
    label: "Main Final Year Project",
    image: "/assets/projects/web3-llm/web3_04_react_insight_engine.png",
    imageAlt: "Web3 Finance LLM React insight engine dashboard screenshot",
    caption: "React insight engine dashboard from the Web3 Finance LLM project.",
    galleryImages: [
      {
        src: "/assets/projects/web3-llm/web3_02_rag_workflow.png",
        alt: "Web3 Finance LLM RAG workflow diagram",
        caption: "RAG workflow.",
      },
      {
        src: "/assets/projects/web3-llm/web3_04_react_insight_engine.png",
        alt: "Web3 Finance LLM React insight engine dashboard screenshot",
        caption: "React Insight Engine.",
      },
      {
        src: "/assets/projects/web3-llm/web3_06_runtime_status.png",
        alt: "Web3 Finance LLM runtime status screen",
        caption: "Runtime status.",
      },
      {
        src: "/assets/projects/web3-llm/web3_07_llm_rag_result.png",
        alt: "Web3 Finance LLM RAG evidence result screen",
        caption: "RAG evidence result.",
      },
      {
        src: "/assets/projects/web3-llm/web3_09_prediction_result_btc.png",
        alt: "Web3 Finance LLM prediction benchmark result screen",
        caption: "Prediction benchmark result.",
      },
      {
        src: "/assets/projects/web3-llm/web3_10_remote_research_api.png",
        alt: "Web3 Finance LLM remote research API validation screen",
        caption: "Remote Research API validation.",
      },
    ],
    description:
      "A full-stack AI-powered cryptocurrency market insight and query analyzer developed as a Final Year Project. The system combines large language model integration, Retrieval-Augmented Generation, cryptocurrency market data processing, a prediction engine, a FastAPI backend, and a React/Vite frontend dashboard.",
    summary:
      "A full-stack AI-powered cryptocurrency market insight and query analyzer developed as a Final Year Project. The system combines large language model integration, Retrieval-Augmented Generation, cryptocurrency market data processing, a prediction engine, a FastAPI backend, and a React/Vite frontend dashboard.",
    tags: [
      "AI",
      "LLM",
      "RAG",
      "Python",
      "FastAPI",
      "React",
      "Vite",
      "JavaScript",
      "Chroma",
      "Ollama",
      "Machine Learning",
      "Cryptocurrency Analytics",
      "Full-Stack",
    ],
    featured: true,
  },
  {
    repositoryName: "TSW-OntoChain",
    title: "OntoChain: Semantic Blockchain Risk System",
    name: "OntoChain: Semantic Blockchain Risk System",
    slug: "TSW-OntoChain",
    github: "https://github.com/laowang0000/TSW-OntoChain",
    label: "Featured Project",
    image: "/assets/projects/ontochain/ontochain_01_system_architecture.png",
    imageAlt: "OntoChain semantic blockchain risk system architecture diagram",
    caption: "System architecture for the OntoChain Semantic Blockchain Risk System.",
    galleryImages: [
      {
        src: "/assets/projects/ontochain/ontochain_01_system_architecture.png",
        alt: "OntoChain system architecture diagram",
        caption: "System architecture.",
      },
      {
        src: "/assets/projects/ontochain/ontochain_04_rdf_graph_generation.png",
        alt: "OntoChain RDF graph generation screen",
        caption: "RDF generation.",
      },
      {
        src: "/assets/projects/ontochain/ontochain_06_ontology_class_hierarchy.png",
        alt: "OntoChain ontology class hierarchy view",
        caption: "Ontology hierarchy.",
      },
      {
        src: "/assets/projects/ontochain/ontochain_07_inference_rule_flow.png",
        alt: "OntoChain inference rule flow diagram",
        caption: "Inference flow.",
      },
      {
        src: "/assets/projects/ontochain/ontochain_09_sparql_query.png",
        alt: "OntoChain SPARQL query screen",
        caption: "SPARQL query.",
      },
      {
        src: "/assets/projects/ontochain/ontochain_10_knowledge_graph_visualisation.png",
        alt: "OntoChain knowledge graph visualisation",
        caption: "Knowledge graph visualisation.",
      },
    ],
    description:
      "A Semantic Web-based blockchain risk analysis system that models blockchain entities and risk patterns using RDF, RDFS, OWL, SPARQL, inference, ontology modelling, and knowledge graph concepts.",
    summary:
      "A Semantic Web-based blockchain risk analysis system that models blockchain entities and risk patterns using RDF, RDFS, OWL, SPARQL, inference, ontology modelling, and knowledge graph concepts.",
    tags: [
      "Semantic Web",
      "RDF",
      "RDFS",
      "OWL",
      "SPARQL",
      "Inference",
      "Knowledge Graph",
      "Python",
      "Blockchain Analytics",
      "Ontology",
    ],
    featured: true,
  },
  {
    repositoryName: "traffic-prediction-machine-learning",
    title: "Traffic Accident Prediction Using Machine Learning",
    name: "Traffic Accident Prediction Using Machine Learning",
    slug: "traffic-prediction-machine-learning",
    github: "https://github.com/laowang0000/traffic-prediction-machine-learning",
    image: "/assets/projects/traffic-prediction/traffic_01_class_distribution.png",
    imageAlt: "Traffic accident prediction class distribution chart",
    caption: "Class distribution visual from the traffic prediction workflow.",
    galleryImages: [
      {
        src: "/assets/projects/traffic-prediction/traffic_01_class_distribution.png",
        alt: "Traffic accident prediction class distribution chart",
        caption: "Class distribution.",
      },
      {
        src: "/assets/projects/traffic-prediction/traffic_02_feature_distribution_grid.png",
        alt: "Traffic accident prediction feature distribution grid",
        caption: "Feature distribution.",
      },
      {
        src: "/assets/projects/traffic-prediction/traffic_03_feature_correlation_heatmap.png",
        alt: "Traffic accident prediction feature correlation heatmap",
        caption: "Correlation heatmap.",
      },
      {
        src: "/assets/projects/traffic-prediction/traffic_04_feature_importance.png",
        alt: "Traffic accident prediction feature importance chart",
        caption: "Feature importance.",
      },
      {
        src: "/assets/projects/traffic-prediction/traffic_05_random_forest_confusion_matrix.png",
        alt: "Traffic accident prediction confusion matrix",
        caption: "Confusion matrix.",
      },
      {
        src: "/assets/projects/traffic-prediction/traffic_07_xgboost_roc_curve.png",
        alt: "Traffic accident prediction ROC curve",
        caption: "ROC curve.",
      },
    ],
    description:
      "A machine learning project focused on applying a structured ML workflow to traffic-related prediction, including data preprocessing, classification, model training, and model evaluation.",
    summary:
      "A machine learning project focused on applying a structured ML workflow to traffic-related prediction, including data preprocessing, classification, model training, and model evaluation.",
    tags: [
      "Python",
      "Machine Learning",
      "Data Preprocessing",
      "Classification",
      "Model Training",
      "Model Evaluation",
      "Jupyter Notebook",
    ],
    featured: false,
  },
  {
    repositoryName: "bridge-recognition",
    title: "Bridge Recognition Using Pattern Recognition Techniques",
    name: "Bridge Recognition Using Pattern Recognition Techniques",
    slug: "bridge-recognition",
    github: "https://github.com/laowang0000/bridge-recognition",
    image: "/assets/projects/bridge-recognition/bridge_09_notebook_sample_images.png",
    imageAlt: "Bridge recognition notebook sample images",
    caption: "Notebook sample images from the bridge recognition project.",
    galleryImages: [
      {
        src: "/assets/projects/bridge-recognition/bridge_01_ml_pipeline_flowchart.png",
        alt: "Bridge recognition machine learning pipeline flowchart",
        caption: "ML pipeline.",
      },
      {
        src: "/assets/projects/bridge-recognition/bridge_02_data_preprocessing_flowchart.png",
        alt: "Bridge recognition preprocessing flowchart",
        caption: "Preprocessing flowchart.",
      },
      {
        src: "/assets/projects/bridge-recognition/bridge_05_sample_datuk_mohd_zin.png",
        alt: "Bridge recognition bridge sample image",
        caption: "Bridge sample image.",
      },
      {
        src: "/assets/projects/bridge-recognition/bridge_09_notebook_sample_images.png",
        alt: "Bridge recognition notebook sample images",
        caption: "Notebook sample images.",
      },
      {
        src: "/assets/projects/bridge-recognition/bridge_10_svm_pca_test_confusion_matrix.png",
        alt: "Bridge recognition confusion matrix",
        caption: "Confusion matrix.",
      },
    ],
    description:
      "An AI and pattern recognition project focused on bridge recognition using notebook-based experimentation, pattern recognition concepts, and classification-related workflow.",
    summary:
      "An AI and pattern recognition project focused on bridge recognition using notebook-based experimentation, pattern recognition concepts, and classification-related workflow.",
    tags: [
      "Python",
      "Pattern Recognition",
      "Artificial Intelligence",
      "Classification",
      "Jupyter Notebook",
      "Data Analysis",
    ],
    featured: false,
  },
  {
    repositoryName: "TES",
    title: "Natural Language Rule-Based Plant Disease Diagnosis Expert System",
    name: "Natural Language Rule-Based Plant Disease Diagnosis Expert System",
    slug: "plant-disease-diagnosis-expert-system",
    github: "https://github.com/laowang0000/TES",
    image: null,
    imageAlt: "Plant disease diagnosis expert system project placeholder",
    caption: "Rule-based expert system project with natural language symptom input.",
    placeholderText: "CLIPS expert system for plant disease diagnosis",
    description:
      "An expert-system project for agricultural plant disease diagnosis that maps natural language symptom descriptions into structured CLIPS facts and uses uncertainty reasoning to infer likely diseases and treatment advice.",
    summary:
      "A natural language rule-based plant disease diagnosis expert system using CLIPS, structured knowledge representation, certainty factors, Bayesian reasoning, and Dempster-Shafer evidence handling.",
    tags: [
      "Expert Systems",
      "CLIPS",
      "NLP",
      "Uncertainty Reasoning",
      "Bayesian Networks",
      "Dempster-Shafer",
    ],
    featured: false,
  },
  {
    repositoryName: "multi-class-waste-classification",
    title: "Multi-Class Waste Classification via Computer Vision",
    name: "Multi-Class Waste Classification via Computer Vision",
    slug: "multi-class-waste-classification",
    github: null,
    image: null,
    imageAlt: "Multi-class waste classification computer vision project placeholder",
    caption: "Computer vision pipeline for classifying waste categories.",
    placeholderText: "Computer vision waste classification pipeline",
    description:
      "A computer vision project for household waste classification that combines image enhancement, robust preprocessing, data augmentation, and CNN-based image classification.",
    summary:
      "A multi-class waste classification workflow using histogram equalization, adaptive median filtering, Sobel/Canny edge detection, augmentation, transfer learning, and classic feature baselines.",
    tags: [
      "Computer Vision",
      "Deep Learning",
      "Image Classification",
      "CNN",
      "ResNet",
      "MobileNet",
      "Feature Extraction",
    ],
    featured: false,
  },
  {
    repositoryName: "computational-intelligence-sentiment-engine",
    title: "Sentiment Analysis Engine via Computational Intelligence",
    name: "Sentiment Analysis Engine via Computational Intelligence",
    slug: "computational-intelligence-sentiment-engine",
    github: null,
    image: null,
    imageAlt: "Computational intelligence sentiment analysis engine placeholder",
    caption: "Hybrid computational intelligence approach to sentiment analysis.",
    placeholderText: "Hybrid fuzzy, swarm, and neural sentiment engine",
    description:
      "A computational intelligence sentiment analysis concept that combines fuzzy rule-based interpretation, neural models, attention/Transformer features, and optimization for more explainable polarity prediction.",
    summary:
      "A hybrid sentiment-analysis architecture exploring fuzzy logic, swarm or evolutionary optimization, neural networks, and Transformer-style semantic representations.",
    tags: [
      "Computational Intelligence",
      "Fuzzy Logic",
      "Swarm Optimization",
      "Neural Networks",
      "Transformer",
      "Sentiment Analysis",
    ],
    featured: false,
  },
  {
    repositoryName: "hybrid-algorithm-engineering",
    title: "Hybrid Algorithm Engineering & Cross-Repository Optimization",
    name: "Hybrid Algorithm Engineering & Cross-Repository Optimization",
    slug: "hybrid-algorithm-engineering",
    github: null,
    image: null,
    imageAlt: "Hybrid algorithm engineering and optimization project placeholder",
    caption: "Algorithm design project focused on benchmarking and optimization.",
    placeholderText: "Hybrid algorithm design and benchmark testing",
    description:
      "An algorithm design project focused on analysing open-source implementations, diagnosing complexity and memory-use bottlenecks, and combining strategies into more efficient hybrid algorithms.",
    summary:
      "A cross-repository algorithm engineering workflow covering complexity analysis, divide-and-conquer, dynamic programming, heuristic search, adaptive strategy design, and automated benchmarking.",
    tags: [
      "Algorithm Design",
      "Optimization",
      "Benchmark Testing",
      "Time Complexity",
      "Space Complexity",
      "Dynamic Programming",
      "Heuristic Search",
    ],
    featured: false,
  },
  {
    repositoryName: "enterprise-network-security-simulation",
    title: "Enterprise Multi-Tier Network Architecture & Security Simulation",
    name: "Enterprise Multi-Tier Network Architecture & Security Simulation",
    slug: "enterprise-network-security-simulation",
    github: null,
    image: null,
    imageAlt: "Enterprise network architecture and security simulation placeholder",
    caption: "Cisco Packet Tracer network architecture and security simulation.",
    placeholderText: "Enterprise network topology and security simulation",
    description:
      "A Cisco Packet Tracer project that designs and deploys a multi-layer enterprise network topology with departmental segmentation, dynamic routing, access controls, and disaster-recovery simulation.",
    summary:
      "A network architecture simulation using core-distribution-access design, VLANs, 802.1Q trunking, STP/RSTP, EtherChannel, OSPF, ACLs, NAT/PAT, and DHCP relay.",
    tags: [
      "Cisco Packet Tracer",
      "Computer Networks",
      "OSPF",
      "VLAN",
      "Trunking",
      "ACL",
      "Network Topology",
      "Security",
    ],
    featured: false,
  },
  {
    repositoryName: "rush-to-clean",
    title: "Rush to Clean",
    name: "Rush to Clean",
    slug: "rush-to-clean",
    github: "https://github.com/laowang0000/rush-to-clean",
    image: null,
    video: "/assets/projects/rush-to-clean/rush-to-clean-gameplay-demo.mp4",
    imageAlt: "Rush to Clean gameplay demonstration video",
    caption: "Gameplay demonstration video.",
    description:
      "A Unity game project built with Unity 2021.3.23f1. The project includes gameplay scripts, scenes, prefabs, materials, art assets, and Unity project settings, with the Main Menu scene as its local starting point.",
    summary:
      "A Unity game project built with Unity 2021.3.23f1, using C#, ShaderLab, and HLSL across its gameplay and visual assets.",
    tags: [
      "Unity",
      "C#",
      "ShaderLab",
      "HLSL",
      "Game Development",
      "Interactive Design",
    ],
    featured: false,
  },
];



