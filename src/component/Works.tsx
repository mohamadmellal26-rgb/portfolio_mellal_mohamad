import React, { useRef } from 'react';
import './Works.css';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

const projectsData: Project[] = [
  {
    id: '5',
    title: 'Creative UI',
    description: 'مكتبة ومنصة مكونات واجهة مستخدم (UI Components) حديثة وتفاعلية مصممة لبناء مواقع سريعة وبأداء عالٍ.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'UI Library'],
    imageUrl: '/projct5.jpeg',
  },
  {
    id: '1',
    title: 'Live-Alio',
    description: 'منصة تواصل صوتي وفيديو مباشرة وفورية تعمل عبر الويب باستخدام Go و WebSockets و WebRTC و React.',
    tags: ['Go', 'WebSockets', 'WebRTC', 'React', 'TypeScript'],
    imageUrl: '/projct1.jpeg',
  },
  {
    id: '2',
    title: 'FLUXGO 3D',
    description: 'منصة إنشاء وتصميم مواقع ثلاثية الأبعاد تفاعلية بسيطة تعتمد على React و TSX.',
    tags: ['React', 'Three.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/projct2.jpeg',
  },
  {
    id: '3',
    title: 'LumaCompiler',
    description: 'محرر أكواد برمجي عبر الإنترنت ومبيئة تجميع تعمل بتقنية WebAssembly لأداء فائق.',
    tags: ['WebAssembly', 'React', 'Monaco Editor', 'Node.js'],
    imageUrl: '/projct3.jpeg',
  },
  {
    id: '4',
    title: 'CineMorph',
    description: 'واجهة وتطبيق متكامل لتعديل وتحرير الفيديو عبر الويب بأداء عالٍ، خفيف ومبني بالكامل باستخدام React و TypeScript.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Canvas API'],
    imageUrl: '/projct4.jpeg',
  },
];

export const Works: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="works-section" id="projects">
      <div className="works-container">
        
        <div className="works-header-flex">
          <div>
            <span className="section-subtitle">أعمالي المختارة</span>
            <h2 className="section-title">المشاريع والمبادرات</h2>
            <div className="title-underline-left"></div>
          </div>
          
          <div className="scroll-nav-btns">
            <button className="scroll-btn" onClick={() => scroll('left')} aria-label="السابق">
              ←
            </button>
            <button className="scroll-btn" onClick={() => scroll('right')} aria-label="التالي">
              →
            </button>
          </div>
        </div>

        <div className="projects-scrollx-container" ref={scrollRef}>
          {projectsData.map((project) => (
            <div key={project.id} className="project-card-horizontal">
              <div className="card-image-wrapper">
                <img src={project.imageUrl} alt={project.title} className="card-image" />
              </div>

              <div className="card-content">
                <div className="tags-list">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag-item">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Works;