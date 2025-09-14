// Application Data
const appData = {
  careers: [
    {
      id: 1,
      title: "Software Engineer",
      description: "Design, develop, and maintain software applications and systems",
      salaryRange: "₹5,00,000–₹25,00,000",
      growthProspect: "22% growth by 2030",
      requiredSkills: ["Programming", "Problem Solving", "Logic", "Mathematics", "Teamwork"],
      interests: ["Technology", "Innovation", "Problem Solving"],
      education: ["Computer Science", "Software Engineering", "Mathematics"],
      roadmap: [
        { step: 1, title: "Master Programming Fundamentals", desc: "Learn one language deeply (JavaScript or Python). Understand variables, control flow, functions.", duration: "1-2 months", completed: false },
        { step: 2, title: "Build Real Projects", desc: "Create web apps, APIs, CLIs; publish on GitHub. Focus on 3 portfolio projects.", duration: "2-3 months", completed: false },
        { step: 3, title: "Learn Version Control & Collaboration", desc: "Master Git/GitHub workflows, pull requests, branching.", duration: "2 weeks", completed: false },
        { step: 4, title: "Study Data Structures & Algorithms", desc: "Practice common interview problems and complexity analysis.", duration: "2-3 months", completed: false },
        { step: 5, title: "Apply & Interview", desc: "Prepare behavioral + technical interviews; apply for internships/entry roles.", duration: "1-2 months", completed: false }
      ],
       resources: [
    {
      title: "Full-Stack Web Development with React",
      provider: "Coursera",
      link: "https://www.coursera.org/specializations/full-stack-react",
      type: "Specialization",
      duration: "3 months",
      level: "Intermediate",
      roadmap: [
        { step: 1, title: "Learn React Basics", desc: "JSX, components, props, state", completed: false },
        { step: 2, title: "Backend with Node.js", desc: "APIs, databases, authentication", completed: false },
        { step: 3, title: "Capstone Project", desc: "Full-stack app with React + Node", completed: false }
      ]
    },
    {
      title: "CS50: Introduction to Computer Science",
      provider: "edX",
      link: "https://cs50.harvard.edu/x",
      type: "Course",
      duration: "12 weeks",
      level: "Beginner",
      roadmap: [
        { step: 1, title: "C & Algorithms", desc: "Learn loops, memory, data structures", completed: false },
        { step: 2, title: "Web Basics", desc: "HTML, CSS, JavaScript fundamentals", completed: false },
        { step: 3, title: "Final Project", desc: "Create your own software project", completed: false }
      ]
    }
  ]
    },

    {
  id: 2,
  title: "Data Scientist",
  description: "Analyze large datasets to extract insights and build predictive models",
  salaryRange: "₹6,00,000–₹30,00,000",
  growthProspect: "25% growth by 2030",
  requiredSkills: ["Statistics", "Python", "Machine Learning", "Data Analysis", "Mathematics"],
  interests: ["Analytics", "Research", "Problem Solving", "Technology"],
  education: ["Data Science", "Statistics", "Computer Science", "Mathematics"],
  roadmap: [ /* existing roadmap */ ],
  resources: [
    {
      title: "Applied Data Science with Python",
      provider: "Coursera",
      link: "https://www.coursera.org/specializations/data-science-python",
      type: "Specialization",
      duration: "5 months",
      level: "Intermediate",
      roadmap: [
        { step: 1, title: "Python Libraries", desc: "NumPy, Pandas, Matplotlib", completed: false },
        { step: 2, title: "Data Analysis", desc: "EDA, visualization, feature engineering", completed: false },
        { step: 3, title: "ML Models", desc: "Regression, classification, clustering", completed: false }
      ]
    },
    {
      title: "Machine Learning",
      provider: "Coursera (Andrew Ng)",
      link: "https://www.coursera.org/learn/machine-learning",
      type: "Course",
      duration: "11 weeks",
      level: "Beginner",
      roadmap: [
        { step: 1, title: "ML Basics", desc: "Supervised learning, linear regression", completed: false },
        { step: 2, title: "Advanced Topics", desc: "Neural networks, unsupervised learning", completed: false },
        { step: 3, title: "Project", desc: "Train and deploy a real ML model", completed: false }
      ]
    }
  ]
},
   {
  id: 3,
  title: "Marketing Manager",
  description: "Develop and implement marketing strategies to promote products and services",
  salaryRange: "₹8,50,000–₹25,00,000",
  growthProspect: "10% growth by 2030",
  requiredSkills: ["Communication", "Creativity", "Analytics", "Leadership", "Strategy"],
  interests: ["Communication", "Creativity", "Business", "People"],
  education: ["Marketing", "Business Administration", "Communications"],
  roadmap: [
    { step: 1, title: "Learn Marketing Fundamentals", desc: "Understand marketing mix, channels, and campaign types.", duration: "1-2 months", completed: false },
    { step: 2, title: "Digital Marketing Tools", desc: "Hands-on with Google Analytics, SEO basics, social ad platforms.", duration: "2 months", completed: false },
    { step: 3, title: "Campaigns & Metrics", desc: "Run small campaigns and measure ROI & conversion metrics.", duration: "2-3 months", completed: false },
    { step: 4, title: "Leadership & Strategy", desc: "Manage cross-functional teams and craft strategy.", duration: "3 months", completed: false }
  ],
  resources: [
    {
      title: "Digital Marketing Specialization",
      provider: "Coursera (University of Illinois)",
      link: "https://www.coursera.org/specializations/digital-marketing",
      type: "Specialization",
      duration: "8 months",
      level: "Beginner to Intermediate",
      roadmap: [
        { step: 1, title: "Marketing in a Digital World", desc: "Learn basics of digital channels and strategies.", completed: false },
        { step: 2, title: "SEO & Social Media", desc: "Hands-on with search optimization and campaigns.", completed: false },
        { step: 3, title: "Capstone Project", desc: "Develop a digital marketing campaign for a brand.", completed: false }
      ]
    },
    {
      title: "Google Digital Marketing & E-commerce",
      provider: "Coursera (Google)",
      link: "https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce",
      type: "Professional Certificate",
      duration: "6 months",
      level: "Beginner",
      roadmap: [
        { step: 1, title: "Foundations of Digital Marketing", desc: "Understand key concepts of online marketing.", completed: false },
        { step: 2, title: "Social Media & Ads", desc: "Hands-on with Facebook Ads, Google Ads.", completed: false },
        { step: 3, title: "E-commerce Campaign", desc: "Build an online store and run promotional campaigns.", completed: false }
      ]
    },
    {
      title: "Marketing Analytics: Data Tools and Techniques",
      provider: "edX (Wharton)",
      link: "https://online.wharton.upenn.edu/",
      type: "Course",
      duration: "6 weeks",
      level: "Intermediate",
      roadmap: [
        { step: 1, title: "Intro to Marketing Analytics", desc: "KPIs, metrics, and dashboards.", completed: false },
        { step: 2, title: "Predictive Models", desc: "Learn segmentation and forecasting.", completed: false },
        { step: 3, title: "ROI Measurement", desc: "Optimize campaigns with data insights.", completed: false }
      ]
    }
  ]
},

    {
  id: 4,
  title: "UX/UI Designer",
  description: "Design user interfaces and experiences for digital products",
  salaryRange: "₹4,00,000–₹20,00,000 (",
  growthProspect: "13% growth by 2030",
  requiredSkills: ["Design", "Creativity", "User Research", "Prototyping", "Communication"],
  interests: ["Design", "Creativity", "Technology", "User Experience"],
  education: ["Design", "Human-Computer Interaction", "Psychology"],
  roadmap: [
    { step: 1, title: "Design Foundations", desc: "Learn color theory, typography, layout and interaction basics.", duration: "1-2 months", completed: false },
    { step: 2, title: "Master Design Tools", desc: "Figma / Adobe XD: wireframing, prototyping, components.", duration: "1-2 months", completed: false },
    { step: 3, title: "User Research & Testing", desc: "Learn interview techniques, usability testing, and synthesis.", duration: "2 months", completed: false },
    { step: 4, title: "Portfolio Case Studies", desc: "Publish 3 in-depth case studies showcasing process & results.", duration: "2-3 months", completed: false }
  ],
  resources: [
    {
      title: "Google UX Design Professional Certificate",
      provider: "Coursera (Google)",
      link: "https://www.coursera.org/professional-certificates/google-ux-design",
      type: "Professional Certificate",
      duration: "6 months",
      level: "Beginner",
      roadmap: [
        { step: 1, title: "UX Foundations", desc: "Basics of user experience, empathy, and design process.", completed: false },
        { step: 2, title: "Wireframing & Prototyping", desc: "Practice with Figma and Adobe XD.", completed: false },
        { step: 3, title: "Portfolio Project", desc: "Build case studies for a UX portfolio.", completed: false }
      ]
    },
    {
      title: "Interaction Design Specialization",
      provider: "Coursera (UC San Diego)",
      link: "https://www.coursera.org/specializations/interaction-design",
      type: "Specialization",
      duration: "8 months",
      level: "Intermediate",
      roadmap: [
        { step: 1, title: "Human-Centered Design", desc: "Understand users and design with empathy.", completed: false },
        { step: 2, title: "Prototyping & Evaluation", desc: "Create and test prototypes with real users.", completed: false },
        { step: 3, title: "Capstone Project", desc: "Deliver a full design solution for a real problem.", completed: false }
      ]
    },
    {
      title: "UI/UX Design Bootcamp",
      provider: "Springboard",
      link: "https://www.springboard.com/courses/ui-ux-design-career-track/",
      type: "Bootcamp",
      duration: "6–9 months",
      level: "Beginner to Advanced",
      roadmap: [
        { step: 1, title: "UI Design Principles", desc: "Learn typography, colors, and layout.", completed: false },
        { step: 2, title: "UX Research", desc: "User interviews, personas, and journey mapping.", completed: false },
        { step: 3, title: "Portfolio & Mentorship", desc: "1:1 mentorship and guided portfolio building.", completed: false }
      ]
    }
  ]
},

    {
  id: 5,
  title: "Financial Analyst",
  description: "Analyze financial data to guide investment and business decisions",
  salaryRange: "₹4,00,000–₹18,00,000",
  growthProspect: "6% growth by 2030",
  requiredSkills: ["Mathematics", "Analytics", "Excel", "Finance", "Communication"],
  interests: ["Finance", "Analytics", "Business", "Economics"],
  education: ["Finance", "Economics", "Business Administration", "Mathematics"],
  roadmap: [
    { step: 1, title: "Accounting & Finance Basics", desc: "Financial statements, time value of money.", duration: "1-2 months", completed: false },
    { step: 2, title: "Excel & Financial Modeling", desc: "Build models and forecasts in Excel.", duration: "2 months", completed: false },
    { step: 3, title: "Valuation & Reporting", desc: "Learn valuation techniques and reporting.", duration: "2 months", completed: false },
    { step: 4, title: "Certifications & Internships", desc: "Pursue internships and certifications like CFA Level 1.", duration: "3-6 months", completed: false }
  ],
  resources: [
    {
      title: "Financial Modeling & Valuation Analyst (FMVA)",
      provider: "Corporate Finance Institute (CFI)",
      link: "https://corporatefinanceinstitute.com/certifications/fmva/",
      type: "Professional Certificate",
      duration: "6 months",
      level: "Intermediate",
      roadmap: [
        { step: 1, title: "Excel for Finance", desc: "Master advanced Excel functions.", completed: false },
        { step: 2, title: "Financial Modeling", desc: "Build dynamic forecasting models.", completed: false },
        { step: 3, title: "Valuation", desc: "DCF, comparables, and precedent transactions.", completed: false }
      ]
    },
    {
      title: "Investment Management Specialization",
      provider: "Coursera (University of Geneva)",
      link: "https://www.coursera.org/specializations/investment-management",
      type: "Specialization",
      duration: "5 months",
      level: "Intermediate",
      roadmap: [
        { step: 1, title: "Financial Markets", desc: "Learn the structure and role of markets.", completed: false },
        { step: 2, title: "Portfolio Management", desc: "Build and manage investment portfolios.", completed: false },
        { step: 3, title: "Performance Evaluation", desc: "Analyze returns and risk-adjusted performance.", completed: false }
      ]
    },
    {
      title: "Chartered Financial Analyst (CFA Level 1 Prep)",
      provider: "Kaplan Schweser",
      link: "https://www.schweser.com/cfa",
      type: "Certification Prep",
      duration: "6–9 months",
      level: "Advanced",
      roadmap: [
        { step: 1, title: "Ethics & Professional Standards", desc: "Understand CFA ethics requirements.", completed: false },
        { step: 2, title: "Quantitative Methods & Economics", desc: "Study time value of money, statistics, and economics.", completed: false },
        { step: 3, title: "Financial Reporting & Analysis", desc: "Master income statements, balance sheets, and cash flow analysis.", completed: false }
      ]
    }
  ]
},

   {
  id: 6,
  title: "Project Manager",
  description: "Plan, execute, and oversee projects to ensure successful completion",
  salaryRange: "₹10,00,000–₹30,00,000",
  growthProspect: "11% growth by 2030",
  requiredSkills: ["Leadership", "Communication", "Organization", "Problem Solving", "Teamwork"],
  interests: ["Leadership", "Organization", "Business", "People"],
  education: ["Business Administration", "Project Management", "Any relevant field"],
  roadmap: [
    { step: 1, title: "Project Fundamentals", desc: "Learn basics of project life-cycle and methodologies (Agile/Waterfall).", duration: "1-2 months", completed: false },
    { step: 2, title: "Tools & Planning", desc: "Master tools like Jira/Trello and create project plans.", duration: "1-2 months", completed: false },
    { step: 3, title: "Stakeholder Communication", desc: "Practice reporting, meetings, and stakeholder management.", duration: "2 months", completed: false },
    { step: 4, title: "Certifications & Leadership", desc: "PMP/Scrum certifications and leading distributed teams.", duration: "3 months", completed: false }
  ],
  resources: [
    {
      title: "Google Project Management Professional Certificate",
      provider: "Coursera",
      link: "https://www.coursera.org/professional-certificates/google-project-management",
      type: "Professional Certificate",
      duration: "6 months",
      level: "Beginner",
      roadmap: [
        { step: 1, title: "Foundations of Project Management", desc: "Learn project basics and Agile/Waterfall frameworks.", completed: false },
        { step: 2, title: "Project Execution", desc: "Manage tasks, risks, and deliverables effectively.", completed: false },
        { step: 3, title: "Capstone Project", desc: "Apply project management skills to a real-world scenario.", completed: false }
      ]
    },
    {
      title: "Certified ScrumMaster (CSM)",
      provider: "Scrum Alliance",
      link: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster",
      type: "Certification",
      duration: "2–3 days (intensive training)",
      level: "Intermediate",
      roadmap: [
        { step: 1, title: "Scrum Framework", desc: "Understand roles, events, and artifacts.", completed: false },
        { step: 2, title: "Agile Mindset", desc: "Learn iterative development and servant leadership.", completed: false },
        { step: 3, title: "Certification Exam", desc: "Pass the test to become a ScrumMaster.", completed: false }
      ]
    },
    {
      title: "Project Management Professional (PMP)",
      provider: "PMI",
      link: "https://www.pmi.org/certifications/project-management-pmp",
      type: "Certification",
      duration: "4–6 months prep",
      level: "Advanced",
      roadmap: [
        { step: 1, title: "PMBOK Guide", desc: "Study project management standards and practices.", completed: false },
        { step: 2, title: "Practice Exams", desc: "Take mock tests to assess readiness.", completed: false },
        { step: 3, title: "PMP Certification Exam", desc: "Pass the globally recognized PMP exam.", completed: false }
      ]
    }
  ]
},

   {
  id: 7,
  title: "Cybersecurity Specialist",
  description: "Protect organizations from digital security threats and vulnerabilities",
  salaryRange: "₹6,00,000–₹30,00,000",
  growthProspect: "30% growth by 2030", 
  requiredSkills: ["Network Security", "Linux", "Forensics", "Risk Assessment", "Monitoring"],
  interests: ["Security", "Problem Solving", "Systems", "Investigation"],
  education: ["Computer Science", "Information Security", "Cybersecurity"],
  roadmap: [
    { step: 1, title: "Networking & Linux", desc: "Master TCP/IP, OSI model, and Linux basics.", duration: "1-2 months", completed: false },
    { step: 2, title: "Security Fundamentals", desc: "Learn cryptography, threat models, and common attacks.", duration: "2 months", completed: false },
    { step: 3, title: "Hands-on Labs & CTFs", desc: "Practice in labs and Capture The Flag challenges.", duration: "3 months", completed: false },
    { step: 4, title: "Certifications & Specialization", desc: "Pursue CompTIA Security+, OSCP or other specialist certs.", duration: "3-6 months", completed: false }
  ],
  resources: [
    {
      title: "Introduction to Cyber Security Specialization",
      provider: "Coursera (NYU)",
      link: "https://www.coursera.org/specializations/intro-cyber-security",
      type: "Specialization",
      duration: "4 months",
      level: "Beginner",
      roadmap: [
        { step: 1, title: "Cybersecurity Basics", desc: "Learn threats, vulnerabilities, and risk.", completed: false },
        { step: 2, title: "Cryptography", desc: "Understand encryption, hashing, and secure communication.", completed: false },
        { step: 3, title: "Defensive Strategies", desc: "Firewalls, IDS, and best practices.", completed: false }
      ]
    },
    {
      title: "CompTIA Security+ Certification",
      provider: "CompTIA",
      link: "https://www.comptia.org/certifications/security",
      type: "Certification",
      duration: "3–6 months prep",
      level: "Intermediate",
      roadmap: [
        { step: 1, title: "Security Domains", desc: "Study threats, attacks, and vulnerabilities.", completed: false },
        { step: 2, title: "Implementation", desc: "Secure networks, devices, and applications.", completed: false },
        { step: 3, title: "Practice Exams", desc: "Take mock tests to prepare for the Security+ exam.", completed: false }
      ]
    },
    {
      title: "Offensive Security Certified Professional (OSCP)",
      provider: "Offensive Security",
      link: "https://www.offsec.com/courses/pen-200/",
      type: "Certification",
      duration: "3–6 months (intensive)",
      level: "Advanced",
      roadmap: [
        { step: 1, title: "Penetration Testing Basics", desc: "Learn reconnaissance, scanning, and exploitation.", completed: false },
        { step: 2, title: "Hands-on Labs", desc: "Practice real-world scenarios in a lab environment.", completed: false },
        { step: 3, title: "OSCP Exam", desc: "Complete a 24-hour hands-on hacking exam.", completed: false }
      ]
    }
  ]
}
  ],

  skills: [
    "Programming", "Mathematics", "Problem Solving", "Communication", "Leadership", 
    "Creativity", "Analytics", "Design", "Teamwork", "Organization", "Logic", 
    "Research", "Strategy", "Finance", "Marketing", "Security", "Networking"
  ],
  interests: [
    "Technology", "Innovation", "Problem Solving", "Analytics", "Research", 
    "Communication", "Creativity", "Business", "People", "Design", 
    "User Experience", "Finance", "Economics", "Leadership", "Organization", "Security"
  ],
  learningResources: [
    {
      title: "Python Programming Course",
      provider: "Coursera",
      type: "Course",
      duration: "6 weeks",
      level: "Beginner"
    },
    {
      title: "Data Science Fundamentals",
      provider: "edX",
      type: "Specialization",
      duration: "4 months",
      level: "Intermediate"
    },
    {
      title: "Digital Marketing Certification",
      provider: "Google",
      type: "Certification",
      duration: "3 months",
      level: "Beginner"
    },
    {
      title: "UX Design Principles",
      provider: "Coursera",
      type: "Course",
      duration: "8 weeks",
      level: "Beginner"
    }
  ]
};

