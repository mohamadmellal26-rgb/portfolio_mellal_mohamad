import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import './SkillsPage.css';

interface SkillItem {
  name: string;
  iconUrl: string;
  level: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'الأنظمة والخدمات الخلفية (Backend & Core Systems)',
    description: 'بناء معماريات برمجية عالية الأداء والاستجابة بالاعتماد على المبادئ الهندسية الأولى.',
    skills: [
      { name: 'Go (Golang)', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', level: 'متقدم' },
      { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 'متقدم' },
      { name: 'FastAPI', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', level: 'متقدم' },
      { name: 'WebSockets & WebRTC', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg', level: 'متقدم' },
      { name: 'PostgreSQL & Supabase', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', level: 'متقدم' },
      { name: 'render', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd45zZTTbgf8FuDp--bpc6LldJtUJwTz7Lir8j90YOpg&s=10', level: 'server backend' },
      { name: 'Ngrok', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumoYnFKV4JJUO331ukI3hJhqjX72ZIvpMhYf1-Mrk9w&s', level: 'سرفر عالمي يعمل من جهازك' },
    ],
  },
  {
    title: 'الذكاء الاصطناعي ورؤية الحاسوب (AI & Computer Vision)',
    description: 'نماذج رؤية وتتبع المعالم وتسريع المعالجة الفورية للصورة والفيديو.',
    skills: [
      { name: 'YOLOv8 / YOLO', iconUrl: 'https://hdrobots.com/wp-content/uploads/2025/01/yolo-logo.svg', level: 'تتبع كائنات فوري' },
      { name: 'OpenCV', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', level: 'معالجة صور' },
      { name: 'PyTorch', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', level: 'تدريب نماذج' },
    ],
  },
  {
    title: 'الواجهات الأمامية والتفاعل (Frontend & Web3D)',
    description: 'تجارب حديثة بسرعة عالية وبناء مكونات مخصصة بدون مكتبات ثقيلة.',
    skills: [
      { name: '.NET / C#', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', level: 'متقدم' },
      { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 'متقدم' },
      { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 'متقدم' },
      { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', level: 'متقدم' },
      { name: 'Tailwind CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', level: 'متقدم' },
      { name: 'WebAssembly (WASM)', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wasm/wasm-original.svg', level: 'أداء عالي' },
      { name: 'Vite', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg', level: 'بناء سريع' },
    ],
  },
  {
    title: 'البيئة والأدوات الهندسية (Dev Environment & DevOps)',
    description: 'أدوات التحكم والتشغيل التلقائي وإدارة البنية التحتية.',
    skills: [
      { name: 'Linux (Ubuntu)', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhxXXxnzZfJYHH1SPdjcIxJCdR1Q4p_mDKYdd-aCL8g&s=10', level: 'بيئة العمل الرئيسية' },
      { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 'حاويات' },
      { name: 'Git & GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 'إدارة الكود' },
      { name: 'Vercel & Render', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', level: 'استضافة وسيرفرات' },
    ],
  },
];

export const SkillsPage: React.FC = () => {
  return (
    <div className="skills-page-wrapper">
      <Header />
      
      <main className="skills-section">
        <div className="skills-container">
          
          {/* زر الرجوع */}
          <div className="skills-top-bar">
            <Link to="/" className="back-btn">
              ← العودة للرئيسية
            </Link>
          </div>

          {/* رأس الصفحة */}
          <div className="skills-header">
            <span className="section-subtitle">الترسانة التقنية</span>
            <h2 className="section-title">المهارات والتقنيات التي أتقنها</h2>
            <div className="title-underline-left"></div>
          </div>

          {/* عرض الأقسام والمهارات */}
          <div className="categories-stack">
            {skillsData.map((cat, idx) => (
              <div key={idx} className="category-block">
                <div className="category-header">
                  <h3 className="category-title">{cat.title}</h3>
                  <p className="category-description">{cat.description}</p>
                </div>

                <div className="skills-grid">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-card">
                      <div className="skill-icon-wrapper">
                        <img src={skill.iconUrl} alt={skill.name} className="skill-icon" />
                      </div>
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
};

export default SkillsPage;