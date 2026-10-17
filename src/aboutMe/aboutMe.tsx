import React from 'react';
import { Link } from 'react-router-dom';
import './aboutMe.css';
import Header from '../component/Header';

interface TechCategory {
  category: string;
  skills: string[];
}

const techStack: TechCategory[] = [
  {
    category: 'Frontend Development',
    skills: ['React', 'Next.js', 'TypeScript', 'C#', '.NET', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend & Microservices',
    skills: ['Go', 'Python', 'node.js', 'FastAPI', 'WebSockets', 'WebRTC'],
  },
  {
    category: 'AI & Computer Vision',
    skills: ['YOLOv8', 'OpenCV', 'PyTorch', 'aichat-vedio'],
  },
  {
    category: 'Tools & Ecosystem',
    skills: ['Linux (Ubuntu)', 'Git', 'Supabase', 'Vercel', 'Render', 'Docker'],
  },
];

export const AboutMe: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <Header />
      <div className="about-container">
        
        <div className="about-top-actions">
          <Link to="/" className="back-home-btn">
            ← العودة للرئيسية
          </Link>
          <div className="algeria-flag-container">
            <img 
              src="https://flagcdn.com/w160/dz.png" 
              alt="علم الجزائر" 
              className="algeria-flag-img"
            />
          </div>
        </div>

        <div className="about-header">
          <span className="section-subtitle">نبذة عني</span>
          <h2 className="section-title">من أنا وماذا أعمل؟</h2>
          <div className="title-underline-left"></div>
        </div>

        <div className="about-grid">
          <div className="about-text-content">
            <h3 className="about-heading">
              مطور برمجيات متكامل ومؤسس مشاريع تقنية
            </h3>
            <p className="about-description">
              أنا <strong>Mohamad Mellal</strong>، مطور برمجيات شغوف ببناء حلول برمجية عالية الأداء ومعماريات متكاملة من الصفر. أركز على تطوير تطبيقات الويب والأنظمة المتقدمة التي تجمع بين السرعة، الكود النظيف، والمظهر العصري.
            </p>
            <p className="about-description">
              أعتمد في عملي على المبادئ الهندسية الأساسية (First-Principles)، حيث يهمني تحسين أداء الأنظمة وتجربة المستخدم بدون تعقيدات زائدة، سواء كان ذلك في تطوير واجهات الويب الحية أو بناء خدمات الخلفية وأنظمة رؤية الحاسوب.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">+5</span>
                <span className="stat-label">مشاريع رئيسية متكاملة</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">تركيز على الأداء والكود النظيف</span>
              </div>
            </div>
          </div>

          <div className="tech-stack-card">
            <h3 className="tech-card-title">التقنيات والأدوات</h3>
            <div className="tech-categories">
              {techStack.map((item, index) => (
                <div key={index} className="tech-group">
                  <h4 className="tech-category-name">{item.category}</h4>
                  <div className="skills-tags">
                    {item.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;