// User Profile Data
let userProfile = {
  personal: {},
  skills: [],
  interests: [],
  academic: {},
  personality: {},
  recommendations: []
};

// Personality Quiz Questions
const personalityQuestions = [
  {
    question: "I prefer working in teams rather than alone",
    trait: "teamwork"
  },
  {
    question: "I enjoy solving complex logical problems",
    trait: "analytical"
  },
  {
    question: "I like to lead and take charge of projects",
    trait: "leadership"
  },
  {
    question: "I am comfortable with public speaking",
    trait: "communication"
  },
  {
    question: "I enjoy creative and artistic activities",
    trait: "creativity"
  },
  {
    question: "I prefer structured and organized work environments",
    trait: "organization"
  },
  {
    question: "I am interested in new technologies and innovations",
    trait: "technology"
  },
  {
    question: "I enjoy analyzing data and finding patterns",
    trait: "analytics"
  },
  {
    question: "I like helping and mentoring others",
    trait: "people"
  },
  {
    question: "I am comfortable with risk and uncertainty",
    trait: "risk"
  }
];

// Current step tracking
let currentStep = 1;
let maxSteps = 5;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  setupFormSteps();
  populateSkills();
  populateInterests();
  populatePersonalityQuiz();
  populateLearningResources();
  setupAuthModal();
  setupCareerModal();
}

