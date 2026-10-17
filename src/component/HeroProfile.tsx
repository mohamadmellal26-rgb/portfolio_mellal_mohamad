import React from 'react';
import './HeroProfile.css';

interface HeroProfileProps {
  name?: string;
  title?: string;
  bio?: string;
  avatarUrl?: string;
}

export const HeroProfile: React.FC<HeroProfileProps> = ({
  name = 'Mohamad Mellal',
  title = 'Full-Stack Software Engineer & Founder',
  bio = 'أبني حلولاً برمجية متكاملة وأنظمة ذكاء اصطناعي عالية الأداء. شغوف بتطوير التطبيقات وتصميم معماريات برمجية حديثة.',
  avatarUrl = '/avatar.jpg',
}) => {
  return (
    <section className="profile-hero-section">
      <div className="profile-container">
        <div className="profile-avatar-wrapper">
          <img src={avatarUrl} alt={name} className="profile-avatar" />
          <span className="status-indicator" title="Available for work"></span>
        </div>

        <div className="profile-info">
          <span className="profile-badge">Developer Portfolio</span>
          <h1 className="profile-name">{name}</h1>
          <h2 className="profile-title">{title}</h2>
          <p className="profile-bio">{bio}</p>

          <div className="profile-actions">
            <a href="#projects" className="btn btn-primary">عرض الأعمال</a>
            <a href="#contact" className="btn btn-outline">تواصل معي</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProfile;