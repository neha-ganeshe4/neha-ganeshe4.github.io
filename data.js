// All experience, project and skill content lives here. Edit this file to update the site.

const EXPERIENCE = [
  {
    id: 'linedata',
    role: 'Product Analyst Intern',
    org: 'Linedata Financial Services',
    place: 'Boston, MA',
    dates: 'Jan – May 2026',
    summary: 'Built the reporting pipeline and tracking system that cut monthly prep by ~70% and lifted update compliance from ~40% to 85%+.',
    metrics: ['~70% less reporting prep', '40% → 85%+ compliance', '12 product lines audited'],
    sections: [
      { h: 'Data pipelines & BI', items: [
        'Built a Python Product Intelligence pipeline doing ETL on SAP exports and Productboard API data, producing Power BI-ready fact tables and star-schema Excel workbooks. It cut monthly reporting prep by ~70% and saved 15+ hours per cycle.',
        'Built Power BI dashboards tracking delivery, priority and risk, and budget KPIs for stakeholders from individual managers to leadership.',
        'Engineered Deneb (Vega-Lite) visuals with versioned JSON specs, pixel-regression tests and data-contract checks, so one parameterized template could produce consistent quarterly PDF exports.',
        'Used generative AI to speed up reusable pipelines that flatten and refresh multi-product budget, forecast and actuals workbooks, improving traceability and reducing manual reconciliation.' ]},
      { h: 'Process automation & integrations', items: [
        'Rolled out a Project Tracking System on Microsoft Lists/SharePoint with Power Automate (weekly triggers, Adaptive Cards to Teams), lifting Product Lead update compliance from ~40% to 85%+ across 30+ initiatives.',
        'Led a Jira–Productboard audit across 12 product lines and 24+ Jira projects. Documented sync methods, field mappings and visibility scopes, set a 5-bucket status colour theme, and flagged 6 unintegrated products.',
        'Standardized the integrations and wrote step-by-step guides to support stakeholder adoption and change management.',
        'Automated scheduled exports, stale-project reminders and distribution through SharePoint, Teams and email.' ]},
      { h: 'Finance analytics & data quality', items: [
        'Reconciled budget, forecast and actual views across financial workbooks and ran variance analysis for product managers and finance stakeholders to support monthly planning.',
        'Validated Power BI outputs against raw financial workbooks, and hardened pipelines against inconsistent monthly formats, dirty values and new-product edge cases.',
        'Turned business requirements into KPI definitions and dashboard specs in weekly check-ins, mocking up layouts before development to cut rework. Acted as the point of contact for metric questions.' ]}
    ],
    tools: ['Python', 'Power BI', 'Deneb / Vega-Lite', 'Power Automate', 'SharePoint', 'Jira', 'Productboard']
  },
  {
    id: 'jio-da',
    role: 'Data Analyst',
    org: 'Reliance Jio Infocom',
    place: 'Mumbai, India',
    dates: 'Feb – Jul 2024',
    summary: 'Designed PySpark pipelines for a SAP HANA to Hive migration on 10M+ daily records and automated the ETL with Airflow.',
    metrics: ['10M+ records a day', '25% faster processing', '80% less manual work'],
    sections: [
      { h: 'Engineering & migration', items: [
        'Wrote and optimized SQL for 10M+ record datasets (complex joins, subqueries, hierarchical grouping) across Reliance\'s retail data infrastructure, cutting processing time by 25%.',
        'Designed PySpark pipelines on 10M+ daily records for a SAP HANA to Hive migration, and moved SQL scripts to PySpark for distributed scale.',
        'Scheduled and orchestrated daily ETL with Apache Airflow, reducing manual intervention by 80%.',
        'Troubleshot processing failures, validated outputs and documented fixes across the migration.' ]},
      { h: 'Analytics & insight', items: [
        'Built KPIs such as delivery fulfilment and customer retention for 1M+ e-commerce customers.',
        'Designed Power BI dashboards and maintained 15+ Tableau dashboards for retail and inventory operations, removing reporting duplication.',
        'Benchmarked competitor and market trends, and tested growth and stagnation hypotheses against sales, marketing and customer data, producing recommendations for product and marketing strategy.',
        'Ran 50+ data validation checks a month on documentation going to stakeholder reviews, and root-cause analysis that sped up data migration.' ]}
    ],
    tools: ['SQL', 'PySpark', 'Apache Airflow', 'Hive', 'SAP HANA', 'Tableau', 'Power BI']
  },
  {
    id: 'jio-pm',
    role: 'Product Manager',
    org: 'Reliance Jio Infocom',
    place: 'Mumbai, India',
    dates: 'Jul 2022 – Feb 2024',
    summary: 'Owned 15+ features across Ajio, JioBook and JioPC, leading a team of 15 graduate trainees from research to launch.',
    metrics: ['15+ features shipped', '20% adoption growth', '15% fewer crashes'],
    sections: [
      { h: 'Product leadership', items: [
        'Owned the lifecycle of 15+ features across three products (Ajio e-commerce app, JioBook and JioPC), leading 15 graduate trainees through development, testing and launch.',
        'Analysed rival apps to find market gaps, and used the findings to prioritize features and shape roadmaps with cross-functional teams.',
        'Delivered 5 features ahead of schedule, improving customer satisfaction by 20%.',
        'Led testing of JioBook, JioPC and 12 Jio FTTX products (JioCinema, JioTV and more), managing dependencies, clearing blockers and presenting recommendations to leadership.' ]},
      { h: 'Research, design & delivery', items: [
        'Ran user interviews and voice-of-customer sessions that surfaced 50+ enhancements. Wrote user stories, acceptance criteria and Jobs to Be Done.',
        'Wireframed 150+ frames for a UI/UX redesign with the design team, and ran A/B tests to decide what to build.',
        'Wrote PRDs, journey maps, user docs and onboarding guides for 15+ launches, and supported go-to-market for JioBook.',
        'Worked in Scrum with engineering, design and QA, managing 100+ Jira tickets a week and speeding sprint completion by 15%.',
        'Built project plans with work breakdown structures in Microsoft Project, and managed change control for 30+ enhancement requests.' ]},
      { h: 'Quality & performance', items: [
        'Tracked KPIs with SQL and Excel to drive 20% feature adoption growth, and built Excel and Tableau views that raised efficiency by 20%.',
        'Analysed app logs and user behaviour to cut crash rates by 15%.',
        'Logged 800+ bugs across 5 in-house apps in Excel, wrote test cases for the MyJio ChatBot, and tracked its accuracy and user feedback trends.',
        'Coordinated a third-party vendor on an external app, turning QA findings into technical requirements and escalating defects.' ]}
    ],
    tools: ['Jira', 'SQL', 'Excel', 'Tableau', 'Figma', 'Microsoft Project']
  },
  {
    id: 'neu',
    role: 'Campus roles',
    org: 'Northeastern University',
    place: 'Boston, MA',
    dates: '2025 – 2026',
    summary: 'Instructional Assistant in ITS Client Experience, and Residential Security Officer.',
    metrics: [],
    sections: [
      { h: 'Instructional Assistant, ITS Client Experience (Sep – Dec 2026)', items: [
        'Gave front-line help on classroom and audiovisual systems, troubleshooting hardware, display and connectivity issues.',
        'Set up and monitored projectors, computers and AV equipment, and helped faculty, students and staff with technical questions.',
        'Documented recurring issues and escalated complex ones to the right IT teams.' ]},
      { h: 'Residential Security Officer (Aug 2025 – Jun 2026)', items: [
        'Resolved student questions in real time as the front-line contact in a residential setting.',
        'Verified IDs and granted building access through the Husky ID tap-in system.',
        'Responded to emergencies and escalations, staying in direct contact with supervisors and NUPD.' ]}
    ],
    tools: []
  }
];