// Navigation Setup
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.dataset.section;
      showSection(sectionId);
      
      // Update active nav link
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Get Started Button
  document.getElementById('getStartedBtn').addEventListener('click', () => {
    showSection('profile-setup');
  });
}

// Section Management
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
    section.classList.add('hidden');
  });
  
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.remove('hidden');
    targetSection.classList.add('active');
  }
}

// Form Steps Setup
function setupFormSteps() {
  // Step 1 - Personal Info
  document.getElementById('nextStep1').addEventListener('click', () => {
    if (validateStep1()) {
      savePersonalInfo();
      moveToStep(2);
    }
  });

  // Step 2 - Skills
  document.getElementById('nextStep2').addEventListener('click', () => {
    if (validateStep2()) {
      saveSkills();
      moveToStep(3);
    }
  });
  
  document.getElementById('prevStep2').addEventListener('click', () => moveToStep(1));

  // Step 3 - Interests
  document.getElementById('nextStep3').addEventListener('click', () => {
    if (validateStep3()) {
      saveInterests();
      moveToStep(4);
    }
  });
  
  document.getElementById('prevStep3').addEventListener('click', () => moveToStep(2));

  // Step 4 - Academic
  document.getElementById('nextStep4').addEventListener('click', () => {
    saveAcademic();
    moveToStep(5);
  });
  
  document.getElementById('prevStep4').addEventListener('click', () => moveToStep(3));

  // Step 5 - Personality
  document.getElementById('generateRecommendations').addEventListener('click', () => {
    if (validateStep5()) {
      savePersonality();
      generateCareerRecommendations();
    }
  });
  
  document.getElementById('prevStep5').addEventListener('click', () => moveToStep(4));
}

