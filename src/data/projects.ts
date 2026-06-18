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
  github: string;
  label?: string;
  image: string | null;
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
    repositoryName: "rush-to-clean",
    title: "Rush to Clean",
    name: "Rush to Clean",
    slug: "rush-to-clean",
    github: "https://github.com/laowang0000/rush-to-clean",
    image: null,
    imageAlt: "Rush to Clean project visual placeholder",
    caption: "Gameplay video coming soon.",
    placeholderText: "Gameplay video coming soon",
    description:
      "A creative game development project focused on interactive gameplay and user interaction design.",
    summary:
      "A creative game development project focused on interactive gameplay and user interaction design.",
    tags: [
      "Game Development",
      "Interactive Design",
      "User Interaction",
      "Software Development",
    ],
    featured: false,
  },
];
