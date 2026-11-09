// All experience, project and skill content lives here. Edit this file to update the site.

const EXPERIENCE = [
  {
    id: 'linedata',
    role: 'Product Analyst Intern',
    org: 'Linedata Financial Services',
    place: 'Boston, MA',
    dates: 'Jan – May 2026',
    summary: 'I replaced hours of manual monthly reporting with a pipeline, and got product leads to actually update their projects.',
    metrics: ['~70% less reporting prep', '40% → 85%+ update compliance', '12 product lines audited'],
    story: [
      'When I joined Linedata, monthly reporting meant more than 15 hours of manual work every cycle: exports from SAP, data from Productboard, and a lot of copying between spreadsheets. So I started there. I wrote a Python pipeline that pulls the SAP exports and Productboard data, cleans them, and produces tables that Power BI can read directly. Monthly reporting prep dropped by about 70%.',
      'On top of that data I built Power BI dashboards that followed delivery, priority and risk, and budget numbers, for everyone from individual product managers to leadership. For the quarterly PDF reports I built one parameterized visual template, with version-controlled specs and automated checks, so every export looked the same.',
      'The next problem was people, not data. Product leads were not updating their projects regularly, so I built a project tracking system in Microsoft Lists and SharePoint, with Power Automate sending weekly reminders to Teams. Update compliance went from about 40% to over 85% across 30+ initiatives.',
      'I also audited how Jira and Productboard talked to each other across 12 product lines and 24+ Jira projects. I wrote down how each one synced, standardized the field mappings, set a shared status colour scheme, and flagged six products that weren\'t connected at all. Then I wrote step-by-step guides so teams could adopt the changes.',
      'Along the way I worked closely with finance. I reconciled budget, forecast and actuals, explained the variances to product managers, and checked every dashboard number against the raw workbooks before anyone relied on it. In weekly check-ins I turned their questions into KPI definitions and mocked up layouts first, which saved a lot of rework.'
    ],
    tools: ['Python', 'Power BI', 'Power Automate', 'SharePoint', 'Jira', 'Productboard', 'Generative AI']
  },
  {
    id: 'jio-da',
    role: 'Data Analyst',
    org: 'Reliance Jio Infocom',
    place: 'Mumbai, India',
    dates: 'Feb – Jul 2024',
    summary: 'I moved from product into data, helping migrate a retail data platform that handled 10M+ records a day.',
    metrics: ['10M+ records a day', '25% faster processing', '80% less manual work'],
    story: [
      'After more than a year as a product manager, I moved to Reliance\'s data team. The big job was migrating retail data from SAP HANA to Hive. I worked with data engineers to design PySpark pipelines that handled over 10 million records a day, and moved existing SQL scripts into PySpark so they could scale across a distributed system.',
      'I also wrote SQL for very large tables (10M+ records) and tuned the queries until processing time dropped by 25%. To keep the migrated pipelines running without people babysitting them, I used Apache Airflow to schedule the jobs and run the daily ETL. That cut manual intervention by 80%.',
      'The data was only useful if someone could read it, so I built KPIs like delivery fulfilment and customer retention for more than a million e-commerce customers. I also designed Power BI dashboards and maintained over 15 Tableau dashboards for retail and inventory teams, merging reports that overlapped.',
      'I also looked outward. I benchmarked competitors, tested hypotheses about what was driving growth or stagnation against sales and customer data, and turned the results into recommendations for product and marketing. Each month I ran 50+ validation checks on documentation going to stakeholders, because I wanted the numbers to hold up in review.'
    ],
    tools: ['SQL', 'PySpark', 'Apache Airflow', 'Hive', 'SAP HANA', 'Tableau', 'Power BI']
  },
  {
    id: 'jio-pm',
    role: 'Product Manager',
    org: 'Reliance Jio Infocom',
    place: 'Mumbai, India',
    dates: 'Jul 2022 – Feb 2024',
    summary: 'My first product job: 15+ features across Ajio, JioBook and JioPC, with a team of 15 graduate trainees.',
    metrics: ['15+ features shipped', '20% adoption growth', '15% fewer crashes'],
    story: [
      'My career started at Reliance Jio, where my portfolio covered three very different products: Ajio, an online clothing store, and two hardware products, JioBook and JioPC. I owned the lifecycle of more than 15 features and led a team of 15 graduate trainees from the first idea to launch.',
      'Every feature started with listening. I ran user interviews and voice-of-customer sessions that turned up more than 50 improvements, and studied rival apps to find gaps in the market. I turned what I learned into user stories, acceptance criteria and roadmap priorities. Before engineers built anything, I worked with the design team on 150+ wireframe frames so stakeholders could react to something real, and I ran A/B tests to decide which versions deserved to ship.',
      'Day to day I worked in Scrum with engineering, design and QA, and handled over 100 Jira tickets a week. Sprints finished about 15% faster. I kept project plans and managed 30+ change requests so new scope landed in the timeline without surprises. I also wrote the PRDs, journey maps and onboarding guides for 15+ launches and supported the go-to-market work for JioBook.',
      'Launch wasn\'t the end. I tracked adoption with SQL and Excel, and feature adoption grew 20%. I dug through app logs for performance problems and cut crash rates by 15%. I logged more than 800 bugs across five in-house apps and wrote the test cases for the MyJio ChatBot, then tracked its accuracy and user feedback. I also coordinated with an outside vendor on an external app, turning QA findings into requirements.',
      'Five of my features shipped ahead of schedule, and customer satisfaction rose 20%. I also led testing for JioBook, JioPC and 12 Jio FTTX products such as JioCinema and JioTV, clearing blockers, mentoring the trainees and presenting recommendations to leadership.'
    ],
    tools: ['Jira', 'SQL', 'Excel', 'Tableau', 'Figma', 'Microsoft Project']
  },
  {
    id: 'neu',
    role: 'Campus roles',
    org: 'Northeastern University',
    place: 'Boston, MA',
    dates: '2025 – 2026',
    summary: 'Two student jobs that taught me to stay calm and helpful with people in the moment.',
    metrics: [],
    story: [
      'Alongside my Master\'s, I have worked two campus jobs. From August 2025 to June 2026 I was a Residential Security Officer: the front-line contact for students, answering questions in real time, verifying IDs through the Husky ID tap-in system, and staying in direct contact with supervisors and NUPD when something needed escalating.',
      'From September 2026 I have been an Instructional Assistant in ITS Client Experience. I help faculty, students and staff with classroom technology, setting up and troubleshooting projectors, computers and AV equipment, documenting issues that keep coming back, and passing the hard ones to the right IT team.'
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
    tools: ['Python', 'Seaborn', 'Matplotlib'],
    links: [
      { label: 'Open the notebook', url: 'https://github.com/neha-ganeshe4/Global-Agricultural-Tariff-Analysis/blob/main/FINALPROJECT_GROUP15.ipynb' },
      { label: 'GitHub repo', url: 'https://github.com/neha-ganeshe4/Global-Agricultural-Tariff-Analysis' }] },
  { title: 'Investment Fund Management System', sub: 'SQL & databases · Oct–Nov 2024', t: ['data'],
    summary: 'Investment tracking platform with a Power BI dashboard.',
    overview: 'Led development of a platform for tracking mutual funds, hedge funds and bonds.',
    items: ['Defined product requirements and user workflows.', 'Designed the ERD and physical schema, and built SQL pipelines and CRUD operations.', 'Delivered a Power BI dashboard for investment insights.'],
    tools: ['SQL', 'ERD', 'Power BI'],
    links: [{ label: 'Slides and diagrams on GitHub', url: 'https://github.com/neha-ganeshe4/DMDD_Project' }] },
  { title: 'Klarna Risk Assessment', sub: 'Fintech risk & strategy · Apr–May 2025', t: ['product'],
    summary: 'Third-party AI risk framework with a change-management plan.',
    overview: 'Developed a framework for assessing third-party AI risk covering governance, impact analysis and regulation.',
    items: ['Applied the ADKAR change management model and business-impact metrics.', 'Assessed operational dependencies, implementation readiness and mitigation strategies.', 'Presented a risk-benefit analysis to stakeholders.'],
    tools: ['Risk governance', 'ADKAR', 'Strategy'],
    links: [
      { label: 'View the presentation (PDF)', url: 'https://github.com/neha-ganeshe4/Risk-Assessment-Framework-for-Klarna/blob/main/Klarna%20-%20PPT.pdf' },
      { label: 'GitHub repo', url: 'https://github.com/neha-ganeshe4/Risk-Assessment-Framework-for-Klarna' }] },
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
    tools: ['Product strategy', 'Prototyping', 'GTM'],
    links: [
      { label: 'Read the case study (PDF)', url: 'https://github.com/neha-ganeshe4/Pinterest-Case-Study/blob/main/Pinterest-Case-Study-FINDING-THAT-ONE-PIN.pdf' },
      { label: 'GitHub repo', url: 'https://github.com/neha-ganeshe4/Pinterest-Case-Study' }] },
  { title: 'LinkedIn Job Search Redesign', sub: 'Product case study', t: ['product'],
    summary: 'Job search redesigned for early-career users.',
    overview: 'Redesigned the job search experience to reduce job-search fatigue and improve confidence.',
    items: ['Added smart filters, clearer match insights and application tracking.'],
    tools: ['UX', 'Product design'] },
  { title: 'Inside Out: Horror Within', sub: 'Data science · Feb–Mar 2025', t: ['data', 'ai'],
    summary: 'Turned Inside Out 2 into a horror short. Won Best Picture.',
    overview: 'Transformed Inside Out 2 into a horror-themed short film using image processing.',
    items: ['Used Python, OpenCV and PIL for cartoonization, automated captions and storyboarding.', 'Won Best Picture and Best Cinematography.'],
    tools: ['Python', 'OpenCV', 'PIL'],
    links: [
      { label: 'Read the storyboard (PDF)', url: 'https://github.com/neha-ganeshe4/Oscars_Project/blob/master/Final_PDF/Inside_out_Horror_within_English.pdf' },
      { label: 'GitHub repo', url: 'https://github.com/neha-ganeshe4/Oscars_Project' }] },
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