// Step Navigation
function moveToStep(step) {
  // Hide current step
  const currentStepEl = document.getElementById(`step${currentStep}`);
  currentStepEl.classList.remove('active');
  currentStepEl.classList.add('hidden');

  // Show new step
  const newStepEl = document.getElementById(`step${step}`);
  newStepEl.classList.remove('hidden');
  newStepEl.classList.add('active');

  // Update progress
  currentStep = step;
  updateProgress();
}

function updateProgress() {
  const progressFill = document.getElementById('progressFill');
  const progressPercent = (currentStep / maxSteps) * 100;
  progressFill.style.width = `${progressPercent}%`;

  // Update step indicators
  const steps = document.querySelectorAll('.step');
  steps.forEach((stepEl, index) => {
    const stepNumber = index + 1;
    stepEl.classList.remove('active', 'completed');
    
    if (stepNumber < currentStep) {
      stepEl.classList.add('completed');
    } else if (stepNumber === currentStep) {
      stepEl.classList.add('active');
    }
  });
}

// Populate Skills Grid
function populateSkills() {
  const skillsGrid = document.getElementById('skillsGrid');
  appData.skills.forEach((skill, index) => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `
      <input type="checkbox" id="skill-${index}" class="skill-checkbox" value="${skill}">
      <label for="skill-${index}" class="skill-label">${skill}</label>
    `;
    skillsGrid.appendChild(skillItem);
  });
}

