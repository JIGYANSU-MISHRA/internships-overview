import './App.css';
import InternshipCard from './InternshipCard';

const internships = [
  {
    image: '/Images/generativeai.png',
    title: "Generative AI",
    description: "Explore advanced generative Ai. Work on projects involving LLMs and AI agents.",
    buttonText: "Apply Now",
  },
  {
    image: '/Images/agentic.png',
    title: "Agentic AI Internship",
    description: "Work on cutting-edge projects in agentic ai. Collaborate with industry experts.",
    buttonText: "Apply Now",
  },
  {
    image: '/Images/datasciecne1.png',
    title: "Data Science Internship",
    description: "Practical training in data analysis, machine learning, and AI model deployment.",
    buttonText: "Apply Now",
  },
  {
    image: '/Images/ai deveopment.png',
    title: "AI Development Internship",
    description: "Develop real-world AI applications by working on live projects.",
    buttonText: "Apply Now",
  },
  {
    image: '/Images/ChatGPT Image Jun 24, 2025, 11_51_12 AM.png',
    title: "Machine Learning Internship",
    description: "Dive into machine learning algorithms and their applications.",
    buttonText: "Apply Now",
  },
  {
    image: '/Images/ai in health.png',
    title: "AI in Healthcare Internship",
    description: "Apply AI to healthcare data, diagnostics, and patient care solutions.",
    buttonText: "Apply Now",
  },
  {
    image: '/Images/ChatGPT Image Jun 24, 2025, 11_17_47 AM.png',
    title: "Front-end Internship",
    description: "Build user-friendly interfaces for AI applications.",
    buttonText: "Apply Now",
  },
  {
    image: '/Images/ChatGPT Image Jun 24, 2025, 11_25_58 AM.png',
    title: "Back-end Internship",
    description: "Develop robust server-side solutions for AI systems.",
    buttonText: "Apply Now",
  },
  {
    image: '/Images/testing.jpg',
    title: "Testing Internship",
    description: "Ensure the quality of AI applications through rigorous testing.",
    buttonText: "Apply Now",
  },
  {
    image: '/Images/devops internship.png',
    title: "DevOps Internship",
    description: "Explore the ethical implications of AI development.",
    buttonText: "Apply Now",
  },
  {
    image: '/Images/cloud computing.png',
    title: "Cloud Computing",
    description: "Explore the ethical implications of cloud computing.",
    buttonText: "Apply Now",
  },
];

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

function App() {
  const rows = chunkArray(internships, 3);
  return (
    <div className="internships-bg">
      <h1 className="internships-title">Explore Our Internships</h1>
      {rows.map((row, idx) => (
        <div className="internships-cards-row" key={idx}>
          {row.map((props, i) => (
            <InternshipCard key={i} {...props} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;

