import linkedinIcon from '../../assets/img/linkedin.svg';
import githubIcon from '../../assets/img/github.svg';

import './style.scss';

export function InfoCard({
  profileImageUrl,
  selfDescription,
  name,
  title,
  linkedinUrl,
  githubUrl,
}) {
  return (
    <div className="card">
      <img className="profileImage" src={profileImageUrl} alt={selfDescription} />
      <div className="texts">
        <h2>{name}</h2>
        <p>{title}</p>
        <div className="icons">
          <a href={linkedinUrl}>
            <img className="icon" src={linkedinIcon} alt={`${name} LinkedIn URL`} />
          </a>
          <a href={githubUrl}>
            <img className="icon" src={githubIcon} alt={`${name} GitHub URL`} />
          </a>
        </div>
      </div>
    </div>
  );
}