// Populate Interests Grid
function populateInterests() {
  const interestsGrid = document.getElementById('interestsGrid');
  appData.interests.forEach((interest, index) => {
    const interestItem = document.createElement('div');
    interestItem.className = 'interest-item';
    interestItem.innerHTML = `
      <input type="checkbox" id="interest-${index}" class="interest-checkbox" value="${interest}">
      <label for="interest-${index}" class="interest-label">${interest}</label>
    `;
    interestsGrid.appendChild(interestItem);
  });
}

// Populate Personality Quiz
function populatePersonalityQuiz() {
  const quizContainer = document.getElementById('personalityQuiz');
  personalityQuestions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'quiz-question';
    questionDiv.innerHTML = `
      <h4>${q.question}</h4>
      <div class="quiz-options">
        <div class="quiz-option">
          <input type="radio" id="q${index}-1" name="q${index}" class="quiz-radio" value="1" data-trait="${q.trait}">
          <label for="q${index}-1" class="quiz-radio-label">Strongly Disagree</label>
        </div>
        <div class="quiz-option">
          <input type="radio" id="q${index}-2" name="q${index}" class="quiz-radio" value="2" data-trait="${q.trait}">
          <label for="q${index}-2" class="quiz-radio-label">Disagree</label>
        </div>
        <div class="quiz-option">
          <input type="radio" id="q${index}-3" name="q${index}" class="quiz-radio" value="3" data-trait="${q.trait}">
          <label for="q${index}-3" class="quiz-radio-label">Neutral</label>
        </div>
        <div class="quiz-option">
          <input type="radio" id="q${index}-4" name="q${index}" class="quiz-radio" value="4" data-trait="${q.trait}">
               <div class="quiz-option">
          <input type="radio" id="q${index}-5" name="q${index}" class="quiz-radio" value="5" data-trait="${q.trait}">
          <label for="q${index}-5" class="quiz-radio-label">Strongly Agree</label>
        </div>
      </div>
    `;
    quizContainer.appendChild(questionDiv);
  });
}