// t = categories used by the filter chips: product | data | ai
const PROJECTS = [
  { title: 'TradeShock AI', sub: 'Wayfair supply-chain hackathon', t: ['ai', 'product'],
    summary: 'AI platform that shows how tariff changes hit SKUs, suppliers and margins.',
    overview: 'A decision-support platform that analyses tariff changes, assesses SKU and supplier exposure, and quantifies the impact on landed cost, profit margins and purchase orders.',
    items: ['Co-developed a multi-agent workflow (Policy, Exposure, Cost, PO, Mitigation, Execution) on top of a deterministic tariff engine.',
            'Added provider-abstracted LLM integrations for parsing and for drafting supplier negotiations.',
            'Built scenario-based analytics with before/after impact comparison, and configurable Jira ticket automation.'],
    tools: ['Python', 'FastAPI', 'React', 'TypeScript'] },
  { title: 'MedAssist AI', sub: 'GenAI for healthcare', t: ['ai', 'data'],
    summary: 'Biomedical knowledge platform with RAG and knowledge graphs.',
    overview: 'A GenAI-powered platform that ingests and organizes medical data from many sources to support semantic search, rare-disease information retrieval and evidence-based clinical decision support.',
    items: ['Combined LLMs, Retrieval-Augmented Generation and knowledge graphs.', 'Built Snowflake-based data workflows to ingest and structure the data.'],
    tools: ['LLMs', 'RAG', 'Knowledge graphs', 'Snowflake'] },
  { title: 'MSL Training Platform', sub: 'AI hackathon · Oct 2025', t: ['ai', 'product'],
    summary: 'Chatbot that simulates physician conversations for training.',
    overview: 'An AI chatbot and web app that works as a high-fidelity training tool for Medical Science Liaisons, simulating physician conversations on topics like data validity and therapy costs.',
    items: ['Used an LLM via Hugging Face to generate persona-based questions.', 'Added Whisper AI for real-time speech-to-text so practice feels like a real conversation.'],
    tools: ['Hugging Face', 'Whisper AI', 'Web app'] },
  { title: 'MedGuard', sub: 'Healthcare data quality & AI governance', t: ['data', 'ai'],
    summary: 'Checked whether health datasets are ready for AI training.',
    overview: 'Analysed synthetic cardiac and diabetes datasets to judge AI training-data readiness.',
    items: ['Found a 73/27 demographic imbalance in a diabetes cohort.', 'Defined validation checks for missing values, duplicate records and potential patient identifiers.', 'Applied de-identification and data-quality criteria, and documented the limitations that affect responsible AI development.'],
    tools: ['Data quality', 'Responsible AI', 'Python'] },
  { title: 'Glitch', sub: 'Predictive analytics & healthcare product', t: ['data', 'product'],
    summary: 'Menopause care research plus a hot-flash risk model (0.735 AUC).',
    overview: 'Researched menopause healthcare gaps across 25+ sources, covering symptom prevalence, treatment access and opportunities for data-driven solutions.',
    items: ['Contributed to a logistic regression model on a clinical dataset of 500+ records.', 'Reached 0.735 AUC with repeated cross-validation to predict hot-flash risk.'],
    tools: ['Python', 'Logistic regression', 'Cross-validation'] },
  { title: 'Global Agricultural Tariff Analysis', sub: 'Statistical modelling · Mar–May 2025', t: ['data'],
    summary: 'Bayesian and Poisson models on WTO tariffs for 100+ economies.',
    overview: 'Analysed WTO tariff data across 100+ economies to support policy recommendations.',
    items: ['Built predictive models (Poisson GLM, MLE) and used Bayesian modelling.', 'Ran t-tests and chi-squared tests on regional and category tariff differences.', 'Visualised the results with Seaborn and Matplotlib.'],
    tools: ['Python', 'Seaborn', 'Matplotlib'] },
  { title: 'Investment Fund Management System', sub: 'SQL & databases · Oct–Nov 2024', t: ['data'],
    summary: 'Investment tracking platform with a Power BI dashboard.',
    overview: 'Led development of a platform for tracking mutual funds, hedge funds and bonds.',
    items: ['Defined product requirements and user workflows.', 'Designed the ERD and physical schema, and built SQL pipelines and CRUD operations.', 'Delivered a Power BI dashboard for investment insights.'],
    tools: ['SQL', 'ERD', 'Power BI'] },
  { title: 'Klarna Risk Assessment', sub: 'Fintech risk & strategy · Apr–May 2025', t: ['product'],
    summary: 'Third-party AI risk framework with a change-management plan.',
    overview: 'Developed a framework for assessing third-party AI risk covering governance, impact analysis and regulation.',
    items: ['Applied the ADKAR change management model and business-impact metrics.', 'Assessed operational dependencies, implementation readiness and mitigation strategies.', 'Presented a risk-benefit analysis to stakeholders.'],
    tools: ['Risk governance', 'ADKAR', 'Strategy'] },
  { title: 'SHEIN UI/UX Redesign', sub: 'Product strategy & UX', t: ['product'],
    summary: 'Redesigned product discovery to reduce decision fatigue.',
    overview: 'Redesigned e-commerce product discovery and shopping journeys in Figma.',
    items: ['Proposed Quick View, Shop the Look and an AI chatbot assistant.', 'Aimed to streamline navigation and improve the shopping experience.'],
    tools: ['Figma', 'UX design'] },
  { title: 'NXT Thrive', sub: 'Product hackathon · Mar 2025', t: ['product', 'ai'],
    summary: 'AI wellness assistant to prevent academic burnout.',
    overview: 'Designed an AI-driven wellness assistant that uses sentiment analysis and workload balancing to predict and prevent academic burnout.',
    items: ['Led user research with interviews and surveys.', 'Ran competitive analysis and built user personas to shape tailored support.'],
    tools: ['Sentiment analysis', 'User research', 'Personas'] },
  { title: 'Pinterest Pin Finder', sub: 'Case study · May–Jun 2025', t: ['product'],
    summary: 'A feature to help users find their saved Pins fast.',
    overview: 'Designed a feature that helps users quickly locate saved Pins.',
    items: ['Analysed user pain points and proposed MVP features.', 'Showed impact with adoption metrics.', 'Created visual prototypes and value messaging for a simulated go-to-market pitch.'],
    tools: ['Product strategy', 'Prototyping', 'GTM'] },
  { title: 'LinkedIn Job Search Redesign', sub: 'Product case study', t: ['product'],
    summary: 'Job search redesigned for early-career users.',
    overview: 'Redesigned the job search experience to reduce job-search fatigue and improve confidence.',
    items: ['Added smart filters, clearer match insights and application tracking.'],
    tools: ['UX', 'Product design'] },
  { title: 'Inside Out: Horror Within', sub: 'Data science · Feb–Mar 2025', t: ['data', 'ai'],
    summary: 'Turned Inside Out 2 into a horror short. Won Best Picture.',
    overview: 'Transformed Inside Out 2 into a horror-themed short film using image processing.',
    items: ['Used Python, OpenCV and PIL for cartoonization, automated captions and storyboarding.', 'Won Best Picture and Best Cinematography.'],
    tools: ['Python', 'OpenCV', 'PIL'] },
  { title: 'COVID Growth Study', sub: 'Tableau · Nov 2021', t: ['data'],
    summary: 'Interactive dashboards on global COVID trends.',
    overview: 'Analysed a global COVID-19 dataset (9 variables, mixed data types).',
    items: ['Built interactive dashboards of case volume and severity trends.', 'Added dynamic filtering by country, date and severity.'],
    tools: ['Tableau'] },
  { title: 'Automobile Price Prediction', sub: 'Machine learning · Jan 2021', t: ['data', 'ai'],
    summary: 'Linear regression to predict car prices.',
    overview: 'Built a linear regression model on historical data to predict car prices from mileage, engine size and horsepower.',
    items: ['Validated with MAE and RMSE.', 'Identified the key price drivers for buyers, manufacturers and dealerships.'],
    tools: ['Python', 'scikit-learn'] }
];

const SKILLS = [
  { h: 'Product', p: ['Roadmapping', 'PRDs', 'User research', 'A/B testing', 'Go-to-market', 'Wireframing', 'Prioritization'] },
  { h: 'Data & BI', p: ['SQL', 'Python', 'R', 'Power BI', 'Tableau', 'Excel', 'Looker', 'Amplitude'] },
  { h: 'Data engineering', p: ['ETL', 'PySpark', 'Airflow', 'Hive', 'Star schema & ERD', 'SAP HANA'] },
  { h: 'AI', p: ['LLM-assisted development', 'RAG', 'Hugging Face', 'Whisper', 'scikit-learn', 'TensorFlow'] },
  { h: 'Agile & delivery', p: ['Scrum', 'Jira', 'Release management', 'Change management', 'Vendor coordination'] },
  { h: 'Tools & web', p: ['Figma', 'Productboard', 'Power Automate', 'SharePoint', 'Snowflake', 'AWS', 'Azure', 'React', 'FastAPI', 'TypeScript'] }
];