// Validation Functions
function validateStep1() {
  const name = document.getElementById('fullName').value.trim();
  const age = document.getElementById('age').value;
  const education = document.getElementById('education').value;
  
  if (!name || !age || !education) {
    alert('Please fill in all required fields.');
    return false;
  }
  return true;
}

function validateStep2() {
  const checkedSkills = document.querySelectorAll('.skill-checkbox:checked');
  if (checkedSkills.length === 0) {
    alert('Please select at least one skill.');
    return false;
  }
  return true;
}

function validateStep3() {
  const checkedInterests = document.querySelectorAll('.interest-checkbox:checked');
  if (checkedInterests.length === 0) {
    alert('Please select at least one interest.');
    return false;
  }
  return true;
}

function validateStep5() {
  const totalQuestions = personalityQuestions.length;
  let answeredQuestions = 0;
  
  for (let i = 0; i < totalQuestions; i++) {
    const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
    if (selectedOption) {
      answeredQuestions++;
    }
  }
  
  if (answeredQuestions < totalQuestions) {
    alert('Please answer all personality questions.');
    return false;
  }
  return true;
}

// Save Functions
function savePersonalInfo() {
  userProfile.personal = {
    name: document.getElementById('fullName').value.trim(),
    age: parseInt(document.getElementById('age').value),
    education: document.getElementById('education').value
  };
}

function saveSkills() {
  const checkedSkills = document.querySelectorAll('.skill-checkbox:checked');
  userProfile.skills = Array.from(checkedSkills).map(checkbox => checkbox.value);
}

function saveInterests() {
  const checkedInterests = document.querySelectorAll('.interest-checkbox:checked');
  userProfile.interests = Array.from(checkedInterests).map(checkbox => checkbox.value);
}

function saveAcademic() {
  userProfile.academic = {
    gpa: parseFloat(document.getElementById('gpa').value) || 0,
    field: document.getElementById('academicField').value
  };
}

function savePersonality() {
  const personalityTraits = {};
  
  personalityQuestions.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
    if (selectedOption) {
      const trait = selectedOption.dataset.trait;
      const score = parseInt(selectedOption.value);
      personalityTraits[trait] = (personalityTraits[trait] || 0) + score;
    }
  });
  
  userProfile.personality = personalityTraits;
}

// AI Career Recommendation Engine
function generateCareerRecommendations() {
  showLoadingScreen();
  
  // Simulate API call with timeout
  setTimeout(() => {
    // Call the AI recommendation function
    const recommendations = calculateCareerMatches();
    userProfile.recommendations = recommendations;
    
    hideLoadingScreen();
    populateDashboard();
    showSection('dashboard');
  }, 3000); // Simulate AI processing time
}

function calculateCareerMatches() {
  const matches = appData.careers.map(career => {
    let score = 0;
    let maxScore = 0;
    
    // Skills matching (40% weight)
    const skillWeight = 0.4;
    const skillMatches = career.requiredSkills.filter(skill => 
      userProfile.skills.includes(skill)
    ).length;
    score += (skillMatches / career.requiredSkills.length) * skillWeight * 100;
    maxScore += skillWeight * 100;
    
    // Interest matching (30% weight)
    const interestWeight = 0.3;
    const interestMatches = career.interests.filter(interest => 
      userProfile.interests.includes(interest)
    ).length;
    if (career.interests.length > 0) {
      score += (interestMatches / career.interests.length) * interestWeight * 100;
    }
    maxScore += interestWeight * 100;
    
    // Education matching (20% weight)
    const educationWeight = 0.2;
    const userField = userProfile.academic.field;
    if (userField && career.education.some(edu => 
      edu.toLowerCase().includes(userField.toLowerCase()) || 
      userField.toLowerCase().includes(edu.toLowerCase())
    )) {
      score += educationWeight * 100;
    }
    maxScore += educationWeight * 100;
    
    // Personality matching (10% weight)
    const personalityWeight = 0.1;
    let personalityScore = 0;
    
    // Simple personality-career alignment logic
    if (career.title.includes('Engineer') || career.title.includes('Data Scientist') || career.title.includes('Cybersecurity')) {
      personalityScore += (userProfile.personality.analytical || 0) * 2;
      personalityScore += (userProfile.personality.technology || 0) * 2;
    }
    if (career.title.includes('Manager')) {
      personalityScore += (userProfile.personality.leadership || 0) * 2;
      personalityScore += (userProfile.personality.communication || 0) * 2;
    }
    if (career.title.includes('Designer')) {
      personalityScore += (userProfile.personality.creativity || 0) * 2;
    }
    if (career.title.includes('Analyst')) {
      personalityScore += (userProfile.personality.analytics || 0) * 2;
    }
    
    personalityScore = Math.min(personalityScore / 10, 1); // Normalize to 0-1
    score += personalityScore * personalityWeight * 100;
    maxScore += personalityWeight * 100;
    
    // Normalize final score
    const finalScore = Math.min(Math.round((score / maxScore) * 100), 100);
    
    return {
      ...career,
      matchScore: finalScore
    };
  });
  
  // Sort by match score and return top matches
  return matches.sort((a, b) => b.matchScore - a.matchScore);
}

// Dashboard Population
function populateDashboard() {
  populateProfileSummary();
  createCareerChart();
  displayCareerRecommendations();
}

function populateProfileSummary() {
  const summaryEl = document.getElementById('profileSummary');
  summaryEl.innerHTML = `
    <div class="profile-item">
      <span class="profile-label">Name:</span>
      <span class="profile-value">${userProfile.personal.name}</span>
    </div>
    <div class="profile-item">
      <span class="profile-label">Age:</span>
      <span class="profile-value">${userProfile.personal.age}</span>
    </div>
    <div class="profile-item">
      <span class="profile-label">Education:</span>
      <span class="profile-value">${userProfile.personal.education.replace('-', ' ').toUpperCase()}</span>
    </div>
    <div class="profile-item">
      <span class="profile-label">Skills:</span>
      <span class="profile-value">${userProfile.skills.length}</span>
    </div>
    <div class="profile-item">
      <span class="profile-label">Interests:</span>
      <span class="profile-value">${userProfile.interests.length}</span>
    </div>
  `;
}

function createCareerChart() {
  const ctx = document.getElementById('careerChart').getContext('2d');
  const topCareers = userProfile.recommendations.slice(0, 5);
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: topCareers.map(career => career.title),
      datasets: [{
        label: 'Match Score (%)',
        data: topCareers.map(career => career.matchScore),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
        borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

function displayCareerRecommendations() {
  const recommendationsEl = document.getElementById('careerRecommendations');
  recommendationsEl.innerHTML = '';
  
  userProfile.recommendations.forEach(career => {
    const careerCard = document.createElement('div');
    careerCard.className = 'career-card';
    careerCard.dataset.careerId = career.id;
    
    careerCard.innerHTML = `
      <div class="career-header">
        <h3 class="career-title">${career.title}</h3>
        <div class="match-score">${career.matchScore}%</div>
      </div>
      <div class="career-content">
        <p class="career-description">${career.description}</p>
        <div class="career-details">
          <div class="detail-item">
            <div class="detail-label">Salary Range:</div>
            <div class="detail-value">${career.salaryRange}</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Growth Prospect:</div>
            <div class="detail-value">${career.growthProspect}</div>
          </div>
        </div>
        <div class="career-skills">
          <div class="detail-label">Required Skills:</div>
          <div class="skill-tags">
            ${career.requiredSkills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
    
    careerCard.addEventListener('click', () => showCareerDetails(career));
    recommendationsEl.appendChild(careerCard);
  });
}

// Career Modal
function setupCareerModal() {
  const modal = document.getElementById('careerModal');
  const closeBtn = document.getElementById('closeModal');
  const backdrop = document.querySelector('#careerModal .modal-backdrop');
  
  closeBtn.addEventListener('click', hideCareerModal);
  backdrop.addEventListener('click', hideCareerModal);
}

function showCareerDetails(career) {
  const modal = document.getElementById('careerModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  modalTitle.textContent = career.title;
  
  // Base career details
  modalBody.innerHTML = `
    <div class="match-score" style="margin-bottom: 16px; display: inline-block;">
      ${career.matchScore}% Match
    </div>
    
    <p><strong>Description:</strong> ${career.description}</p>
    
    <div style="margin: 16px 0;">
      <h4>Career Details</h4>
      <p><strong>Salary Range:</strong> ${career.salaryRange}</p>
      <p><strong>Growth Prospect:</strong> ${career.growthProspect}</p>
    </div>
    
    <div style="margin: 16px 0;">
      <h4>Required Skills</h4>
      <div class="skill-tags">
        ${career.requiredSkills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
    </div>
    
    <div style="margin: 16px 0;">
      <h4>Relevant Interests</h4>
      <div class="skill-tags">
        ${career.interests.map(interest => `<span class="skill-tag">${interest}</span>`).join('')}
      </div>
    </div>
    
    <div style="margin: 16px 0;">
      <h4>Educational Background</h4>
      <div class="skill-tags">
        ${career.education.map(edu => `<span class="skill-tag">${edu}</span>`).join('')}
      </div>
    </div>
    
    <div style="margin: 16px 0;">
      <h4>Learning Roadmap</h4>
      <div class="roadmap">
        ${career.roadmap.map(step => `
          <div class="roadmap-step">
            <h5>Step ${step.step}: ${step.title}</h5>
            <p>${step.desc}</p>
            <div class="roadmap-duration">Duration: ${step.duration}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Add resources if available
  if (career.resources && career.resources.length > 0) {
    modalBody.innerHTML += `
      <div style="margin: 16px 0;">
        <h4>Recommended Learning Resources</h4>
        <div class="resources">
          ${career.resources.map(res => `
            <div class="resource-card">
              <h5>${res.title}</h5>
              <p><strong>Provider:</strong> ${res.provider}</p>
              <p><strong>Type:</strong> ${res.type}</p>
              <p><strong>Duration:</strong> ${res.duration}</p>
              <p><strong>Level:</strong> ${res.level}</p>
              <a href="${res.link}" target="_blank" class="resource-link">Go to Course</a>
              <button class="roadmap-btn" onclick='showResourceRoadmap(${JSON.stringify(res.roadmap)})'>
                View Roadmap
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  modal.classList.remove('hidden');
  modal.classList.add('active');
}

// New helper function for resource roadmaps
function showResourceRoadmap(roadmap) {
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <h4>Course Roadmap</h4>
    <div class="roadmap">
      ${roadmap.map(step => `
        <div class="roadmap-step">
          <h5>Step ${step.step}: ${step.title}</h5>
          <p>${step.desc}</p>
        </div>
      `).join('')}
    </div>
    <button onclick="hideCareerModal()">⬅ Back</button>
  `;
}


function hideCareerModal() {
  const modal = document.getElementById('careerModal');
  modal.classList.remove('active');
  modal.classList.add('hidden');
}

// Learning Resources
function populateLearningResources() {
  const resourcesGrid = document.getElementById('resourcesGrid');
  
  appData.learningResources.forEach(resource => {
    const resourceCard = document.createElement('div');
    resourceCard.className = 'resource-card';
    
    resourceCard.innerHTML = `
      <div class="resource-header">
        <h3 class="resource-title">${resource.title}</h3>
        <div class="resource-provider">${resource.provider}</div>
      </div>
      <div class="resource-content">
        <div class="resource-details">
          <span class="resource-detail">Type: ${resource.type}</span>
          <span class="resource-detail">Duration: ${resource.duration}</span>
          <span class="resource-detail">Level: ${resource.level}</span>
        </div>
        <a href="#" class="resource-link">Explore Resource</a>
      </div>
    `;
    
    resourcesGrid.appendChild(resourceCard);
  });
}

// Loading Screen
function showLoadingScreen() {
  document.getElementById('loadingScreen').classList.remove('hidden');
  document.getElementById('loadingScreen').classList.add('active');
}

function hideLoadingScreen() {
  document.getElementById('loadingScreen').classList.remove('active');
  document.getElementById('loadingScreen').classList.add('hidden');
}

// Authentication functionality
function setupAuthModal() {
  const authBtn = document.getElementById('authBtn');
  const authModal = document.getElementById('authModal');
  const closeAuthBtn = document.getElementById('closeAuthModal');
  const authTabs = document.querySelectorAll('.auth-tab');
  const authForms = document.querySelectorAll('.auth-form');
  
  // Open auth modal
  authBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showAuthModal();
  });
  
  // Close auth modal
  closeAuthBtn.addEventListener('click', hideAuthModal);
  document.querySelector('#authModal .modal-backdrop').addEventListener('click', hideAuthModal);
  
  // Switch between login and signup tabs
  authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabName = tab.dataset.tab;
      
      // Update active tab
      authTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Show corresponding form
      authForms.forEach(form => {
        form.classList.remove('active');
        form.classList.add('hidden');
      });
      
      const activeForm = document.getElementById(`${tabName}Form`);
      activeForm.classList.remove('hidden');
      activeForm.classList.add('active');
    });
  });
  
  // Handle login form submission
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    handleLogin();
  });
  
  // Handle signup form submission
  document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    handleSignup();
  });
  
  // Forgot password link
  document.getElementById('forgotPassword').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Password reset functionality coming soon!');
  });
}
function showResourceRoadmap(roadmap) {
  const modal = document.getElementById('careerModal');
  const modalBody = document.getElementById('modalBody');

  modalBody.innerHTML = `
    <h4>Course Roadmap</h4>
    <div class="roadmap">
      ${roadmap.map(step => `
        <div class="roadmap-step">
          <h5>Step ${step.step}: ${step.title}</h5>
          <p>${step.desc}</p>
        </div>
      `).join('')}
    </div>
    <button onclick="populateDashboard()">⬅ Back to Career</button>
  `;
}

function showAuthModal() {
  const authModal = document.getElementById('authModal');
  authModal.classList.remove('hidden');
  authModal.classList.add('active');
}

function hideAuthModal() {
  const authModal = document.getElementById('authModal');
  authModal.classList.remove('active');
  authModal.classList.add('hidden');
}

function handleLogin() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  // Simple validation
  if (!email || !password) {
    alert('Please fill in all fields');
    return;
  }
  
  // Simulate login process
  // In a real app, you would make an API call here
  console.log('Logging in with:', { email, password });
  
  // Show success message and close modal
  alert('Login successful!');
  hideAuthModal();
  
  // Update UI to show user is logged in
  document.getElementById('authBtn').textContent = 'My Account';
}

function handleSignup() {
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  
  // Validation
  if (!name || !email || !password || !confirmPassword) {
    alert('Please fill in all fields');
    return;
  }
  
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }
  
  if (password.length < 6) {
    alert('Password must be at least 6 characters long');
    return;
  }
  
  // Simulate signup process
  // In a real app, you would make an API call here
  console.log('Signing up with:', { name, email, password });
  
  // Show success message and close modal
  alert('Account created successfully! You can now login.');
  
  // Switch to login tab
  document.querySelector('[data-tab="login"]').click();
  document.getElementById('loginEmail').value = email;
}

// Add roadmap styles
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .roadmap {
      margin-top: 15px;
    }
    
    .roadmap-step {
      background: #f8f9fa;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 10px;
    }
    
    .roadmap-step h5 {
      margin: 0 0 8px 0;
      color: #4361ee;
    }
    
    .roadmap-step p {
      margin: 0 0 8px 0;
      color: #6c757d;
    }
    
    .roadmap-duration {
      font-size: 0.8rem;
      color: #6c757d;
      font-style: italic;
    }
  </style>
`);